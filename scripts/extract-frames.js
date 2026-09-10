const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

async function extractFrames() {
  const rootDir = path.resolve(__dirname, '..');
  const inputVideo = path.join(rootDir, 'head-turn.mp4');
  const outputDir = path.join(rootDir, 'public', 'frames');

  if (!fs.existsSync(inputVideo)) {
    console.error(`Error: Could not find ${inputVideo}`);
    process.exit(1);
  }

  // Ensure /public/frames directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);
  } else {
    // Clean old frames if any
    const oldFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.json'));
    console.log(`Cleaning ${oldFiles.length} existing files from ${outputDir}...`);
    for (const file of oldFiles) {
      fs.unlinkSync(path.join(outputDir, file));
    }
  }

  console.log(`Found ffmpeg binary: ${ffmpegPath}`);
  console.log(`Input video: ${inputVideo}`);
  console.log(`Extracting frames at 30 fps to: ${outputDir}`);

  const outputPattern = path.join(outputDir, 'frame_%04d.jpg');

  // FFmpeg arguments:
  // -vf "fps=30" -> sample at 30 frames per second
  // -q:v 3 -> high quality JPEG compression (1=highest, 31=lowest)
  const args = [
    '-i', inputVideo,
    '-vf', 'fps=30',
    '-q:v', '3',
    outputPattern
  ];

  console.log(`Running: ${ffmpegPath} ${args.join(' ')}`);

  const ffmpegProcess = spawn(ffmpegPath, args, { stdio: 'inherit' });

  ffmpegProcess.on('close', (code) => {
    if (code === 0) {
      const frames = fs.readdirSync(outputDir).filter(f => f.startsWith('frame_') && f.endsWith('.jpg')).sort();
      console.log(`\n✅ Extraction successful! Total frames extracted: ${frames.length}`);

      // Generate manifest.json for frontend preloading
      const manifest = {
        totalFrames: frames.length,
        fps: 30,
        pattern: '/frames/frame_%04d.jpg',
        frames: frames.map(f => `/frames/${f}`)
      };

      const manifestPath = path.join(outputDir, 'manifest.json');
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      console.log(`✅ Generated frames manifest at: ${manifestPath}`);
    } else {
      console.error(`❌ FFmpeg exited with error code: ${code}`);
      process.exit(code);
    }
  });
}

extractFrames().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});

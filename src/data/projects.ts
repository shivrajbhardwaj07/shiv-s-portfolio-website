export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  client: string;
  category: string;
  year: string;
  metricLabel: string;
  metricValue: string;
  techStack: string[];
  summary: string;
  visualColor: string;
  accentBadge: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "apex-kinetics",
    number: "01",
    name: "APEX KINETICS",
    client: "Apex Autonomous Corp",
    category: "Web Architecture // Edge Platform",
    year: "2025",
    metricLabel: "Conversion Velocity",
    metricValue: "+314% ARR",
    techStack: ["Next.js 16", "Cloudflare Workers", "GSAP ScrollTrigger", "Edge DB"],
    summary:
      "Enterprise edge platform replacing an 8-second slow legacy monolith. Sub-40ms global latency resulting in immediate 3.1x checkout conversion acceleration.",
    visualColor: "from-emerald-950/80 via-black to-zinc-950",
    accentBadge: "100/100 LIGHTHOUSE",
  },
  {
    id: "neuralflow-ai",
    number: "02",
    name: "NEURALFLOW AI",
    client: "NeuralFlow Intelligence",
    category: "Product Building // B2B SaaS MVP",
    year: "2025",
    metricLabel: "Time to Market",
    metricValue: "18 Days",
    techStack: ["React 19", "Node.js", "Vector DB", "Stripe Metered", "Docker"],
    summary:
      "End-to-end multi-tenant AI workflow orchestrator built from scratch. Acquired 42 enterprise pilot contracts within 30 days of launch.",
    visualColor: "from-cyan-950/80 via-black to-zinc-950",
    accentBadge: "$1.8M SEED FUNDED",
  },
  {
    id: "hyperion-ventures",
    number: "03",
    name: "HYPERION CORE",
    client: "Hyperion Capital Syndicate",
    category: "Web Architecture // Institutional Portal",
    year: "2026",
    metricLabel: "Server Response",
    metricValue: "32ms TTFB",
    techStack: ["TypeScript", "Next.js App Router", "Tailwind", "PostgreSQL"],
    summary:
      "Institutional deal flow terminal engineered with brutalist aesthetics, military-grade security, and zero layout shift interactive telemetry.",
    visualColor: "from-amber-950/80 via-black to-zinc-950",
    accentBadge: "$420M VOLUME",
  },
  {
    id: "synapse-commerce",
    number: "04",
    name: "SYNAPSE COMMERCE",
    client: "Synapse Direct",
    category: "Conversion Engineering // E-Commerce Engine",
    year: "2025",
    metricLabel: "Checkout Abandonment",
    metricValue: "-52.6%",
    techStack: ["Headless Shopify", "Edge Middleware", "Custom Mini-Cart", "Kinetics"],
    summary:
      "High-velocity headless commerce framework engineered for viral TikTok/Instagram ad drops handling 25,000 requests per minute without degradation.",
    visualColor: "from-rose-950/80 via-black to-zinc-950",
    accentBadge: "25K REQ/MIN PEAK",
  },
  {
    id: "velocity-media-labs",
    number: "05",
    name: "VELOCITY LABS",
    client: "Velocity Media Group",
    category: "Social Attention Mechanics // Brand Engine",
    year: "2026",
    metricLabel: "Organic Attention",
    metricValue: "28.4M Views",
    techStack: ["Viral Pacing Engine", "Short-form Kinetics", "Lead Capture Funnel"],
    summary:
      "Engineered an automated algorithmic video distribution engine generating $840k in inbound pipeline with zero paid media spend.",
    visualColor: "from-violet-950/80 via-black to-zinc-950",
    accentBadge: "0$ AD SPEND ROI",
  },
];

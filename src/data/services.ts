export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  architectureSpec: {
    latency: string;
    scalability: string;
    guarantee: string;
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "platform-architecture",
    number: "01",
    title: "Platform Architecture",
    subtitle: "High-Performance Digital Infrastructure",
    tagline: "Sub-100ms platforms engineered for serious conversion velocity.",
    description:
      "We replace bloated, slow WordPress or fragile Webflow setups with custom, edge-rendered platforms engineered to handle millions of visitors with zero latency thrashing. Every millisecond of page load speed directly correlates with bottom-line revenue.",
    metrics: [
      { label: "Lighthouse Score", value: "99-100" },
      { label: "Average TTFB", value: "< 45ms" },
      { label: "Conversion Lift", value: "+38.4%" },
    ],
    deliverables: [
      "Custom Next.js / Edge Server Architecture",
      "GSAP Hardware-Accelerated Interactive Motion",
      "Global CDN & Multi-Region Caching Layer",
      "Zero-Hydration Mismatch UI Engineering",
      "Full SEO Semantic Architecture & Core Web Vitals Dominance",
    ],
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "GSAP / ScrollTrigger",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Edge Middleware",
    ],
    architectureSpec: {
      latency: "Global Edge < 50ms",
      scalability: "100k+ Concurrent Users",
      guarantee: "100/100 Core Web Vitals SLA",
    },
  },
  {
    id: "custom-product-builds",
    number: "02",
    title: "Custom Product Builds",
    subtitle: "Full-Stack SaaS & Scalable MVPs",
    tagline: "Turn founder vision into resilient, revenue-generating software.",
    description:
      "We architect and code full-scale web applications from blank repository to live paying customers in weeks, not quarters. No spaghetti code. No throwaway MVPs. Clean, typed, modular codebases designed to scale directly into Series A without a complete rewrite.",
    metrics: [
      { label: "Time-to-Production", value: "21 Days" },
      { label: "Code Coverage", value: "94.8%" },
      { label: "Zero-Downtime SLA", value: "99.99%" },
    ],
    deliverables: [
      "End-to-End SaaS Web Applications & Dashboards",
      "Stripe Billing, Tiered Subscriptions & Metered Usage",
      "Role-Based Access Control (RBAC) & Secure Auth",
      "High-Throughput Database Schemas (Postgres/Redis)",
      "Automated CI/CD Deployment Pipelines & Telemetry",
    ],
    techStack: [
      "React 19 / Next.js",
      "Node.js / Bun Runtime",
      "PostgreSQL / Supabase",
      "Prisma / Drizzle ORM",
      "Stripe Custom Elements",
      "Docker / Vercel Enterprise",
    ],
    architectureSpec: {
      latency: "API Roundtrip < 80ms",
      scalability: "Multi-tenant Sharding",
      guarantee: "Full IP Ownership & Clean Code Audit",
    },
  },
  {
    id: "social-attention-mechanics",
    number: "03",
    title: "Social Attention Mechanics",
    subtitle: "Brand Growth & Algorithmic Attention Loops",
    tagline: "Weaponizing attention to feed high-ticket customer acquisition.",
    description:
      "Traffic without conversion is vanity. Software without distribution is dead. We engineer calculated social media pipelines, high-retention narrative hooks, and algorithmic distribution engines that funnel cold eyeballs into high-ticket pipeline demand.",
    metrics: [
      { label: "Organic Impressions", value: "18.2M+" },
      { label: "Inbound Pipeline Value", value: "$1.4M+" },
      { label: "Retention Rate", value: "84.2%" },
    ],
    deliverables: [
      "Algorithmic Content Architecture & Hook Engineering",
      "Founder Personal Brand Authority Systems",
      "Video Attention Pacing & High-Retention Post-Production",
      "Multi-Platform Repurposing & Distribution Engines",
      "Frictionless Lead Capture & Conversion Funnel Loops",
    ],
    techStack: [
      "Dynamic Hook Kinetics",
      "Audience Cohort Analytics",
      "Automated Syndication Pipelines",
      "Custom Funnel Telemetry",
      "High-Velocity Media Encoding",
    ],
    architectureSpec: {
      latency: "Daily Automated Publishing Engine",
      scalability: "Multi-Channel Cross-Pollination",
      guarantee: "Strict Inbound Lead Attribution",
    },
  },
];

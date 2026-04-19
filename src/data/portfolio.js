export const PROFILE = {
  name: "Alperen Aydin",
  title: "Software Developer",
  tagline:
    "Software developer working across embedded systems, fullstack web, and game engines.",
  longTagline:
    "Computer Science @ UT Austin. I build full-stack web apps, embedded systems, and game engines, from CAN-bus telemetry to Roblox servers with a million+ users.",
  location: "Austin, TX",
  email: "alperenaydin1@gmail.com",
  phone: "713-307-2507",
  linkedin: "https://www.linkedin.com/in/alperenaydin1/",
  github: "https://github.com/WutIsHummus",
};

export const EDUCATION = {
  school: "The University of Texas at Austin",
  degree: "B.S. Computer Science",
  location: "Austin, TX",
  dates: "Expected May 2028",
};

export const EXPERIENCE = [
  {
    company: "Longhorn Racing Solar",
    role: "Vehicle Controls & Telemetry Software Developer",
    dates: "Sep 2025 / Present",
    blurb:
      "Embedded C++ on Photon and Raspberry Pi with a CAN-bus interface, the primary link between vehicle hardware and the telemetry network.",
    bullets: [
      "Designed a multi-node distributed communication layer over UDP/TCP that relays real-time operational data to a central server.",
      "Built a cross-platform, GPU-accelerated visualization tool with Vulkan, OpenStreetMap, and OpenElevation for live GPS tracking and terrain-aware telemetry analysis.",
      "Shipped an embedded driver dashboard ingesting CAN-bus signals (ignition, contactors, speed, braking, turn signals, fault codes) alongside synchronized live video from three onboard cameras.",
    ],
  },
  {
    company: "SPTS Studio (Roblox)",
    role: "Lead Programming Developer / Co-Owner",
    dates: "Sep 2021 / Present",
    blurb:
      "A server-authoritative Roblox game engine powering a simulator and a horror title, scaled from 60 to 600 peak CCU.",
    bullets: [
      "Engineered a custom player-data persistence system with server-side remote-event validation and sanitization.",
      "Built client prediction for character movement and a reusable seasonal framework for recurring live events.",
      "Cut average server script memory by 40% (~450MB) through targeted audits and system-level rewrites.",
      "Managed a 5-person dev team across a 1M+ user game, owning roadmap planning and code review.",
    ],
  },
  {
    company: "Lockheed Martin",
    role: "Fullstack Enterprise Operations Intern",
    dates: "May 2023 / May 2024",
    blurb:
      "Led a team of college interns to deliver a global coding-competition registration website end-to-end.",
    bullets: [
      "Set up and maintained GitLab CI/CD pipelines to automate build, code compilation, and deployment.",
      "Built the registration flow in React + TypeScript and integrated a GraphQL API via Hasura.",
      "Stood up a secure admin page for managing registrations, reviewing documents, and administering user access.",
      "Implemented file upload/retrieval on Amazon S3 with Object Versioning.",
      "Configured FusionAuth SAML v2 identity provider integration for enterprise-style SSO.",
    ],
  },
  {
    company: "The Cosmobots",
    role: "Lead Programmer / Designer · FTC",
    dates: "Aug 2021 / Aug 2025",
    blurb:
      "Shipped the full Java stack for a competition robot covering control, automation, and vision. 26th of 8,000 teams globally.",
    bullets: [
      "Custom trajectory-following pipeline with Kalman-filtered sensor fusion for precise localization and path execution.",
      "Multi-threaded command system with event-driven callbacks and hardware-in-the-loop testing.",
      "Real-time vision-based target tracking and autonomous pose correction via Limelight.",
      "Finalist qualifier at the 2025 Michiana International Premier Event.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Photon",
    subtitle: "Longhorn Racing Solar",
    dates: "2025 / Present",
    description:
      "A heterogeneous compute engine for the solar car's telemetry stack. A C++ runtime with six pluggable subsystems wired around a central engine: a network layer ingesting live streams, a parser decoding and storing them, a thread/memory/sync core, a GPU render-and-compute pipeline, a control GUI, and a synthesis layer for live analysis. Runs on a Raspberry Pi over CAN-bus, UDP/TCP, and Vulkan.",
    tags: ["C++", "Raspberry Pi", "CAN-bus", "Vulkan", "UDP/TCP", "Heterogeneous compute"],
    link: "https://github.com/lhr-solar/Photon",
    image: "/projects/photon.svg",
    width: 800,
    height: 180,
  },
  {
    name: "YoctoPiBuild",
    subtitle: "Longhorn Racing Solar",
    dates: "2025 / Present",
    description:
      "Yocto Linux build configuration for a custom integrated Raspberry Pi CM5 that underpins the Photon telemetry stack. Reproducible, minimal, bootable images tuned for the solar car's embedded environment.",
    tags: ["Yocto", "Linux", "Raspberry Pi CM4", "Embedded"],
    link: "https://github.com/lhr-solar/YoctoPiBuild",
    image: "/projects/yocto.png",
    width: 841,
    height: 450,
  },
  {
    name: "Rorchestra",
    subtitle: "AI orchestration for Roblox / Luau",
    dates: "2025",
    description:
      "AI-powered orchestration for Roblox / Luau codebases. Ingests a Rojo project, builds a require() dependency graph and hierarchical memory, then uses Gemini CLI agents to investigate context and generate scoped multi-file edits with unified diffs, all from an interactive REPL. Includes MCP integration for live Roblox Studio state queries, a token-budgeted context packet assembler, and invalidation-driven summaries.",
    tags: ["Python", "Gemini CLI", "MCP", "Roblox", "Luau", "Rojo"],
    link: "https://github.com/WutIsHummus/Rorchestra",
    image: "/projects/rorchestra.png",
    width: 1087,
    height: 253,
  },
  {
    name: "SPTS: Endless",
    subtitle: "SPTS Studio · Roblox",
    dates: "2021 / Present",
    description:
      "Server-authoritative Roblox simulator with a custom engine powering 1M+ players. Custom data persistence, client prediction, and a reusable seasonal live-event framework. Scaled from 60 to 600 peak CCU through performance optimization and live engagement.",
    tags: ["Lua", "Roblox", "Systems Design"],
    link: "https://www.roblox.com/games/109355252375602/Super-Power-Training-Endless",
    image: "/projects/spts.webp",
    width: 768,
    height: 432,
  },
  {
    name: "LM CodeQuest Academy",
    subtitle: "Lockheed Martin · Registration site",
    dates: "2023 / 2024",
    description:
      "End-to-end registration platform for Lockheed Martin's global coding competition. React + TypeScript frontend, Hasura GraphQL API, FusionAuth SAML SSO, S3-backed file uploads, and GitLab CI/CD. Live in production.",
    tags: ["React", "TypeScript", "GraphQL", "Hasura", "AWS S3", "FusionAuth"],
    link: "https://registration.lmcodequestacademy.com",
    image: "/projects/lockheed.jpg",
    width: 1628,
    height: 918,
  },
];

export const SKILLS = {
  "Languages & Frameworks": [
    "Java",
    "C / C++",
    "Python",
    "TypeScript",
    "C#",
    "Lua",
    "React",
    "Next.js",
    ".NET / WPF",
    "GraphQL",
    "REST",
  ],
  "Systems & DevOps": [
    "Raspberry Pi",
    "CAN-bus",
    "UDP/TCP",
    "Vulkan",
    "SAML / SSO",
    "AWS S3",
    "GitLab CI/CD",
    "Docker",
    "Vercel",
    "Git",
  ],
  "Practices & Tools": [
    "PostgreSQL",
    "Hasura",
    "FusionAuth",
    "Clerk",
    "Stripe API",
    "OpenAI API",
    "Agile / Scrum",
    "Embedded Dev",
    "HIL Testing",
  ],
};

export const PUBLICATIONS = [
  {
    title: "Advantages of AI for Healthcare in Developing Countries",
    authors: "Camci, A., & Aydin, A.",
    venue: "Proceedings of London International Conferences, (8), 82–88",
    year: "2023",
    doi: "https://doi.org/10.31039/plic.2023.8.171",
  },
];

export const STATS = [
  { value: "1M+", label: "Players reached" },
  { value: "5+", label: "Years shipping software" },
  { value: "4", label: "Production systems shipped" },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

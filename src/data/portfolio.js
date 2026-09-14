export const PROFILE = {
  name: "Alperen Aydin",
  title: "Software Developer",
  tagline: "Telemetry on a solar car. A game engine for over two million players.",
  longTagline:
    "CS at UT Austin. I write the software on the car and the software on the server.",
  location: "Austin, TX",
  coords: "30.2849° N",
  email: "alperenaydin1@gmail.com",
  phone: "713-307-2507",
  linkedin: "https://www.linkedin.com/in/alperenaydin1/",
  github: "https://github.com/WutIsHummus",
  roblox: {
    userId: 94103785,
    username: "AlpeenDev",
  },
};

export const LOADING = {
  src: "/animations/loading.webm",
  minDurationMs: 1400,
  messages: ["hold still", "sync", "one more frame"],
};

export const EDUCATION = {
  school: "The University of Texas at Austin",
  degree: "B.S. Computer Science",
  location: "Austin, TX",
  dates: "Expected May 2028",
};

export const EXPERIENCE = [
  {
    company: "Handshake AI",
    role: "LLM Evaluation Contractor",
    dates: "May 2026 \u2014 Aug 2026",
    blurb:
      "Built challenging, reproducible evaluations for frontier LLM agents.",
    bullets: [
      "Shipped 7 Dockerized evaluation tasks across 6 domains, with hidden ground truth and 82 automated grader tests designed to challenge frontier and open-source LLMs, including OpenAI models.",
      "Evaluated frontier agents on Terminal-Bench multi-step shell and tool-use trajectories; wrote adversarial graders that blocked shortcut solutions.",
    ],
  },
  {
    company: "Longhorn Racing Solar",
    role: "Vehicle Controls & Telemetry",
    dates: "Sep 2025 — now",
    blurb:
      "C++ on Photon and a Raspberry Pi. CAN is the wire between the car and everything that watches it.",
    bullets: [
      "UDP/TCP fabric that dumps live frames from the car to a pit server.",
      "Vulkan map with OSM + elevation so GPS is a place, not a point.",
      "Driver dash: ignition, contactors, speed, brakes, faults, plus three synced cameras.",
    ],
  },
  {
    company: "SPTS Studio · Roblox",
    role: "Lead programmer / co-owner",
    dates: "Sep 2021 — now",
    blurb:
      "Server-authoritative engine under a simulator and a horror title. 60 peak CCU to 600. Over two million players through the door.",
    bullets: [
      "Player data that only the server is allowed to believe.",
      "Client prediction for movement, plus a seasonal live-event shell we reuse.",
      "Cut average server script memory ~40% (~450MB) by rewriting the hot paths.",
      "Five-person team. I own the roadmap and the reviews.",
    ],
  },
  {
    company: "Lockheed Martin",
    role: "Fullstack intern",
    dates: "May 2023 — May 2024",
    blurb:
      "College intern crew, one registration site for a global coding competition. We shipped it.",
    bullets: [
      "GitLab CI that compiled, tested, and deployed without a ceremony.",
      "React + TypeScript registration against Hasura GraphQL.",
      "Admin for docs, access, and S3 uploads with versioning.",
      "FusionAuth SAML so the enterprise login actually worked.",
    ],
  },
  {
    company: "The Cosmobots · FTC",
    role: "Lead programmer",
    dates: "Aug 2021 — Aug 2025",
    blurb:
      "Full Java stack on a competition robot. 26th of 8,000 teams. Michiana finalist, 2025.",
    bullets: [
      "Trajectory following with Kalman-filtered localization.",
      "Multi-thread command bus, hardware-in-the-loop on the bench.",
      "Limelight vision for pose correction in auto.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "TrueDeck",
    subtitle: "A workspace for coding agents",
    dates: "2026 — now",
    description: "A terminal-first desktop workspace for running coding agents side by side. Shared project context, automatic memory, and MCP wiring keep the setup out of the way.",
    tags: ["Electron", "TypeScript", "MCP", "Developer tools"],
    link: "https://github.com/WutIsHummus/TrueDeck",
    image: "/projects/truedeck-screenshot.png",
    logo: "/projects/truedeck-logo.png",
    imageAlt: "TrueDeck with Grok, Codex, Claude, and Cursor in four terminal panes",
    width: 1440,
    height: 1026,
  },
  {
    name: "Photon",
    subtitle: "Longhorn Racing Solar",
    dates: "2025 — now",
    description:
      "Compute engine for the solar car. Six subsystems around one C++ runtime: network, parser/store, threads, Vulkan, GUI, live analysis. Pi + CAN + UDP.",
    tags: ["C++", "Raspberry Pi", "CAN", "Vulkan"],
    link: "https://github.com/lhr-solar/Photon",
    image: "/projects/photon-dashboard.png",
    imageAlt: "Photon telemetry dashboard with vehicle status, 3D track view, live plots, and battery cell monitoring",
    width: 1337,
    height: 680,
  },
  {
    name: "YoctoPiBuild",
    subtitle: "Longhorn Racing Solar",
    dates: "2025 — now",
    description:
      "Yocto image for the Pi CM5 under Photon. Small, bootable, repeatable.",
    tags: ["Yocto", "Linux", "Pi CM5"],
    link: "https://github.com/lhr-solar/YoctoPiBuild",
    image: "/projects/yocto.png",
    width: 841,
    height: 450,
  },
  {
    name: "Rorchestra",
    subtitle: "Roblox / Luau",
    dates: "2025",
    description:
      "Rojo in, require() graph out. Gemini agents edit the graph with diffs. MCP talks to live Studio.",
    tags: ["Python", "MCP", "Luau"],
    link: "https://github.com/WutIsHummus/Rorchestra",
    image: "/projects/rorchestra.png",
    width: 1087,
    height: 253,
  },
  {
    name: "SPTS: Endless",
    subtitle: "SPTS Studio",
    dates: "2021 — now",
    featured: true,
    description:
      "Custom engine under a Roblox simulator. Persistence, prediction, seasons. 2M+ players.",
    tags: ["Lua", "Roblox"],
    link: "https://www.roblox.com/games/109355252375602/Super-Power-Training-Endless",
    image: "/projects/spts.webp",
    width: 768,
    height: 432,
  },
  {
    name: "LM CodeQuest Academy",
    subtitle: "Lockheed Martin",
    dates: "2023 — 2024",
    description:
      "Registration for Lockheed’s global coding competition. GraphQL, SAML, S3. Still up.",
    tags: ["React", "Hasura", "SAML"],
    link: "https://registration.lmcodequestacademy.com",
    image: "/projects/lockheed.jpg",
    width: 1628,
    height: 918,
  },
];

export const SKILLS = {
  Languages: ["C / C++", "Java", "Python", "TypeScript", "C#", "Lua", "Luau"],
  Surfaces: ["React", "Next.js", ".NET / WPF", "GraphQL", "REST"],
  Machines: ["Raspberry Pi", "CAN-bus", "UDP/TCP", "Vulkan", "Yocto", "Docker"],
  Plumbing: ["AWS S3", "GitLab CI", "Hasura", "FusionAuth", "PostgreSQL"],
};

export const SKILL_TAPE = [
  "C++",
  "CAN",
  "Vulkan",
  "Luau",
  "React",
  "Yocto",
  "Hasura",
  "SAML",
  "UDP",
  "Pi CM5",
  "GraphQL",
  "Rojo",
  "PostgreSQL",
];

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
  { value: "2M+", label: "players reached" },
  { value: "10\u00d7", label: "peak concurrent players", detail: "60 to 600 CCU" },
  { value: "~40%", label: "less server script memory" },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Log" },
  { id: "work", label: "Builds" },
  { id: "skills", label: "Kit" },
  { id: "vlog", label: "Vlog" },
  { id: "contact", label: "Ping" },
];

// Add published videos here. src is a local /vlogs/file.mp4 path; url links to a hosted video.
// { title: 'A day in the shop', date: '2026-09-13', description: '...', src: '/vlogs/shop.mp4', poster: '/vlogs/shop.jpg' }
// { title: 'Building TrueDeck', date: '2026-09-13', description: '...', url: 'https://www.youtube.com/watch?v=YOUR_ID' }
export const VLOGS = [];

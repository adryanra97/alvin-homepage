/**
 * ============================================================
 *  SEMUA KONTEN HOMEPAGE ADA DI FILE INI
 *  Mau tambah proyek, skill, atau pengalaman? Cukup edit di sini,
 *  tidak perlu menyentuh komponen.
 * ============================================================
 */

export const profile = {
  name: "Adryan Rizky Alviano",
  nickname: "Alvin",
  initials: "AR",
  role: "Data Scientist",
  company: "Telkom Indonesia",
  unit: "Data Scientist",
  city: "Jakarta, Indonesia",
  education: { major: "Mechanical Engineering", school: "Universitas Indonesia" },
  studying: "Master of Information Technology (Magister Teknologi Informasi), Universitas Indonesia",
  // Tahun mulai karier profesional -> "Years of Experience" dihitung otomatis
  careerStartYear: 2020,
  tagline: "Lifelong learning, real-world impact.",
  // Kosongkan "" kalau belum mau menampilkan.
  // Untuk CV: taruh file di folder /public lalu isi "/cv.pdf"
  cvUrl: "",
  // Isi kalau mau menampilkan ikon email (contoh: "halo@domain.com")
  email: "",
  links: {
    linkedin: "https://www.linkedin.com/in/adryanrizkyalviano/",
    github: "https://github.com/adryanra97",
    credly: "https://www.credly.com/users/adryan-rizky-alviano/badges",
  },
  description:
    "Adryan Rizky Alviano — AI & Big Data professional and Data Scientist at Telkom Indonesia. Generative AI, LLMs, Agentic AI, Data Governance, and responsible AI aligned with UU PDP. Master of Information Technology student at Universitas Indonesia.",
};

export const hero = {
  eyebrow: ["Data", "AI", "People"],
  titleLead: "Hi, I'm",
  titleAccent: "Alvin.",
  subline: "Adryan Rizky Alviano · Data Scientist at Telkom Indonesia",
  intro:
    "I turn complex data into practical solutions with Generative AI, LLMs and agentic workflows. I'm also a Master of IT student at Universitas Indonesia, and I like learning out loud.",
  infoCards: [
    { icon: "graduation", title: "Master of Information Technology", sub: "Universitas Indonesia · Ongoing" },
    { icon: "graduation", title: "Mechanical Engineering", sub: "Universitas Indonesia · Cum Laude" },
    { icon: "briefcase", title: "Data Scientist", sub: "Telkom Indonesia" },
    { icon: "heart", title: "Interested in", sub: "Generative & Agentic AI, Data Governance, Responsible AI" },
  ],

};

/** Warm, personal page intros: edit freely. `photo` uses files in /public/images/about. */
export const pageIntros = {
  experience: {
    intro: "The places, teams, and people that shaped how I work. Every role taught me something I still use today.",
    note: "every role taught me something",
    photos: [
      { name: "about/work", caption: "Work mode: on", alt: "Adryan in a navy work shirt" },
      { name: "about/office", caption: "Daily workspace", alt: "Adryan at the office" },
    ],
  },
  projects: {
    intro: "Things I've built, tinkered with, and learned from. The list is small for now, but it's growing.",
    note: "more on the way!",
    photos: [
      { name: "about/casual", caption: "Always tinkering", alt: "Adryan taking a casual selfie" },
      { name: "about/batik", caption: "Batik, always", alt: "Adryan in a batik shirt" },
    ],
  },
  skills: {
    intro: "What's in my toolbox, from data and AI to governance and people skills, plus what I'm still learning.",
    note: "always learning",
    photos: [
      { name: "about/road", caption: "Learning on the go", alt: "Adryan in a helmet with a headset" },
      { name: "about/trail", caption: "Taking a breather", alt: "Adryan at a scenic viewpoint" },
    ],
  },
};

export const aboutPersonal = {
  eyebrow: "Get to know me",
  title: "Beyond the dashboards,",
  accent: "just a curious person.",
  body: [
    "Outside of models and pipelines, I genuinely enjoy learning from people: a client with a tricky problem, a teammate in the field, a fellow student in class.",
    "I laugh a lot and love joking around with friends, and I care about staying healthy and active. If you're curious about my work, want to collaborate, or simply want to say hi, I'd love to connect. No pitch needed.",
  ],
  cta: "Say hi on LinkedIn",
  /** `wide: true` = landscape photo spanning both columns. */
  photos: [
    { name: "about/dressup", caption: "Dressed up", alt: "Adryan in a batik shirt" },
    { name: "about/sport", caption: "Staying active", alt: "Adryan in sportswear outdoors" },
    { name: "about/friends", caption: "Good times with friends", alt: "Adryan and two friends joking around", wide: true },
    { name: "about/office2", caption: "Daily workspace", alt: "Adryan at the office" },
    { name: "about/road", caption: "Out and about", alt: "Adryan in a helmet with a headset" },
    { name: "about/trail", caption: "Taking a breather", alt: "Adryan at a scenic viewpoint" },
    { name: "about/batik", caption: "Batik, always", alt: "Adryan in a colorful batik shirt" },
  ] as { name: string; caption: string; alt: string; wide?: boolean }[],
};

export const about = {
  titleLead: "Turning curiosity into",
  titleAccent: "real impact.",
  body:
    "I'm an AI & Big Data professional with a lifelong-learning mindset, working in the Telco IT industry. I drive high-impact AI initiatives that bridge management objectives and rapid technical execution, from Generative AI and agentic workflows to IoT data pipelines. I also advocate for responsible AI, making sure every project aligns with Indonesia's UU PDP and GDPR. Alongside work, I'm pursuing a Master of Information Technology at Universitas Indonesia.",
  quote: "Bridging the gap between management objectives and rapid technical execution.",
  values: [
    { icon: "book", title: "Lifelong Learning", sub: "80+ certifications from Google, Microsoft & Coursera" },
    { icon: "shield", title: "Responsible AI", sub: "Aligned with UU PDP & GDPR" },
    { icon: "users", title: "Business ↔ Tech", sub: "From management goals to delivery" },
  ],
};

export type Experience = {
  org: string;
  period: string;
  place?: string;
  icon: "briefcase" | "graduation" | "school";
  // Nama file logo di /public/logos (tanpa ekstensi), mis. "telkom" -> /public/logos/telkom.svg
  logo?: string;
  mono?: string; // inisial untuk tile berwarna selama logo belum ada
  current?: boolean;
  roles: { title: string; period: string; current?: boolean }[];
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    org: "Telkom Indonesia",
    logo: "telkom",
    mono: "TI",
    period: "Jan 2020 – Present",
    place: "Jakarta, Indonesia",
    icon: "briefcase",
    current: true,
    roles: [
      { title: "Data Scientist", period: "May 2025 – Present", current: true },
      { title: "Junior Data Scientist", period: "Nov 2022 – May 2025" },
      { title: "Deployment & Solution Partnership", period: "Mar 2022 – Dec 2022" },
      { title: "OFF 3 Access Maintenance", period: "Apr 2020 – Mar 2022" },
      { title: "Great People Trainee Program XI", period: "Jan 2020 – Mar 2020" },
    ],
    highlights: [
      "Led rapid AI prototyping with LLMs, Agentic AI, and Prompt Engineering for CX and digital transformation.",
      "DS Task Force Lead: turned business needs into data roadmaps and a standardized Way of Work.",
      "Applied AI to turn product feedback into structured insights, speeding up issue identification by over 80%.",
    ],
  },
  {
    org: "Universitas Indonesia",
    logo: "ui",
    mono: "UI",
    period: "Ongoing",
    icon: "graduation",
    current: true,
    roles: [{ title: "Master of Information Technology (Magister Teknologi Informasi)", period: "Ongoing", current: true }],
  },
  {
    org: "Universitas Indonesia",
    logo: "ui",
    mono: "UI",
    period: "Aug 2017 – Aug 2019",
    place: "Depok, Indonesia",
    icon: "graduation",
    roles: [
      { title: "Research Development Project Engineer", period: "Jan 2019 – Aug 2019" },
      { title: "Assistant Lecturer", period: "Aug 2017 – Jun 2019" },
    ],
  },
  {
    org: "Danone Early Life Nutrition",
    logo: "danone",
    mono: "DE",
    period: "Jul 2018 – Aug 2018",
    icon: "briefcase",
    roles: [{ title: "Engineering Intern", period: "Jul 2018 – Aug 2018" }],
  },
  {
    org: "Universitas Indonesia",
    logo: "ui",
    mono: "UI",
    period: "2015 – 2019",
    place: "Depok, Indonesia",
    icon: "graduation",
    roles: [{ title: "Bachelor's degree, Mechanical Engineering · Cum Laude", period: "2015 – 2019" }],
  },
  {
    org: "SMAN 1 Depok",
    logo: "sman1-depok",
    mono: "S1",
    period: "2012 – 2015",
    place: "Depok, Indonesia",
    icon: "school",
    roles: [{ title: "High School", period: "2012 – 2015" }],
  },
];

export type ProjectShot = { src: string; title: string; caption: string };

export type Project = {
  slug: string; // dipakai untuk URL halaman detail: /projects/<slug>
  title: string;
  featured?: boolean;
  category: string; // label kecil di atas judul
  tagline: string; // satu kalimat pembuka
  description: string; // ringkasan untuk kartu & SEO
  status: string;
  year: string;
  role: string;
  tags: string[];
  url: string; // link ke site Vercel proyek (boleh Vercel lain)
  repo?: string;
  cover: string; // screenshot utama (/public/projects/<slug>/...)
  cover2?: string; // screenshot kedua yang menumpuk di kartu
  stats: { value: string; label: string }[]; // 3-4 angka kunci (pakai fakta yang bisa diverifikasi)
  problem: string;
  approach: string;
  principle: { title: string; text: string };
  steps: { title: string; text: string }[];
  shots: ProjectShot[]; // galeri screenshot (isi caption yang menjelaskan)
  methods?: { title: string; points: string[]; note?: string }[];
  agents?: { name: string; kind: string; text: string }[];
  stack?: { label: string; value: string }[];
  quality?: string[];
  privacy?: string[];
  docsNote?: string;
};

const TEA = "/projects/talent-estimation-agent";

// >>> TAMBAH PROYEK BARU DI SINI (salin satu blok, ganti isinya). Halaman detailnya otomatis dibuat. <<<
export const projects: Project[] = [
  {
    slug: "talent-estimation-agent",
    title: "Talent Estimation Agent",
    featured: true,
    category: "Agentic AI · Workforce planning",
    tagline: "Validate talent requests from a WBS, with numbers you can trace.",
    description:
      "A multi-agent system that reads a work breakdown structure, decides which roles each work package needs, and estimates FTE per role with two independent methods. It reviews its own output and exports an Excel workbook with live formulas.",
    status: "Live · open source (MIT)",
    year: "2026",
    role: "Author & developer",
    tags: ["Agentic AI", "LangGraph", "Python", "FastAPI", "Next.js", "Vercel"],
    url: "https://talent-estimation-agent-ten.vercel.app/",
    repo: "https://github.com/adryanra97/talent-estimation-agent",
    cover: `${TEA}/summary.webp`,
    cover2: `${TEA}/monthly.webp`,
    stats: [
      { value: "6", label: "specialised agents" },
      { value: "2", label: "independent estimation methods" },
      { value: "94%", label: "test coverage" },
      { value: "0", label: "files or keys stored on the server" },
    ],
    problem:
      "Validating a talent request means reading a WBS, deciding which roles every work package needs, and estimating FTE per role. Done by hand it is slow, and the numbers are hard to trace back to a reason.",
    approach:
      "An agentic system reads the WBS and the request document, decides the roles per work package with a written reason, estimates FTE with two independent methods, and reviews its own output before handing a workbook to a person.",
    principle: {
      title: "Language models judge and explain. Deterministic code calculates.",
      text: "Every number comes from a tested calculation engine, never from the model. That keeps the results repeatable and lets a reviewer trace each figure back to an input and a reason.",
    },
    steps: [
      { title: "Upload", text: "A WBS in Excel, plus optional request documents (PDF, Word, text) and meeting notes." },
      {
        title: "Agents assess and calculate",
        text: "Each item is judged per role, then calculated with Use Case Points and bottom-up estimation. Disagreements are re-checked.",
      },
      {
        title: "Review and export",
        text: "Correct any flagged rows, then download the Excel workbook and a draft reply to the requester.",
      },
    ],
    shots: [
      {
        src: `${TEA}/process.webp`,
        title: "Agents at work",
        caption: "Six agents run in sequence with a live activity log, so you can see what each step is doing and why.",
      },
      {
        src: `${TEA}/summary.webp`,
        title: "FTE summary",
        caption:
          "Required FTE per role from both methods, compared with the original request. Rows that need a human look are flagged.",
      },
      {
        src: `${TEA}/breakdown.webp`,
        title: "WBS breakdown",
        caption:
          "One row per work item and role. Change the role, class or allocation and every total recalculates without calling the model.",
      },
      {
        src: `${TEA}/monthly.webp`,
        title: "Per month",
        caption: "Effort spread across months by working days, shown as a stacked chart plus a table with peak FTE.",
      },
      {
        src: `${TEA}/ai-assist.webp`,
        title: "AI assistance",
        caption:
          "A scenario showing how much effort AI could save per role and which capabilities help most. The baseline numbers never change.",
      },
      {
        src: `${TEA}/findings.webp`,
        title: "Findings and assumptions",
        caption:
          "Gaps, overlaps and method disagreements found by the Reviewer Agent, the calculation assumptions, and a decision trace for every agent step.",
      },
      {
        src: `${TEA}/message.webp`,
        title: "Draft message",
        caption: "A ready-to-edit reply to the requester, built from the calculated numbers. Attach the Excel so every figure is traceable.",
      },
      {
        src: `${TEA}/method.webp`,
        title: "Methodology",
        caption: "The calculation rules are written out in the app itself, so reviewers do not have to take the numbers on trust.",
      },
    ],
    methods: [
      {
        title: "Use Case Points (UCP)",
        points: [
          "Each WBS item per role is classed Simple (5), Average (10) or Complex (15) from the number of steps involved.",
          "Roles that only support an item count for part of it (default 25%).",
          "Actor weights, then technical (TCF) and environmental (EF) factors. Ratings start at 3 and change only with evidence.",
          "Points are multiplied by hours per point, then converted with hours per day, days per month and project length into average FTE.",
        ],
        note: "Based on Karner (1993), Resource estimation for objectory projects.",
      },
      {
        title: "Bottom-up",
        points: [
          "Working days for each item come straight from the WBS schedule.",
          "The agent proposes a fair FTE allocation for the workload, following allocation guidance rather than copying the requested headcount.",
          "Person-days = working days × allocation × headcount, summed per role and converted into FTE.",
        ],
        note: "Both methods run separately. When they agree within ±15% the figure is more reliable; when they differ, the Reviewer Agent re-checks the row.",
      },
    ],
    agents: [
      { name: "Orchestrator", kind: "Code", text: "Controls scope, ordering, retries, review rounds and the run trace." },
      {
        name: "Intake Agent",
        kind: "Code + LLM",
        text: "Reads the WBS in any reasonable layout (leaf work packages only) and the requested FTE per role from the request document.",
      },
      {
        name: "Estimator Agent",
        kind: "LLM + code",
        text: "Decides primary or supporting role, UCP class and FTE allocation per item with a written reason, then calculates both methods.",
      },
      {
        name: "Reviewer Agent",
        kind: "Code + LLM",
        text: "Compares the two methods and sends rows that disagree back for another judgement, up to two rounds. Flags gaps, overlaps and work that appears only in meeting notes.",
      },
      {
        name: "Augmentation Agent",
        kind: "LLM + code",
        text: "Optional. Maps tasks to capabilities and shows an AI-assistance scenario without touching the baseline numbers.",
      },
      {
        name: "Report",
        kind: "LLM + code",
        text: "Drafts the reply message and fills the Excel workbook with live formulas.",
      },
    ],
    stack: [
      { label: "Agents", value: "Python 3.12 · LangGraph · LangChain chat models" },
      { label: "Contracts", value: "Pydantic v2, structured output with schema validation" },
      { label: "API", value: "FastAPI on Vercel Python Functions (stateless)" },
      { label: "Excel", value: "openpyxl, formulas recalculated by Excel on open" },
      { label: "UI", value: "Next.js · React · Tailwind CSS · Recharts" },
      { label: "Evaluation", value: "Kedro pipeline (offline)" },
      { label: "Tooling", value: "uv · Ruff · mypy · pytest · pre-commit · GitHub Actions" },
      { label: "Models", value: "Gemini, Claude, OpenAI, Azure OpenAI or any OpenAI-compatible endpoint" },
    ],
    quality: [
      "Ruff lint and format",
      "mypy type checks",
      "pytest with 94% coverage",
      "Excel formulas recalculated in LibreOffice and compared with the engine",
      "Kedro evaluation pipeline",
      "Dependency lock check with uv",
      "TypeScript checks on the UI",
      "Next.js production build",
    ],
    privacy: [
      "No database, and the server writes no files. Every request stands alone.",
      "Uploaded files are parsed in memory; the API key stays in browser memory.",
      "E-mail addresses, phone numbers and 16-digit ID numbers are masked before text reaches a model.",
      "Results live in the browser tab and disappear when it closes.",
      "The repository holds no real project data. The demo project is fictional.",
    ],
    docsNote:
      "Documented along the phases of the Unified Process (planning, analysis, design, implementation), following Dennis, Wixom and Tegarden, Systems Analysis and Design.",
  },
];

export type SkillItem = {
  name: string;
  icon: string; // ikon generik (lihat components/icons.tsx)
  brand?: string; // logo brand resmi (lihat lib/brands.ts)
  sub?: string; // teks kecil di bawah nama (dipakai di kartu sertifikat)
  badge?: string; // teks pendek di tile berwarna, mis. "SQL" (kalau tidak ada logo resmi)
  image?: string; // path gambar sendiri, mis. badge Credly di /public/badges/xxx.png
};

export type SkillGroup = {
  id: string;
  label: string;
  variant?: "cert"; // tampilan kartu besar untuk sertifikat
  link?: { label: string; href: string };
  items: SkillItem[];
};

// >>> TAMBAH SKILL DI SINI. "icon" harus salah satu nama di components/icons.tsx <<<
export const skillGroups: SkillGroup[] = [
  {
    id: "technical",
    label: "Technical",
    items: [
      { name: "Python", icon: "code", brand: "python" },
      { name: "SQL", icon: "database", badge: "SQL" },
      { name: "BigQuery", icon: "database", brand: "bigquery" },
      { name: "Pandas", icon: "chart", brand: "pandas" },
      { name: "Machine Learning", icon: "brain" },
      { name: "Deep Learning (TensorFlow)", icon: "network", brand: "tensorflow" },
      { name: "Computer Vision & Video Analytics", icon: "eye" },
      { name: "Forecasting & Anomaly Detection", icon: "trend" },
      { name: "Tableau & Data Visualization", icon: "chart", brand: "tableau" },
      { name: "Looker Studio (Data Studio)", icon: "chart", brand: "datastudio" },
      { name: "IoT Data Pipelines", icon: "plug" },
      { name: "Docker & Containerization", icon: "box", brand: "docker" },
      { name: "Google Cloud (GCP)", icon: "cloud", brand: "googlecloud" },
      { name: "Microsoft Azure", icon: "cloud", brand: "azure" },
    ],
  },
  {
    id: "ai",
    label: "AI & Agentic",
    items: [
      { name: "Generative AI", icon: "sparkles" },
      { name: "LLMs", icon: "brain" },
      { name: "Agentic AI", icon: "bot" },
      { name: "Prompt Engineering", icon: "prompt" },
      { name: "Context Engineering", icon: "layers" },
      { name: "AI Workflow & Enterprise Automation", icon: "workflow" },
      { name: "Tool Use & MCP", icon: "plug", brand: "mcp" },
      { name: "RAG", icon: "search" },
      { name: "Multi-Agent Systems", icon: "network" },
      { name: "Rapid AI Prototyping", icon: "rocket" },
      { name: "AI-Assisted Development", icon: "terminal" },
      { name: "CX Insight with AI", icon: "message" },
    ],
  },
  {
    id: "itm",
    label: "IT Management",
    items: [
      { name: "Enterprise Architecture (TOGAF)", icon: "layers", badge: "TOGAF" },
      { name: "Business Process Reengineering (BPR)", icon: "workflow", badge: "BPR" },
      { name: "Business Process Improvement (BPI)", icon: "trend", badge: "BPI" },
      { name: "Enterprise Information Systems (ERP)", icon: "briefcase", badge: "ERP" },
      { name: "Blockchain Technology", icon: "network" },
      { name: "IT Lifecycle Management", icon: "workflow" },
      { name: "Information Systems Design", icon: "compass" },
    ],
  },
  {
    id: "governance",
    label: "Data Governance",
    items: [
      { name: "Data Governance", icon: "shield" },
      { name: "DAMA-DMBOK", icon: "book" },
      { name: "UU PDP (Indonesia PDP Law)", icon: "scale" },
      { name: "GDPR", icon: "scale" },
      { name: "Responsible AI", icon: "shield" },
      { name: "Data Privacy & Security", icon: "lock" },
      { name: "Data Quality Management", icon: "check" },
      { name: "Metadata Management", icon: "layers" },
      { name: "Master & Reference Data", icon: "database" },
      { name: "Data Policy & Standards", icon: "file" },
    ],
  },
  {
    id: "soft",
    label: "Leadership & Soft",
    items: [
      { name: "Task Force Leadership", icon: "flag" },
      { name: "Stakeholder Alignment", icon: "handshake" },
      { name: "Talent & Resource Management", icon: "users" },
      { name: "Training & Facilitation", icon: "school" },
      { name: "Standardized Way of Work", icon: "workflow" },
      { name: "Business Strategy", icon: "compass" },
      { name: "Project Management", icon: "check" },
      { name: "Lifelong Learning", icon: "book" },
    ],
  },
  {
    id: "certs",
    label: "Certifications",
    variant: "cert",
    link: { label: "See all badges on Credly", href: profile.links.credly },
    items: [
      // Taruh badge resmi (mis. dari Credly) di /public/badges/ lalu isi `image`, contoh: image: "/badges/huawei-hcia.png"
      { name: "Huawei HCIA", sub: "Huawei Certified ICT Associate", icon: "award", brand: "huawei" },
      { name: "Azure Data Scientist Associate", sub: "Microsoft Certified", icon: "award", brand: "microsoft" },
      { name: "80+ Professional Certifications", sub: "Google · Microsoft · Coursera", icon: "award" },
    ],
  },
  {
    id: "honors",
    label: "Honors & Awards",
    items: [
      { name: "Cum Laude · Universitas Indonesia", icon: "award" },
      { name: "Telkom Digital Platform & IT High Potential · Band VI", icon: "award" },
      { name: "Telkom Digital Platform & IT High Potential · Band V", icon: "award" },
      { name: "Certificate of Appreciation from Telkom CTO", icon: "award" },
      { name: "Telkom Athon 3 Data Science · Runner-Up", icon: "award" },
      { name: "Telkom HackIdea · Top 10", icon: "award" },
      { name: "Telkom Top 12 Social Project Ideas", icon: "award" },
      { name: "Telkom National Social Competition · Top 8", icon: "award" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Indonesian · Native", icon: "globe", brand: "flag-id" },
      { name: "English · Professional Working", icon: "globe", brand: "flag-gb" },
      { name: "Japanese · Limited Working", icon: "globe", brand: "flag-jp" },
    ],
  },
];

export const contact = {
  titleLead: "Let's build something",
  titleAccent: "meaningful together.",
  body: "Let's connect to discuss how AI and innovation can drive real-world impact.",
  quote: "AI and innovation for real-world impact.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
];

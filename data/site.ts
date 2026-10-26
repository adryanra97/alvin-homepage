/**
 * ============================================================
 *  SEMUA KONTEN HOMEPAGE ADA DI FILE INI
 *  Mau tambah proyek, skill, atau pengalaman? Cukup edit di sini,
 *  tidak perlu menyentuh komponen.
 * ============================================================
 */

export const profile = {
  name: "Adryan Rizky Alviano",
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
  titleLead: "Transforming complex data into",
  titleAccent: "actionable business solutions.",
  intro:
    "I'm Adryan Rizky Alviano, an AI & Big Data professional and Data Scientist at Telkom Indonesia. I use Generative AI, LLMs, and Agentic AI to streamline enterprise automation and accelerate digital transformation.",
  infoCards: [
    { icon: "graduation", title: "Master of Information Technology", sub: "Universitas Indonesia · Ongoing" },
    { icon: "graduation", title: "Mechanical Engineering", sub: "Universitas Indonesia · Cum Laude" },
    { icon: "briefcase", title: "Data Scientist", sub: "Telkom Indonesia" },
    { icon: "heart", title: "Interested in", sub: "Generative & Agentic AI, Data Governance, Responsible AI" },
  ],

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

export type Project = {
  slug: string; // dipakai untuk URL halaman detail: /projects/<slug>
  title: string;
  featured?: boolean;
  description: string;
  highlights?: string[]; // poin-poin di halaman detail
  tags: string[];
  url: string; // link ke site Vercel proyek (boleh Vercel lain)
  repo?: string;
  // Opsional: taruh screenshot di /public/projects/nama.png lalu isi "/projects/nama.png"
  image?: string;
};

// >>> TAMBAH PROYEK BARU DI SINI <<<
export const projects: Project[] = [
  {
    slug: "talent-estimation-agent",
    title: "Talent Estimation Agent",
    featured: true,
    description:
      "An AI-powered application that validates talent requests from a WBS. It scores each item, estimates FTE per role with Use Case Points and bottom-up methods, and prepares a traceable Excel ready for review.",
    tags: ["Next.js", "AI / LLM", "Agentic AI", "Data Analysis", "Vercel"],
    url: "https://talent-estimation-agent-ten.vercel.app/",
    repo: "https://github.com/adryanra97/talent-estimation-agent",
    highlights: [
      "Upload a WBS in Excel plus request documents and meeting notes.",
      "Agents score every item per role, then compute FTE with two methods: Use Case Points and bottom-up.",
      "Results come with a traceable breakdown: item, role, class, allocation, and the reasoning behind each number.",
      "Highlights where AI can speed up the work, per capability.",
      "Exports an Excel with live formulas, so changing one input updates every total.",
      "No server-side storage: files and API keys are not saved. The model assesses, the code calculates.",
    ],
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
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

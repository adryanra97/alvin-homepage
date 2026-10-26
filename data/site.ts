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
    "Adryan Rizky Alviano — AI & Big Data professional and Data Scientist at Telkom Indonesia. Generative AI, LLMs, Agentic AI, Data Governance, and responsible AI aligned with UU PDP.",
};

export const hero = {
  eyebrow: ["Data", "AI", "People"],
  titleLead: "Transforming complex data into",
  titleAccent: "actionable business solutions.",
  intro:
    "I'm Adryan Rizky Alviano, an AI & Big Data professional and Data Scientist at Telkom Indonesia. I use Generative AI, LLMs, and Agentic AI to streamline enterprise automation and accelerate digital transformation.",
  infoCards: [
    { icon: "graduation", title: "Mechanical Engineering", sub: "Universitas Indonesia · Cum Laude" },
    { icon: "briefcase", title: "Data Scientist", sub: "Telkom Indonesia" },
    { icon: "heart", title: "Interested in", sub: "Generative & Agentic AI, Data Governance, and Responsible AI" },
  ],
};

export const about = {
  titleLead: "Turning curiosity into",
  titleAccent: "real impact.",
  body:
    "I'm an AI & Big Data professional with a lifelong-learning mindset, working in the Telco IT industry. I drive high-impact AI initiatives that bridge management objectives and rapid technical execution, from Generative AI and agentic workflows to IoT data pipelines. I also advocate for responsible AI, making sure every project aligns with Indonesia's UU PDP and GDPR.",
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
  current?: boolean;
  roles: { title: string; period: string; current?: boolean }[];
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    org: "Telkom Indonesia",
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
    period: "Jul 2018 – Aug 2018",
    icon: "briefcase",
    roles: [{ title: "Engineering Intern", period: "Jul 2018 – Aug 2018" }],
  },
  {
    org: "Universitas Indonesia",
    period: "2015 – 2019",
    place: "Depok, Indonesia",
    icon: "graduation",
    roles: [{ title: "Bachelor's degree, Mechanical Engineering · Cum Laude", period: "2015 – 2019" }],
  },
  {
    org: "SMAN 1 Depok",
    period: "2012 – 2015",
    place: "Depok, Indonesia",
    icon: "school",
    roles: [{ title: "High School", period: "2012 – 2015" }],
  },
];

export type Project = {
  title: string;
  featured?: boolean;
  description: string;
  tags: string[];
  url: string; // link ke site Vercel proyek (boleh Vercel lain)
  repo?: string;
  // Opsional: taruh screenshot di /public/projects/nama.png lalu isi "/projects/nama.png"
  image?: string;
};

// >>> TAMBAH PROYEK BARU DI SINI <<<
export const projects: Project[] = [
  {
    title: "Talent Estimation Agent",
    featured: true,
    description:
      "An AI-powered application that validates talent requests from a WBS. It scores each item, estimates FTE per role with Use Case Points and bottom-up methods, and prepares a traceable Excel ready for review.",
    tags: ["Next.js", "AI / LLM", "Agentic AI", "Data Analysis", "Vercel"],
    url: "https://talent-estimation-agent-ten.vercel.app/",
    repo: "https://github.com/adryanra97/talent-estimation-agent",
  },
];

export type SkillGroup = { id: string; label: string; items: { name: string; icon: string }[] };

// >>> TAMBAH SKILL DI SINI. "icon" harus salah satu nama di components/icons.tsx <<<
export const skillGroups: SkillGroup[] = [
  {
    id: "technical",
    label: "Technical",
    items: [
      { name: "Python", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "BigQuery", icon: "database" },
      { name: "Pandas", icon: "chart" },
      { name: "Machine Learning", icon: "brain" },
      { name: "Deep Learning (TensorFlow)", icon: "network" },
      { name: "Computer Vision & Video Analytics", icon: "eye" },
      { name: "Forecasting & Anomaly Detection", icon: "trend" },
      { name: "Tableau & Data Visualization", icon: "chart" },
      { name: "IoT Data Pipelines", icon: "plug" },
      { name: "Docker & Containerization", icon: "box" },
      { name: "Cloud (GCP & Azure)", icon: "cloud" },
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
      { name: "Tool Use & MCP", icon: "plug" },
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
    items: [
      { name: "80+ certifications (Google, Microsoft, Coursera)", icon: "award" },
      { name: "TensorFlow Developer Specialization (DeepLearning.AI)", icon: "award" },
      { name: "Complete Tableau Bootcamp", icon: "award" },
      { name: "Modern Big Data Analysis with SQL", icon: "award" },
      { name: "Learn SQL Basics for Data Science", icon: "award" },
      { name: "Data Manipulation in Python: Pandas Crash Course", icon: "award" },
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
      { name: "Indonesian · Native", icon: "globe" },
      { name: "English · Professional Working", icon: "globe" },
      { name: "Japanese · Limited Working", icon: "globe" },
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
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

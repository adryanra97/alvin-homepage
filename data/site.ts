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
  role: "Data & AI Practitioner",
  company: "PT PLN (Persero)",
  unit: "Data & Digital",
  city: "Jakarta, Indonesia",
  education: { major: "Mechanical Engineering", school: "Universitas Indonesia" },
  // Tahun mulai karier -> "Years of Experience" dihitung otomatis
  careerStartYear: 2022,
  tagline: "Curious mind for a brighter future.",
  // Kosongkan "" kalau belum mau menampilkan.
  // Untuk CV: taruh file di folder /public lalu isi "/cv.pdf"
  cvUrl: "",
  // Isi kalau mau menampilkan ikon email (contoh: "halo@domain.com")
  email: "",
  links: {
    linkedin: "https://www.linkedin.com/in/adryanrizkyalviano/",
    github: "https://github.com/adryanra97",
  },
  description:
    "Adryan Rizky Alviano — data enthusiast, AI builder, and problem solver. Turning data and agentic AI into practical solutions for a better Indonesia.",
};

export const hero = {
  eyebrow: ["Data", "Technology", "People"],
  titleLead: "Turning data into meaningful impact for",
  titleAccent: "a better Indonesia.",
  intro:
    "I'm Adryan Rizky Alviano, a data enthusiast and problem solver who enjoys building practical solutions with data, AI, and technology to create real impact.",
  infoCards: [
    { icon: "graduation", title: "Mechanical Engineering", sub: "Universitas Indonesia" },
    { icon: "briefcase", title: "Data & Digital", sub: "PT PLN (Persero)" },
    { icon: "heart", title: "Interested in", sub: "Data, AI, Agents, Product, and Solving Real Problems" },
  ],
};

export const about = {
  titleLead: "Turning curiosity into",
  titleAccent: "real impact.",
  body:
    "I'm a Mechanical Engineering graduate from Universitas Indonesia who is passionate about data, technology, and their real-world applications. I enjoy exploring how data and next-gen AI — from LLMs to agentic workflows — can help organizations make better decisions, improve efficiency, and create positive impact for people.",
  quote:
    "I believe technology can create more opportunities for people, and I want to be part of that journey.",
  values: [
    { icon: "book", title: "Continuous Learning", sub: "Always exploring new knowledge" },
    { icon: "users", title: "Collaborative Mindset", sub: "Working with people to go further" },
    { icon: "leaf", title: "Meaningful Impact", sub: "Solving real problems that matter" },
  ],
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  place: string;
  icon: "zap" | "graduation" | "school";
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    org: "PT PLN (Persero)",
    role: "Data & Digital",
    period: "2022 – Present",
    place: "Jakarta, Indonesia",
    icon: "zap",
    current: true,
  },
  {
    org: "Universitas Indonesia",
    role: "Mechanical Engineering",
    period: "2017 – 2021",
    place: "Depok, Indonesia",
    icon: "graduation",
  },
  {
    org: "High School",
    role: "SMA",
    period: "2014 – 2017",
    place: "Indonesia",
    icon: "school",
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
    label: "Technical Skills",
    items: [
      { name: "Python", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "Data Analysis", icon: "chart" },
      { name: "Machine Learning", icon: "brain" },
      { name: "LLM / AI", icon: "sparkles" },
      { name: "Web Development", icon: "web" },
      { name: "Data Visualization", icon: "chart" },
      { name: "Product Thinking", icon: "bulb" },
      { name: "Problem Solving", icon: "puzzle" },
      { name: "Collaboration", icon: "users" },
    ],
  },
  {
    id: "ai",
    label: "AI & Agentic",
    items: [
      { name: "Agentic AI", icon: "bot" },
      { name: "Prompt Engineering", icon: "prompt" },
      { name: "Context Engineering", icon: "layers" },
      { name: "AI Workflow Automation", icon: "workflow" },
      { name: "LLM Application Dev", icon: "sparkles" },
      { name: "Tool Use & MCP", icon: "plug" },
      { name: "RAG", icon: "search" },
      { name: "AI-Assisted Coding", icon: "terminal" },
      { name: "Evaluation & Guardrails", icon: "shield" },
      { name: "Multi-Agent Systems", icon: "network" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    items: [
      { name: "Communication", icon: "message" },
      { name: "Collaboration", icon: "users" },
      { name: "Problem Solving", icon: "puzzle" },
      { name: "Continuous Learning", icon: "book" },
      { name: "Adaptability", icon: "compass" },
      { name: "Ownership", icon: "rocket" },
    ],
  },
  {
    id: "interests",
    label: "Interests",
    items: [
      { name: "Data & Analytics", icon: "chart" },
      { name: "Next-Gen AI", icon: "sparkles" },
      { name: "Product", icon: "bulb" },
      { name: "Energy & Digital", icon: "zap" },
      { name: "Building Things", icon: "wrench" },
      { name: "Learning in Public", icon: "globe" },
    ],
  },
];

export const contact = {
  titleLead: "Let's build something",
  titleAccent: "meaningful together.",
  body: "I'm always open to new opportunities, interesting discussions, or just a friendly chat.",
  quote: "Collaboration today, better tomorrow.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

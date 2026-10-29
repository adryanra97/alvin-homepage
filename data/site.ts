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
    "I turn complex data into practical solutions with Generative AI, LLMs and agentic workflows. I'm also a Master of IT student at Universitas Indonesia, and I like learning out loud. Always happy to collaborate.",
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
    intro: "My work at Telkom Indonesia and Danone, and my studies at Universitas Indonesia. Every role taught me something I still use today.",
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
      { name: "about/wall", caption: "Easygoing", alt: "Adryan smiling in a grey jacket against a stone wall" },
    ],
  },
  skills: {
    intro: "What's in my toolbox, from data and AI to governance and people skills, plus what I'm still learning.",
    note: "always learning",
    photos: [
      { name: "about/road", caption: "Learning on the go", alt: "Adryan in a helmet with a headset" },
      { name: "about/cafe", caption: "Coffee break", alt: "Adryan giving a thumbs up at a garden cafe" },
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
    { name: "about/makkah", caption: "Makkah", alt: "Adryan in white with the Makkah clock tower behind him" },
    { name: "about/office2", caption: "Daily workspace", alt: "Adryan at the office" },
    { name: "about/makkah-view", caption: "A view I won't forget", alt: "Adryan seated at a window overlooking the Grand Mosque in Makkah", wide: true },
  ] as { name: string; caption: string; alt: string; wide?: boolean }[],
};

export const about = {
  titleLead: "Turning curiosity into",
  titleAccent: "real impact.",
  body:
    "I'm an AI & Big Data professional at Telkom Indonesia, turning Generative AI and agentic workflows into practical solutions. I care about responsible AI, and I'm pursuing a Master of Information Technology at Universitas Indonesia.",
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
  /** Headline findings (each with how confident it is) and what the project does not claim. */
  findings?: { value: string; title: string; text: string; confidence: "High" | "Medium" | "Low" }[];
  limits?: string[];
  /** Pipeline shown as a flow above the agent cards. */
  flow?: { label: string; note?: string; tone?: "loop" | "opt" }[];
  /** Optional copy overrides for the case-study page; defaults suit the Talent Estimation Agent. */
  copy?: {
    demoLabel?: string;
    coverAlt?: string;
    galleryIntro?: string;
    howTitle?: string;
    methodsTitle?: string;
    archTitle?: string;
    archIntro?: string;
    qualityTitle?: string;
    qualityCard?: string;
    privacyCard?: string;
    ctaTitle?: string;
    ctaText?: string;
  };
};

const TEA = "/projects/talent-estimation-agent";
const JK = "/projects/jakarta-730-hari";

// >>> TAMBAH PROYEK BARU DI SINI (salin satu blok, ganti isinya). Halaman detailnya otomatis dibuat. <<<
export const projects: Project[] = [
  {
    slug: "jakarta-730-hari",
    title: "Jakarta, 730 Hari",
    featured: true,
    category: "Data storytelling · News analytics",
    tagline: "An interactive data film about two years of Jakarta in the news.",
    description:
      "A seven-scene data film built on 690,828 news articles from November 2024 to October 2026. It shows which issues dominated, when attention rose and faded, and how confident each finding is, backed by a pipeline that collects, cleans, labels and tests the data.",
    status: "Live · interactive data film",
    year: "2026",
    role: "Author & developer",
    tags: ["Data storytelling", "NLP", "LangGraph", "PostgreSQL", "Elasticsearch", "Next.js"],
    url: "https://jakarta730.adryanrizkyalviano.me/en/",
    cover: `${JK}/story-map.webp`,
    cover2: `${JK}/story-dashboard.webp`,
    stats: [
      { value: "690,828", label: "news articles analysed" },
      { value: "102", label: "weeks, Nov 2024 to Oct 2026" },
      { value: "7", label: "scenes in the film" },
      { value: "8", label: "issues tracked" },
    ],
    problem:
      "News about a city arrives as thousands of separate stories. Almost no one can see what dominated, when attention rose and faded, or who was asked to answer for it.",
    approach:
      "A pipeline collects and cleans the news, removes duplicates, labels issues, tone and actors, and tests each claim statistically. A static film then tells the result in seven scenes, where every dot stands for about 1,200 articles.",
    principle: {
      title: "Coverage is not reality.",
      text: "More flood stories do not prove more floods, and a missing week is not a quiet week. The film measures what the media covered, shows gaps as gaps, and labels every finding with how confident it is.",
    },
    findings: [
      {
        value: "21%",
        title: "of all Jakarta news in one week of March 2025 was about floods",
        text: "20× the normal share, and the highest peak of any issue in two years.",
        confidence: "High",
      },
      {
        value: "1 wk",
        title: "Media attention on floods halves within a week",
        text: "Five of the six major floods follow this pattern.",
        confidence: "High",
      },
      {
        value: "51%",
        title: "January 2026 was the darkest month",
        text: "The highest share of negative-toned articles in 24 months.",
        confidence: "High",
      },
      {
        value: "+46%",
        title: "Only public transport and crime grew convincingly",
        text: "Share of coverage in year 2 versus year 1. Crime grew by 23%.",
        confidence: "High",
      },
      {
        value: "4.3×",
        title: "Traffic stories are born from events at Monas and MRT works",
        text: "Traffic and public-space stories appear together 4.3× more often than expected.",
        confidence: "Medium",
      },
      {
        value: "4.0×",
        title: "Foreign media write 4× more about pollution",
        text: "The foreign sample is small, so the direction is clear but the size is not.",
        confidence: "Low",
      },
    ],
    limits: [
      "The film measures news coverage, not the city's actual condition.",
      "Missing is not zero: two weeks in June 2025 are absent from the snapshot and shown as gaps.",
      "Topic, tone and entity labels are model output until checked against human-labelled examples.",
      "International outlets are a small share of the sample.",
    ],
    steps: [
      {
        title: "Collect and clean",
        text: "RSS feeds, sitemaps and responsible crawling, with GDELT as a supplement. Duplicates are removed on three levels, from identical URLs to the same event told by different outlets.",
      },
      {
        title: "Label and measure",
        text: "Every article gets issues, tone and the actors involved. Ambiguous cases go to a language model for review, then statistics test which patterns are real.",
      },
      {
        title: "Publish a snapshot",
        text: "Checked results become a versioned snapshot. The site only reads that file, so it never crawls or calls a model while you watch.",
      },
    ],
    shots: [
      {
        src: `${JK}/story-map.webp`,
        title: "Scene 1 · Every dot is news",
        caption:
          "Jakarta as a map of dots, one per roughly 1,200 articles, filling in week by week. Orange weeks lean negative and blue weeks lean positive, with a live ticker of incoming headlines.",
      },
      {
        src: `${JK}/story-dashboard.webp`,
        title: "Scene 2 · The city's mood",
        caption:
          "A chapter at a time: tone of the city against normal, what moved it, the biggest surge of the month, and a timeline of the issues behind it.",
      },
      {
        src: `${JK}/story-patterns.webp`,
        title: "Scene 5 · Two years, two patterns",
        caption:
          "Which issues truly grew between year 1 and year 2, with 95% intervals, and which only flare up briefly. Colour means the change is convincing.",
      },
      {
        src: `${JK}/epilogue.webp`,
        title: "Epilogue · Six findings",
        caption:
          "The summary: each finding comes with its evidence, a number and a confidence label of High, Medium or Low, based on sample size and a statistical test.",
      },
      {
        src: `${JK}/method.webp`,
        title: "How the data works",
        caption:
          "A methodology page that walks through the eight stages from raw HTML to a verified story, so nothing in the film has to be taken on trust.",
      },
    ],
    methods: [
      {
        title: "Three levels of de-duplication",
        points: [
          "Exact: SHA-256 hashes and canonical URLs.",
          "Near-duplicate: MinHash with LSH over five-word shingles and estimated Jaccard similarity.",
          "Shared event: multilingual-e5-base embeddings plus time, place and source context, to separate copies from independent coverage of one event.",
        ],
      },
      {
        title: "Two-stage labelling",
        points: [
          "Stage 1, local: GLiNER2 assigns issues, area relevance, sentiment and entities, with a confidence score and model version stored for every label.",
          "Stage 2, review: ambiguous or high-impact cases escalate to a language model that answers in a validated, logged format.",
          "Sentiment is scored per actor, so a resident's complaint and an official's reply in one story can differ.",
        ],
        note: "Escalation triggers: a top issue score below 0.60, a gap under 0.15 between the top two, uncertain location, or a major story covered by 10+ outlets.",
      },
    ],
    flow: [
      { label: "Scout" },
      { label: "Crawler" },
      { label: "Dedup" },
      { label: "Classifier", note: "LLM review for unclear cases", tone: "loop" },
      { label: "Analyst" },
      { label: "Verifier" },
      { label: "Publisher" },
    ],
    agents: [
      { name: "Scout", kind: "Discovery", text: "Finds articles through RSS feeds, sitemaps and GDELT, strips tracking parameters and checks the queue before any fetch." },
      { name: "Crawler", kind: "Rules + extraction", text: "Fetches within robots.txt, per-domain rate limits and paywall rules, then removes menus, ads and recommendations." },
      { name: "Dedup", kind: "Hash + embeddings", text: "Separates duplicate copies from independent coverage of the same event." },
      { name: "Classifier", kind: "NLP + LLM", text: "Runs GLiNER2 locally and escalates only the unclear or high-impact cases to a language model." },
      { name: "Analyst", kind: "Statistics", text: "Issue share, surge detection, outlets per event, media half-life, co-occurrence and bootstrap intervals." },
      { name: "Verifier", kind: "Quality gates", text: "Eight gates from source health to publishing. Failed extractions are flagged, never counted as zero." },
      { name: "Publisher", kind: "Schema + review", text: "Validates the snapshot, opens a pull request for review, then ships it to the site." },
    ],
    stack: [
      { label: "Discovery", value: "RSS · sitemaps · GDELT · httpx · Crawl4AI · Trafilatura" },
      { label: "Orchestration", value: "LangGraph · Prefect · Langfuse" },
      { label: "Storage", value: "PostgreSQL 16 with pgvector · Elasticsearch 8 · MinIO/S3" },
      { label: "Models", value: "GLiNER2 · multilingual-e5 embeddings · a structured LLM for escalations" },
      { label: "Delivery", value: "Pydantic validation · GitHub pull-request review · Next.js on Vercel" },
    ],
    quality: [
      "Eight quality gates, from source health to publishing.",
      "Every insight links back to article IDs; runs record stage counts, cost and model versions.",
      "Missing weeks stay visible as gaps, and unsupported claims are not exported.",
      "If the pipeline fails, the last published snapshot stays live.",
      "Evaluation criteria were set up front: a 1,000-article human-labelled reference set. These are targets, not reported results.",
    ],
    privacy: [
      "Crawlers follow robots.txt and keep to one request every two seconds per domain.",
      "Paywalls and access rules are respected, and public excerpts are kept short.",
      "Raw HTML is kept for 180 days, and headlines stay credited to their publishers.",
      "An independent personal project, not an official government service.",
    ],
    copy: {
      demoLabel: "Watch the film",
      coverAlt: "Scene 1: Jakarta as a map of news dots",
      galleryIntro: "real screens from the film. Pick a tab to see what each one shows.",
      howTitle: "From raw news to a tested story",
      methodsTitle: "How the labels are made",
      archTitle: "Seven roles, one pipeline",
      archIntro: "Only some roles use a language model. The rest are deterministic or classic NLP, which keeps model calls and cost low.",
      qualityTitle: "Built to be audited, and honest about its limits",
      qualityCard: "Quality gates",
      privacyCard: "Responsible data",
      ctaTitle: "Want to watch it?",
      ctaText: "Press play, or step through the seven scenes yourself. Switch to EN for English.",
    },
  },
  {
    slug: "talent-estimation-agent",
    title: "Talent Estimation Agent",
    category: "Agentic AI · Workforce planning",
    tagline: "Validate talent requests from a WBS, with numbers you can trace.",
    description:
      "A multi-agent system that reads a work breakdown structure, decides which roles each work package needs, and estimates FTE per role with two independent methods. It reviews its own output and exports an Excel workbook with live formulas.",
    status: "Live · open source (MIT)",
    year: "2026",
    role: "Author & developer",
    tags: ["Agentic AI", "LangGraph", "Python", "FastAPI", "Next.js", "Vercel"],
    url: "https://talentlens.adryanrizkyalviano.me/",
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
        text: "Check and correct any flagged rows, approve the result, then download the Excel workbook and a draft reply to the requester.",
      },
    ],
    shots: [
      {
        src: `${TEA}/home.webp`,
        title: "Start here",
        caption:
          "A plain-language start page: a sample result card, the three steps, and a quick checklist for the model, the capability catalog and the WBS file. A demo with fictional data runs without any API key.",
      },
      {
        src: `${TEA}/process.webp`,
        title: "Agents at work",
        caption: "Six agents run in sequence next to a live activity log, so you can see what each step is doing and why.",
      },
      {
        src: `${TEA}/summary.webp`,
        title: "FTE summary",
        caption:
          "Required FTE per role from both methods, grouped by team and compared with the original request. Rows that need a human look are flagged, and one click opens them.",
      },
      {
        src: `${TEA}/breakdown.webp`,
        title: "WBS breakdown",
        caption:
          "One row per work item and role, with search and a filter for rows that need review. Change the role, class or allocation and every total recalculates without calling the model.",
      },
      {
        src: `${TEA}/monthly.webp`,
        title: "Per month",
        caption: "Effort spread across months by working days, as a stacked chart plus a table with peak FTE. Switch between methods and teams.",
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
        caption:
          "A ready-to-edit reply to the requester, built from the calculated numbers. Previous and next links move through the result pages in reading order.",
      },
      {
        src: `${TEA}/catalog.webp`,
        title: "Capability catalog",
        caption:
          "The capabilities each role can apply, in a compact list with a detail panel. Use the built-in catalog, or download it as Excel, edit it and upload your own.",
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
          "Points are multiplied by hours per point (15 by default), then converted with hours per day, days per month and project length into average FTE.",
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
    flow: [
      { label: "Intake" },
      { label: "Estimator" },
      { label: "Reviewer", note: "re-judges up to 2×", tone: "loop" },
      { label: "Augmentation", note: "optional", tone: "opt" },
      { label: "Report" },
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
      { label: "UI", value: "Next.js · React · Tailwind CSS · Recharts (Indonesian interface)" },
      { label: "Evaluation", value: "Kedro pipeline (offline)" },
      { label: "Tooling", value: "uv · Ruff · mypy · pytest · pre-commit · GitHub Actions" },
      { label: "Models", value: "Gemini, Claude, OpenAI, Azure OpenAI or any OpenAI-compatible gateway, with custom headers and token limits" },
    ],
    quality: [
      "Ruff lint and format",
      "mypy type checks",
      "pytest with 94% coverage",
      "Excel formulas recalculated in LibreOffice and compared with the engine",
      "Tests for the model client: endpoints that refuse certain settings, and budget or quota errors that must not be retried",
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
  blurb?: string; // satu kalimat tentang kategori ini
  items: SkillItem[];
};

// >>> TAMBAH SKILL DI SINI. "icon" harus salah satu nama di components/icons.tsx <<<
export const skillGroups: SkillGroup[] = [
  {
    id: "technical",
    blurb: "The hands-on toolbox I use to move, model and visualise data.",
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
    blurb: "Where I spend most of my time now: building with LLMs and agents.",
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
    blurb: "Frameworks for designing systems and improving how organisations work.",
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
    blurb: "Keeping data trustworthy, private and compliant with UU PDP and GDPR.",
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
    blurb: "Getting people, priorities and delivery pointing the same way.",
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
    blurb: "Verified credentials, with the full list of badges on Credly.",
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
    blurb: "Recognition from Universitas Indonesia and Telkom.",
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
    blurb: "The languages I work and travel in.",
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

/** Home-page skills bento: a short story per area, where it is used, and the skills to show. */
export const skillHighlights = [
  {
    id: "ai",
    title: "AI & Agentic",
    text: "Where I spend most of my time now: building with LLMs and multi-agent workflows.",
    outcomes: [
      "Led rapid AI prototyping with LLMs and agents for CX and digital transformation.",
      "Cut issue identification time by over 80% by turning product feedback into structured insights.",
    ],
    usedIn: { label: "Used in the Talent Estimation Agent", href: "/projects" },
    items: ["Generative AI", "LLMs", "Agentic AI", "Prompt Engineering", "Context Engineering", "Tool Use & MCP", "RAG", "Multi-Agent Systems", "AI Workflow & Enterprise Automation", "Rapid AI Prototyping", "AI-Assisted Development"],
  },
  {
    id: "technical",
    title: "Data & Engineering",
    text: "From pipelines and models to dashboards people actually read.",
    items: ["Python", "SQL", "BigQuery", "Deep Learning (TensorFlow)", "Tableau & Data Visualization", "Docker & Containerization", "Google Cloud (GCP)", "Microsoft Azure"],
  },
  {
    id: "governance",
    title: "Data Governance",
    text: "Responsible AI that respects UU PDP and GDPR.",
    items: ["Data Governance", "DAMA-DMBOK", "UU PDP (Indonesia PDP Law)", "GDPR"],
  },
  {
    id: "soft",
    title: "Leadership & Teaching",
    text: "Facilitating bootcamps and aligning stakeholders.",
    items: ["Training & Facilitation", "Task Force Leadership", "Stakeholder Alignment"],
  },
];

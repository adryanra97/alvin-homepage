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
    "Portfolio of Adryan Rizky Alviano (Alvin), Data Scientist at Telkom Indonesia, featuring AI, agentic workflows, data analytics, and interactive storytelling.",
};

export const hero = {
  eyebrow: ["AI", "Data", "Stories"],
  titleLead: "Hi, I'm",
  titleAccent: "Alvin.",
  subline: "Adryan Rizky Alviano · Data Scientist at Telkom Indonesia",
  intro:
    "I build with Generative AI, LLMs and agentic workflows, grounded in solid data and told as stories people can trust. I'm also a Master of IT student at Universitas Indonesia, and I like learning out loud. Always happy to collaborate.",
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
      { name: "about/meeting", caption: "Work mode: on", alt: "Adryan in a green shirt in a team meeting around a long table with laptops", wide: true },
      { name: "about/office", caption: "Daily workspace", alt: "Adryan at the office" },
      { name: "about/team", caption: "Team time", alt: "Adryan with his Telkom teammates around a table of snacks", wide: true },
    ],
  },
  projects: {
    intro: "Things I've built, tinkered with, and learned from. The list is small for now, but it's growing.",
    note: "more on the way!",
    photos: [
      { name: "about/collab", caption: "Building together", alt: "Adryan with three teammates giving thumbs up in the office" },
      { name: "about/wall", caption: "Easygoing", alt: "Adryan smiling in a grey jacket against a stone wall" },
      { name: "about/lamp", caption: "Ready to build", alt: "Adryan smiling in a black shirt beside an ornate lamp post" },
    ],
  },
  skills: {
    intro: "What's in my toolbox, from data and AI to governance and people skills, plus what I'm still learning.",
    note: "always learning",
    photos: [
      { name: "about/road", caption: "Learning on the go", alt: "Adryan in a helmet with a headset" },
      { name: "about/cafe", caption: "Coffee break", alt: "Adryan giving a thumbs up at a garden cafe" },
      { name: "about/hike", caption: "Always exploring", alt: "Adryan and friends on a hiking trail" },
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
    { name: "about/quiet", caption: "Quiet moments", alt: "Adryan in white ihram garments among date palms" },
    { name: "about/sport", caption: "Staying active", alt: "Adryan in sportswear outdoors" },
    { name: "about/friends", caption: "Good times with friends", alt: "Adryan and two friends joking around", wide: true },
    { name: "about/makkah", caption: "Makkah", alt: "Adryan in white with the Makkah clock tower behind him" },
    { name: "about/office2", caption: "Daily workspace", alt: "Adryan at the office" },
    { name: "about/swim", caption: "Weekend laps", alt: "Adryan and a friend smiling and waving at a swimming-pool stand", wide: true },
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
  insightsUrl?: string; // optional deep dive into the live project analysis
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
    galleryNote?: string; // distinguish screenshots and editorial illustrations
    findingsTitle?: string;
    findingsIntro?: string;
    hideFindingConfidence?: boolean;
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
const LT = "/projects/loadtwin";

// >>> TAMBAH PROYEK BARU DI SINI (salin satu blok, ganti isinya). Halaman detailnya otomatis dibuat. <<<
export const projects: Project[] = [
  {
    slug: "jakarta-730-hari",
    title: "Jakarta, 730 Hari",
    featured: true,
    category: "Interactive data storytelling · AI analytics",
    tagline: "See what data and AI can do with two years of Jakarta news.",
    description:
      "A personal side project transforming a fixed archive of 691,986 Jakarta news articles into a cinematic seven-chapter story and The Attention Atlas: five interactive investigations into attention spikes, media perspectives and long-term trends. Explore it in Indonesian or English; the historical dataset does not update in real time.",
    status: "Live · fixed historical archive",
    year: "2026",
    role: "Independent creator · side project",
    tags: ["AI-assisted analytics", "Interactive storytelling", "News analytics", "Data visualization", "NLP", "Next.js"],
    url: "https://jakarta730.adryanrizkyalviano.me/en/",
    insightsUrl: "https://jakarta730.adryanrizkyalviano.me/en/temuan/",
    cover: `${JK}/story-map.webp`,
    cover2: `${JK}/attention-atlas-preview.svg`,
    stats: [
      { value: "691,986", label: "news articles analysed" },
      { value: "103", label: "weeks with observations" },
      { value: "7", label: "cinematic story chapters" },
      { value: "5", label: "interactive investigations" },
    ],
    problem:
      "Hundreds of thousands of headlines make it difficult to see how media attention changes: what explodes for a week, what steadily grows, and how different outlets frame the same city.",
    approach:
      "The project combines AI-assisted news analysis, statistical checks, and immersive visual storytelling. A redesigned seven-chapter story (plus a mobile-first reading mode) introduces the patterns; The Attention Atlas lets visitors explore five investigations from the same locked historical data.",
    principle: {
      title: "Coverage is not reality.",
      text: "More flood stories do not prove more floods, and a missing week is not a quiet week. The analysis measures what the media covered, shows gaps as gaps, and labels every finding with its level of confidence.",
    },
    findings: [
      {
        value: "20.9×",
        title: "Flood coverage surged far above its usual baseline",
        text: "In the week of 3 March 2025, flood coverage reached 22.22% of the analysed articles, compared with a 1.06% local baseline.",
        confidence: "High",
      },
      {
        value: "4.11×",
        title: "Protests took a larger share of international topic-tagged coverage",
        text: "Protest stories were 23.44% of the 529 tagged international articles, versus 5.70% of the 150,120 tagged domestic articles; the international sample is small.",
        confidence: "Low",
      },
      {
        value: "+80%",
        title: "Environmental coverage gained share over time",
        text: "Average weekly coverage share rose from 0.755% to 1.360% across the two periods; the estimated relative-change interval is +30.5% to +136.1%.",
        confidence: "High",
      },
      {
        value: "−14%",
        title: "Government-topic coverage moved in the opposite direction",
        text: "Average weekly share fell from 3.796% to 3.265%; the estimated relative-change interval is −31.6% to −1.9%.",
        confidence: "High",
      },
      {
        value: "3 of 4",
        title: "Flood-attention peaks halved within a week",
        text: "Three of the four documented flood-attention episodes returned to half their peak share after one week; the remaining episode took two weeks.",
        confidence: "High",
      },
    ],
    limits: [
      "The dashboard measures historical news coverage, not the city's actual condition.",
      "Missing is not zero: two weeks in June 2025 are absent from the snapshot and shown as gaps.",
      "The archive spans 105 calendar weeks from November 2024 to October 2026, with 103 observed weeks and two missing weeks. “730 days” is the editorial project title.",
      "Topic, tone and entity labels are model output until checked against human-labelled examples.",
      "Only 529 international articles in the ten tagged topic categories support the domestic-versus-international topic comparison. Interpret those ratios cautiously.",
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
          "Jakarta as a map of dots, one per roughly 1,200 articles, animating through historical weeks. Orange weeks lean negative and blue weeks lean positive; the headline ticker replays items from the fixed dataset.",
      },
      {
        src: `${JK}/attention-atlas-preview.svg`,
        title: "The Attention Atlas · Interactive investigations",
        caption:
          "An editorial summary of the new exploration layer (not a literal interface screenshot): a 20.9× flood-attention surge, 4.11× protest-topic share gap, and +80% environmental coverage shift. The website lets visitors investigate these patterns in five interactive views.",
      },
      {
        src: `${JK}/story-dashboard.webp`,
        title: "Scene 2 · The city's mood",
        caption:
          "The original seven-chapter cinematic narrative remains available, with calmer transitions, clearer evidence-led highlights and a mobile-first reading mode.",
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
          "The cinematic epilogue connects the most important patterns and their evidence; The Attention Atlas offers interactive ways to explore them.",
      },
      {
        src: `${JK}/method.webp`,
        title: "How the data works",
        caption:
          "A methodology page that walks through eight stages from raw HTML to verified insights, so the visual story can be checked against its evidence.",
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
      "The published portfolio reads a locked, versioned snapshot; it does not ingest new articles or run AI models during exploration.",
      "Evaluation criteria were set up front: a 1,000-article human-labelled reference set. These are targets, not reported results.",
    ],
    privacy: [
      "Crawlers follow robots.txt and keep to one request every two seconds per domain.",
      "Paywalls and access rules are respected, and public excerpts are kept short.",
      "Raw HTML is kept for 180 days, and headlines stay credited to their publishers.",
      "An independent personal project, not an official government service.",
    ],
    copy: {
      demoLabel: "Explore the story",
      coverAlt: "The interactive Jakarta 730 story, with a map of news-coverage dots",
      galleryIntro: "project visuals: original interface captures and an editorial overview of the new Attention Atlas. Choose a tab to see what the experience reveals.",
      galleryNote: "Gallery combines interface captures with one editorial illustration; some data is a historical snapshot, not a live feed.",
      howTitle: "From raw news to a tested story",
      methodsTitle: "How the labels are made",
      archTitle: "Seven roles, one pipeline",
      archIntro: "Only some roles use a language model. The rest are deterministic or classic NLP, which keeps model calls and cost low.",
      qualityTitle: "Built to be audited, and honest about its limits",
      qualityCard: "Quality gates",
      privacyCard: "Responsible data",
      ctaTitle: "Curious what the data reveals?", 
      ctaText: "Explore the seven-chapter story, jump to the most striking moments, or open The Attention Atlas for five interactive investigations. Indonesian and English versions are available.",
    },
  },
  {
    slug: "loadtwin",
    title: "LoadTwin",
    category: "Digital twin · Capacity intelligence",
    tagline: "A moving digital twin, seven ways to test a service.",
    description:
      "A personal engineering side project turning load-test measurements into an interactive digital twin. Watch request flow, evaluate peak and stress capacity against SLAs, and test failures such as node crashes or slow dependencies using a SimPy-based engine. Predictions are model estimates, not production telemetry.",
    status: "Live · interactive simulation",
    year: "2026",
    role: "Independent creator · personal side project",
    tags: ["Digital twin", "Performance engineering", "SimPy", "Capacity planning", "Next.js", "Python"],
    url: "https://loadtwin.adryanrizkyalviano.me/",
    repo: "https://github.com/adryanra97/Loadtwin",
    cover: `${LT}/architecture-preview.svg`,
    cover2: `${LT}/scenario-comparison.svg`,
    stats: [
      { value: "7", label: "simulation methods in one service model" },
      { value: "LIVE", label: "animated request flow & controls" },
      { value: "SLA", label: "peak, stress & failure testing" },
      { value: "SimPy", label: "discrete-event simulation engine" },
    ],
    problem:
      "A load test reveals how a system performed under specific conditions. It cannot directly answer what happens at double the traffic, on different hardware, or with a slow dependency. Capacity decisions often demand scenarios that have not been tested yet.",
    approach:
      "LoadTwin uses an observed baseline to calibrate a discrete-event service model. You can explore simulated traffic and resource changes, inspect where constraints emerge, and compare predictions against SLA thresholds. The model provides decision support, not a substitute for real load testing.",
    principle: {
      title: "Model the bottleneck, not just the headline latency.",
      text: "A service can remain within its p95 latency target while a critical resource is already saturated. LoadTwin keeps response time, utilization, throughput and the model's assumptions visible together.",
    },
    findings: [
      {
        value: "46.8%",
        title: "Predicted CPU at the documented peak load",
        text: "In the example scenario at 45 requests per second, the model predicts 46.8% CPU utilization and a p95 latency of 390 ms.",
        confidence: "High",
      },
      {
        value: "93.3%",
        title: "The same example becomes CPU-constrained under stress",
        text: "At 90 requests per second, predicted CPU reaches 93.3%, crossing the example 80% CPU limit. Predicted p95 is 777 ms.",
        confidence: "High",
      },
    ],
    limits: [
      "These are reproducible documented example predictions, not measurements from a live production service.",
      "The quality of a prediction depends on how representative the load-test baseline and resource assumptions are.",
      "Modelled capacity and cost estimates should be checked against real load tests and actual infrastructure pricing before operational decisions.",
    ],
    steps: [
      {
        title: "Measure a baseline",
        text: "Enter the observed service configuration, requests per second, CPU use, p95 latency and other known load-test values — or begin with the bundled example.",
      },
      {
        title: "Change the conditions",
        text: "Choose a target environment and explore traffic growth, machine sizing, traffic patterns, dependency issues or node failures.",
      },
      {
        title: "Review the constraint",
        text: "Inspect the modelled SLA result, bottleneck and assumptions. Compare scenarios and validate the output with new measurements.",
      },
    ],
    shots: [
      {
        src: `${LT}/screens/live.webp`,
        title: "Live Playground",
        caption: "Actual LoadTwin screen: the moving request-flow simulator with its traffic, node, vCPU, thread and failure controls.",
      },
      {
        src: `${LT}/screens/evaluate.webp`,
        title: "Evaluate · Capacity verdict",
        caption: "Actual successful simulation run, checking throughput, p95 latency and SLA limits on the service.",
      },
      {
        src: `${LT}/screens/autosize.webp`,
        title: "Auto-size · Infrastructure options",
        caption: "Actual capacity and cost exploration using the built-in instance catalogue.",
      },
      {
        src: `${LT}/screens/patterns.webp`,
        title: "Load Patterns · Time series",
        caption: "Actual run of the traffic-pattern engine with time-window performance charts.",
      },
      {
        src: `${LT}/screens/failures.webp`,
        title: "Failure Testing · Node crash",
        caption: "Actual fault-injection simulation after choosing a node-crash preset; compares resilience with a healthy run.",
      },
      {
        src: `${LT}/screens/sensitivity.webp`,
        title: "Sensitivity · Key drivers",
        caption: "Actual sensitivity run showing which inputs move modelled latency the most.",
      },
      {
        src: `${LT}/screens/validate.webp`,
        title: "Validate Model · Import workflow",
        caption: "Actual load-test sample import and calibration screen. A real CPU reading is required before the validation result can be calculated.",
      },
      {
        src: `${LT}/screens/ask.webp`,
        title: "Ask LoadTwin · What-if answer",
        caption: "Actual application response to a what-if question about traffic doubling.",
      },
    ],
    methods: [
      {
        title: "Calibrated scenario modelling",
        points: [
          "Start from observed load-test throughput, service resources, CPU usage and p95 latency.",
          "Use discrete-event simulation with SimPy to explore requests, queues and shared resource constraints.",
          "Change the target infrastructure or traffic assumptions while keeping the measured baseline explicit.",
        ],
      },
      {
        title: "Interpret and validate",
        points: [
          "Compare predicted response time, throughput and resource utilization with the configured SLA limits.",
          "Explore failure, traffic-pattern, sensitivity and sizing scenarios with consistent inputs.",
          "Use model validation to compare predictions against fresh tests from tools such as k6, JMeter or Locust.",
        ],
        note: "Simulation results are engineering estimates, not guarantees of production behaviour.",
      },
    ],
    flow: [
      { label: "Load test" },
      { label: "Calibration" },
      { label: "SimPy model" },
      { label: "Scenario" },
      { label: "SLA review" },
    ],
    agents: [
      {
        name: "Baseline calibration",
        kind: "Measured inputs",
        text: "Defines the system from observed throughput, CPU, latency and test-environment resources.",
      },
      {
        name: "Traffic simulation",
        kind: "SimPy · discrete events",
        text: "Models arrival patterns and requests moving through queues and shared service capacity.",
      },
      {
        name: "Resource constraints",
        kind: "Infrastructure model",
        text: "Estimates how CPU, service nodes and dependency limits change under a different scenario.",
      },
      {
        name: "Decision review",
        kind: "SLA & validation",
        text: "Compares predictions to limits and helps identify which assumption to test next.",
      },
    ],
    stack: [
      { label: "Simulation", value: "Python · SimPy · calibrated discrete-event modelling" },
      { label: "Web app", value: "Next.js · React · TypeScript" },
      { label: "Exploration", value: "Capacity evaluation · auto-sizing · load patterns · failure & sensitivity analysis" },
      { label: "Validation", value: "Comparison against load-test data (k6 · JMeter · Locust)" },
      { label: "Deployment", value: "Vercel · GitHub" },
    ],
    quality: [
      "Documented example outputs are clearly separated from measured production telemetry.",
      "The same baseline can be used to explore capacity, load, resilience and sizing questions.",
      "Predictions are presented with resource limits and assumptions, not just pass/fail labels.",
    ],
    privacy: [
      "Saved service settings are held in the visitor's browser; simulation requests are sent to the engine.",
      "Do not paste confidential load-test records or credentials into public demonstrations.",
      "Real-world infrastructure decisions should be verified with representative tests.",
    ],
    copy: {
      demoLabel: "Try the live playground",
      coverAlt: "Animated request-flow preview styled after the actual LoadTwin Live Playground interface",
      galleryIntro: "actual screenshots from the deployed LoadTwin app, including simulation results and the validation import workflow.",
      galleryNote: "Screens captured in a real Chromium browser, directly from LoadTwin. Simulations used the project example service; the images do not represent current production performance.",
      findingsTitle: "What the example model predicts",
      findingsIntro: "These values come from two documented model scenarios. They describe predictions, not statistical confidence or real-world measurements.",
      hideFindingConfidence: true,
      howTitle: "From one measured baseline to a more informed decision",
      methodsTitle: "How the simulation works",
      archTitle: "One model, four functional stages",
      archIntro: "These are simulation stages and engineering components, not autonomous AI agents.",
      qualityTitle: "Evidence, assumptions and model limits",
      qualityCard: "What makes the results interpretable",
      privacyCard: "Data handling and responsible use",
      ctaTitle: "Curious where your service reaches its limit?",
      ctaText: "Try the original animated Live Playground and all seven real simulation tools: Evaluate, Auto-size, Load Patterns, Failures, Sensitivity, Validate Model, and Ask LoadTwin. Only the real engine calculates results from your configuration.",
    },
  },
  {
    slug: "talent-estimation-agent",
    title: "TalentLens",
    featured: false,
    category: "Agentic AI · Capability & workforce intelligence",
    tagline: "From project documents to talent decisions you can explain.",
    description:
      "TalentLens turns a work breakdown structure into a transparent workforce plan. A six-stage agent workflow reads project documents, maps the capability each role needs, independently estimates FTE through Use Case Points and bottom-up calculations, reviews discrepancies, and presents an editorial seven-section report. Users can audit and correct work items, explore an optional AI-assistance scenario, and export a formula-driven Excel workbook.",
    status: "Live · editorial redesign in preview",
    year: "2026",
    role: "Creator · product, AI agents & full-stack engineering",
    tags: ["Agentic AI", "LangGraph", "Capability mapping", "Workforce planning", "Next.js", "Python", "UX/UI"],
    url: "https://talentlens.adryanrizkyalviano.me/",
    repo: "https://github.com/adryanra97/talent-estimation-agent",
    cover: `${TEA}/home.webp`,
    cover2: `${TEA}/summary.webp`,
    stats: [
      { value: "6", label: "orchestrated workflow stages" },
      { value: "2", label: "independent FTE methods" },
      { value: "7", label: "connected report sections" },
      { value: "0", label: "server-side document storage" },
    ],
    problem:
      "Project staffing decisions begin with scattered WBS files, request documents, roles, and assumptions. Without a structured process, it is difficult to explain why a particular capability is needed, whether the requested FTE is justified, or which tasks could realistically benefit from AI.",
    approach:
      "I designed TalentLens as an evidence-first workflow rather than a black-box chatbot. Document intake leads into role and skill classification, deterministic UCP and bottom-up calculations, a reviewer loop, optional AI augmentation, and a readable executive report. The redesigned UI reveals the headline decision before the technical details, while maintaining a clear audit trail from each work item to its estimate.",
    principle: {
      title: "Agentic reasoning, deterministic numbers, human ownership.",
      text: "Language models assess context and explain their choices. The Python engine performs the calculations. A human can inspect, correct and approve the result. The interface is designed around recognition, progressive disclosure and clear status feedback instead of overwhelming people with a wall of metrics.",
    },
    steps: [
      {
        title: "Prepare the evidence",
        text: "Add an Excel WBS and, if available, the project request or supporting documents. Choose the scope of roles and a capability catalog; the built-in fictional demo works without an API key.",
      },
      {
        title: "Watch the agent journey",
        text: "Orchestrator, Intake, Estimator, Reviewer, optional AI Augmentation and Report move through a visible workflow. The live process page shows each stage and its activity log.",
      },
      {
        title: "Review the evidence",
        text: "Read the editorial executive summary, compare UCP with bottom-up FTE, check monthly peaks, inspect capability coverage and resolve flagged WBS rows. Detailed technical tables are available on demand.",
      },
      {
        title: "Communicate a decision",
        text: "Explore the separate AI-assistance scenario, review assumptions, approve the result and export a formula-based workbook alongside an editable response draft.",
      },
    ],
    shots: [
      {
        src: `${TEA}/home.webp`,
        title: "01 · A new first impression",
        caption: "The redesigned TalentLens homepage uses a navy editorial design and a moving six-stage document-to-agent journey. The built-in fictional project can be explored without a model key.",
      },
      {
        src: `${TEA}/process.webp`,
        title: "02 · Agents in motion",
        caption: "The real run view follows agent stage transitions with a progress track, completion states and timestamped events; it is not a decorative workflow illustration.",
      },
      {
        src: `${TEA}/summary.webp`,
        title: "03 · Executive FTE report",
        caption: "The new evidence-first report leads with an actionable takeaway, primary FTE metrics and side-by-side UCP versus bottom-up role comparisons. The full technical table opens only when needed.",
      },
      {
        src: `${TEA}/breakdown.webp`,
        title: "04 · WBS review",
        caption: "Filter the underlying work items, check flagged rows and edit role involvement, complexity or FTE allocation. User changes trigger deterministic recalculation.",
      },
      {
        src: `${TEA}/monthly.webp`,
        title: "05 · Monthly workload",
        caption: "A calmer stacked chart and detailed table reveal monthly capacity, the busiest period and differences between the two estimation methods.",
      },
      {
        src: `${TEA}/capability.webp`,
        title: "06 · Capability coverage",
        caption: "Trace skills and role assignments back to WBS items. Search and progressively reveal the detailed capability mapping instead of browsing an endless list.",
      },
      {
        src: `${TEA}/ai-assist.webp`,
        title: "07 · AI assistance scenario",
        caption: "Compare baseline and AI-assisted estimates per role, inspect task-level savings assumptions, and keep the original staffing baseline unchanged.",
      },
      {
        src: `${TEA}/findings.webp`,
        title: "08 · Findings & audit trail",
        caption: "Review issues grouped by severity, calculation assumptions and an expandable trace of the agent's decisions.",
      },
      {
        src: `${TEA}/message.webp`,
        title: "09 · Shareable response",
        caption: "A guided, editable message helps communicate findings alongside a downloadable Excel workbook for traceability.",
      },
      {
        src: `${TEA}/catalog.webp`,
        title: "10 · Searchable capability catalog",
        caption: "Find roles by team, keyword or skill, open their responsibility boundaries and import an updated catalog when requirements change.",
      },
      {
        src: `${TEA}/settings.webp`,
        title: "11 · Model configuration",
        caption: "Provider selection, session-only API key handling, model connection testing and privacy controls live in a guided configuration page.",
      },
      {
        src: `${TEA}/method.webp`,
        title: "12 · Explainable methodology",
        caption: "Readable UCP and bottom-up walkthroughs show formulas, source assumptions, and how to interpret the numbers before making a decision.",
      },
      {
        src: `${TEA}/about.webp`,
        title: "13 · The product story",
        caption: "The redesigned About page explains why TalentLens exists, how its six workflow stages work, and which controls matter for a responsible pilot.",
      },
    ],
    methods: [
      {
        title: "Use Case Points (UCP)",
        points: [
          "Classify each work item by role as Simple (5), Average (10) or Complex (15), including a configurable supporting-role factor.",
          "Include actor weights and apply technical (TCF) and environmental (EF) factors.",
          "Convert UCP using productive hours per point (PHM), working-day capacity and project duration into average FTE.",
        ],
        note: "Inspired by Karner's UCP approach; role-level evidence and model judgments are reviewable.",
      },
      {
        title: "Bottom-up estimation",
        points: [
          "Read item schedules and working days from the WBS.",
          "Determine role involvement, FTE allocation and quantity from the work being done.",
          "Calculate person-days = workdays × allocation × quantity, then convert into average FTE; compare against UCP and the original request.",
        ],
        note: "Independent from the UCP estimate; mismatches can be sent back to the Reviewer loop or a human.",
      },
    ],
    flow: [
      { label: "Orchestrator", note: "coordination" },
      { label: "Intake", note: "documents" },
      { label: "Estimator", note: "UCP + bottom-up" },
      { label: "Reviewer", note: "recheck loop", tone: "loop" },
      { label: "Augmentation", note: "optional", tone: "opt" },
      { label: "Report", note: "decision" },
    ],
    agents: [
      { name: "Orchestrator", kind: "Code", text: "Coordinates the agent graph, execution stages, retries, review rounds and shared event trace." },
      { name: "Intake Agent", kind: "Code + LLM", text: "Reads the WBS and supporting request documents, establishing the project inputs and role demand." },
      { name: "Estimator Agent", kind: "LLM + code", text: "Maps work items to roles and capabilities, records classification and allocation reasons, and calculates both FTE methods." },
      { name: "Reviewer Agent", kind: "Code + LLM", text: "Checks divergences, overlaps and gaps. Can return questionable rows to Estimator for up to two re-evaluations." },
      { name: "Augmentation Agent", kind: "Optional · LLM + code", text: "Maps activities to capability-level AI support and calculates a separate assistance scenario without changing the baseline." },
      { name: "Report", kind: "Code + LLM", text: "Assembles the executive report, findings, Excel export and an editable message draft." },
    ],
    stack: [
      { label: "Agent orchestration", value: "Python 3.12 · LangGraph · LangChain chat models" },
      { label: "Typed contracts", value: "Pydantic v2 with structured output and schema checks" },
      { label: "Deterministic engine", value: "Python calculations for UCP, bottom-up, monthly and assisted scenarios" },
      { label: "API", value: "FastAPI · streaming status updates · Vercel Python Functions" },
      { label: "Spreadsheet", value: "openpyxl · formula-driven Excel workbook" },
      { label: "Interface", value: "Next.js 15 · React 19 · Tailwind CSS · Recharts" },
      { label: "Model providers", value: "Gemini, Claude, OpenAI, Azure OpenAI, OpenAI-compatible endpoints" },
      { label: "Evaluation & delivery", value: "Kedro · Ruff · mypy · pytest · GitHub Actions · Vercel" },
    ],
    quality: [
      "Two independent estimation paths with a dedicated review and reconciliation stage",
      "Human edits and approval; flagged work items remain traceable",
      "Python tests and typed checks in the repository's CI configuration",
      "Excel engine formulas and reconciliation checks",
      "Next.js and TypeScript production build validated for the redesigned UI",
      "Accessible navigation, progressive disclosure, scoped filters and keyboard-focus support",
    ],
    privacy: [
      "No persistent database or document storage on the application server.",
      "Uploaded files are parsed in memory and an API key is held in the current browser tab.",
      "Optional masking can replace e-mail addresses, phone numbers and 16-digit ID numbers before sending text to a model.",
      "The external model provider receives only the text submitted for analysis; provider handling must be reviewed before sensitive use.",
      "The public demo uses fictional project data, not internal customer information.",
    ],
    docsNote: "Structured analysis and design documentation accompanies the source repository; the interactive app also explains its methodology and assumptions.",
    copy: {
      demoLabel: "Explore TalentLens",
      coverAlt: "Redesigned TalentLens homepage: navy editorial layout with an animated six-stage agent workflow",
      galleryIntro: "actual interface screens from the latest TalentLens redesign. Choose a chapter to explore.",
      galleryNote: "Captured in a real browser from the redesigned preview. The analytical screens use the fictional built-in demo; some changes may be pending deployment to the production URL.",
      howTitle: "Four steps: from evidence to decisions",
      methodsTitle: "Two methods, one auditable result",
      archTitle: "Six stages. One explainable decision.",
      archIntro: "Agent activity is visible as it runs. Review and optional AI augmentation are separate from the deterministic calculation engine.",
      qualityTitle: "Designed for transparent, reviewable decisions",
      qualityCard: "Controls and checks",
      privacyCard: "Data handling",
      ctaTitle: "Explore the redesigned TalentLens.",
      ctaText: "Try the fictional sample workflow without an API key, inspect the results, then review the source and methodology.",
    },
  }
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
    usedIn: { label: "Used in TalentLens", href: "/projects/talent-estimation-agent" },
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

export const bookingUrl = "https://tidycal.com/denizzzai/45-minute-meeting";

export const nav = {
  brand: "Brillas Labs",
  links: [
    { label: "Solutions", href: "#solutions" },
    { label: "How it works", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" }
  ],
  cta: { label: "Discuss your workflow", href: bookingUrl }
};

export const hero = {
  eyebrow: "AI product studio",
  heading: {
    before: "AI infrastructure for ",
    highlight: "real business workflows",
    after: "."
  },
  subcopy:
    "Brillas Labs designs, builds, and manages voice and operational AI agents that connect to your systems, follow your workflows, and complete real work.",
  primaryCta: { label: "Discuss your workflow", href: bookingUrl },
  secondaryCta: { label: "Explore solutions", href: "#solutions" },
  industries: [
    "Financial services",
    "Enterprise operations",
    "Travel & hospitality",
    "Professional services",
    "Customer service"
  ]
};

export type Solution = {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const solutionsIntro = {
  badge: "Solutions",
  heading: "Agents that perform real work",
  text: "Not chatbots or isolated demos — managed systems that connect to your tools and data, follow your business rules, and keep humans in the loop where it matters."
};

export const solutions: Solution[] = [
  {
    index: "01",
    title: "Voice Agents",
    description:
      "Answer inbound calls, qualify requests, book appointments, and send your team the information they need — connected to your CRM and calendars.",
    capabilities: [
      "Inbound call handling and routing",
      "Lead qualification and customer intake",
      "Appointment scheduling",
      "Multilingual, around-the-clock coverage"
    ]
  },
  {
    index: "02",
    title: "Operational Agents",
    description:
      "Structured work across your tools: retrieve information, process internal requests, update systems, and coordinate tasks by your business rules.",
    capabilities: [
      "Reporting and document workflows",
      "Knowledge retrieval and internal search",
      "Request intake and routing",
      "Human approval on sensitive steps"
    ]
  },
  {
    index: "03",
    title: "AI Infrastructure",
    description:
      "The layer that moves AI from isolated experiments into operations: retrieval, integrations, evaluation, monitoring, and governance.",
    capabilities: [
      "Data pipelines and retrieval systems",
      "APIs and system integrations",
      "Evaluation and monitoring",
      "Permissions and human-in-the-loop controls"
    ]
  },
  {
    index: "04",
    title: "AI Product Development",
    description:
      "From workflow mapping through production rollout — strategy, architecture, MVP development, and ongoing optimization.",
    capabilities: [
      "Product strategy and workflow mapping",
      "Agent and technical architecture",
      "MVP development",
      "Production rollout and optimization"
    ]
  }
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  points: string[];
};

export const processIntro = {
  badge: "How it works",
  heading: "From workflow review to a running system",
  text: "Engagements are structured as an initial setup fee, implementation and integration, and a monthly management and optimization fee."
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We review your workflows, define the problem, and map where an agent creates measurable value.",
    points: ["Workflow and integration review", "Technical feasibility", "Scope and ROI framing"]
  },
  {
    index: "02",
    title: "Build",
    description:
      "We design and build the agent, connect it to your systems, and test it against your real workflows.",
    points: ["Agent development and integrations", "Evaluation and testing", "Human review design"]
  },
  {
    index: "03",
    title: "Operate",
    description:
      "We monitor, optimize, and extend the system in production — it keeps improving after launch.",
    points: ["Monitoring and support", "Prompt, logic, and model updates", "Performance reporting"]
  }
];

export const product = {
  badge: "Products",
  name: "Vincula",
  byline: "by Brillas",
  promise: "One screen for the people, context, and actions that matter.",
  description:
    "A personal CRM and relationship intelligence platform. Vincula unifies contacts from your phone, email, calendar, and messaging apps into a single identity layer — with AI-enriched context and suggested actions.",
  capabilities: [
    "Contact sync across iPhone, Gmail, Telegram, LinkedIn, and more",
    "Duplicate detection and profile merging",
    "AI-enriched context and suggested actions"
  ]
};

export type CredibilityItem = {
  org: string;
  detail: string;
};

export const aboutIntro = {
  badge: "About",
  heading: "Built on enterprise experience",
  text: "Brillas Labs was founded by Denis, whose background spans AI, data, and operations across enterprise and regulated financial environments."
};

export const credibility: CredibilityItem[] = [
  {
    org: "Royal Caribbean Group",
    detail:
      "Led end-to-end development of a generative AI chatbot deployed inside a mobile app — RAG, LangChain, and vector databases at enterprise scale."
  },
  {
    org: "Brown Brothers Harriman",
    detail:
      "Automated manual workflows and helped move a classification system from MVP to production in a regulated financial environment."
  },
  {
    org: "Tinkoff Investments",
    detail:
      "Worked with large financial datasets — dashboard performance, analytics governance, and risk-related analytics in fintech."
  },
  {
    org: "FIFA World Cup 2018",
    detail:
      "Supported FanID operational data and cross-team operations, resolving high volumes of technical issues under pressure."
  }
];

export const faqIntro = {
  badge: "FAQs",
  heading: "Questions we get all the time."
};

export const faqItems = [
  {
    question: "How does pricing work?",
    answer:
      "Engagements are structured as an initial setup fee, an implementation and integration fee, and a monthly management and optimization fee — plus usage-based costs when applicable. We scope everything after a workflow review, so you see the full structure before any work begins."
  },
  {
    question: "How are you different from other AI agencies?",
    answer:
      "We build production systems, not demos. That means real integrations with your tools and data, evaluation before deployment, monitoring in operation, and human review designed into workflows where accuracy matters. We are not a chatbot shop or a no-code automation freelancer."
  },
  {
    question: "What does \"production-ready\" actually mean?",
    answer:
      "A system your team can rely on: tested against your real workflows before launch, with logging, monitoring, escalation paths, permission controls, and clear human approval points for sensitive decisions."
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "Launch starts the Operate phase: we monitor the system, optimize prompts and logic, apply model updates, review usage, and report on performance. The system keeps improving as your business changes."
  },
  {
    question: "How long does it take to launch an agent?",
    answer:
      "It depends on scope. A focused voice agent with standard integrations moves quickly; a multi-system operational agent takes more discovery and build time. On the discovery call we map the fastest realistic path for your workflows."
  }
];

export const finalCta = {
  heading: "Have a workflow in mind?",
  text: "Book a discovery call and we'll map the fastest path from idea to a production system.",
  cta: { label: "Book a discovery call", href: bookingUrl }
};

export const footerData = {
  brand: "Brillas Labs",
  tagline: "AI infrastructure for real business workflows.",
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Voice Agents", href: "#solutions" },
        { label: "Operational Agents", href: "#solutions" },
        { label: "AI Infrastructure", href: "#solutions" },
        { label: "AI Product Development", href: "#solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "How it works", href: "#process" },
        { label: "Products", href: "#products" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Socials",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/zakharov-denis/", external: true },
        {
          label: "Instagram",
          href: "https://www.instagram.com/vibe_founding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          external: true
        },
        { label: "X (Twitter)", href: "https://x.com", external: true }
      ]
    }
  ],
  legalName: "BRILLAS LABS LLC",
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-page" }
  ]
};

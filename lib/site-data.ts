export type Service = {
  slug: string;
  shortLabel: string;
  title: string;
  summary: string;
  metaDescription: string;
  highlights: string[];
  deliverables: string[];
  outcomes: string[];
  faq: { question: string; answer: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
};

export const company = {
  name: "Seamless VA",
  miniTagline: "Operational support for founders and lean teams",
  email: "sales@seamlessva.com",
  phone: "+1-289-769-1537",
  location: "268 Hillside Dr, Mississauga, Ontario, Canada",
  siteUrl: "https://seamless-va.com",
  toolStack: [
    "Google Workspace",
    "QuickBooks",
    "HubSpot",
    "ClickUp",
    "Canva",
    "Meta Ads",
    "Calendly",
    "Zapier",
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://ca.linkedin.com/" },
  ],
  positioningPoints: [
    {
      label: "Visibility",
      title: "You always know who owns the next step.",
      body: "We replace inbox chaos and half-documented handoffs with repeatable support workflows, clear accountability, and fast follow-through.",
    },
    {
      label: "Capacity",
      title: "Your leadership time goes back to decisions, not cleanup.",
      body: "From scheduling and inbox management to bookkeeping prep and campaign execution, we take recurring operational work off the founder desk.",
    },
    {
      label: "Confidence",
      title: "Support is mapped to process, not personality.",
      body: "We document how work should move, so service quality stays consistent as your business adds clients, offers, and internal complexity.",
    },
  ],
};

export const services: Service[] = [
  {
    slug: "virtual-assistant",
    shortLabel: "Daily operations",
    title: "Virtual Assistant Services",
    summary:
      "Executive support, inbox control, calendar cleanup, task coordination, and recurring admin handled with more structure than a generic VA marketplace.",
    metaDescription:
      "Virtual assistant support for founders and operators who need reliable admin execution, task coordination, and calmer daily operations.",
    highlights: [
      "Inbox triage, scheduling, travel support, and recurring follow-up management",
      "Client communications and meeting prep without dropping context",
      "Task tracking and operating rhythm support across your tools",
    ],
    deliverables: [
      "Calendar and inbox management",
      "Meeting prep, notes, and follow-ups",
      "CRM and pipeline hygiene",
      "Task coordination across internal and client-facing work",
    ],
    outcomes: [
      "Fewer operational handoffs landing back on the founder",
      "Cleaner communication and response coverage",
      "Higher consistency on repeat admin and account-management tasks",
    ],
    faq: [
      {
        question: "What kind of businesses is this best for?",
        answer:
          "This is strongest for founder-led service businesses, agencies, and operators who need reliable support without building a full in-house operations team.",
      },
      {
        question: "Do you work inside our existing tools?",
        answer:
          "Yes. We typically plug into the systems you already use, then tighten the process around them so the work is easier to hand off and easier to audit.",
      },
    ],
  },
  {
    slug: "bookkeeping-accounting",
    shortLabel: "Financial clarity",
    title: "Bookkeeping & Accounting Support",
    summary:
      "Transaction organization, reporting prep, and financial housekeeping designed to keep leadership informed without turning month-end into a scramble.",
    metaDescription:
      "Bookkeeping support that gives growing teams cleaner records, steadier reporting cadence, and fewer month-end surprises.",
    highlights: [
      "Recurring bookkeeping workflows tuned for small, growing teams",
      "Reporting support that improves handoff quality to accountants and owners",
      "Better visibility into what needs attention before it becomes expensive",
    ],
    deliverables: [
      "Transaction categorization and bookkeeping upkeep",
      "Invoice, receipt, and reconciliation support",
      "Reporting prep and documentation for monthly reviews",
      "Process cleanup around finance admin",
    ],
    outcomes: [
      "Cleaner books and fewer loose ends at month-end",
      "Less founder time spent chasing records",
      "More confidence when reviewing cashflow and expenses",
    ],
    faq: [
      {
        question: "Is this a replacement for a CPA?",
        answer:
          "No. This support is meant to improve the quality and consistency of the underlying finance operations so your accountant or bookkeeper can work faster and cleaner.",
      },
      {
        question: "Can you help if the books already feel messy?",
        answer:
          "Yes. We often start with stabilization and documentation so recurring bookkeeping becomes manageable before we optimize further.",
      },
    ],
  },
  {
    slug: "automation-digital-marketing",
    shortLabel: "Growth execution",
    title: "Automation & Digital Marketing",
    summary:
      "Execution support for campaigns, lead handling, process automation, and visibility tasks that help your growth engine run with less manual overhead.",
    metaDescription:
      "Marketing execution and automation support for lean teams that need campaigns, lead workflows, and operational follow-through.",
    highlights: [
      "Campaign support across social, CRM, and lead follow-up workflows",
      "Automation opportunities identified before headcount becomes the default answer",
      "Execution help that connects revenue-side work to the operations underneath it",
    ],
    deliverables: [
      "Campaign coordination and content publishing support",
      "Lead workflow cleanup and automation setup",
      "Reporting support for growth activity",
      "Operational handoff design between sales, marketing, and support",
    ],
    outcomes: [
      "Fewer leads lost between capture and follow-up",
      "Less repetitive work on the growth side of the business",
      "Clearer operating handoffs across marketing and service delivery",
    ],
    faq: [
      {
        question: "Do you run strategy or just execution?",
        answer:
          "We support execution first, but we also surface operational and systems recommendations when we see obvious points of friction or leakage.",
      },
      {
        question: "What happens if our workflows are not documented yet?",
        answer:
          "That is common. We usually start by documenting the current flow, stabilizing the high-friction steps, and then introducing automation where it will actually help.",
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "modernizing-insurance-sales",
    title: "Modernizing Insurance Sales",
    industry: "Insurance",
    summary:
      "Support operations and sales coordination were cleaned up so the team could move faster without losing context between conversations and follow-up.",
    challenge:
      "The client needed steadier sales support, cleaner follow-up discipline, and less operational leakage between conversations, admin work, and reporting.",
    approach: [
      "Mapped the recurring support work that interrupted revenue-side activity",
      "Introduced cleaner follow-up and coordination rhythms",
      "Supported the back-office work needed to keep the sales motion consistent",
    ],
    outcomes: [
      "Better continuity across sales conversations and follow-up",
      "Less founder or operator time spent on recurring coordination work",
      "Improved operating clarity around what needed to happen next",
    ],
  },
  {
    slug: "medical-weight-loss-solutions",
    title: "Revolutionizing Medical Weight-Loss Solutions",
    industry: "Healthcare",
    summary:
      "Operational support helped the business handle demand and client communication with more consistency while protecting the founder's time.",
    challenge:
      "The team needed stronger process support around scheduling, communications, and day-to-day coordination as demand increased.",
    approach: [
      "Tightened the communication flow between inquiries, scheduling, and support work",
      "Documented recurring tasks and decision points",
      "Shifted routine admin off the leadership team",
    ],
    outcomes: [
      "Smoother handoff from inquiry to service delivery",
      "Cleaner process ownership for recurring support tasks",
      "More room for leadership to focus on growth and patient experience",
    ],
  },
  {
    slug: "leading-lift-manufacturer",
    title: "Driving Growth for a Leading Lift Manufacturer",
    industry: "Manufacturing",
    summary:
      "The business gained steadier support across marketing, admin, and coordination work, giving the team more capacity to focus on growth and execution quality.",
    challenge:
      "A busy growth environment created recurring admin, campaign, and coordination work that risked pulling senior people into too much detail.",
    approach: [
      "Supported daily coordination work that was clogging leadership capacity",
      "Added structure around task follow-through and communication",
      "Helped maintain momentum on marketing and operations-related tasks",
    ],
    outcomes: [
      "Better operating rhythm for ongoing projects",
      "Fewer execution bottlenecks caused by support work",
      "Stronger alignment between growth activity and operations execution",
    ],
  },
];

export const testimonials = [
  {
    name: "Rachel M.",
    role: "Founder & CEO, Growthify Inc.",
    quote:
      "Seamless VA helped us stop treating operations like a pile of urgent one-offs. We finally had support that could keep pace with the business and think in process, not just tasks.",
  },
  {
    name: "Operations Lead, Insurance Client",
    role: "Client spotlight",
    quote:
      "What stood out was how quickly the team understood the moving parts behind our client work. They did not just execute tasks. They reduced friction.",
  },
  {
    name: "Founder, Wellness Brand",
    role: "Client spotlight",
    quote:
      "The first win was clarity. We got a clearer onboarding flow, tighter communication, and fewer loose ends landing back on leadership.",
  },
];

export const faqs = [
  {
    question: "How do we know what support package we need?",
    answer:
      "The first consultation is used to map your current workload, the recurring work that keeps boomeranging back, and the points where process cleanup matters before more headcount does.",
  },
  {
    question: "Can Seamless VA support more than admin tasks?",
    answer:
      "Yes. The support model spans admin execution, bookkeeping coordination, and growth-side execution so the handoffs across your business stay connected.",
  },
  {
    question: "What makes this different from hiring a generic freelancer?",
    answer:
      "The focus is not just getting tasks done. It is stabilizing the workflow those tasks sit inside, so your business becomes easier to run over time.",
  },
  {
    question: "Do you replace our existing systems?",
    answer:
      "Usually no. The first goal is to make your current stack work better, document what matters, and only add tools or automations where they will clearly reduce friction.",
  },
];

export const processSteps = [
  {
    title: "Start with a strategy call",
    badge: "Discovery",
    body:
      "We use the initial conversation to understand the work that keeps interrupting delivery, where current systems are leaking time, and what success should look like in the first month.",
  },
  {
    title: "Align the workflow and handoff",
    badge: "Onboarding",
    body:
      "Together we define priorities, operating expectations, communication rules, and the documentation or automation needed for a smoother working rhythm.",
  },
  {
    title: "Hand work over with confidence",
    badge: "Execution",
    body:
      "Once the scope is clear, the support team takes ownership of the recurring work while keeping communication close enough that leadership never loses visibility.",
  },
];

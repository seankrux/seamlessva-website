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
  miniTagline: "",
  email: "info@seamless-va.com",
  phone: "+1-289-769-1537",
  location: "268 Hillside Dr, Mississauga, Ontario, Canada",
  siteUrl: "https://seamless-va.com",
  toolStack: ["Google Workspace", "QuickBooks", "HubSpot", "ClickUp", "Canva", "Meta Ads", "Calendly", "Zapier"],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://ca.linkedin.com/" },
  ],
  positioningPoints: [
    { label: "Visibility", title: "Clear ownership for every task.", body: "We replace scattered admin with repeatable workflows, clear accountability, and fast follow-through." },
    { label: "Capacity", title: "Less cleanup for leadership.", body: "From scheduling and inbox management to bookkeeping prep and campaign execution, recurring work moves off the founder desk." },
    { label: "Confidence", title: "Support built around process.", body: "We document how work moves so service quality stays consistent as the business grows." },
  ],
};

export const services: Service[] = [
  {
    slug: "virtual-assistant",
    shortLabel: "Daily operations",
    title: "Virtual Assistant Services",
    summary: "Inbox control, calendar cleanup, task coordination, and daily admin handled with structure and clear ownership.",
    metaDescription: "Virtual assistant support for founders who need reliable admin execution, task coordination, and calmer daily operations.",
    highlights: ["Inbox triage, scheduling, and follow-up management", "Client communication and meeting prep", "Task tracking across your tools"],
    deliverables: ["Inbox and calendar management", "Meeting prep and follow-ups", "CRM and pipeline hygiene", "Task coordination"],
    outcomes: ["Fewer dropped follow-ups", "Cleaner communication", "Less admin drag on leadership"],
    faq: [
      { question: "Who is this best for?", answer: "Founder-led service businesses, agencies, and operators who need reliable support without hiring a full in-house admin team." },
      { question: "Do you work inside our tools?", answer: "Yes. We plug into your current stack, then tighten the handoff so the work is easier to manage and audit." },
    ],
  },
  {
    slug: "bookkeeping-accounting",
    shortLabel: "Financial clarity",
    title: "Bookkeeping Support",
    summary: "Transaction organization, reconciliation support, and reporting prep that keep month-end from turning into cleanup.",
    metaDescription: "Bookkeeping support for cleaner records, steadier reporting, and fewer month-end surprises.",
    highlights: ["Recurring bookkeeping workflows", "Receipt, invoice, and reconciliation support", "Cleaner reporting prep"],
    deliverables: ["Transaction categorization", "Invoice and receipt organization", "Reconciliation support", "Monthly reporting prep"],
    outcomes: ["Cleaner books", "Less record chasing", "More confident financial reviews"],
    faq: [
      { question: "Is this a CPA replacement?", answer: "No. This support improves the quality and consistency of the finance admin so your accountant or bookkeeper can work cleaner." },
      { question: "Can you help messy books?", answer: "Yes. We usually start with stabilization and documentation before improving the recurring workflow." },
    ],
  },
  {
    slug: "automation-digital-marketing",
    shortLabel: "Growth execution",
    title: "Automation & Marketing Support",
    summary: "Campaign coordination, lead workflow cleanup, and automation support that keeps growth work moving.",
    metaDescription: "Marketing execution and automation support for lean teams that need stronger lead handling and campaign follow-through.",
    highlights: ["Lead workflow cleanup", "Campaign coordination", "Automation for repeat follow-ups and reporting"],
    deliverables: ["Campaign coordination", "Lead workflow cleanup", "Automation setup", "Growth reporting support"],
    outcomes: ["Fewer leads lost", "Less repetitive work", "Clearer sales and marketing handoffs"],
    faq: [
      { question: "Do you run strategy or execution?", answer: "Execution comes first, but we also flag workflow gaps and automation opportunities when they are obvious." },
      { question: "What if workflows are not documented?", answer: "We document the current flow, stabilize the rough points, then add automation where it will reduce real manual work." },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  { slug: "modernizing-insurance-sales", title: "Modernizing Insurance Sales", industry: "Insurance", summary: "Sales support and follow-up were cleaned up so the team could move faster without losing context.", challenge: "The client needed steadier sales support and less operational leakage between conversations, admin work, and reporting.", approach: ["Mapped recurring support work", "Improved follow-up rhythm", "Supported back-office sales admin"], outcomes: ["Better sales continuity", "Less founder coordination work", "Clearer next-step ownership"] },
  { slug: "medical-weight-loss-solutions", title: "Medical Weight-Loss Support", industry: "Healthcare", summary: "Operational support helped the business handle demand and client communication with more consistency.", challenge: "The team needed stronger scheduling, communication, and day-to-day coordination as demand increased.", approach: ["Tightened inquiry-to-scheduling flow", "Documented recurring tasks", "Shifted routine admin off leadership"], outcomes: ["Smoother client handoff", "Cleaner process ownership", "More leadership focus"] },
  { slug: "leading-lift-manufacturer", title: "Lift Manufacturer Growth Support", industry: "Manufacturing", summary: "The business gained steadier support across marketing, admin, and coordination work.", challenge: "Recurring admin and campaign work risked pulling senior people into too much detail.", approach: ["Supported daily coordination", "Added task follow-through structure", "Maintained marketing and ops momentum"], outcomes: ["Better project rhythm", "Fewer execution bottlenecks", "Stronger growth support"] },
];

export const testimonials = [
  { name: "Rachel M.", role: "Founder & CEO, Growthify Inc.", quote: "Seamless VA helped us stop treating operations like urgent one-offs. We finally had support that could keep pace with the business." },
  { name: "Operations Lead, Insurance Client", role: "Client spotlight", quote: "They understood the moving parts behind our client work quickly. They did not just execute tasks. They reduced friction." },
  { name: "Founder, Wellness Brand", role: "Client spotlight", quote: "The first win was clarity. We got a cleaner onboarding flow, tighter communication, and fewer loose ends." },
];

export const faqs = [
  { question: "How do we know what support package we need?", answer: "The first consultation maps your current workload, recurring drag, and where process cleanup matters before more headcount does." },
  { question: "Can Seamless VA support more than admin tasks?", answer: "Yes. The support model spans admin execution, bookkeeping coordination, and growth-side execution." },
  { question: "What makes this different from a generic freelancer?", answer: "The focus is not only task completion. It is stabilizing the workflow those tasks sit inside." },
  { question: "Do you replace our existing systems?", answer: "Usually no. We make your current stack work better first, then add tools only where they reduce friction." },
];

export const processSteps = [
  { title: "Map the drag", badge: "Discovery", body: "We identify the admin, finance, and growth tasks that keep interrupting delivery." },
  { title: "Set the handoff", badge: "Onboarding", body: "We define priorities, communication rules, and the workflow for recurring support." },
  { title: "Own the rhythm", badge: "Execution", body: "The support team takes ownership while keeping leadership visibility clear." },
];

export const goodFitSignals = [
  { title: "Founder time keeps disappearing", body: "Inbox, scheduling, follow-ups, and admin are pulling focus away from sales and delivery." },
  { title: "Back-office work happens too late", body: "Bookkeeping and documentation turn into reactive cleanup instead of steady upkeep." },
  { title: "Growth tasks need ownership", body: "Leads, campaigns, and client communication need steadier follow-through." },
];

export const operatingPrinciples = [
  { title: "Document the workflow", body: "We stabilize recurring work with clear ownership and lightweight process documentation." },
  { title: "Work inside your stack", body: "Support fits your current tools first, then improves the handoffs around them." },
  { title: "Keep visibility close", body: "You know what is owned, what is pending, and what needs your decision." },
];

export const reviewThemes = [
  { title: "Clarity", body: "Clients describe clearer ownership, cleaner communication, and fewer loose ends." },
  { title: "Continuity", body: "Support feels connected across admin, finance, and client work." },
  { title: "Calmer operations", body: "The payoff is a steadier rhythm with less last-minute cleanup." },
];

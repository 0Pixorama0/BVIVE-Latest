/* ============================================================
   Bvive — Site data (single source of truth)
   Copy sourced from the Bvive Volume Pack (Vol 1 brand, Vol 2 copy)
   ============================================================ */

export const site = {
  name: "Bvive",
  descriptor: "Revenue Recovery & Customer Lifecycle Platform",
  tagline: "Recover Payments. Retain Customers. Protect Cash Flow.",
  url: "https://bvive.com.au",
  email: "hello@bvive.com.au",
  phone: "1300 000 000",
  region: "Australia",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const nav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Platform overview", href: "/platform", desc: "One operating system for the revenue lifecycle" },
      { label: "Analytics & reporting", href: "/solutions/analytics", desc: "See where revenue leaks and what your team did about it" },
      { label: "Security & permissions", href: "/security", desc: "Role-based access and compliant communication workflows" },
      { label: "Integrations", href: "/platform#integrations", desc: "Sits beside your payment provider, not in front of it" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Payment recovery", href: "/solutions/payment-recovery", desc: "Recover failed direct debits before they become lost revenue" },
      { label: "Arrears management", href: "/solutions/arrears-management", desc: "Control overdue accounts without spreadsheets" },
      { label: "Cancellation management", href: "/solutions/cancellation-management", desc: "Turn cancellations into retention opportunities" },
      { label: "Customer lifecycle CRM", href: "/solutions/customer-lifecycle", desc: "Know where every customer stands before revenue is at risk" },
      { label: "Analytics & reporting", href: "/solutions/analytics", desc: "Owner and manager dashboards" },
      { label: "Staff workflow", href: "/solutions/staff-workflow", desc: "A clear workflow for every revenue risk" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Gyms & fitness", href: "/industries/gyms-fitness" },
      { label: "Childcare centres", href: "/industries/childcare" },
      { label: "Allied health", href: "/industries/allied-health" },
      { label: "Education & training", href: "/industries/education" },
      { label: "Subscription businesses", href: "/industries/subscription" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

/* ---- Four messaging pillars (Vol 1 §13) ---- */
export const pillars = [
  { key: "recover", title: "Recover Payments", body: "Failed debits, overdue accounts and retry workflows in one place.", icon: "recover" },
  { key: "retain", title: "Retain Customers", body: "Cancellation workflows and structured save opportunities.", icon: "retain" },
  { key: "control", title: "Control Operations", body: "Dashboards, tasks, notes and clear accountability across the team.", icon: "control" },
  { key: "decide", title: "Improve Decisions", body: "Analytics, performance trends and leakage reporting.", icon: "decide" },
] as const;

/* ---- USP framework (Vol 1 §12) ---- */
export const usps = [
  "Recover revenue before it becomes bad debt",
  "Built for recurring-revenue businesses",
  "One dashboard for payments, customers, cancellations and tasks",
  "Turns manual follow-up into accountable workflow",
];

/* ---- Platform modules (Vol 1 §28, Vol 2 module packs) ---- */
export type Module = {
  slug: string;
  name: string;
  pillar: "recover" | "retain" | "control" | "decide";
  tag: string;
  summary: string;
  status?: "live" | "roadmap";
  icon: string;
};

export const modules: Module[] = [
  { slug: "payment-recovery", name: "Payment Recovery", pillar: "recover", tag: "Recover", icon: "recover",
    summary: "Identify failed payments, prioritise action, assign follow-up and track recovery outcomes from one workflow." },
  { slug: "arrears-management", name: "Arrears Management", pillar: "recover", tag: "Recover", icon: "arrears",
    summary: "A central view of overdue customers, actions taken, payment status and next steps — no more spreadsheets." },
  { slug: "cancellation-management", name: "Cancellation Management", pillar: "retain", tag: "Retain", icon: "retain",
    summary: "Capture the reason, assign the right follow-up, offer approved save pathways and report on outcomes." },
  { slug: "customer-lifecycle", name: "Customer Lifecycle CRM", pillar: "retain", tag: "Retain", icon: "crm",
    summary: "Notes, payment risk, cancellation status, tasks and communication history connected to the revenue lifecycle." },
  { slug: "staff-workflow", name: "Task Automation & Staff Workflow", pillar: "control", tag: "Control", icon: "tasks",
    summary: "Assign tasks, track follow-up, record outcomes and remove guesswork from payment and retention management." },
  { slug: "analytics", name: "Analytics & Reporting", pillar: "decide", tag: "Decide", icon: "analytics",
    summary: "Track failed payments, recovered revenue, cancellation saves, staff activity and trends across time." },
  { slug: "lead-management", name: "Lead Management", pillar: "control", tag: "Control", icon: "leads",
    summary: "Keep new enquiries and sign-ups moving with clear ownership from first touch to active customer." },
  { slug: "security", name: "Security & Permissions", pillar: "control", tag: "Control", icon: "shield",
    summary: "Role-based access, permission controls and audit-friendly records that support compliant communication." },
  { slug: "commission", name: "Commission Tracking", pillar: "decide", tag: "Roadmap", status: "roadmap", icon: "commission",
    summary: "Attribute recovered revenue and retention wins to the right people. On the roadmap." },
  { slug: "ai-insights", name: "AI Insights", pillar: "decide", tag: "Roadmap", status: "roadmap", icon: "ai",
    summary: "Surface risk earlier with predictive signals across payments and retention. Coming next." },
];

/* ---- Solution pages (Vol 2 §8–13) ---- */
export type Solution = {
  slug: string;
  eyebrow: string;
  title: string;
  hero: string;
  sub: string;
  problem: string;
  outcome: string;
  pillar: "recover" | "retain" | "control" | "decide";
  features: { title: string; body: string }[];
  metricLabel: string;
  metricValue: string;
  mock: "recovery" | "arrears" | "cancellation" | "crm" | "analytics" | "tasks";
};

export const solutions: Solution[] = [
  {
    slug: "payment-recovery",
    eyebrow: "Payment Recovery",
    title: "Recover failed direct debits before they become lost revenue",
    hero: "Recover failed direct debits before they become lost revenue.",
    sub: "Identify failed payments, prioritise action, assign follow-up and track recovery outcomes from one workflow.",
    problem: "Failed debits pile up in exports and inboxes. Nobody owns the follow-up, and recoverable revenue quietly slips into bad debt.",
    outcome: "Every failed payment becomes an actionable, owned task — with a clear record of what was tried and what was recovered.",
    pillar: "recover",
    mock: "recovery",
    metricLabel: "Failed payments given an owner",
    metricValue: "100%",
    features: [
      { title: "Prioritised recovery queue", body: "Failed and overdue payments ranked by value and age so your team works the biggest leaks first." },
      { title: "Assigned follow-up", body: "Route each case to the right person with due dates, so nothing sits untouched." },
      { title: "Retry & outreach tracking", body: "Log every retry, message and outcome against the customer for a complete history." },
      { title: "Recovered-revenue reporting", body: "See exactly how much was recovered, by whom and how quickly." },
    ],
  },
  {
    slug: "arrears-management",
    eyebrow: "Arrears Management",
    title: "Take control of overdue accounts without relying on spreadsheets",
    hero: "Take control of overdue accounts without relying on spreadsheets.",
    sub: "Bvive gives teams a central view of overdue customers, actions taken, payment status and next steps.",
    problem: "Overdue accounts live in a spreadsheet that only one person understands. Status is unclear and accountability is missing.",
    outcome: "A single, live view of who is overdue, what has been done and what happens next — visible to the whole team.",
    pillar: "recover",
    mock: "arrears",
    metricLabel: "Central view of overdue accounts",
    metricValue: "1",
    features: [
      { title: "Live arrears ledger", body: "Every overdue account in one place with amount, age and current status." },
      { title: "Action history", body: "A timestamped trail of calls, messages and payment arrangements per customer." },
      { title: "Next-step ownership", body: "Clear next actions and owners so accounts keep moving toward resolution." },
      { title: "Status at a glance", body: "Colour-coded states — in progress, promised, recovered, escalated." },
    ],
  },
  {
    slug: "cancellation-management",
    eyebrow: "Cancellation Management",
    title: "Turn cancellation requests into structured retention opportunities",
    hero: "Turn cancellation requests into structured retention opportunities.",
    sub: "Capture the reason, assign the right follow-up, offer approved save pathways and report on outcomes.",
    problem: "Cancellations are handled inconsistently and too late. Save opportunities are missed because there's no repeatable process.",
    outcome: "A consistent save workflow that captures reasons, offers approved pathways and measures what actually retains customers.",
    pillar: "retain",
    mock: "cancellation",
    metricLabel: "Cancellations with a save pathway",
    metricValue: "Every one",
    features: [
      { title: "Reason capture", body: "Structured cancellation reasons so you can see the real drivers of churn." },
      { title: "Approved save pathways", body: "Give staff pre-approved offers and scripts so saves stay on-brand and on-policy." },
      { title: "Routed follow-up", body: "Send the right request to the right person before the customer walks." },
      { title: "Save-rate reporting", body: "Measure saves by reason, staff member and pathway over time." },
    ],
  },
  {
    slug: "customer-lifecycle",
    eyebrow: "Customer Lifecycle CRM",
    title: "Know where every customer stands before revenue is at risk",
    hero: "Know where every customer stands before revenue is at risk.",
    sub: "Keep customer notes, payment risk, cancellation status, tasks and communication history connected to the revenue lifecycle.",
    problem: "Customer context is scattered across tools and people. By the time risk is obvious, the revenue is already gone.",
    outcome: "One customer record that ties notes, payment risk and history together — so your team acts early, not late.",
    pillar: "retain",
    mock: "crm",
    metricLabel: "Customer context in one record",
    metricValue: "Unified",
    features: [
      { title: "Unified customer record", body: "Payments, notes, tasks and communications on a single timeline." },
      { title: "Risk signals", body: "Surface at-risk customers from payment and cancellation activity." },
      { title: "Communication history", body: "Every touchpoint logged so anyone can pick up the thread." },
      { title: "Lifecycle stages", body: "See each customer's stage from sign-up to retention or save." },
    ],
  },
  {
    slug: "analytics",
    eyebrow: "Analytics & Reporting",
    title: "See exactly where revenue is leaking and what your team is doing about it",
    hero: "See exactly where revenue is leaking and what your team is doing about it.",
    sub: "Track failed payments, recovered revenue, cancellation saves, staff activity, overdue accounts and trends across time.",
    problem: "Owners can't see how much money is recoverable, and managers can't see who is doing the work.",
    outcome: "Clear dashboards that quantify leakage, recovery and team activity — the numbers you need before every decision.",
    pillar: "decide",
    mock: "analytics",
    metricLabel: "Revenue visibility",
    metricValue: "End to end",
    features: [
      { title: "Leakage dashboard", body: "Failed payments and overdue balances quantified in dollars, not rows." },
      { title: "Recovery performance", body: "Recovered revenue and save rates trended over weeks and months." },
      { title: "Team activity", body: "See follow-up volume and outcomes by staff member." },
      { title: "Exportable reporting", body: "Board-ready summaries for owners, managers and finance." },
    ],
  },
  {
    slug: "staff-workflow",
    eyebrow: "Staff Workflow",
    title: "Give your team a clear workflow for every revenue risk",
    hero: "Give your team a clear workflow for every revenue risk.",
    sub: "Assign tasks, track follow-up, record outcomes and remove guesswork from payment and retention management.",
    problem: "Staff aren't sure who owns what. Follow-up depends on memory, and results depend on who happens to be in.",
    outcome: "A shared workflow where every risk has an owner, a due date and a recorded outcome.",
    pillar: "control",
    mock: "tasks",
    metricLabel: "Guesswork removed",
    metricValue: "Owned & tracked",
    features: [
      { title: "Task assignment", body: "Turn every failed payment or cancellation into an owned task." },
      { title: "Due dates & reminders", body: "Keep follow-up on time without chasing your team." },
      { title: "Outcome logging", body: "Record what happened so reporting reflects real work." },
      { title: "Team accountability", body: "Managers see workload and results without micromanaging." },
    ],
  },
];

/* ---- Industry pages (Vol 2 §15–19, copy packs) ---- */
export type Industry = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  title: string;
  sub: string;
  pain: string;
  benefit: string;
  imageLabel: string;
  stat: { value: string; label: string };
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: "gyms-fitness",
    name: "Gyms & Fitness Clubs",
    short: "Gyms & fitness",
    eyebrow: "Gyms & Fitness Clubs",
    title: "Payment recovery and member retention software for gyms",
    sub: "Recover failed payments, reduce cancellation leakage and give your team a clear workflow for member follow-up.",
    pain: "Gyms manage recurring payments, member queries, overdue accounts and retention across multiple systems or spreadsheets.",
    benefit: "Bvive gives managers one workflow for failed-payment follow-up, member status, cancellation risk and revenue visibility.",
    imageLabel: "Gym operator reviewing member payments on Bvive",
    stat: { value: "500+", label: "recurring members is where leakage adds up" },
    points: ["Member payment recovery", "Cancellation save workflows", "Front-desk task accountability", "Owner revenue visibility"],
  },
  {
    slug: "childcare",
    name: "Childcare Centres",
    short: "Childcare",
    eyebrow: "Childcare Centres",
    title: "Protect childcare revenue with clearer payment and parent follow-up",
    sub: "Manage failed payments, overdue accounts and parent communication with better visibility and accountability.",
    pain: "Childcare centres manage recurring fees, parent queries, overdue accounts and retention across multiple systems or spreadsheets.",
    benefit: "Bvive gives managers one workflow for failed-payment follow-up, account status, cancellation risk and revenue visibility.",
    imageLabel: "Centre manager coordinating parent follow-up",
    stat: { value: "1 view", label: "of every overdue family account" },
    points: ["Fee recovery workflow", "Parent communication history", "Overdue account clarity", "Compliant, respectful follow-up"],
  },
  {
    slug: "allied-health",
    name: "Allied Health Clinics",
    short: "Allied health",
    eyebrow: "Allied Health Clinics",
    title: "Keep recurring care revenue on track",
    sub: "Manage recurring payment issues, missed follow-ups and customer lifecycle risk across your clinic or service business.",
    pain: "Clinics manage recurring payments, patient queries, overdue accounts and retention across multiple systems or spreadsheets.",
    benefit: "Bvive gives practice managers one workflow for failed-payment follow-up, patient status, cancellation risk and revenue visibility.",
    imageLabel: "Practice manager using Bvive at the clinic front desk",
    stat: { value: "Earlier", label: "intervention before care lapses" },
    points: ["Recurring payment recovery", "Missed-appointment follow-up", "Patient lifecycle visibility", "Clear staff ownership"],
  },
  {
    slug: "education",
    name: "Education & Training",
    short: "Education",
    eyebrow: "Education & Training",
    title: "Protect course and membership revenue from failed payments and admin gaps",
    sub: "Track payment risk, follow-up tasks and customer status across recurring student or member payments.",
    pain: "Providers manage recurring payments, student queries, overdue accounts and retention across multiple systems or spreadsheets.",
    benefit: "Bvive gives administrators one workflow for failed-payment follow-up, enrolment status, cancellation risk and revenue visibility.",
    imageLabel: "Training provider admin reviewing enrolment payments",
    stat: { value: "Fewer", label: "gaps between enrolment and payment" },
    points: ["Course payment recovery", "Enrolment status tracking", "Follow-up task automation", "Revenue trend reporting"],
  },
  {
    slug: "subscription",
    name: "Subscription Businesses",
    short: "Subscription",
    eyebrow: "Subscription Businesses",
    title: "Reduce failed-payment churn and protect recurring revenue",
    sub: "Give your team visibility over failed payments, customer risk and recovery outcomes before subscriptions are lost.",
    pain: "Subscription businesses manage recurring payments, customer queries, overdue accounts and retention across multiple systems or spreadsheets.",
    benefit: "Bvive gives operators one workflow for failed-payment follow-up, subscriber status, cancellation risk and revenue visibility.",
    imageLabel: "Operations lead monitoring subscriber recovery",
    stat: { value: "Involuntary", label: "churn caught before it lands" },
    points: ["Failed-payment recovery", "Churn-risk visibility", "Cancellation save pathways", "Recovery outcome reporting"],
  },
];

/* other industries referenced (Vol 2 copy packs) for the overview grid */
export const moreIndustries = [
  "Martial Arts & Dance Schools",
  "Membership Organisations",
  "NDIS & Service Providers",
  "Property & Facility Services",
  "Professional Services",
];

/* ---- How it works (homepage) ---- */
export const howItWorks = [
  { n: "01", title: "Connect your customer data", body: "Bring recurring customers, payment status and history into one place — Bvive sits beside your payment provider, it doesn't replace it." },
  { n: "02", title: "See risk the moment it appears", body: "Failed payments, overdue accounts and cancellation requests surface as prioritised, owned tasks." },
  { n: "03", title: "Act with a clear workflow", body: "Your team follows up, offers approved save pathways and records every outcome." },
  { n: "04", title: "Report on recovered revenue", body: "Owners and managers see leakage, recovery and team activity trended over time." },
];

/* ---- FAQ (Vol 2 §50) ---- */
export const faqs = [
  { q: "Does Bvive replace our payment provider?", a: "No. Bvive is the workflow and visibility layer around your recurring payment process. It sits beside providers like your existing direct-debit gateway rather than replacing them." },
  { q: "Is this debt collection?", a: "No. Bvive is positioned as revenue recovery and customer lifecycle management — it helps teams act earlier and more respectfully, before accounts become bad debt." },
  { q: "How hard is setup?", a: "Setup is guided and staged. You start with one priority workflow — usually failed-payment recovery — and expand from there once your team is comfortable." },
  { q: "Who is Bvive best for?", a: "Businesses with 500+ recurring or direct-debit customers, where failed payments and cancellations add up to a meaningful revenue leak." },
  { q: "Is our data secure?", a: "Bvive uses role-based access and permission controls, and supports compliant communication workflows. Access is scoped so staff only see what they need." },
  { q: "Do you guarantee recovery outcomes?", a: "No responsible platform can guarantee recovery. Bvive gives your team the visibility and workflow to recover more than an inconsistent, manual process would." },
];

/* ---- Trust / proof strip ---- */
export const trustStats = [
  { value: "500+", label: "recurring customers", sub: "where leakage becomes a real profit leak" },
  { value: "4", label: "revenue moments", sub: "recovery, arrears, cancellations, follow-up — unified" },
  { value: "1", label: "operating platform", sub: "instead of spreadsheets and disconnected tools" },
  { value: "AU", label: "built for", sub: "direct-debit and recurring-revenue businesses" },
];

export const footerNav = [
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Analytics & reporting", href: "/solutions/analytics" },
      { label: "Security & permissions", href: "/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Payment recovery", href: "/solutions/payment-recovery" },
      { label: "Arrears management", href: "/solutions/arrears-management" },
      { label: "Cancellation management", href: "/solutions/cancellation-management" },
      { label: "Customer lifecycle CRM", href: "/solutions/customer-lifecycle" },
      { label: "Staff workflow", href: "/solutions/staff-workflow" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Gyms & fitness", href: "/industries/gyms-fitness" },
      { label: "Childcare centres", href: "/industries/childcare" },
      { label: "Allied health", href: "/industries/allied-health" },
      { label: "Education & training", href: "/industries/education" },
      { label: "Subscription", href: "/industries/subscription" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/book-demo" },
    ],
  },
];

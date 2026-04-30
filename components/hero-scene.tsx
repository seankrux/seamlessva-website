type HeroSceneProps = {
  variant:
    | "home"
    | "services"
    | "virtual-assistant"
    | "bookkeeping"
    | "automation"
    | "contact"
    | "about"
    | "reviews"
    | "case-studies"
    | "case-study";
};

const sceneMap = {
  home: {
    title: "3 Service Lanes",
    items: ["Virtual Assistant", "Bookkeeping", "Automation"],
    note: "Free consultation",
  },
  services: {
    title: "Support Lanes",
    items: ["Admin Support", "Bookkeeping", "Growth Ops"],
    note: "Best-fit support",
  },
  "virtual-assistant": {
    title: "Daily Admin",
    items: ["Inbox", "Calendar", "Follow-up"],
    note: "Less admin drag",
  },
  bookkeeping: {
    title: "Clean Books",
    items: ["Expenses", "Reconcile", "Reports"],
    note: "Month-end clarity",
  },
  automation: {
    title: "Growth Flow",
    items: ["Leads", "Campaigns", "Automation"],
    note: "Less manual work",
  },
  contact: {
    title: "Quick Intake",
    items: ["Choose time", "Submit details", "Get reply"],
    note: "1 business day",
  },
  about: {
    title: "Support Team",
    items: ["Process", "People", "Systems"],
    note: "Reliable execution",
  },
  reviews: {
    title: "Client Trust",
    items: ["Clear comms", "Reliable support", "5-star experience"],
    note: "Proof before call",
  },
  "case-studies": {
    title: "Results View",
    items: ["32% less admin", "45% faster follow-up", "2.3x tasks"],
    note: "Operational wins",
  },
  "case-study": {
    title: "Case Result",
    items: ["Challenge", "Approach", "Outcome"],
    note: "Proof snapshot",
  },
} as const;

export function HeroScene({ variant }: HeroSceneProps) {
  const scene = sceneMap[variant];

  return (
    <div className={`hero-scene hero-scene-${variant}`} aria-label={`${scene.title} visual`}>
      <div className="hero-scene-photo" />
      <div className="hero-scene-panel hero-scene-main-card">
        <span className="hero-scene-icon">●</span>
        <h2>{scene.title}</h2>
        <div className="hero-scene-list">
          {scene.items.map((item) => (
            <div key={item} className="hero-scene-item">
              <span />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scene-panel hero-scene-note">
        <span className="hero-scene-icon hero-scene-icon-alt">✓</span>
        <strong>{scene.note}</strong>
        <p>Clear next step before work begins.</p>
      </div>
    </div>
  );
}

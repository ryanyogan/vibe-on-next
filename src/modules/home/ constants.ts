export const PROJECT_TEMPLATES = [
  {
    emoji: "💳",
    title: "Build a credit application tracker",
    prompt:
      "Create a dashboard for tracking credit applications with status cards (approved, pending, denied), filters for application type, and a timeline of actions. Use mock data and local state. Keep the layout crisp and easy to scan.",
  },
  {
    emoji: "📊",
    title: "Build a loan performance dashboard",
    prompt:
      "Build a loan performance dashboard with KPIs, trend charts, delinquency breakdowns, and borrower demographics. Use mock data with local state. Design with clear hierarchy and emphasize accessibility.",
  },
  {
    emoji: "🤝",
    title: "Build a customer success hub",
    prompt:
      "Create a customer success portal showing recent interactions, satisfaction scores, and suggested next steps. Include a contact quick-action bar. Use warm, inviting colors and intuitive grouping.",
  },
  {
    emoji: "🔍",
    title: "Build a fraud detection review tool",
    prompt:
      "Build a fraud review panel with flagged transactions, reason codes, and actions to approve or escalate. Include a filter by risk score and quick drill-down to details. Use consistent visual cues for risk severity.",
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    prompt:
      "Build a kanban board with drag-and-drop using react-beautiful-dnd and support for adding and removing tasks with local state. Use consistent spacing, column widths, and hover effects for a polished UI.",
  },
  {
    emoji: "🧾",
    title: "Build a digital statement viewer",
    prompt:
      "Create a statement viewer with a month selector, transaction list, and PDF preview pane. Use mock transactions with local state. Focus on clear typography and smooth scrolling for large datasets.",
  },
  {
    emoji: "🛠️",
    title: "Build an internal tool builder",
    prompt:
      "Create a meta-app that lets a user design small internal tools by selecting modules (tables, forms, charts) and previewing live updates. Use mock data and local state. Keep the interface playful but functional.",
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    prompt:
      "Build an Airbnb-style listings grid with mock data, filter sidebar, and a modal with property details using local state. Use card spacing, soft shadows, and clean layout for a welcoming design.",
  },
] as const;

import type { Messages } from "./ro";

export const en: Messages = {
  nav: {
    projects: "Projects",
    aboutMe: "About me",
    experience: "Experience",
    stack: "Tech stack",
    contact: "Contact",
    downloadCv: "Download CV",
    menu: "Menu",
    language: "Language",
  },

  hero: {
    available: "Available for projects",
    location: "Bucharest, RO",
    role: "Fullstack developer",
    description:
      "I build scalable web applications, from the backend architecture to the final interface. I work with TypeScript, React, Next.js and Node.js, with a focus on maintainable code and performance.",
    seeProjects: "See projects",
  },

  projects: {
    previewLabel: "Play project preview",
    problem: "The problem",
    solution: "The solution",
    details: "Details",
    detailsAbout: "Details about {{name}}",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    allProjects: "All projects",
    items: {
      "crm-call-center": {
        name: "Call center CRM",
        tagline: "Every call, customer and campaign on a single screen.",
        role: "Fullstack developer",
        duration: "4 months",
        problem:
          "Agents worked across three different apps and lost the customer's context between calls.",
        solution:
          "A CRM that brings the customer history, scripts and scheduling together in one interface.",
        overview:
          "Describe the context here: who the app is for, how many people use it, what existed before and why it was needed.",
        features: [
          "Customer profile with the full call history",
          "Callback scheduling with notifications",
          "Dashboard with stats per agent and per campaign",
          "Roles and permissions for agents and supervisors",
        ],
        challenges: [
          {
            title: "Large lists without lag",
            text: "How you solved a concrete technical problem — e.g. virtualizing lists with tens of thousands of customers.",
          },
          {
            title: "Real-time data",
            text: "Another challenge and the decision you made, with the reasoning behind it.",
          },
        ],
        results: [
          { value: "-30%", label: "average time per call" },
          { value: "50+", label: "agents active daily" },
          { value: "1", label: "app instead of 3" },
        ],
      },
      "catalog-produse": {
        name: "Product catalog",
        tagline: "Public catalog with an admin dashboard for the sales team.",
        role: "Fullstack developer",
        duration: "3 months",
        problem:
          "Products were kept in Excel, and customers received offers sent manually by email.",
        solution:
          "An online catalog with filters and an admin panel where the team updates products on its own.",
        overview:
          "Describe the context here: who the app is for, how many people use it, what existed before and why it was needed.",
        features: [
          "Search and filters by category, price and stock",
          "Dashboard for adding and editing products",
          "Product import from Excel",
          "SEO-optimized pages",
        ],
        challenges: [
          {
            title: "Excel import",
            text: "How you validated and cleaned data coming from hand-written files.",
          },
          {
            title: "Fast images",
            text: "How you optimized product image loading.",
          },
        ],
        results: [
          { value: "800+", label: "products in the catalog" },
          { value: "0", label: "offers sent manually" },
          { value: "95", label: "Lighthouse score" },
        ],
      },
      "proiect-3": {
        name: "Project name",
        tagline: "One sentence about what the project does.",
        role: "Frontend developer",
        duration: "1 month",
        problem: "What problem the project solves and for whom.",
        solution: "What you built and how it solves the problem.",
        overview:
          "Describe the context here: who the app is for, how many people use it, what existed before and why it was needed.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        challenges: [
          {
            title: "Challenge",
            text: "A technical problem and how you solved it.",
          },
        ],
        results: [
          { value: "—", label: "a measurable result" },
          { value: "—", label: "another result" },
        ],
      },
    },
  },

  about: {
    title: "From idea to production",
    principles: [
      {
        title: "I start from the problem",
        text: "I understand the problem, the end user and the constraints. Then I pick the right solution.",
      },
      {
        title: "I deliver end to end",
        text: "Frontend — Backend — Deploy. I can take a feature to production on my own.",
      },
      {
        title: "I write code for people",
        text: "Clear types, small components, good names and a structure that's easy to understand and maintain.",
      },
    ],
    code: {
      comment: "// the person behind the projects",
      roleKey: "role",
      focusKey: "focus",
      focus: "complete products, from design to deploy",
      builtKey: "built",
      built: ["call center CRM", "product catalog"],
      availableKey: "available",
      available: "remote",
    },
    status: [
      "available for remote roles",
      "UTC+3 · I reply within 24h",
      "now: backend for a CRM in production",
    ],
    letsTalk: "Let's talk",
  },

  experience: {
    title: "Work experience",
    subtitle:
      "The teams and products I've contributed to, most recent first.",
    techLabel: "Technologies",
    jobs: {
      fidem: {
        role: "Fullstack Developer",
        period: "Sep 2025 — present",
        location: "Bucharest, Romania",
        description:
          "One sentence about what the company does and your role on the team.",
        highlights: [
          "Built a call center CRM, from design to deploy.",
          "A concrete result, with a number if possible (e.g. load time -40%).",
        ],
      },
      antena: {
        role: "Network Admin",
        period: "Feb 2025 — Sep 2025",
        location: "Bucharest, Romania",
        description:
          "One sentence about what the company does and your role on the team.",
        highlights: [
          "Developed a product catalog with an admin dashboard.",
          "Something you're proud of from this period.",
        ],
      },
    },
  },

  stack: {
    title: "Tech stack",
    subtitle:
      "A complete product has layers: design, frontend, API, deploy. Below are the tools I use for each one — scroll and watch the stack light up.",
    layers: {
      frontend: {
        title: "Frontend",
        description: "The interface: components, styling and browser logic.",
      },
      backend: {
        title: "Backend",
        description: "The APIs behind the interface and the rules that guard them.",
      },
      database: {
        title: "Database",
        description: "Where the data lives and how it safely reaches the app.",
      },
      testing: {
        title: "Testing",
        description: "Confidence that a new change doesn't break what already worked.",
      },
      delivery: {
        title: "Delivery",
        description: "Everything that takes code from a laptop to the user.",
      },
    },
    roles: {
      TypeScript: "Types, fewer bugs",
      React: "Component-based interfaces",
      "Next.js": "Server rendering and routing",
      "Tailwind CSS": "Styling right in the markup",
      "shadcn/ui": "Accessible components",
      "Node.js": "JavaScript on the server",
      Express: "Routes and REST APIs",
      PostgreSQL: "Relational database",
      Supabase: "Postgres, auth and storage",
      Vitest: "Fast unit tests",
      "React Testing Library": "Components tested like a user",
      Playwright: "End-to-end browser tests",
      Git: "History and branches",
      "GitHub Actions": "Automated tests and deploys",
      Vite: "Dev server and build",
      Vercel: "Deploys for Next.js",
      Netlify: "Deploy on every push",
      Render: "Hosting for APIs",
    },
  },

  contact: {
    available: "Available for remote work",
    title: "Let's build something together",
    text: "Have a project, an idea or an open role? Write to me — I usually reply the same day.",
  },

  footer: {
    builtWith: "Built with React and Tailwind CSS",
  },

  scrollToTop: "Back to top",

  notFound: {
    error: "Error 404",
    title: "Page not found",
    text: "The address <code>{{path}}</code> doesn't exist or has been moved.",
    home: "Home",
    back: "Back",
  },
};

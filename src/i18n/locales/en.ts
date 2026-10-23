import type { Messages } from "./ro";

export const en: Messages = {
  nav: {
    projects: "Personal projects",
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
    previewLabel: "Play the video for {{name}}",
    closeVideo: "Close video",
    videoComingSoon: "Video coming soon",
    videoUnsupported: "Your browser can't play this video.",
    problem: "The problem",
    solution: "The solution",
    details: "Details",
    detailsAbout: "Details about {{name}}",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    allProjects: "All projects",
    previous: "Previous",
    next: "Next",
    navLabel: "Project navigation",
    about: "About the project",
    techStack: "Tech stack",
    gallery: "Screenshots of {{name}}",
    slide: "Image {{n}} of {{total}}",
    previousImage: "Previous image",
    nextImage: "Next image",
    role: "Role",
    duration: "Duration",
    year: "Year",
    features: "Features",
    challenges: "Technical challenges",
    decisions: "Technical decisions",
    lessons: "What I learned",
    ctaTitle: "Like what you see?",
    ctaText: "If you have a similar project or an open role, let's talk.",
    ctaButton: "Get in touch",
    items: {
      "finance-app": {
        name: "SavingBox",
        tagline:
          "Personal finance app for tracking income, expenses and savings.",
        role: "Fullstack developer",
        duration: "6 months",
        problem:
          "Personal finances were scattered across bank apps and spreadsheets, with no clear picture of where the money goes.",
        solution:
          "An app that brings income, expenses and savings together in one place, with analytics that show clearly where the money goes.",
        overview:
          "Full-stack budgeting app for tracking income, expenses and savings, with analytics and a bilingual (RO/EN) interface.",
        features: [
          "Built a layered Express + TypeScript REST API (routes → controllers → services) with Zod validation and input sanitization",
          "Implemented JWT authentication with httpOnly cookies and refresh token rotation, backed by a PostgreSQL schema with triggers",
          "Developed a React + Vite frontend with shadcn/ui, Tailwind v4 (dark mode), multi-step forms and Recharts analytics (trends, breakdowns, forecasts)",
          "Set up separate dev/production environments (two Supabase projects, env-based config), versioned DB migrations via Supabase CLI, and a Git flow with feature → dev → main",
          "Deployed the frontend on Netlify and the API on Render; CI with GitHub Actions (lint, typecheck, build) and Husky pre-commit hooks",
        ],
        challenges: [
          {
            title: "Accurate money calculations",
            text: "How you avoided floating point errors — e.g. storing amounts in minor units (cents) and formatting them only for display.",
          },
          {
            title: "Fast charts on large datasets",
            text: "Another challenge and the decision you made, with the reasoning behind it — e.g. aggregating on the server per month.",
          },
        ],
        decisions: [
          {
            title: "React Query for server state",
            text: "Why you picked this — e.g. caching and server sync without boilerplate.",
          },
          {
            title: "Tailwind for the design system",
            text: "Which alternative you weighed and why you chose this one.",
          },
        ],
        lessons:
          "What you learned from the project or what you would do differently now — e.g. start end-to-end tests earlier.",
        results: [
          { value: "100%", label: "transactions in one place" },
          { value: "12", label: "expense categories" },
          { value: "<1s", label: "dashboard load time" },
        ],
      },
      ceramico: {
        name: "Ceramico",
        tagline:
          "Product catalog for a ceramic and tile retailer, with advanced filtering and an admin dashboard.",
        role: "Fullstack developer",
        duration: "3 months",
        problem:
          "A ceramic and tile retailer had no online catalog where customers could browse and filter products by color, dimensions or usage.",
        solution:
          "A full-stack catalog with advanced filtering, global search and an admin dashboard where products and images are managed directly.",
        overview:
          "Full-stack product catalog for a ceramic and tile retailer, with advanced filtering, global search and an admin dashboard for managing products.",
        features: [
          "Built with Next.js App Router, splitting server and client components, with route groups for the public site and the admin area and SEO-friendly slug routing",
          "Designed a Supabase PostgreSQL schema (products, product images) with RLS policies, triggers and array columns for multi-value attributes (color, dimensions, usage)",
          "Implemented a URL-driven filtering system (shareable state via search params), paginated responsive product grid, mobile filter drawer and active filter badges",
          "Built debounced global search and a “similar products” recommendation section based on overlapping product attributes",
          "Created an admin dashboard with custom httpOnly cookie authentication for uploading products and images to Supabase Storage",
          "Integrated a contact form with Resend through Next.js server actions, including validation for Romanian phone numbers; deployed on Vercel",
        ],
        challenges: [
          {
            title: "Filtering on multi-value attributes",
            text: "Products have several colors, dimensions and usages at once, so filters run on PostgreSQL array columns and match on overlapping values.",
          },
          {
            title: "Relevant similar products",
            text: "The “similar products” section ranks products by how many attributes they share with the current one.",
          },
        ],
        decisions: [
          {
            title: "Filter state in the URL",
            text: "Keeping filters in search params makes every filtered view shareable and bookmarkable, and lets server components render it directly.",
          },
          {
            title: "Route groups for public and admin",
            text: "Separate route groups give the public site and the admin area their own layouts without affecting URLs.",
          },
        ],
        lessons:
          "What you learned from the project or what you would do differently now.",
        results: [
          { value: "3", label: "multi-value filter attributes" },
          { value: "100%", label: "shareable filter state" },
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
      built: ["finance dashboard", "product catalog"],
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
    subtitle: "The teams and products I've contributed to, most recent first.",
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
      "A complete product has layers: design, frontend, API, deploy. Below are the tools I use for each one — pick a layer on the left to see its technologies.",
    layers: {
      frontend: {
        title: "Frontend",
        description: "The interface: components, styling and browser logic.",
      },
      backend: {
        title: "Backend",
        description:
          "The APIs behind the interface and the rules that guard them.",
      },
      database: {
        title: "Database",
        description: "Where the data lives and how it safely reaches the app.",
      },
      testing: {
        title: "Testing",
        description:
          "Confidence that a new change doesn't break what already worked.",
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

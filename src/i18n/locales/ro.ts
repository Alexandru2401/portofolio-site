// sursa traducerilor — en.ts are același tip, deci o cheie lipsă e eroare de TS
export const ro = {
  nav: {
    projects: "Proiecte",
    aboutMe: "Despre mine",
    experience: "Experiență",
    stack: "Tehnologii",
    contact: "Contact",
    downloadCv: "Descarcă CV",
    menu: "Meniu",
    language: "Limba",
  },

  hero: {
    available: "Disponibil pentru proiecte",
    // TODO: pune datele reale
    location: "București, RO",
    role: "Fullstack developer",
    description:
      "Dezvolt aplicații web scalabile, de la arhitectura backend până la interfața finală. Lucrez cu TypeScript, React, Next.js și Node.js, cu accent pe cod ușor de întreținut și performanță.",
    seeProjects: "Vezi proiectele",
  },

  projects: {
    previewLabel: "Redă video-ul pentru {{name}}",
    closeVideo: "Închide video-ul",
    videoComingSoon: "Video în curând",
    videoUnsupported: "Browserul tău nu poate reda acest video.",
    problem: "Problema",
    solution: "Soluția",
    details: "Detalii",
    detailsAbout: "Detalii despre {{name}}",
    liveDemo: "Live Demo",
    sourceCode: "Cod Sursă",
    allProjects: "Toate proiectele",
    // TODO: înlocuiește cu proiectele reale; cheile sunt id-urile din data/projects.ts
    items: {
      "crm-call-center": {
        name: "CRM pentru call center",
        tagline: "Toate apelurile, clienții și campaniile într-un singur ecran.",
        role: "Fullstack developer",
        duration: "4 luni",
        problem:
          "Agenții lucrau în trei aplicații diferite și pierdeau contextul clientului între apeluri.",
        solution:
          "Un CRM care adună istoricul clientului, scripturile și programările într-o singură interfață.",
        overview:
          "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
        features: [
          "Fișa clientului cu tot istoricul de apeluri",
          "Programare de reveniri cu notificări",
          "Dashboard cu statistici pe agent și pe campanie",
          "Roluri și permisiuni pentru agenți și supervizori",
        ],
        challenges: [
          {
            title: "Liste mari fără lag",
            text: "Cum ai rezolvat o problemă tehnică concretă — ex. virtualizarea listelor cu zeci de mii de clienți.",
          },
          {
            title: "Date în timp real",
            text: "O altă provocare și decizia pe care ai luat-o, cu motivul din spatele ei.",
          },
        ],
        results: [
          { value: "-30%", label: "timp mediu pe apel" },
          { value: "50+", label: "agenți activi zilnic" },
          { value: "1", label: "aplicație în loc de 3" },
        ],
      },
      "catalog-produse": {
        name: "Catalog de produse",
        tagline:
          "Catalog public cu dashboard de administrare pentru echipa de vânzări.",
        role: "Fullstack developer",
        duration: "3 luni",
        problem:
          "Produsele erau ținute în Excel, iar clienții primeau oferte trimise manual pe email.",
        solution:
          "Un catalog online cu filtre și un panou de administrare din care echipa actualizează produsele singură.",
        overview:
          "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
        features: [
          "Căutare și filtre pe categorii, preț și stoc",
          "Dashboard pentru adăugat și editat produse",
          "Import de produse din Excel",
          "Pagini optimizate pentru SEO",
        ],
        challenges: [
          {
            title: "Import din Excel",
            text: "Cum ai validat și curățat datele venite din fișiere scrise de mână.",
          },
          {
            title: "Imagini rapide",
            text: "Cum ai optimizat încărcarea imaginilor de produs.",
          },
        ],
        results: [
          { value: "800+", label: "produse în catalog" },
          { value: "0", label: "oferte trimise manual" },
          { value: "95", label: "scor Lighthouse" },
        ],
      },
      "proiect-3": {
        name: "Nume proiect",
        tagline: "O propoziție despre ce face proiectul.",
        role: "Frontend developer",
        duration: "1 lună",
        problem: "Ce problemă rezolvă proiectul și pentru cine.",
        solution: "Ce ai construit și cum rezolvă problema.",
        overview:
          "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
        features: ["Funcționalitate 1", "Funcționalitate 2", "Funcționalitate 3"],
        challenges: [
          {
            title: "Provocare",
            text: "O problemă tehnică și cum ai rezolvat-o.",
          },
        ],
        results: [
          { value: "—", label: "un rezultat măsurabil" },
          { value: "—", label: "alt rezultat" },
        ],
      },
    },
  },

  about: {
    title: "De la idee până în producție",
    // TODO: completează cu detalii personale (de unde ești, ce faci în afara codului)
    principles: [
      {
        title: "Încep de la problemă",
        text: "Înțeleg problema, userul final și constrângerile. Apoi aleg soluția potrivită.",
      },
      {
        title: "Livrez complet",
        text: "Frontend — Backend — Deploy. Pot duce o funcționalitate singur până în producție.",
      },
      {
        title: "Scriu cod pentru oameni",
        text: "Tipuri clare, componente mici, nume bune și o structură ușor de înțeles și întreținut.",
      },
    ],
    code: {
      comment: "// cine e omul din spatele proiectelor",
      roleKey: "rol",
      focusKey: "focus",
      focus: "produse complete, de la design la deploy",
      builtKey: "construit",
      built: ["CRM call center", "catalog de produse"],
      availableKey: "disponibil",
      available: "remote",
    },
    // TODO: actualizează ce lucrezi acum
    status: [
      "disponibil pentru roluri remote",
      "UTC+3 · răspund în 24h",
      "acum: backend pe un CRM în producție",
    ],
    letsTalk: "Hai să vorbim",
  },

  experience: {
    title: "Experiență în câmpul muncii",
    subtitle:
      "Echipele și produsele la care am contribuit, de la cel mai recent în jos.",
    techLabel: "Tehnologii",
    // TODO: înlocuiește cu experiența reală; cheile sunt id-urile din data/experience.ts
    jobs: {
      fidem: {
        role: "Fullstack Developer",
        period: "Sep. 2025 — prezent",
        location: "București, România",
        description:
          "O frază despre ce face compania și care e rolul tău în echipă.",
        highlights: [
          "Am construit un CRM pentru call center, de la design la deploy.",
          "Un rezultat concret, cu o cifră dacă se poate (ex. timp de încărcare -40%).",
        ],
      },
      antena: {
        role: "Network Admin",
        period: "Feb. 2025 — Sep. 2025",
        location: "București, România",
        description:
          "O frază despre ce face compania și care e rolul tău în echipă.",
        highlights: [
          "Am dezvoltat un catalog de produse cu dashboard de administrare.",
          "Un lucru de care ești mândru din perioada asta.",
        ],
      },
    },
  },

  stack: {
    title: "Tehnologiile folosite",
    subtitle:
      "Un produs complet are straturi: design, frontend, API, deploy. Mai jos sunt uneltele pe care le folosesc pentru fiecare — derulează și urmărește cum se aprinde stack-ul.",
    // cheile sunt id-urile din data/technologies.ts
    layers: {
      frontend: {
        title: "Frontend",
        description: "Interfața: componente, stil și logica din browser.",
      },
      backend: {
        title: "Backend",
        description:
          "API-urile din spatele interfeței și regulile care le păzesc.",
      },
      database: {
        title: "Database",
        description: "Unde stau datele și cum ajung în siguranță la aplicație.",
      },
      testing: {
        title: "Testing",
        description: "Siguranța că o schimbare nouă nu strică ce mergea deja.",
      },
      delivery: {
        title: "Livrare",
        description: "Tot ce duce codul de pe laptop până la utilizator.",
      },
    },
    // rolul fiecărei tehnologii, după numele din data/technologies.ts
    roles: {
      TypeScript: "Tipuri, mai puține bug-uri",
      React: "Interfețe din componente",
      "Next.js": "Rendering pe server și rutare",
      "Tailwind CSS": "Stil direct în markup",
      "shadcn/ui": "Componente accesibile",
      "Node.js": "JavaScript pe server",
      Express: "Rute și API-uri REST",
      PostgreSQL: "Bază de date relațională",
      Supabase: "Postgres, auth și storage",
      Vitest: "Teste unitare rapide",
      "React Testing Library": "Componente testate ca un user",
      Playwright: "Teste end-to-end în browser",
      Git: "Istoric și ramuri",
      "GitHub Actions": "Teste și deploy automat",
      Vite: "Dev server și build",
      Vercel: "Deploy pentru Next.js",
      Netlify: "Deploy la fiecare push",
      Render: "Hosting pentru API-uri",
    } as Record<string, string>,
  },

  contact: {
    available: "Disponibil pentru remote",
    title: "Hai să construim ceva împreună",
    text: "Ai un proiect, o idee sau un rol deschis? Scrie-mi — răspund de obicei în aceeași zi.",
  },

  footer: {
    builtWith: "Construit cu React și Tailwind CSS",
  },

  scrollToTop: "Înapoi sus",

  notFound: {
    error: "Eroare 404",
    title: "Pagina nu a fost găsită",
    text: "Adresa <code>{{path}}</code> nu există sau a fost mutată.",
    home: "Acasă",
    back: "Înapoi",
  },
};

export type Messages = typeof ro;

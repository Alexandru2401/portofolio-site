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
    previous: "Înapoi",
    next: "Înainte",
    navLabel: "Navigare între proiecte",
    about: "Despre proiect",
    techStack: "Tech stack",
    gallery: "Imagini din {{name}}",
    slide: "Imaginea {{n}} din {{total}}",
    previousImage: "Imaginea anterioară",
    nextImage: "Imaginea următoare",
    role: "Rol",
    duration: "Durată",
    year: "An",
    features: "Funcționalități",
    challenges: "Provocări tehnice",
    decisions: "Decizii tehnice",
    lessons: "Ce am învățat",
    ctaTitle: "Îți place ce vezi?",
    ctaText: "Dacă ai un proiect asemănător sau un rol deschis, hai să vorbim.",
    ctaButton: "Contactează-mă",
    // TODO: înlocuiește cu proiectele reale; cheile sunt id-urile din data/projects.ts
    items: {
      "finance-app": {
        name: "Finance Dashboard",
        tagline: "Venituri, cheltuieli și bugete într-un singur dashboard clar.",
        role: "Fullstack developer",
        duration: "6 luni",
        problem:
          "Finanțele personale erau împrăștiate între aplicații bancare și foi Excel, fără o imagine clară despre unde se duc banii.",
        solution:
          "Un dashboard care centralizează tranzacțiile, le grupează pe categorii și urmărește bugetele lunare.",
        overview:
          "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
        features: [
          "Lista de tranzacții cu căutare, filtre și categorii",
          "Bugete lunare pe categorii cu alerte la depășire",
          "Grafice pentru venituri, cheltuieli și sold în timp",
          "Interfață responsive, folosibilă și pe mobil",
        ],
        challenges: [
          {
            title: "Calcule corecte cu bani",
            text: "Cum ai evitat erorile de virgulă mobilă — ex. sumele stocate în subunități (bani) și formatate doar la afișare.",
          },
          {
            title: "Grafice rapide pe volume mari",
            text: "O altă provocare și decizia pe care ai luat-o, cu motivul din spatele ei — ex. agregare pe server pe lună.",
          },
        ],
        decisions: [
          { title: "React Query pentru datele de pe server", text: "De ce ai ales soluția asta — ex. cache și sincronizare cu serverul fără boilerplate." },
          { title: "Tailwind pentru design system", text: "Ce alternativă ai cântărit și de ce ai ales-o pe aceasta." },
        ],
        lessons:
          "Ce ai învățat din proiect sau ce ai face altfel acum — ex. ai începe cu testele end-to-end mai devreme.",
        results: [
          { value: "100%", label: "tranzacții într-un singur loc" },
          { value: "12", label: "categorii de cheltuieli" },
          { value: "<1s", label: "timp de încărcare dashboard" },
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
        decisions: [
          { title: "Randare pe server pentru catalog", text: "De ce ai ales SSR/SSG pentru paginile publice — ex. SEO și timp de încărcare." },
          { title: "Validare cu Zod la import", text: "Cum ai prins datele greșite din Excel înainte să ajungă în baza de date." },
        ],
        lessons:
          "Ce ai învățat din proiect sau ce ai face altfel acum.",
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
        decisions: [
          { title: "Decizie tehnică", text: "Ce ai ales și de ce, față de alternativa evidentă." },
        ],
        lessons:
          "Ce ai învățat din proiect sau ce ai face altfel acum.",
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
      built: ["dashboard financiar", "catalog de produse"],
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
      "Un produs complet are straturi: design, frontend, API, deploy. Mai jos sunt uneltele pe care le folosesc pentru fiecare — alege un strat din stânga ca să vezi tehnologiile lui.",
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

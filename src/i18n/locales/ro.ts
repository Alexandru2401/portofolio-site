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
    role: "Full-stack developer",
    description:
      "Construiesc aplicații web end-to-end — de la API-uri și baze de date până la interfețe React. Pun accent pe cod clar, performanță și funcționalități ușor de întreținut.",
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
    clientProject: "Proiect client",
    personalProject: "Proiect personal",
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
        name: "SavingBox",
        tagline:
          "Aplicație de finanțe personale pentru venituri, cheltuieli și economii.",
        role: "Fullstack developer",
        duration: "6 luni",
        problem:
          "Finanțele personale erau împrăștiate între aplicații bancare și foi Excel, fără o imagine clară despre unde se duc banii.",
        solution:
          "O aplicație care strânge veniturile, cheltuielile și economiile într-un singur loc, cu analize grafice ca să vezi clar unde se duc banii.",
        overview:
          "Aplicație full-stack pentru gestionarea veniturilor, cheltuielilor și economiilor, cu analize grafice și interfață bilingvă (RO/EN).",
        features: [
          "API REST în Express + TypeScript cu arhitectură pe straturi (routes → controllers → services), validare cu Zod și sanitizarea input-ului",
          "Autentificare JWT cu cookie-uri httpOnly și rotația refresh token-urilor, peste o schemă PostgreSQL cu triggere",
          "Frontend React + Vite cu shadcn/ui, Tailwind v4 (dark mode), formulare multi-step și grafice Recharts (tendințe, distribuții, prognoze)",
          "Medii separate dev/producție (două proiecte Supabase, configurare prin env), migrații versionate cu Supabase CLI și Git flow feature → dev → main",
          "Deploy pe Netlify (frontend) și Render (API); CI cu GitHub Actions (lint, typecheck, build) și hook-uri pre-commit cu Husky",
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
          {
            title: "React Query pentru datele de pe server",
            text: "De ce ai ales soluția asta — ex. cache și sincronizare cu serverul fără boilerplate.",
          },
          {
            title: "Tailwind pentru design system",
            text: "Ce alternativă ai cântărit și de ce ai ales-o pe aceasta.",
          },
        ],
        lessons:
          "Ce ai învățat din proiect sau ce ai face altfel acum — ex. ai începe cu testele end-to-end mai devreme.",
        results: [
          { value: "20", label: "utilizatori activi" },
          { value: "1000+", label: "tranzacții" },
          { value: "99,9%", label: "uptime" },
        ],
      },
      ceramico: {
        name: "Ceramico",
        tagline:
          "Catalog de produse pentru un magazin de gresie și faianță, cu filtrare avansată și dashboard de administrare.",
        role: "Fullstack developer",
        duration: "3 luni",
        problem:
          "Un magazin de gresie și faianță nu avea un catalog online în care clienții să caute și să filtreze produsele după culoare, dimensiuni sau utilizare.",
        solution:
          "Un catalog full-stack cu filtrare avansată, căutare globală și un dashboard de administrare din care produsele și imaginile se gestionează direct.",
        overview:
          "Catalog full-stack pentru un magazin de gresie și faianță, cu filtrare avansată, căutare globală și dashboard de administrare a produselor.",
        features: [
          "Next.js App Router cu separare între server și client components, route groups pentru site-ul public și zona de admin, rutare pe slug-uri, optimizată SEO",
          "Schemă PostgreSQL în Supabase (produse, imagini) cu politici RLS, triggere și coloane de tip array pentru atribute cu valori multiple (culoare, dimensiuni, utilizare)",
          "Sistem de filtrare bazat pe URL (stare partajabilă prin search params), grilă de produse paginată și responsive, drawer de filtre pe mobil și badge-uri pentru filtrele active",
          "Căutare globală cu debounce și secțiune de produse similare, pe baza atributelor comune",
          "Dashboard de admin cu autentificare custom prin cookie-uri httpOnly, pentru încărcarea produselor și imaginilor în Supabase Storage",
          "Formular de contact integrat cu Resend prin server actions, cu validare pentru numere de telefon românești; deploy pe Vercel",
        ],
        challenges: [
          {
            title: "Filtrare pe atribute cu valori multiple",
            text: "Un produs are mai multe culori, dimensiuni și utilizări, așa că filtrele rulează pe coloane array din PostgreSQL și caută valori care se suprapun.",
          },
          {
            title: "Produse similare relevante",
            text: "Secțiunea de produse similare ordonează produsele după câte atribute au în comun cu cel curent.",
          },
        ],
        decisions: [
          {
            title: "Starea filtrelor în URL",
            text: "Filtrele ținute în search params fac fiecare căutare partajabilă și salvabilă, iar server components o pot randa direct.",
          },
          {
            title: "Route groups pentru public și admin",
            text: "Route groups separate dau site-ului public și zonei de admin layout-uri proprii, fără să schimbe URL-urile.",
          },
        ],
        lessons: "Ce ai învățat din proiect sau ce ai face altfel acum.",
        results: [
          { value: "100", label: "vizitatori zilnic" },
          { value: "99,9%", label: "uptime" },
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

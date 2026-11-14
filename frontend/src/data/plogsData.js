export const PLOG_ITEMS = [
  {
    id: "studenv",
    title: "Studenv",
    type: "project",
    createdAt: "2026-11-14T00:00:00.000Z",
    shortDescription:
      "A learning workspace combining study resources, notes, video learning, and personal knowledge management.",
    longDescription:
      "Studenv brings study resources, notes, video learning, and personal knowledge management into one learning workspace. It is designed to help learners work with their course material and build connected knowledge in one place.",
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Backblaze B2", "AWS SDK v3"],
    detail: {
      actions: [
        { label: "Visit Studenv", href: "https://studenv-online.vercel.app", variant: "filled" },
      ],
      lead: "A learning environment built around the way students actually study: reading, watching, capturing ideas, and working with their material.",
      sections: [
        {
          heading: "The Platform",
          body: "Studenv combines study resources, notes, video learning, and personal knowledge management in a single workspace.",
        },
        {
          heading: "Interactive Workspace",
          body: "Developed authentication, database models, resource handling, and interactive workspace tools including drawing, sticky notes, images, and connectors.",
        },
        {
          heading: "Engineering Challenges",
          body: "Investigated performance, caching, database connection, and mobile touch and pointer interaction issues across the application.",
        },
      ],
    },
  },
  {
    id: "setbget",
    title: "SetBGet",
    type: "project",
    createdAt: "2026-11-14T00:00:00.000Z",
    shortDescription:
      "A job discovery and application platform with user accounts, job management, and application workflows.",
    longDescription:
      "SetBGet is a job discovery and application platform built with JavaScript, Node.js, Express, and MongoDB. It includes REST APIs and data models for users, jobs, saved jobs, and applications.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Vercel", "Railway"],
    detail: {
      actions: [
        { label: "Visit SetBGet", href: "https://setbget.in", variant: "filled" },
      ],
      lead: "A full-stack job platform focused on the core journey from discovering opportunities to managing applications.",
      sections: [
        {
          heading: "Platform Features",
          body: "Built REST APIs and data models for users, jobs, saved jobs, and applications.",
        },
        {
          heading: "Authentication and Management",
          body: "Implemented OTP verification, password recovery, email verification, admin job management, and slug-based job routes.",
        },
        {
          heading: "Localization and Deployment",
          body: "Worked on English, Hindi, and Indian Bengali localization, deployment troubleshooting, and SEO. The frontend is deployed on Vercel and the backend on Railway.",
        },
      ],
    },
  },
  {
    id: "eduguard",
    title: "EduGuard",
    type: "project",
    createdAt: "2026-11-14T00:00:00.000Z",
    shortDescription:
      "A Chrome extension that creates an education-focused YouTube experience by hiding distracting content.",
    longDescription:
      "EduGuard is an educational YouTube mode built as a Chrome Extension using Manifest V3. It hides distractions such as Shorts, comments, and the home feed while applying configurable content filtering.",
    tags: ["JavaScript", "Chrome Extension", "Manifest V3", "Content Scoring"],
    detail: {
      actions: [
        { label: "View EduGuard extension", href: "https://share.google/GTveDoXRb4zZ9f4GM", variant: "filled" },
      ],
      lead: "A browser extension designed to make YouTube more useful for focused learning.",
      sections: [
        {
          heading: "Reducing Distractions",
          body: "Created an education-focused YouTube mode that hides distractions such as Shorts, comments, and the home feed.",
        },
        {
          heading: "Configurable Filtering",
          body: "Built configurable filtering modes and content-scoring logic, and handled extension storage, permissions, and dynamic page updates.",
        },
      ],
    },
  },
  {
    id: "refokus_clone",
    title: "Refokus Website Clone",
    type: "project",
    createdAt: "2025-11-11T16:40:00.000Z",
    shortDescription:
      "Animated Refokus website clone built with React, GSAP, and Framer Motion.",
    longDescription:
      "Developed a pixel-accurate clone of the Refokus website using React, focusing on smooth UI transitions and modern animation patterns. Implemented scroll-triggered animations with GSAP and interactive motion effects using Framer Motion.",
    tags: ["React", "GSAP", "Framer Motion", "Animations", "Frontend"],
    detail: {
      actions: [
        { label: "Live Demo", href: "https://refokus-clone-project.netlify.app/", variant: "filled" },
        { label: "GitHub", href: "https://github.com/bhaskar-f/frontend-projects/tree/main/Refokus", variant: "ghost" },
      ],
      lead: "A frontend recreation focused on motion, transitions, and responsive presentation.",
      sections: [
        { heading: "What I Built", body: "Recreated the visual experience with React, GSAP scroll-triggered animations, and Framer Motion interactions." },
      ],
    },
  },
  {
    id: "bug-diary",
    title: "Bug Diary",
    type: "project",
    createdAt: "2026-02-18T10:20:00.000Z",
    shortDescription:
      "A bug log that records root causes, fixes, and unresolved issues so repeated bugs are solved faster.",
    longDescription:
      "Bug Diary is a debugging workspace for developers who keep seeing the same bugs return. Each issue is stored with reproduction steps, debugging notes, root cause, fix summary, and current status.",
    tags: ["Debugging", "MERN", "Productivity", "Issue Tracking"],
    detail: {
      actions: [
        { label: "Live Demo", href: "https://bugdiary.vercel.app/", variant: "filled" },
        { label: "GitHub", href: "https://github.com/bhaskar-f/Bug-diary", variant: "ghost" },
      ],
      lead: "I built this after fixing the same category of bug more than once and realizing my notes were scattered everywhere.",
      sections: [
        { heading: "The Problem", body: "Debug history often lives in temporary places. When the same bug reappears, the original reasoning is gone and the investigation starts from zero." },
        { heading: "What I Built", body: "A focused bug-journaling flow with status stages, searchable entries, and structured fields for reproduction steps, root cause, and fix notes." },
      ],
    },
  },
  {
    id: "idea-graveyard",
    title: "Idea Graveyard",
    type: "project",
    createdAt: "2026-02-02T09:30:00.000Z",
    shortDescription:
      "A project tracker for ideas across stages like incoming, active, on-hold, and graveyard.",
    longDescription:
      "Idea Graveyard helps manage side-project ideas before they disappear. It organizes concepts into lifecycle stages such as incoming, building, on hold, and graveyard.",
    tags: ["Idea Management", "Workflow", "Planning", "Frontend"],
    detail: {
      actions: [
        { label: "Live Demo", href: "https://mindstock.vercel.app/", variant: "filled" },
        { label: "GitHub", href: "https://github.com/bhaskar-f/MindStock", variant: "ghost" },
      ],
      lead: "Most ideas do not fail because they are bad. They fail because they are forgotten between bursts of motivation.",
      sections: [
        { heading: "What I Built", body: "A lightweight board where each idea moves through explicit states: incoming, building, on hold, and graveyard." },
      ],
    },
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "project",
    createdAt: "2026-03-01T11:00:00.000Z",
    shortDescription:
      "A personal portfolio built to showcase projects, writing, and contact workflow with a clean editorial interface.",
    longDescription:
      "This portfolio website presents projects, writing, and background in one focused experience. It combines a minimal visual language with smooth transitions, reusable components, and a custom project detail flow.",
    tags: ["React", "Vite", "Framer Motion", "Node.js", "Express", "Portfolio"],
    detail: {
      actions: [
        { label: "Live Portfolio", href: "https://bhaskarsarkar.vercel.app/", variant: "filled" },
        { label: "GitHub", href: "https://github.com/bhaskar-f/my-portfolio", variant: "ghost" },
      ],
      lead: "I wanted a portfolio that feels personal, reads clearly, and scales as I ship more work over time.",
      sections: [
        { heading: "What I Built", body: "A React and Vite frontend with reusable sections for featured work, project details, and a custom Node.js and Express backend." },
      ],
    },
  },
];

export const PLOG_TABS = [
  { key: "all", label: "all" },
  { key: "project", label: "projects" },
  { key: "blog", label: "blogs" },
];

export const PLOG_TYPE_BADGE = {
  project: "Project",
  blog: "Blog",
};

export function sortByDateDesc(a, b) {
  return new Date(b.createdAt) - new Date(a.createdAt);
}

export function formatPlogDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function groupAndSortByType(items = PLOG_ITEMS) {
  const grouped = {};

  for (const item of items) {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push(item);
  }

  for (const type in grouped) {
    grouped[type] = [...grouped[type]].sort(sortByDateDesc);
  }

  return grouped;
}

export function interleaveByType(sortedByType, typeOrder) {
  const cursors = {};
  let totalItems = 0;

  for (const type of typeOrder) {
    cursors[type] = 0;
    totalItems += sortedByType[type]?.length ?? 0;
  }

  const interleaved = [];

  while (interleaved.length < totalItems) {
    for (const type of typeOrder) {
      const currentList = sortedByType[type] ?? [];
      const index = cursors[type];

      if (index < currentList.length) {
        interleaved.push(currentList[index]);
        cursors[type] += 1;
      }
    }
  }

  return interleaved;
}

export function getPlogById(id) {
  return PLOG_ITEMS.find((item) => item.id === id);
}

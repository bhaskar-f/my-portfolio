export const PLOG_ITEMS = [
  {
    id: "refokus_clone",
    title: "Refokus Website Clone",
    type: "project",
    createdAt: "2025-11-11T16:40:00.000Z",
    shortDescription:
      "Animated Refokus website clone built with React, GSAP, and Framer Motion.",
    longDescription:
      "Developed a pixel-accurate clone of the Refokus website using React, focusing on smooth UI transitions and modern animation patterns. Implemented advanced scroll-triggered animations with GSAP and interactive motion effects using Framer Motion. Emphasized performance optimization, clean component structure, and responsive design to closely replicate the original user experience.",
    tags: ["React", "GSAP", "Framer Motion", "Animations", "Frontend"],
    detail: {
      actions: [
        {
          label: "Live Demo",
          href: "https://refokus-clone-project.netlify.app/",
          variant: "filled",
        },
        {
          label: "github",
          href: "https://github.com/bhaskar-f/frontend-projects/tree/main/Refokus",
          variant: "ghost",
        },
      ],
      lead: "Scaling a frontend from 5 screens to 40 without breaking state, performance, or developer sanity. The goal: structure before chaos.",
      sections: [
        {
          heading: "The Problem",
          body: "As features expanded, state management became messy. Props were drilled across multiple layers, API calls were duplicated, and UI updates caused unnecessary re-renders. Debugging became slower with every new feature added.",
        },
        {
          heading: "What I Built",
          body: "Re-architected the React application using Context API for global state isolation and modular folder structure. Extracted reusable hooks for API logic, implemented lazy loading with route-based code splitting, and optimized rendering using memoization patterns.",
          quote:
            "Good React architecture isn't about writing more components — it's about knowing which components should never know about each other.",
        },
        {
          heading: "The Result",
          body: "Reduced unnecessary re-renders, improved performance across feature-heavy pages, and made onboarding easier for new developers. Feature delivery became faster because structure replaced guesswork.",
        },
      ],
    },
  },
  {
    id: "design-system",
    title: "Design System from Scratch",
    type: "project",
    createdAt: "2025-12-21T10:15:00.000Z",
    shortDescription:
      "Unified reusable UI components and tokens across multiple products.",
    longDescription:
      "Built a shared design system with React and Storybook to standardize UI behavior across products. Defined component APIs, design tokens, accessibility patterns, and documentation workflows so teams could ship faster with fewer visual inconsistencies.",
    tags: ["React", "Storybook", "Design System", "Accessibility"],
    detail: {
      actions: [
        {
          label: "storybook",
          href: "https://storybook.js.org/",
          variant: "filled",
        },
        {
          label: "github",
          href: "https://github.com/bhaskar-f",
          variant: "ghost",
        },
      ],
      lead: "Three products, three different component styles, three teams arguing about button padding. The goal: one source of truth.",
      sections: [
        {
          heading: "The Problem",
          body: "Each product had its own button, its own modal, its own form input - all slightly different. New features took twice as long because every team was rebuilding the same primitives.",
        },
        {
          heading: "What I am trying to Build",
          body: "A fully typed React component library, documented in Storybook, with a companion Figma kit that stayed in sync. Every component ships with accessibility, dark mode tokens, and tests.",
          quote:
            "The real challenge wasn't the code. It was convincing three teams with three different opinions to agree on what a 'button' actually is.",
        },
        {
          heading: "The Result",
          body: "Design inconsistencies dropped by 70% in the first quarter. New features got measurably faster because developers could reach for shared components instead of building them again.",
        },
      ],
    },
  },
  {
    id: "no-blogs-yet",
    title: "NO Blogs Yet But comming soon",
    type: "blog",
    createdAt: "2026-01-04T08:10:00.000Z",
    tags: [],
    shortDescription: "Blogs coming soon",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "project",
    createdAt: "2026-03-01T11:00:00.000Z",
    shortDescription:
      "A personal portfolio built to showcase projects, writing, and contact workflow with a clean editorial interface.",
    longDescription:
      "This portfolio website was designed and developed to present my projects, blogs, and background in one focused experience. It combines a minimal visual language with smooth transitions, reusable components, and a custom project detail flow. The site also includes a working contact pipeline connected to a backend email API for direct outreach.",
    tags: ["React", "Vite", "Framer Motion", "Node.js", "Portfolio"],
    detail: {
      lead: "I wanted a portfolio that feels personal, reads clearly, and scales as I ship more work over time.",
      sections: [
        {
          heading: "The Goal",
          body: "Most portfolio sites either look good but feel generic, or they are functional but hard to read. The target here was to build something that is visually strong, fast, and structured enough to keep evolving with new projects.",
        },
        {
          heading: "What I Built",
          body: "A React + Vite frontend with reusable sections for featured work, plogs, and detailed project panels. I implemented theme-aware styling, responsive layout behavior, and a dedicated backend endpoint for the contact form with production-safe environment setup and CORS controls.",
          quote:
            "A portfolio is not just a gallery. It is a product that communicates how you think.",
        },
        {
          heading: "Current State",
          body: "The site is live, deployment-ready, and structured for continuous updates. New projects can be added through centralized data objects, and the UI already supports detailed storytelling for each build.",
        },
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
      "Bug Diary is a debugging workspace for developers who keep seeing the same bugs return. Each issue is stored with reproduction steps, debugging notes, root cause, fix summary, and current status. Instead of restarting research every time a bug comes back, the project turns past debugging work into reusable knowledge.",
    tags: ["Debugging", "MERN", "Productivity", "Issue Tracking"],
    detail: {
      actions: [
        {
          label: "live demo",
          href: "https://bugdiary.vercel.app/",
          variant: "filled",
        },
        {
          label: "github",
          href: "https://github.com/bhaskar-f/Bug-diary",
          variant: "ghost",
        },
      ],
      lead: "I built this after fixing the same category of bug more than once and realizing my notes were scattered everywhere.",
      sections: [
        {
          heading: "The Problem",
          body: "Debug history usually lives in temporary places: terminal output, chat screenshots, and random files. When the same bug reappears after weeks, the original reasoning is gone and the investigation starts from zero.",
        },
        {
          heading: "What I Built",
          body: "A focused bug-journaling flow with status stages, searchable entries, and structured fields for repro steps, root cause, and fix notes. The project keeps unresolved bugs visible while preserving solved bug context for future reference.",
          quote:
            "Fixing a bug once is good. Fixing it once and never re-researching it again is better.",
        },
        {
          heading: "Current Outcome",
          body: "Bug Diary now works as a personal debugging memory layer. Repeat-debug time drops because previous decisions, failed attempts, and final fixes are already documented in one place.",
        },
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
      "Idea Graveyard helps manage side-project ideas before they disappear. It organizes concepts into lifecycle stages such as incoming, building, on hold, and graveyard. The goal is to keep momentum on promising ideas while still preserving paused concepts with enough context to restart later.",
    tags: ["Idea Management", "Workflow", "Planning", "Frontend"],
    detail: {
      actions: [
        {
          label: "live demo",
          href: "https://mindstock.vercel.app/",
          variant: "filled",
        },
        {
          label: "github",
          href: "https://github.com/bhaskar-f/MindStock",
          variant: "ghost",
        },
      ],
      lead: "Most ideas do not fail because they are bad. They fail because they are forgotten between bursts of motivation.",
      sections: [
        {
          heading: "The Problem",
          body: "Idea lists are often just flat notes with no status or structure. Without stages, it is hard to decide what to build next, what to pause, and what to stop investing time in.",
        },
        {
          heading: "What I Built",
          body: "A lightweight board where each idea moves through explicit states: incoming, building, on hold, and graveyard. This adds decision clarity while preserving enough project context to revive old ideas without starting cold.",
        },
        {
          heading: "The Result",
          body: "The system improved prioritization and reduced idea churn. Active ideas stay visible, paused ideas remain recoverable, and abandoned ideas are archived intentionally instead of silently disappearing.",
        },
      ],
    },
  },

  // {
  //   id: "boring-architecture",
  //   title: "The Boring Architecture That Saved Us",
  //   type: "blog",
  //   createdAt: "2025-10-06T12:05:00.000Z",
  //   shortDescription:
  //     "Why simple architecture outperformed unnecessary complexity.",
  //   longDescription:
  //     "Detailed how a monolith-first architecture improved delivery speed, observability, and reliability for a small team. Shared decision criteria for when to keep systems simple and when to split services intentionally.",
  //   tags: ["Architecture", "Monolith", "Scalability", "Team Processes"],
  // },
  {
    id: "second-brain",
    title: "Second Brain: BrainDoc",
    type: "project",
    createdAt: "2026-03-09T09:45:00.000Z",
    shortDescription:
      "A personal knowledge vault for storing, linking, and retrieving notes with fast recall.",
    longDescription:
      "BrainDoc is a second-brain system for capturing and organizing personal knowledge. It combines structured notes, tags, backlinks, and search-first navigation so ideas stay connected over time. The project focuses on making context retrieval fast, especially for information that is useful but easy to forget.",
    tags: ["Knowledge Base", "MERN", "Search", "Productivity"],
    detail: {
      lead: "I wanted a place where notes are not just stored, but connected well enough to be useful months later.",
      sections: [
        {
          heading: "The Problem",
          body: "Traditional note apps store information well but often fail at retrieval. Notes become isolated documents, and finding the right thought later takes more time than writing it did.",
        },
        {
          heading: "What I am Building",
          body: "BrainDoc combines collections, tags, and linked references with quick full-text search. The structure is designed to support both short capture sessions and deep context rebuilding when returning to a topic after long gaps.",
          quote:
            "A second brain should not be a digital drawer. It should feel like a map.",
        },
        {
          heading: "Current State",
          body: "Core information architecture is defined and the project is being expanded iteratively. The focus is on reliable note linking, clean search UX, and low friction capture so the system remains useful daily.",
        },
      ],
    },
  },
  // {
  //   id: "css-frameworks",
  //   title: "Why I Stopped Using CSS Frameworks",
  //   type: "blog",
  //   createdAt: "2026-02-02T14:00:00.000Z",
  //   shortDescription:
  //     "Reflections on maintainability after returning to core CSS.",
  //   longDescription:
  //     "Shared lessons from moving away from utility-heavy workflows toward deliberate CSS architecture. Compared iteration speed, debugging cost, and long-term maintainability with practical examples from production UI work.",
  //   tags: ["CSS", "Opinion", "Frontend"],
  //   detail: {
  //     dateLabel: "January 2025",
  //     readTime: "5 min read",
  //     lead: "I used Tailwind for two years. Before that, Bootstrap. They're genuinely good tools. But I stopped, and here's what happened.",
  //     sections: [
  //       {
  //         heading: "The Moment I Noticed",
  //         body: "I was debugging a layout bug and I had no idea what was happening. I knew the class names. I didn't know CSS. There's a difference, and I'd blurred it completely.",
  //         quote:
  //           "Knowing a framework is not the same as understanding the thing it abstracts. I had mistaken fluency in Tailwind for fluency in CSS.",
  //       },
  //       {
  //         heading: "What Going Back Felt Like",
  //         body: "Painful at first. Then freeing. I started understanding why things behaved the way they did. I stopped copy-pasting and started writing CSS I could explain.",
  //       },
  //       {
  //         heading: "The Tradeoff",
  //         body: "I'm slower on greenfield projects now. But I debug faster, write less CSS, and the code is more intentional. The point isn't 'vanilla CSS is better.' The point is: know what your tools are hiding from you.",
  //       },
  //     ],
  //   },
  // },
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
    if (!grouped[item.type]) {
      grouped[item.type] = [];
    }
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

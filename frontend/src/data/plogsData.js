export const PLOG_ITEMS = [
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
          href: "https://github.com/",
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
          heading: "What I Built",
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
    id: "api-rate-limit",
    title: "API Rate Limiting That Scales",
    type: "blog",
    createdAt: "2026-01-04T08:10:00.000Z",
    shortDescription:
      "A practical guide to building fair, high-throughput rate limiting.",
    longDescription:
      "Explained token-bucket and sliding-window approaches, distributed counters, and edge caching tradeoffs. Covered real production constraints like burst traffic, shared keys, and graceful degradation under load.",
    tags: ["Backend", "Redis", "API", "Performance"],
  },
  {
    id: "realtime-collab",
    title: "Real-Time Collaboration Tool",
    type: "project",
    createdAt: "2025-11-11T16:40:00.000Z",
    shortDescription:
      "A collaborative editor with presence, sync, and conflict handling.",
    longDescription:
      "Developed a real-time collaboration app with WebSocket transport, live cursors, and deterministic conflict resolution. Focused on low-latency sync, optimistic updates, and robust reconnect behavior for unstable networks.",
    tags: ["WebSockets", "Realtime", "State Sync", "Next.js"],
  },
  {
    id: "boring-architecture",
    title: "The Boring Architecture That Saved Us",
    type: "blog",
    createdAt: "2025-10-06T12:05:00.000Z",
    shortDescription:
      "Why simple architecture outperformed unnecessary complexity.",
    longDescription:
      "Detailed how a monolith-first architecture improved delivery speed, observability, and reliability for a small team. Shared decision criteria for when to keep systems simple and when to split services intentionally.",
    tags: ["Architecture", "Monolith", "Scalability", "Team Processes"],
  },
  {
    id: "second-brain",
    title: "Second Brain: BrainDoc",
    type: "project",
    createdAt: "2026-02-09T09:45:00.000Z",
    shortDescription:
      "A personal knowledge vault for structured notes and quick recall.",
    longDescription:
      "Designed a second-brain application to capture, organize, and retrieve personal knowledge. Implemented tagging, linking, and search-first navigation so users can connect ideas quickly and keep long-term context.",
    tags: ["Productivity", "Search", "Knowledge Base", "UX"],
  },
  {
    id: "css-frameworks",
    title: "Why I Stopped Using CSS Frameworks",
    type: "blog",
    createdAt: "2026-02-02T14:00:00.000Z",
    shortDescription:
      "Reflections on maintainability after returning to core CSS.",
    longDescription:
      "Shared lessons from moving away from utility-heavy workflows toward deliberate CSS architecture. Compared iteration speed, debugging cost, and long-term maintainability with practical examples from production UI work.",
    tags: ["CSS", "Opinion", "Frontend"],
    detail: {
      dateLabel: "January 2025",
      readTime: "5 min read",
      lead: "I used Tailwind for two years. Before that, Bootstrap. They're genuinely good tools. But I stopped, and here's what happened.",
      sections: [
        {
          heading: "The Moment I Noticed",
          body: "I was debugging a layout bug and I had no idea what was happening. I knew the class names. I didn't know CSS. There's a difference, and I'd blurred it completely.",
          quote:
            "Knowing a framework is not the same as understanding the thing it abstracts. I had mistaken fluency in Tailwind for fluency in CSS.",
        },
        {
          heading: "What Going Back Felt Like",
          body: "Painful at first. Then freeing. I started understanding why things behaved the way they did. I stopped copy-pasting and started writing CSS I could explain.",
        },
        {
          heading: "The Tradeoff",
          body: "I'm slower on greenfield projects now. But I debug faster, write less CSS, and the code is more intentional. The point isn't 'vanilla CSS is better.' The point is: know what your tools are hiding from you.",
        },
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

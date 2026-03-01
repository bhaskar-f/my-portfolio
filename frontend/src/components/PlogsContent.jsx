import { useMemo, useState } from "react";

const PLOG_ITEMS = [
  {
    id: "design-system",
    title: "Design System from Scratch",
    type: "project",
    createdAt: "2025-12-21T10:15:00.000Z",
  },
  {
    id: "api-rate-limit",
    title: "API Rate Limiting That Scales",
    type: "blog",
    createdAt: "2026-01-04T08:10:00.000Z",
  },
  {
    id: "realtime-collab",
    title: "Real-Time Collaboration Tool",
    type: "project",
    createdAt: "2025-11-11T16:40:00.000Z",
  },
  {
    id: "boring-architecture",
    title: "The Boring Architecture That Saved Us",
    type: "blog",
    createdAt: "2025-10-06T12:05:00.000Z",
  },
  {
    id: "second-brain",
    title: "Second Brain: BrainDoc",
    type: "project",
    createdAt: "2026-02-09T09:45:00.000Z",
  },
  {
    id: "css-frameworks",
    title: "Why I Stopped Using CSS Frameworks",
    type: "blog",
    createdAt: "2026-02-02T14:00:00.000Z",
  },
];

const TABS = [
  { key: "all", label: "all" },
  { key: "project", label: "projects" },
  { key: "blog", label: "blogs" },
];

const TYPE_BADGE = {
  project: "Project",
  blog: "Blog",
};

function sortByDateDesc(a, b) {
  return new Date(b.createdAt) - new Date(a.createdAt);
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function PlogsContent() {
  const [activeTab, setActiveTab] = useState("all");

  const sortedByType = useMemo(() => {
    const grouped = {};

    for (const item of PLOG_ITEMS) {
      if (!grouped[item.type]) {
        grouped[item.type] = [];
      }
      grouped[item.type].push(item);
    }

    for (const type in grouped) {
      grouped[type] = [...grouped[type]].sort(sortByDateDesc);
    }

    return grouped;
  }, []);

  const visibleItems = useMemo(() => {
    if (activeTab !== "all") {
      return sortedByType[activeTab] ?? [];
    }

    const preferredOrder = TABS.filter((tab) => tab.key !== "all").map(
      (tab) => tab.key,
    );
    const dynamicTypes = Object.keys(sortedByType).filter(
      (type) => !preferredOrder.includes(type),
    );
    const typeOrder = [...preferredOrder, ...dynamicTypes];

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
  }, [activeTab, sortedByType]);

  return (
    <div className="w-full h-full px-5">
      <div className="info mt-3">
        <h1 className="text-[2.25rem] leading-[2.4rem] font-normal">
          Things I've built <br />
          <span>
            <i>& written.</i>
          </span>
        </h1>
        <span className="text-zinc-500 text-[0.9rem]">
          Projects, essays, and experiments. In progress and shipped.
        </span>
      </div>

      <div className="sticky top-0 z-40 mt-8 bg-[#fafaf8]">
        <div className="flex gap-6 text-[0.63rem]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`uppercase nav-text py-2 cursor-pointer border-b-[1px] duration-200 ${
                  isActive
                    ? "text-[#111111] border-[#111111]"
                    : "border-transparent hover:text-[#111111]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <hr className="text-[#f0d1ce] -mt-[1px]" />
      </div>

      <div className="mt-2">
        {visibleItems.map((item, index) => {
          const itemNumber = index + 1;

          return (
            <article
              key={item.id}
              className="flex gap-3 w-full border-b-[1px] border-[#f0d1ce] py-5"
            >
              <span className="text-[0.65rem] text-zinc-300 font-[Jetbrains_mono] mt-1">
                {itemNumber < 10 ? `0${itemNumber}` : itemNumber}
              </span>

              <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-[1.1rem] leading-[1.3rem] font-medium">
                    {item.title}
                  </h2>
                  <time className="nav-text text-[0.65rem] whitespace-nowrap">
                    {formatDate(item.createdAt)}
                  </time>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="nav-text text-[0.55rem] uppercase tracking-[0.08em] border-[1px] border-[#f0d1ce] px-1.5 py-[2px]">
                    {TYPE_BADGE[item.type] ?? item.type}
                  </span>
                  <span className="nav-text text-[0.6rem]">{item.id}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

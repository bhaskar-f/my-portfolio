import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  PLOG_TABS,
  PLOG_TYPE_BADGE,
  formatPlogDate,
  groupAndSortByType,
  interleaveByType,
} from "../data/plogsData";

export default function PlogsContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const validTabs = new Set(PLOG_TABS.map((t) => t.key));

  const getTabFromUrl = () => {
    const tab = searchParams.get("tab");
    return validTabs.has(tab) ? tab : "all";
  };

  const [activeTab, setActiveTab] = useState("all");

  const sortedByType = useMemo(() => {
    return groupAndSortByType();
  }, []);

  const visibleItems = useMemo(() => {
    if (activeTab !== "all") {
      return sortedByType[activeTab] ?? [];
    }

    const preferredOrder = PLOG_TABS.filter((tab) => tab.key !== "all").map(
      (tab) => tab.key,
    );
    const dynamicTypes = Object.keys(sortedByType).filter(
      (type) => !preferredOrder.includes(type),
    );
    const typeOrder = [...preferredOrder, ...dynamicTypes];

    return interleaveByType(sortedByType, typeOrder);
  }, [activeTab, sortedByType]);

  useEffect(() => {
    setActiveTab(getTabFromUrl());
  }, [searchParams]);

  return (
    <div className="relative w-full h-full px-5">
      <div className="info mt-3">
        <h1 className="text-[2.25rem] leading-[2.4rem] font-normal">
          Things I've built <br />
          <span>
            <i>& written.</i>
          </span>
        </h1>
        <span className="muted text-[0.9rem]">
          Projects, essays, and experiments. In progress and shipped.
        </span>
      </div>

      <div className="sticky top-0 z-40 mt-8 surface">
        <div className="flex gap-6 text-[0.63rem]">
          {PLOG_TABS.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setSearchParams(tab.key === "all" ? {} : { tab: tab.key });
                }}
                className={`uppercase nav-text py-2 cursor-pointer border-b-[1px] duration-200 ${
                  isActive
                    ? "!text-[var(--ink)] border-[var(--ink)]"
                    : "border-transparent hover:!text-[var(--ink)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <hr className="line -mt-[1px]" />
      </div>

      <div className="mt-2">
        {visibleItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/plogs/${item.id}`}
              className="group block border-b-[1px] line py-5"
            >
              <article className="w-full">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-[1.1rem] leading-[1.3rem] font-medium group-hover:underline group-hover:underline-offset-3">
                    {item.title}
                  </h2>
                  <time className="nav-text text-[0.65rem] whitespace-nowrap">
                    {formatPlogDate(item.createdAt)}
                  </time>
                </div>

                <p className="mt-2 muted text-[0.86rem] leading-[1.45rem]">
                  {item.shortDescription}
                </p>

                <div className="mt-3 flex items-center flex-wrap">
                  <span className="nav-text text-[0.55rem] uppercase tracking-[0.08em] border-[1px] line px-1.5 py-[2px]">
                    {PLOG_TYPE_BADGE[item.type] ?? item.type}
                  </span>
                  {(item.tags ?? []).map((tag, tagIndex) => {
                    return (
                      <span
                        key={`${item.id}-${tag}`}
                        className={`nav-text text-[0.55rem] flex items-center ${
                          tagIndex === 0 ? "ml-2" : ""
                        }`}
                      >
                        {tagIndex > 0 ? (
                          <span className="faint-text text-[0.62rem] mx-2">
                            {"\u2022"}
                          </span>
                        ) : null}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

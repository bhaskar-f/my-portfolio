import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import { PLOG_TYPE_BADGE, getPlogById } from "../data/plogsData";

function formatPlogYear(isoDate) {
  return new Date(isoDate).getFullYear();
}

function formatPlogMonthYear(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}

function estimateReadTime(item, sections, lead) {
  const pool = [
    lead,
    item.longDescription,
    ...(sections ?? []).map((s) => s.body),
  ];
  const wordCount = pool.join(" ").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

function getActionClasses(variant) {
  if (variant === "filled") {
    return "inline-flex items-center gap-1 border-[1px] border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] px-4 py-[0.55rem] text-[0.56rem] uppercase tracking-[0.05em] font-jetbrains duration-200 hover:opacity-90";
  }

  return "inline-flex items-center gap-1 border-[1px] line px-4 py-[0.55rem] text-[0.56rem] uppercase tracking-[0.05em] nav-text duration-200 hover-ink hover-line-ink";
}

function getDetailContent(item) {
  const isBlog = item.type === "blog";
  const fallbackSections = [
    {
      heading: item.type === "project" ? "What I Built" : "Overview",
      body: item.longDescription,
    },
  ];
  const sections =
    item.detail?.sections && item.detail.sections.length > 0
      ? item.detail.sections
      : fallbackSections;
  const lead = item.detail?.lead ?? item.shortDescription;

  return {
    isBlog,
    label: isBlog
      ? "BLOG POST"
      : (PLOG_TYPE_BADGE[item.type] ?? item.type).toUpperCase(),
    lead,
    actions: isBlog ? [] : (item.detail?.actions ?? []),
    sections,
    dateText: isBlog
      ? (item.detail?.dateLabel ?? formatPlogMonthYear(item.createdAt))
      : String(formatPlogYear(item.createdAt)),
    readTime: isBlog
      ? (item.detail?.readTime ?? estimateReadTime(item, sections, lead))
      : null,
  };
}

export default function PlogDetail() {
  const { plogId } = useParams();
  const item = getPlogById(plogId);
  const detail = item ? getDetailContent(item) : null;
  const panelRef = useRef(null);

  useEffect(() => {
    const scrollKeys = new Set([
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
    ]);

    const isInsidePanel = (targetNode) => {
      const panel = panelRef.current;
      return panel && targetNode instanceof Node && panel.contains(targetNode);
    };

    const blockScrollOutsidePanel = (event) => {
      if (isInsidePanel(event.target)) return;
      event.preventDefault();
      event.stopPropagation();
    };

    const blockScrollKeysOutsidePanel = (event) => {
      if (!scrollKeys.has(event.key)) return;

      const active = document.activeElement;
      if (isInsidePanel(active)) return;

      event.preventDefault();
      event.stopPropagation();
    };

    window.addEventListener("wheel", blockScrollOutsidePanel, {
      passive: false,
      capture: true,
    });
    window.addEventListener("touchmove", blockScrollOutsidePanel, {
      passive: false,
      capture: true,
    });
    window.addEventListener("keydown", blockScrollKeysOutsidePanel, true);

    return () => {
      window.removeEventListener("wheel", blockScrollOutsidePanel, true);
      window.removeEventListener("touchmove", blockScrollOutsidePanel, true);
      window.removeEventListener("keydown", blockScrollKeysOutsidePanel, true);
    };
  }, []);

  const panelBody =
    item && detail ? (
      <>
        <article className="mt-7">
          <p className="nav-text text-[0.5rem] uppercase tracking-[0.12em]">
            {detail.label}
          </p>

          <h1 className="mt-2 text-[1.88rem] sm:text-[2.44rem] leading-[1.96rem] sm:leading-[2.5rem] font-normal">
            {item.title}
          </h1>

          {detail.isBlog ? (
            <div className="mt-5 flex items-center gap-6">
              <time className="nav-text text-[0.58rem]">{detail.dateText}</time>
              {detail.readTime ? (
                <span className="nav-text text-[0.58rem]">
                  {detail.readTime}
                </span>
              ) : null}
            </div>
          ) : (
            <time className="nav-text text-[0.58rem] inline-block mt-4">
              {detail.dateText}
            </time>
          )}

          <hr className="line mt-8" />

          {detail.actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {detail.actions.map((action) => {
                const external = isExternalUrl(action.href);
                return (
                  <a
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={getActionClasses(action.variant)}
                  >
                    {action.label}
                    <span aria-hidden>{"↗"}</span>
                  </a>
                );
              })}
            </div>
          ) : null}

          <p className="mt-10 text-[0.93rem] leading-[1.64rem] ink">
            {detail.lead}
          </p>

          <div className="mt-10 flex flex-col gap-10">
            {detail.sections.map((section) => {
              return (
                <section key={`${item.id}-${section.heading}`}>
                  <h2 className="text-[1.42rem] leading-[1.56rem] font-normal">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[0.93rem] leading-[1.64rem] ink">
                    {section.body}
                  </p>
                  {section.quote ? (
                    <blockquote className="mt-7 pl-5 border-l-[1px] line text-[0.86rem] leading-[1.52rem] italic muted">
                      {section.quote}
                    </blockquote>
                  ) : null}
                </section>
              );
            })}
          </div>

          {item.tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-2">
              {item.tags.map((tag) => {
                return (
                  <span
                    key={`${item.id}-tag-${tag}`}
                    className="nav-text text-[0.51rem] border-[1px] line px-2.5 py-[2px]"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          ) : null}
        </article>
      </>
    ) : (
      <h1 className="text-[1.36rem] leading-[1.6rem] font-normal">
        Item not found
      </h1>
    );

  return (
    <>
      <Link
        to="/plogs"
        className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[0.5px] touch-none"
        aria-label="Close details"
      />

      <Motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="relative ml-auto z-[100] w-full sm:w-[640px] min-h-[100vh] pointer-events-none"
      >
        <div
          ref={panelRef}
          className="w-full min-h-[100vh] surface shadow-2xl pointer-events-auto"
        >
          <div className="flex min-h-full flex-col px-3.5">
            <section className="w-full h-full px-5 py-6 sm:px-7">
              <Link
                to="/plogs"
                className="nav-text text-[0.59rem] hover-ink duration-200"
              >
                {"\u2190"} back to plogs
              </Link>

              {panelBody}
            </section>
          </div>
        </div>
      </Motion.aside>
    </>
  );
}

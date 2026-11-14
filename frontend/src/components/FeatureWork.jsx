export default function FeatureWork({ className = "scroll-trigger" }) {
  const works = [
    {
      heading: "Studenv",
      year: "2026",
      description:
        "A learning workspace combining study resources, notes, video learning, and personal knowledge management.",
      liveLink: "↗ visit Studenv",
      livelnk: "https://studenv-online.vercel.app",
    },
    {
      heading: "SetBGet",
      year: "2026",
      description:
        "A job discovery and application platform with authentication, job management, and localization.",
      liveLink: "↗ visit SetBGet",
      livelnk: "https://setbget.in",
    },
    {
      heading: "EduGuard",
      year: "2026",
      description:
        "An educational YouTube Chrome extension with distraction hiding and configurable content filtering.",
      liveLink: "↗ view extension",
      livelnk: "https://share.google/GTveDoXRb4zZ9f4GM",
    },
  ];

  return (
    <div>
      {works.map((work, index) => {
        const number = index + 1;
        const isLast = index === works.length - 1;
        return (
          <Work
            rowClassName={className}
            key={work.heading}
            number={number < 10 ? "0" + number : number}
            Heading={work.heading}
            description={work.description}
            year={work.year}
            liveLink={work.liveLink}
            githubLink={work.githubLink}
            livelnk={work.livelnk}
            githublnk={work.githublnk}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
}

function Work({
  number,
  Heading,
  description,
  year,
  liveLink,
  githubLink,
  livelnk,
  githublnk,
  isLast,
  rowClassName,
}) {
  return (
    <div
      className={`${rowClassName} flex gap-3 w-full border-b-[1px] line py-5`}
    >
      <span className="text-[.65rem] faint-text font-[Jetbrains_mono] mt-2">
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <h1 className="flex w-full justify-between items-start text-[1.25rem] font-medium">
          {Heading}
          <span className="nav-text text-[.65rem]">{year}</span>
        </h1>
        <p className="text-[.75rem] muted">{description}</p>
        <div className="mt-2 nav-text text-[.65rem] flex gap-4">
          {livelnk ? (
            <a
              href={livelnk}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-ink duration-200"
            >
              {liveLink}
            </a>
          ) : null}
          {githublnk ? (
            <a
              href={githublnk}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-ink duration-200"
            >
              {githubLink}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

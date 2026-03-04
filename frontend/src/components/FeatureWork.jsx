export default function FeatureWork({ className = "scroll-trigger" }) {
  const works = [
    {
      heading: "A bug Diary",
      year: "2026",
      description:
        "A log for your daily bugs, we all get lots of bugs, sometimes we fix them, but when the next time that bug appears we need to redo all the research for that because most of the time we can't remember the steps to fix it that's why this log will help remember the exact steps, and which bugs are not resolved which are the ones i am working on right now.",
      liveLink: "↗ live demo",
      livelnk: "https://bugdiary.vercel.app/",
      githubLink: "↗ github",
      githublnk: "https://github.com/bhaskar-f/Bug-diary",
    },
    {
      heading: "Idea Graveyard",
      year: "2024",
      description:
        "Building,incoming,on hold,gravyard stages of ideas.Don't let your idea die.",
      liveLink: "↗ live demo",
      livelnk: "https://mindstock.vercel.app/",
      githubLink: "↗ github",
      githublnk: "https://github.com/bhaskar-f/MindStock",
    },
    {
      heading: "My Portfolio Website",
      year: "2026",
      description:
        "A personal portfolio built to showcase projects, writing, and contact workflow with a clean editorial interface.",
      liveLink: "↗ live demo",
      livelnk: "https://bhaskarsarkar.vercel.app/",
      githubLink: "↗ github",
      githublnk: "https://github.com/bhaskar-f/my-portfolio",
    },
  ];

  return (
    <div>
      {works.map((work, index) => {
        let number = index + 1;
        const isLast = index === works.length - 1;
        return (
          <Work
            rowClassName={className}
            key={index}
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
        <p className="tex-[.55rem] muted">{description}</p>
        <div className="mt-2 nav-text text-[.65rem] flex gap-4">
          <a
            href={livelnk}
            target={isLast ? "_self" : "_blank"}
            rel={isLast ? undefined : "noopener noreferrer"}
            className="hover-ink duration-200"
          >
            {liveLink}
          </a>
          <a
            href={githublnk}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-ink duration-200"
          >
            {githubLink}
          </a>
        </div>
      </div>
    </div>
  );
}

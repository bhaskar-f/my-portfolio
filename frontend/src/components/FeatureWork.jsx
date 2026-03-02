import { Link } from "react-router-dom";

export default function FeatureWork() {
  const works = [
    {
      heading: "Idea Graveyard",
      year: "2024",
      description: "Building,incomeing,gravyard stages for ideas.",
      liveLink: "↗ live demo",
      livelink: "",
      githubLink: "↗ github",
      githublink: "",
    },
    {
      heading: "Second Brain: BrainDoc",
      year: "2026",
      description:
        "Docker for Your brain, not Exactly like docker, but a storage where we can store and manage our all of our secondery data, that we need but can't sometime remember.",
      liveLink: "↗ live demo",
      livelink: "",
      githubLink: "↗ github",
      githublink: "",
    },
    {
      heading: "A bug Diary",
      year: "2026",
      description:
        "A log for your daily bugs, we all get lots of bugs, sometimes we fix them, but when the next time that bug appears we need to redo all the research for that because most of the time we can't remember the steps to fix it that's why this log will help remember the exact steps, and which bugs are not resolved which are the ones i am working on right now.",
      liveLink: "↗ live demo",
      livelink: "",
      githubLink: "↗ github",
      githublink: "https://github.com/bhaskar-f/Bug-diary",
    },
  ];

  return (
    <div>
      {works.map((work, index) => {
        let number = index + 1;
        return (
          <Work
            key={index}
            number={number < 10 ? "0" + number : number}
            Heading={work.heading}
            description={work.description}
            year={work.year}
            liveLink={work.liveLink}
            githubLink={work.githubLink}
          />
        );
      })}
    </div>
  );
}

function Work({ number, Heading, description, year, liveLink, githubLink }) {
  return (
    <div className="flex gap-3 w-full border-b-[1px] line py-5">
      <span className="text-[.65rem] faint-text font-[Jetbrains_mono] mt-2">
        {number}
      </span>
      <div>
        <h1 className="flex justify-between items-start text-[1.25rem] font-medium">
          {Heading}
          <span className="nav-text text-[.65rem]">{year}</span>
        </h1>
        <p className="tex-[.55rem] muted">{description}</p>
        <div className="mt-2 nav-text text-[.65rem] flex gap-4">
          <Link to="" className="hover-ink duration-200">
            {liveLink}
          </Link>
          <Link className="hover-ink duration-200">{githubLink}</Link>
        </div>
      </div>
    </div>
  );
}

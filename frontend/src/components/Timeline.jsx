export default function Timeline() {
  const timeline = [
    {
      heading: "Side prjects",
      desc: "Trying to solve realworld problems with tech",
      year: "2026 →",
    },
    {
      heading: "Freelance projects",
      desc: "Build a Online Coaching center Website",
      year: "2025",
    },
  ];

  return (
    <div className="timeline-list">
      {timeline.map((time, index) => {
        return (
          <Time
            key={index}
            heading={time.heading}
            desc={time.desc}
            year={time.year}
          />
        );
      })}
    </div>
  );
}

function Time({ heading, desc, year }) {
  return (
    <div className="scroll-trigger timeline-item flex gap-10 py-2 border-b-[1px] line w-full last:border-b-2">
      <span className="nav-text text-[.65rem] w-[14%] sm:w-[10%] ">{year}</span>
      <div>
        <h1 className=" text-[1rem] font-normal ">{heading}</h1>
        <h4 className="text-[.88rem] muted">{desc} </h4>
      </div>
    </div>
  );
}

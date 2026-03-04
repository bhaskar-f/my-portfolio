export default function Educations({ className = "scroll-trigger" }) {
  const cirtifications = [
    {
      degree: "B.Sc. Compute Science Honours",
      field: "CoochBehar College, Coochbehar",
      year: "2021 - 2024",
    },
    {
      degree: "Full-Stack Development in MERN Stack",
      field: "",
      year: "Ongoing",
    },
    {
      degree: "DSA",
      field: "Geeks For Geeks",
      year: "Ongoing",
    },
  ];

  return (
    <div>
      {cirtifications.map((cirtification, index) => {
        return (
          <Education
            rolclass={className}
            key={index}
            degree={cirtification.degree}
            field={cirtification.field}
            year={cirtification.year}
          />
        );
      })}
    </div>
  );
}

function Education({ degree, field, year, rolclass }) {
  return (
    <div
      className={`${rolclass} flex flex-col sm:flex-row justify-between py-2 border-b-[1px] line w-full last:border-b-2`}
    >
      <div>
        <h1 className=" text-[1rem] font-normal ">{degree}</h1>
        <h4 className="text-[.88rem] muted">{field} </h4>
      </div>
      <span className="nav-text text-[.65rem]">{year}</span>
    </div>
  );
}

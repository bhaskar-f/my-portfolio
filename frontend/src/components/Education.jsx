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
       certificate: {
        text: "View Certificate",
        url: "https://drive.google.com/file/d/1_ioOzIG2wYkhgCcFLFRD1sqaXDPBhEtv/view", // <-- Replace with your certificate URL
      },
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

function Education({ degree, field, year, certificate, rolclass }) {
  return (
    <div
      className={`${rolclass} flex flex-col sm:flex-row justify-between py-2 border-b-[1px] line w-full last:border-b-2`}
    >
      <div>
        <h1 className=" text-[1rem] font-normal ">{degree}</h1>
        <h4 className="text-[.88rem] muted">{field} </h4>
      </div>
      {certificate ? (
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-text text-[.65rem] underline hover:opacity-80 transition"
        >
          {certificate.text}
        </a>
      ) : (
        <span className="nav-text text-[.65rem]">{year}</span>
      )}
    </div>
  );
}

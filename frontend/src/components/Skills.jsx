export default function Skills() {
  const skills = [
    {
      field: "Frontend",
      skills: " React, Redux Toolkit, Tailwind, Figma, HTML, CSS, JavaScript",
    },
    {
      field: "Backend & Db",
      skills: " Node.js, Express.js, MongoDB, MySQL",
    },
    {
      field: "DevOps",
      skills: " Docker, AWS, Vercel, Git",
    },
    {
      field: "tools & others",
      skills: "GitHub, REST API, System Design, GraphQL",
    },
  ];

  return (
    <div>
      {skills.map((skill, index) => {
        return <Skill key={index} fields={skill.field} skills={skill.skills} />;
      })}
    </div>
  );
}

function Skill({ fields, skills }) {
  return (
    <div className="flex items-center py-3 border-b-[1px] line w-full">
      <h1 className="uppercase nav-text text-[.65rem] w-[22%]">{fields}</h1>
      <h2 className="text-[.9rem] w-[78%]">{skills}</h2>
    </div>
  );
}

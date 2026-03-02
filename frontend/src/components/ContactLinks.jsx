import { Link } from "react-router-dom";

export default function ContactLinks() {
  const links = [
    {
      field: "email",
      handle: "emailme@bhaskar",
      handlelink: "bsarkar.off.p@gmail.com",
    },
    {
      field: "github",
      handle: "github.com/mygithub",
      handlelink: "https://github.com/bhaskar-f",
    },
    {
      field: "likedin",
      handle: "linkedin.com/mylinkedinprofile",
      handlelink: "https://www.linkedin.com/in/bhaskar-sarkar-1a1a6b31a",
    },
    {
      field: "twitter / x",
      handle: "@mytwitterprofile",
      handlelink: "https://x.com/404_username_NF",
    },
  ];

  return (
    <div>
      {links.map((link, index) => {
        return (
          <Contactlink
            key={index}
            fields={link.field}
            handle={link.handle}
            handlelink={link.handlelink}
          />
        );
      })}
    </div>
  );
}

function Contactlink({ fields, handle, handlelink }) {
  return (
    <div className="flex justify-between py-3 border-b-[1px] line w-full group cursor-pointer">
      <div className="transition-all duration-400 group-hover:ml-2">
        <h1 className="uppercase group  nav-text leading-none text-[.65rem]">
          {fields}
        </h1>
        <Link
          to={handlelink}
          className="text-[1.05rem] hover font-normal group-hover:underline"
        >
          {handle}
        </Link>
      </div>
      <span className="nav-text">↗</span>
    </div>
  );
}

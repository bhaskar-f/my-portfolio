export default function ContactLinks() {
  const links = [
    {
      label: "Email",
      text: "Send an email",
      href: "mailto:bsarkar.off.p@gmail.com",
    },
    {
      label: "GitHub",
      text: "See projects",
      href: "https://github.com/bhaskar-f",
    },
    {
      label: "LinkedIn",
      text: "Connect professionally",
      href: "https://www.linkedin.com/in/bhaskar-sarkar-1a1a6b31a",
    },
    {
      label: "X",
      text: "Follow updates",
      href: "https://x.com/404_username_NF",
    },
  ];

  return (
    <div className="contact-links-list">
      {links.map((item) => {
        const isExternal = item.href.startsWith("http");

        return (
          <a
            key={item.label}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="scroll-trigger contact-link-item group flex py-3 border-b-[1px] line w-full"
          >
            <div className="w-full transition-all duration-300 group-hover:ml-2 grid grid-cols-[6.25rem_1fr_6.25rem] sm:grid-cols-[8rem_1fr_8rem] items-center">
              <h1 className="uppercase nav-text leading-none text-[.65rem] tracking-[0.08em]">
                {item.label}
              </h1>
              <span className="block text-center text-[1.02rem] text-[var(--ink)] group-hover:underline underline-offset-3">
                {item.text}
              </span>
              <span className="nav-text justify-self-end">{"\u2197"}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

import Timeline from "./Timeline";

export default function AboutPageContent() {
  return (
    <div className="px-4">
      <div>
        <h1 className="text-[1.2rem]">
          I'm a developer who cares about the craft. Not just code that works —
          code that's readable, maintainable, and kind to whoever opens it next
          (usually me, six months later).
        </h1>
        <p className="text-[.98rem] muted mt-10">
          I started tinkering with HTML and CSS to make a fan site. That
          curiosity never stopped. Today I build products real people use(not
          yet but will) and still get a kick every time something ships. Outside
          work: reading about system design, over-engineering side projects,
          sleeping, making unnecessarily complex lifestyle with new habbits.
        </p>
      </div>
      <div className="timeline mt-12">
        <h1 className="uppercase text-[0.7rem] nav-text">timeline</h1>
        <hr className="line mt-5" />
        <Timeline />
      </div>
    </div>
  );
}

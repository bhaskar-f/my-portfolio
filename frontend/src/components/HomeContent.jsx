import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeatureWork from "./FeatureWork";
import Skills from "./Skills";
import Educations from "./Education";

export default function HomeContent() {
  return (
    <div className="w-full h-full px-5 ">
      <div className="Info mt-2">
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.43rem] -mb-2.5 font-normal main-text">
          <i>Bhaskar</i> <span>Sarkar</span>
          <Motion.span
            className="inline-block w-[2px] md:w-[3px] h-[3rem] md:h-[4.4rem] -mb-1.5 ml-[1.7px] bg-[var(--ink)]"
            animate={{ opacity: [1, 1, 0, 0] }} // Animate between 0 and 1
            transition={{
              duration: 1, // Speed of one "pulse"
              repeat: Infinity, // Loop forever
              ease: "linear", // Keeps the timing consistent
              times: [0, 0.5, 0.5, 1], // Smooth start/end for each pulse
            }}
          ></Motion.span>
        </h1>
        <span className="inline-block designation uppercase nav-text font-extralight text-[.8rem] mb-10  tracking-tight ">
          Full-Stack Developer & Designer
        </span>
        <br />
        <span className="inline-block text-[1.1rem] leading-[2.02rem] w-[90%]">
          I build things that
          <span className="font-medium"> work beautifully </span> and look like
          they were meant to exist. Three years of shipping products, writing
          systems, and caring about the details most people skip.
        </span>

        <div className="mt-5 text-[0.7rem]">
          <h4 className="nav-text tracking-wide">
            Currently
            <span className="ink ml-4.5 sm:ml-5 tracking-widest">
              Working Independently
            </span>
          </h4>
          <h4 className="nav-text tracking-wide">
            Based in
            <span className="ink ml-4.5 sm:ml-5 tracking-widest">
              CoochBehar, WB, India
            </span>
          </h4>
          <h4 className="nav-text tracking-wide ">
            Working on
            <span className="ink ml-3 sm:ml-5 tracking-wide sm:tracking-widest ">
              System Designing &{" "}
              <span className="side-project">Side Projects</span>
            </span>
          </h4>
        </div>

        <div className="flex items-baseline gap-0 flex-wrap nav-text text-[.69rem] mt-10">
          <a
            href="./resume.pdf"
            download="Bhaskar_Resume.pdf"
            className="resume-link border-b-[.05rem] line hover-ink hover:border-[color:var(--ink)] duration-200"
          >
            ↓ download résumé
          </a>
        </div>
      </div>
      <hr className="line my-10" />
      <div className="featued-works">
        <h1 className="uppercase text-[0.7rem] nav-text">Featured work</h1>
        <hr className="line mt-5" />
        <FeatureWork />
      </div>
      <hr className="line my-10" />
      <div className="skils">
        <h1 className="uppercase text-[0.7rem] nav-text">skills</h1>
        <hr className="line mt-5" />

        <Skills />
      </div>
      <hr className="line my-10" />
      <div className="education">
        <h1 className="uppercase text-[0.7rem] nav-text">
          Education & cirtifications
        </h1>
        <hr className="line mt-5" />
        <Educations />
      </div>
    </div>
  );
}

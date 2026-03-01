import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeatureWork from "./FeatureWork";
import Skills from "./Skills";
import Educations from "./Education";

export default function HomeContent() {
  return (
    <div className="w-full h-full px-5 ">
      <div className="Info mt-2">
        <h1 className="text-[4.43rem] -mb-2.5 font-normal">
          <i>Bhaskar</i> <span>Sarkar</span>
          <motion.span
            className="inline-block w-[3px] h-[4.4rem] -mb-1.5 ml-[1.7px] bg-[#111111]"
            animate={{ opacity: [1, 1, 0, 0] }} // Animate between 0 and 1
            transition={{
              duration: 1, // Speed of one "pulse"
              repeat: Infinity, // Loop forever
              ease: "linear", // Keeps the timing consistent
              times: [0, 0.5, 0.5, 1], // Smooth start/end for each pulse
            }}
          ></motion.span>
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
            <span className="text-[#222222] ml-5 tracking-widest">
              Working Independently
            </span>
          </h4>
          <h4 className="nav-text tracking-wide">
            Based in
            <span className="text-[#222222] ml-5 tracking-widest">
              CoochBehar, WB, India
            </span>
          </h4>
          <h4 className="nav-text tracking-wide ">
            Working on
            <span className="text-[#222222] ml-5 tracking-widest">
              System Designing & Side Projects
            </span>
          </h4>
        </div>

        <div className="flex items-baseline gap-0 flex-wrap nav-text text-[.69rem] mt-10">
          <a
            href="your-resume.pdf"
            download
            className="resume-link border-b-[.05rem] border-[#f0d1ce] hover:text-[#111111] hover:border-[#111111] duration-200"
          >
            ↓ download résumé
          </a>
        </div>
      </div>
      <hr className="text-[#f0d1ce] my-10" />
      <div className="featued-works">
        <h1 className="uppercase text-[0.7rem] nav-text">Featured work</h1>
        <hr className="text-[#f0d1ce] mt-5" />
        <FeatureWork />
      </div>
      <hr className="text-[#f0d1ce] my-10" />
      <div className="skils">
        <h1 className="uppercase text-[0.7rem] nav-text">skills</h1>
        <hr className="text-[#f0d1ce] mt-5" />

        <Skills />
      </div>
      <hr className="text-[#f0d1ce] my-10" />
      <div className="education">
        <h1 className="uppercase text-[0.7rem] nav-text">
          Education & cirtifications
        </h1>
        <hr className="text-[#f0d1ce] mt-5" />
        <Educations />
      </div>
    </div>
  );
}

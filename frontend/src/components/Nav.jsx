import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full h-full px-5 flex items-center justify-between nav-text ">
      <nav className="flex items-center justify-between gap-5">
        <ul className="flex items-center gap-3 text-[0.79rem] ">
          <li>
            <NavLink
              to="/"
              className="hover:text-[#111111] duration-200 cursor-pointer "
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plogs"
              className="hover:text-[#111111] duration-200 cursor-pointer"
            >
              plogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-[#111111] duration-200 cursor-pointer "
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-[#111111] duration-200 cursor-pointer"
            >
              contact
            </NavLink>
          </li>
        </ul>

        <span className="theme-wrap relative inline-block" id="themeWrap">
          <button
            className="themeTrigger inline-flex items-center gap-1  cursor-pointer text-[0.79rem] hover:text-[#111111] duration-200 cursor-pointer border-b-1 border-[#8888] hover:border-[#111111]"
            id="themeTrigger"
          >
            ▧ theme
            <span className="caret inline-block transition-[transform]">▾</span>
          </button>
          <div
            className="theme-dropdown hidden border-1 border-[#dddddd] py-[0.2rem] min-w-[130px] left-0 absolute top-8 flex flex-col"
            id="themeDropdown"
          >
            <button
              className="theme-opt hover:text-[#111111] hover:bg-[#dddddd] p-[0.5rem] flex gap-2 items-center text-[0.7rem]"
              data-theme="light"
            >
              <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#fafaf8] border-[#ddd]"></span>
              light
            </button>
            <button
              class="theme-opt hover:text-[#111111] hover:bg-[#dddddd] p-[0.5rem] flex gap-2 items-center text-[0.7rem]"
              data-theme="dark"
            >
              <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[ #141414] border-[#2a2a2a]"></span>
              dark
            </button>
            <button
              class="theme-opt hover:text-[#111111] hover:bg-[#dddddd] p-[0.5rem] flex gap-2 items-center text-[0.7rem]"
              data-theme="sepia"
            >
              <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[ #f5efe6] border-[#ddd0be]"></span>
              sepia
            </button>
            <button
              class="theme-opt hover:text-[#111111] hover:bg-[#dddddd] p-[0.5rem] flex gap-2 items-center text-[0.7rem]"
              data-theme="slate"
            >
              <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#0f1520] border-[#1e2d3d]"></span>
              slate
            </button>
            <button
              class="theme-opt hover:text-[#111111] hover:bg-[#dddddd] p-[0.5rem] flex gap-2 items-center text-[0.7rem]"
              data-theme="moss"
            >
              <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[ #f2f4f0] border-[#d4dcd0]"></span>
              moss
            </button>
          </div>
        </span>
      </nav>
      <span className="flex items-center gap-[5px] text-[0.68rem] duration-300">
        <motion.span
          animate={{ opacity: [0.2, 1] }} // Animate between 0 and 1
          transition={{
            duration: 0.9, // Speed of one "pulse"
            repeat: Infinity, // Loop forever
            repeatType: "mirror", // Smoothly reverse back to start
            ease: "easeInOut", // Smooth start/end for each pulse
          }}
          className="inline-block w-1 h-1 rounded-full bg-green-500"
        ></motion.span>
        <h1>open to work</h1>
      </span>
    </div>
  );
}

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function Topbar() {
  const [isopen, setOpen] = useState(false);

  return (
    <div className="min-h-20 surface flex items-center w-full sticky top-0 z-50 px-5">
      <div className="flex w-full justify-between items-center">
        <Nav />
        <span className="flex items-center gap-[5px] text-[0.68rem] duration-300 nav-text">
          <Motion.span
            animate={{ opacity: [0.2, 1] }} // Animate between 0 and 1
            transition={{
              duration: 0.7, // Speed of one "pulse"
              repeat: Infinity, // Loop forever
              repeatType: "mirror", // Smoothly reverse back to start
              ease: "easeInOut", // Smooth start/end for each pulse
            }}
            className="inline-block w-[5px] h-[5px] rounded-full bg-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.75)]"
          ></Motion.span>
          <h1>open to work</h1>
        </span>
        <button
          onClick={() => setOpen(!isopen)}
          className="hamburger flex flex-col gap-1 bg-transparent"
          id="hb"
        >
          <Motion.span
            animate={
              isopen
                ? { rotate: 45, y: 5 } // State when open (Cross/X)
                : { rotate: 0, y: 0 } // State when closed (Burger)
            }
            transition={{ duration: 0.3 }}
            className="inline-block w-[20px] h-[1px] ink-bg"
          ></Motion.span>
          <Motion.span
            animate={
              isopen
                ? { opacity: 0 } // State when open (Cross/X)
                : { opacity: 1 } // State when closed (Burger)
            }
            transition={{ duration: 0.3 }}
            className="inline-block w-[20px] h-[1px] ink-bg"
          ></Motion.span>
          <Motion.span
            animate={
              isopen
                ? { rotate: -45, y: -5 } // State when open (Cross/X)
                : { rotate: 0, y: 0 } // State when closed (Burger)
            }
            transition={{ duration: 0.3 }}
            className="inline-block w-[20px] h-[1px] ink-bg"
          ></Motion.span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isopen && <MobileNav onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

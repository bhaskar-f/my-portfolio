import { NavLink } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

export default function MobileNav({ onClose }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, y: -10 }}
      animate={{ height: "auto", opacity: 1, y: 0 }}
      exit={{ height: 0, opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="mobile-nav nav-text text-[0.7rem] mt-3 mb-6"
      id="mobileNav"
    >
      <NavLink
        to="/"
        data-page="home"
        className="border-b-[1px] line"
        onClick={onClose}
      >
        home
      </NavLink>
      <NavLink
        to="/plogs"
        data-page="plogs"
        className="border-b-[1px] line"
        onClick={onClose}
      >
        plogs
      </NavLink>
      <NavLink
        to="/about"
        data-page="about"
        className="border-b-[1px] line"
        onClick={onClose}
      >
        about
      </NavLink>
      <NavLink
        to="/contact"
        data-page="contact"
        className="border-b-[1px] line"
        onClick={onClose}
      >
        contact
      </NavLink>
    </motion.div>
  );
}

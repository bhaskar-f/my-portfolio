import { NavLink } from "react-router-dom";
import { easeOut, motion as Motion } from "framer-motion";

export default function MobileNav({ onClose }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
      transition={{ duration: 0.3, ease: easeOut }}
      style={{ transformOrigin: "top" }}
      className="mobile-nav nav-text text-[0.7rem]"
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
    </Motion.div>
  );
}

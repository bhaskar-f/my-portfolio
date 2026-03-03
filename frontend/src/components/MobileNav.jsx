import { NavLink } from "react-router-dom";
import { easeOut, motion as Motion } from "framer-motion";

export default function MobileNav({ onSelect }) {
  function handleNavClick(event, targetPath) {
    event.preventDefault();
    onSelect(targetPath);
  }

  function getMobileLinkClass({ isActive }) {
    return `border-b-[1px] ${isActive ? "mobile-nav-link-active" : "line"}`;
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
      transition={{ duration: 0.3, ease: easeOut }}
      style={{ transformOrigin: "top" }}
      className="mobile-nav nav-text text-[0.721rem] gap-4"
      id="mobileNav"
    >
      <NavLink
        end
        to="/"
        data-page="home"
        className={getMobileLinkClass}
        onClick={(event) => handleNavClick(event, "/")}
      >
        home
      </NavLink>
      <NavLink
        to="/plogs"
        data-page="plogs"
        className={getMobileLinkClass}
        onClick={(event) => handleNavClick(event, "/plogs")}
      >
        plogs
      </NavLink>
      <NavLink
        to="/about"
        data-page="about"
        className={getMobileLinkClass}
        onClick={(event) => handleNavClick(event, "/about")}
      >
        about
      </NavLink>
      <NavLink
        to="/contact"
        data-page="contact"
        className={getMobileLinkClass}
        onClick={(event) => handleNavClick(event, "/contact")}
      >
        contact
      </NavLink>
    </Motion.div>
  );
}

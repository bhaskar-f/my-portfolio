import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const THEME_KEY = "portfolio-theme";
const SUPPORTED_THEMES = new Set(["light", "dark", "sepia", "slate", "moss"]);

function resolveTheme(theme) {
  return SUPPORTED_THEMES.has(theme) ? theme : "light";
}

function applyTheme(theme) {
  const resolvedTheme = resolveTheme(theme);
  const root = document.documentElement;
  if (resolvedTheme === "light") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", resolvedTheme);
  }
  localStorage.setItem(THEME_KEY, resolvedTheme);
  return resolvedTheme;
}

export default function Nav() {
  const [currentTheme, setCurrentTheme] = useState(() =>
    resolveTheme(localStorage.getItem(THEME_KEY) || "light"),
  );
  const [isOpen, setOpen] = useState(false);
  const themeWrapRef = useRef(null);

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!themeWrapRef.current) return;
      if (!themeWrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleThemeSelect(theme) {
    const resolvedTheme = applyTheme(theme);
    setCurrentTheme(resolvedTheme);
    setOpen(false);
  }

  function getThemeOptionClass(theme) {
    return `theme-opt cursor-pointer p-[0.5rem] px-[0.8rem] flex gap-2 items-center text-[0.7rem] ${
      currentTheme === theme ? "is-active" : ""
    }`;
  }

  return (
    <div className="w-[80%] h-full flex items-center justify-between nav-text nav">
      <nav className="flex items-center justify-between gap-5">
        <ul className="flex items-center gap-3 text-[0.79rem] navigation-link">
          <li>
            <NavLink to="/" className="hover-ink duration-200 cursor-pointer">
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plogs"
              className="hover-ink duration-200 cursor-pointer"
            >
              plogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover-ink duration-200 cursor-pointer"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover-ink duration-200 cursor-pointer"
            >
              contact
            </NavLink>
          </li>
        </ul>

        <span
          ref={themeWrapRef}
          className="theme-wrap relative inline-block"
          id="themeWrap"
        >
          <button
            onClick={() => setOpen(!isOpen)}
            className="themeTrigger inline-flex items-center gap-1 text-[0.79rem] cursor-pointer hover-ink  duration-200 border-b-1 line hover-line-ink"
            id="themeTrigger"
          >
            ▧ theme
            <span className="caret inline-block transition-[transform]">▾</span>
          </button>
          {isOpen && (
            <div
              className="theme-dropdown surface border-1 line py-[0.2rem] min-w-[140px] left-0 absolute top-8 flex flex-col shadow-lg"
              id="themeDropdown"
            >
              <button
                onClick={() => handleThemeSelect("light")}
                className={getThemeOptionClass("light")}
                data-theme="light"
              >
                <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#ecebe5] border-[#cbc8c0]"></span>
                light
              </button>
              <button
                onClick={() => handleThemeSelect("dark")}
                className={getThemeOptionClass("dark")}
                data-theme="dark"
              >
                <span className="theme-swatch w-[10px] h-[10px] bg-[#141414] rounded-full border-[#2a2a2a]"></span>
                dark
              </button>
              <button
                onClick={() => handleThemeSelect("sepia")}
                className={getThemeOptionClass("sepia")}
                data-theme="sepia"
              >
                <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#f5efe6] border-[#ddd0be]"></span>
                sepia
              </button>
              <button
                onClick={() => handleThemeSelect("slate")}
                className={getThemeOptionClass("slate")}
                data-theme="slate"
              >
                <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#0f1520] border-[#1e2d3d]"></span>
                slate
              </button>
              <button
                onClick={() => handleThemeSelect("moss")}
                className={getThemeOptionClass("moss")}
                data-theme="moss"
              >
                <span className="theme-swatch w-[10px] h-[10px] rounded-full bg-[#f2f4f0] border-[#d4dcd0]"></span>
                moss
              </button>
            </div>
          )}
        </span>
      </nav>
    </div>
  );
}

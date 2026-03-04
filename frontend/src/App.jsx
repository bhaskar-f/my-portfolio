import { useEffect, useRef } from "react";
<<<<<<< HEAD
import { Navigate, Route, Routes, useLocation, useMatch } from "react-router-dom";
=======
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
} from "react-router-dom";
>>>>>>> 7d76f43 (view all projects added)
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Plogs from "./components/Plogs";
import PlogDetail from "./components/PlogDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import { Analytics } from '@vercel/analytics/react';


export default function App() {
  const isPlogDetailRoute = Boolean(useMatch("/plogs/:plogId"));
  const location = useLocation();
  const locomotiveRef = useRef(null);

  useEffect(() => {
    locomotiveRef.current = new LocomotiveScroll({
      lenisOptions: {
        allowNestedScroll: true,
        lerp: 0.15,
      },
    });

    return () => {
      locomotiveRef.current?.destroy();
      locomotiveRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      locomotiveRef.current?.resize();
    };

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (typeof locomotiveRef.current?.scrollTo === "function") {
        locomotiveRef.current.scrollTo(0, {
          duration: 0,
          disableLerp: true,
          immediate: true,
        });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }

      locomotiveRef.current?.resize();
    });
  }, [location.pathname]);

  return (
    <div
      className={`min-h-[100vh] w-full ${
        isPlogDetailRoute ? "" : "sm:max-w-[640px]"
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
         <Route
    path="/plogs/projects"
    element={<Navigate to="/plogs?tab=project" replace />}
  />
        <Route path="/plogs" element={<Plogs />}>
          <Route path=":plogId" element={<PlogDetail />} />
        </Route>
        <Route
          path="/plogs/projects"
          element={<Navigate to="/plogs?tab=project" replace />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics/>
    </div>
  );
}

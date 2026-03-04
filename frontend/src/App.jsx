import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Plogs from "./components/Plogs";
import PlogDetail from "./components/PlogDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const isPlogDetailRoute = Boolean(useMatch("/plogs/:plogId"));
  const location = useLocation();
  const pathname = location.pathname;
  const isPlogsRoute = pathname.startsWith("/plogs");
  const isAboutOrContactRoute = pathname === "/about" || pathname === "/contact";
  const appRootRef = useRef(null);
  const locomotiveRef = useRef(null);

  useGSAP(
    () => {
      if (isPlogsRoute) {
        const plogTabs = gsap.utils.toArray(".plogs-tab");
        const scrollItems = gsap.utils.toArray(".scroll-trigger");
        const plogsTabsHr = gsap.utils.toArray(".plogs-tabs-hr");
        let hasInitializedScroll = false;

        if (scrollItems.length > 0) {
          gsap.set(scrollItems, { autoAlpha: 0 });
        }
        if (plogTabs.length > 0) {
          gsap.set(plogTabs, { autoAlpha: 0 });
        }
        if (plogsTabsHr.length > 0) {
          gsap.set(plogsTabsHr, {
            scaleX: 0,
            transformOrigin: "left center",
            opacity: 1,
          });
        }

        const initializePlogsScroll = () => {
          if (hasInitializedScroll) return;
          hasInitializedScroll = true;

          if (plogTabs.length > 0) {
            gsap.fromTo(
              plogTabs,
              { y: 14, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.32,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: ".plogs-tabs",
                  start: "top 98%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          }
          if (plogsTabsHr.length > 0) {
            gsap.to(plogsTabsHr, {
              scaleX: 1,
              duration: 0.45,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".plogs-tabs",
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            });
          }

          scrollItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const isNearViewportFold = itemTop <= window.innerHeight + 120;

            gsap.fromTo(
              item,
              {
                y: isNearViewportFold ? 28 : 50,
                autoAlpha: isNearViewportFold ? 0.22 : 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 100%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });

          ScrollTrigger.refresh();
        };

        const plogsIntroTl = gsap.timeline({
          onComplete: initializePlogsScroll,
        });

        plogsIntroTl
          .from(".main-text", {
            y: 100,
            opacity: 0,
            duration: 0.8,
          })
          .from(".para", {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });

        if (plogsIntroTl.duration() === 0) {
          initializePlogsScroll();
        }
        return;
      } else if (isAboutOrContactRoute) {
        const scrollItems = gsap.utils.toArray(".scroll-trigger");
        let hasInitializedScroll = false;

        if (scrollItems.length > 0) {
          gsap.set(scrollItems, { autoAlpha: 0 });
        }

        const initializeSectionScroll = () => {
          if (hasInitializedScroll) return;
          hasInitializedScroll = true;

          scrollItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const isNearViewportFold = itemTop <= window.innerHeight + 120;

            gsap.fromTo(
              item,
              {
                y: isNearViewportFold ? 28 : 50,
                autoAlpha: isNearViewportFold ? 0.22 : 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 100%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });

          ScrollTrigger.refresh();
        };

        const sectionIntroTl = gsap.timeline({
          onComplete: initializeSectionScroll,
        });

        sectionIntroTl
          .from(".main-text", {
            y: 100,
            opacity: 0,
            duration: 0.8,
          })
          .from(".para", {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });

        if (sectionIntroTl.duration() === 0) {
          initializeSectionScroll();
        }
        return;
      } else {
        const tl = gsap.timeline();

        tl.from(".main-text", {
          y: 200,
          opacity: 0,
          duration: 0.8,
        })
          .from(".designation", {
            y: 100,
            opacity: 0,
            duration: 0.5,
          })
          .from(".para", {
            y: 50,
            opacity: 0,
            duration: 0.5,
          })
          .from(".details1", {
            y: 25,
            opacity: 0,
            duration: 0.2,
          })
          .from(".details2", {
            y: 25,
            opacity: 0,
            duration: 0.2,
          })
          .from(".details3", {
            y: 25,
            opacity: 0,
            duration: 0.2,
          })
          .from(".dresume", {
            y: 50,
            opacity: 0,
            duration: 0.3,
          })
          .from(".hr1", {
            y: 50,
            opacity: 0,
            duration: 0.3,
          })
          .from(".featuretext", {
            y: 50,
            opacity: 0,
            duration: 0.3,
          })
          .from(".hr2", {
            y: 50,
            opacity: 0,
            duration: 0.3,
          });

        const plogTabs = gsap.utils.toArray(".plogs-tab");
        const scrollItems = gsap.utils.toArray(".scroll-trigger");

        if (plogTabs.length > 0) {
          gsap.from(plogTabs, {
            y: 14,
            opacity: 0,
            duration: 0.32,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".plogs-tabs",
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          });
        }

        scrollItems.forEach((item) => {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          });
        });

        ScrollTrigger.refresh();
      }
    },
    {
      scope: appRootRef,
      dependencies: [location.pathname],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
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
      ref={appRootRef}
      className={`min-h-[100vh] w-full ${
        isPlogDetailRoute ? "" : "sm:max-w-[640px]"
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
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
      <Analytics />
    </div>
  );
}

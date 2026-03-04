import { Outlet, useMatch } from "react-router-dom";
import Footer from "./Footer";
import PlogsContent from "./PlogsContent";
import Topbar from "./Topbar";

export default function Plogs() {
  const isDetailOpen = Boolean(useMatch("/plogs/:plogId"));

  return (
    <div className="relative w-full min-h-[100vh]">
      <div
        className={
          isDetailOpen
            ? "fixed top-0 left-1/2 -translate-x-1/2 w-full sm:max-w-[640px] h-full overflow-hidden pointer-events-none flex flex-col"
            : "w-full h-full flex flex-col"
        }
        aria-hidden={isDetailOpen ? "true" : undefined}
      >
        <Topbar />
        <PlogsContent />
        <Footer />
      </div>
      {!isDetailOpen ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 mx-auto h-20 w-full sm:max-w-[640px] z-30 bg-gradient-to-b from-transparent to-[var(--bg)] backdrop-blur-[1px]"
        />
      ) : null}
      {isDetailOpen ? <Outlet /> : null}
    </div>
  );
}

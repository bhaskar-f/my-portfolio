import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./components/Home";
import Plogs from "./components/Plogs";
import PlogDetail from "./components/PlogDetail";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const isPlogDetailRoute = Boolean(useMatch("/plogs/:plogId"));

  return (
    <div
      className={`min-h-[100vh] w-full ${
        isPlogDetailRoute ? "" : "sm:max-w-[640px]"
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plogs" element={<Plogs />}>
          <Route path=":plogId" element={<PlogDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

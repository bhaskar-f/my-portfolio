import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Plogs from "./components/Plogs";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-[100vh] w-full max-w-[640px] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plogs" element={<Plogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

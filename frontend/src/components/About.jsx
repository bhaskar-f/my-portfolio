import AboutPageContent from "./AboutPageContent";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col">
      <Topbar />
      <AboutPageContent />
      <Footer />
    </div>
  );
}

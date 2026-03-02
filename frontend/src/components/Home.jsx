import Footer from "./Footer";
import HomeContent from "./HomeContent";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Topbar />
      <HomeContent />
      <Footer />
    </div>
  );
}

import Footer from "./Footer";
import PlogsContent from "./PlogsContent";
import Topbar from "./Topbar";

export default function Plogs() {
  return (
    <div className="w-full h-full flex flex-col px-3.5">
      <Topbar />
      <PlogsContent />
      <Footer />
    </div>
  );
}

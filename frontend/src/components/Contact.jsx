import ContactContent from "./ContactContent";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col">
      <Topbar />
      <ContactContent />
      <Footer />
    </div>
  );
}

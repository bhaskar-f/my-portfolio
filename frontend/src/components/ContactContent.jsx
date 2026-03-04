import { useState } from "react";
import ContactLinks from "./ContactLinks";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "")
  .trim()
  .replace(/\/+$/, "");
const CONTACT_ENDPOINT = API_BASE_URL
  ? `${API_BASE_URL}/api/contact`
  : "/api/contact";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // One function to handle all input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Your state: {name, email, message}
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setStatusMessage("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Failed to send:", err);
      setStatusMessage("Could not send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative w-full h-full px-5">
      <div className="info mt-3">
        <h1 className="text-[3.6rem] leading-[3.6rem] font-normal">
          Let's
          <br />
          <span>
            <i>talk.</i>
          </span>
        </h1>
        <span className="muted text-[0.9rem] inline-block mt-5">
          Project, collab, or just saying hi - my inbox is open.
        </span>
      </div>

      <hr className="line mt-10" />

      <div className="surface py-1">
        <ContactLinks />
      </div>

      <div className="section-head nav-text text-[.65rem] uppercase mt-10">
        Or send a message
      </div>

      <form onSubmit={handleEmail}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Portfolio contact form" />

        <div className="field flex flex-col mt-5">
          <label className="nav-text text-[.65rem] uppercase">Name</label>
          <input
            type="text"
            name="name" // Matches the key in formData
            value={formData.name}
            onChange={handleChange}
            required
            className="text-[.95rem] mt-1 py-1 form-line duration-300"
            placeholder="John Doe"
          />
        </div>

        <div className="field flex flex-col mt-3">
          <label className="nav-text text-[.65rem] uppercase">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-[.95rem] mt-1 py-1 form-line duration-300"
            placeholder="john@example.com"
          />
        </div>

        <div className="field flex flex-col mt-3 mb-7">
          <label className="nav-text text-[.65rem]  uppercase">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="text-[.95rem] mt-1 py-1 h-20 resize-none overflow-y-auto form-line duration-300"
            placeholder="I have a project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="send-btn bg-[var(--ink)] py-2.5 text-[var(--bg)] px-6.5 font-jetbrains hover:opacity-90 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed uppercase text-[0.67rem]"
        >
          {isSending ? "Sending your message..." : "Send →"}
        </button>
        {statusMessage && (
          <p className="mt-3 text-[0.75rem] muted font-jetbrains">
            {statusMessage}
          </p>
        )}
      </form>

      <hr className="line mt-12 mb-2" />
    </div>
  );
}

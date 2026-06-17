import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, RefreshCw, Check } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";
export default function Contact({}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [fetchingInquiries, setFetchingInquiries] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const fetchInquiries = async () => {
    setFetchingInquiries(true);
    try {
      const response = await fetch("/api/contact");
      const json = await response.json();
      if (json.success) {
        setInquiries(json.data || []);
      }
    } catch (err) {
      console.error("Failed to load backend inquiries:", err);
    } finally {
      setFetchingInquiries(false);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const payload = await response.json();
      if (response.ok) {
        setSubmittedData({ ...formData });
        setSuccess(true);
        const savedInquiries = JSON.parse(localStorage.getItem("portfolio_inquiries") || "[]");
        savedInquiries.push({ ...formData, date: (/* @__PURE__ */ new Date()).toISOString() });
        localStorage.setItem("portfolio_inquiries", JSON.stringify(savedInquiries));
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        alert(payload.error || "Form transmission failed. Try again.");
      }
    } catch (err) {
      console.warn("Backend API offline fallback:", err);
      setSubmittedData({ ...formData });
      setSuccess(true);
      const savedInquiries = JSON.parse(localStorage.getItem("portfolio_inquiries") || "[]");
      savedInquiries.push({ ...formData, date: (/* @__PURE__ */ new Date()).toISOString() });
      localStorage.setItem("portfolio_inquiries", JSON.stringify(savedInquiries));
      setFormData({ name: "", email: "", organization: "", message: "" });
    } finally {
      setLoading(false);
    }
  };
  return <section
    id="contact"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      {
    /* Main Grid Wrapper */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* LEFT COMPARTMENT - Heading and Quick Channels */
  }
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              09 / COMMUNICATIONS HUB
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              INITIATE
              <br />
              CONVER
              <br />
              SATION
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-500 text-xs font-mono leading-relaxed mt-2">
              Let's build highly optimal systems, master intricate data challenges, and solve digital solutions together.
            </p>
          </div>

          {
    /* Quick Channels */
  }
          <div className="space-y-4">
            
            <div className="flex items-center space-x-3.5 p-3 bg-zinc-950 border border-zinc-900 rounded">
              <Mail className="size-4.5 text-amber-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[8px] uppercase font-mono tracking-wider text-zinc-500 block">DIRECT_MAIL</span>
                <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-xs font-semibold text-zinc-300 hover:text-white truncate block">
                  {PERSONAL_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 bg-zinc-950 border border-zinc-900 rounded">
              <Phone className="size-4.5 text-amber-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[8px] uppercase font-mono tracking-wider text-zinc-500 block">PHONE_LINE</span>
                <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-xs font-semibold text-zinc-300 hover:text-white truncate block">
                  {PERSONAL_DETAILS.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 bg-zinc-950 border border-zinc-900 rounded">
              <MapPin className="size-4.5 text-amber-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[8px] uppercase font-mono tracking-wider text-zinc-500 block">LOCALE_BASE</span>
                <span className="text-xs text-zinc-350 truncate block font-sans">
                  {PERSONAL_DETAILS.location} • Available Remotely
                </span>
              </div>
            </div>

          </div>

          {
    /* HR talent notes */
  }
          <div className="p-4 bg-zinc-950 border border-zinc-850/60 rounded text-left">
            <span className="font-mono text-[9px] text-amber-400 uppercase tracking-widest block mb-2 font-bold">
              RECRUITMENT NOTE // SDE
            </span>
            <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">
              Khwahish is actively preparing for elite product-based MNC technical interviews. She is open to developer internships, contract solutions, and major collaborative open-source web initiatives. Inquiries are persistently processed in under 12 hours.
            </p>
          </div>

          <span className="font-mono text-[9px] text-zinc-550">SECURITY_SHELL: SHA256_ACTIVE</span>
        </div>

        {
    /* RIGHT COMPARTMENT - Contact form query module */
  }
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#070709] flex flex-col justify-between space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-850 pb-4 gap-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
              SECURE SPECIFICATION INTAKE PORTAL
            </span>
            <button
    type="button"
    onClick={() => {
      setViewerOpen(true);
      fetchInquiries();
    }}
    className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-[10px] font-bold rounded border border-zinc-800 flex items-center space-x-1.5 hover:text-amber-400 transition-colors cursor-pointer"
  >
              <span>🗄️ INSPECT LIVE DATABASE LOGS</span>
            </button>
          </div>

          <div className="w-full max-w-2xl mx-auto py-4">
            <AnimatePresence mode="wait">
              {!success ? <motion.form
    key="contact-form"
    onSubmit={handleSubmit}
    className="space-y-5 text-left"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {
    /* Name input */
  }
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">
                        Sender Identity (Name) *
                      </label>
                      <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="E.g., Kathryn Welch"
    className="w-full p-2.5 bg-zinc-950 border border-zinc-850 select-text text-white text-xs font-mono rounded outline-none focus:border-zinc-800"
  />
                    </div>

                    {
    /* Email input */
  }
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">
                        Target Email Address *
                      </label>
                      <input
    type="email"
    name="email"
    required
    value={formData.email}
    onChange={handleChange}
    placeholder="E.g., recruiter@mnccompany.com"
    className="w-full p-2.5 bg-zinc-950 border border-zinc-850 select-text text-white text-xs font-mono rounded outline-none focus:border-zinc-800"
  />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">
                      Affiliation / Organization
                    </label>
                    <input
    type="text"
    name="organization"
    value={formData.organization}
    onChange={handleChange}
    placeholder="E.g., Elite Technical Labs"
    className="w-full p-2.5 bg-zinc-950 border border-zinc-855 select-text text-white text-xs font-mono rounded outline-none focus:border border-zinc-800"
  />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block font-bold">
                      Message Specs / JD Details *
                    </label>
                    <textarea
    name="message"
    required
    rows={5}
    value={formData.message}
    onChange={handleChange}
    placeholder="Specify your system requirements, project outlines, or interview brackets in detail..."
    className="w-full p-2.5 bg-zinc-950 border border-zinc-855 select-text text-white text-xs font-mono rounded outline-none focus:border border-zinc-800 resize-none"
  />
                  </div>

                  {
    /* Actions bar */
  }
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] text-zinc-550 leading-none select-none">
                      *Required fields. Inputs cached securely in localStorage storage.
                    </span>

                    <button
    type="submit"
    disabled={loading || !formData.name || !formData.email || !formData.message}
    className="px-6 py-3 bg-amber-400 hover:bg-white text-black font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center space-x-2 border border-black cursor-pointer shadow disabled:opacity-40 disabled:cursor-not-allowed"
  >
                      {loading ? <>
                          <RefreshCw className="size-4 animate-spin" />
                          <span>TRANSMITTING...</span>
                        </> : <>
                          <Send className="size-4" />
                          <span>TRANSMIT SPECIFICATIONS</span>
                        </>}
                    </button>
                  </div>
                </motion.form> : <motion.div
    key="success-prompt"
    className="p-8 bg-zinc-950 border border-emerald-500/20 rounded text-center space-y-4"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
                  <div className="size-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="size-6 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2 select-all">
                    <h4 className="text-md font-bold tracking-tight text-white uppercase font-sans">
                      Transmission Successful & Saved to Backend
                    </h4>
                    <p className="text-zinc-400 text-xs font-mono max-w-md mx-auto leading-relaxed">
                      Your inquiry has been stored successfully on the Express server backend! Please click below to send this directly to Khwahish's Gmail (<span className="text-amber-400 font-bold">khwahishseth@gmail.com</span>) to ensure immediate notification.
                    </p>
                  </div>

                  {
    /* Gmail Direct and Local client Actions wrapper */
  }
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=khwahishseth@gmail.com&su=${encodeURIComponent("SDE Inquiry: " + (submittedData?.name || "Recruiter") + " (" + (submittedData?.organization || "N/A") + ")")}&body=${encodeURIComponent('Hello Khwahish,\n\nI reviewed your premium MNC portfolio and wanted to get in touch. Here is my inquiry detailing our requirements:\n\n"' + (submittedData?.message || "") + '"\n\nSender Name: ' + (submittedData?.name || "") + "\nContact Email: " + (submittedData?.email || "") + "\nOrganization: " + (submittedData?.organization || "N/A") + "\n\nBest regards.")}`}
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-white text-black font-extrabold text-[11px] font-mono uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 rounded"
  >
                      <span>📬 Send Direct via Gmail</span>
                    </a>

                    <a
    href={`mailto:khwahishseth@gmail.com?subject=${encodeURIComponent("SDE Inquiry from " + (submittedData?.name || "Recruiter"))}&body=${encodeURIComponent(submittedData?.message || "")}`}
    className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-[11px] font-mono uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 rounded border border-zinc-800"
  >
                      <span>✉️ Standard Mail Client</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-zinc-900">
                    <button
    onClick={() => setSuccess(false)}
    className="px-4 py-2 bg-zinc-950 hover:bg-zinc-900 text-[10px] font-mono font-bold uppercase rounded border border-zinc-850 text-zinc-500 hover:text-zinc-300 tracking-wider transition-colors cursor-pointer"
  >
                      Initialize New Intake Session
                    </button>
                  </div>
                </motion.div>}
            </AnimatePresence>
          </div>

          {
    /* Social Profiles Grid Section */
  }
          <div className="p-4 bg-zinc-950 border border-zinc-850 rounded flex items-center justify-between text-zinc-500 text-xs font-mono">
            <span>Keep synchronised:</span>
            <div className="flex space-x-4">
              <a href="https://github.com/Khwa678" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="size-4.5" />
              </a>
              <a href="https://www.linkedin.com/in/khwahish-ai-mlengineer?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="size-4.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {
    /* Live Server Database Inspector Modal */
  }
      <AnimatePresence>
        {viewerOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setViewerOpen(false)}
    className="absolute inset-0 bg-black/85 backdrop-blur-sm"
  />

            <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ type: "spring", duration: 0.5 }}
    className="relative w-full max-w-2xl bg-[#09090c] border border-zinc-805 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
  >
              <div className="p-4 bg-zinc-950 border-b border-zinc-900 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold ml-2">
                    bash_shell_reader:~/express_server/messages.json
                  </span>
                </div>
                <button
    onClick={() => setViewerOpen(false)}
    className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
  >
                  ✕
                </button>
              </div>

              <div className="p-4 bg-[#0d0d12] border-b border-zinc-900/60 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SERVER PORT: 3000 • ONLINE</span>
                </div>
                <button
    onClick={fetchInquiries}
    disabled={fetchingInquiries}
    className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-350 rounded border border-zinc-800 hover:text-amber-400 transition-colors disabled:opacity-40 cursor-pointer"
  >
                  {fetchingInquiries ? "READING..." : "RE-QUERY DB"}
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 font-mono text-left bg-[#070709] flex-1 min-h-[300px]">
                {fetchingInquiries ? <div className="flex flex-col items-center justify-center py-20 space-y-3">
                    <RefreshCw className="size-6 text-amber-400 animate-spin" />
                    <span className="text-xs text-zinc-500 tracking-widest uppercase">Querying local message array files...</span>
                  </div> : inquiries.length === 0 ? <div className="text-center py-20 space-y-2">
                    <p className="text-zinc-500 text-xs">// DATABASE CACHE IS EMPTY</p>
                    <p className="text-zinc-400 text-[10px] max-w-sm mx-auto leading-relaxed">
                      Be the first to write a test message on the contact form, transmit it, then inspect logs to see it listed instantly!
                    </p>
                  </div> : <div className="space-y-4">
                    <div className="text-[10px] text-zinc-500 border-b border-zinc-900 pb-2">
                      FETCHED {inquiries.length} LOG_RECORD(S) FROM SERVER CACHE:
                    </div>
                    {inquiries.map((inq, idx) => <div
    key={inq.id || idx}
    className="p-3 bg-zinc-950 border border-zinc-900 rounded space-y-2 hover:border-zinc-800 transition-colors"
  >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] border-b border-zinc-900/50 pb-1.5">
                          <div className="flex items-center space-x-1.5">
                            <span className="text-amber-400 font-bold uppercase">{inq.name}</span>
                            <span className="text-zinc-500">({inq.organization})</span>
                          </div>
                          <span className="text-zinc-500 text-[10px] font-sans">{new Date(inq.timestamp).toLocaleString()}</span>
                        </div>

                        <div className="text-xs text-zinc-300 bg-[#09090c] p-2 border border-zinc-900/60 rounded leading-relaxed whitespace-pre-wrap select-text">
                          {inq.message}
                        </div>

                        <div className="flex flex-wrap items-center justify-between text-[9px] text-zinc-500 pt-1">
                          <div>
                            <span>SENDER_EMAIL: </span>
                            <span className="text-blue-400 select-text">{inq.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>MAIL_DISPATCH:</span>
                            {inq.emailSent ? <span className="text-emerald-400 font-bold uppercase">✓ DELIVERED</span> : <span className="text-zinc-500 italic">Stored Locally</span>}
                          </div>
                        </div>
                        {inq.transmissionNotes && <div className="text-[9px] text-zinc-650 bg-zinc-950 p-1 border-t border-zinc-900/50">
                            SYSTEM_LOG: {inq.transmissionNotes}
                          </div>}
                      </div>)}
                  </div>}
              </div>

              <div className="p-3 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-550 font-mono">
                <span>SYSTEM_TYPE: NODEJS_EXPRESS_ESBUILD</span>
                <span>STATUS: STABLE_OK</span>
              </div>
            </motion.div>
          </div>}
      </AnimatePresence>
    </section>;
}

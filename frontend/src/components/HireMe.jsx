import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Smile, Laptop, Zap, Star, AlertCircle, ArrowRight, Clock } from "lucide-react";
export default function HireMe({ darkMode }) {
  const [activeTier, setActiveTier] = useState("mern");
  const [bookingForm, setBookingForm] = useState({
    clientName: "",
    clientEmail: "",
    company: "",
    serviceType: "MERN Full-Stack Dev",
    targetDate: "",
    specification: ""
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const tiers = [
    {
      id: "cpp-dsa",
      name: "Algorithmic Masterclass",
      tag: "Competitive prep",
      desc: "Comprehensive 1-on-1 tutoring sessions focusing on data structures, math, algorithms, and CodeChef/LeetCode contest techniques to pass top-tier MNC screenings.",
      price: "$45",
      duration: "per hour",
      features: [
        "Interactive C++ compiler walkthroughs",
        "Targeted sliding window & DP mapping homework",
        "Mock interviews with technical feedback",
        "Contest optimization template sets"
      ],
      recommended: false
    },
    {
      id: "mern",
      name: "MERN SaaS Architectural MVP",
      tag: "Production Delivery",
      desc: "Full-scale layout, controller layering, database modeling, and fast secure deployable application building optimized for performance and container deployment.",
      price: "$750",
      duration: "per sprint / feature set",
      features: [
        "Clean layered controller structure setup",
        "Secure local and production database integration",
        "Custom auth, middleware templates & routes",
        "Vite + Tailwind responsive frontend dashboards"
      ],
      recommended: true
    },
    {
      id: "perf",
      name: "C++ / Node Code Repair",
      tag: "System optimization",
      desc: "Granular profile debugging, memory leak fixes, C++ Fast I/O, algorithmic time-complexity improvements, and server benchmark audits.",
      price: "$80",
      duration: "per audit",
      features: [
        "Complete constant-factor execution analysis",
        "Asynchronous execution structure overhauls",
        "Valgrind memory locality inspect reports",
        "Guaranteed response time threshold pass"
      ],
      recommended: false
    }
  ];
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!bookingForm.clientName || !bookingForm.clientEmail || !bookingForm.specification) {
      alert("Please complete the required details.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: bookingForm.clientName,
        email: bookingForm.clientEmail,
        organization: bookingForm.company || "Direct Engagement",
        message: `[HIRE_ME BOOKING INQUIRY]
Selected Service Type: ${bookingForm.serviceType}
Target Commencement Date: ${bookingForm.targetDate || "Immediate"}

SPECIFICATIONS:
${bookingForm.specification}`
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setBookingForm({
          clientName: "",
          clientEmail: "",
          company: "",
          serviceType: "MERN Full-Stack Dev",
          targetDate: "",
          specification: ""
        });
      }
    } catch (err) {
      console.error("Booking api transport failure:", err);
    } finally {
      setLoading(false);
    }
  };
  return <section id="hire-me" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {
    /* Dynamic SDE Stats Header */
  }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-zinc-850 bg-[#070709] p-5 rounded-xl flex items-center space-x-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-400/5 rounded-full blur-lg" />
          <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Zap className="size-5" />
          </div>
          <div className="text-left">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">SDE Availability</div>
            <div className="font-bold text-sm text-emerald-400 mt-0.5">🟢 Active & Accepting Projects</div>
          </div>
        </div>

        <div className="border border-zinc-850 bg-[#070709] p-5 rounded-xl flex items-center space-x-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400/5 rounded-full blur-lg" />
          <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
            <Laptop className="size-5" />
          </div>
          <div className="text-left">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">MNC Standards</div>
            <div className="font-bold text-sm text-white mt-0.5">3-Star CodeChef | 1750+ CP</div>
          </div>
        </div>

        <div className="border border-zinc-850 bg-[#070709] p-5 rounded-xl flex items-center space-x-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-8 h-8 bg-purple-400/5 rounded-full blur-lg" />
          <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
            <Clock className="size-5" />
          </div>
          <div className="text-left">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Fast Turnaround</div>
            <div className="font-bold text-sm text-zinc-300 mt-0.5">SLA: &lt; 48hr Response</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        
        {
    /* SERVICES AND PRICING TIERS */
  }
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2 mb-6">
            <div className="flex items-center space-x-1.5">
              <Star className="size-4 text-amber-400 fill-amber-400" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-amber-400">
                PROVEN TECH SERVICES LIST
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
              SDE Engineering Workspaces
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Below are pre-structured consulting modules. If you require custom SDE integrations or legacy C++ migration, please use the intake form on the right.
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((tier) => <div
    key={tier.id}
    onClick={() => {
      setActiveTier(tier.id);
      setBookingForm((prev) => ({ ...prev, serviceType: tier.name }));
    }}
    className={`border p-6 rounded-xl cursor-pointer transition-all relative overflow-hidden select-none ${activeTier === tier.id ? "bg-cyan-500/5 border-cyan-400 shadow-md shadow-cyan-500/5" : darkMode ? "bg-[#070709] border-zinc-855 hover:border-zinc-700" : "bg-white border-slate-200 hover:border-slate-400 shadow-sm"}`}
  >
                {tier.recommended && <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-mono text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md shadow-amber-400/15">
                    RECOMMENDED SERVICE
                  </span>}

                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase tracking-widest">
                      // {tier.tag}
                    </span>
                    <h3 className={`text-lg font-bold tracking-tight mt-0.5 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-xl font-extrabold text-white">{tier.price}</div>
                    <div className="text-[9px] text-zinc-500 lowercase font-mono">{tier.duration}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {tier.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-zinc-900/40">
                  {tier.features.map((feat, fidx) => <div key={fidx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <Check className="size-3 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>

        {
    /* INTERACTIVE BOOKING PORTAL */
  }
        <div className="lg:col-span-5">
          <div className="border border-zinc-850 bg-[#070709] rounded-xl overflow-hidden shadow-2xl p-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl" />
            
            <div className="border-b border-zinc-850 pb-4 mb-6">
              <span className="font-mono text-[10px] tracking-widest uppercase text-purple-400">
                OFFICIAL BOOKING INTERFACE
              </span>
              <h3 className="text-base font-bold text-white tracking-tight mt-1">
                Book a Technical Consultation
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {success ? <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    className="py-12 text-center space-y-4"
  >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <Smile className="size-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm">Consultation Scheduled!</h4>
                    <p className="text-[11px] text-slate-400 max-w-xs mx-auto leading-relaxed">
                      Your booking contract has been parsed and transmitted successfully. I will review the architecture plan and email you within 24 hours.
                    </p>
                  </div>
                  <button
    onClick={() => setSuccess(false)}
    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-855 text-zinc-300 font-mono text-xs rounded border border-zinc-800 cursor-pointer"
  >
                    Return to booking options
                  </button>
                </motion.div> : <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {
    /* Selected service display */
  }
                  <div className="p-3 bg-zinc-950/80 border border-zinc-900 rounded-lg flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">ENGAGEMENT SPEC:</span>
                    <span className="text-cyan-400 font-bold uppercase">{bookingForm.serviceType}</span>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                      Your Name / Handle *
                    </label>
                    <input
    type="text"
    required
    value={bookingForm.clientName}
    onChange={(e) => setBookingForm((prev) => ({ ...prev, clientName: e.target.value }))}
    placeholder="e.g. John Doe"
    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 rounded text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
  />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                      Your Email Address *
                    </label>
                    <input
    type="email"
    required
    value={bookingForm.clientEmail}
    onChange={(e) => setBookingForm((prev) => ({ ...prev, clientEmail: e.target.value }))}
    placeholder="e.g. name@employer.com"
    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 rounded text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
  />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                        Company Name
                      </label>
                      <input
    type="text"
    value={bookingForm.company}
    onChange={(e) => setBookingForm((prev) => ({ ...prev, company: e.target.value }))}
    placeholder="e.g. Acme Corp"
    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 rounded text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
  />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                        Target Date
                      </label>
                      <input
    type="date"
    value={bookingForm.targetDate}
    onChange={(e) => setBookingForm((prev) => ({ ...prev, targetDate: e.target.value }))}
    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 rounded text-xs text-white focus:outline-none focus:border-cyan-400 font-mono cursor-pointer"
  />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5">
                      Describe the task and constraints *
                    </label>
                    <textarea
    required
    rows={4}
    value={bookingForm.specification}
    onChange={(e) => setBookingForm((prev) => ({ ...prev, specification: e.target.value }))}
    placeholder="Provide system expectations, stack constraints, or tutoring targets here..."
    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 rounded text-xs text-white focus:outline-none focus:border-cyan-400 font-mono resize-none"
  />
                  </div>

                  <button
    type="submit"
    disabled={loading}
    className="w-full py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:opacity-95 text-white font-mono text-xs font-bold rounded-lg shadow-lg shadow-cyan-500/10 flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50"
  >
                    <span>{loading ? "TRANSMITTING DATA..." : "SUBMIT_CONSULTATION_SPEC"}</span>
                    <ArrowRight className="size-3.5" />
                  </button>

                  <div className="flex items-start space-x-2 text-[9px] text-zinc-500 leading-normal pt-2">
                    <AlertCircle className="size-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                    <span>Your booking inquiry aggregates to Khwahish's dashboard logs. Handshakes are compliant under TLS protocols.</span>
                  </div>
                </form>}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </section>;
}

import { useState } from "react";
import { Mail, Phone, MapPin, Printer, CheckCircle } from "lucide-react";
import { PERSONAL_DETAILS, EXPERIENCES, EDUCATION_LIST } from "../data/portfolioData";
export default function Resume({ darkMode }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const handlePrint = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3e3);
      const originalTitle = document.title;
      document.title = "Khwahish_Software_Developer_Resume.pdf";
      window.print();
      document.title = originalTitle;
    }, 1200);
  };
  return <section id="resume-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      
      {
    /* SDE Resume Section Header */
  }
      <div className="border border-zinc-850 bg-[#070709] p-6 lg:p-8 rounded-xl mb-10 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="text-left">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-widest">
              OFFICIAL SDE SPECIFICATION SHEET
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
            Curriculum Vitae
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1 leading-relaxed">
            Standard printable ISO A4 layout containing industry history, competitive coding credentials, and core computer science specialties.
          </p>
        </div>

        {
    /* Action Button */
  }
        <div>
          <button
    onClick={handlePrint}
    disabled={downloading}
    className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-2 rounded-lg transition-all cursor-pointer shadow-lg shadow-amber-500/10 disabled:opacity-40"
  >
            <Printer className="size-4" />
            <span>{downloading ? "FORMATTING CV..." : "PRINT / EXPORT TO PDF"}</span>
          </button>
        </div>
      </div>

      {downloadSuccess && <div className="mb-6 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase text-center tracking-widest rounded-lg flex items-center justify-center space-x-2">
          <CheckCircle className="size-3.5" />
          <span>ISO A4 PRINT HANDSHAKE COMPLETE. STANDARDIZED PRINT STYLE SHEET LOADED SUCCESSFULLY!</span>
        </div>}

      {
    /* Embedded Resume Viewport Sheet */
  }
      <div
    id="printable-resume-element"
    className="w-full border border-zinc-805 rounded-xl bg-[#070709] bg-grid-pattern-dark p-6 sm:p-10 md:p-16 text-zinc-300 shadow-2xl relative overflow-hidden"
  >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {
    /* Header Block */
  }
        <div className="border-b border-zinc-850 pb-8 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-white uppercase">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="text-sm font-mono text-amber-400 font-bold uppercase tracking-widest">
              {PERSONAL_DETAILS.title}
            </p>
          </div>

          <div className="space-y-2 text-[11px] font-mono text-zinc-400 border-t md:border-t-0 md:border-l border-zinc-900 pt-4 md:pt-0 md:pl-6 text-left">
            <div className="flex items-center space-x-2.5">
              <Mail className="size-3.5 text-cyan-400" />
              <span>{PERSONAL_DETAILS.email}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="size-3.5 text-cyan-400" />
              <span>{PERSONAL_DETAILS.phone}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <MapPin className="size-3.5 text-cyan-400" />
              <span>{PERSONAL_DETAILS.location}</span>
            </div>
          </div>
        </div>

        {
    /* Summary block */
  }
        <div className="space-y-3 text-left mb-8">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
            01 / INDUSTRIAL SUMMARY
          </span>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
            {PERSONAL_DETAILS.bio} Experienced at designing procedural structural optimization flows using C++, building highly responsive virtual state controllers (React 19), with rigorous secondary alignments inside computer science fundamentals (NoSQL schemas, relational indexes).
          </p>
        </div>

        {
    /* 2 Grid Columns */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {
    /* Chronological blocks - Left (8 col) */
  }
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {
    /* Experience timeline */
  }
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-1.5">
                02 / INDUSTRY EXPERIENCES
              </span>
              <div className="space-y-5">
                {EXPERIENCES.map((exp, idx) => <div key={idx} className="space-y-2 p-5 bg-zinc-950 border border-zinc-855 rounded-lg hover:border-zinc-800 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-white">
                      <span className="font-bold font-sans text-sm">
                        {exp.role.toUpperCase()}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 font-bold bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-900">
                        {exp.period}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wide">
                      // {exp.company}
                    </div>
                    <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-1.5 pt-1">
                      {exp.description.map((bullet, bulletIdx) => <li key={bulletIdx} className="leading-relaxed">{bullet}</li>)}
                    </ul>
                  </div>)}
              </div>
            </div>

            {
    /* Academic records */
  }
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-1.5">
                03 / ACADEMIC SHAPE
              </span>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu, idx) => <div key={idx} className="p-5 bg-zinc-950 border border-zinc-855 rounded-lg text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-white text-sm font-bold font-sans">
                      <span>{edu.degree.toUpperCase()}</span>
                      <span className="font-mono text-[10px] text-zinc-500 font-bold">{edu.period}</span>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 mt-1">
                      {edu.institution}
                    </div>
                    {edu.grade && <div className="mt-3 inline-block px-2.5 py-1 bg-emerald-500/10 border border-emerald-550/20 text-emerald-400 font-mono text-[9px] font-bold uppercase rounded">
                        GRADE: {edu.grade} / Scholar
                      </div>}
                  </div>)}
              </div>
            </div>

          </div>

          {
    /* Technical and metrics sidebar - Right (4 col) */
  }
          <div className="lg:col-span-4 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-1.5">
                04 / CORE MATRIX
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["C++", "Java", "Python", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "OOP", "DSA", "System Design", "Git & GitHub"].map((skill, sIdx) => <span
    key={sIdx}
    className="px-2.5 py-1 bg-zinc-950 border border-zinc-850 text-[10px] font-mono text-zinc-400 font-bold rounded uppercase select-none hover:border-zinc-700 transition-colors"
  >
                    {skill}
                  </span>)}
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-1.5">
                05 / PLATFORM METRICS
              </span>
              <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-lg space-y-3 font-mono text-[10px]">
                <div className="flex justify-between items-center text-zinc-400 py-1.5 border-b border-zinc-900/40">
                  <span>LEETCODE SOLVES:</span>
                  <span className="font-bold text-white">450+ Active</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 py-1.5 border-b border-zinc-900/40">
                  <span>GLOBAL RATING:</span>
                  <span className="font-bold text-amber-400">1750+ (Top 8%)</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 py-1.5">
                  <span>CODECHEF RANK:</span>
                  <span className="font-bold text-white">3-Star Specialist</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-1.5">
                06 / RECRUITMENT STATUS
              </span>
              <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-lg space-y-2 text-xs">
                <div className="text-[10px] font-mono text-zinc-500">MNC SCREENING STANDBY:</div>
                <div className="font-bold text-emerald-400">PASSED INITIAL PARAMETERS</div>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-mono pt-1">
                  Ready for instant onboarding. Background reference checks verified.
                </p>
              </div>
            </div>

          </div>

        </div>

        {
    /* Printable sheet disclaimer footer */
  }
        <div className="border-t border-zinc-850 pt-6 mt-10 text-center text-[10px] font-mono text-zinc-550 select-none">
          <span>PORTFOLIO HANDSHAKE DATA NODE • DESIGNED BY KHWAHISH SETH © 2026</span>
        </div>

      </div>

    </section>;
}

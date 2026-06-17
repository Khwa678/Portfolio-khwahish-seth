import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, Mail, Phone, MapPin, Award } from "lucide-react";
import { PERSONAL_DETAILS, EXPERIENCES, EDUCATION_LIST } from "../data/portfolioData";
export default function ResumeModal({ isOpen, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3e3);
      const printableContent = document.getElementById("printable-resume-element");
      if (printableContent) {
        const originalTitle = document.title;
        document.title = "Khwahish_Software_Developer_Resume.pdf";
        window.print();
        document.title = originalTitle;
      }
    }, 1200);
  };
  return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {
    /* Backdrop overlay */
  }
          <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/90 backdrop-blur-sm"
  />

          {
    /* Dialog block body */
  }
          <motion.div
    initial={{ opacity: 0, scale: 0.98, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.98, y: 15 }}
    transition={{ type: "spring", damping: 30 }}
    className="relative max-w-3xl w-full bg-[#0a0a0c] border border-zinc-800 rounded overflow-hidden shadow-2xl z-10 text-white"
  >
            
            {
    /* Toolbar Header panel */
  }
            <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-800 bg-zinc-950">
              <div className="flex items-center space-x-2">
                <Award className="size-4 text-amber-400" />
                <h3 className="font-bold text-xs uppercase font-mono tracking-widest text-zinc-350">
                  SYSTEM PROFILE SUMMARY (RECRUITER ENGINE)
                </h3>
              </div>
              <div className="flex items-center space-x-3">
                <button
    onClick={handleDownload}
    disabled={downloading}
    className="px-3.5 py-1.5 bg-amber-400 hover:bg-white text-black font-extrabold text-[10px] uppercase tracking-widest font-mono flex items-center space-x-2 transition-all cursor-pointer disabled:opacity-40"
  >
                  <Download className="size-3.5" />
                  <span>{downloading ? "Formatting..." : "Print / PDF"}</span>
                </button>
                <button
    onClick={onClose}
    className="p-1.5 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer rounded"
    aria-label="Exit resume view modal"
  >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {
    /* Notification alert success popup */
  }
            {downloadSuccess && <div className="px-6 py-1.5 bg-emerald-500/10 border-b border-emerald-500/20 text-[9px] text-emerald-400 font-mono text-center select-none uppercase tracking-wider">
                Print handshake initialized. Standard printable stylesheet loaded!
              </div>}

            {
    /* Resume Sheet Wrapper */
  }
            <div id="printable-resume-element" className="p-8 md:p-12 space-y-8 max-h-[70vh] overflow-y-auto text-left bg-[#070709] bg-grid-pattern-dark bg-opacity-10 text-zinc-300">
              
              {
    /* Header block with contacts */
  }
              <div className="border-b border-zinc-850 pb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <h1 className="text-3xl font-bold font-sans tracking-tight text-white uppercase">
                    {PERSONAL_DETAILS.name}
                  </h1>
                  <p className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                    {PERSONAL_DETAILS.title}
                  </p>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center space-x-2">
                    <Mail className="size-3.5" />
                    <span>{PERSONAL_DETAILS.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="size-3.5" />
                    <span>{PERSONAL_DETAILS.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="size-3.5" />
                    <span>{PERSONAL_DETAILS.location}</span>
                  </div>
                </div>
              </div>

              {
    /* Summary item */
  }
              <div className="space-y-2 text-left">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                  01 / PROFESSIONAL SYNOPSIS
                </span>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
                  {PERSONAL_DETAILS.bio} Experienced at designing procedural structural optimization flows using C++, building highly responsive virtual state controllers (React 19), with rigorous secondary alignments inside computer science fundamentals (NoSQL schemas, relational indexes).
                </p>
              </div>

              {
    /* Grid 2 Columns */
  }
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                
                {
    /* Left col - chronological blocks */
  }
                <div className="md:col-span-8 space-y-6 text-left">
                  
                  {
    /* Experience timeline */
  }
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                      02 / INDUSTRY STREAMS
                    </span>
                    <div className="space-y-4">
                      {EXPERIENCES.map((exp, idx) => <div key={idx} className="space-y-1.5 p-4 bg-zinc-950 border border-zinc-850 rounded">
                          <div className="flex justify-between items-center text-xs font-bold text-white font-sans">
                            <span>{exp.role.toUpperCase()} // <span className="text-amber-400">{exp.company}</span></span>
                            <span className="font-mono text-[10px] text-zinc-500 font-bold">{exp.period}</span>
                          </div>
                          <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-1">
                            {exp.description.map((bullet, bulletIdx) => <li key={bulletIdx}>{bullet}</li>)}
                          </ul>
                        </div>)}
                    </div>
                  </div>

                  {
    /* Academic timeline */
  }
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                      03 / ACADEMIC CHRONICLES
                    </span>
                    <div className="space-y-3">
                      {EDUCATION_LIST.map((edu, idx) => <div key={idx} className="p-4 bg-zinc-950 border border-zinc-850 rounded text-xs">
                          <div className="flex justify-between items-center font-bold text-white font-sans">
                            <span>{edu.degree.toUpperCase()}</span>
                            <span className="font-mono text-[10px] text-zinc-500 font-bold">{edu.period}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-450 mt-1">
                            <span>{edu.institution}</span>
                            {edu.grade && <span className="text-emerald-400 font-bold uppercase">GRADE: {edu.grade}</span>}
                          </div>
                        </div>)}
                    </div>
                  </div>

                </div>

                {
    /* Right col - tech matrices list */
  }
                <div className="md:col-span-4 space-y-6 text-left">
                  
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                      04 / TECHNICAL MATRIX
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["C++", "Java", "Python", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "OOP", "DSA", "System Design", "Git & GitHub"].map((skill, sIdx) => <span
    key={sIdx}
    className="px-2 py-1 bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-400 font-bold rounded uppercase select-none"
  >
                          {skill}
                        </span>)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                      05 / PLATFORM METRICS
                    </span>
                    <div className="p-3 bg-zinc-950 border border-zinc-850 rounded space-y-2 font-mono text-[10px]">
                      <div className="flex justify-between text-zinc-450">
                        <span>LEETCODE SOLVES:</span>
                        <span className="font-bold text-white">450+ Solved</span>
                      </div>
                      <div className="flex justify-between text-zinc-450">
                        <span>GLOBAL RATING:</span>
                        <span className="font-bold text-amber-400">1750+ (Top 8%)</span>
                      </div>
                      <div className="flex justify-between text-zinc-450">
                        <span>CODECHEF RANK:</span>
                        <span className="font-bold text-white">3-Star Specialist</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {
    /* Printable sheet disclaimer footer */
  }
              <div className="border-t border-zinc-850 pt-4 text-center text-[10px] font-mono text-zinc-550 select-none">
                <span>VERIFIED RECRUITMENT RESOURCE HANDSHAKE PORTAL — PRINT DIRECTLY ON A4</span>
              </div>

            </div>

            {
    /* Bottom panel */
  }
            <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-550">
              <span>Standard Size: ISO A4</span>
              <span>Khwahish Seth CV © 2026</span>
            </div>

          </motion.div>
        </div>}
    </AnimatePresence>;
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Calendar, MapPin, Check } from "lucide-react";
import { EXPERIENCES, EDUCATION_LIST } from "../data/portfolioData";
export default function Timeline({}) {
  const [activeTab, setActiveTab] = useState("experience");
  return <section
    id="experience"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      {
    /* Main Grid Wrapper */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* LEFT COMPARTMENT - Title & Tab Selector */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              06 / CHRONICLE TIMELINE
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              MILESTONES
              <br />
              & CREDENTIALS
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-500 text-xs font-mono leading-relaxed mt-2">
              Academic credentials combined with hands-on full-stack intern roles and open mentorship.
            </p>
          </div>

          {
    /* Tab switches */
  }
          <div className="flex flex-col space-y-2 py-4">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
              Select Chronicle:
            </span>
            
            <button
    onClick={() => setActiveTab("experience")}
    className={`w-full text-left px-3 py-2 font-mono text-xs border transition-colors flex items-center justify-between ${activeTab === "experience" ? "bg-amber-400 border-black text-black font-extrabold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <Briefcase className="size-4" />
                <span>EXPERIENCE</span>
              </div>
              <span className="text-[9px]">01</span>
            </button>

            <button
    onClick={() => setActiveTab("education")}
    className={`w-full text-left px-3 py-2 font-mono text-xs border transition-colors flex items-center justify-between ${activeTab === "education" ? "bg-amber-400 border-black text-black font-extrabold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <GraduationCap className="size-4" />
                <span>EDUCATION</span>
              </div>
              <span className="text-[9px]">02</span>
            </button>
          </div>

          <span className="font-mono text-[9px] text-zinc-500">SORT_ORDER: CHRONOLOGICAL_DESC</span>
        </div>

        {
    /* RIGHT COMPARTMENT - Timeline rendering */
  }
        <div className="lg:col-span-9 p-6 sm:p-8 bg-[#070709] space-y-8 flex flex-col justify-between">
          
          <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
              {activeTab === "experience" ? "WORK EXPERIENCE STREAMS" : "ACADEMIC ENROLLMENTS"}
            </span>
            <span className="font-mono text-[10px] text-zinc-500">TOTAL: {activeTab === "experience" ? EXPERIENCES.length : EDUCATION_LIST.length}</span>
          </div>

          <div className="space-y-8 text-left">
            <AnimatePresence mode="popLayout">
              {activeTab === "experience" ? EXPERIENCES.map((exp, idx) => <motion.div
    layout
    key={exp.id}
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
    className="p-6 bg-zinc-950 border border-zinc-850 hover:border-zinc-805 transition-colors"
  >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-zinc-900 pb-4">
                        <div>
                          <h4 className="text-md sm:text-lg font-bold text-white font-sans">
                            {exp.role.toUpperCase()}
                          </h4>
                          <p className="text-xs font-mono text-amber-400 font-bold tracking-tight mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-zinc-500 text-xs font-mono">
                          <span className="flex items-center">
                            <Calendar className="size-3.5 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="size-3.5 mr-1" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-6">
                        {exp.description.map((bullet, bulletIdx) => <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-zinc-330 leading-relaxed font-sans">
                            <Check className="size-4 mt-0.5 text-amber-500 mr-2.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>)}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-902">
                        {exp.skills.map((skillItem, skillItemIdx) => <span
    key={skillItemIdx}
    className="px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-[9px] font-mono text-zinc-400 font-bold uppercase"
  >
                            {skillItem}
                          </span>)}
                      </div>
                    </motion.div>) : EDUCATION_LIST.map((edu, idx) => <motion.div
    layout
    key={idx}
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
    className="p-6 bg-zinc-950 border border-zinc-850 hover:border-zinc-805 transition-colors"
  >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-zinc-900 pb-4">
                        <div>
                          <h4 className="text-md sm:text-lg font-bold text-white font-sans">
                            {edu.degree.toUpperCase()}
                          </h4>
                          <p className="text-xs font-mono text-amber-400 font-bold tracking-tight mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-zinc-500 text-xs font-mono">
                          <span className="flex items-center">
                            <Calendar className="size-3.5 mr-1" />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      {edu.grade && <div className="mb-4 inline-block px-3 py-1 bg-zinc-900 border border-zinc-850 text-xs text-amber-400 font-mono rounded">
                          GRADE_REWARD: {edu.grade}
                        </div>}

                      <ul className="space-y-2.5">
                        {edu.details.map((bullet, bulletIdx) => <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                            <Check className="size-4 mt-0.5 text-amber-500 mr-2.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>)}
                      </ul>
                    </motion.div>)}
            </AnimatePresence>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-850 text-zinc-500 text-[10px] font-mono leading-relaxed mt-4 rounded">
            *Verification certificates, credential IDs, and department transcripts are available instantly on candidate request. Feel free to download her interactive resume modal at the top interface of the page.
          </div>

        </div>

      </div>
    </section>;
}

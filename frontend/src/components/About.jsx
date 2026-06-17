import { Check, Target, Terminal, HelpCircle } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";
export default function About({}) {
  return <section
    id="about"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      {
    /* Absolute Backdrop Grid */
  }
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      {
    /* Main Structural Grid Section Matching Image 1 Section Dividers */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* LEFT COMPARTMENT (lg:col-span-3) - Vertical Title and Section Identifier */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              03 / AUTOBIOGRAPHY
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              GET TO
              <br />
              KNOW
              <br />
              KHWALISH
            </span>
            <div className="w-12 h-1 bg-amber-400" />
          </div>

          {
    /* Large decorative rotated text background */
  }
          <div className="relative py-12 select-none overflow-hidden">
            <span className="text-[5rem] font-black font-sans leading-none text-zinc-900 tracking-tighter block uppercase">
              ABOUT
              <br />
              ME
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-[9px] text-zinc-500 block">CATALOG_ID: KHW_journey</span>
            <p className="text-zinc-400 text-xs font-mono leading-relaxed">
              Balancing continuous competitive programming routines with modern cloud architectures.
            </p>
          </div>
        </div>

        {
    /* MIDDLE COMPARTMENT (lg:col-span-5) - Personal Story & Stats */
  }
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-zinc-500">
              <Terminal className="size-3.5 text-amber-400" />
              <span>THE DEVELOPER JOURNEY</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-sans">
              "Procedural algorithm logic packaged into responsive full-stack delivery."
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              {PERSONAL_DETAILS.bio}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              My engineering approach is defined by optimization. By practicing advanced Data Structures & Algorithms (DSA), I train my mental model to solve complex resource limitations, while applying the MERN stack to deliver functional, high-end interfaces that users love.
            </p>
          </div>

          {
    /* Interactive Metric Breakdown Panel */
  }
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-800/60 pt-6">
            {PERSONAL_DETAILS.stats.map((stat, i) => <div
    key={i}
    className="p-4 bg-zinc-950 border border-zinc-850 rounded hover:border-zinc-800 transition-colors"
  >
                <span className="font-mono text-[9px] text-zinc-500 block uppercase mb-1">
                  Metric_0{i + 1}
                </span>
                <span className="text-xl font-bold text-white block">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-300 font-semibold block mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono block mt-1">
                  {stat.subtext}
                </span>
              </div>)}
          </div>

        </div>

        {
    /* RIGHT COMPARTMENT (lg:col-span-4) - Core Objectives & Interests */
  }
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-[#0b0b0e]">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-zinc-500">
              <Target className="size-3.5 text-amber-400" />
              <span>SDE ROADMAP & OBJECTIVES</span>
            </div>

            <div className="space-y-4">
              {PERSONAL_DETAILS.careerGoals.map((goal, idx) => <div key={idx} className="flex items-start space-x-3 text-left">
                  <div className="mt-1 flex-shrink-0 size-4 rounded-full bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
                    <Check className="size-2.5 text-amber-400" />
                  </div>
                  <p className="text-xs sm:text-sm leading-snug font-sans text-zinc-300">
                    {goal}
                  </p>
                </div>)}
            </div>
          </div>

          {
    /* Core Interests Tagboard */
  }
          <div className="space-y-4 border-t border-zinc-800/60 pt-6">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-zinc-500">
              <HelpCircle className="size-3.5 text-cyan-400" />
              <span>CORE STUDY TOPICS</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
    "Competitive Programming",
    "LeetCode Consistency",
    "Advanced C++ & STL",
    "System Design Basics",
    "MERN Fullstack Architecture",
    "Relational Databases",
    "NoSQL Architecture & Indexes",
    "Big-O Space & Time Complexity"
  ].map((tag, idx) => <span
    key={idx}
    className="px-2.5 py-1 bg-zinc-950 border border-zinc-850 rounded text-[10px] font-mono text-zinc-400 hover:text-white hover:border-zinc-800 transition-colors cursor-default"
  >
                  #{tag.toUpperCase().replace(/\s+/g, "_")}
                </span>)}
            </div>
          </div>

        </div>

      </div>
    </section>;
}

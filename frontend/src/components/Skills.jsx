import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
export default function Skills({}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.category)];
  const filteredCategories = selectedCategory === "All" ? SKILL_CATEGORIES : SKILL_CATEGORIES.filter((cat) => cat.category === selectedCategory);
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.Code;
    return <IconComponent className="size-4 text-amber-400 mr-2" />;
  };
  return <section
    id="skills"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      {
    /* Grid wrapper */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* LEFT BAR - Section Title & Filter menu */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              04 / KNOWLEDGE MATRIX
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              TECHNICAL
              <br />
              INVENTORY
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-500 text-xs font-mono leading-relaxed mt-2">
              Capabilities refined through rigorous competitive coding, computer science modules, and dynamic web deployments.
            </p>
          </div>

          {
    /* Filtering controls (Brutalist List) */
  }
          <div className="flex flex-col space-y-2 py-4">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
              Filter by Department:
            </span>
            {categories.map((cat, idx) => <button
    key={idx}
    onClick={() => setSelectedCategory(cat)}
    className={`w-full text-left px-3 py-2 font-mono text-xs transition-all border flex items-center justify-between ${selectedCategory === cat ? "bg-amber-400 border-black text-black font-bold shadow-sm" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400 hover:text-white"}`}
  >
                <span>{cat.toUpperCase()}</span>
                <span className="text-[9px] opacity-60">0{idx}</span>
              </button>)}
          </div>

          <div className="font-mono text-[9px] text-zinc-500">
            SYSTEM_INTEGRITY: COMPILATION_OK
          </div>
        </div>

        {
    /* MAIN BODY - Skills Grid panels (lg:col-span-9) */
  }
        <div className="lg:col-span-9 p-6 sm:p-8 space-y-8 bg-[#070709]">
          
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              SKILLS DATASTREAM
            </span>
            <span className="font-mono text-[10px] text-zinc-500">SORT_ORDER: CATEGORICAL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((group, groupIdx) => <motion.div
    key={group.category}
    layout
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.3, delay: groupIdx * 0.04 }}
    className="p-6 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 transition-colors flex flex-col justify-between"
  >
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border-b border-zinc-850 pb-3 mb-4 font-bold">
                      {group.category.toUpperCase()}
                    </h3>

                    {
    /* Skill indicators */
  }
                    <div className="space-y-4">
                      {group.items.map((skill, skillIdx) => <div key={skillIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {renderIcon(skill.icon)}
                              <span className="text-xs font-bold tracking-tight text-zinc-200">
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-zinc-500 font-bold">
                              {skill.level}%
                            </span>
                          </div>

                          {
    /* Level Progress */
  }
                          <div className="h-1.5 bg-zinc-900 overflow-hidden">
                            <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: `${skill.level}%` }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: skillIdx * 0.05 }}
    className="h-full bg-amber-400"
  />
                          </div>
                        </div>)}
                    </div>
                  </div>
                </motion.div>)}
            </AnimatePresence>
          </div>

          {
    /* Core Foundations tag deck */
  }
          <div className="p-4 bg-zinc-950 border border-zinc-850 rounded text-left mt-8">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-3">
              SECONDARY & METHODOLOGICAL CAPABILITIES
            </span>
            <div className="flex flex-wrap gap-2">
              {[
    "Advanced C++ STL Modules",
    "Asymptotic Analysis (Big-O)",
    "Space Complexity Optimization",
    "Object-Oriented Design Patterns",
    "JSON REST API Engineering",
    "Microservice Routing Structures",
    "Relational Database Index Normalization",
    "GitHub Actions CI/CD Pipeline Tracking"
  ].map((badge, idx) => <span
    key={idx}
    className="px-2.5 py-1 bg-zinc-900 text-zinc-400 border border-zinc-850 font-mono text-[9px] select-none hover:text-white hover:border-zinc-800 transition-all"
  >
                  {badge.toUpperCase()}
                </span>)}
            </div>
          </div>

        </div>

      </div>
    </section>;
}

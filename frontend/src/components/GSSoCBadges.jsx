import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Zap, Star, Flame, Trophy, GitMerge, Layout, Map, Sparkles, CheckCircle2 } from "lucide-react";
export default function GSSoCBadges({ darkMode }) {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const badges = [
    {
      id: "power-contributor",
      name: "Power Contributor",
      rarity: "rare",
      icon: Trophy,
      color: "from-amber-400 to-orange-500",
      borderColor: "border-amber-400/50",
      glowColor: "shadow-amber-500/20",
      points: 800,
      description: "Earned for high-momentum contribution, submitting several complex architectural pull requests that passed expert evaluations.",
      unlockedAt: "June 2026"
    },
    {
      id: "rising-star",
      name: "Rising Star",
      rarity: "uncommon",
      icon: Star,
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400/50",
      glowColor: "shadow-cyan-500/20",
      points: 500,
      description: "Awarded for exceptional rank acceleration, scaling rapidly to enter the elite global top 1000 leaderboard tier.",
      unlockedAt: "July 2026"
    },
    {
      id: "streak-champion",
      name: "Streak Champion",
      rarity: "elite",
      icon: Flame,
      color: "from-rose-500 to-orange-600",
      borderColor: "border-rose-400/50",
      glowColor: "shadow-rose-500/20",
      points: 600,
      description: "Maintained a continuous 4-week active code contribution streak, committing fixes and updates daily without interruptions.",
      unlockedAt: "May 2026"
    },
    {
      id: "git-wizard",
      name: "Git Wizard",
      rarity: "uncommon",
      icon: GitMerge,
      color: "from-violet-500 to-indigo-600",
      borderColor: "border-violet-400/50",
      glowColor: "shadow-violet-500/20",
      points: 400,
      description: "For perfect Git manners, maintaining a flawless rebase history, resolving complex upstream conflicts, and providing descriptive commit messaging.",
      unlockedAt: "June 2026"
    },
    {
      id: "habit-builder",
      name: "Habit Tracker Architect",
      rarity: "rare",
      icon: CheckCircle2,
      color: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-400/50",
      glowColor: "shadow-emerald-500/20",
      points: 750,
      description: "Successfully implemented, tested, and shipped a beautiful fully-responsive client-side Habit Tracker module to the master tree.",
      unlockedAt: "May 2026"
    },
    {
      id: "maze-engineer",
      name: "Maze Animator",
      rarity: "uncommon",
      icon: Map,
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-400/50",
      glowColor: "shadow-pink-500/20",
      points: 450,
      description: "Created an interactive animated canvas framework that displays algorithmically generated maze layouts with transition keyframes.",
      unlockedAt: "July 2026"
    },
    {
      id: "bug-squasher",
      name: "Chart Bug Squasher",
      rarity: "common",
      icon: Zap,
      color: "from-yellow-400 to-amber-500",
      borderColor: "border-yellow-400/50",
      glowColor: "shadow-yellow-500/10",
      points: 300,
      description: "Resolved critical coordinate issues on analytical responsive canvas charts, helping restore state sync pipelines on legacy pages.",
      unlockedAt: "May 2026"
    },
    {
      id: "elite-cohort",
      name: "Global Top 2%",
      rarity: "elite",
      icon: Award,
      color: "from-fuchsia-400 to-purple-600",
      borderColor: "border-fuchsia-400/50",
      glowColor: "shadow-fuchsia-500/20",
      points: 900,
      description: "Placed inside the outstanding Top 2% bracket globally, finishing as Rank #551 out of 43,586 participating software candidates.",
      unlockedAt: "August 2026"
    },
    {
      id: "milestone-maker",
      name: "Milestone Maker",
      rarity: "elite",
      icon: Sparkles,
      color: "from-amber-300 via-yellow-400 to-orange-500",
      borderColor: "border-amber-300/40",
      glowColor: "shadow-yellow-400/20",
      points: 850,
      description: "Surpassed the critical platform threshold of 1,225 leaderboard points inside GSSoC 2026.",
      unlockedAt: "August 2026"
    },
    {
      id: "open-source-hero",
      name: "Community Advocate",
      rarity: "common",
      icon: Layout,
      color: "from-blue-400 to-indigo-500",
      borderColor: "border-blue-400/50",
      glowColor: "shadow-blue-500/10",
      points: 250,
      description: "Successfully carried out cross-repository evaluations, providing accurate issue feedback and welcoming new developers.",
      unlockedAt: "July 2026"
    }
  ];
  return <div className="space-y-12">
      {
    /* Upper overview cards */
  }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {
    /* Meta Stats 1 */
  }
        <div className="p-5 bg-zinc-950 border border-zinc-850 rounded-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
            // COMPETITIVE STATUS
          </span>
          <div className="mt-3 flex items-baseline space-x-1">
            <span className="text-3xl font-black text-amber-400 font-sans tracking-tight">RANK #551</span>
            <span className="text-[10px] font-mono text-zinc-500">of 43,586</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2 font-mono">
            Finished in top <span className="text-amber-400 font-bold">2% globally</span>. Highly active contributor.
          </p>
        </div>

        {
    /* Meta Stats 2 */
  }
        <div className="p-5 bg-zinc-950 border border-zinc-850 rounded-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
            // POINT ACCUMULATION
          </span>
          <div className="mt-3 flex items-baseline space-x-1">
            <span className="text-3xl font-black text-cyan-400 font-sans tracking-tight">1,225 pts</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2 font-mono">
            Earned through <span className="text-cyan-400 font-bold">7 major PRs</span> merged into master repo.
          </p>
        </div>

        {
    /* Meta Stats 3 */
  }
        <div className="p-5 bg-zinc-950 border border-zinc-850 rounded-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
            // ACTIVITY RECORD
          </span>
          <div className="mt-3 flex items-baseline space-x-1">
            <span className="text-3xl font-black text-rose-400 font-sans tracking-tight">4 WEEKS</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2 font-mono">
            Maintained a <span className="text-rose-400 font-bold">continuous commits streak</span> throughout May.
          </p>
        </div>

      </div>

      {
    /* Badges Matrix */
  }
      <div className="space-y-4">
        <div className="flex justify-between items-center text-left">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">GSSoC Trophies &amp; Badges</h3>
            <p className="text-xs text-zinc-450 font-mono">Click a badge to inspect its verification manifest and specifications.</p>
          </div>
          <span className="font-mono text-[10px] bg-zinc-900 border border-zinc-850 text-zinc-400 px-2.5 py-1 rounded">
            TOTAL ASSETS: 12
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {badges.map((badge) => {
    const IconComponent = badge.icon;
    const isSelected = selectedBadge === badge.id;
    return <motion.button
      key={badge.id}
      onClick={() => setSelectedBadge(isSelected ? null : badge.id)}
      whileHover={{ y: -4 }}
      className={`p-4 bg-[#0a0a0d] border ${isSelected ? "border-amber-400" : "border-zinc-850 hover:border-zinc-700"} rounded-xl text-center cursor-pointer transition-all flex flex-col items-center justify-between h-44 relative group`}
    >
                {
      /* Rarity Label */
    }
                <span className={`font-mono text-[8px] uppercase font-black px-1.5 py-0.5 rounded ${badge.rarity === "elite" ? "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20" : badge.rarity === "rare" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : badge.rarity === "uncommon" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-zinc-800 text-zinc-400"}`}>
                  {badge.rarity}
                </span>

                {
      /* Badge Icon Orb */
    }
                <div className={`size-16 rounded-full bg-gradient-to-tr ${badge.color} p-[1px] shadow-lg ${badge.glowColor} group-hover:scale-105 transition-transform flex items-center justify-center relative mt-2`}>
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                    <IconComponent className="size-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {
      /* Badge ID Tag */
    }
                <div className="mt-3 text-left w-full text-center">
                  <span className="font-sans font-bold text-xs text-white block truncate">
                    {badge.name}
                  </span>
                  <span className="font-mono text-[8px] text-zinc-505 uppercase block mt-0.5">
                    +{badge.points} XP
                  </span>
                </div>
              </motion.button>;
  })}
        </div>
      </div>

      {
    /* Detail Overlay Sheet */
  }
      <AnimatePresence mode="wait">
        {selectedBadge && (() => {
    const badge = badges.find((b) => b.id === selectedBadge);
    if (!badge) return null;
    const IconComponent = badge.icon;
    return <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-6 bg-zinc-950 border border-zinc-850 rounded-xl text-left relative overflow-hidden"
    >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr from-amber-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className={`size-14 rounded-xl bg-gradient-to-tr ${badge.color} p-0.5 flex items-center justify-center`}>
                    <div className="w-full h-full rounded-xl bg-zinc-950 flex items-center justify-center">
                      <IconComponent className="size-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base font-extrabold text-white">{badge.name}</h4>
                      <span className="font-mono text-[8px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {badge.rarity}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-zinc-500">ISSUED BY GIRLSCRIPT FOUNDATION • UNLOCKED: {badge.unlockedAt.toUpperCase()}</p>
                  </div>
                </div>

                <div className="font-mono text-right text-xs md:border-l md:border-zinc-900 md:pl-6 text-left sm:text-right">
                  <div className="text-zinc-500">LEADERBOARD CONTRIBUTION VALUE</div>
                  <div className="text-amber-400 font-extrabold text-sm mt-0.5">+{badge.points} POINTS SPEC</div>
                </div>
              </div>

              <div className="mt-5 border-t border-zinc-900/60 pt-4">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 font-bold">// SPECIFICATION MATRIX OVERVIEW</div>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">{badge.description}</p>
              </div>

              <div className="mt-4 flex items-center space-x-2 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="size-3.5" />
                <span>CRYPTOGRAPHIC TRIPLE-HANDSHAKE COMPLETE. RECORD VERIFIED ON OFFICIAL LEADERBOARD DATA ARRAY.</span>
              </div>
            </motion.div>;
  })()}
      </AnimatePresence>

      {
    /* Featured GSSoC contribution items */
  }
      <div className="p-6 bg-[#070709] border border-zinc-850 rounded-xl text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
        <span className="font-mono text-[9px] text-zinc-504 uppercase tracking-widest block font-bold mb-4">
          // GSSOC 2026 CONTRIBUTOR WORKLOG
        </span>

        <div className="space-y-4">
          <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-lg hover:border-zinc-850 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-amber-400 font-bold">// REPOSITORY COMPONENT</span>
                <h4 className="text-sm font-bold text-white mt-0.5">100_days_100_web_project</h4>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-[9px] font-bold">
                7 PRs MERGED
              </span>
            </div>
            
            <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-2 mt-3">
              <li>
                <strong className="text-zinc-200">Habit Tracker App:</strong> Designed a complete responsive daily tracking layout with custom micro-animations, local state triggers, and beautiful category logs.
              </li>
              <li>
                <strong className="text-zinc-200">Algorithm Maze Generator:</strong> Developed visual node solvers using breadth-first and depth-first searches, representing grid maps beautifully in JSX.
              </li>
              <li>
                <strong className="text-zinc-200">Analytical Chart Debugs:</strong> Diagnosed and rewrote responsive width properties on Recharts canvas bindings, preventing render overflows.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}

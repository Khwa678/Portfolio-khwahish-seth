import { useState } from "react";
import { GitFork, Star, Flame, Award, GitCommit, ExternalLink } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
export default function GitHubStats({ darkMode }) {
  const [activeRepo, setActiveRepo] = useState(null);
  const [heatmapYear, setHeatmapYear] = useState(2026);
  const [commitsCount, setCommitsCount] = useState(382);
  const repos = [
    {
      name: "sydney-events-aggregator",
      description: "Full-stack MERN application for aggregating and archiving real-time local events in Sydney using Cheerio scrapers and JWT security.",
      language: "JavaScript",
      languageColor: "bg-yellow-400 text-zinc-950",
      forks: 4,
      stars: 12,
      url: "https://github.com/Khwa678/sydney-events-aggregator",
      points: "MERN Stack"
    },
    {
      name: "curalink-healthcare",
      description: "Virtual doctor-patient clinic dashboard providing optimized queue-managing queries, schedule controls, and appointment lockers.",
      language: "React",
      languageColor: "bg-cyan-500 text-zinc-950",
      forks: 3,
      stars: 9,
      url: "https://github.com/Khwa678/curalink-healthcare",
      points: "REST APIs"
    },
    {
      name: "100_days_100_web_project",
      description: "Contributed modular apps to this high-intensity catalog, including a client-side Habit Tracker app and algorithm maze traversals.",
      language: "CSS & HTML",
      languageColor: "bg-purple-500 text-white",
      forks: 2,
      stars: 7,
      url: "https://github.com/Khwa678",
      points: "Open Source"
    },
    {
      name: "competitive-programming-cpp",
      description: "Curated templates, Segment Trees, Trie implementations, graph search templates, and fast I/O scripts under C++.",
      language: "C++",
      languageColor: "bg-pink-500 text-white",
      forks: 1,
      stars: 15,
      url: "https://github.com/Khwa678",
      points: "DSA Codes"
    }
  ];
  const languageData = [
    { name: "JavaScript", value: 45, color: "#facc15" },
    { name: "React / TS", value: 30, color: "#22d3ee" },
    { name: "C++", value: 15, color: "#ec4899" },
    { name: "Python", value: 10, color: "#818cf8" }
  ];
  const drawHeatmap = () => {
    const days = 14 * 7;
    const cells = [];
    const intensities = [0, 1, 2, 3, 2, 1, 0, 1, 3, 4, 3, 2, 1, 0, 1, 2, 3, 1, 0, 4, 3, 2, 1, 2, 0, 0, 1, 2];
    for (let i = 0; i < days; i++) {
      const density = intensities[i % intensities.length];
      let bg = "bg-zinc-900";
      if (density === 1) bg = "bg-emerald-950";
      if (density === 2) bg = "bg-emerald-800";
      if (density === 3) bg = "bg-emerald-600";
      if (density === 4) bg = "bg-emerald-400";
      cells.push(
        <div
          key={i}
          className={`size-3.5 rounded-sm ${bg} transition-all duration-300 hover:scale-125 cursor-pointer relative group`}
        >
          {
          /* Tooltip */
        }
          <span className="opacity-0 group-hover:opacity-100 absolute bottom-5 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 border border-zinc-800 px-2 py-1 text-[8px] font-mono text-zinc-300 pointer-events-none rounded transition-opacity whitespace-nowrap">
            {density === 0 ? "No contributions" : `${density * 2} commits, Day ${i + 1}`}
          </span>
        </div>
      );
    }
    return cells;
  };
  const simulateCommit = () => {
    setCommitsCount((prev) => prev + 1);
  };
  return <div className="space-y-12 text-left">
      
      {
    /* GitHub telemetry stats banner */
  }
      <div className="border border-zinc-850 bg-[#070709] rounded-xl p-6 relative overflow-hidden flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center space-x-4">
          <div className="size-16 rounded-full border-2 border-emerald-400/50 p-1 bg-zinc-950 overflow-hidden">
            <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center font-mono text-xl font-bold text-emerald-400 uppercase">
              KS
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h3 className="text-lg font-bold text-white">Khwahish (@Khwa678)</h3>
              <span className="font-mono text-[8px] text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 font-black uppercase rounded px-1.5 py-0.5">
                VERIFIED SDE
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Active open source engineer specializing in responsive full-stack applications.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <a
    href="https://github.com/Khwa678"
    target="_blank"
    rel="noreferrer"
    className="flex items-center space-x-1 font-mono text-[10px] text-emerald-400 hover:underline"
  >
                <span>github.com/Khwa678</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>

        {
    /* Commit simulator trigger */
  }
        <div className="flex flex-col sm:flex-row gap-3 items-stretch lg:items-center">
          <button
    onClick={simulateCommit}
    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
  >
            <GitCommit className="size-4 animate-pulse" />
            <span>TRIGGER MOCK COMMIT</span>
          </button>
        </div>
      </div>

      {
    /* Streaks & Contribution Activity Matrix */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {
    /* Streak details & Commit counts (5 cols) */
  }
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="p-6 bg-zinc-950 border border-zinc-850 rounded-xl space-y-5 text-left flex-1 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                // CRITICAL STREAKS TRACKING
              </span>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                  <div className="flex items-center space-x-1 text-rose-400">
                    <Flame className="size-4 text-rose-400 fill-rose-500" />
                    <span className="text-zinc-400 text-[10px] font-mono font-bold uppercase">CURRENT STREAK</span>
                  </div>
                  <div className="text-2xl font-black text-rose-400 font-sans tracking-tight mt-1">21 Days</div>
                  <span className="text-[9px] text-zinc-500 font-mono">Consistently Active</span>
                </div>
                <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Award className="size-4 text-amber-400 fill-amber-500" />
                    <span className="text-zinc-400 text-[10px] font-mono font-bold uppercase">LONGEST STREAK</span>
                  </div>
                  <div className="text-2xl font-black text-amber-400 font-sans tracking-tight mt-1">45 Days</div>
                  <span className="text-[9px] text-zinc-500 font-mono">Peak Sprint Season</span>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-900/60 pt-4 mt-4 space-y-3 font-mono text-[10px]">
              <div className="flex justify-between items-center text-zinc-400">
                <span>TOTAL REPO COMMITS:</span>
                <span className="font-bold text-white">{commitsCount} Verified</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>PULL REQUESTS MERGED:</span>
                <span className="font-bold text-amber-400">12 Total</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>CONTRIBUTED REPOS:</span>
                <span className="font-bold text-cyan-400">4 Active</span>
              </div>
            </div>
          </div>
        </div>

        {
    /* Heatmap module & Grid View (7 cols) */
  }
        <div className="lg:col-span-7 p-6 bg-zinc-950 border border-zinc-850 rounded-xl space-y-4 text-left flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                // CODE CONTRIBUTION HEATMAP
              </span>
              <span className="font-mono text-[10px] text-zinc-400">
                Year: {heatmapYear}
              </span>
            </div>
            
            {
    /* Grid wrapper */
  }
            <div className="mt-4 p-4 bg-[#07070a] border border-zinc-900 rounded-lg">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 justify-center">
                {drawHeatmap()}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 pt-3 border-t border-zinc-900/40">
            <span className="flex items-center space-x-1">
              <span className="size-2 rounded-sm bg-zinc-900 border border-zinc-800" />
              <span>Less</span>
            </span>
            <div className="flex items-center space-x-1.5">
              <span className="size-2 rounded-sm bg-emerald-950" />
              <span className="size-2 rounded-sm bg-emerald-800" />
              <span className="size-2 rounded-sm bg-emerald-600" />
              <span className="size-2 rounded-sm bg-emerald-400" />
            </div>
            <span className="flex items-center space-x-1">
              <span>More Commits</span>
            </span>
          </div>
        </div>

      </div>

      {
    /* Language breakdown and Repository list */
  }
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {
    /* Language distribution list (4 col) */
  }
        <div className="md:col-span-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl space-y-4 text-left">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-2">
            // LANGUAGES METRICS
          </span>

          <div className="h-44 w-full flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
    data={languageData}
    cx="50%"
    cy="50%"
    innerRadius={45}
    outerRadius={65}
    paddingAngle={5}
    dataKey="value"
  >
                  {languageData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute text-center">
              <span className="font-sans font-black text-white text-base">MERN</span>
              <span className="font-mono text-[8px] text-zinc-400 block uppercase">CORE TECH</span>
            </div>
          </div>

          <div className="space-y-2 mt-4 font-mono text-[10px]">
            {languageData.map((item, idx) => <div key={idx} className="flex justify-between items-center text-zinc-400">
                <div className="flex items-center space-x-1.5">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name.toUpperCase()}</span>
                </div>
                <span className="text-zinc-500">{item.value}%</span>
              </div>)}
          </div>
        </div>

        {
    /* Repository inspector list (8 col) */
  }
        <div className="md:col-span-8 p-6 bg-zinc-950 border border-zinc-800 rounded-xl space-y-4 text-left">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-900 pb-2">
            // REPOSITORY REGISTRY
          </span>

          <div className="space-y-3">
            {repos.map((repo, idx) => {
    const isSelected = activeRepo === repo.name;
    return <div
      key={idx}
      onClick={() => setActiveRepo(isSelected ? null : repo.name)}
      className={`p-4 bg-zinc-900/40 border ${isSelected ? "border-emerald-400" : "border-zinc-900 hover:border-zinc-850"} rounded-lg cursor-pointer transition-all duration-300`}
    >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-white font-extrabold font-mono tracking-tight hover:underline">
                          {repo.name}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-mono leading-none font-bold ${repo.languageColor}`}>
                          {repo.points}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-xl mt-1.5">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3.5 text-xs text-zinc-500 font-mono pl-4">
                      <div className="flex items-center space-x-1">
                        <Star className="size-3.5 text-amber-500" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="size-3.5" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono mt-3 text-zinc-500">
                    <span className="flex items-center space-x-1.5">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span>{repo.language.toUpperCase()}</span>
                    </span>
                    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="text-emerald-400 hover:underline flex items-center space-x-1"
    >
                      <span>VIEW CODE_SOURCE</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>;
  })}
          </div>
        </div>

      </div>

    </div>;
}

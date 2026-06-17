import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Network, Atom, Server, Github, ArrowUpRight, Search, Sparkles, Layers } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
export default function Projects({}) {
  const [selectedMern, setSelectedMern] = useState("r");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [mongoStats, setMongoStats] = useState({
    activeUsers: 148,
    conversations: 1254,
    latency: "12ms",
    status: "CONNECTED_PRIMARY"
  });
  const [activeEndpoint, setActiveEndpoint] = useState("/api/chat");
  const [apiResponse, setApiResponse] = useState({
    status: 200,
    statusText: "OK",
    latency: "18ms",
    body: {
      assistant: "Khwahish's Co-pilot",
      status: "online",
      model: "gemini-3.5-flash",
      latency_optimize: "active"
    }
  });
  const fireExpressRoute = (route) => {
    setActiveEndpoint(route);
    if (route === "/api/chat") {
      setApiResponse({
        status: 200,
        statusText: "OK",
        latency: "15ms",
        body: {
          session_active: true,
          model: "gemini-3.5-flash",
          prompt_tokens: 148,
          reply: "Hello! Ready to analyze Khwahish's portfolio data."
        }
      });
    } else if (route === "/api/projects") {
      setApiResponse({
        status: 200,
        statusText: "OK",
        latency: "28ms",
        body: {
          count: PROJECTS.length,
          catalog: "Production-ready SDE profile",
          featured: "AI Resume Analyzer & DSACopilot"
        }
      });
    } else {
      setApiResponse({
        status: 200,
        statusText: "OK",
        latency: "4ms",
        body: {
          health: "perfect",
          port: 3e3,
          database_ping: "OK"
        }
      });
    }
  };
  const [renderCounter, setRenderCounter] = useState(1);
  const [virtualNodeClicked, setVirtualNodeClicked] = useState("PortfolioRoot");
  const [nodeCpuLoad, setNodeCpuLoad] = useState(4.2);
  const [heapLimit, setHeapLimit] = useState(48.2);
  const simulateNodeHeavyProcess = () => {
    setNodeCpuLoad(48.5);
    setHeapLimit(65.1);
    setTimeout(() => {
      setNodeCpuLoad(5.8);
      setHeapLimit(50.4);
    }, 1200);
  };
  const getSelectedMernTag = () => {
    if (selectedMern === "m") return "MongoDB";
    if (selectedMern === "e") return "Express";
    if (selectedMern === "r") return "React";
    if (selectedMern === "n") return "Node.js";
    return "";
  };
  const filteredProjects = PROJECTS.filter((project) => {
    const currentMernTag = getSelectedMernTag();
    const matchesMern = !currentMernTag || project.tags.some((t) => t.toLowerCase().includes(currentMernTag.toLowerCase()));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase()) || project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterTag === "All" || project.category === filterTag;
    return matchesMern && matchesSearch && matchesCategory;
  });
  return <section
    id="projects"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-2 pointer-events-none" />

      {
    /* Grid framework matching Kathryn Welch Sections */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 border-b border-zinc-800">
        
        {
    /* LEFT COMPARTMENT (lg:col-span-3) - Vertical Header & Filter Selection */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              05 / CORE DEVELOPMENT ENGINE
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              MERN
              <br />
              STACK
              <br />
              DASHBOARD
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-500 text-xs font-mono leading-relaxed mt-2">
              Instead of static mock catalog designs, tap the system models to inspect her live MERN stack architecture simulations in real-time.
            </p>
          </div>

          {
    /* Vertical Navigation switcher for M-E-R-N quadrants */
  }
          <div className="flex flex-col space-y-2 py-4">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
              SELECT MODULE ENGINE:
            </span>
            
            <button
    onClick={() => setSelectedMern("m")}
    className={`w-full text-left px-3 py-2.5 font-mono text-xs border transition-colors flex items-center justify-between ${selectedMern === "m" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <Database className="size-4" />
                <span>[M] - MONGODB</span>
              </div>
              <span className="text-[10px] font-bold">12ms</span>
            </button>

            <button
    onClick={() => setSelectedMern("e")}
    className={`w-full text-left px-3 py-2.5 font-mono text-xs border transition-colors flex items-center justify-between ${selectedMern === "e" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <Network className="size-4" />
                <span>[E] - EXPRESS</span>
              </div>
              <span className="text-[10px] font-bold">API</span>
            </button>

            <button
    onClick={() => setSelectedMern("r")}
    className={`w-full text-left px-3 py-2.5 font-mono text-xs border transition-colors flex items-center justify-between ${selectedMern === "r" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <Atom className="size-4" />
                <span>[R] - REACT.JS</span>
              </div>
              <span className="text-[10px] font-bold">V-DOM</span>
            </button>

            <button
    onClick={() => setSelectedMern("n")}
    className={`w-full text-left px-3 py-2.5 font-mono text-xs border transition-colors flex items-center justify-between ${selectedMern === "n" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 hover:border-zinc-800 text-zinc-400"}`}
  >
              <div className="flex items-center space-x-2">
                <Server className="size-4" />
                <span>[N] - NODE.JS</span>
              </div>
              <span className="text-[10px] font-bold">V8_VM</span>
            </button>
          </div>

          <div className="font-mono text-[9px] text-zinc-550 border-t border-zinc-800/60 pt-4">
            DB_REPLICA: US_EAST_PRIMARY
          </div>
        </div>

        {
    /* MIDDLE-RIGHT MAIN MODULE (lg:col-span-9) - Live State Simulator Panels */
  }
        <div className="lg:col-span-9 p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-[#070709]">
          
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              ACTIVE QUADRANT: {selectedMern.toUpperCase()} INTERACTIVE WIDGET
            </span>
            <span className="font-mono text-[9px] bg-zinc-900 border border-zinc-800 text-amber-500 px-2 py-0.5 rounded font-extrabold uppercase">
              REPLACES STATIC IMAGES
            </span>
          </div>

          {
    /* Quadrant Render Panes */
  }
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              
              {
    /* M - MONGODB COMPONENT */
  }
              {selectedMern === "m" && <motion.div
    key="m"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="space-y-6"
  >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {
    /* Diagnostic Cluster Status */
  }
                    <div className="p-4 bg-zinc-950 border border-zinc-850 rounded">
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase mb-1">
                        Instance Cluster State
                      </span>
                      <span className="text-sm font-bold text-emerald-400 block select-none flex items-center space-x-1.5">
                        <span className="size-2 bg-emerald-400 rounded-full animate-ping" />
                        <span>{mongoStats.status}</span>
                      </span>
                      <span className="text-zinc-500 text-[10px] font-mono block mt-1">
                        3-Nodes Replica Active • v6.0.8
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-950 border border-zinc-850 rounded">
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase mb-1">
                        Avg Query Latency
                      </span>
                      <span className="text-lg font-bold text-amber-400 block font-mono">
                        {mongoStats.latency}
                      </span>
                      <span className="text-zinc-500 text-[10px] font-mono block mt-1">
                        Index seeks prioritized (B-Tree)
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-950 border border-zinc-850 rounded">
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase mb-1">
                        Durable Write-Concern
                      </span>
                      <span className="text-sm font-bold text-white block">
                        w: "majority" | j: true
                      </span>
                      <span className="text-zinc-500 text-[10px] font-mono block mt-1">
                        Journaling persistence guarantees
                      </span>
                    </div>

                  </div>

                  {
    /* Simulated Database collection grid */
  }
                  <div className="p-4 bg-zinc-950 border border-zinc-850 rounded text-left">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-3">
                      COLLECTIONS SCHEMA & DOCUMENT INDEX (MongoDB Simulation)
                    </span>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
    { name: "projects", docs: PROJECTS.length, fields: "_id, title, git, tags, category" },
    { name: "leetcode_cache", docs: 452, fields: "_id, difficulty, timestamp, solution" },
    { name: "bot_transcripts", docs: mongoStats.conversations, fields: "_id, message, intent, duration" },
    { name: "auth_sessions", docs: mongoStats.activeUsers, fields: "_id, token, handshake_ip, expires" }
  ].map((col, idx) => <div key={idx} className="p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-colors">
                          <span className="font-mono text-[10px] text-amber-400 font-bold block">
                            db.{col.name}
                          </span>
                          <span className="text-white text-xs font-bold block mt-1">
                            {col.docs} documents
                          </span>
                          <span className="text-[9px] font-mono text-zinc-500 block truncate mt-1">
                            {col.fields}
                          </span>
                        </div>)}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-900">
                      <span className="text-[10px] font-mono text-zinc-400">
                        *Interact above to filter Khwahish's projects below built primarily with MongoDB and NoSQL.
                      </span>
                      <button
    onClick={() => setMongoStats((prev) => ({
      ...prev,
      latency: "9ms",
      conversations: prev.conversations + 1,
      activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1
    }))}
    className="px-2.5 py-1 bg-amber-400 text-black font-semibold text-[9px] uppercase tracking-wider font-mono hover:bg-white transition-all rounded"
  >
                        Trigger Index Vacuum
                      </button>
                    </div>

                  </div>
                </motion.div>}

              {
    /* E - EXPRESS COMPONENT */
  }
              {selectedMern === "e" && <motion.div
    key="e"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="space-y-6 text-left"
  >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {
    /* Endpoints router switches (col-span-4) */
  }
                    <div className="md:col-span-4 space-y-2">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-2">
                        CHOOSE EXPRESS API BOUNDARY:
                      </span>
                      
                      <button
    onClick={() => fireExpressRoute("/api/chat")}
    className={`w-full text-left px-3 py-1.5 font-mono text-[11px] border rounded ${activeEndpoint === "/api/chat" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 text-zinc-300 hover:border-zinc-800"}`}
  >
                        POST /api/chat
                      </button>

                      <button
    onClick={() => fireExpressRoute("/api/projects")}
    className={`w-full text-left px-3 py-1.5 font-mono text-[11px] border rounded ${activeEndpoint === "/api/projects" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 text-zinc-300 hover:border-zinc-800"}`}
  >
                        GET /api/projects
                      </button>

                      <button
    onClick={() => fireExpressRoute("/api/health")}
    className={`w-full text-left px-3 py-1.5 font-mono text-[11px] border rounded ${activeEndpoint === "/api/health" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-950 border-zinc-850 text-zinc-300 hover:border-zinc-800"}`}
  >
                        GET /api/health
                      </button>

                      <div className="pt-2">
                        <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                          Express server processes requests through Vite's local dev proxy configuration and binds automatically to port 3000.
                        </p>
                      </div>
                    </div>

                    {
    /* Console Response pane (col-span-8) */
  }
                    <div className="md:col-span-8 flex flex-col bg-zinc-950 border border-zinc-850 rounded overflow-hidden">
                      <div className="px-3 py-1.5 bg-[#0e0e11] border-b border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-550">
                        <span>Terminal Output Console</span>
                        <span className="text-emerald-400 font-bold">{apiResponse.status} {apiResponse.statusText}</span>
                      </div>
                      
                      {
    /* JSON Response frame */
  }
                      <div className="p-4 bg-[#050507] font-mono text-[11px] leading-relaxed text-cyan-200 overflow-x-auto min-h-[140px]">
                        <pre>
                          <code>
                            {`HTTP/1.1 ${apiResponse.status} ${apiResponse.statusText}
Content-Type: application/json
X-Response-Time: ${apiResponse.latency}

`}
                            {JSON.stringify(apiResponse.body, null, 2)}
                          </code>
                        </pre>
                      </div>

                      <div className="px-3 py-1.5 bg-[#0e0e11] border-t border-zinc-850 text-[10px] font-mono text-zinc-500">
                        Middlewares: express.json(), requestLogger(), helmet()
                      </div>

                    </div>

                  </div>
                </motion.div>}

              {
    /* R - REACT.JS DOM TREE COMPONENT */
  }
              {selectedMern === "r" && <motion.div
    key="r"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="space-y-6"
  >
                  <p className="text-zinc-400 text-xs text-left">
                    React 19 manages a performance-oriented Virtual DOM. Click on any node below to simulate client-side state hooks triggering element reconciliations.
                  </p>

                  <div className="p-4 bg-zinc-950 border border-zinc-850 rounded flex flex-col items-center">
                    
                    {
    /* The Visual Node Tree */
  }
                    <div className="flex flex-col items-center space-y-4 w-full">
                      
                      {
    /* Root node */
  }
                      <button
    onClick={() => {
      setVirtualNodeClicked("PortfolioRoot");
      setRenderCounter((prev) => prev + 1);
    }}
    className={`px-4 py-2 font-mono text-xs border rounded transition-all select-all ${virtualNodeClicked === "PortfolioRoot" ? "bg-amber-400 border-black text-black font-extrabold" : "bg-zinc-900 border-zinc-800 text-white"}`}
  >
                        &lt;App /&gt; (Re-renders: {renderCounter})
                      </button>

                      {
    /* Bridge Line */
  }
                      <div className="w-0.5 h-4 bg-zinc-800" />

                      {
    /* Child branch row */
  }
                      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                        
                        <button
    onClick={() => {
      setVirtualNodeClicked("HeaderNav");
      setRenderCounter((prev) => prev + 1);
    }}
    className={`px-2 sm:px-3 py-1.5 font-mono text-[10px] border rounded transition-all ${virtualNodeClicked === "HeaderNav" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-900 border-zinc-800 text-zinc-300"}`}
  >
                          &lt;Header /&gt;
                        </button>

                        <button
    onClick={() => {
      setVirtualNodeClicked("MernArena");
      setRenderCounter((prev) => prev + 1);
    }}
    className={`px-2 sm:px-3 py-1.5 font-mono text-[10px] border rounded transition-all ${virtualNodeClicked === "MernArena" ? "bg-amber-400 border-black text-black font-bold hover:bg-amber-300" : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"}`}
  >
                          &lt;MernEngine /&gt; <span className="text-[10px] text-amber-500">(Active)</span>
                        </button>

                        <button
    onClick={() => {
      setVirtualNodeClicked("ChatCopilot");
      setRenderCounter((prev) => prev + 1);
    }}
    className={`px-2 sm:px-3 py-1.5 font-mono text-[10px] border rounded transition-all ${virtualNodeClicked === "ChatCopilot" ? "bg-amber-400 border-black text-black font-bold" : "bg-zinc-900 border-zinc-800 text-zinc-300"}`}
  >
                          &lt;AiAssistant /&gt;
                        </button>

                      </div>

                    </div>

                    {
    /* Technical details explaining the hooks */
  }
                    <div className="mt-6 pt-4 border-t border-zinc-850 w-full text-left flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Focused state node: <strong className="text-white">&lt;{virtualNodeClicked} /&gt;</strong></span>
                      <span>Render trigger: <strong className="text-amber-400">useSyncExternalStore / fiber_tree</strong></span>
                    </div>

                  </div>
                </motion.div>}

              {
    /* N - NODE.JS SYSTEM INSTANCE */
  }
              {selectedMern === "n" && <motion.div
    key="n"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="space-y-6 text-left"
  >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {
    /* Performance Counters Panel */
  }
                    <div className="space-y-4">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                        V8 ENGINE RESOURCE MONITOR:
                      </span>

                      {
    /* CPU Bar indicator */
  }
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                          <span>Node ThreadPool CPU Load</span>
                          <span className={`${nodeCpuLoad > 30 ? "text-amber-400 font-bold" : ""}`}>
                            {nodeCpuLoad}%
                          </span>
                        </div>
                        <div className="h-2 bg-zinc-950 rounded overflow-hidden">
                          <motion.div
    animate={{ width: `${nodeCpuLoad}%` }}
    className={`h-full ${nodeCpuLoad > 30 ? "bg-amber-400" : "bg-cyan-500"}`}
  />
                        </div>
                      </div>

                      {
    /* Memory Bar indicator */
  }
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                          <span>V8 Heap Allocated Storage</span>
                          <span>{heapLimit}MB / 512MB</span>
                        </div>
                        <div className="h-2 bg-zinc-950 rounded overflow-hidden">
                          <motion.div
    animate={{ width: `${heapLimit / 512 * 100}%` }}
    className="h-full bg-purple-500"
  />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
    onClick={simulateNodeHeavyProcess}
    className="px-4 py-2 bg-white hover:bg-zinc-200 text-black font-mono font-bold text-[10px] uppercase tracking-wider rounded select-all"
  >
                          Simulate Heavy Event Loop Call
                        </button>
                      </div>
                    </div>

                    {
    /* Simulated Stream Log console */
  }
                    <div className="bg-zinc-955 border border-zinc-850 p-4 rounded flex flex-col justify-between font-mono text-[10px] leading-relaxed text-zinc-400">
                      <div>
                        <span className="text-zinc-500 text-[9px] block uppercase tracking-wider mb-2 font-bold">
                          Stream Stdout Log Logs
                        </span>
                        <div className="space-y-1 text-[#04d9c4]">
                          <div>[NODE_SYS] Booting Node.js runtime thread clusters...</div>
                          <div>[EVENT_LP] Binding Event loop channels on file decs</div>
                          <div>[LIB_UV] UV threadpool initialized with 4 threads</div>
                          <div>[STREAM] Pipeline opened on process.stdout</div>
                          <div>[SERVER] Express route bindings applied correctly.</div>
                          <div className={nodeCpuLoad > 30 ? "text-amber-400 font-bold animate-pulse" : "text-zinc-500"}>
                            {nodeCpuLoad > 30 ? ">> [LIB_UV] Running async crypto.pbkdf2 benchmark hashing..." : ">> Event loop loop status: IDLE"}
                          </div>
                        </div>
                      </div>

                      <div className="text-[9px] border-t border-zinc-900 pt-3 text-zinc-550 mt-4 leading-none">
                        ENV: NODE_ENV: "production" | OS: Linux Unix kernel
                      </div>
                    </div>

                  </div>
                </motion.div>}

            </AnimatePresence>
          </div>

        </div>

      </div>

      {
    /* COMPACT FILTERED PROJECTS DRAWER (Below MERN engine) */
  }
      <div id="projects-browser-flow" className="p-6 sm:p-8 space-y-8 bg-[#0a0a0c]">
        
        {
    /* Horizontal controls */
  }
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-zinc-800/60 pb-6">
          <div className="space-y-1 text-left">
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest font-extrabold flex items-center space-x-1">
              <Sparkles className="size-3 text-amber-400 fill-amber-400" />
              <span>06 / EXPERIMENTAL CASE STUDIES</span>
            </span>
            <h3 className="text-lg font-bold tracking-tight text-white font-sans">
              Filtered Portfolio: <span className="text-amber-400">"{getSelectedMernTag()}"</span> Integrations
            </h3>
          </div>

          {
    /* Quick search */
  }
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-zinc-500" />
            <input
    type="text"
    placeholder="Search title, tech stack..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full pl-9 pr-8 py-2 bg-zinc-950 text-white font-mono text-xs border border-zinc-850 rounded focus:border-zinc-800 outline-none"
  />
          </div>
        </div>

        {
    /* Categories Tab selectors */
  }
        <div className="flex flex-wrap gap-2 text-left">
          {["All", "AI / ML", "Full Stack", "Coding Tools", "Web Apps"].map((tab, idx) => <button
    key={idx}
    onClick={() => setFilterTag(tab)}
    className={`px-3 py-1 font-mono text-[10px] transition-colors border select-none ${filterTag === tab ? "bg-white text-black font-extrabold border-white" : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white"}`}
  >
              {tab.toUpperCase()}
            </button>)}
        </div>

        {
    /* Projects Cards bento-like listing */
  }
        {filteredProjects.length === 0 ? <div className="text-center py-12 border border-dashed border-zinc-800 rounded">
            <Layers className="size-8 text-zinc-550 mx-auto mb-2 opacity-50" />
            <span className="font-mono text-xs text-zinc-500 block">
              No matching projects compiled in current registry.
            </span>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => <motion.div
    layout
    key={project.id}
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.3, delay: idx * 0.03 }}
    className="p-5 bg-zinc-950 border border-zinc-850 rounded hover:border-zinc-800 transition-colors flex flex-col justify-between group"
  >
                  <div className="space-y-4">
                    {
    /* Cover label */
  }
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                      <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                        Case: 0{idx + 1} // {project.category}
                      </span>
                      {project.featured && <span className="font-mono text-[9px] text-amber-400 font-extrabold flex items-center space-x-1 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-400/20">
                          <span className="size-1 bg-amber-400 rounded-full" />
                          <span>FEATURED</span>
                        </span>}
                    </div>

                    <h4 className="text-md font-bold tracking-tight text-white font-sans group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <p className="text-zinc-500 text-[11px] leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-905 flex flex-col space-y-4">
                    {
    /* Tags deck */
  }
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => <span
    key={tagIndex}
    className="px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-[9px] font-mono text-zinc-400 font-bold"
  >
                          {tag}
                        </span>)}
                    </div>

                    {
    /* Actions panel */
  }
                    <div className="flex items-center space-x-4 pt-1 font-mono text-[10px]">
                      <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
    className="text-zinc-400 hover:text-white flex items-center space-x-1"
  >
                        <Github className="size-4" />
                        <span>GIT_REPO</span>
                      </a>
                      <a
    href={project.liveUrl}
    target="_blank"
    rel="noreferrer"
    className="text-amber-400 hover:text-white flex items-center space-x-1 font-bold"
  >
                        <span>LIVE_DEPLOY</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>)}
            </AnimatePresence>
          </div>}

      </div>
    </section>;
}

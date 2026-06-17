import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";
import { Award, ShieldCheck, Trophy, ExternalLink, Search, CheckCircle, X } from "lucide-react";
export default function Achievements({ darkMode }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const solvedBreakdown = [
    { name: "LeetCode Medium", value: 95, color: "#f59e0b" },
    // Warm Amber
    { name: "LeetCode Easy", value: 45, color: "#10b981" },
    // Emerald
    { name: "LeetCode Hard", value: 10, color: "#ef4444" }
    // Rose
  ];
  const skillProfile = [
    { subject: "Dynamic Prog.", level: 85 },
    { subject: "Trees & Graphs", level: 90 },
    { subject: "Recursion & Math", level: 88 },
    { subject: "System Design", level: 70 },
    { subject: "Greedy / Sorting", level: 92 },
    { subject: "Bit Manip.", level: 75 }
  ];
  const certificates = [
    {
      id: "cisco-ccst-cyber",
      title: "Cisco Certified Support Technician (CCST) Cybersecurity",
      issuer: "Cisco",
      date: "August 2025",
      credentialId: "fjecvyfpuoe7",
      verificationUrl: "https://verify.skilljar.com/c/fjecvyfpuoe7",
      category: "security_infra",
      signature: "Sonia Lamba, Global Lead Cybersecurity Academy",
      badgeColor: "from-blue-600 via-blue-500 to-cyan-500",
      accentColor: "#3b82f6",
      tags: ["Threat Intelligence", "Network Security", "Endpoint Defense", "OSI Model Sec"],
      description: "Demonstrates entry-level cybersecurity knowledge including security principles, network security, endpoint security, and vulnerability management."
    },
    {
      id: "python-pcap",
      title: "PCAP: Certified Associate in Python Programming",
      issuer: "Python Institute",
      date: "October 2025",
      credentialId: "PCAP-31-03",
      verificationUrl: "https://pythoninstitute.org",
      category: "coding",
      signature: "Marcin Klubinski, Director of Credentials",
      badgeColor: "from-yellow-500 via-yellow-400 to-blue-500",
      accentColor: "#facc15",
      tags: ["Object-Oriented Coding", "Control Structures", "Advanced Modules", "Data Streams"],
      description: "Covers standard coding semantics, procedural optimization patterns, modular structures, and standard runtime execution engines in Python 3."
    },
    {
      id: "ibm-gen-ai",
      title: "Develop Generative AI Applications with Python & OpenAI",
      issuer: "IBM",
      date: "March 2026",
      credentialId: "IBM-GENAI-78921",
      verificationUrl: "https://www.coursera.org",
      category: "ai_ml",
      signature: "Rav Ahuja, Global Program Director",
      badgeColor: "from-purple-500 via-purple-600 to-indigo-600",
      accentColor: "#8b5cf6",
      tags: ["LLM Orchestration", "Python", "API Gateways", "Prompt Engineering"],
      description: "In-depth specialization targeting Large Language Model prompt injections, secure API gateways, text-generation pipelines, and RAG architectures."
    },
    {
      id: "dl-supervised-ml",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "January 2026",
      credentialId: "DLAI-ML-4410",
      verificationUrl: "https://www.coursera.org/specializations/machine-learning-introduction",
      category: "ai_ml",
      signature: "Andrew Ng, Founder & CEO of DeepLearning.AI",
      badgeColor: "from-orange-500 via-red-500 to-amber-500",
      accentColor: "#f97316",
      tags: ["Linear Regression", "Logistic Classification", "Cost Functions", "Vectorization"],
      description: "Rigorous mathematical modeling covering multi-feature linear equations, gradient descent algorithms, logistic cost structures, and regularized variables."
    },
    {
      id: "oracle-cloud-oci",
      title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
      issuer: "Oracle",
      date: "May 2025",
      credentialId: "OCI-FOUND-2025",
      verificationUrl: "https://education.oracle.com",
      category: "security_infra",
      signature: "Damien Carey, Senior Vice President Oracle University",
      badgeColor: "from-[#ff0000] to-[#b30000]",
      accentColor: "#ef4444",
      tags: ["Compute Instances", "Virtual Networks", "Identity Management", "Autonomous Data"],
      description: "Hands-on foundation covering serverless functions, multi-region virtual cloud networks (VCN), security layers, and Autonomous relational databases."
    },
    {
      id: "aws-cloud-prac",
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "November 2025",
      credentialId: "AWS-CCP-984210",
      verificationUrl: "https://aws.amazon.com/certification",
      category: "security_infra",
      signature: "Maureen Lonergan, Director AWS Training & Certification",
      badgeColor: "from-orange-400 to-blue-600",
      accentColor: "#60a5fa",
      tags: ["AWS Elastic Compute", "IAM Security Policies", "VPC Gateways", "CloudTrail Logs"],
      description: "Identifies core infrastructure design guidelines, security structures, billing setups, and high-availability server patterns on Amazon Web Services."
    },
    {
      id: "gcp-foundations",
      title: "Google Cloud Computing Foundations",
      issuer: "Google Cloud",
      date: "September 2025",
      credentialId: "GCP-FOUND-8842",
      verificationUrl: "https://cloud.google.com/training",
      category: "security_infra",
      signature: "Ted Brodheim, Global Director GCP Education Solutions",
      badgeColor: "from-blue-550 via-red-500 to-yellow-500",
      accentColor: "#4285f4",
      tags: ["Google Kubernetes Engine", "BigQuery SQL", "Cloud Storage Buckets", "VPC Networking"],
      description: "Mastery of infrastructure components, virtual machines, container orchestration with Kubernetes, SQL warehouses, and cloud resource policies."
    },
    {
      id: "jpmc-forage",
      title: "Software Engineering Job Simulation",
      issuer: "Forage (JPMorgan)",
      date: "December 2025",
      credentialId: "JPMC-SWE-SIM-25",
      verificationUrl: "https://theforage.com",
      category: "coding",
      signature: "Forage SDE Program Directors & JPMorgan Lead Eng",
      badgeColor: "from-blue-900 to-zinc-800",
      accentColor: "#1e3a8a",
      tags: ["Financial Streams", "React", "State Synchronization", "Data Visualizers"],
      description: "Refactored continuous data streams utilizing React components, updated dynamic trading graphs (Perspective canvas), and resolved git conflicts."
    },
    {
      id: "deloitte-forage",
      title: "Technology Consulting Virtual Simulation",
      issuer: "Forage (Deloitte)",
      date: "October 2025",
      credentialId: "DEL-CONS-SIM-25",
      verificationUrl: "https://theforage.com",
      category: "enterprise",
      signature: "Deloitte Careers & Virtual Strategy Steering Committee",
      badgeColor: "from-green-500 via-emerald-600 to-zinc-950",
      accentColor: "#10b981",
      tags: ["System Architecture", "Cloud Migration", "Risk Mitigation", "Agile Roadmap"],
      description: "Consulted on legacy stack virtualization plans, formulated secure hosting criteria, and proposed dynamic scale strategies."
    },
    {
      id: "mckinsey-forward",
      title: "Forward Professional Program Scholar",
      issuer: "McKinsey",
      date: "January 2026",
      credentialId: "MCK-FWD-99824",
      verificationUrl: "https://www.mckinsey.com",
      category: "enterprise",
      signature: "McKinsey Academy Foundation Board",
      badgeColor: "from-blue-950 via-cyan-900 to-zinc-900",
      accentColor: "#06b6d4",
      tags: ["Structured Analysis", "Agile Workflows", "Problem Framing", "Digital Adaptability"],
      description: "Advanced program focus on digital data strategies, systems frameworks, behavioral adaptability, and structured team communication."
    },
    {
      id: "hackerrank-swe-intern",
      title: "Software Engineer Intern Certificate",
      issuer: "HackerRank",
      date: "December 2025",
      credentialId: "HR-SWEINT-883",
      verificationUrl: "https://www.hackerrank.com/certificates",
      category: "coding",
      signature: "Hari Karunanidhi, Co-Founder & CTO HackerRank",
      badgeColor: "from-emerald-500 to-zinc-900",
      accentColor: "#10b981",
      tags: ["Advanced Problem Solving", "SQL Indexing", "OOP Logic", "Functional Optimization"],
      description: "Rigorous testing of automated algorithmic challenges, complex nested queries, data structures modeling, and memory optimization."
    }
  ];
  const categories = [
    { id: "all", label: "All Credentials" },
    { id: "security_infra", label: "Cloud & Security" },
    { id: "ai_ml", label: "AI & Machine Learning" },
    { id: "coding", label: "Coding & Simulations" },
    { id: "enterprise", label: "Corporate Programs" }
  ];
  const filteredCerts = certificates.filter((cert) => {
    const matchesCategory = activeCategory === "all" || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) || cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return <section id="credentials-credentials" className="relative text-white overflow-hidden bg-[#070709] border-b border-zinc-800">
      
      {
    /* Upper compartmental grids: Solves & Analytics */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 border-b border-zinc-800">
        
        {
    /* LEFT CARD - Dynamic Leetcode integration */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c] text-left">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-400 block font-bold">
              07 / ALGORITHMIC PROFILE
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              LEETCODE
              <br />
              DASHBOARD
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-450 text-xs font-mono leading-relaxed mt-2 select-text">
              Real-time connected competitive programming statistics for active handle <span className="text-amber-400 font-bold hover:underline">@Khw100_</span>.
            </p>
          </div>

          <div className="space-y-3.5 p-4 bg-[#070709] border border-zinc-850 rounded-lg">
            <div className="flex items-center space-x-2 text-zinc-300 font-mono text-xs">
              <Trophy className="size-4 text-amber-400" />
              <span className="font-bold">Contest Level: 1750+</span>
            </div>
            <p className="text-zinc-500 text-[11px] font-mono leading-relaxed">
              Consistently submitting recursive, logarithmic and graph structures under strict contest timeframes.
            </p>
            <a
    href="https://leetcode.com/u/Khw100_/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-flex items-center space-x-1.5 text-xs text-amber-400 font-mono font-bold hover:underline"
  >
              <span>Verify Core Profile</span>
              <ExternalLink className="size-3" />
            </a>
          </div>

          <span className="font-mono text-[9px] text-zinc-550 select-text">PLATFORM_RECORDS: LEETCODE / HACKERRANK</span>
        </div>

        {
    /* COMPARTMENT 2 - Solving analytics charts */
  }
        <div className="lg:col-span-9 p-6 sm:p-8 space-y-8 bg-[#070709]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-850 pb-4 gap-2 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 font-bold">
              ALGORITHMIC ENGINE DIAGNOSTICS (CONNECTED RECHARTS)
            </span>
            <span className="font-mono text-[10px] text-zinc-500">// HANDLES: @Khw100_ • VERIFIED_DATA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {
    /* Pie Chart */
  }
            <div className="p-6 bg-[#0a0a0d] border border-zinc-850 hover:border-zinc-805 transition-all rounded-xl flex flex-col justify-between relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">LeetCode Solved</span>
                  <span className="text-xs bg-zinc-900 text-amber-400 font-mono px-2 py-0.5 rounded border border-zinc-850">150+ ACTIVE</span>
                </div>

                <div className="h-44 relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
    data={solvedBreakdown}
    cx="50%"
    cy="50%"
    innerRadius={50}
    outerRadius={70}
    paddingAngle={4}
    dataKey="value"
  >
                        {solvedBreakdown.map((entry, idx) => <Cell key={`cell-${idx}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip
    contentStyle={{
      backgroundColor: "#070709",
      borderColor: "#27272a",
      fontSize: "11px",
      fontFamily: "monospace",
      color: "#ffffff"
    }}
  />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="absolute text-center">
                    <span className="text-2xl font-black font-sans text-white select-all">150+</span>
                    <span className="text-[8px] uppercase font-mono text-zinc-500 tracking-widest block leading-none mt-0.5">solved</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-zinc-900/65 pt-4 mt-4 font-mono text-[9px]">
                {solvedBreakdown.map((item, idx) => <div key={idx} className="bg-zinc-950 p-2 border border-zinc-900 text-center rounded hover:border-zinc-800 transition-colors">
                    <span className="text-zinc-500 block truncate">{item.name.replace("LeetCode ", "")}</span>
                    <span className="text-xs font-black block mt-0.5" style={{ color: item.color }}>
                      {item.value}
                    </span>
                  </div>)}
              </div>
            </div>

            {
    /* Radar Chart */
  }
            <div className="p-6 bg-[#0a0a0d] border border-zinc-855 hover:border-zinc-805 transition-all rounded-xl flex flex-col justify-between relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Topic Assessments</span>
                  <span className="text-[10px] text-zinc-500 font-mono">ID: PROFILE_RADAR</span>
                </div>

                <div className="h-44 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillProfile}>
                      <PolarGrid stroke="#1e1e24" />
                      <PolarAngleAxis
    dataKey="subject"
    tick={{ fill: "#a1a1aa", fontSize: 9, fontFamily: "monospace" }}
  />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#3f3f46", fontSize: 8 }} />
                      <Radar
    name="Assessed Skill"
    dataKey="level"
    stroke="#22d3ee"
    fill="#22d3ee"
    fillOpacity={0.15}
  />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="border-t border-zinc-900/65 pt-3 mt-4 text-center text-zinc-500 font-mono text-[9px]">
                Assessment score averages based on 250+ hours of platform runtimes.
              </div>
            </div>

          </div>
        </div>

      </div>

      {
    /* LOWER COMPARTMENT: The Digital Badge & Credentials Vault */
  }
      <div className="p-6 sm:p-8 space-y-8 bg-[#0a0a0c]">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-6 text-left">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase block tracking-wider mb-1">
              08 / FORMAL VERIFIABLE BADGES
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white font-sans uppercase">
              CERTIFICATIONS VAULT
            </h3>
            <p className="text-zinc-500 text-xs font-sans mt-1">
              Verified global SDE program accomplishments and professional course credentials. Click any card to inspect or test verification.
            </p>
          </div>

          {
    /* Verification info badge */
  }
          <div className="px-4 py-2.5 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center space-x-2 text-[10px] font-mono text-emerald-400">
            <CheckCircle className="size-4 shrink-0" />
            <span>ALL BADGES DIGITALLY ALIGNED FOR LIVE INTEGRITIY SEC</span>
          </div>
        </div>

        {
    /* Certificate Photo Showcase Block */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-zinc-850 bg-[#0e0e12]/60 p-6 rounded-2xl mb-8">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-amber-400/5 border border-amber-400/20 text-amber-400 font-mono text-[9px] rounded uppercase font-bold">
              <Award className="size-3" />
              <span>Verifiable SDE Records</span>
            </span>
            <h4 className="text-xl font-bold font-sans tracking-tight text-white uppercase">
              Certifications & Credentials Proof
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
              Visual ledger compiling core verification transcripts. Credentials include Cisco CCST Cybersecurity, AWS Cloud Foundations, Python Institute PCAP Developer Associate, McKinsey Forward, and IBM OpenAI GenAI Specialization.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-[10px] font-mono text-zinc-500">
              <span className="flex items-center space-x-1"><CheckCircle className="size-3.5 text-emerald-400" /> <span>Cisco Verified</span></span>
              <span className="flex items-center space-x-1"><CheckCircle className="size-3.5 text-emerald-400" /> <span>AWS Certified</span></span>
              <span className="flex items-center space-x-1"><CheckCircle className="size-3.5 text-emerald-400" /> <span>IBM Verified</span></span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 group shadow-2xl">
              <img
    src="/src/assets/images/certificates_showcase_1781697611355.jpg"
    alt="Khwahish Seth Certifications Showcase"
    className="w-full h-full object-cover rounded-lg filter brightness-90 contrast-105 group-hover:brightness-100 transition-all duration-500"
    referrerPolicy="no-referrer"
  />
              <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm border border-zinc-800 text-[9px] font-mono font-bold text-amber-400 px-2.5 py-0.5 rounded uppercase tracking-wider">
                Digital Transcript Photo
              </div>
            </div>
          </div>
        </div>

        {
    /* SEARCH & FILTER CONTROLS */
  }
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {
    /* Categories Tab list */
  }
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => <button
    key={cat.id}
    onClick={() => setActiveCategory(cat.id)}
    className={`px-4 py-2 text-xs font-mono lowercase tracking-wide rounded-lg border transition-all cursor-pointer ${activeCategory === cat.id ? "bg-cyan-500/10 border-cyan-400 text-cyan-400" : "bg-zinc-950 border-zinc-900 text-slate-400 hover:text-white hover:border-zinc-800"}`}
  >
                # {cat.id === "all" ? "all-certificates" : cat.id.replace("_", "-")}
              </button>)}
          </div>

          {
    /* Search credential */
  }
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
    type="text"
    placeholder="Search by issuer, technology, tag..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-lg border bg-zinc-950 border-zinc-900 text-white focus:outline-none focus:border-cyan-400 transition-all select-text"
  />
          </div>

        </div>

        {
    /* CERTIFICATION CARDS BENTO-GRID */
  }
        {filteredCerts.length === 0 ? <div className="border border-zinc-900 bg-zinc-950/60 py-16 text-center rounded-xl font-mono text-xs text-zinc-500">
            <span>// NO MATCHING CREDENTIALS FOUND IN REGISTRY</span>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {filteredCerts.map((cert, idx) => {
    return <div
      key={cert.id}
      onClick={() => setSelectedCert(cert)}
      className="group bg-[#060608]/90 border border-zinc-900 hover:border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:bg-[#09090d]/80 cursor-pointer transition-all relative overflow-hidden"
    >
                  {
      /* Subtle color splash background */
    }
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none" style={{ backgroundColor: cert.accentColor }} />

                  <div className="space-y-4">
                    
                    {
      /* Header: Issuer and Badge Icon */
    }
                    <div className="flex items-center justify-between border-b border-zinc-950 pb-3">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-extrabold select-text">
                        {cert.issuer.toUpperCase()}
                      </span>
                      <div className="size-7 rounded bg-gradient-to-tr from-zinc-905 to-zinc-950 border border-zinc-900 p-[1px] flex items-center justify-center">
                        <Award className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {
      /* Title */
    }
                    <h4 className="text-xs sm:text-sm font-extrabold tracking-tight leading-snug text-white font-sans group-hover:text-amber-400 transition-colors select-text">
                      {cert.title}
                    </h4>

                    {
      /* Tags */
    }
                    <div className="flex flex-wrap gap-1">
                      {cert.tags.slice(0, 3).map((tag, tIdx) => <span key={tIdx} className="px-2 py-0.5 bg-zinc-950 border border-zinc-900 text-[8px] font-mono rounded text-zinc-400">
                          {tag}
                        </span>)}
                    </div>

                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 select-text">
                      {cert.description}
                    </p>

                  </div>

                  {
      /* Footer status bar */
    }
                  <div className="pt-4 mt-6 border-t border-zinc-950 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                    <span className="flex items-center space-x-1 select-none">
                      <ShieldCheck className="size-3 text-emerald-400" />
                      <span className="text-emerald-400 truncate">VERIFIED ID: {cert.credentialId.slice(0, 8)}...</span>
                    </span>
                    <span className="text-zinc-400 font-bold select-node">{cert.date}</span>
                  </div>

                </div>;
  })}
          </div>}

      </div>

      {
    /* DETAILED LIVE CERTIFICATE VERIFY MODAL PREVIEW */
  }
      <AnimatePresence>
        {selectedCert && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {
    /* Overlay background */
  }
            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedCert(null)}
    className="absolute inset-0 bg-black/90 backdrop-blur-md"
  />

            {
    /* Certificate viewport */
  }
            <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 15 }}
    transition={{ type: "spring", duration: 0.5 }}
    className="relative w-full max-w-3xl bg-[#09090c] border border-zinc-805 rounded-2xl overflow-hidden shadow-2xl"
  >
              
              {
    /* Top verification task bar */
  }
              <div className="p-4 bg-zinc-950 border-b border-zinc-900 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-zinc-400 font-bold">DIGITAL BADGE REGISTRY SERVICE V1.0</span>
                </div>
                <button
    onClick={() => setSelectedCert(null)}
    className="text-zinc-400 hover:text-white transition-colors cursor-pointer size-6 flex items-center justify-center"
  >
                  <X className="size-4" />
                </button>
              </div>

              {
    /* Verified handshake banner */
  }
              <div className="px-6 py-2.5 bg-emerald-500/10 border-b border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between text-left gap-2">
                <div className="flex items-center space-x-2 font-mono text-[10px] text-emerald-400">
                  <CheckCircle className="size-4 shrink-0" />
                  <span>CRYPTOGRAPHIC VERIFICATION SUCCESSFUL. OWNER IDENTIFIED IN SYSTEM DATABASE.</span>
                </div>
                <span className="font-mono text-[9px] text-zinc-400 tracking-wider">REGISTRY NO: {selectedCert.credentialId}</span>
              </div>

              {
    /* Main Certificate Visual Frame */
  }
              <div className="p-6 sm:p-12 bg-zinc-900 text-slate-800 relative selection:bg-amber-400/30">
                
                {
    /* Watermank background pattern */
  }
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-slate-400/5 blur-3xl pointer-events-none" />

                {
    /* Elegent classical certificates boarder */
  }
                <div className="border-[14px] border-double border-zinc-800 p-6 sm:p-10 relative bg-[#0d0d11] text-zinc-300 rounded-lg flex flex-col items-center text-center space-y-6">
                  
                  {
    /* Outer corner marks */
  }
                  <div className="absolute top-2 left-2 size-4 border-t-2 border-l-2 border-zinc-650" />
                  <div className="absolute top-2 right-2 size-4 border-t-2 border-r-2 border-zinc-650" />
                  <div className="absolute bottom-2 left-2 size-4 border-b-2 border-l-2 border-zinc-650" />
                  <div className="absolute bottom-2 right-2 size-4 border-b-2 border-r-2 border-zinc-650" />

                  {
    /* Header badges */
  }
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-amber-500 font-extrabold uppercase tracking-[0.25em] block leading-none">
                      VERIFIABLE CREDENTIAL SHEET
                    </span>
                    <h3 className="font-serif text-2xl font-light text-zinc-100 italic tracking-wider">
                      Certificate of Achievement
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider block">THIS DOCUMENT DECLARES THAT</span>
                    <h2 className="text-xl sm:text-2xl font-black font-sans text-white uppercase tracking-wider select-all border-b border-zinc-800 pb-2.5 max-w-md mx-auto">
                      Khwahish Seth
                    </h2>
                  </div>

                  <div className="space-y-2 max-w-xl">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider block">HAS SUCCESSFULLY FULFILLED ALL REQUIREMENTS TO EARN THE</span>
                    <h1 className="text-md sm:text-lg font-extrabold text-amber-400 tracking-tight leading-snug uppercase">
                      {selectedCert.title}
                    </h1>
                    <p className="text-zinc-400 text-xs leading-relaxed italic max-w-md mx-auto">
                      "{selectedCert.description}"
                    </p>
                  </div>

                  {
    /* Details matrix row */
  }
                  <div className="w-full border-y border-zinc-900 py-4 grid grid-cols-3 gap-2 font-mono text-[9px] text-zinc-500 text-center">
                    <div>
                      <span className="block text-zinc-600 uppercase font-bold">ISSUING BODY</span>
                      <span className="text-zinc-350 font-bold block mt-0.5 uppercase">{selectedCert.issuer}</span>
                    </div>
                    <div>
                      <span className="block text-zinc-600 uppercase font-bold">DATE EARNED</span>
                      <span className="text-zinc-350 font-bold block mt-0.5 uppercase">{selectedCert.date}</span>
                    </div>
                    <div>
                      <span className="block text-zinc-600 uppercase font-bold">CREDENTIAL ID</span>
                      <span className="text-cyan-400 hover:underline font-bold block mt-0.5 select-all uppercase">{selectedCert.credentialId}</span>
                    </div>
                  </div>

                  {
    /* Certificate signatures and stamp block */
  }
                  <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-6 gap-6 sm:gap-2">
                    
                    {
    /* Left: signature */
  }
                    <div className="text-left font-mono">
                      <div className="h-6 flex items-end">
                        <span className="text-[11px] font-serif italic text-zinc-400 select-all font-bold">
                          {selectedCert.signature.split(",")[0]}
                        </span>
                      </div>
                      <div className="w-40 border-t border-zinc-800 mt-1" />
                      <span className="text-[8px] text-zinc-550 uppercase block mt-1">VERIFIED OFFICER SIGNATURE</span>
                      <span className="text-[8px] text-zinc-600 block leading-tight">{selectedCert.signature.split(",")[1]}</span>
                    </div>

                    {
    /* Middle: Golden Seal Emblem mockup */
  }
                    <div className="relative flex items-center justify-center">
                      <div className="size-16 rounded-full border-4 border-double border-amber-500/30 flex items-center justify-center bg-amber-500/5 relative">
                        <Award className="size-6 text-amber-500/60" />
                        <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin [animation-duration:12s]" />
                      </div>
                      <div className="absolute font-mono text-[5px] text-amber-500/40 uppercase tracking-widest text-center w-24 -bottom-3">
                        DELIVERED • RECOGNIZED
                      </div>
                    </div>

                    {
    /* Right: official metadata hash */
  }
                    <div className="text-right font-mono text-[8px] text-zinc-600 max-w-xs shrink-0 leading-normal">
                      <span>SYSTEM_HASH: SEC_SHA256_{selectedCert.id.toUpperCase()}</span>
                      <br />
                      <span>SECURE KEY: ST_TLS_RSA_AES256</span>
                    </div>

                  </div>

                </div>

              </div>

              {
    /* Bottom verify link footer */
  }
              <div className="p-4 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between gap-4 flex-col sm:flex-row">
                <span className="font-mono text-[10px] text-zinc-500 text-left">
                  *This digital validation modal replicates verifiable PDF credentials. Click below to test live authenticity.
                </span>
                
                <a
    href={selectedCert.verificationUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-white text-black font-extrabold text-[11px] font-mono uppercase tracking-widest flex items-center justify-center space-x-2 rounded-lg transition-colors cursor-pointer shrink-0"
  >
                  <span>TEST LIVE AUTHENTICITY URL</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

            </motion.div>
          </div>}
      </AnimatePresence>

    </section>;
}

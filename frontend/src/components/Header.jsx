import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight, Code } from "lucide-react";
export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { id: "core", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "gssoc", label: "GSSoC Badges" },
    { id: "github", label: "GitHub Streaks" },
    { id: "credentials", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
    { id: "hire", label: "Hire Me" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const selectSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <header
    id="header-navigation"
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? darkMode ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20" : "bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm shadow-slate-200/10" : "bg-slate-950/40 backdrop-blur-sm border-b border-white/5 py-4"}`}
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {
    /* Logo */
  }
          <div
    id="header-logo"
    className="flex items-center space-x-2 cursor-pointer group flex-shrink-0"
    onClick={() => selectSection("core")}
  >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform">
              <Code className="size-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-bold text-base leading-tight tracking-tight ${darkMode ? "text-white group-hover:text-cyan-400" : "text-slate-900 group-hover:text-blue-600"} transition-colors`}>
                Khwahish
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-slate-400 leading-none">
                SDE CORE
              </span>
            </div>
          </div>

          {
    /* Desktop Navigation */
  }
          <nav id="desktop-nav" className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => <button
    key={item.id}
    onClick={() => selectSection(item.id)}
    className={`relative px-2.5 py-1.5 rounded-lg text-xs font-mono lowercase tracking-wide transition-all cursor-pointer ${activeSection === item.id ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-slate-450 hover:text-white hover:bg-zinc-900/40 border border-transparent"}`}
  >
                {item.id === "core" ? "home" : item.id}
                {activeSection === item.id && <motion.div
    layoutId="activeNavIndicator"
    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-cyan-400"
    transition={{ type: "spring", stiffness: 350, damping: 30 }}
  />}
              </button>)}
          </nav>

          {
    /* Backup condensed nav for large but non-xl screens */
  }
          <nav id="desktop-nav-condensed" className="hidden lg:flex xl:hidden items-center space-x-0.5">
            {navItems.slice(0, 6).map((item) => <button
    key={item.id}
    onClick={() => selectSection(item.id)}
    className={`px-2 py-1 rounded text-[11px] font-mono lowercase tracking-tight transition-all cursor-pointer ${activeSection === item.id ? "bg-cyan-500/10 text-cyan-400" : "text-slate-450 hover:text-white"}`}
  >
                {item.label.split(" ")[0]}
              </button>)}
            <button
    onClick={() => selectSection("hire")}
    className={`px-2.5 py-1 rounded text-[11px] font-mono border ${activeSection === "hire" ? "border-amber-400 text-amber-400" : "border-zinc-800 text-slate-400"}`}
  >
              hire_me
            </button>
          </nav>

          {
    /* Actions (Theme & CTA) */
  }
          <div id="header-actions" className="flex items-center space-x-3">
            {
    /* Theme Toggle */
  }
            <button
    id="theme-toggle-btn"
    onClick={() => setDarkMode(!darkMode)}
    className={`p-2 rounded-lg border transition-all cursor-pointer ${darkMode ? "bg-[#09090c] border-white/5 text-yellow-400 hover:bg-zinc-900" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-indigo-50"}`}
    aria-label="Toggle theme color"
  >
              {darkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            {
    /* Quick Consultation CTA */
  }
            <button
    id="hire-me-cta-nav"
    onClick={() => selectSection("hire")}
    className={`relative px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase font-mono flex items-center space-x-1.5 overflow-hidden group transition-all duration-300 border cursor-pointer ${activeSection === "hire" ? "bg-amber-400 text-black border-amber-400" : "bg-transparent border-zinc-800 text-zinc-300 hover:border-cyan-400 hover:text-cyan-400"}`}
  >
              <span>{activeSection === "hire" ? "ACTIVE_CONSULT" : "HIRE_SDE"}</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {
    /* Mobile burger controls */
  }
            <button
    id="burger-toggle-btn"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className={`lg:hidden p-2 rounded-lg border transition-all cursor-pointer ${darkMode ? "bg-slate-900 border-white/5 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
  >
              {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {
    /* Mobile Drawer */
  }
      <AnimatePresence>
        {mobileMenuOpen && <motion.div
    id="mobile-nav-panel"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.25 }}
    className={`lg:hidden border-b overflow-hidden ${darkMode ? "bg-slate-950 border-white/10" : "bg-white border-slate-250"}`}
  >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => <button
    key={item.id}
    onClick={() => selectSection(item.id)}
    className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-mono lowercase transition-all cursor-pointer ${activeSection === item.id ? "bg-cyan-500/10 text-cyan-400" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
  >
                  {item.id === "core" ? "home_core" : `# ${item.id}`}
                </button>)}
              <div className="pt-3 px-4 border-t border-slate-900 flex flex-col space-y-2">
                <button
    id="contact-mobile-action"
    onClick={() => selectSection("hire")}
    className="w-full py-2.5 rounded-lg text-[10px] font-bold font-mono uppercase tracking-wider text-center flex items-center justify-center space-x-2 bg-amber-400 text-slate-950"
  >
                  <span>SUBMIT_HIRING_CONTRACT_A4</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}

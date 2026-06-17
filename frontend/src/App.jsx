import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AiAssistant from "./components/AiAssistant.jsx";
import ResumeModal from "./components/ResumeModal.jsx";
import Blog from "./components/Blog.jsx";
import Resume from "./components/Resume.jsx";
import HireMe from "./components/HireMe.jsx";
import GSSoCBadges from "./components/GSSoCBadges.jsx";
import GitHubStats from "./components/GitHubStats.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("core");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  // Load and apply theme selection
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }

    // Simulate luxury dev startup sequence
    const loader = setTimeout(() => {
      setLoadingScreen(false);
    }, 1800);
    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    // Apply standard dark classes to HTML structure for Tailwind compilation
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [darkMode]);

  const scrollToSectionId = (id) => {
    setActiveSection(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      id="root-theme-wrapper"
      className={`min-h-screen text-slate-900 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      
      {/* Premium Loader Overlay */}
      <AnimatePresence>
        {loadingScreen && (
          <motion.div
            id="global-portal-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-slate-950 flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer spinning aura rings */}
              <div className="w-16 h-16 rounded-2xl border-4 border-cyan-500/20 border-t-cyan-400 animate-spin" />
              <div className="absolute w-10 h-10 rounded-xl border-4 border-purple-500/20 border-t-purple-400 animate-spin [animation-direction:reverse]" />
            </div>

            <div className="text-center space-y-2 select-none">
              <span className="font-bold text-xl tracking-tight text-white block">
                Khwahish<span className="text-cyan-400">.</span>Dev
              </span>
              <span className="font-mono text-[10px] uppercase text-slate-500 tracking-widest block animate-pulse">
                Assembling Systems Inventory • C++ Compliant
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Structural Layout */}
      {!loadingScreen && (
        <div id="portfolio-main-layout" className="relative">
          
          {/* Glowing cursor coordinate backing node */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Navigation */}
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Core active section rendered with elegant transitions */}
          <main id="portfolio-content-sections" className="relative z-10 pt-24 pb-12 min-h-[75vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {activeSection === "core" && (
                  <Hero
                    darkMode={darkMode}
                    onViewProjects={() => setActiveSection("projects")}
                    onContactClick={() => setActiveSection("contact")}
                    onOpenResumeModal={() => setActiveSection("resume")}
                    onSelectPage={setActiveSection}
                  />
                )}
                {activeSection === "about" && <About darkMode={darkMode} />}
                {activeSection === "skills" && <Skills darkMode={darkMode} />}
                {activeSection === "projects" && <Projects darkMode={darkMode} />}
                {activeSection === "experience" && <Timeline darkMode={darkMode} />}
                {activeSection === "gssoc" && (
                  <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-10">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-widest">
                          GSSOC CONTRIBUTORS LOG
                        </span>
                      </div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        GirlScript Summer of Code '26
                      </h2>
                      <p className="text-sm text-zinc-400 mt-2">
                        Verification portfolio highlighting official contributor ranks, merged features, and high-tier milestone badges.
                      </p>
                    </div>
                    <GSSoCBadges darkMode={darkMode} />
                  </section>
                )}
                {activeSection === "github" && (
                  <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-10">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest">
                          SDE INTEGRATION CORE
                        </span>
                      </div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-white">
                        GitHub Profile Telemetry &amp; Streaks
                      </h2>
                      <p className="text-sm text-zinc-400 mt-2">
                        Dynamic telemetry showing code commits, contributions frequency, streaks, and verified git records for Khwa678.
                      </p>
                    </div>
                    <GitHubStats darkMode={darkMode} />
                  </section>
                )}
                {activeSection === "credentials" && (
                  <Achievements darkMode={darkMode} />
                )}
                {activeSection === "resume" && <Resume darkMode={darkMode} />}
                {activeSection === "blog" && <Blog darkMode={darkMode} />}
                {activeSection === "contact" && <Contact darkMode={darkMode} />}
                {activeSection === "hire" && <HireMe darkMode={darkMode} />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Unified Footer */}
          <Footer darkMode={darkMode} activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Interactive AI Assistant co-pilot */}
          <AiAssistant darkMode={darkMode} />

          {/* Canvas Printable CV Modal */}
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
            darkMode={darkMode}
          />

        </div>
      )}

    </div>
  );
}

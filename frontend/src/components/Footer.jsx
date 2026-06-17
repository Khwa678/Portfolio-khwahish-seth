import { ArrowUp, Code, Hash } from "lucide-react";
export default function Footer({ activeSection, setActiveSection }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
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
  const selectSection = (id) => {
    setActiveSection(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer
    id="portfolio-footer"
    className="bg-[#070709] border-t border-zinc-800 text-zinc-400 py-12"
  >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {
    /* Logo & Slogan */
  }
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 bg-amber-400 text-black flex items-center justify-center font-bold">
              <Code className="size-4" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight block text-white uppercase font-sans">
                Khwahish
              </span>
              <span className="text-[9px] text-zinc-550 block uppercase tracking-widest font-mono">
                MNC Professional Prep Portfolio
              </span>
            </div>
          </div>

          {
    /* Quick linkages directory */
  }
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-mono uppercase tracking-wider">
            {navItems.map((item) => <button
    key={item.id}
    onClick={() => selectSection(item.id)}
    className={`transition-colors cursor-pointer flex items-center space-x-1 ${activeSection === item.id ? "text-amber-400 font-bold" : "hover:text-white"}`}
  >
                <Hash className="size-3 text-zinc-650" />
                <span>{item.label}</span>
              </button>)}
          </div>

          {
    /* Back to Top button */
  }
          <button
    onClick={scrollToTop}
    className="p-3 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer rounded"
    aria-label="Scroll smoothly back to header"
  >
            <ArrowUp className="size-4" />
          </button>
        </div>

        {
    /* Technical legal copyright text line */
  }
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-550">
          <p>© 2026 Khwahish Seth. All core metrics compiled and verified.</p>
          <p className="flex items-center space-x-1.5 mt-2 sm:mt-0">
            <span>Built using modern React, Tailwind, and Motion vectors.</span>
          </p>
        </div>

      </div>
    </footer>;
}

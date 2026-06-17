import { useState } from "react";
import MyPhoto from "../assets/images/WhatsApp Image 2026-06-17 at 17.46.52.jpeg";
import { ArrowUpRight, Github, Linkedin, Award, Code2, Flame, MapPin, Sparkles, Upload } from "lucide-react";
export default function Hero({ onViewProjects, onContactClick, onOpenResumeModal, onSelectPage }) {
  const [activeTab, setActiveTab] = useState("cpp");
  const [portraitImage, setPortraitImage] = useState(() => {
    const cached = localStorage.getItem("khwahish_custom_portrait");
    if (cached && cached.startsWith("data:image")) {
      return cached;
    }
   return MyPhoto;
  });
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("khwahish_custom_portrait", base64String);
        setPortraitImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const cppCode = `// C++ Competitive Programming Template
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Top 8% Global Contest Rating: 1750+
    int solved = 450; 
    string target = "FAANG / Tier-1 MNC";
    
    vector<string> stack = {"DSA", "OOP", "System Design"};
    sort(stack.begin(), stack.end());
    
    cout << "Preparing Khwahish for " << target << endl;
    return 0;
}`;
  const mernStats = `// MERN Stack Architecture Configuration
const database = "MongoDB Atlas Cloud Cluster";
const apiRouter = "Express.js Fast Routing";
const clientUI  = "React 19 Virtual DOM Client";
const runtime   = "Node.js High-Throughput Server";

console.log("Full-Stack System Active on Port 3000!");`;
  return <section
    id="hero"
    className="relative min-h-screen bg-[#070709] text-white overflow-hidden border-b border-zinc-800"
  >
      {
    /* Background Grid Pattern */
  }
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {
    /* Grid Wrapper matching Kathryn Welch Layout */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-20 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* COLUMN 1: VERTICAL TYPOGRAPHY & BRAND SIGNATURE (lg:col-span-3) */
  }
        <div className="lg:col-span-3 flex flex-col justify-between p-6 sm:p-8 space-y-12">
          
          {
    /* Top Stamp & Dot Matrix Container */
  }
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
                00 / STRUCTURAL CORE
              </span>
              <div className="flex items-center space-x-1.5">
                <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-mono text-[10px] text-amber-500 font-bold uppercase">LIVE</span>
              </div>
            </div>

            {
    /* Dot Matrix (Kathryn Welch style with amber accent lights) */
  }
            <div className="grid grid-cols-5 gap-3 w-fit p-3 bg-zinc-950/80 rounded border border-zinc-800">
              {Array.from({ length: 25 }).map((_, index) => {
    const isLit = [3, 11, 14, 20].includes(index);
    return <div
      key={index}
      className={`size-2 rounded-full transition-all duration-1000 ${isLit ? "bg-amber-400 shadow-lg shadow-amber-400/50 scale-110" : "bg-zinc-800"}`}
    />;
  })}
            </div>
          </div>

          {
    /* Big Vertical Name Typo Column */
  }
          <div className="relative py-8 flex flex-col justify-center select-none overflow-hidden">
            <span className="text-[5.5rem] sm:text-[7.5rem] leading-[0.8] font-black text-zinc-900 font-sans tracking-tighter hover:text-zinc-800 duration-500 cursor-default block">
              KHW
              <br />
              AHI
              <br />
              SH.
            </span>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 p-2 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest border border-black inline-block pointer-events-none transform -rotate-6 select-none shadow-md">
              DSA & MERN
            </div>
          </div>

          {
    /* Location & Title Badge */
  }
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-zinc-400 font-mono text-xs">
              <MapPin className="size-3.5 text-amber-400" />
              <span>India • Remote SDE</span>
            </div>
            <p className="text-zinc-500 text-xs font-mono leading-relaxed">
              Aspiring Software Development Engineer (SDE) at elite global technology MNCs.
            </p>

            {
    /* SDE COMMAND RAIL / MODERN BUTTONS MATRIX */
  }
            <div className="pt-6 border-t border-zinc-900 space-y-3 text-left">
              <span className="font-mono text-[9px] tracking-widest text-zinc-550 uppercase block font-bold">
                // PORTFOLIO INDEX SWITCHER
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
    { label: "Home Core", target: "core", icon: "\u{1F3E0}" },
    { label: "About Me", target: "about", icon: "\u{1F464}" },
    { label: "Projects", target: "projects", icon: "\u{1F4BB}" },
    { label: "Skills", target: "skills", icon: "\u26A1" },
    { label: "Experience", target: "experience", icon: "\u23F1\uFE0F" },
    { label: "GSSoC Badges", target: "gssoc", icon: "\u{1F3C6}" },
    { label: "GitHub Streaks", target: "github", icon: "\u{1F525}" },
    { label: "Certificates", target: "credentials", icon: "\u{1F393}" },
    { label: "Resume", target: "resume", icon: "\u{1F4C4}" },
    { label: "Blog", target: "blog", icon: "\u270D\uFE0F" },
    { label: "Contact", target: "contact", icon: "\u2709\uFE0F" },
    { label: "Hire Me", target: "hire", icon: "\u{1F4BC}" }
  ].map((btn) => <button
    key={btn.target}
    type="button"
    onClick={() => {
      if (onSelectPage) {
        onSelectPage(btn.target);
      }
    }}
    className="p-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 hover:border-cyan-400 text-left text-zinc-405 hover:text-cyan-400 transition-all rounded duration-300 flex flex-col justify-between h-[52px] cursor-pointer group"
  >
                    <span className="text-xs group-hover:scale-110 transition-transform">{btn.icon}</span>
                    <span className="font-mono text-[9px] font-bold tracking-tight uppercase leading-none">
                      {btn.label.replace(" ", "_")}
                    </span>
                  </button>)}
              </div>
            </div>
          </div>

        </div>

        {
    /* COLUMN 2: PREMIUM HIGH-CONTRAST PORTRAIT IMAGE BOX (lg:col-span-4) */
  }
        <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#0b0b0e] relative">
          
          {
    /* Block Label */
  }
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              01 / DEVELOPER PROFILE
            </span>
            <span className="font-mono text-[10px] text-zinc-500">KHW-SE-2026</span>
          </div>

          {
    /* Centered High-Contrast Portrait Layout (Replicating Kathryn Welch) */
  }
          <div className="my-auto flex flex-col items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[3/4] bg-zinc-950 p-2.5 border-2 border-zinc-800 shadow-2xl overflow-hidden group">
              {
    /* Image Frame with hover filters */
  }
              <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-zinc-850">
                <img
    src={portraitImage}
    alt="Khwahish Seth Portrait"
    className="w-full h-full object-cover"
    referrerPolicy="no-referrer"
  />
                
                {
    /* Horizontal Glass panel Overlay */
  }
                <div className="absolute inset-x-0 bottom-0 py-3 bg-black/90 backdrop-blur-sm border-t border-zinc-800 flex items-center justify-around translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a
    href="https://github.com/Khwa678"
    target="_blank"
    rel="noreferrer"
    className="p-1.5 hover:text-amber-400 text-white transition-colors"
  >
                    <Github className="size-4.5" />
                  </a>
                  <a
    href="https://www.linkedin.com/in/khwahish-ai-mlengineer?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noreferrer"
    className="p-1.5 hover:text-cyan-400 text-white transition-colors"
  >
                    <Linkedin className="size-4.5" />
                  </a>
                  <span className="text-[9px] font-mono uppercase bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-amber-400 font-bold">
                    1750+ RATING
                  </span>
                </div>
              </div>

              {
    /* Portrait Corner Stamps */
  }
              <div className="absolute top-4 left-4 size-3 border-t-2 border-l-2 border-white pointer-events-none" />
              <div className="absolute top-4 right-4 size-3 border-t-2 border-r-2 border-white pointer-events-none" />
              <div className="absolute bottom-4 left-4 size-3 border-b-2 border-l-2 border-white pointer-events-none" />
              <div className="absolute bottom-4 right-4 size-3 border-b-2 border-r-2 border-white pointer-events-none" />
            </div>
            
            {
    /* Name stamp under the image */
  }
            <div className="mt-5 text-center flex flex-col items-center">
              <h2 className="text-xl font-bold tracking-tight uppercase font-sans">
                Khwahish
              </h2>
              <p className="text-[10px] font-mono tracking-widest text-amber-400 uppercase mt-1">
                PROBLEM SOLVER & SDE
              </p>
              
              {
    /* Image upload trigger button */
  }
              <div className="flex items-center gap-1.5 mt-3">
                <label
    htmlFor="portrait-upload"
    className="inline-flex items-center space-x-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] font-mono uppercase text-zinc-400 hover:text-white hover:border-zinc-700 rounded transition-colors cursor-pointer"
  >
                  <Upload className="size-3 text-amber-400" />
                  <span>Upload Photo</span>
                </label>
                {localStorage.getItem("khwahish_custom_portrait") && <button
    onClick={() => {
      localStorage.removeItem("khwahish_custom_portrait");
      setPortraitImage("/src/assets/images/khwahish_dubai_photo_1781698909308.jpg");
    }}
    className="px-2 py-1 bg-red-950/30 hover:bg-red-950/60 border border-red-900/60 text-[9px] font-mono uppercase text-red-400 rounded transition-colors cursor-pointer"
  >
                    Reset
                  </button>}
              </div>
              <input
    type="file"
    id="portrait-upload"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />
            </div>
          </div>

          {
    /* Social Profiles Grid Footer in Portrait container */
  }
          <div className="flex items-center justify-between border-t border-zinc-800/60 pt-4 mt-6">
            <div className="flex space-x-1.5">
              <span className="px-2 py-0.5 bg-white text-black text-[9px] font-bold uppercase tracking-wider">
                MERN
              </span>
              <span className="px-2 py-0.5 bg-amber-400 text-black text-[9px] font-bold uppercase tracking-wider">
                C++
              </span>
              <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[9px] font-mono uppercase">
                O(1) DSA
              </span>
            </div>
            <span className="font-mono text-[9px] text-zinc-500 font-bold select-none">CSE_2027</span>
          </div>

        </div>

        {
    /* COLUMN 3: STATS GRID & COMPILER INTERACTIVE WIDGET (lg:col-span-5) */
  }
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 space-y-8 bg-[#070709]">
          
          {
    /* Header Block with Actions */
  }
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              02 / TECHNICAL SCORECARD
            </span>
            <button
    onClick={onOpenResumeModal}
    className="group flex items-center space-x-1 font-mono text-[9px] text-amber-400 bg-amber-400/5 px-2 py-1 rounded border border-amber-400/20 hover:bg-amber-400 hover:text-black transition-all"
  >
              <span>RESUME</span>
              <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {
    /* Scorecards Bento Panel */
  }
          <div className="grid grid-cols-2 gap-4">
            
            {
    /* Stat 1: LeetCode */
  }
            <div className="p-4 bg-zinc-950 border border-zinc-800 hover:border-amber-400/35 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Solved Problems</span>
                <Flame className="size-4 text-amber-500 animate-pulse" />
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold font-sans tracking-tight">450+</span>
                <span className="text-[9px] font-mono text-zinc-500">Active</span>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-400">
                150 E • 240 M • 60 H
              </div>
            </div>

            {
    /* Stat 2: Rating */
  }
            <div className="p-4 bg-zinc-950 border border-zinc-800 hover:border-cyan-500/35 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Contest Rating</span>
                <Award className="size-4 text-cyan-400" />
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold font-sans tracking-tight">1750+</span>
                <span className="text-[9px] font-mono text-emerald-400 font-bold">Top 8%</span>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-400">
                3-Star CodeChef Specialist
              </div>
            </div>

            {
    /* Stat 3: BTech GPA */
  }
            <div className="p-4 bg-zinc-950 border border-zinc-800 hover:border-purple-500/35 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Academic Grade</span>
                <Code2 className="size-4 text-purple-400" />
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold font-sans tracking-tight">9.2</span>
                <span className="text-[9px] font-mono text-zinc-500">/ 10</span>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-400">
                Merit Scholarship Recipient
              </div>
            </div>

            {
    /* Stat 4: CP Streak */
  }
            <div className="p-4 bg-zinc-950 border border-zinc-800 hover:border-teal-500/35 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">DSA Streak</span>
                <Sparkles className="size-3.5 text-teal-400" />
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold font-sans tracking-tight">100+</span>
                <span className="text-[9px] font-mono text-teal-400 font-bold">Days</span>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-400">
                Daily Problem Submissions
              </div>
            </div>

          </div>

          {
    /* Interactive Live Compiler Console */
  }
          <div className="bg-zinc-950 border border-zinc-800 rounded overflow-hidden flex flex-col">
            
            {
    /* Terminal Header */
  }
            <div className="px-4 py-2 bg-[#0a0a0c] border-b border-zinc-805 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="size-2 rounded-full bg-red-500" />
                <span className="size-2 rounded-full bg-yellow-500" />
                <span className="size-2 rounded-full bg-green-500" />
              </div>
              
              {
    /* Tab Toggles */
  }
              <div className="flex space-x-2">
                <button
    onClick={() => setActiveTab("cpp")}
    className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold transition-all ${activeTab === "cpp" ? "bg-amber-400 text-black font-extrabold" : "text-zinc-450 hover:text-white"}`}
  >
                  BTech_CSE.cpp
                </button>
                <button
    onClick={() => setActiveTab("mern")}
    className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold transition-all ${activeTab === "mern" ? "bg-amber-400 text-black font-extrabold" : "text-zinc-450 hover:text-white"}`}
  >
                  MERN_Config.ts
                </button>
              </div>
            </div>

            {
    /* Code Body */
  }
            <div className="p-4 bg-[#050507] font-mono text-[11px] leading-relaxed overflow-x-auto min-h-[140px] text-zinc-300">
              <pre className="text-left">
                <code>
                  {activeTab === "cpp" ? cppCode : mernStats}
                </code>
              </pre>
            </div>

            {
    /* Footer compiler stamp */
  }
            <div className="px-4 py-2 bg-[#0a0a0c] border-t border-zinc-805 flex items-center justify-between text-[10px] font-mono text-zinc-550">
              <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                <span className="size-1.5 bg-emerald-400 rounded-full animate-ping" />
                <span>Compiler Status: Online</span>
              </div>
              <span>GCC 13.2.0</span>
            </div>

          </div>

          {
    /* Action Call for recruitment */
  }
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <button
    onClick={onViewProjects}
    className="flex-1 py-3 px-6 bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest transition-all shadow flex items-center justify-center space-x-2 cursor-pointer border border-white"
  >
              <span>Explore Projects</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </button>
            <button
    onClick={onContactClick}
    className="flex-1 py-3 px-6 bg-transparent hover:bg-zinc-900 text-white font-mono text-xs tracking-widest transition-all flex items-center justify-center space-x-2 cursor-pointer border border-zinc-800"
  >
              <span>Transmit Specifications</span>
            </button>
          </div>

        </div>

      </div>
    </section>;
}

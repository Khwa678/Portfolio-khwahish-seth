import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, AlertCircle, Cpu, Brain, User } from "lucide-react";
export default function AiAssistant({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [offlineStatus, setOfflineStatus] = useState(false);
  const scrollRef = useRef(null);
  const suggestedPrompts = [
    "What is Khwahish's BTech GPA?",
    "Tell me about her C++ & LeetCode stats",
    "Where did she do her internship?",
    "Show me her AI Resume Analyzer project"
  ];
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "model",
        text: `Hi! \u{1F44B} I'm Khwahish's Custom AI Co-pilot, trained directly on her academic credentials, software projects, and algorithms progress. Ask me any question to see if she's a fit for your engineering squads!`,
        timestamp: /* @__PURE__ */ new Date()
      }
    ]);
  }, []);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);
  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim() || loading) return;
    const userMsg = {
      id: Math.random().toString(),
      role: "user",
      text: textToSend,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);
    try {
      const historyPayload = messages.map((msg) => ({
        role: msg.role,
        text: msg.text
      }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          chatHistory: historyPayload
        })
      });
      const data = await res.json();
      if (data.offline) {
        setOfflineStatus(true);
      } else {
        setOfflineStatus(false);
      }
      const modelMsg = {
        id: Math.random().toString(),
        role: "model",
        text: data.reply || "I apologize, I wasn't able to compile a reply instantly. Let me know if you would like me to detail Khwahish's projects or skills!",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.error("Failed to query portfolio co-pilot:", err);
      const errMsg = {
        id: Math.random().toString(),
        role: "model",
        text: "I encountered a minor connection interruption. Khwahish is a powerful full-stack engineer and competitive programmer with a 9.2 B.Tech GPA. Please feel free to email her directly at khwahishseth@gmail.com!",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };
  return <div id="ai-co-pilot-widget" className="fixed bottom-6 right-6 z-50 font-sans">
      
      {
    /* Floating Trigger Bubble Button */
  }
      <motion.button
    id="ai-trigger-bubble"
    onClick={() => setIsOpen(!isOpen)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl overflow-hidden cursor-pointer relative group ${isOpen ? "bg-slate-900 border border-white/10 text-white" : "bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 text-white"}`}
    aria-label="Toggle portfolio partner chat box"
  >
        <AnimatePresence mode="wait">
          {isOpen ? <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="size-6" />
            </motion.div> : <motion.div key="chat" initial={{ scale: 0.7 }} animate={{ scale: 1 }} className="relative flex items-center justify-center">
              <MessageSquare className="size-6 group-hover:scale-110 transition-transform" />
              {
    /* Dynamic mini notification dot */
  }
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-ping" />
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
            </motion.div>}
        </AnimatePresence>
      </motion.button>

      {
    /* Expanded Chat Box dialog */
  }
      <AnimatePresence>
        {isOpen && <motion.div
    id="ai-co-pilot-box"
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 40, scale: 0.95 }}
    transition={{ type: "spring", damping: 25 }}
    className={`absolute bottom-16 right-0 w-[92vw] sm:w-[400px] h-[550px] rounded-2xl border flex flex-col justify-between overflow-hidden shadow-2xl text-left ${darkMode ? "bg-slate-950 border-white/10 shadow-black/80" : "bg-white border-slate-200 shadow-slate-300/60"}`}
  >
            
            {
    /* Header toolbar banner */
  }
            <div className="px-4 py-3 bg-gradient-to-r from-slate-900 to-indigo-950 border-b border-white/15 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-400/30">
                  <Brain className="size-4.5 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none flex items-center space-x-1">
                    <span>Khwahish's Rep</span>
                    <span className="inline-block px-1.5 py-0.5 rounded text-[8px] tracking-wide bg-cyan-400/20 text-cyan-400 font-mono font-medium">
                      Port Co-Pilot
                    </span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium">Powered by Gemini 3.5 Flash</span>
                </div>
              </div>
              <button
    onClick={() => setIsOpen(false)}
    className="p-1 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
    aria-label="Minimize co-pilot interface"
  >
                <X className="size-4" />
              </button>
            </div>

            {
    /* Offline Fallback Alert banner */
  }
            {offlineStatus && <div className="px-4 py-2 bg-amber-500/10 border-b border-amber-500/15 text-[11px] text-amber-500 flex items-center space-x-2">
                <AlertCircle className="size-3.5 flex-shrink-0 text-amber-400 animate-bounce" />
                <span className="font-mono leading-tight">Operating in offline resume fallback mode.</span>
              </div>}

            {
    /* Messages Pane logs scroll area */
  }
            <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-950/[0.02] dark:bg-slate-950/[0.25]">
              {messages.map((msg) => <div
    key={msg.id}
    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
  >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
                    
                    {
    /* Avatar markup */
  }
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-[10px] ${msg.role === "user" ? "bg-slate-700 text-white" : "bg-gradient-to-tr from-cyan-500 to-purple-600 text-white font-mono"}`}>
                      {msg.role === "user" ? <User className="size-3" /> : <Cpu className="size-3" />}
                    </div>

                    {
    /* Speech card bubble */
  }
                    <div
    className={`px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed select-text ${msg.role === "user" ? darkMode ? "bg-cyan-500/15 border border-cyan-400/20 text-cyan-100 rounded-tr-none" : "bg-blue-600 text-white rounded-tr-none shadow shadow-blue-600/15" : darkMode ? "bg-slate-900/60 border border-white/5 text-slate-200 rounded-tl-none" : "bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none shadow-sm"}`}
    style={{ whiteSpace: "pre-line" }}
  >
                      {msg.text}
                    </div>

                  </div>
                </div>)}

              {
    /* Loader bubble */
  }
              {loading && <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-purple-600 text-white flex items-center justify-center">
                      <Cpu className="size-3 animate-spin duration-1000" />
                    </div>
                    <div className={`px-4 py-3 rounded-2xl rounded-tl-none flex items-center space-x-1.5 ${darkMode ? "bg-slate-900 border border-white/5" : "bg-slate-100 border border-slate-200"}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    </div>
                  </div>
                </div>}
            </div>

            {
    /* Quick Suggested prompts list */
  }
            {messages.length === 1 && <div className="px-4 py-2 flex flex-col space-y-1.5 border-t border-slate-800/10 dark:border-white/5 bg-slate-950/20">
                <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider uppercase">SUGGESTED ENQUIRIES</span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedPrompts.map((p, idx) => <button
    key={idx}
    onClick={() => handleSendMessage(p)}
    className={`text-[11px] text-left px-2.5 py-1 rounded-lg border transition-all truncate max-w-full cursor-pointer ${darkMode ? "bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-cyan-500/25" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 hover:border-blue-500/20"}`}
  >
                      {p}
                    </button>)}
                </div>
              </div>}

            {
    /* Form Input submit panel */
  }
            <form
    onSubmit={handleFormSubmit}
    className={`p-3 border-t flex items-center gap-2 ${darkMode ? "bg-slate-950 border-white/10" : "bg-white border-slate-200"}`}
  >
              <input
    type="text"
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    placeholder="Ask about her skills, C++, education..."
    className={`flex-grow px-3.5 py-2 rounded-xl text-xs outline-none transition-all ${darkMode ? "bg-slate-900 text-white border border-white/5 focus:border-cyan-500/40 focus:bg-slate-900" : "bg-slate-100 text-slate-950 border border-slate-200/50 focus:border-blue-500 focus:bg-white"}`}
  />
              <button
    type="submit"
    disabled={!inputText.trim() || loading}
    className={`p-2.5 rounded-xl flex items-center justify-center transition-all cursor-pointer ${!inputText.trim() || loading ? "bg-slate-500/20 text-slate-500" : darkMode ? "bg-white text-slate-950 hover:bg-slate-100" : "bg-slate-950 text-white hover:bg-slate-800"}`}
  >
                <Send className="size-3.5" />
              </button>
            </form>

          </motion.div>}
      </AnimatePresence>

    </div>;
}

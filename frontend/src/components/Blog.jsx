import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Eye, Tag, Search, ArrowLeft, ArrowRight, CornerDownRight } from "lucide-react";
export default function Blog({ darkMode }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const articles = [
    {
      id: "cpp-optimal-memory",
      title: "Optimizing C++ Code for Competitive Programming",
      excerpt: "Unlocking advanced I/O speeds, customized allocator overrides, and memory locality secrets to break past sub-millisecond execution thresholds on LeetCode & CodeChef.",
      category: "C++",
      readTime: "5 min read",
      date: "June 14, 2026",
      views: 247,
      tags: ["C++", "IO Speed", "Compilers", "Competitive Programming"],
      content: `### Achieving Zero-Overhead C++ Execution

If you've spent any time on CodeChef or LeetCode, you've likely had a time-limit exceeded (TLE) error on an algorithm that is theoretically O(N). In competitive programming, the hidden constant factor of your algorithm determines whether you pass or fail.

#### 1. The I/O Bottleneck: Fast I/O Setup
By default, std::cin and std::cout synchronize with the C-standard streams (scanf and printf). This synchronization ensures you can mix C and C++ style I/O safely. However, it slows down execution significantly.

Add this template at the entry point of your main logic:

\`\`\`cpp
static const int fast_io = []() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    return 0;
}();
\`\`\`

- sync_with_stdio(false) disables this costly overhead synchronization.
- std::cin.tie(NULL) unties cin from cout, preventing cout from flushing before every cin read.

#### 2. Avoid std::endl
Using std::endl does two things: it inserts a newline character '\\n' and forces a stream flush. Flushing the buffer is an expensive system call. Instead, use the literal newline character:

\`\`\`cpp
// \u274C Deprecated (Heavy constant overhead)
std::cout << result << std::endl;

// \u2705 Optimized (Buffers stream output efficiently)
std::cout << result << '\\n';
\`\`\`

#### 3. Vector Reallocation Control
An std::vector is a dynamic array that doubles its capacity when filled. During doubling, it allocates a new larger block of memory and copies all existing elements over, which takes O(N) time. 

If you already know the maximum size of your inputs, use .reserve() to allocate memory upfront:

\`\`\`cpp
std::vector<int> adj[N];
for (int i = 0; i < N; ++i) {
    adj[i].reserve(max_degree); // Alleviates secondary system memory allocator calls
}
\`\`\`

By mastering competitive C++ template configurations, you ensure that your theoretical bounds translate cleanly into real, blazing-fast benchmarks.`
    },
    {
      id: "mern-scalable-express",
      title: "Clean Architecture Setup in Modern MERN Backend Systems",
      excerpt: "Building decoupled Express API layouts using layered architecture, structured controllers, global error boundaries, and custom TypeScript token authenticators.",
      category: "MERN",
      readTime: "7 min read",
      date: "May 28, 2026",
      views: 318,
      tags: ["Express", "MERN", "TypeScript", "System Architecture"],
      content: `### De-Cluttering Your MERN Boilerplates

Most introductory guides put routing, database validation, and core business models inside a single monolithic file. This scales poorly and is nightmare to debug in containerized Cloud environments. 

Here is how you organize an SDE-approved Express API:

#### 1. Clean Folder Strata
A scalable backend repository separates concerns into clear physical layers:

\`\`\`
src/
\u251C\u2500\u2500 controllers/    # Parses HTTP Requests, calls Services, returns JSON
\u251C\u2500\u2500 services/       # Imposes core business logic, interacts with storage
\u251C\u2500\u2500 models/         # Mongoose schema declarations
\u251C\u2500\u2500 middlewares/    # Custom JWT interceptors & Joi validations
\u2514\u2500\u2500 server.ts       # Express app assembly & port listeners
\`\`\`

#### 2. Fully Asynchronous Global Handlers
Avoid wrapping every route in repetitive try-catch blocks. Instead, write a high-order utility wrapper to capture unhandled exceptions automatically:

\`\`\`typescript
export const asyncHandler = (fn: Function) => {
  return (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
\`\`\`

And wrap your controllers like so:

\`\`\`typescript
export const getActiveUser = asyncHandler(async (req, res) => {
  const user = await UserService.findUserById(req.user.id);
  if (!user) {
    throw new ApplicationError("Account record not active in session.", 404);
  }
  return res.json({ success: true, payload: user });
});
\`\`\`

#### 3. Why This Matters for Recruiters
MNC interviewers check if you write code with testing and deployment in mind. Separating business services from the HTTP routing protocol allows for comprehensive unit testing without needing active database mocks.`
    },
    {
      id: "dsa-interview-patterns",
      title: "Sliding Window vs. Two Pointers: Visualizing Optimal Subarray Patterns",
      excerpt: "A visual masterclass exploring how to recognize structural bounds in linear datasets, reducing O(N^2) brute solutions directly to O(N) linear time.",
      category: "DSA",
      readTime: "8 min read",
      date: "April 19, 2026",
      views: 452,
      tags: ["DSA", "Algorithms", "Sliding Window", "Interview Prep"],
      content: `### Master the Visual Mechanics of Linear Traversals

Many algorithmic problems involving arrays or string buffers seem to demand raw nested loops. However, if the subproblem is contiguous or requires comparing pairs of variables, you can often solve it in linear runtime.

#### Sliding Window vs. Two Pointers Matrix

| Property | Sliding Window | Two Pointers |
| :--- | :--- | :--- |
| **Typical Problem** | Maximize/minimize contiguous subarrays | Compare elements at distinct indices |
| **Pointers direction** | Expand Right, contract Left (Same direction) | Start opposite, meet in standard middle (Opposite) |
| **Complexity** | O(N) time with stable variables | O(N) time with minimal allocation |

#### Pattern 1: Variable-Size Sliding Window
To find the longest substring with K unique characters, we dynamically expand our target window to the right until constraints are broken:

\`\`\`cpp
int longestKSubstr(string s, int k) {
    int left = 0, maxLength = -1;
    unordered_map<char, int> freq;
    
    for (int right = 0; right < s.length(); ++right) {
        freq[s[right]]++;
        
        while (freq.size() > k) {
            freq[s[left]]--;
            if (freq[s[left]] == 0) {
                freq.erase(s[left]);
            }
            left++; // Contract window from the left
        }
        
        if (freq.size() == k) {
            maxLength = max(maxLength, right - left + 1);
        }
    }
    return maxLength;
}
\`\`\`

#### Pattern 2: Two-Pointer Convergence
When checking if a sorted collection contains an index sum equal to a target (classic 2-Sum) - we converge pointers inwards:

\`\`\`cpp
bool hasTargetPair(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left < right) {
        int currentSum = arr[left] + arr[right];
        if (currentSum == target) return true;
        if (currentSum < target) {
            left++; // Need larger sum, shift left forward
        } else {
            right--; // Need smaller sum, shift right backward
        }
    }
    return false;
}
\`\`\`

Both strategies leverage the physical state of previous computations to skip redundant scanning. This is the difference between writing systems that lag with large scale telemetry and those that maintain constant, predictable speed.`
    },
    {
      id: "codechef-3star-journey",
      title: "Journey to CodeChef 3-Star: My Practice Routine & Coding Rituals",
      excerpt: "Detailed breakdown of the specific problem classifications, contest strategy, and mental endurance routines that helped me achieve a 1750+ Contest Rating.",
      category: "SDE Life",
      readTime: "6 min read",
      date: "March 11, 2026",
      views: 395,
      tags: ["CodeChef", "Competitive Programming", "Milestones", "Contests"],
      content: `### Reaching the Elite Tier in Competitive Programming

Improving your rating in online compilers is a function of deliberate practice rather than raw intelligence. Moving from absolute beginner to 3-Star status (1750+ Rating) requires a change in how you analyze failure.

#### 1. The 'Upsolving' Rule
The single biggest mistake programmers make is taking a competitive contest, failing to solve Problem D, and moving on to the next contest. 

**My Golden Rule:** You must never leave a contest without implementing and passing ALL test cases for the first problem you failed. This is called upsolving. You only learn when you bridge the exact knowledge gap that blocked you.

#### 2. Topic Allocation Map
At different rating tiers, you need to study specific algorithmic subjects:

*   **1100 - 1400 Rating:** Math (Primes, GCD, Modulo arithmetic), Basic Binary Search, Greedy Choices.
*   **1400 - 1650 Rating:** Segment trees, Recursion tree parsing, dynamic programming (1D DP, Knapsacks), DFS/BFS on grids.
*   **1650+ Rating:** Interactive queries, bitmask DP, heavy tree-intervals, and fast mathematical combinations.

#### 3. Contest Day Strategy (The 15-Minute Rule)
If you are stuck on a problem for more than 15 minutes, step away from the keyboard and write down the sample tests on a notepad. Sketching out the variables lets you see relationships (like patterns and periodic bounds) that are hidden when looking at raw lines in an IDE.`
    }
  ];
  const categories = ["All", "C++", "DSA", "MERN", "SDE Life"];
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = currentCategory === "All" || art.category === currentCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {
    /* SDE Section Header */
  }
      <div className="border border-zinc-850 bg-[#070709] p-6 lg:p-8 rounded-xl mb-10 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="text-left">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-widest">
              SYSTEMS DOCUMENTATION V1.2
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
            SDE Technical Journal
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mt-1 leading-relaxed">
            Highly-specific technical writeups, competitive programming algorithms, clean controller boilerplates, and interview preparation guides.
          </p>
        </div>

        {
    /* Dynamic Metric */
  }
        <div className="flex items-center space-x-6 border-t md:border-t-0 md:border-l border-zinc-850 pt-4 md:pt-0 md:pl-8">
          <div className="text-left">
            <div className="font-mono text-2xl font-bold text-amber-400">1.4K+</div>
            <div className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">READER_VIEWS</div>
          </div>
          <div className="text-left">
            <div className="font-mono text-2xl font-bold text-emerald-400">4</div>
            <div className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">TECH_SECTIONS</div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedArticle ? <motion.div
    key="list-view"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
  >
            {
    /* SEARCH AND FILTERS */
  }
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {
    /* Category tabs */
  }
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((cat) => <button
    key={cat}
    onClick={() => setCurrentCategory(cat)}
    className={`px-4 py-2 text-xs font-mono lowercase tracking-wide rounded-lg border transition-all cursor-pointer ${currentCategory === cat ? "bg-cyan-500/10 border-cyan-400 text-cyan-400" : darkMode ? "bg-zinc-950 border-zinc-850 text-slate-400 hover:text-white hover:border-zinc-700" : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"}`}
  >
                    # {cat === "All" ? "all-articles" : cat.toLowerCase().replace(" ", "-")}
                  </button>)}
              </div>

              {
    /* Search input */
  }
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                <input
    type="text"
    placeholder="Query syntax, tags..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={`w-full pl-9 pr-4 py-2 text-xs font-mono rounded-lg border focus:outline-none transition-all ${darkMode ? "bg-zinc-950 border-zinc-850 text-white focus:border-cyan-400" : "bg-white border-slate-200 text-slate-900 focus:border-blue-600"}`}
  />
              </div>
            </div>

            {
    /* ARTICLES GRID */
  }
            {filteredArticles.length === 0 ? <div className="border border-zinc-850 bg-[#070709] py-16 text-center rounded-xl font-mono text-xs">
                <span className="text-zinc-500 block mb-2">// ERROR: NO MATCHING ARTICLES FOUND</span>
                <button
    onClick={() => {
      setSearchQuery("");
      setCurrentCategory("All");
    }}
    className="text-cyan-400 hover:underline cursor-pointer"
  >
                  Clear searches and reload index
                </button>
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((art, idx) => <motion.div
    key={art.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.1 }}
    className="group border border-zinc-850 bg-[#070709] rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-md shadow-black/10 relative overflow-hidden"
  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    <div>
                      {
    /* Meta header */
  }
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-3">
                        <div className="flex items-center space-x-1.5">
                          <Tag className="size-3 text-cyan-500" />
                          <span className="text-cyan-400/80 font-bold uppercase">{art.category}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <Clock className="size-3" />
                            <span>{art.readTime}</span>
                          </span>
                        </div>
                      </div>

                      {
    /* Title */
  }
                      <h3 className={`text-base font-bold text-left tracking-tight mb-2 group-hover:text-cyan-400 transition-colors ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {art.title}
                      </h3>

                      {
    /* Excerpt */
  }
                      <p className="text-xs text-left text-slate-400 leading-relaxed mb-6">
                        {art.excerpt}
                      </p>
                    </div>

                    {
    /* Footer metrics / CTA */
  }
                    <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-auto">
                      <div className="flex items-center space-x-4 text-[9px] font-mono text-zinc-500">
                        <span>POSTED: {art.date}</span>
                        <span className="flex items-center space-x-1">
                          <Eye className="size-3" />
                          <span>{art.views}</span>
                        </span>
                      </div>

                      <button
    onClick={() => {
      setSelectedArticle(art);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-900 text-cyan-400 font-mono text-[10px] font-bold rounded border border-zinc-850 flex items-center space-x-1.5 group-hover:border-cyan-400/30 transition-colors cursor-pointer"
  >
                        <span>READ_POST</span>
                        <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </motion.div>)}
              </div>}
          </motion.div> : <motion.div
    key="article-detail"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
    className="border border-zinc-850 bg-[#070709] rounded-xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
  >
            {
    /* Back button */
  }
            <button
    onClick={() => {
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="px-3.5 py-1.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 font-mono text-[10px] rounded border border-zinc-850 flex items-center space-x-1.5 mb-8 hover:text-white transition-colors cursor-pointer"
  >
              <ArrowLeft className="size-3" />
              <span>RETURN_TO_INDEX</span>
            </button>

            {
    /* Article Main specs */
  }
            <div className="border-b border-zinc-900 pb-6 mb-8 text-left">
              <div className="flex flex-wrap gap-2 items-center text-[10px] font-mono text-zinc-400 mb-3">
                <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-md font-bold uppercase">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span className="text-emerald-400">{selectedArticle.views + 1} views in database</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {selectedArticle.title}
              </h1>
            </div>

            {
    /* Rich Markdown/Typography content */
  }
            <div className="text-slate-300 text-sm leading-relaxed space-y-6 max-w-3xl text-left font-sans">
              {selectedArticle.content.split("\n\n").map((block, idx) => {
    if (block.startsWith("### ")) {
      return <h3 key={idx} className="text-lg font-bold text-white pt-4 flex items-center space-x-2">
                       <CornerDownRight className="size-4 text-cyan-400" />
                      <span>{block.replace("### ", "")}</span>
                    </h3>;
    }
    if (block.startsWith("#### ")) {
      return <h4 key={idx} className="text-sm font-mono font-bold text-cyan-400 pt-2">
                      {block.replace("#### ", "")}
                    </h4>;
    }
    if (block.includes("```")) {
      const lines = block.split("\n");
      const lang = lines[0].replace("```", "") || "code";
      const code = lines.slice(1, -1).join("\n");
      return <div key={idx} className="my-4 rounded-lg overflow-hidden border border-zinc-805 bg-[#09090c] font-mono text-xs shadow-inner">
                      <div className="px-4 py-2 bg-zinc-950/80 border-b border-zinc-900 flex items-center justify-between text-zinc-500 text-[10px]">
                        <span>compiler_agent.{lang}</span>
                        <span className="text-[9px] uppercase tracking-wider text-amber-500/80">Active Syntax</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-slate-300 leading-relaxed text-left text-[11px] select-text">
                        <code>{code}</code>
                      </pre>
                    </div>;
    }
    if (block.includes("|")) {
      const rows = block.split("\n").filter((r) => r.trim() !== "");
      return <div key={idx} className="overflow-x-auto my-4 border border-zinc-900 rounded-lg">
                      <table className="w-full text-left text-xs font-mono border-collapse bg-zinc-950">
                        <thead>
                          <tr className="border-b border-zinc-900 text-zinc-400">
                            {rows[0].split("|").slice(1, -1).map((cell, cidx) => <th key={cidx} className="p-3 font-semibold">{cell.trim()}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.slice(2).map((row, rindex) => <tr key={rindex} className="border-b border-zinc-900/40 text-slate-350 hover:bg-zinc-900/20">
                              {row.split("|").slice(1, -1).map((cell, colidx) => <td key={colidx} className="p-3">{cell.trim()}</td>)}
                            </tr>)}
                        </tbody>
                      </table>
                    </div>;
    }
    if (block.startsWith("- ") || block.startsWith("* ")) {
      return <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                      {block.split("\n").map((li, lidx) => <li key={lidx}>{li.replace(/^[\s-*]+/, "")}</li>)}
                    </ul>;
    }
    return <p key={idx} className="text-slate-400 text-xs sm:text-sm leading-relaxed" style={{ contentVisibility: "auto" }}>
                    {block}
                  </p>;
  })}
            </div>

            {
    /* Post details footer */
  }
            <div className="border-t border-zinc-900 pt-8 mt-10 md:flex md:items-center md:justify-between">
              <div className="flex flex-wrap gap-1.5 mb-4 md:mb-0">
                {selectedArticle.tags.map((tag) => <span
    key={tag}
    className="px-2 py-1 bg-zinc-900 border border-zinc-850 rounded text-[9px] font-mono text-zinc-500"
  >
                    #{tag.toLowerCase().replace(" ", "-")}
                  </span>)}
              </div>

              <button
    onClick={() => {
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="px-4 py-2 bg-zinc-950 hover:bg-zinc-900 text-cyan-400 font-mono text-xs rounded border border-zinc-850 font-bold flex items-center space-x-1.5 hover:border-cyan-400/30 transition-colors cursor-pointer"
  >
                <span>✕ CLOSE_ARTICLE_PREVIEW</span>
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>

    </section>;
}

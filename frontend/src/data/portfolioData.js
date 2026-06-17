export const PERSONAL_DETAILS = {
  name: "Khwahish Seth",
  title: "Software Developer | Open Source Contributor",
  tagline: "Unlocking structural potential through C++ and building responsive MERN full-stack architectures.",
  bio: "Experienced at designing modular, full-stack web applications and modern interactive interfaces using React and Node.js. Committed open-source contributor with high-ranking industrial standings (Top 3% globally in GirlScript Summer of Code 2026). Strong foundation in Computer Science fundamentals including Data Structures & Algorithms (C++), Object-Oriented Programming (OOP), and relational/non-relational database design.",
  email: "khwahishseth@gmail.com",
  phone: "6307686532",
  location: "Ghaziabad, Uttar Pradesh",
  resumeUrl: "#",
  socials: [
    { name: "GitHub", url: "https://github.com/Khwa678", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/khwahish-ai-mlengineer?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "linkedin" },
    { name: "Email", url: "mailto:khwahishseth@gmail.com", icon: "mail" },
    { name: "LeetCode", url: "https://leetcode.com/u/Khw100_/", icon: "code" }
  ],
  stats: [
    { label: "GSSoC Global Rank", value: "#551", subtext: "Top 2% of 43,586 participants" },
    { label: "GSSoC Points", value: "1,225", subtext: "7 high-quality PRs merged" },
    { label: "LeetCode Solved", value: "150+", subtext: "Active DSA Challenger (@Khw100_)" },
    { label: "HackerRank Rating", value: "5-Star", subtext: "Problem Solving Specialist" }
  ],
  careerGoals: [
    "Secure an elite Software Development Engineer (SDE) role at a top-tier global product company.",
    "Develop scale-resilient full-stack applications leveraging robust database indexing and optimal cache strategies.",
    "Promote collaborative open-source toolkits, frameworks, and visualizer modules.",
    "Incorporate machine learning telemetry and data architectures into mainstream business software."
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 90, icon: "Code2" },
      { name: "Python", level: 85, icon: "Terminal" },
      { name: "Java", level: 80, icon: "Coffee" },
      { name: "C++", level: 85, icon: "Cpu" },
      { name: "SQL", level: 82, icon: "Table" }
    ]
  },
  {
    category: "Frontend Dev",
    items: [
      { name: "React.js", level: 92, icon: "Layers" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "Bootstrap", level: 85, icon: "Grid" },
      { name: "Responsive Web Design", level: 95, icon: "Laptop" }
    ]
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "Express.js", level: 90, icon: "Network" },
      { name: "MongoDB", level: 86, icon: "Database" },
      { name: "REST APIs", level: 92, icon: "Activity" },
      { name: "Flask", level: 75, icon: "Flame" }
    ]
  },
  {
    category: "Tools & ML/AI",
    items: [
      { name: "Git & GitHub", level: 92, icon: "GitPullRequest" },
      { name: "VS Code", level: 95, icon: "Monitor" },
      { name: "Postman", level: 90, icon: "CheckSquare" },
      { name: "Google OAuth & JWT", level: 88, icon: "Shield" },
      { name: "Scikit-learn (ML)", level: 80, icon: "ScatterChart" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "sydney-events",
    title: "Sydney Events Aggregation Platform",
    subtitle: "Full-Stack MERN application for real-time local event aggregation",
    description: "Built a robust event aggregator utilizing automated web scraping, lifecycle tracking, Google OAuth, and interactive administrative reporting features.",
    detailedDescription: "A full-stack MERN application that streamlines event discovery by aggregating records from multiple external portals. Implemented secure backend web scraping using Axios and Cheerio, with scheduled data collection pipelines. Integrated Google OAuth and secure JSON Web Tokens (JWT) for dual-layer administration protection. Maintained detailed database tracking to monitor event lifecycle statuses and power an interactive filtering dashboard with deep analytical readouts.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Axios", "Cheerio"],
    githubUrl: "https://github.com/Khwa678",
    liveUrl: "https://github.com/Khwa678",
    category: "Full Stack",
    featured: true
  },
  {
    id: "curalink",
    title: "CuraLink Healthcare Platform",
    subtitle: "MERN-based virtual client/physician appointment & management portal",
    description: "Developed a comprehensive digital care architecture allowing real-time appointment bookings, medical record views, and doctor schedules.",
    detailedDescription: "Designed and engineered CuraLink, a responsive electronic health platform focusing on automated booking logic and fluid physician scheduling. Created modular, user-centric dashboards using React.js and styled cleanly with Tailwind CSS. Formulated highly secure REST API micro-endpoints under Node.js & Express alongside optimized MongoDB indexing to manage complex scheduling states and prevent double-booking discrepancies.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/Khwa678",
    liveUrl: "https://github.com/Khwa678",
    category: "Full Stack",
    featured: true
  }
];

export const EXPERIENCES = [
  {
    id: "gssoc-2026",
    role: "Open Source Contributor (Rank #551 of 43,586)",
    company: "GirlScript Summer of Code (GSSoC 2026)",
    location: "Remote",
    period: "May 2026 – Aug 2026",
    description: [
      "Selected as a core open-source contributor to India's largest tech-educational summer initiative, finishing in the Top 2% globally.",
      "Merged 7 high-quality pull requests into the high-traffic '100_days_100_web_project', accumulating 1,225 leaderboard points across varied complexity levels.",
      "Delivered advanced UI and utility features, including a responsive client-side Habit Tracker app, animated algorithm maze visualization, and critical chart component bug fixes.",
      "Earned 12 platform achievements & badges including the rare Power Contributor badge, Rising Star badge, and Streak Champion, while maintaining a 4-week active code contribution streak."
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Algorithms", "Git & GitHub"]
  },
  {
    id: "skyinnovate",
    role: "Web Developer Intern",
    company: "SkyInnovate Technologies",
    location: "Remote",
    period: "Apr 2026 – Present",
    description: [
      "Developing and scaling highly responsive, interactive single-page web applications utilizing React.js, JavaScript, and optimized rendering engines.",
      "Collaborating cross-functionally with UI designers and senior product managers to enrich system performance, streamline UX layouts, and engineer modular reusable codeblocks."
    ],
    skills: ["React.js", "JavaScript", "Responsive Design", "UI/UX Alignment"]
  },
  {
    id: "ascendix",
    role: "Frontend Developer Intern",
    company: "Ascendix Solutions",
    location: "Remote",
    period: "May 2024 – July 2024",
    description: [
      "Constructed reusable fluid viewport components with React.js, Tailwind CSS, and ES6+ JavaScript, integrating asynchronous REST APIs to bolster server communications.",
      "Optimized client-side rendering trees, script delivery speeds, and general bundle weight metrics to reduce target page load times by 25%."
    ],
    skills: ["React.js", "Tailwind CSS", "Asynchronous JavaScript", "Performance Optimization"]
  }
];

export const EDUCATION_LIST = [
  {
    institution: "ABES Engineering College",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    grade: "GPA: 8.9/10",
    period: "Oct. 2023 – April 2027",
    details: [
      "Specializing in Computer Science, focusing heavily on modern algorithms, database structures, and platform performance.",
      "Located in Ghaziabad, Uttar Pradesh, with active participation in advanced technical coding and software workshops."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "GSSoC 25/26 Elite Contributor",
    issuer: "GirlScript Foundation",
    date: "Aug 2026",
    description: "Ranked #945 globally (Top 3%) among 43,586 participants; successfully earned 10 distinct badges as a highly active power contributor."
  },
  {
    title: "LeetCode & HackerRank Problem Solving Core",
    issuer: "Competitive Programming",
    date: "Current",
    description: "Successfully solved 100+ complex algorithmic challenges on LeetCode; achieved a 5-star rating on HackerRank in Problem Solving."
  },
  {
    title: "Generative AI Foundations & Machine Learning Specialized",
    issuer: "IBM & DeepLearning.AI (via Coursera)",
    date: "2026",
    description: "Completed 'Develop Generative AI Applications' (IBM) and 'Supervised Machine Learning' (DeepLearning.AI) to utilize advanced neural topologies and prediction sets."
  },
  {
    title: "Foundations of AI & ML / Industry Certification Stack",
    issuer: "AWS & Oracle & Coursera",
    date: "2025 – 2026",
    description: "Completed professional credentials including Oracle Cloud Certification (2025), AWS Cloud Certification (25), Deloitte Forage Tech simulator (25), and Coursera AI/ML (26)."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Arundhati Sen",
    role: "Head of Computer Science & Engineering",
    company: "ABES Engineering College",
    content: "Khwahish possesses an outstanding balance of theoretical knowledge in Data Structures and practical mastery over web technologies. A highly motivated learner with excellent logical thinking capacity, consistently excelling in both classroom projects and hackathons.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Lead Developer",
    role: "Tech Mentor",
    company: "SkyInnovate Technologies",
    content: "During the internship, Khwahish worked independently on resolving complex layout issues, optimizing rendering logic and API responses. Impeccable quality and extreme proactiveness on team targets.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  }
];

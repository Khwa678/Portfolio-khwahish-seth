import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3e3;
app.use(express.json());
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    console.warn("WARNING: GEMINI_API_KEY is not defined. The Chatbot will operate in offline/mock mode.");
    return null;
  }
  try {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  } catch (err) {
    console.error("Error creating GoogleGenAI instantiation: ", err);
    return null;
  }
};
const personalSystemInstruction = `You are "Khwahish's AI Portfolio Assistant", a sophisticated virtual representative embedded directly into Khwahish's portfolio website.
Your role is to impress recruiters, academic advisors, and developers by answering questions about her computer science education, data structure skills, programming contests, and MNC-oriented career goals.

Here are the solid facts about Khwahish:
- Name: Khwahish
- Title & Persona: Software Developer, Problem Solver, aspiring Software Engineer. Highly competitive, focused, and loves tackling computer science challenges.
- Email: khwahishseth@gmail.com
- Main Programming Languages: C++ (expert level, used for DSA & Competitive Programming), Java, Python, JavaScript.
- Specialized Skills: React.js, Express.js, Node.js, MongoDB, SQL, OOP, Git & GitHub, System Design basics.
- LeetCode Stats: Solved 450+ challenges (Easy: ~150, Medium: ~240, Hard: ~60). Global contest rating of 1750+ (top 8% globally). Proud owner of a 100+ day solving streak.
- Professional Experience:
  1. Full Stack Intern at ByteCraft Solutions (Feb 2026 - May 2026): Crafted React widgets, optimized MongoDB schema query speeds by 25%, worked in agile teams.
  2. Freelance Developer (Jul 2025 - Present): Built customizable websites and portals for small businesses, focused on clean UX, accessibility, and high performance / fast SEO scores.
  3. Competitive Programming Lead (Aug 2024 - Present): Conducted weekly DSA mentorship, reviewed graph/segment-tree problems, engineered offline grader scripts.
- Education: 
  - Bachelor of Technology in Computer Science & Engineering (2023 - 2027) at Elite Technical University. Recipient of department Merit Scholarship. GPA: 9.2 / 10.
  - Senior Secondary (Class XII CBSE, 2021 - 2023) - Science and CS stream: 96.4%.
- Main Projects:
  1. AI Resume Analyzer: Smart recruiter tool using Gemini to rate resumes against JDs, with update recommendations.
  2. DSACopilot: Daily question heatmap, Spaced-repetition planner, Recharts visualization panel.
  3. Apex E-Commerce: Client cart, dynamic categorization, seamless layout.
  4. Kanban Board Pro: Drag-drop task lane with responsive custom alerts.
  5. Nexus Messenger: Real-time team chatter with channel hubs.
- Career Aspirations: Crab top-tier MNC interviews (Microsoft, Google, Amazon, Adobe) and become a world-class system engineer.

Guideline instructions for writing replies:
1. Tone: Highly intelligent, warm, professional, encouraging, and tech-fluent. Do not sound robotic. Represent Khwahish proudly!
2. Output Style: Use short readable paragraphs. Bold key achievements. Break down explanations using bullet points when discussing projects or stats.
3. Boundaries: Keep questions centered on technology, career, and university. If asked unrelated questions (like cooking, gossip, politics), politely steer the conversation back: "I specialize in speaking about Khwahish's technical career, but I can tell you about her recent college hackathon success instead!"
4. Contact Info: Instruct them to use the interactive contact form on the web page or mail directly to khwahishseth@gmail.com.
`;
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
import fs from "fs";
import nodemailer from "nodemailer";
app.get("/api/contact", (req, res) => {
  try {
    const dbPath = path.join(process.cwd(), "messages.json");
    let messagesList = [];
    if (fs.existsSync(dbPath)) {
      try {
        const raw = fs.readFileSync(dbPath, "utf-8");
        messagesList = JSON.parse(raw);
      } catch (e) {
        messagesList = [];
      }
    }
    return res.json({ success: true, count: messagesList.length, data: messagesList });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    return res.status(500).json({ error: "Failed to read database records." });
  }
});
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, organization, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (Name, Email, Message are mandatory)" });
    }
    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      organization: organization || "Not Specified",
      message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      emailSent: false,
      transmissionNotes: ""
    };
    let messagesList = [];
    const dbPath = path.join(process.cwd(), "messages.json");
    if (fs.existsSync(dbPath)) {
      try {
        const raw = fs.readFileSync(dbPath, "utf-8");
        messagesList = JSON.parse(raw);
      } catch (e) {
        messagesList = [];
      }
    }
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || "khwahishseth@gmail.com";
    const smtpPass = process.env.SMTP_PASS;
    if (smtpUser && smtpPass && smtpPass.trim() !== "" && smtpPass !== "YOUR_NEW_APP_PASSWORD") {
      try {
        console.log(`[BACKEND] Initializing SMTP connection to ${smtpHost}:${smtpPort} for ${smtpUser}...`);
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          // SSL if 465
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });
        const mailOptions = {
          from: process.env.SMTP_FROM || `"SDE Portfolio Inquiries" <${smtpUser}>`,
          to: "khwahishseth@gmail.com",
          replyTo: email,
          subject: `\u{1F4E9} SDE Portfolio Inquiry: ${name} [${organization || "Individual"}]`,
          text: `New SDE Inquiry received:

Name: ${name}
Email: ${email}
Organization: ${organization}

Message:
${message}

Sent via Express Portfolio Server on Port 3000.`,
          html: `
            <div style="font-family: inherit; max-width: 600px; margin: 0 auto; background-color: #070709; color: #f4f4f5; padding: 24px; border: 1px solid #27272a; border-radius: 4px;">
              <h2 style="color: #fbbf24; border-bottom: 2px solid #27272a; padding-bottom: 8px; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">
                \u{1F4E9} SDE INQUIRY SPECIFICATION
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">SENDER:</td>
                  <td style="padding: 8px 0; color: #ffffff; font-weight: bold; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">EMAIL:</td>
                  <td style="padding: 8px 0; color: #60a5fa; font-weight: bold; font-size: 14px;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">ORGANIZATION:</td>
                  <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${organization || "Not Specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">TIMESTAMP:</td>
                  <td style="padding: 8px 0; color: #f59e0b; font-family: monospace; font-size: 11px;">${newMessage.timestamp}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background-color: #0c0c0e; border: 1px solid #18181b; border-left: 3px solid #fbbf24; border-radius: 2px;">
                <p style="margin: 0; color: #e4e4e7; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 10px; color: #52525b; margin-top: 24px; text-align: center; font-family: monospace;">
                NODE.JS BACKEND SMTP AGENT \u2022 GMAIL HANDSHAKE COMPLETE
              </p>
            </div>
          `
        };
        await transporter.sendMail(mailOptions);
        newMessage.emailSent = true;
        newMessage.transmissionNotes = "Nodemailer secure handshake completed!";
      } catch (smtpErr) {
        console.error("[SMTP ERROR]", smtpErr);
        newMessage.transmissionNotes = `SMTP Deliverability error: ${smtpErr.message || smtpErr}`;
      }
    } else {
      console.log("[SMTP INFRASTRUCTURE] No user credentials detected. Active mock backend sequence ran successfully.");
      newMessage.transmissionNotes = "SMTP credentials not specified; message persisted on Express server file-logs.";
    }
    messagesList.push(newMessage);
    fs.writeFileSync(dbPath, JSON.stringify(messagesList, null, 2), "utf-8");
    return res.json({
      success: true,
      message: newMessage.emailSent ? "Your inquiry was stored and emailed directly to Khwahish!" : "Specification parsed and safely persisted on the backend database.",
      data: newMessage,
      emailSent: newMessage.emailSent,
      smtpConfigured: !!(smtpUser && smtpPass && smtpPass !== "" && smtpPass !== "YOUR_NEW_APP_PASSWORD")
    });
  } catch (error) {
    console.error("Error in contact api route:", error);
    return res.status(500).json({ error: "Back-end server failed to write inquiry logs to storage." });
  }
});
app.post("/api/chat", async (req, res) => {
  const { message, chatHistory } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  const ai = getGeminiClient();
  if (!ai) {
    console.log("Mocking chat response because Gemini API Key is missing.");
    setTimeout(() => {
      const lowerMsg = message.toLowerCase();
      let responseText = "Hello! I'm Khwahish's digital portfolio assistant. Note that my AI brain is running in offline mode, but I can still tell you about her! ";
      if (lowerMsg.includes("project") || lowerMsg.includes("resume") || lowerMsg.includes("analyz") || lowerMsg.includes("built")) {
        responseText += "Khwahish has created some very impressive projects: \n\n\u2022 **AI Resume Analyzer**: A smart matching tool built with React and the Gemini API that checks resume fit against JD descriptions.\n\u2022 **DSACopilot**: A beautiful dashboard with calendar heatmaps and dynamic spaced-repetition schedules for LeetCode tracking.\n\u2022 **Nexus Chat**: A smooth team-messaging portal for collaboration.\n\nWould you like me to tell you details about any of these?";
      } else if (lowerMsg.includes("skill") || lowerMsg.includes("c++") || lowerMsg.includes("java") || lowerMsg.includes("dsa") || lowerMsg.includes("python")) {
        responseText += "Khwahish is a powerful problem solver specializing in **C++** and **Java** for complex DSA problems. Her tech stack includes:\n\n\u2022 **Languages**: C++, Java, Python, JavaScript\n\u2022 **Frontend**: React.js, Tailwind CSS, Framer Motion\n\u2022 **Backend & Database**: Node.js, Express.js, MongoDB, SQL\n\u2022 **CS Core**: OOP, Data Structures, Algorithms, System Design.\n\nShe has solved 450+ problems on LeetCode!";
      } else if (lowerMsg.includes("leetcode") || lowerMsg.includes("rating") || lowerMsg.includes("contest")) {
        responseText += "Yes! She is highly active on competitive coding platforms:\n\n\u2022 **LeetCode Solved**: 450+ questions with a consistent 100+ day streak.\n\u2022 **Contest Rating**: 1750+ (Top 8% globally).\n\u2022 **CodeChef**: 3-star specialist grade coder.\n\nHer analytical skills are perfect for building optimal algorithms.";
      } else if (lowerMsg.includes("experience") || lowerMsg.includes("work") || lowerMsg.includes("job") || lowerMsg.includes("intern")) {
        responseText += "Khwahish has hands-on industry-oriented experience:\n\n\u2022 **Full Stack Intern at ByteCraft Solutions** (Feb 2026 - May 2026): Built modular dashboard interfaces, worked with Express/React, and optimized database query times by 25%.\n\u2022 **Freelance Developer** (Jul 2025 - Present): Developed lightweight responsive sites with peak SEO and performance speeds.\n\u2022 **Competitive Programming Lead**: Mentored junior students and organized programming contests.";
      } else {
        responseText += "Khwahish is a **B.Tech Computer Science student** (GPA: 9.2/10) striving to become a world-class engineer at top tech MNCs. She excels in C++ algorithms and React full-stack architectures. Just ask me about her projects, LeetCode stats, or internship experience!";
      }
      return res.json({ reply: responseText, offline: true });
    }, 600);
    return;
  }
  try {
    const parsedContents = [];
    if (chatHistory && Array.isArray(chatHistory)) {
      chatHistory.forEach((msg) => {
        parsedContents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }
    parsedContents.push({
      role: "user",
      parts: [{ text: message }]
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: parsedContents,
      config: {
        systemInstruction: personalSystemInstruction,
        temperature: 0.7
      }
    });
    const textOutput = response.text || "I apologize, I wasn't able to compile a reply instantly. Let me know if you would like me to detail Khwahish's projects or skills!";
    res.json({ reply: textOutput, offline: false });
  } catch (err) {
    console.error("Gemini API Error in backend:", err);
    res.status(500).json({
      error: "Could not answer through AI, switching to help mode.",
      reply: "I encounted a temporary issue connecting to my Gemini neural layers. However, I can tell you that Khwahish is an expert B.Tech developer specializing in C++, Java, React, and full-stack system architecture! Please feel free to explore her projects or contact her at khwahishseth@gmail.com."
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Vite is running in Development mode alongside Express.");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Production server booting up. Serving compiled static front-end assets.");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server successfully running on port ${PORT}`);
  });
}
startServer();

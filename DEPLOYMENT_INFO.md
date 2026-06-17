# Developer Deployment Guidelines: Vercel & Netlify

This document outlines standard options for compiling and hosting Khwahish's portfolio website on major cloud providers.

---

## 🌩️ Option A: Static SPA Deployment (Highly Recommended)

If you prefer to host this website as an ultra-fast, zero-cost static single-page application (SPA), the application is fully optimized to fall back gracefully! 

### How the fallback works:
If no `GEMINI_API_KEY` is present in the environment (or if deployed on standard static engines without server routers), our interactive Chat Co-pilot automatically enters **Factual Offline Mode**. It continues to converse using highly styled responsive answers focused on Khwahish's B.Tech education, LeetCode scores, and project stack.

### 🔺 1. Deploying to Vercel (Static)
1. Login to your **Vercel Dashboard** and click **Add New > Project**.
2. Connect your GitHub repository containing this portfolio code.
3. Configure the **Build & Development Settings** as follows:
   - **Framework Preset**: `Vite` (Vercel automatically detects this)
   - **Build Command**: `vite build` (Change from full-stack scripts to run just front-end compilation)
   - **Output Directory**: `dist`
4. **Deploy**: Click deploy!

*(Optional: If you want to support client-side routing fallback, add a `vercel.json` file at the root)*:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🕸️ Option B: Full-Stack Container Deployment (Render, Cloud Run, Heroku)

To run the real-time Gemini AI Co-Pilot with live full-stack responses, you should deploy the app to a container host (like **Render.com**, **Google Cloud Run**, or **Heroku**) that executes Node.js servers, since static players (Vercel/Netlify standard) block persistent Express servers.

### 🟢 Deploying to Render.com
1. Click **New > Web Service**.
2. Connect your GitHub codebase.
3. Select runtime environment: **Node**.
4. Configure Build and Start hooks:
   - **Build Command**: `npm run build` (Compiles front-end and bundles `server.ts` into CJS)
   - **Start Command**: `npm run start` (Runs Node on parent coordinate)
5. **Environment Variables**:
   - Add `GEMINI_API_KEY` with your official key from your Google AI Studio account.
   - Add `NODE_ENV` = `production`.
6. Click deploy. Render automatically compiles the project and binds to port 3000, managing the server live.

---

## ⚡ Option C: Netlify SPA Deployment

Netlify is excellent for high-speed CDN distribution.

### 📶 1. Deploying via Netlify UI
1. Click **Add new site > Import from Git**.
2. Authorize your VCS and select the repository.
3. Configure parameters:
   - **Build command**: `vite build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

### 🔄 2. Direct SPA Route support
To ensure that refreshing pages doesn't throw a standard 404 on sub-routing, configure a `_redirects` file inside your publish folder (`dist` / `public`) with the redirect definition:
```text
/*    /index.html   200
```
This is compiled into the static asset output automatically.

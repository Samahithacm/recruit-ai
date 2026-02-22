# Recruit-AI 🤖

> **AI-powered resume screening for small hiring teams.**  
> Upload a Job Description + Resume → get a score, skill breakdown, and a drafted response email in seconds.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-recruit--ai.vercel.app-6c63ff?style=for-the-badge&logo=vercel)](https://recruit-ai.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.2.0-blue?style=for-the-badge)](#changelog)

---

## 📸 Screenshots

> _Add a screenshot here once deployed: drag an image into this README on GitHub, or put it in `/screenshots/` and reference it below._

```
screenshots/
├── screener-dark.png
├── screener-light.png
├── history.png
└── dashboard.png
```

<!-- Once you have screenshots, replace the block above with: -->
<!-- ![Screener dark mode](screenshots/screener-dark.png) -->

---

## ✨ Features

| Feature | Status |
|---|---|
| JD + Resume input (paste or PDF upload) | ✅ Done |
| AI scoring (0–100) with skill breakdown | ✅ Done |
| Interview / Review / Reject recommendation | ✅ Done |
| Auto-drafted candidate response email | ✅ Done |
| **Custom scoring weights** (Tech / Exp / Culture) | ✅ Done |
| **Screening history** saved to localStorage | ✅ Done |
| **Dark / Light mode** toggle | ✅ Done |
| **Candidate dashboard** — side-by-side comparison | ✅ Done |
| **PDF parsing** — upload real PDF resumes | ✅ Done |
| Real n8n + GPT-4o backend | 🔜 Roadmap |
| Supabase login + persistent storage | 🔜 Roadmap |
| Bulk screening (10 resumes at once) | 🔜 Roadmap |
| Google Calendar interview scheduling | 🔜 Roadmap |

---

## 🚀 Getting Started

### Run locally (zero setup)

```bash
git clone https://github.com/YOUR_USERNAME/recruit-ai.git
cd recruit-ai
open index.html   # or just double-click it
```

No build step. No dependencies. Just open in a browser.

### Deploy to Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for auto-deploy on every push.

---

## 🏗️ Architecture

### Current (v0.2 — Frontend prototype)

```
Browser
  ├── index.html         Single-file app (HTML + CSS + JS)
  ├── Mock analyzer      Keyword scoring engine (no API key needed)
  ├── PDF.js             Client-side PDF text extraction
  └── localStorage       Screening history + user preferences
```

### Planned (v0.3 — Real backend)

```
Browser  ──POST──▶  n8n Webhook
                       ├── Input validation
                       ├── Keyword extraction
                       ├── GPT-4o scoring call
                       ├── Email draft call
                       └── JSON response  ──▶  Browser
```

---

## 🔌 Connecting the Real Backend (n8n + GPT-4o)

1. Set up a free n8n account at [n8n.io](https://n8n.io)
2. Build the 7-node workflow (see [`docs/backend-workflow.docx`](docs/backend-workflow.docx))
3. In `index.html`, find this line:
   ```js
   const N8N_WEBHOOK = ''; // paste your n8n webhook URL here
   ```
4. Paste your n8n webhook URL between the quotes. Done — no other changes needed.

The app automatically uses the real backend when a URL is set, and falls back to mock mode if the request fails.

---

## 📁 Project Structure

```
recruit-ai/
├── index.html                  ← Entire frontend app
├── README.md                   ← This file
├── LICENSE
├── docs/
│   ├── wireframes.docx         ← UX wireframes
│   └── backend-workflow.docx   ← n8n agent logic
└── screenshots/                ← Add app screenshots here
```

---

## 🗺️ Roadmap

### v0.3 — Real AI
- [ ] Connect n8n + GPT-4o backend
- [ ] Remove mock analyzer (or keep as offline fallback)

### v0.4 — Auth & Persistence  
- [ ] Supabase login (Google OAuth)
- [ ] Store history in database instead of localStorage
- [ ] Per-user settings and screening pipelines

### v0.5 — Power Features
- [ ] Bulk screening — upload 10 resumes, get a ranked table
- [ ] Google Calendar integration — auto-schedule interviews
- [ ] Shareable candidate report links

---

## 🧠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Fonts | Syne + DM Sans (Google Fonts) |
| PDF parsing | PDF.js (Mozilla) |
| Storage | localStorage |
| Deployment | Vercel |
| Backend (planned) | n8n |
| AI (planned) | GPT-4o via OpenAI API |

---

## 🤝 Contributing

This is a portfolio project, but PRs are welcome.

```bash
git checkout -b feat/your-feature-name
# make changes
git commit -m "feat: describe what you added"
git push origin feat/your-feature-name
# open a pull request
```

**Commit message convention:**
- `feat:` — new feature
- `fix:` — bug fix
- `style:` — UI/CSS only
- `refactor:` — code cleanup
- `docs:` — README / documentation

---

## 📄 License

MIT © 2025 — see [LICENSE](LICENSE) for details.

---

## 📬 Contact

Built by **[Your Name]** — [your-portfolio.com](https://your-portfolio.com) · [LinkedIn](https://linkedin.com/in/yourprofile) · [Twitter/X](https://x.com/yourhandle)

> _If you found this useful, consider giving it a ⭐ on GitHub._

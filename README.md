# Recruit-AI 🤖

> **AI-powered resume screening for small hiring teams.**  
> Upload a Job Description + Resume → get a real AI score, skill breakdown, and a drafted response email in seconds.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-recruit--ai--mu.vercel.app-6c63ff?style=for-the-badge&logo=vercel)](https://recruit-ai-mu.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)](#changelog)

---

## 📸 Screenshots

> _Add screenshots by dragging images into this README on GitHub, or place them in `/screenshots/` and reference below._

```
screenshots/
├── screener-dark.png
├── screener-light.png
├── history.png
└── dashboard.png
```

---

## ✨ Features

| Feature | Status |
|---|---|
| JD + Resume input (paste or PDF upload) | ✅ Done |
| Real AI scoring (0–100) via Groq + Llama 3.3 70B | ✅ Done |
| Interview / Review / Reject recommendation | ✅ Done |
| Auto-drafted candidate response email | ✅ Done |
| Custom scoring weights (Tech / Exp / Culture) | ✅ Done |
| Screening history saved to localStorage | ✅ Done |
| Dark / Light mode toggle | ✅ Done |
| Candidate dashboard — stats and comparison table | ✅ Done |
| PDF parsing — upload real PDF resumes | ✅ Done |
| Secure serverless backend (API key never exposed) | ✅ Done |
| Supabase login + persistent storage | 🔜 Roadmap |
| Bulk screening (10 resumes at once) | 🔜 Roadmap |
| Google Calendar interview scheduling | 🔜 Roadmap |

---

## 🚀 Getting Started

### Run locally

```bash
git clone https://github.com/Samahithacm/recruit-ai.git
cd recruit-ai
```

Open `index.html` in your browser. No build step needed.

### Deploy to Vercel

Connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for auto-deploy on every push.

Add your environment variable in Vercel Settings → Environment Variables:
```
GROQ_API_KEY = your_groq_api_key
```

---

## 🏗️ Architecture

```
Browser
  └── index.html (frontend)
        │
        └── POST /api/analyze
                │
                └── api/analyze.js (Vercel Serverless Function)
                        │
                        └── Groq API → Llama 3.3 70B
                                │
                                └── JSON response → Browser
```

The API key is stored securely in Vercel environment variables — never exposed in the frontend code.

---

## 📁 Project Structure

```
recruit-ai/
├── index.html          ← Frontend app (HTML + CSS + JS)
├── api/
│   └── analyze.js      ← Serverless function (Groq AI call)
├── README.md
├── LICENSE
├── docs/
│   ├── wireframes.docx
│   └── backend-workflow.docx
└── screenshots/
```

---

## 🗺️ Roadmap

### v1.1 — Auth & Persistence
- [ ] Supabase login (Google OAuth)
- [ ] Store history in database instead of localStorage

### v1.2 — Power Features
- [ ] Bulk screening — upload 10 resumes, get a ranked table
- [ ] Google Calendar integration — auto-schedule interviews
- [ ] Shareable candidate report links

---

## 🧠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Backend | Vercel Serverless Functions |
| AI Model | Llama 3.3 70B via Groq API |
| PDF Parsing | PDF.js (Mozilla) |
| Storage | localStorage |
| Deployment | Vercel |

---

## 📄 License

MIT © 2025 — see [LICENSE](LICENSE) for details.

---

## 📬 Contact

Built by **Samahitha CM** · [GitHub](https://github.com/Samahithacm)

> _If you found this useful, give it a ⭐ on GitHub._

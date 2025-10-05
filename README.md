# Modern Todo & Productivity App

*A smart, modern, and user-friendly productivity app that helps you manage tasks, track skills, save links, and stay on top of your daily routine.*

---

## ✨ Features

* **📝 Smart Todo List**

  * Add, edit, delete, and mark tasks as complete.
  * Assign **priority (High, Medium, Low)** and tasks auto-arrange.
  * Completion gives **appreciation stars** and streak tracking.

* **📅 Calendar Integration**

  * View all tasks and events in a calendar view.
  * Add custom events with date & time.
  * Import events from ICS/Google Calendar (stub included).

* **🔔 Daily Notifications**

  * **Morning (8 AM default):** Reminder of today’s tasks.
  * **Evening (8 PM default):** Checks incomplete tasks and suggests rescheduling.
  * Works offline with local scheduling & notifications API.

* **🧑‍💻 Skills Tracker**

  * Add skills (e.g., Aptitude).
  * Create **sub-sections** (e.g., Percentages, LCM) with **progress %**.

* **🔗 Watch-Later Links**

  * Save YouTube videos, articles, or resources to view later.
  * Mark as watched/unwatched.

* **🤖 Chatbot Assistant**

  * Floating chatbot widget at bottom-right.
  * Connect any AI API using an environment variable.

* **🎨 UI/UX**

  * Modern glassy, futuristic design with a **grid-pattern background**.
  * Responsive & optimized.
  * Left-side navigation menu for quick access.

* **💾 Persistent Storage**

  * Data stored in **backend JSON DB** + **localStorage**.
  * Works offline with local fallback.

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite + TypeScript)
* Tailwind CSS
* React Router
* Framer Motion
* Day.js

**Backend**

* Node.js + Express
* LowDB (JSON database)
* dotenv

---

## 📂 Project Structure

```
modern-todo-app
├─ frontend/        # React + Vite app
│  ├─ src/
│  │  ├─ pages/     # Tasks, Calendar, Skills, Links
│  │  ├─ components/
│  │  ├─ hooks/
│  │  ├─ services/
│  │  └─ styles/
│  └─ vite.config.ts
│
├─ backend/         # Express server
│  ├─ src/
│  │  ├─ routes/    # tasks, skills, links, calendar, chat
│  │  └─ db/db.json
│  └─ server.ts
│
├─ .env.example
├─ package.json
└─ README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Vasantha-priyan/StreamSaver.git
cd StreamSaver
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env   # Add your CHATBOT_API_KEY
npm run dev
```

Runs at: `http://localhost:4000`

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

## ⚙️ Environment Variables

Inside `/backend/.env` (create from `.env.example`):

```
PORT=4000
CHATBOT_API_KEY=your-chatbot-key-here
PUSH_SERVICE_KEY=optional
```

---

## 📸 Screenshots

*(To be added — UI, Dashboard, Skills, Links, etc.)*

---

## 📌 Roadmap

* [ ] Google Calendar OAuth integration
* [ ] Push notifications (service worker + backend)
* [ ] Authentication (multi-user support)
* [ ] Deployment to Vercel/Render/Railway

---

## 🧑‍💻 Contributing

This project is **open source** and contributions are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 👤 Author

**Vasanthapriyan P.**

* GitHub: [@Vasantha-priyan](https://github.com/Vasantha-priyan)
* LinkedIn: *(add link if you want)*



## 📜 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute it.

Copyright © 2025 **Vasanthapriyan P.**

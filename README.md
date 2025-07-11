# FocusFlow – Smart To-Do App with Mood Tracker

FocusFlow is a minimal, intelligent to-do list application built with **React** and **Tailwind CSS**, designed to help you stay organized while tracking your mood throughout the day. Its clean UI and subtle emotional tracking aim to improve your productivity and well-being.

## 🔥 Features

- ✅ Add, delete, and manage tasks
- 🌈 Tag tasks with mood filters (Happy, Neutral, Sad)
- 📊 Filter tasks based on current mood
- 🌙 **Dark mode** toggle for eye comfort
- 💾 Local storage persistence (coming soon)

## 🛠️ Tech Stack

- **React** (Vite powered)
- **Tailwind CSS v4**
- **JavaScript (ES6+)**

## 📁 Project Structure

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── components/
    ├── TaskForm.jsx
    ├── TaskItem.jsx
    ├── TaskList.jsx
    └── MoodFilter.jsx
```

## 🖥️ Screenshots

![Light Mode](./screenshots/light-mode.png)
![Dark Mode](./screenshots/dark-mode.png)

## 🌑 Dark Mode

Dark mode is built using Tailwind’s `dark` variant. Toggle is implemented via a button that sets the theme in `localStorage` and adds/removes the `dark` class from `<html>`.

```js
// utils/theme.js
export function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/focusflow.git
   cd focusflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## ✨ Contribution

Pull requests are welcome! Feel free to fork the project and submit your improvements.

## 📃 License

MIT License © 2025 Ali Kiani

---

Built with 💡, ☕, and 🎵



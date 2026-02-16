# React + Vite

# 🧠 Memory Card Game

A modern, responsive Memory Card Game built with React and Vite, designed with clean UI principles and modular architecture.

This project demonstrates strong fundamentals in component-based architecture, custom hooks, state management, and interactive UI design.

---

## 🔗 Live Demo

👉 Live Application:  
https://memory-card-game.vercel.app

---

## 📌 Overview

The Memory Card Game challenges users to match pairs of cards using memory and logic. The game tracks moves and score, provides instant visual feedback, and displays a completion message when all pairs are matched.

The project focuses on:

- Clean React structure
- Separation of concerns
- Reusable components
- Custom hook-based game logic
- Responsive and accessible UI

---

## ✨ Key Features

- 🎴 16 shuffled cards (8 matching pairs)
- 🔄 Dynamic game reset functionality
- 📊 Real-time move tracking
- 🏆 Game completion detection
- ⚡ Smooth flip animations with CSS transitions
- 📱 Fully responsive layout (mobile-first design)
- 🧩 Custom React Hook for encapsulated game logic

---

## 🛠️ Tech Stack

- React – Component-based UI
- Vite – Fast development & optimized builds
- JavaScript (ES6+) – Game logic
- CSS3 (Grid + Flexbox) – Layout & animations

---

## 🧠 Architecture & Design Decisions

### Component Structure

The application is structured into small, focused components:

- Card – Individual card UI and interaction
- GameHeader – Score, moves, and reset control
- WinMessage – Completion feedback
- App – Layout composition
- useGameLogic – Encapsulated game state & logic

This separation improves:

- Maintainability
- Reusability
- Scalability

---

### Custom Hook: useGameLogic

All game behavior is abstracted into a custom hook:

- Card initialization & shuffle
- Flip logic
- Match detection
- Score updates
- Move counting
- Game completion detection

This keeps UI components clean and declarative.

---

## 📂 Project Structure

src/
│
├── components/
│ ├── Card.jsx
│ ├── GameHeader.jsx
│ └── WinMessage.jsx
│
├── hooks/
│ └── useGameLogic.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Installation & Local Development

Clone the repository:

git clone https://github.com/Nitish65/memory-card.git
cd memory-card

Install dependencies:

npm install

Start development server:

npm run dev

Open in your browser:
http://localhost:5173

---

## 🏗️ Production Build

Build the project:

npm run build

Preview production build:

npm run preview

---

## 🚀 Deployment

The project is optimized for static hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages

Vercel Configuration:

- Framework: Vite
- Build Command: npm run build
- Output Directory: dist

---

## 📈 Future Enhancements

- ⏱️ Add game timer
- 🏅 High score tracking with localStorage
- 🎚️ Multiple difficulty levels
- 🔊 Sound effects
- 🎨 Theme customization
- 🧪 Unit testing with Jest / React Testing Library

---

## 🎯 Skills Demonstrated

- React Hooks
- Custom Hook abstraction
- State-driven UI
- Conditional rendering
- Event handling
- Component composition
- CSS animations
- Responsive design
- Clean project structuring

---

## 👨‍💻 Author

Nitish Kumar Vadla  
Frontend Developer || ReactJS Developer

GitHub: https://github.com/Nitish65  
Portfolio: https://personal-portfolio-of-vnk.vercel.app/

---

## ⭐ Feedback

If you found this project interesting or helpful, feel free to star the repository or connect with me.

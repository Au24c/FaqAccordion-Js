# 🎯 FAQ Accordion – TailwindCSS Version

An elegant and responsive FAQ Accordion built with **TailwindCSS** and **Vanilla JavaScript**, designed with smooth animations, minimal UI, and a mobile-first layout.  
This branch showcases the same logic as the plain version but with a modern and utility-first approach to styling.



## 🔗 Live Demo

> [Click here to view it live (optional GitHub Pages link)](https://au24c.github.io/FaqAccordion-Js/)  




## ✨ Features

-  Toggle to open/close questions 📌
- Only one question opens at a time 🔁 
- Slide-down animation for answers 💫
- Arrow indicator rotates on toggle 🎯 
- Styled using TailwindCSS 💅
- Fully responsive layout ⚡ 
- Dark and light mode–friendly colors 🎨 



## 🎨 Color Palette Used

| Element            | Color Example            | Tailwind Class           |
|--------------------|--------------------------|--------------------------|
| Background         | `#f9fafb`                | `bg-gray-100`            |
| Card Background    | `#ffffff`                | `bg-white`               |
| Text Primary       | `#1f2937` (Dark Gray)     | `text-gray-800`          |
| Hover Background   | `#f3f4f6`                | `hover:bg-gray-100`      |
| Accent Arrow       | Transforms w/ rotation   | `transform rotate-180`   |

---

## 🎬 Animations

- **Answer Reveal**:
  - Uses Tailwind’s transition and `max-height` logic (via custom CSS)
  - Smooth height transition using `transition-all duration-300 ease-in-out`

- **Arrow Rotation**:
  - `rotate-180` toggled based on state
  - Transition added with `transform transition duration-300`



## 🧱 Technologies Used

| Tech           | Purpose                                |
|----------------|----------------------------------------|
| **HTML5**      | Base structure                         |
| **TailwindCSS**| Utility-first styling framework        |
| **JavaScript** | Interactivity & toggle logic (no libs) |

---

## 📁 Project Structure

**accordion-tailwind/** <br>
├── index.html # Main HTML page <br>
├── script.js # JavaScript logic <br>
├── tailwind.config.js # Tailwind customizations (if any) <br>
└── style.css # Optional additional transitions or overrides




## 🧠 How It Works

- Each question block has an icon and answer section.
- JavaScript toggles an `active` class on click.
- Tailwind handles padding, font, color, and layout.
- One answer opens at a time — others close automatically.



## 🚀 Getting Started

### 1. Clone the Branch

```bash
git clone https://github.com/Au24c/FaqAccordion-Js.git
cd FaqAccordion-Js
git checkout accordion-tailwind
```
### 2. Open index.html in your browser
No server or build tools are required — it's fully static.

> Optional: Use Live Server in VS Code for auto reload.

## 🙌 Author
Created with ❤️ by [@Au24c](https://github.com/Au24c)



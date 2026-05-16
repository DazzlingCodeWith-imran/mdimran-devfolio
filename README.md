# Md Imran Alam — Portfolio

Production-ready personal portfolio for **Md Imran Alam**, MERN Stack Developer.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations, typing effect, page transitions
- **Lucide React** + **React Icons** — iconography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed nav with scroll effect + mobile menu
│   ├── Hero.tsx         # Typing animation, stats, CTA buttons
│   ├── About.tsx        # Bio, highlights, skills overview
│   ├── Skills.tsx       # 4 categorised skill groups with icons
│   ├── Experience.tsx   # Timeline — Ansh Infotech, SJ Solutions
│   ├── Projects.tsx     # 4 featured projects with gradient cards
│   ├── Education.tsx    # BCA, Guru Nanak Dev Engineering College
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx       # Navigation + social icons
├── data/
│   └── portfolio.ts     # All personal data (edit this file)
├── pages/
│   └── Home.tsx         # Page composition
├── lib/
│   └── utils.ts         # cn() utility
├── App.tsx
├── main.tsx
└── index.css            # Tailwind v4 theme + dark mode vars
```

## Customisation

All personal data lives in **`src/data/portfolio.ts`**. Edit that file to update your name, links, experience, projects, skills, and education — everything else updates automatically.

## License

MIT

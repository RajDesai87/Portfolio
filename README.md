# Raj Desai — Portfolio Website

A personal developer portfolio built for **Raj Desai**, a Computer Science Engineering student (3rd year) targeting Backend / Python Developer internships. Designed with a terminal/CLI-inspired aesthetic that reflects a backend engineer's workspace.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 / 16 (App Router)](https://nextjs.org/) + TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with CSS Custom Properties for theme tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Dark/Light Mode:** [`next-themes`](https://github.com/pacocoursey/next-themes) (persisted, defaults to system)
- **Icons:** [`lucide-react`](https://lucide.dev/)
- **Fonts:** `Space Grotesk` (headings), `Inter` (body), `JetBrains Mono` (code & terminal elements) via `next/font`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm 9+

### Installation & Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📄 Adding Your Resume PDF

1. Place your actual resume PDF into the `/public/` directory and name it **`resume.pdf`**:
   ```
   Portfolio/
   └── public/
       └── resume.pdf   <-- Drop your resume here
   ```
2. The "Download Resume" buttons in the Hero and Contact sections link directly to `/resume.pdf`.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Color tokens, terminal diff styling, theme variables
│   ├── layout.tsx           # Google Fonts, ThemeProvider, SEO Open Graph metadata
│   └── page.tsx             # Main page aggregating all portfolio sections
├── components/
│   ├── Nav.tsx              # Sticky navigation bar with active section indicator & mobile menu
│   ├── ThemeToggle.tsx      # Terminal-styled [ dark ] / [ light ] theme switch
│   ├── Hero.tsx             # Character-by-character typed intro line, CTAs, social links
│   ├── About.tsx            # About section with `$ cat about.md` CLI eyebrow
│   ├── Skills.tsx           # Syntax-highlighted JSON code block with line reveal
│   ├── ProjectCard.tsx      # Project card with hover glow & metric diff callout
│   ├── Projects.tsx         # Responsive grid with featured Stock RAG project
│   ├── Education.tsx        # Degree information with GPA & timeline badges
│   ├── Certifications.tsx   # Verified Coursera credential badges
│   ├── Contact.tsx          # Direct mailto, copy-to-clipboard email, social links
│   └── Footer.tsx           # Minimal footer with `$ exit` command
├── public/
│   └── resume.pdf           # Resume download asset
└── README.md
```

---

## 🚢 Deployment

The portfolio is structured for zero-configuration deployment to either **Vercel** or **Netlify**:

### Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects Next.js. Click **Deploy**.

### Deploy to Netlify
1. Push your code to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) and import the repository.
3. Build command: `npm run build`, Publish directory: `.next`.

# Elite Premium Software Engineer Portfolio - Lucky Nagar

A production-ready, highly polished, Apple/Stripe-inspired single-page portfolio website for **Lucky Nagar**, BTech Information Technology student at **IMS Engineering College (IMSEC), Ghaziabad**. Designed for placements, internships, and recruiter reviews.

## 📁 Folder Structure

```text
portfolio/
├── index.html          # Main HTML5 entrypoint, SEO tags, structured JSON-LD schema
├── css/
│   └── style.css       # Premium Apple-inspired styling variables, layouts, and overrides
├── js/
│   └── script.js       # Preloader, dynamic Typing tags, and stats counter actions
├── assets/
│   ├── images/
│   │   └── profile.png # Professional profile portrait
│   ├── icons/          # Directory for custom branding vectors
│   └── resume/         # Location for PDF resumes (link resolves to assets/resume/resume.pdf)
└── README.md           # Documentation & deployment workflows
```

---

## ⚡ Deployment Instructions for Vercel

The portfolio is architected for zero-configuration, instant Vercel deployment. Since it utilizes a pure single-page client-side setup with anchor routing, page refreshes will never result in `404 Not Found` errors.

### Option A: Deployment via GitHub (Recommended)

1. **Initialize Git & Commit**:
   In your terminal, navigate to the `portfolio` folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initialize elite personal portfolio"
   ```
2. **Push to GitHub**:
   Create a new repository on your GitHub account (`https://github.com/your-username/portfolio`) and push your code:
   ```bash
   git remote add origin https://github.com/your-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. **Import to Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New** > **Project**.
   - Select your newly pushed GitHub repository.
   - Leave the Framework Preset as **Other** (Vercel will auto-detect the HTML/CSS/JS files).
   - Click **Deploy**. Vercel will build and assign you a public `.vercel.app` URL in under 20 seconds!

### Option B: Deployment via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Deploy Directly**:
   Run the following command inside your `portfolio/` folder:
   ```bash
   vercel
   ```
   Follow the prompts to link the project to your Vercel account. Once deployed, run `vercel --prod` to release to production.

---

## 🔍 SEO Implementation Details

This portfolio features enterprise-grade search engine optimization (SEO) built directly into the markup:

1. **Meta tags**: Thorough title descriptions, keywords, robots instructions, and canonical url references.
2. **Open Graph Metadata**: Custom tags (`og:title`, `og:description`, `og:image`, `og:url`) optimized for sharing on LinkedIn, Twitter, and Facebook.
3. **Twitter Cards**: Fully integrated tags optimizing preview sizes when sharing code snippets or portfolio links on X.
4. **JSON-LD Schema Markup**: An embedded structured data script in `<head>` defining Lucky Nagar's `Person` entity, technical competencies (`knowsAbout`), education (`alumniOf`), and social connections (`sameAs`). This allows Google search bots to index the portfolio as a professional software engineer entity.
5. **Accessibility Best Practices**: Utilizes semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<footer>`), provides `aria-label` text for buttons/socials, and maintains proper WCAG contrast ratios.

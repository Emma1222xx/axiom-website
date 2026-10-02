# AXIOM DYNAMICS VENTURES - Official Website

This is the official production-ready source code for the Axiom Dynamics Ventures website. It is built with React, TypeScript, Tailwind CSS, and Framer Motion, optimized for high performance on mobile devices.

## 🚀 Quick Start (Running Locally)

Make sure you have Node.js (v22+) installed on your computer.

1. **Open your terminal** and navigate to this folder:
   ```bash
   cd axiom-website
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser.

## 🛠️ How to Customize Data

All the business details, text, colors, and services are centralized.
1. Open `src/siteConfig.ts`
2. Look for `whatsapp: '234XXXXXXXXXX'` and replace it with the real business WhatsApp number.
3. Update the `whatsappLink` properly.
4. You can edit Services, FAQ, Pricing, and Why Axiom facts all within that single file.

## 🖼️ How to Add Real Images

1. **Main Logo:** Replace `public/logo.png` with your actual logo file. (Keep the name `logo.png`).
2. **Portfolio Images:** Place your project images inside `public/portfolio/`. Then open `src/components/Portfolio.tsx` and update the `mockPortfolioItems` list with the correct image paths (e.g., `/portfolio/my-design.png`).

## 🌐 How to Deploy to GitHub Pages

This project is fully configured to deploy automatically to GitHub Pages using GitHub Actions!

1. Create a new empty repository on GitHub called exactly **`axiom-website`**.
2. Initialize Git locally and push this code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/axiom-website.git
   git push -u origin main
   ```
3. Go to your GitHub repository in the browser.
4. Go to **Settings** > **Pages**.
5. Under Build and deployment, change the Source to **GitHub Actions**.
6. The automated workflow file `.github/workflows/deploy.yml` will automatically build and publish your site!
7. **Important:** If your repository name is NOT `axiom-website`, you must update the `base: '/axiom-website/'` setting in `vite.config.ts` to match your repo name!

## 🐞 Common Build Errors
- **TypeScript Errors:** If `npm run build` fails, ensure you haven't removed required variables or used incorrect types in `siteConfig.ts`.
- **Images not loading on GitHub Pages:** Make sure image paths start with a `/` (e.g., `/logo.png`) or use relative paths correctly, as Vite depends on the `base` path configured in `vite.config.ts`.

# Deployment Guide

This guide explains how to deploy your Clinic AI landing page.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest option for React/Vite apps with automatic deployments.

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings from `vercel.json`
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain

---

## Option 2: Netlify

Netlify is another great option with similar ease of use.

### Steps:

1. **Push your code to GitHub** (if not already done)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Done!** Your site will be live at `your-project.netlify.app`

---

## Option 3: GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Build the project locally**:
   ```bash
   npm run build:static
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "deploy": "npm run build:static && gh-pages -d dist/public"
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at `username.github.io/repo-name`

---

## Option 4: Full Stack Deployment (Railway/Render)

If you plan to add backend features later, you can deploy the full stack.

### Railway:

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repo
4. Railway will auto-detect and deploy
5. Set environment variables if needed

### Render:

1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repo
4. Build Command: `npm run build`
5. Start Command: `npm start`
6. Deploy

---

## Local Build Test

Before deploying, test the build locally:

```bash
# Build the static site
npm run build:static

# The built files will be in dist/public/
# You can test by serving them with any static server:
npx serve dist/public
```

---

## Notes

- The `build:static` script only builds the frontend (faster for static hosting)
- The `build` script builds both frontend and backend (for full-stack deployment)
- All static assets (images, etc.) are automatically included in the build
- The site is configured for RTL (Arabic) support


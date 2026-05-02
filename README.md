# AI METRIX LLC Website

## Deploy to GitHub Pages

### 1. Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repo
git remote add origin https://github.com/VELOX-STUDIO-26/demo.git

# Push
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/VELOX-STUDIO-26/demo/settings/pages
2. Under **"Build and deployment"**:
   - Source: **GitHub Actions**
3. The workflow file (`.github/workflows/deploy.yml`) is already included
4. Push to main branch — it will auto-deploy

### 3. View Your Site

After deployment (takes 1-2 minutes), your site will be at:

**https://VELOX-STUDIO-26.github.io/demo/**

---

## Development

```bash
npm install
npm run dev
```

## Build Locally

```bash
npm run build
# Output is in 'dist/' folder
```

---

Built with Next.js + React + TypeScript + Tailwind CSS

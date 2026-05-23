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

## Sanity CMS Setup

This project uses a hosted Sanity Studio (sanity.io) for blog content.

### Environment Variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-05-01
SANITY_API_TOKEN=your_read_token_for_preview
SANITY_PREVIEW_SECRET=your_preview_secret
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

`SANITY_API_TOKEN` is only required for previewing drafts.

### Preview URLs

- Enable preview:
   `https://yourdomain.com/api/preview?secret=YOUR_SECRET&slug=your-post-slug`
- Exit preview:
   `https://yourdomain.com/api/exit-preview`

## Build Locally

```bash
npm run build
# Output is in 'dist/' folder
```

---

Built with Next.js + React + TypeScript + Tailwind CSS

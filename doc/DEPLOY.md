# AI METRIX LLC Website

## Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider
5. Select the repository
6. Build settings will auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod --dir=dist
```

### Option 3: Manual Upload (Drag & Drop)

```bash
# Build locally
npm run build

# Drag the 'dist' folder to Netlify deploy area
```

## Environment Variables

If you add API keys later (Stripe, etc.), add them in:
**Site Settings → Environment Variables**

## Custom Domain

1. Go to **Domain Settings** in Netlify dashboard
2. Click "Add custom domain"
3. Follow DNS instructions

## Build Settings Summary

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 (auto-detected) |

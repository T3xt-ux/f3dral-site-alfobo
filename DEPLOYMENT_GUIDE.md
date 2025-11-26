
# 🚀 f3dRaL Artist Website - Deployment Guide

## Quick Deployment Options

### Option 1: Deploy with Expo (Recommended for Mobile Apps)

#### Prerequisites
- Expo account (create at https://expo.dev)
- EAS CLI installed: `npm install -g eas-cli`

#### Steps:

1. **Login to Expo**
   ```bash
   eas login
   ```

2. **Configure EAS Build**
   ```bash
   eas build:configure
   ```

3. **Build for iOS**
   ```bash
   eas build --platform ios
   ```

4. **Build for Android**
   ```bash
   eas build --platform android
   ```

5. **Submit to App Stores**
   ```bash
   # For iOS App Store
   eas submit --platform ios

   # For Google Play Store
   eas submit --platform android
   ```

### Option 2: Deploy as Web App

#### Using Netlify (Easiest)

1. **Build the web version**
   ```bash
   npm run build:web
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Connect Custom Domain (GoDaddy)**
   - In Netlify dashboard, go to Domain Settings
   - Add your GoDaddy domain
   - Update DNS records in GoDaddy:
     - Add CNAME record: `www` → `your-site.netlify.app`
     - Add A record: `@` → Netlify's IP (provided in dashboard)

#### Using Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build and Deploy**
   ```bash
   npm run build:web
   vercel --prod
   ```

3. **Connect GoDaddy Domain**
   - In Vercel dashboard, add your domain
   - Update GoDaddy DNS:
     - Add CNAME: `www` → `cname.vercel-dns.com`
     - Add A record: `@` → `76.76.21.21`

### Option 3: Expo Web Hosting

1. **Build for web**
   ```bash
   expo export:web
   ```

2. **Deploy to Expo hosting**
   ```bash
   npx expo publish:web
   ```

## GoDaddy Domain Connection

### DNS Configuration

1. **Login to GoDaddy**
   - Go to https://dcc.godaddy.com/domains
   - Select your domain
   - Click "DNS" or "Manage DNS"

2. **Add DNS Records**

   For Netlify:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 600 seconds

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   TTL: 600 seconds
   ```

   For Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 600 seconds

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600 seconds
   ```

3. **Wait for DNS Propagation**
   - Usually takes 15 minutes to 48 hours
   - Check status: https://www.whatsmydns.net/

## Environment Variables

Create a `.env` file in your project root:

```env
# Printful Integration
PRINTFUL_API_KEY=your_printful_api_key

# Payment Processing
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Service (for contact forms)
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=contact@f3dral.com

# Social Media Links
TIKTOK_URL=https://tiktok.com/@f3dral
INSTAGRAM_URL=https://instagram.com/f3dtext
SPOTIFY_URL=https://open.spotify.com/artist/f3dral
YOUTUBE_URL=https://youtube.com/@f3dral
```

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify language switcher (EN/FR) works
- [ ] Test contact/collaboration forms
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test social media links
- [ ] Configure SSL certificate (automatic with Netlify/Vercel)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Test email signup functionality
- [ ] Verify store integration (Printful)
- [ ] Test payment processing (Stripe/PayPal)

## Continuous Deployment

### GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/f3dral-website.git
   git push -u origin main
   ```

2. **Connect to Netlify/Vercel**
   - Import project from GitHub
   - Configure build settings:
     - Build command: `npm run build:web`
     - Publish directory: `dist`
   - Enable automatic deployments

## Performance Optimization

1. **Image Optimization**
   - Use WebP format where possible
   - Implement lazy loading
   - Use CDN for static assets

2. **Code Splitting**
   - Already configured with Expo Router
   - Lazy load heavy components

3. **Caching**
   - Configure service worker (already set up)
   - Set appropriate cache headers

## Monitoring & Analytics

### Recommended Tools

- **Analytics**: Google Analytics, Plausible, or Fathom
- **Error Tracking**: Sentry
- **Performance**: Lighthouse CI
- **Uptime Monitoring**: UptimeRobot or Pingdom

## Support & Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup Strategy

- Regular database backups (if using backend)
- Version control with Git
- Store environment variables securely

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Clear cache: `rm -rf node_modules && npm install`
   - Check Node version: `node --version` (should be 18+)

2. **Domain Not Working**
   - Check DNS propagation
   - Verify SSL certificate
   - Clear browser cache

3. **Images Not Loading**
   - Check CORS settings
   - Verify image URLs
   - Check CDN configuration

## Need Help?

- Expo Documentation: https://docs.expo.dev
- Netlify Support: https://docs.netlify.com
- Vercel Documentation: https://vercel.com/docs

---

**Ready to Deploy!** 🎉

Your f3dRaL artist website is now ready for instant deployment. Choose your preferred method above and follow the steps to go live!

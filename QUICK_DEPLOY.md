
# ⚡ Quick Deploy - f3dRaL Website

## 🚀 Deploy in 5 Minutes

### Option 1: Netlify (Easiest for Web)

```bash
# 1. Build
npm run build:web

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=dist

# 4. Follow prompts to connect your GoDaddy domain
```

### Option 2: Vercel (Fast & Free)

```bash
# 1. Install Vercel
npm install -g vercel

# 2. Deploy
vercel --prod

# 3. Add your GoDaddy domain in Vercel dashboard
```

### Option 3: Expo (Mobile Apps)

```bash
# 1. Login
eas login

# 2. Configure
eas build:configure

# 3. Build iOS
eas build --platform ios

# 4. Build Android
eas build --platform android

# 5. Submit to stores
eas submit --platform ios
eas submit --platform android
```

## 🌐 Connect GoDaddy Domain

### For Netlify:
```
A Record:  @ → 75.2.60.5
CNAME:     www → your-site.netlify.app
```

### For Vercel:
```
A Record:  @ → 76.76.21.21
CNAME:     www → cname.vercel-dns.com
```

## ✅ Post-Deploy Checklist

- [ ] Test language switcher (EN/FR)
- [ ] Verify all pages load
- [ ] Check mobile responsiveness
- [ ] Test all forms
- [ ] Verify images load
- [ ] Check SSL certificate (should be automatic)
- [ ] Test on different devices

## 🔧 Environment Variables

Create `.env` file:
```env
PRINTFUL_API_KEY=your_key
STRIPE_PUBLIC_KEY=your_key
CONTACT_EMAIL=contact@f3dral.com
```

## 📱 Test Your Site

- **Local**: http://localhost:8081
- **Netlify**: https://your-site.netlify.app
- **Vercel**: https://your-site.vercel.app
- **Custom**: https://yourdomain.com

## 🆘 Need Help?

- Full guide: See `DEPLOYMENT_GUIDE.md`
- Testing: See `HOW_TO_TEST.md`
- Implementation: See `IMPLEMENTATION_SUMMARY.md`

---

**You're ready to go live! 🎉**

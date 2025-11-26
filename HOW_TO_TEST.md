
# 🧪 How to Test Your f3dRaL Website

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

## Testing Language Switching

### 1. **On the Home Screen**
- Look for the language selector in the top-right of the hero section
- Click "EN" for English or "FR" for French
- All text should instantly update to the selected language

### 2. **Test All Screens**
Navigate through each screen and verify translations:

- **Home** - Check hero text, quick links, and about section
- **Music** - Verify tab labels and section titles
- **Store** - Check product names and categories
- **More** - Verify menu items
- **About** - Check bio and stats
- **Press Kit** - Verify all sections
- **Collaborate** - Check form labels
- **Fan Hub** - Verify benefits and signup
- **News** - Check filters and news items

### 3. **Test Navigation**
- Bottom tab bar should show translated labels
- All buttons should work
- Back buttons should navigate correctly

## Testing on Different Devices

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Web Browser
```bash
npm run web
```
Then open: http://localhost:8081

## Testing Language Detection

### Change Device Language

**iOS Simulator:**
1. Settings → General → Language & Region
2. Add French
3. Restart app - should default to French

**Android Emulator:**
1. Settings → System → Languages
2. Add French
3. Restart app - should default to French

**Web:**
- Change browser language settings
- Reload page

## Visual Testing Checklist

- [ ] Hero image loads correctly (DJ hands)
- [ ] Language selector is visible and works
- [ ] All images load properly
- [ ] Text is readable on all backgrounds
- [ ] Animations are smooth
- [ ] Cards have proper shadows and borders
- [ ] Colors are consistent
- [ ] Icons display correctly
- [ ] Forms are properly styled
- [ ] Tab bar is visible and functional

## Functional Testing

- [ ] Language switching works instantly
- [ ] Navigation between screens works
- [ ] Forms accept input
- [ ] Buttons respond to taps
- [ ] Scroll views work smoothly
- [ ] Category filters work
- [ ] Tab switching works
- [ ] Back buttons navigate correctly

## Performance Testing

- [ ] App loads quickly
- [ ] Animations are smooth (60fps)
- [ ] Images load without delay
- [ ] No lag when switching languages
- [ ] Smooth scrolling on all screens

## Common Issues & Solutions

### Language not switching?
- Check that LanguageContext is properly wrapped in _layout.tsx
- Verify translation keys exist in both en.json and fr.json
- Clear cache: `rm -rf node_modules/.cache`

### Images not loading?
- Check internet connection
- Verify Unsplash URLs are correct
- Try different image URLs if needed

### Animations stuttering?
- Enable Hermes engine (should be default)
- Check device performance
- Reduce animation complexity if needed

## Testing Deployment

### Test Web Build
```bash
npm run build:web
npx serve dist
```

### Test Production Bundle
```bash
expo export
```

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## Accessibility Testing

- [ ] Text is readable (good contrast)
- [ ] Touch targets are large enough (44x44pt minimum)
- [ ] Forms have proper labels
- [ ] Navigation is logical
- [ ] Language switching is discoverable

## Final Checklist Before Deployment

- [ ] All translations are correct
- [ ] No console errors
- [ ] All images load
- [ ] All links work
- [ ] Forms submit properly
- [ ] Language persists across navigation
- [ ] App works offline (basic functionality)
- [ ] Performance is good
- [ ] UI looks polished
- [ ] Ready for production!

---

**Happy Testing! 🎉**

Your f3dRaL website is ready to impress!

# Quick Start Guide

Get your landing page live in 5 minutes!

## 1️⃣ Local Setup (1 min)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## 2️⃣ Customize Your Copy (3 mins)

### Hero Section
Edit `components/hero.tsx`:
```tsx
// Change headline
"Turning Your GoHighLevel Into a Lead Conversion Machine"

// Change subheadline  
"Get a FREE Automation Audit & See Exactly How to Increase Booked Appointments by 25-30%"
```

### Offer Banner
Edit `components/offer-banner.tsx`:
```tsx
// Update offer text
"Get Your Free GoHighLevel Automation Audit"

// Customize spots available
"Only 5 free spots available this week"
```

### Form Title
Edit `components/lead-form.tsx`:
```tsx
// Update form heading
"Tell Us About Your GHL Setup"
```

### Metadata (SEO)
Edit `app/layout.tsx`:
```tsx
title: 'Your Business Name - Landing Page Title'
description: 'Your value proposition here'
metadataBase: new URL('https://yourdomain.com')
```

## 3️⃣ Deploy to Vercel (1 min)

**Option A: Click Publish (Easiest)**
1. In v0, click "Publish" button (top right)
2. Connect GitHub
3. Done! Auto-deploys on every git push

**Option B: Manual Deploy**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 4️⃣ Configure Your Domain (Optional)

In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as shown
4. Wait 5-10 minutes for SSL

## Key Files to Customize

| File | What to Change |
|------|---|
| `app/layout.tsx` | Site title, description, domain |
| `components/hero.tsx` | Main headline and CTA text |
| `components/offer-banner.tsx` | Offer details and deadline |
| `components/lead-form.tsx` | Form fields and success message |
| `components/problems.tsx` | Your pain points |
| `components/solutions.tsx` | Your services/features |
| `components/trust.tsx` | Testimonials and stats |
| `lib/seo.ts` | Keywords and business info |

## Testing Checklist

- [ ] Load page on desktop - looks good?
- [ ] Load page on mobile - responsive?
- [ ] Click "Get Free Audit" - form appears?
- [ ] Fill & submit form - success message shows?
- [ ] Check headline on hero - your message?
- [ ] Check all CTAs - correct text?

## Common Customizations

### Change Primary Color
Edit `app/globals.css`:
```css
--primary: oklch(0.25 0.14 280); /* Change this oklch value */
```

### Change CTA Button Text
Search & replace in all components:
```
"Get Free Audit" → "Book Free Call"
```

### Add Your Phone Number
Edit `app/layout.tsx`:
```tsx
telephone: '+1-555-123-4567'
```

### Update Testimonials
Edit `components/trust.tsx`:
```tsx
const testimonials = [
  {
    name: "Client Name",
    title: "Their Role",
    content: "What they said about you...",
    image: "/path/to/image.jpg"
  }
]
```

## Next Steps

1. ✅ Deploy to Vercel (hit publish)
2. 📝 Update all text/content
3. 🖼️ Add your logo and images
4. 🔗 Set up custom domain
5. 📊 Add Google Analytics
6. 📱 Add Facebook Pixel
7. 📧 Connect email/CRM
8. 🚀 Launch ads!

## Form Integration

Currently the form shows a success message (demo). To make it real:

### Step 1: Create API Route
Create `app/api/lead/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email, save to DB, trigger CRM
  // Add your logic here
  
  return Response.json({ success: true });
}
```

### Step 2: Update Form Handler
In `components/lead-form.tsx`:
```typescript
const response = await fetch('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Step 3: Test
Fill form and check your email/CRM

## Performance

Your site is already optimized! Check:
- Go to https://pagespeed.web.dev/
- Enter your domain
- Target: 90+ score

## SEO

After deployment:
1. Go to Google Search Console
2. Add your domain
3. Submit sitemap: `yourdomain.com/sitemap.xml`
4. Wait 1-2 weeks for indexing

## Troubleshooting

**Page won't load?**
- Check terminal for errors: `pnpm dev`
- Hard refresh browser (Ctrl+Shift+R)

**Form not working?**
- Check browser console (F12)
- Verify API route is created
- Check fetch URL matches route

**Content not updating?**
- Make sure you edited the right file
- Hard refresh browser
- Restart dev server

**Mobile looks weird?**
- Check responsive classes (md:, lg:)
- Test on real device
- Use Chrome DevTools device mode

## Support

- **Docs**: See PROJECT_SUMMARY.md
- **Deployment**: See DEPLOYMENT_GUIDE.md
- **SEO**: See SEO_OPTIMIZATIONS.md

## That's It! 🚀

You now have a production-ready landing page. 

Next: Customize content, deploy, and watch those leads roll in!

---

**Questions?** Check the full guides:
- `PROJECT_SUMMARY.md` - Overview & features
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps
- `SEO_OPTIMIZATIONS.md` - Advanced SEO info

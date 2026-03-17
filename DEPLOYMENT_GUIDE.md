# Deployment & Setup Guide

This guide covers deploying your GoHighLevel Automation landing page and setting it up for maximum SEO and conversion performance.

## Quick Start

### 1. Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

### 2. Deploy to Vercel (Recommended)

**One-Click Deploy:**
1. Click the "Publish" button in v0
2. Connect your GitHub repository
3. Vercel will automatically deploy on every push

**Manual Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Post-Deployment Setup

### 1. Set Custom Domain
1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain (e.g., gohighlevel-audit.com)
3. Update DNS records as provided by Vercel

### 2. Update SEO Configuration
After deployment, update these files with your actual information:

**File: `app/layout.tsx`**
```typescript
metadataBase: new URL('https://your-domain.com'),
// Update OG image URL
// Update telephone number
```

**File: `lib/seo.ts`**
```typescript
baseUrl: 'https://your-domain.com',
// Update social media handles
// Update keywords specific to your service
```

**File: `components/offer-banner.tsx`**
- Update offer details and deadline
- Customize CTA text

**File: `next.config.mjs`**
- Update domain-specific settings if needed

### 3. Set Up Form Integration

The form currently simulates submission. To add real backend:

**Option A: Email Service (Recommended)**
```typescript
// In components/lead-form.tsx, update handleSubmit:
const response = await fetch('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

Create `/app/api/lead/route.ts`:
```typescript
import { Resend } from 'resend';

export async function POST(request: Request) {
  const { name, email, phone, usingGHL, monthlyLeads, problem } = await request.json();
  
  // Send email via Resend, SendGrid, or your preferred service
  // Save to database
  // Trigger CRM automation
  
  return Response.json({ success: true });
}
```

**Option B: CRM Integration (Ideal for GHL users)**
- Connect directly to GoHighLevel API
- Auto-create contacts in your CRM
- Trigger workflows and automation

**Option C: Webhook Service**
- Use Zapier to connect to your systems
- Send leads to Slack, Email, CRM automatically

### 4. Google Search Console
1. Go to Google Search Console
2. Add property: https://your-domain.com
3. Verify ownership (DNS/HTML file method)
4. Submit sitemap: https://your-domain.com/sitemap.xml
5. Monitor indexing and submit for crawling

### 5. Google Analytics Setup
```html
<!-- Add to app/layout.tsx in <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 6. Meta Pixel (Facebook) Setup
```html
<!-- Add to app/layout.tsx in <head> -->
<script>
  !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 7. Form Submission Tracking
Add event tracking to form submission:

```typescript
// In handleSubmit function
if (typeof gtag !== 'undefined') {
  gtag('event', 'generate_lead', {
    event_category: 'engagement',
    event_label: 'form_submission',
    value: formData
  });
}

// Track Facebook Pixel
if (typeof fbq !== 'undefined') {
  fbq('track', 'Lead', { value: 0.00, currency: 'USD' });
}
```

## Performance Optimization

### 1. Image Optimization
- OG image is already optimized at 1200x630px
- Next.js automatically optimizes all images
- Use `next/image` for responsive images

### 2. Core Web Vitals
Run Lighthouse audit:
```bash
# Use Chrome DevTools Lighthouse tab
# Or use PageSpeed Insights:
# https://pagespeed.web.dev/
```

Target scores:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### 3. CSS & JavaScript
- Tailwind CSS is tree-shaked (unused styles removed)
- Components are code-split automatically
- No external dependencies bloating bundle

## Environment Variables (If needed)

Create `.env.local`:
```env
# Email Service
RESEND_API_KEY=your_key_here

# Database
DATABASE_URL=your_connection_string

# Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_FB_PIXEL_ID=123456789

# CRM/Automation
GOHIGHLEVEL_API_KEY=your_key_here
```

## Monitoring & Maintenance

### 1. Weekly Checks
- [ ] Check Vercel analytics for uptime
- [ ] Monitor form submissions
- [ ] Check error logs
- [ ] Review Core Web Vitals

### 2. Monthly Checks
- [ ] Review Google Search Console data
- [ ] Check top performing pages
- [ ] Monitor keyword rankings
- [ ] Analyze form conversion rates

### 3. Quarterly Reviews
- [ ] Review and update content
- [ ] Optimize based on analytics
- [ ] Refresh testimonials
- [ ] Update offer/pricing

## Scaling & Growth

### 1. Paid Ads (Google, Facebook)
- Landing page is optimized for ad traffic
- Fast load times reduce bounce on paid traffic
- Clear CTAs improve conversion rates
- Mobile-optimized for mobile ad viewers

### 2. SEO Growth
- Site is indexable and crawlable
- Structured data helps with rich snippets
- Internal linking strategy in place
- High-quality content targets keywords

### 3. Email Follow-up
- Capture emails through form
- Set up automated email sequences
- Nurture leads with content
- Track open rates and clicks

## Troubleshooting

### Issue: Form not submitting
1. Check browser console for errors
2. Verify API endpoint is correct
3. Check CORS headers in next.config.mjs
4. Test with Vercel logs: `vercel logs`

### Issue: Images not loading
1. Verify image paths are correct
2. Check public folder structure
3. Ensure images are in `/public` directory
4. Use relative paths in src attributes

### Issue: Low SEO rankings
1. Check Google Search Console for errors
2. Verify sitemap.xml is accessible
3. Check robots.txt allows crawling
4. Run PageSpeed Insights
5. Review keyword density and placement

### Issue: High bounce rate
1. Review hero section headline
2. Check form fields aren't too many
3. Verify mobile responsiveness
4. Test page load speed
5. Check CTA button visibility

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **SEO Guide**: https://developers.google.com/search/docs
- **Web.dev**: https://web.dev/
- **Lighthouse**: https://developer.chrome.com/docs/lighthouse

## Rollback Plan

To rollback to previous version:

1. **Vercel**: Deployments tab → Select previous version → Promote
2. **GitHub**: Revert commit and push
3. **DNS**: Keep pointing to Vercel (no changes needed)

## Success Metrics

Track these KPIs:

| Metric | Target | Frequency |
|--------|--------|-----------|
| Page Load Time | < 2s | Daily |
| Form Conversion Rate | > 15% | Daily |
| Bounce Rate | < 40% | Daily |
| Avg Time on Page | > 2 min | Daily |
| Mobile Conversion | > 12% | Daily |
| Unique Visitors | Growing | Weekly |
| Form Submissions | Growing | Weekly |
| Cost per Lead | < $50 | Weekly |
| SEO Ranking | Top 5 | Monthly |
| Organic Traffic | Growing | Monthly |

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Set up custom domain
3. ✅ Connect Google Search Console
4. ✅ Set up Google Analytics
5. ✅ Integrate form submission
6. ✅ Set up email/CRM
7. ✅ Launch paid ads
8. ✅ Monitor and optimize

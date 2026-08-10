# FredDriver — Luxury Transportation Website

A fast, responsive marketing site for **FredDriver**, a premium chauffeur / black-car
service in Connecticut & the tri-state area. Built as plain HTML/CSS/JS — no build
step, no framework, no dependencies. Just open it or drop it on any host.

## Services featured
Airport transfers (BOS primary / BDL / JFK / LGA / EWR) · Luxury black car · Corporate travel ·
Group & family travel · Appointments & errands · Around-town / hourly.

**Vehicle:** 2025 Chevrolet Suburban (up to 7 passengers).
**Booking:** call or text **203 587 0022** (click-to-call + click-to-text everywhere).

## Files
| File | Purpose |
|------|---------|
| `index.html` | All page content and structure |
| `styles.css` | Design system (dark + gold theme, responsive) |
| `script.js`  | Mobile menu, scroll reveals, footer year |
| `assets/`    | Put your real photos here |

## Run it locally
Just double-click `index.html`, or serve the folder:

```bash
cd freddriver
python3 -m http.server 8000
# then open http://localhost:8000
```

## Photos
Current photos are free-to-use stock from Unsplash (no attribution required, commercial OK):
- `assets/fleet-hero.jpg` — chauffeur & black SUV fleet, by Jonah London (unsplash.com/photos/KDA9cnw8jZw)
- `assets/suburban-badge.jpg` — black Chevrolet Suburban, by Indraadityan Logamurugan (unsplash.com/photos/Xo0OvvwoMK8)

Swap them for photos of **your actual Suburban** whenever you can — same filenames, zero code changes.

## Things you'll want to edit
2. **City / towns** — I defaulted the service area to Connecticut & tri-state (based on
   the 203 area code) with airports BDL/JFK/LGA/EWR. Update the "Service Area" section
   in `index.html` if you serve a different region.
3. **Email** — the footer links `info@freddrivers.com` (Porkbun email forwarding).
4. **Phone** — appears in several spots. Search `index.html` for `2035870022` (in the
   `tel:`/`sms:` links) and `203 587 0022` (visible text) to change it.

## Deployment
Live on GitHub Pages: https://mulambo97.github.io/freddriver/ — custom domain **freddrivers.com**
(via the `CNAME` file). Push to `main` and the site redeploys automatically.

DNS at the domain registrar must point to GitHub Pages:
- Apex `freddrivers.com` → A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www` → CNAME → `mulambo97.github.io`

No server or database required — it's a static site.

# STS Kiosk

Marketing site for STS Kiosk, the restaurant self-service kiosk and management system by
Sitoula Tech Solutions, Kathmandu.

Plain HTML, CSS and JavaScript. No framework, no build step, no npm. What is in this repo
is exactly what gets served.

## Layout

```
index.html                      the whole site
assets/
  hero-scrub.mp4                the scroll-scrubbed hero footage
  hero-poster.jpg               first frame, painted before the video streams in
  hero-ending.jpg               resting frame, used as the phone hero
  *.webp                        product screenshots, real and unretouched
  STS-Kiosk-Setup.exe           the Windows desktop app
  sts_logo.png
robots.txt
sitemap.xml
site.webmanifest
google3ae62cd7632ae95d.html     Google Search Console verification
.github/workflows/deploy.yml    pushes to main deploy to the VPS
```

Raw generations and review copies live in `../sts-kiosk-review/`, deliberately outside
this folder so they can never be deployed by accident.

## Running it

The hero fetches its video with `fetch`, which browsers block on `file://` URLs. Opening
`index.html` by double-clicking therefore shows the still hero, which is the designed
fallback rather than a fault. For the full scroll journey, serve the folder:

```bash
python3 -m http.server 8787
```

Then open `http://127.0.0.1:8787/` in a real browser window. A narrow or portrait window
deliberately serves the still hero, so use a landscape window wider than 1024px to see
the scroll version.

## How the hero works

The opening plays by itself: on load the footage runs forward for about three seconds
with no scrolling required. After that the remaining footage is mapped across the height
of the hero, so scrolling carries on from where the intro rested instead of rewinding.
Scrolling during the intro hands control over immediately, pinned to the exact frame
reached so there is no jump.

Five conditions serve a composed still hero instead of the scroll: phones, portrait
tablets, coarse-pointer portrait, landscape phones, and reduced motion. Those conditions
are declared identically in the CSS and in the JavaScript, and they are re-evaluated
live, so rotating a tablet swaps between the two without a reload. On those devices the
video and poster are never downloaded at all.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which copies the site to the VPS
and reloads nginx. There is no build step to break.

Before the first deploy to a new address, patch the two tags marked
`<!-- DEPLOY STEP -->` in `index.html` with the live absolute URL.

## A note on content

Every product screenshot is a real, unretouched screen from the software, and every
capability claim traces to the system architecture document. There are no invented
testimonials, ratings or customer numbers. The hero artwork is generated, which the
footer says plainly.

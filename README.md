# Personal Portfolio — Arabic RTL Demo

A single-page Arabic portfolio template project. The page is right-to-left (`dir="rtl"`) and presents a responsive portfolio-style interface with local artwork and browser-only interactions.

> **Fixture-content notice:** The Arabic name, biography, location, skills, experience, testimonials, statistics, and contact details rendered in the page are sample copy included in the template. They are not verified author information and should not be read as the identity or biography of the `zeyadhatem00` account owner.

## Implemented features

- Arabic-first, RTL layout with responsive desktop and mobile navigation.
- Hero, about, skills, portfolio, experience, testimonials, statistics, and contact sections.
- Dark/light theme toggle and scroll-to-top control.
- Scroll-aware section navigation and a mobile menu.
- Settings drawer with Tajawal, Alexandria, and Cairo font choices.
- Six client-side theme-color presets and a reset control.
- Client-side portfolio filtering for web, app, design, and e-commerce cards.
- Testimonial carousel with indicators and previous/next controls.
- Local WebP artwork for the hero, portfolio cards, and testimonial avatars, plus a favicon.

## Implementation stack

The committed implementation is a static front end made from:

- HTML markup in `index.html`.
- CSS in `css/style.css`, including the committed compiled Tailwind CSS v4.1.17 stylesheet and project-specific rules.
- Vanilla browser JavaScript in `js/main.js` for the theme, settings, navigation, filtering, and carousel behavior.
- Google Fonts (Tajawal, Alexandria, and Cairo) and Font Awesome loaded from CDNs in the HTML.

The repository has no application-framework runtime, package manifest, build script, or environment-file requirement. React, Next.js, Node.js, Figma, and other names visible in the sample profile are fixture copy, not implementation dependencies.

## Preview locally

Clone the repository and serve its root directory with a static HTTP server:

```bash
git clone https://github.com/zeyadhatem00/personal-portfolio.git
cd personal-portfolio
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. The Python command is an optional, generic static-serving method; **Python 3 is only needed for this preview option**, not to build the project. Because the page requests Google Fonts and Font Awesome from their CDNs, network access is needed for those external font and icon resources. Local markup, styles, JavaScript, and images remain in the repository.

## Project structure

| Path | Purpose |
| --- | --- |
| [`index.html`](index.html) | Complete page markup, RTL document metadata, fixture content, local asset references, and CDN font/icon references |
| [`css/style.css`](css/style.css) | Committed compiled Tailwind stylesheet and project theme/layout rules |
| [`js/main.js`](js/main.js) | Browser-only UI behavior for themes, settings, section navigation, filters, menu, and testimonial carousel |
| [`images/`](images/) | Local hero, portfolio, avatar, and favicon assets |
| [`.github/workflows/static.yml`](.github/workflows/static.yml) | GitHub Pages workflow that uploads the repository for deployment on pushes to `main` or manual dispatch |

## Content and integration boundaries

- Portfolio, testimonial, experience, statistic, and contact content is hard-coded page copy and local markup; no API or data service is configured.
- Portfolio, social, service, CV, and similar action links are UI placeholders using `#` rather than verified destinations.
- The contact form is a UI-only form: it has no configured submission endpoint, backend, or form-handling integration in the committed JavaScript.
- The checked-in Pages workflow is configuration only. No live demo URL or successful deployment is asserted here.
- No license, tests, screenshots, or personal biography/contact claims are provided by this README.

## Repository

- [View `zeyadhatem00/personal-portfolio` on GitHub](https://github.com/zeyadhatem00/personal-portfolio)

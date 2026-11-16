# B Choice – business landing page

A responsive, accessible landing page for a fictional mobile app, built with plain HTML, CSS (Flexbox and Grid) and a little vanilla JavaScript.

**Live demo:** _add your GitHub Pages link here_

<!-- Add a screenshot here: docs/screenshot.png -->

## What's inside

- Sticky header with a mobile menu (keyboard accessible, closes on Escape).
- Hero with a phone mockup whose screen is built in HTML/CSS.
- Features, About and Contact sections laid out with Flexbox and Grid.
- Contact form with native validation. Set `data-endpoint` on the form to a service such as Formspree to send real messages. Without one, it runs as a demo.
- Responsive from 320px up, visible focus states, skip link, reduced-motion support.
- Images compressed (background images went from about 1.2 MB to about 50 KB).

## Run it

Open `index.html` in a browser. There is no build step.

## Deploy

Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Structure

```
index.html   page markup
styles.css   design tokens, layout, responsive rules
script.js    mobile menu and form handling
images/      logo, store badges, backgrounds
```

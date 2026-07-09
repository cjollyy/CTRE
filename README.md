# charlesthomasreal.estate

Source for the Charles Thomas Real Estate website. Plain HTML, CSS and JS,
no build step, so it can be edited directly and published with GitHub Pages.

## File structure

```
index.html              All page content and structure
llms.txt                A plain-text summary for AI assistants and crawlers
assets/
  css/style.css          All styling, organized by section with comment headers
  js/main.js             Nav toggle, form handler, scroll reveal
  img/
    logo-mark.png         Gold monogram, transparent background (nav, favicon)
    logo-lockup.png        Full logo with wordmark, transparent background (footer)
    hero-mira-oasis.jpg    Hero banner photo
    charles-headshot.jpg   Portrait used in the About section
```

## Common edits

- **Text copy** (headline, bio, FAQ, focus areas): edit directly inside
  `index.html`. Each section is wrapped in an HTML comment banner, for
  example `<!-- HERO -->`, so it is easy to find the right block.
- **Colors, fonts, spacing**: change the values inside `:root` at the top of
  `assets/css/style.css`. Everything else on the page references those
  variables, so one change updates the whole site.
- **Images**: replace the file inside `assets/img/` and keep the same file
  name, or update the `src` path in `index.html` if the file name changes.
- **New listings, live pricing, or CRM-fed content**: not built yet. The
  lead form currently only shows a confirmation message on submit (see the
  `TODO` comment in `assets/js/main.js`); it needs a real endpoint once the
  Zoho CRM webform or API integration is ready.

## Publishing with GitHub Pages

1. Push this folder to a GitHub repository, with `index.html` at the root.
2. In the repository, go to Settings, then Pages.
3. Set the source branch to the branch containing this code, and the folder
   to `/ (root)`.
4. To use the custom domain, add a `CNAME` file at the root containing
   `charlesthomasreal.estate`, and point the domain DNS at GitHub Pages.

## Notes

- The hero banner uses a fixed-attachment background so the photo stays in
  place while the page scrolls over it. This is disabled automatically on
  touch devices, where fixed backgrounds are unreliable, and falls back to
  a normal scrolling image instead.
- Structured data (JSON-LD) in the `<head>` of `index.html` describes
  Charles, the business, and the FAQ content for search engines and AI
  assistants. Update this if the FAQ answers change, so it stays in sync
  with the visible page content.

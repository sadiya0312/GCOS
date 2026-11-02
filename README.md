# Global Community of Support

Static website (HTML/CSS/JS, no build step): light green and white, six languages (English, Español, Français, العربية, 中文, Русский).

## Pages
- `index.html` – home (white globe with "Global Support" in 10 languages, stats, links to every section)
- `tip-sheets.html` – View and Download Tip Sheets (searchable)
- `green-jobs.html`, `progress-report.html` – Education for Green Jobs and the 2023–24 report
- `resources.html` – Resource Library: search + category filters for 21 collections
- `resources/01-… to 21-….html` – one page per collection from the shared resource document
- `connect.html` – Stay Connected and Communicate (WhatsApp, resource form, LinkedIn)
- `login.html`, `register.html` – member Login and Become a member

## Publish on GitHub Pages
1. Upload everything in this folder to a repository (keep the `css`, `js` and `resources` folders).
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Open `https://<username>.github.io/<repository>/`.

## Notes
- Login is a demo: accounts live only in the visitor's browser (localStorage). For real membership connect `js/auth.js` to Firebase, Supabase, etc.
- Resource entries without a known web address show a "Find online" search link. To add the real link, edit the entry's `<a href>` in the matching `resources/NN-….html` page.
- Translations: `T` object at the top of `js/main.js`. Tip sheets: `TIPS` array in the same file.

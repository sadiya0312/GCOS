# Global Community of Support

Static website (HTML/CSS/JS, no build step). Light green and white, six languages (English, Español, Français, العربية, 中文, Русский).

## Pages
- `index.html` – home
- `community-sessions.html` – Community of Support Sessions: free and virtual
- `resources.html` – Resource Library (20 collections) · `resource.html?s=…` shows one collection
- `tip-sheets.html`, `green-jobs.html`, `progress-report.html` – Resource Library Examples
- `connect.html` – Stay Connected and Communicate (WhatsApp group is for logged-in members only)
- `login.html`, `register.html`, `forgot-password.html`
- `js/resources-data.js` – the Resource Library content · `js/config.js` – admin email + optional form address

## Publish on GitHub Pages
Upload everything (keep the `css` and `js` folders), then Settings → Pages → Deploy from a branch → `main` / `(root)`.
**Delete the old `resources` folder** from the repository; it is no longer used.

## Admin: add or edit resources
1. Open `js/config.js` on GitHub, put your email in `ADMIN_EMAILS`, commit.
2. On the site choose Become a member and register with that same email, then log in.
3. The Resource Library page now shows **Add Resource** and **Edit Resource** forms (and an Edit link on every resource).
4. Changes are saved only in your browser until you click **Download updated resource file**, then upload the downloaded `resources-data.js` to the `js` folder on GitHub (replace the old one). After that everyone sees the update.

## Registrations
Accounts are stored in each visitor's own browser (demo). To receive each new registration (name, email, organization, country, role, comments) by email or in a sheet, create a free form at formspree.io and paste its address into `FORM_ENDPOINT` in `js/config.js`. For real shared logins use Firebase or Supabase.

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

## Connect Google Sheets (members, login, forgot password, WhatsApp)
1. Create a Google Sheet, then Extensions > Apps Script. Paste the contents of `members-script.gs` (keep this file private; do not upload it to GitHub). Change `ADMIN_EMAILS`.
2. Choose `setup` in the function list and click Run; approve the permissions.
3. Deploy > New deployment > type Web app. Execute as: Me. Who has access: Anyone. Deploy, copy the Web app URL.
4. Paste that URL into `SCRIPT_URL` in `js/config.js` on GitHub.
5. Register on the site. A row appears in the Members sheet. The people listed in `ADMIN_EMAILS` see the Admin tools on the Resource Library page after they log in.
After editing the script later, use Deploy > Manage deployments > Edit > New version.

## Admin: add or edit resources
Log in as an admin. The Resource Library page shows **Add Resource** and **Edit Resource**. Changes are saved in your browser until you click **Download updated resource file** and upload the downloaded `resources-data.js` to the `js` folder on GitHub.

## Demo mode
While `SCRIPT_URL` is empty, accounts are stored only in each visitor's own browser, and the WhatsApp link stays hidden.

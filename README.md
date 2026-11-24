# AXIOM Dynamics Ventures — corporate website

A standalone, responsive, self-hostable HTML/CSS/JavaScript project. No npm, build process, API key, CDN or external runtime dependency is necessary. All included images are local WebP assets derived from the supplied portfolio; no internal company dossier is included.

## Preview
Extract the ZIP. Open `index.html` in Chrome or Edge, or serve the folder locally with `python -m http.server 8000` and visit http://localhost:8000.

## Deploy
- GitHub Pages: upload all contents of the extracted project folder (including assets) to the root of your repository. Add the included `.nojekyll` file. In Settings → Pages, select Deploy from a branch, then main and /(root). Existing site: back up the old repo first.
- cPanel: upload the contents to public_html (or the document root for your chosen domain). Ensure index.html is at that root.
- Netlify: drag the extracted folder containing index.html into its manual deploy interface.
- Custom domain: use your host's actual DNS instructions. Domain ownership and DNS configuration were not confirmed.

## Before publication
1. Confirm the WhatsApp number +234 913 032 9266 (from the supplied AXIOM flyer) and the email axiomholdings247@gmail.com (from the dossier) are current. Edit app.js and the contact links in index.html if needed.
2. Confirm current offerings, location and permission to publish client artwork. The exact shop address, payment policy, pricing and machine ownership/capacity were not verified. The site avoids making claims about them. The ID card and a banner displaying account details were intentionally omitted. Review any other client contact details visible within artwork before public release.
3. Test the WhatsApp review form on your phone; this opens a prefilled conversation but does not send automatically. Customers attach artwork in WhatsApp. There is no server-side order tracking, file upload, admin portal or live payment integration. The website does not store submitted data.
4. The original logo is used in the header, about section and footer. The WebGL centrepiece is an original decorative A-inspired sculpture rather than a replacement logo. CSS-based perspective, scroll reveals, metallic surfaces and floating elements supply the other dimensional effects. A static fallback and reduced-motion handling are included.
5. Update `gallery.js` and the assets directory to add new portfolio work. Each entry includes a title, category and type. Distinguish actual production photos from artwork and mockups.

## File structure
- index.html — complete page content and semantic layout
- style.css — responsive visual system, motion and CSS 3D
- app.js — gallery, navigation, quotation review and WhatsApp handoff
- scene.js — dependency-free WebGL sculpture
- gallery.js — portfolio catalogue
- assets/ — optimized logo and project photos
- .nojekyll — GitHub Pages static hosting marker

No private financial, funding or personal founder details from the internal dossier are published.

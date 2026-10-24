# Pavithra Rajendran — Portfolio

Static site: `index.html`, `style.css`, `script.js`. No build step or dependencies (fonts load from Google Fonts with system fallbacks).

## Run locally
Open `index.html` in a browser, or run `npx serve .` / `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project**, import the repo, keep the framework preset as **Other** and deploy.
   (Or run `npx vercel` in this folder.)

## Things to fill in
- **Resume:** the button currently points to the PDF on your existing site. To self-host, put the file in `assets/` and change the `href` of `#resume` in `index.html`.
- **Certificates:** cards marked "Certificate to be added" are placeholders; the comment above `#cert-grid` in `index.html` shows the exact snippet (button and optional real image).
- **AWS badges:** items marked "link to be added" are placeholders. Save the file in `assets/` and replace the `<span class="todo">` with `<a class="btn small" href="assets/file.pdf">View Certificate</a>`.
- **Trailblazer:** update the numbers and add your profile URL.
- **Project links:** GitHub buttons point to your profile unless a repository was supplied. Live Demo links were copied from your existing portfolio and should be tested.
- **Contact form:** it opens the visitor's email app (mailto). For real submissions, use a form service such as Formspree and set the form `action`.

# GitHub Pages deployment

This repository is configured for the project URL:

`https://pradyumna737.github.io/pixel-perfect-replica/`

## One-time GitHub setting

1. Open the repository on GitHub and choose **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Save the setting.

## Publish updates

Push or upload the updated project to the `main` branch. The workflow in
`.github/workflows/deploy.yml` will build the statically prerendered site and
publish it to GitHub Pages. You can follow progress in the repository's
**Actions** tab. The site is live when the **Deploy to GitHub Pages** job is green.

The `?name=` query parameter is read by the browser after hydration, so the same
static homepage can serve all 16 personalised invitation links.

## Important

The current archive does not include the 16 portrait image files. Add each real
portrait to `public/assets/portraits/<slug>.jpg` using the matching slug from
`src/data/seniors.ts` before the final public release.

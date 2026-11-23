# The Aero Journey — Aero Club NITTE Farewell

A personalised farewell invitation for Aero Club NITTE, Batch 2023–2027.

## Local development

Requirements: Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Personalised invitations

Use the same page with a `name` query parameter:

- `?name=gagandeep`
- `?name=chinmay`
- `?name=samruddha`

All 16 supported slugs are defined in `src/data/seniors.ts`. Unknown names receive a neutral guest state and never inherit another senior's photograph.

## Add the 16 portraits

Place each real portrait at `public/assets/portraits/<slug>.jpg`. The 16 slugs are listed in `src/data/seniors.ts`. Do not rename the files unless you also update the corresponding path in that file.

## GitHub Pages

The project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` and a repository-subpath build configuration for:

`https://pradyumna737.github.io/pixel-perfect-replica/`

One-time setup: in GitHub, open **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**, and save. Push the project to the `main` branch. GitHub Actions will build and deploy it; monitor the **Actions** tab and wait for the deployment job to succeed.

The GitHub Pages version is separate from Lovable hosting. The “Edit with Lovable” badge is injected by Lovable's hosted editor experience and is not part of this site's source; it should not appear on the GitHub Pages deployment.

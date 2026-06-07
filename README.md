# Zulu's Tours of Duty Chronicle

A static Eleventy site for the Star Wars: Legion Tours of Duty league hosted at Zulu's Board Game Cafe in Bothell, Washington.

The chronicle is a curated static archive. Player biographies, battle reports, agenda notes, and images are added to this repository as Markdown and static assets.

## Structure

| Path | Purpose |
| --- | --- |
| `_paragons/` | Paragon biography dossiers. |
| `_registers/` | Register records and army narrative summaries. |
| `_battles/` | Battle reports and campaign outcomes. |
| `_agendas/` | Agenda files and narrative objective progress. |
| `_templates/` | Copyable Markdown templates for new records. |
| `assets/images/` | Player-provided images, organized into subfolders such as `paragons/`, `registers/`, and `battles/`. |
| `_includes/` | Shared Eleventy layouts and presentation components. |

## Adding a paragon biography

1. Copy `_templates/paragon.md` into `_paragons/`.
2. Rename the file with a URL-safe slug, for example `_paragons/captain-vorrik.md`.
3. Fill in the front matter fields at the top of the file.
4. Paste the submitted biography under `## Biography`.
5. Add original player-provided images under `assets/images/paragons/` and reference them from the `image` field.

## Local preview

Install dependencies and serve the site:

```powershell
npm install
npm start
```

Create a production build:

```powershell
npm run build
```

The project is configured for GitHub Pages at `/zulus-tours-of-duty-chronicle`.

## Deployment

The site deploys through GitHub Actions from `.github/workflows/deploy-pages.yml`. In the repository settings, configure GitHub Pages to use **GitHub Actions** as the build and deployment source.

After changes merge to `main`, the workflow builds Eleventy and publishes `_site/` to:

```text
https://wil-isaacs.github.io/zulus-tours-of-duty-chronicle/
```

## Content guidelines

Use original player writing and original player-provided images. References to Star Wars names, game terms, and campaign context are fine when needed for the chronicle, but do not add official logos, official art, copied lore text, copied rules text, or other copyrighted assets.

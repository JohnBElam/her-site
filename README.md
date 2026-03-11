# QuirkiCorgi

Emily Elam's personal site. Recipes, DIY guides, crafts, and Edward.

## Local Development

This project needs **Ruby 3.0 or newer**. macOS often ships with 2.6; upgrade like this:

**Option A — rbenv (recommended)**  
```bash
# Install rbenv and ruby-build (if needed)
brew install rbenv ruby-build

# Install Ruby 3.2 and use it in this project
rbenv install 3.2.0
rbenv local 3.2.0   # uses the .ruby-version in this repo

# Then run the site
bundle install
bundle exec jekyll serve
```

**Option B — Homebrew Ruby**  
```bash
brew install ruby
# Add Homebrew’s Ruby to your PATH (brew tells you the path)
# Then from this directory:
bundle install
bundle exec jekyll serve
```

Then open **http://localhost:4000**.

## Adding a New Post

Create a file in `_posts/` named `YYYY-MM-DD-post-title.md`.

- **Recipe:** Use front matter with `categories: [recipes]`, `prep_time`, `cook_time`, `servings`, and optionally `edward_approved: true`.
- **DIY:** Use `categories: [diy]`, `time_required`, `difficulty`, and optionally `reuse_score`.

Templates are noted in `_posts/` — copy from an existing recipe or DIY post.

## Deploying

Designed to deploy on **GitHub Pages** or **Netlify** (both work with static Jekyll sites).

- **GitHub Pages:** Push to `main`, enable Pages in repo settings (Source: main branch, folder: / (root) or _site if using a custom workflow).
- **Netlify:** Connect repo, build command `bundle exec jekyll build`, publish directory `_site`.

## Future / TODOs in the codebase

- **Snipcart** — shop integration (see `pages/shop.md`)
- **Lunr.js** — search (see `_includes/` or `_layouts/default.html`)
- **Newsletter** — e.g. ConvertKit (see footer)
- **Netlify CMS / Decap CMS** — no-code editing (see `_config.yml` or admin route)
- **Print stylesheet** — for recipes (see `assets/css/styles.scss`)
- **Instagram embed** — sidebar (see `_layouts/page.html` and `_layouts/post.html`)

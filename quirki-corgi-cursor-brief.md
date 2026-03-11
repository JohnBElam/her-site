# QuirkiCorgi — Cursor Project Brief
**Site for Emily Elam | Jekyll-based blog, expandable to shop**

---

## What This Is

A personal website for Emily Elam called **QuirkiCorgi**. Emily is a professional chef, herbalist, crafter, seamstress, stained glass artist, and all-around maker. She shares her home with a female Corgi named **Edward Wong Hau Pepelu Tivrusky IV** (named after the beloved character from the anime *Cowboy Bebop*).

The site starts as a Jekyll blog and how-to guide platform, with architecture that allows future expansion into a shop (Snipcart or similar static-site e-commerce layer).

The site's personality: warm, resourceful, a little whimsical, grounded in real skills. Think "brilliant friend who makes everything from scratch and her dog supervises every project."

---

## Site Name & Branding

- **Name:** QuirkiCorgi
- **Tagline ideas (pick one or let Emily choose):**
  - *"Made from scratch. Every single thing."*
  - *"Good food. Handmade life. One corgi."*
  - *"Edward-approved."*
- **Primary colors:** Deep crimson / warm red as accent, cream/parchment as base, deep forest green as secondary, warm amber/honey as highlight
- **Fonts to use:**
  - Display/headings: `Playfair Display` (Google Fonts) — elegant but warm
  - Body: `Lora` (Google Fonts) — serif, readable, organic feel
  - Accent/labels: `DM Mono` or `Space Mono` — for tags, categories, little labels
- **Aesthetic direction:** Organic editorial. Like a beautifully worn recipe journal crossed with a botanical field notebook. Textured, layered, handmade-feeling. NOT sterile. NOT generic food blog.

---

## Jekyll Setup Requirements

Use **Jekyll** with the following structure:

```
quirki-corgi/
├── _config.yml
├── _layouts/
│   ├── default.html
│   ├── post.html
│   └── page.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── nav.html
├── _posts/
│   └── 2025-01-01-welcome.md       ← sample post
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   └── _components.scss
├── assets/
│   ├── css/
│   ├── images/
│   │   └── edward/                 ← placeholder folder for Corgi photos
│   └── js/
├── pages/
│   ├── about.md
│   ├── recipes.md
│   ├── diy.md
│   └── shop.md                     ← placeholder, "coming soon"
├── Gemfile
└── index.html
```

### _config.yml should include:
```yaml
title: QuirkiCorgi
tagline: "Made from scratch. Every single thing."
description: "Recipes, remedies, crafts, and the daily adventures of Edward the Corgi."
author:
  name: Emily Elam
  email: ""            # Emily will fill this in
baseurl: ""
url: ""                # Emily will fill this in
permalink: /:year/:month/:day/:title/

# Collections (for future expansion)
collections:
  recipes:
    output: true
    permalink: /recipes/:name/
  diy:
    output: true
    permalink: /diy/:name/

# Navigation
nav_links:
  - title: Home
    url: /
  - title: Recipes
    url: /recipes/
  - title: DIY & How-To
    url: /diy/
  - title: About
    url: /about/
  - title: Shop
    url: /shop/

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-paginate

paginate: 6
paginate_path: "/page:num/"
```

---

## Pages to Build

### 1. Home (`index.html`)
- Hero section with a large, atmospheric image placeholder (label it: `// REPLACE: hero image — Emily + Edward outdoors`)
- Short welcome blurb in Emily's voice (see copy below)
- 3-column "What's Here" section with icons/illustrations for: Recipes, DIY Guides, Crafts
- Latest posts grid (6 posts, paginated)
- A small "Edward's Corner" feature — a rotating fun fact or quote about Edward the Corgi
- Footer with simple nav + "Made with love (and Edward's supervision)"

### 2. About (`pages/about.md`)
Use this as a starting point — Emily should edit freely:

```markdown
---
layout: page
title: About Emily & Edward
permalink: /about/
---

Hi, I'm Emily.

I cook food that actually tastes like something. I make my own soap, my own laundry detergent, my own salves and conditioners. I sew my own dresses. I turn what most people call trash into things people think I bought at a boutique. I make stained glass. I bake dog treats. 

I've managed multiple Panera Bread locations, cooked professionally for a fraternity, and opened restaurants. Food is something I take seriously — but "healthy" is only worth something if it's also delicious.

Edward (full name: Edward Wong Hau Pepelu Tivrusky IV, yes after the one from Cowboy Bebop, yes she is a girl) is my Corgi. She supervises everything. She is extremely opinionated about treats.

This site is where I share what I make. Recipes, how-to guides, craft projects, and whatever else I feel like writing about. Glad you're here.
```

### 3. Recipes (`pages/recipes.md`)
- Grid/list of recipe posts filtered by category `recipe`
- Filter by sub-category: Meals, Baked Goods, Dog Treats, Drinks
- Each recipe post layout should support: ingredients list, step-by-step instructions, prep/cook time, servings, optional "Edward Rating" field (paw prints 1-5, only shown on dog treat posts)

### 4. DIY & How-To (`pages/diy.md`)
- Grid of DIY posts filtered by category `diy`
- Sub-categories: Home Cleaners, Soaps & Skincare, Crafts & Sewing, Stained Glass, Garden & Forage
- Each DIY post layout supports: materials list, steps, difficulty rating, "reuse score" (how much of this uses repurposed materials?)

### 5. Shop (`pages/shop.md`)
- Placeholder page only. Simple "Coming Soon" with sign-up for notification (basic mailto link for now).
- Comment in the HTML: `// TODO: Integrate Snipcart or similar for static site e-commerce`

---

## Post Layouts

### Recipe Post Front Matter Template:
```yaml
---
layout: post
title: "Roasted Garlic & Herb Focaccia"
date: 2025-01-15
categories: [recipes]
subcategory: baked-goods
tags: [bread, garlic, herbs, vegetarian]
image: /assets/images/posts/focaccia.jpg
prep_time: "20 min"
cook_time: "25 min"
servings: 8
difficulty: medium
edward_approved: true        # shows a little corgi paw badge
edward_rating: 5             # only for dog treat posts
excerpt: "This one disappears within ten minutes every time."
---
```

### DIY Post Front Matter Template:
```yaml
---
layout: post
title: "Lavender & Honey Hand Salve"
date: 2025-01-20
categories: [diy]
subcategory: soaps-skincare
tags: [salve, lavender, beeswax, natural, self-care]
image: /assets/images/posts/hand-salve.jpg
materials_count: 6
difficulty: easy
reuse_score: 3               # out of 5, how much uses repurposed materials
time_required: "45 min"
excerpt: "Six ingredients. Your hands will thank you."
---
```

---

## Design System

Build a `_sass/_variables.scss` with these values:

```scss
// Colors
$color-crimson:     #8B1A1A;
$color-crimson-light: #B03030;
$color-cream:       #F5EFE0;
$color-parchment:   #EDE0C8;
$color-forest:      #2D4A2D;
$color-amber:       #C8851A;
$color-ink:         #1C1C1A;
$color-muted:       #6B6455;

// Typography
$font-display:      'Playfair Display', Georgia, serif;
$font-body:         'Lora', Georgia, serif;
$font-mono:         'DM Mono', 'Courier New', monospace;

// Sizing
$max-width:         1100px;
$sidebar-width:     280px;
$border-radius:     4px;
$border-radius-lg:  12px;

// Spacing scale
$space-xs:  0.25rem;
$space-sm:  0.5rem;
$space-md:  1rem;
$space-lg:  2rem;
$space-xl:  4rem;
$space-2xl: 8rem;
```

### Visual Details to Implement:
- Subtle paper/grain texture on the body background (CSS noise or SVG filter)
- Thin crimson rule lines used as section dividers
- Post cards with a slight cream background and a left-side crimson border accent on hover
- Navigation links that underline with a hand-drawn-style wavy underline on hover (CSS `text-decoration: underline wavy $color-crimson`)
- Category tags styled as small stamped labels (monospace font, uppercase, slight letter-spacing, crimson border)
- The site logo "QuirkiCorgi" in Playfair Display, with "Corgi" in crimson

---

## Sample Content to Seed the Site

### Welcome Post (`_posts/2025-01-01-welcome.md`):
```markdown
---
layout: post
title: "Hello. Edward Made Me Do This."
date: 2025-01-01
categories: [general]
image: /assets/images/edward/edward-supervising.jpg
excerpt: "I've been meaning to start this for a while. Edward sat on my laptop until I did."
---

I've been cooking, making, building, and fixing things my whole life. People kept asking me to write it down. Edward kept sitting on my laptop.

So here we are.

This is where I'll share recipes (the real ones, not the dumbed-down versions), how-to guides for the things I make around the house, and occasional updates on whatever project has taken over the kitchen table this week.

Edward will be involved. She always is.
```

---

## Future Expansion Notes (Comments for Cursor)

Leave these as TODO comments in the codebase:

```
// TODO: Add Snipcart integration to shop.md for product sales
// TODO: Add search functionality (Lunr.js works well with Jekyll)
// TODO: Consider adding a newsletter signup (ConvertKit free tier integrates cleanly)
// TODO: Add Instagram/social feed embed to sidebar when Emily sets up accounts
// TODO: Edward's Corner could pull from a YAML data file (_data/edward_quotes.yml)
// TODO: Add print stylesheet for recipes (people still print recipes)
// TODO: Consider Netlify CMS or Decap CMS for easy no-code post editing
```

---

## Image Placeholders

Create an `assets/images/` structure with README notes in each folder:

- `assets/images/edward/` — Photos of Edward the Corgi
- `assets/images/emily/` — Photos of Emily
- `assets/images/posts/` — Per-post hero images
- `assets/images/hero/` — Homepage hero image

The hero image placeholder should reference this scene: *A woman in a handmade blue dress and wide-brimmed hat, barefoot on stone, reaching toward a pond while a Corgi supervises from a nearby rock wall in dappled afternoon sunlight.* This is the tone of the whole site.

---

## Gemfile

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-paginate"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end
```

---

## README.md for the Project

```markdown
# QuirkiCorgi

Emily Elam's personal site. Recipes, DIY guides, crafts, and Edward.

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

## Adding a New Post

Create a file in `_posts/` named `YYYY-MM-DD-post-title.md`.
Copy the front matter template from `_templates/recipe-post.md` or `_templates/diy-post.md`.

## Deploying

This site is designed to deploy on GitHub Pages or Netlify (both are free for static Jekyll sites).

- **GitHub Pages:** Push to `main` branch, enable Pages in repo settings
- **Netlify:** Connect repo, build command is `bundle exec jekyll build`, publish dir is `_site`
```

---

*Brief prepared for Cursor. Feed this entire document as the initial context/prompt. Emily should treat everything in quotes as a starting point she can rewrite in her own voice.*

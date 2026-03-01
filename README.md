# Portfolio — Build Requirements

## What It Is

A single-page portfolio site that acts as a resume, blog, and project showcase. Clean black & white design, document-style layout, no cards or grids — everything reads like a well-written page.

---

## Pages / Tabs

| Tab         | Contents                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**    | Name, role, intro bio, currently block, resume download, theme picker, featured projects (numbered 01/02/03), skills (inline), education |
| **Plogs**   | All projects + blog posts in a journal-index style list, filterable by All / Projects / Blog. Click any entry to open a detail panel     |
| **About**   | Bio paragraphs + timeline of career journey                                                                                              |
| **Contact** | Social links (Email, GitHub, LinkedIn, Twitter) + contact form                                                                           |

---

## Features

- **Tab navigation** — no page reloads, smooth fade transition between tabs
- **Detail panel** — slides in from the right when any plog entry is clicked. Projects show live demo + GitHub buttons. Blogs show full article-style content. Close with ← back, Escape key, or clicking the overlay
- **Plog filter** — All / Projects / Blog tabs
- **Resume download** — inline link, downloads a PDF
- **Theme picker** — dropdown next to resume link with 5 themes
- **"Open to work" dot** — pulsing green dot in the nav
- **Blinking cursor** — after the name on the home page
- **Responsive** — hamburger menu on mobile, everything stacks cleanly
- **Keyboard accessible** — Escape closes the detail panel

---

## Themes

| Name            | Background | Text      | Muted     | Borders   |
| --------------- | ---------- | --------- | --------- | --------- |
| Light (default) | `#fafaf8`  | `#111111` | `#888888` | `#dddddd` |
| Dark            | `#141414`  | `#e8e4dc` | `#666666` | `#2a2a2a` |
| Sepia           | `#f5efe6`  | `#2c1f0e` | `#9a7f5e` | `#ddd0be` |
| Slate           | `#0f1520`  | `#c8d8e8` | `#4a6070` | `#1e2d3d` |
| Moss            | `#f2f4f0`  | `#1a2218` | `#7a9070` | `#d4dcd0` |

One fixed accent (never changes): `#22c55e` — the "open to work" green dot.

---

## Fonts

Both free on Google Fonts. One `<link>` tag loads both.

**Newsreader** (serif) — headings, body text, names, blog content

- URL: https://fonts.google.com/specimen/Newsreader
- Weights: 300, 400, 400 italic, 500, 500 italic

**JetBrains Mono** (monospace) — nav labels, dates, tags, badges, code

- URL: https://fonts.google.com/specimen/JetBrains+Mono
- Weights: 300, 400

```html
<link
  href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=JetBrains+Mono:wght@300;400&display=swap"
  rel="stylesheet"
/>
```

---

## Icons / Symbols

No icon library. Plain Unicode only — nothing to install.

| Symbol | Role                                            |
| ------ | ----------------------------------------------- |
| `↓`    | Resume download                                 |
| `↗`    | External links (GitHub, live, contact channels) |
| `←`    | Back button in detail panel                     |
| `▧`    | Theme picker trigger                            |
| `▾`    | Dropdown caret                                  |
| `★`    | Star count on open source projects              |
| `→`    | Timeline current role indicator                 |

---

## Assets You Need to Provide

- **resume.pdf** — name it anything, place it in the same folder as `index.html`, update the `href` in the download link
- **Your photo** (optional) — square crop recommended, ~160px display size. The site works without it.
- **Real URLs** — in the JS `plogs` object, replace every `'#'` with actual GitHub and live demo links
- **Your content** — name, role, bio, currently block, skills, education, featured projects, plog entries

---

## Tech Stack

### Current (what the file uses)

| What       | Tech               | Why                                                |
| ---------- | ------------------ | -------------------------------------------------- |
| Structure  | HTML               | Single file, no build needed                       |
| Styling    | Vanilla CSS        | Full control, no dependencies                      |
| Behaviour  | Vanilla JS         | Tab switching, detail panel, theme picker, filters |
| Fonts      | Google Fonts CDN   | Free, one link tag                                 |
| Icons      | Unicode characters | Zero dependencies                                  |
| Deployment | Static file host   | Drop the file and it works                         |

### Your Skills & Where They Fit

| Skill                 | Use it for                                             | When                           |
| --------------------- | ------------------------------------------------------ | ------------------------------ |
| **HTML/CSS/JS**       | The site as-is                                         | Now                            |
| **Tailwind**          | Replace hand-written CSS for easier maintenance        | Optional upgrade               |
| **React + Next.js**   | Migrate when you want blog posts as real URLs with SEO | When you write regularly       |
| **Node.js + Express** | Contact form backend (send emails to your inbox)       | When you want the form to work |
| **MongoDB**           | CMS — manage projects/posts without editing code       | Later, if needed               |

---

## Upgrade Path (in order)

1. **Now** — deploy the `.html` file + `resume.pdf` as-is
2. **Soon** — swap CSS for Tailwind if you want faster tweaking
3. **When writing** — migrate to Next.js + MDX (each `.mdx` = a real page, proper SEO)
4. **Contact form** — Express + Nodemailer, or use Resend free tier (100 emails/day, no server needed)
5. **CMS** — simple MongoDB-backed admin page to add projects/posts without touching code

---

## Hosting Options (all free)

| Platform         | How                                                    |
| ---------------- | ------------------------------------------------------ |
| **Vercel**       | Drag and drop the file — live in 30 seconds            |
| **Netlify Drop** | Go to netlify.com/drop, drag the file into the browser |
| **GitHub Pages** | Push to a repo → Settings → Pages → enable             |

---

## File Structure (current)

```
portfolio/
├── index.html       ← the entire site
└── resume.pdf       ← your resume (you provide this)
```

### Future (if you go Next.js)

```
portfolio/
├── app/
│   ├── page.tsx           ← home
│   ├── plogs/
│   │   ├── page.tsx       ← plogs index
│   │   └── [slug]/
│   │       └── page.tsx   ← individual post/project
│   ├── about/page.tsx
│   └── contact/page.tsx
├── content/
│   ├── projects/
│   │   └── design-system.mdx
│   └── blog/
│       └── css-frameworks.mdx
└── public/
    └── resume.pdf
```

---

## Design Principles (to keep in mind when editing)

- No cards, no boxes, no grids — everything is text with rhythm
- Single narrow column (max 640px) — like reading a page, not scanning a dashboard
- Typography does all the work — font size, weight, and spacing create hierarchy
- Borders are always 1px solid `--faint` — never thicker, never colored
- Hover states are subtle — underline on titles, color shift on links, nothing jumps
- Monospace for anything that is metadata (dates, labels, types, nav) — serif for everything human

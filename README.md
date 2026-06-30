# Shruti Aparna — Research Portfolio

A minimal, editorial, research-focused personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It exports to fully static HTML/CSS/JS and deploys to GitHub Pages automatically on every push to `main`.

This README assumes no prior web development experience — follow the steps in order.

---

## 1. Installation

You need [Node.js](https://nodejs.org/) version 20 or later installed on your computer.

1. Open a terminal in this project folder.
2. Install all dependencies:

   ```bash
   npm install
   ```

This downloads everything the project needs into a `node_modules` folder (you never need to edit that folder).

---

## 2. Running locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The page automatically reloads whenever you save a file.

To build the production-ready static version and preview it:

```bash
npm run build
npx serve out
```

(`npx serve` is a tiny static file server — it will print a local URL to open.)

---

## 3. Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the site automatically.

**One-time setup:**

1. Push this project to a GitHub repository.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or click **Run workflow** under the **Actions** tab).

After that, every time you run:

```bash
git push origin main
```

GitHub will rebuild and redeploy the site automatically. The workflow detects whether your repo is a user/organization page (`username.github.io`) or a project page (`username.github.io/repo-name`) and configures asset paths accordingly — you don't need to edit `next.config.ts` for this.

Your live URL will appear in the **Actions** tab once the `deploy` job finishes, and under **Settings → Pages**.

---

## 4. Changing the profile picture

1. Add your photo to `public/images/`, e.g. `public/images/profile.jpg`.
2. Open `src/data/profile.ts` and update:

   ```ts
   photo: '/images/profile.jpg',
   ```

The About page (`src/app/about/page.tsx`) automatically picks up the new image.

---

## 5. Changing background images (light / dark hero)

The hero background images live in `public/images/`:

- `hero-light.jpg` — shown in light mode
- `hero-dark.jpg` — shown in dark mode

To change them, replace these files (keep the same filenames), or update the paths in `src/components/Hero.tsx`:

```tsx
<Image src="/images/hero-light.jpg" ... />
<Image src="/images/hero-dark.jpg" ... />
```

For best results use a landscape image at least 1920px wide. The dark overlay in `Hero.tsx` (`bg-black/55` / `dark:bg-black/60`) keeps text readable — increase the opacity number (e.g. `/70`) if your image is very bright or busy.

---

## 6. Editing the biography

Open `src/data/profile.ts` and edit the `bio` array — each string becomes one paragraph on the Home and About pages:

```ts
bio: [
  'First paragraph...',
  'Second paragraph...',
],
```

Also editable in the same file: `tagline`, `researchAreas`, `quote`, `degree`, `institution`, `education`, `affiliations`, and `skills`.

---

## 7. Adding a publication

Open `src/data/publications.ts` and append a new object to the `publications` array:

```ts
{
  id: 'unique-id-2026',
  title: 'Your Paper Title',
  authors: ['Author One', 'Shruti Aparna', 'Author Three'],
  year: 2026,
  month: 'January',
  status: 'Accepted at Conference Name 2026',
  links: {
    paper: 'https://...',
    arxiv: 'https://arxiv.org/abs/...',
    code: 'https://github.com/...',
    poster: 'https://...',
    slides: 'https://...',
  },
},
```

All fields under `links` are optional — only the ones you provide will render as links. The Publications page (`/publications`) updates automatically; no other files need to change.

---

## 8. Adding a project

Open `src/data/projects.ts` and append a new object to the `projects` array:

```ts
{
  id: 'unique-id',
  title: 'Project Title',
  subtitle: 'One-line description / role',
  period: 'Month Year – Month Year',
  description: 'A paragraph describing the project.',
  contributions: ['Bullet one', 'Bullet two', 'Bullet three'],
  tech: ['Python', 'PyTorch', 'etc'],
  highlight: 'Optional standout metric, e.g. "92% accuracy"',
  links: {
    github: 'https://github.com/...',
    paper: 'https://...',
    demo: 'https://...',
  },
},
```

The same pattern applies to **research** entries in `src/data/research.ts` (which additionally supports an `advisor` field).

---

## 9. Adding an achievement

Open `src/data/achievements.ts` and append a new object:

```ts
{
  id: 'unique-id',
  year: 2026,
  title: 'Award or Honor Name',
  organization: 'Awarding Body',
  description: 'A short sentence about it.',
},
```

The Achievements page renders these as a timeline, ordered however they appear in the array (newest-first is recommended).

---

## 10. Updating your CV

Replace `public/cv/shruti_aparna_cv.pdf` with your updated PDF (keep the same filename), or rename your file and update the `cv` path in `src/data/profile.ts`:

```ts
cv: '/cv/your_new_filename.pdf',
```

The "CV" navbar link always points to this path and opens the PDF directly.

---

## 11. Updating social links

All contact and social links live in `src/data/profile.ts`:

```ts
email: 'you@example.com',
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
scholar: 'https://scholar.google.com/citations?user=...',
twitter: '', // leave blank to hide
```

Any field left as an empty string is automatically hidden from the Contact page and footer.

---

## 12. Updating theme (colors & dark/light backgrounds)

- **Color palette** — the site uses Tailwind's built-in `stone` palette (warm neutrals) for backgrounds, text, and borders, defined directly in component class names (e.g. `bg-stone-50 dark:bg-stone-950`). To shift the palette, swap `stone` for another Tailwind neutral (`zinc`, `neutral`, `gray`) across `src/app/globals.css` and components, or extend `tailwind.config.ts` with custom colors.
- **Light/dark hero images** — see section 5 above.
- **Manual toggle** — the sun/moon icon in the navbar (`src/components/ThemeToggle.tsx`) lets visitors override the system preference; the choice is remembered automatically via `next-themes`.
- **System detection** — handled by `src/components/Providers.tsx` (`defaultTheme="system" enableSystem`).

---

## 13. Folder structure

```
src/
  app/                  Routes (one folder per page)
    page.tsx            Home ("/")
    about/page.tsx      About ("/about")
    research/page.tsx   Research ("/research")
    projects/page.tsx   Projects ("/projects")
    publications/page.tsx
    achievements/page.tsx
    contact/page.tsx
    layout.tsx          Shared HTML shell, fonts, metadata
    globals.css         Global styles & reusable utility classes
    sitemap.ts          Auto-generated sitemap.xml
    icon.svg            Favicon
  components/           Reusable UI (Navbar, Hero, Footer, ThemeToggle, FadeIn, ScrollArrow, Providers)
  data/                 All editable content (profile, research, projects, publications, achievements)
public/
  images/               Hero backgrounds, profile photo
  cv/                   CV PDF
  robots.txt
.github/workflows/      GitHub Pages deployment workflow
```

**You will almost never need to touch `src/app/**/page.tsx` or `src/components/**` for routine updates — just edit files in `src/data/`.**

---

## 14. Customizing colors and fonts

- **Fonts** are loaded in `src/app/layout.tsx` via `next/font/google`:
  - Headings: *Cormorant Garamond* (`font-serif` utility class)
  - Body: *Inter* (`font-sans` utility class)

  To swap a font, change the import and the Google Fonts function name, e.g.:

  ```ts
  import { Playfair_Display, Inter } from 'next/font/google'
  ```

- **Colors** are configured via Tailwind utility classes throughout components, using the `stone` palette. See section 12.

---

## 15. How to replace the hero image

See section 5 — replace `public/images/hero-light.jpg` and `public/images/hero-dark.jpg`, or change the paths referenced in `src/components/Hero.tsx`.

---

## 16. How to create new pages

1. Create a new folder under `src/app/`, e.g. `src/app/talks/`.
2. Add a `page.tsx` file inside it:

   ```tsx
   import type { Metadata } from 'next'

   export const metadata: Metadata = { title: 'Talks' }

   export default function TalksPage() {
     return (
       <div className="page-container">
         <p className="section-label">Talks</p>
         <h1 className="section-title">Talks</h1>
         {/* your content */}
       </div>
     )
   }
   ```

3. Add a link to it in `src/components/Navbar.tsx`'s `navLinks` array.
4. (Optional) Add the route to `src/app/sitemap.ts`.

The new page is available at `/talks` automatically.

---

## 17. How GitHub Actions deployment works

On every push to `main`:

1. **`build` job** — checks out the code, installs dependencies, configures the correct base path for GitHub Pages (`actions/configure-pages`), and runs `npm run build`. Next.js's static export (`output: 'export'` in `next.config.ts`) produces a fully static site in the `out/` folder. A `.nojekyll` file is added so GitHub Pages doesn't try to process the site with Jekyll.
2. **`deploy` job** — uploads the `out/` folder as a Pages artifact and publishes it.

You never need to manually run `npm run build` and commit the output — GitHub does it for you on every push. To trigger a deploy without pushing new code, use the **Run workflow** button under the **Actions** tab (enabled via `workflow_dispatch`).

---

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for subtle animation
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- No backend, no database — everything is static HTML/CSS/JS.

# fkoudohode.com — Personal academic website

Personal website of **Florent Koudohode**, postdoctoral researcher in control of partial differential equations at the Technical University of Crete (ERC C-NORA #101088147).

> Vanilla HTML, CSS and JavaScript. Zero framework, zero build step. Just open `index.html` in a browser, or upload the folder to any static host.

---

## 1. File tree

```
site/
├── index.html              ← Home (hero, research themes, news, CTA)
├── about.html              ← Who I am · Short biography · Curriculum Vitæ
├── research.html           ← Research statement + 3 themes + ERC C-NORA box
├── publications.html       ← Filterable list of journals/conferences/preprints/thesis
├── teaching.html           ← Courses · Supervision · Materials
├── contact.html            ← Contact info + mailto form
│
├── styles.css              ← All theming, typography, layout, responsive rules
├── scripts.js              ← i18n, theme toggle, publication rendering, contact form
│
├── README.md               ← This file
├── CNAME                   ← Custom domain for GitHub Pages
│
└── assets/
    ├── img/
    │   ├── profile-photo.jpg     ← Your portrait (4:5 ratio recommended)
    │   └── gallery/              ← Optional gallery images
    ├── papers/                   ← PDFs of articles, referenced from publications
    ├── code/                     ← Code archives / reproducibility material
    ├── docs/
    │   ├── cv-koudohode-en.pdf   ← English CV (referenced in about.html)
    │   └── cv-koudohode-fr.pdf   ← French  CV
    ├── teaching/                 ← Course materials (slides, exercises, etc.)
    └── reflections/              ← Optional blog / essay drafts
```

---

## 2. Quick edits (in 30 seconds)

| Task                        | Where to edit                                                                 |
| --------------------------- | ----------------------------------------------------------------------------- |
| Change a paragraph          | `scripts.js` → `translations.en.*` and `translations.fr.*` (search by key)    |
| Replace the photo           | Drop file at `assets/img/profile-photo.jpg`                                   |
| Add a news item             | `scripts.js` → `news` array (top of file)                                     |
| Add a publication           | `scripts.js` → `publications` array                                           |
| Add a course                | `scripts.js` → `teachingCourses` array                                        |
| Add a supervised student    | `scripts.js` → `supervisions` array                                           |
| Add a teaching material PDF | Drop file in `assets/teaching/`, add an entry to `teachingMaterials`          |
| Change the colour palette   | `styles.css` → `:root { --color-primary, --color-gold, --color-blue, ... }`   |
| Change the email / phone    | Edit `contact.html` directly + `footer-address` in every page                 |

---

## 3. Adding a publication

Open `scripts.js`, find the `publications` array (around line 30), and copy this block:

```js
{
  id:       "J6",                          // unique key — used in URLs as #J6
  type:     "journal",                     // "journal" | "conference" | "preprint" | "thesis"
  status:   "published",                   // "published" | "accepted" | "under-review" | "preprint"
  year:     2026,
  title:    "Your paper title here",
  authors:  ["F. Koudohode", "Co-Author"], // your name will be highlighted automatically
  venue:    "Automatica",
  venueDetail: "vol. 178, 110627",         // optional — leave empty if N/A
  doi:      "10.1016/j.automatica.2026.xxxxx",
  arxiv:    "2603.01234",                  // optional
  hal:      "hal-04279601",                // optional
  pdf:      "assets/papers/J6-koudohode-2026.pdf",  // optional
  code:     "https://github.com/...",      // optional
  abstract: "Optional plain-text abstract…"
}
```

Then drop the corresponding PDF into `assets/papers/` and you're done.

---

## 4. Bilingual (EN / FR)

All user-facing copy is in `scripts.js` → `translations.en.{key}` and `translations.fr.{key}`. Each HTML element that should be translated has `data-i18n="some_key"`. To add a new translatable string:

1. Add `data-i18n="my_new_key"` to the HTML element.
2. Add `my_new_key: "English text"` to `translations.en`.
3. Add `my_new_key: "French text"` to `translations.fr`.

To add a third language (e.g. Greek):

1. Duplicate the entire `en: { … }` block in `translations` and rename to `el: { … }`.
2. Add a third button in the language toggle in every HTML page:

```html
<button data-lang="el" class="lang-btn" aria-label="Ελληνικά">EL</button>
```

---

## 5. Math rendering

Math is rendered with **KaTeX** (CDN). Anywhere in the HTML, use `$inline$` or `$$display$$`. Already loaded on the home page and the research page; to enable it on another page, add the two `<link>` + three `<script>` tags from `index.html` (the `katex.min.css`, `katex.min.js` and `auto-render.min.js`).

---

## 6. Theme (dark / light)

The user's preference is persisted in `localStorage` under the key `fk-theme`. Default follows the OS preference. To force a theme, set `data-theme="dark"` or `data-theme="light"` on the root `<html>` element.

---

## 6 bis. Navigation dynamique & raccourcis clavier

Le site embarque plusieurs aides à la navigation, toutes facultatives (le site fonctionne 100 % sans JavaScript) :

- **Barre de progression** en haut de la page qui suit le défilement.
- **Bouton « retour en haut »** qui apparaît en bas à droite après ~500 px de scroll.
- **Mini-loader** entre les pages quand on clique sur un lien interne.
- **Transitions de fondu** à l'entrée de chaque page.
- **Raccourcis clavier** (style Gmail / GitHub) :

  | Touche       | Action                            |
  | ------------ | --------------------------------- |
  | `g` puis `h` | Aller à l'accueil                 |
  | `g` puis `a` | Aller à About                     |
  | `g` puis `r` | Aller à Research                  |
  | `g` puis `p` | Aller à Publications              |
  | `g` puis `t` | Aller à Teaching                  |
  | `g` puis `c` | Aller à Contact                   |
  | `t`          | Basculer thème clair / sombre     |
  | `?`          | Afficher l'aide des raccourcis    |
  | `Esc`        | Fermer le menu mobile             |

Tout ce comportement est implémenté dans `scripts.js` § 11 (`initScrollProgress`, `initBackToTop`, `initPageLoader`, `initKeyboardShortcuts`). Pour désactiver un comportement, commenter la ligne correspondante au bas du fichier dans le bloc `DOMContentLoaded`.

L'accessibilité est respectée : si l'utilisateur a activé *"Réduire les animations"* dans ses préférences système, toutes les transitions sont coupées (via `@media (prefers-reduced-motion: reduce)` dans `styles.css`).

---

## 7. Deploying

### Option A — GitHub Pages (recommended, free, with the custom domain)

1. Push the contents of `site/` to a public repo (e.g. `fkoudohode/fkoudohode.github.io`).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. The `CNAME` file (already in this folder) ties the site to `fkoudohode.com`. In your DNS, set:

   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   fkoudohode.github.io.
   ```

4. Enable "Enforce HTTPS" in Pages settings.

### Option B — Netlify / Vercel / Cloudflare Pages

Drag-and-drop the `site/` folder into the Netlify or Vercel dashboard, or connect the GitHub repo. No build command, publish directory is the root.

### Option C — Any static host

`scp -r site/ user@server:/var/www/fkoudohode.com/` and you're done.

---

## 8. Accessibility

- Skip-to-content link in the navigation.
- All interactive elements are keyboard-reachable.
- Sufficient contrast (WCAG AA verified for both themes).
- `aria-` attributes on all toggles, filters, navigation regions.
- `<address>`, `<article>`, `<section>` used semantically.

---

## 9. Browsers

Tested on the latest stable versions of Chrome, Firefox and Safari (May 2026). Uses `color-mix()` for some hover effects — falls back gracefully on older browsers.

---

## 10. Credits & licence

Designed and built for Florent Koudohode. Typography: **Inter** (Rasmus Andersson), **Playfair Display** (Claus Eggers Sørensen), **JetBrains Mono** (JetBrains). Math by **KaTeX**.

Content © Florent Koudohode. Code: MIT, free to reuse and adapt for your own academic page — credit is appreciated.

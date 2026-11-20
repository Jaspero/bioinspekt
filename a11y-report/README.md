# WCAG 2.1 AA: bioinspekt.hr (branch `a11y-wcag21aa`)

Done on 2026-11-20. "Before" is the live site (main at 44d5bd47, same as the local build of main); "after" is the
local production build (`npm run build` with Node 16, served as static files with Firebase-style clean URLs).

Screenshots (not committed): `screenshots/<area>-<before|after>-<desktop|mobile>.png`, and the same pairs side by
side in `compare/<area>-<desktop|mobile>.png`.

## Results

**axe-core 4** (wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa), 1366 px and 390 px:

- Before (live): color-contrast on / (6 nodes) and /kontakt, target-size on every page on phones (13 footer links),
  label on /kontakt (the message field had no label).
- After: **0 violations** on 17 pages: /, /certifikacije, all five certification pages, /kontrola-i-certifikacija,
  /zakonske-regulative and its four pages, /obrasci, /kontakt, /blog/as, /404; and in these states: mobile menu open,
  contact form after a successful and after a failed send (the request was intercepted, nothing was stored).
- Text over photos (axe can only mark it "needs review"): measured from the real pixels behind each text box (text
  made transparent, screenshot, contrast for every pixel) at 320, 390, 700, 1024, 1366 and 1920 px. The lowest pixel:

  | Text | Size | Before | After | Needed |
  | --- | --- | --- | --- | --- |
  | Hero "BIOINSPEKT D.O.O." (#c1ff5b) | 15–20 px bold, now ≥ 19 px | 2.42 | 3.39 | 3.0 (large) |
  | Hero heading (#c1ff5b) | 30–40 px bold | 2.42 | 3.38 | 3.0 |
  | Hero subtitle (white) | 21–28 px bold | 2.90 | 4.04 | 3.0 |
  | CTA "Imamo vješte…" (white) | 15 px bold on phones, 21–24 px | 2.70 | 4.91 | 4.5 |

**Keyboard, reflow, text spacing** (Playwright):

- Tab order: skip link, logo, navigation, content, footer. Every focusable element shows a 3 px outline:
  #677237 on light backgrounds (5.2:1), white on the olive bar, the footer and photos.
- Skip link "Preskoči na sadržaj" moves focus to `<main>`.
- Mobile menu: Enter opens it (`aria-expanded`, `aria-controls`); Esc closes it and puts focus back on the menu button;
  tabbing past the last link closes it, so focus never sits behind the overlay. The current page has
  `aria-current="page"` in both menus.
- Contact form: every field has a `<label>`; native required-field messages; success is announced through
  `role="status"`, failure through `role="alert"`.
- No horizontal scrolling at 320 px, at 683 px (1366 px at 200 %) and with WCAG 1.4.12 text spacing at 320, 683 and
  1366 px on 17 pages (after fixes 14 and 15). The mobile menu scrolls on short screens.
- `lang="hr"` and a unique, descriptive `<title>` on every page; one h1 per page, no skipped heading levels.

## Issues and fixes

| # | Issue | WCAG | Fix | Visual impact |
| --- | --- | --- | --- | --- |
| 1 | Text over the hero photo (lime #c1ff5b and white) and the CTA photo too light where it crosses clouds and the sky (lowest 2.42:1) | 1.4.3 | Hero overlay `rgba(0,0,0,.4)` → `.5`; CTA overlay `.35` → `.55`; "BIOINSPEKT D.O.O." at least 19 px (large text) at every width | Photos behind the hero and the CTA a little darker; the small "BIOINSPEKT D.O.O." line 15 → 19 px on phones and 17.5 → 19 px on tablets. `compare/hero-*`, `compare/cta-*` |
| 2 | Filled buttons ("Preuzmi dokumentaciju", 5 × "Saznaj više", "Pošalji"): white on #A9A74F = 2.52:1 | 1.4.3 | `--accent` **#A9A74F → #7A7939** (same hue, white 4.54:1) | Buttons a darker olive. `compare/certificates-section-desktop.png`, `compare/page-kontakt-*` |
| 3 | Desktop menu links: white at 75 % opacity on #677237 = 3.73:1 | 1.4.3 | Opacity .75 → .9 (blended #F0F1EB, 4.58:1); hover still goes to 100 % | Menu text slightly brighter |
| 4 | Footer links only 15.8 px tall (tap targets) | 2.5.8 (2.2) | Links at least 24 px tall, gap 4 → 2 px | Footer link rows about 6 px further apart. `compare/footer-*` |
| 5 | Contact form: labels were plain `div`s not tied to the fields; the message field had no name at all; no `autocomplete`; success/failure not announced; a rejected send still showed "uspješno zaprimljena" | 1.3.1, 3.3.2, 4.1.2, 1.3.5, 4.1.3, 3.3.1 | `<label for>` + ids, textarea `required`, `autocomplete="name"/"email"`, `role="status"` / `role="alert"`, the HTTP status is checked. New line "Sva polja su obavezna." | One small line above the form. `compare/page-kontakt-*` |
| 6 | Input borders #C2C896 = 1.6:1 against the form card; focus outline in #A9A74F (2.5:1); placeholder #757575 = 4.05:1 | 1.4.11, 1.4.3 | Border **#88904C** (3.0:1), focus outline #677237, placeholder #666666 (5.04:1) | Field borders a darker olive; placeholder slightly darker |
| 7 | Focus shown only by the browser default ring, which is hard to see on the olive bar | 2.4.7 | 3 px outline: #677237 on light, white on dark/olive/photos | Keyboard users only. `screenshots/focus-*` |
| 8 | No skip link | 2.4.1 | "Preskoči na sadržaj" (visible on focus), `<main id="sadrzaj" tabindex="-1">` | Only on focus. `screenshots/skip-link-after.png` |
| 9 | Mobile menu: no Esc, focus could go to the page hidden behind the full-screen menu, links cut off on short screens | 2.1.1, 2.4.3, 2.4.11 (2.2), 4.1.2, 1.4.10 | Esc closes and returns focus; leaving the menu with Tab closes it; `aria-controls`, `aria-current`; menu scrolls when the screen is short | None |
| 10 | Headings: sub-page titles were `<p>`; the home page's only h1 was "Korisni linkovi" at the bottom; hero title, section titles, footer column titles and the bold titles on /kontrola-i-certifikacija were not headings; a second `<main>` inside `<main>` (About block) with a `<div>` inside a `<p>` | 1.3.1, 2.4.6 | Page banner is the h1; hero title is the h1 on the home page; section, footer and "O firmi" titles are h2 with the same classes; inner `<main>` → `<div>` | None (same sizes and weights) |
| 11 | CMS pages read the wrong prop: /404 and /blog/as had the title "undefined - Bioinspekt" and an empty page | 2.4.2, 1.3.1 | Routes use `data.page`; a page without a title shows "Stranica nije pronađena", a heading and a link to the home page | The 404 page now has a heading and a link. `compare/page-404-*` |
| 12 | 11 informative logo images (EU organic logo variants on /zakonske-regulative/eko-znak-eu, the Croatian eco label on …/eko-znak-hr) had `alt=""` | 1.1.1 | **Database**: one-time guarded Firestore update of `regulatives/eko-znak-eu` and `regulatives/eko-znak-hr` that only filled empty `alt` attributes, matched by image hash, inside a transaction that aborts if the content changed (backup of the old content kept outside the repo) | None |
| 13 | CMS headings jumped from h1 to h3 (Bio Suisse, BEZ GMO, Dunav Soja) | 1.3.1 | **Template** (`src/lib/a11yContent.ts`): when CMS content has no h1/h2, its headings move up one level, `data-level` keeps the old size | None |
| 14 | Tables pasted from Word (ZOI i ZOZP, Dokazana kvaliteta) had no header cells and made the page 667 px wide on a 320 px phone | 1.3.1, 1.4.10 | **Template**: first row becomes `<th scope="col">` (same weight/alignment), table wrapped in a focusable scroll region | On phones the table scrolls sideways inside its box instead of the whole page. `compare/page-cert-zoi-mobile.png` |
| 15 | CMS images up to 510 px wide, a "_____" separator line and the long word "CERTIFICIRANJE" (with text spacing) overflowed at 320 px | 1.4.10, 1.4.12 | Images `max-width: 100%`, `overflow-wrap: break-word` | On phones the logos scale down to the screen width. `compare/page-eko-znak-eu-mobile.png` |
| 16 | Links to files and new windows gave no warning; five identical "Saznaj više" links | 2.4.4 | Hidden text: "(PDF/DOCX, otvara se u novom prozoru)" on /obrasci, footer and downloads; "Saznaj više o certifikaciji …" | None |
| 17 | ZOI i ZOZP logo on /certifikacije only 150 × 75 px (blurry on phones) | (Lighthouse BP) | `srcset` with the 600 × 300 px version already in the repo (`zoi-i-zozp-4x.png`) | Sharper logo |
| 18 | Decorative CTA photo had `alt="polje"` | 1.1.1 | `alt=""` | None |
| 19 | Extras | – | `prefers-reduced-motion` turns off transitions; "© 2023" → current year; `og:url` base jp-bioinspekt.web.app → https://bioinspekt.hr/; home title "Bioinspekt" → "Bioinspekt - kontrola i certifikacija ekološke proizvodnje" | Footer year |

## Not fixed

- **Dunav Soja (75 × 75 px) and BEZ GMO (48 × 75 px) logos** on /certifikacije are low resolution. No larger
  version exists in the repo, Firebase Storage (`jp-bioinspekt.appspot.com`) or the CMS. Needs the original logo files
  from the standard owners; Lighthouse best practices on mobile /certifikacije keeps flagging `image-size-responsive`.
- **/blog/as** is a test post in the CMS ("asjfj", body "undefined"). It now renders its title correctly, but the
  content is junk; it should be deactivated in the CMS (not linked from anywhere).
- /obrasci has two entries with the same title ("Cjenik usluga DK ZOI ZOZP") pointing at different files (CMS data).
- There is no Jaspero footer credit on this site (there was none before either).

# Blog Explorer — JS final project

Build a small app that fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/),
renders them as cards, filters them live, and opens a post's comments in a dialog. Vanilla JS (ES
modules), semantic HTML, SASS. See the full brief in the Academy "Final Project" lesson.

## Run

```bash
npm install
npm run build:css     # compile styles/main.scss → styles/main.css
npm start             # serve at http://localhost:3000/blog-explorer/
```

While styling, keep SASS compiling on save:

```bash
npm run watch:css
```

## What to build

- `src/api.js` — given (fetch helpers).
- `src/lib/` — `debounce.js` (given), `dom.js` + `transform.js` (TODO).
- `src/components/` — `search-bar.js`, `post-list.js`, `post-dialog.js` (TODO).
- `src/main.js` — wire the components together (TODO).
- `styles/_post-card.scss`, `styles/_dialog.scss` — style the cards + dialog (TODO).

Components are factory functions. They're wired in `main.js` with callbacks and method calls —
with **one** custom event: a card click dispatches `post:open`, and the dialog listens.

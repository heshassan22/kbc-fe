# KBC FE

Simple Node server for KBC front-end assignments.

## Setup

```bash
npm install
```

## Run

```bash
npm start      # start the server
npm run dev    # start with auto-reload on file changes
```

The server runs at [http://localhost:3000](http://localhost:3000) (override with `PORT`).

## Structure

- `server.js` — Express server: serves static files and exposes `/api/health`.
- `public/` — front-end assignments live here (HTML/CSS/JS served as-is).

Add each assignment as a file or subfolder under `public/`, e.g.
`public/assignment-1/index.html` → `http://localhost:3000/assignment-1/`.

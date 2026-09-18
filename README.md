# SkillBridge (MVP)

SkillBridge helps self-taught beginners gain real project experience,
collaborate with others, and build a portfolio of meaningful contributions.
This repo is the static MVP website — the first "project" on SkillBridge is
SkillBridge itself.

## What's here

A plain static site — no framework, no build step, no backend:

- `index.html` — landing page
- `projects.html` — example project showcase
- `profiles.html` — example contributor profiles
- `contribute.html` — contributor interest form (prototype, not connected to a server)
- `submit-project.html` — founder / project submission form (prototype, not connected to a server)
- `styles.css` — all styling
- `script.js` — form validation logic
- `projects.js` / `profiles.js` — static demo data + rendering
- `assets/` — local images

All form submissions are currently **client-side only** — nothing is sent to
a server or stored anywhere. This is a working prototype.

## Running it locally

No installation needed. From the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Status

Early MVP — built to attract a founding team of contributors and project
owners. Not yet connected to any backend or form service.

# Game Companion

A local, second-screen companion for PC gaming. It helps you choose what to play, track your sessions, set up for immersion (HDR, audio, environment) and build a taste profile over time.

Built with plain HTML, CSS and JavaScript. No frameworks, no build step, and everything runs locally in the browser.

## Concept

A second-screen companion that sits beside the game while you play. It should feel non-intrusive, support immersion rather than distract from it, and learn your preferences over time.

Planned features:

- Companion Mode on a second monitor
- Game tracking and session logging
- Mood-based taste profile
- AI-assisted recommendations
- Immersion setup guidance

## Status

**V1, in progress.** Working so far:

- Sidebar navigation between Home, Library, Companion and Taste Profile
- Home and Library views
- Game library loaded from `data/seed.js`, shown as a list or a grid
- Select a game and see it in the right-hand panel
- Add games to the library from inside the app

Next up: the session system (start and end a session, timer, notes) and the Live Companion view. The full task board is in [docs/ROADMAP.md](docs/ROADMAP.md).

## Running it

1. Clone the repo and open the folder in VS Code.
2. Open `index.html` in a browser, or use the Live Server extension so the page reloads as you edit.

## Project structure

```
game-companion/
├── index.html        page layout and views
├── styles.css        all styling
├── app.js            navigation, library and selection logic
├── data/
│   └── seed.js       starter list of 20 games
├── graphics/         background and image assets
└── docs/
    ├── ROADMAP.md        V1 task board and future phases
    └── git-workflow.md   day-to-day git commands
```

## Roadmap

| Phase | Focus |
| --- | --- |
| 1. Core | Navigation, library, game selection, session system |
| 2. Usability | CSS overhaul, Companion Mode layout, chat box |
| 3. Data storage | Save the library, sessions and selected game between visits |
| 4. Assistant | Decide on an AI (API or local) and add the chat assistant |

Details and checkboxes are in [docs/ROADMAP.md](docs/ROADMAP.md).

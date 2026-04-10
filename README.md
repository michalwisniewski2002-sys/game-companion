# How to use git - for Michal <3

- Open VsCode 
- Do "gget" in terminal 
- Once done do "gsave"
- Memorize it please 

--- 

#  Game Companion

A local, assistant-first PC game companion designed to help you:
- choose what to play
- improve immersion (HDR, audio, environment)
- track gameplay sessions
- evolve a personalized taste profile over time

---

##  Concept

This app acts as a **second-screen companion** while you play.

It is designed to:
- feel non-intrusive
- support immersion, not distract from it
- learn from your preferences over time

---

##  Project Status

**V1 (in progress)**

Current focus:
- UI foundation
- Companion Mode layout
- Local data structure
- Session system

---

##  How to Run

This is a local project.

1. Open folder in VS Code  
2. Open `index.html` in browser  
3. (Optional) Use Live Server extension  

---

##  Current Structure
game-companion/
├── index.html
├── styles.css
├── app.js
├── data/
│ └── seed.js
└── README.md

---

##  Key Features (Planned)

- Companion Mode (second monitor)
- Game tracking system
- Session logging
- Taste profile system (mood-based)
- AI-assisted recommendations (future)
- Immersion setup guidance

---

##  V1 task Board 
> update this when doing work
> use " [X] " when completed 
> add new task when needed or issue comes up 

---

### Phase 1 - core  (bare bone)

#### navigation / HTML (skeleton)

- [x] Side bar navigation buttons functional 
- [x] Home screen view 
- [ ] Library screen view 
- [ ] Live companion view 

#### Systems / back end

- [ ] Load games from 'seed.js' 
- [ ] Display game list 
- [ ] Select games from list 
- [ ] Show selected game on side bar (in the right panel of ui)

#### Session system / Companion 

- [ ] Add start session button 
- [ ] Add end session button 
- [ ] Make timer for each session
- [ ] Save session timer 
- [ ] Save session details / notes 

---

### Phase 2 - Usability / CSS overhaul 

#### UI Improvements  

- [ ] Side bar styles 
- [ ] Better buttons 
- [ ] Spacing and layout 
- [ ] Chat box 
- [ ] Home screen 
- [ ] Consistent design throughout the app 

#### Companion Mode 

- [ ] Show active session clearly 
- [ ] Show current game with details on sidebar
- [ ] Note button 
- [ ] Improve chat input UI 

#### Backlog / Future Tasks

- [ ] Add game status (playing / paused / finished)
- [ ] Add simple session history view
- [ ] Improve right panel layout further

--- 

# End of v1 

- [ ] Can navigate between views
- [ ] Can select a game
- [ ] Can start a session
- [ ] Timer works correctly
- [ ] Can end session
- [ ] Notes are optional (not forced)
- [ ] Data persists after refresh

--- 

# Future versions 
### Phase 3 - Data storage (TBD) / Data base or text file ? 

> If there is need for multiple tables then just use a database to keep everything in one place 
> But if only one is needed just use a data file 

- [ ] Save selected game 
- [ ] Save sessions 
- [ ] Load data on refresh 
- [ ] Store game library 
- [ ] Manual additions to game library 

---

### Phase 4 - Mock assistant chat (TBD)

- [ ] Decide on AI and if we are going to use api or local ? 
- [ ] Adding AI to program 
- [ ] Polish chat box 
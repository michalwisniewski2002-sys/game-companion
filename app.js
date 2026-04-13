// Get references to important elements from the page.
const navButtons = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view");
const currentViewLabel = document.getElementById("current-view-label");
const libraryList = document.getElementById("library-list");
const currentGameName = document.getElementById("current-game-name");

// Library view toggle buttons
const gridViewBtn = document.getElementById("grid-view-btn");
const listViewBtn = document.getElementById("list-view-btn");

// Add Game form elements
const addGameForm = document.getElementById("add-game-form");
const newGameNameInput = document.getElementById("new-game-name");
const newGameMoodInput = document.getElementById("new-game-mood");

// New: mood filter dropdown
const moodFilter = document.getElementById("mood-filter");

// App state
let selectedGame = null;
let libraryViewMode = "grid";
let activeMoodFilter = "All";

// Live app data
let games = [...window.seedGames];

// Converts internal view names into nicer labels for the UI.
function formatViewLabel(viewName) {
  switch (viewName) {
    case "home":
      return "Home";
    case "library":
      return "Library";
    case "companion":
      return "Companion";
    case "profile":
      return "Taste Profile";
    default:
      return "Home";
  }
}

// Switches between main app views.
function switchView(viewName) {
  views.forEach((view) => {
    const isTarget = view.id === `view-${viewName}`;
    view.classList.toggle("hidden", !isTarget);
  });

  navButtons.forEach((button) => {
    const isActive = button.dataset.view === viewName;
    button.classList.toggle("active", isActive);
  });

  currentViewLabel.textContent = formatViewLabel(viewName);
}

// Updates the right panel to show the selected game.
function updateCurrentGamePanel() {
  if (!currentGameName) return;

  if (selectedGame) {
    currentGameName.textContent = selectedGame.name;
  } else {
    currentGameName.textContent = "None selected";
  }
}

// Applies the current Library layout mode.
function applyLibraryViewMode() {
  if (!libraryList) return;

  libraryList.classList.remove("library-grid", "library-list");

  if (libraryViewMode === "grid") {
    libraryList.classList.add("library-grid");
  } else {
    libraryList.classList.add("library-list");
  }

  if (gridViewBtn) {
    gridViewBtn.classList.toggle("active", libraryViewMode === "grid");
  }

  if (listViewBtn) {
    listViewBtn.classList.toggle("active", libraryViewMode === "list");
  }
}

// Returns the filtered games based on the active mood filter.
function getFilteredGames() {
  if (activeMoodFilter === "All") {
    return games;
  }

  return games.filter((game) => game.mood === activeMoodFilter);
}

// Renders the game list from the live games array.
function renderGameList() {
  if (!libraryList) return;

  libraryList.innerHTML = "";

  const filteredGames = getFilteredGames();

  filteredGames.forEach((game) => {
    const item = document.createElement("button");
    item.classList.add("game-item");
    item.type = "button";

    // Highlight the currently selected game
    if (selectedGame && selectedGame.id === game.id) {
      item.classList.add("selected");
    }

    item.innerHTML = `
      <span class="game-item-title">${game.name}</span>
      <span class="game-item-meta">${game.mood}</span>
    `;

    item.addEventListener("click", () => {
      selectedGame = game;
      updateCurrentGamePanel();
      renderGameList();
    });

    libraryList.appendChild(item);
  });

  applyLibraryViewMode();
}

// Creates a new game object and adds it to the live array.
function addGame(gameName) {
  const trimmedName = gameName.trim();

  if (!trimmedName) return;

  const newGame = {
    id: Date.now(),
    name: trimmedName,
    mood: gameMood,
    status: "not_started"
  };

  games.push(newGame);
  renderGameList();
}

// Navigation button events
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const viewName = button.dataset.view;
    switchView(viewName);
  });
});

// Grid / List toggle events
if (gridViewBtn) {
  gridViewBtn.addEventListener("click", () => {
    libraryViewMode = "grid";
    applyLibraryViewMode();
  });
}

if (listViewBtn) {
  listViewBtn.addEventListener("click", () => {
    libraryViewMode = "list";
    applyLibraryViewMode();
  });
}

// Mood filter event
if (moodFilter) {
  moodFilter.addEventListener("change", () => {
    activeMoodFilter = moodFilter.value;
    renderGameList();
  });
}

// Add Game form submit event
if (addGameForm) {
  addGameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addGame(newGameNameInput.value, newGameMoodInput.value);
    addGameForm.reset();
  });
}

// Initial app setup
switchView("home");
updateCurrentGamePanel();
renderGameList();

console.log("Game Companion loaded");
console.log(window.seedGames);
console.log(games);
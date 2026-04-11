// Get references to important elements from the page.
const navButtons = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view");
const currentViewLabel = document.getElementById("current-view-label");
const libraryList = document.getElementById("library-list");
const currentGameName = document.getElementById("current-game-name");

// buttons for switching Library layout mode
const gridViewBtn = document.getElementById("grid-view-btn");
const listViewBtn = document.getElementById("list-view-btn");

// App state
let selectedGame = null;
let libraryViewMode = "grid";

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

// Switches between Home / Library / Companion / Profile views.
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

// Updates the right panel with the currently selected game.
function updateCurrentGamePanel() {
  if (!currentGameName) return;

  if (selectedGame) {
    currentGameName.textContent = selectedGame.name;
  } else {
    currentGameName.textContent = "None selected";
  }
}

// New: update Library container class depending on current layout mode.
function applyLibraryViewMode() {
  if (!libraryList) return;

  libraryList.classList.remove("library-grid", "library-list");

  if (libraryViewMode === "grid") {
    libraryList.classList.add("library-grid");
  } else {
    libraryList.classList.add("library-list");
  }

  // Also update button active state
  if (gridViewBtn) {
    gridViewBtn.classList.toggle("active", libraryViewMode === "grid");
  }

  if (listViewBtn) {
    listViewBtn.classList.toggle("active", libraryViewMode === "list");
  }
}

// Renders the game list into the Library view.
function renderGameList() {
  if (!libraryList) return;

  libraryList.innerHTML = "";

  window.seedGames.forEach((game) => {
    const item = document.createElement("button");
    item.classList.add("game-item");
    item.type = "button";

    // If this game is currently selected, add a selected class
    if (selectedGame && selectedGame.id === game.id) {
      item.classList.add("selected");
    }

    item.innerHTML = `
      <span class="game-item-title">${game.name}</span>
      <span class="game-item-meta">Horror</span>
    `;

    item.addEventListener("click", () => {
      selectedGame = game;
      updateCurrentGamePanel();

      // Re-render the list so the selected visual state updates
      renderGameList();
    });

    libraryList.appendChild(item);
  });

  applyLibraryViewMode();
}

// Add click listeners to navigation buttons.
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const viewName = button.dataset.view;
    switchView(viewName);
  });
});

// New: Library layout toggle buttons
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

// Initial app setup
switchView("home");
updateCurrentGamePanel();
renderGameList();

console.log("Game Companion loaded");
console.log(window.seedGames);
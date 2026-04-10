const navButtons = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view");
const currentViewLabel = document.getElementById("current-view-label");

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

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const viewName = button.dataset.view;
    switchView(viewName);
  });
});

switchView("home");

console.log("Game Companion loaded");
console.log(window.seedGames);

const libraryList = document.getElementById("library-list");

function renderGameList() {
  if (!libraryList) return;

  libraryList.innerHTML = "";

  window.seedGames.forEach((game) => {
    const item = document.createElement("button");
    item.classList.add("game-item");
    item.type = "button";

    item.innerHTML = `
      <span class="game-item-title">${game.name}</span>
      <span class="game-item-meta">${game.genre}</span>
    `;

    libraryList.appendChild(item);
  });
}

renderGameList();

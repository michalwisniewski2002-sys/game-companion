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
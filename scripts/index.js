const addCrab = () => {
  const newCrab = document.createElement("span");
  const crabContainer = document.querySelector("#crabContainer");
  newCrab.textContent = "🦀";
  crabContainer.appendChild(newCrab);
};

const registerEventHandlers = () => {
  const crabButton = document.querySelector("#addCrabButton");
  crabButton.addEventListener("click", addCrab);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
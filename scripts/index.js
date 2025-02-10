const state = {
  crabCount: 0
};

const addCrab = (event) => {
  const newCrab = document.createElement("span");
  const crabContainer = document.querySelector("#crabContainer");
  newCrab.textContent = "🦀";
  crabContainer.appendChild(newCrab);

  state.crabCount += 1;
  const crabCountCounter = document.querySelector("#crabCount");
  crabCountCounter.textContent = `Crab Count: ${state.crabCount}`;

};

const registerEventHandlers = () => {
  const crabButton = document.querySelector("#addCrabButton");
  crabButton.addEventListener("click", addCrab);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
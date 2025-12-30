import { addButton } from "./addButtons.js";
import { setUpEventListeners } from "./eventListeners.js";

addButton();
setUpEventListeners();

const input = document.querySelector(".input-container");

input.textContent = "Work In Progress...";
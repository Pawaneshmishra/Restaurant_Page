import { loadHomePage } from "./homepage";
import { loadMenuPage } from "./menupage";
import { loadContactPage } from "./aboutpage";

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

  // Initial load
  loadHomePage();

  // Event listeners for tab buttons
  document.getElementById('home').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    loadHomePage();
  });

  document.getElementById('menu').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    loadMenuPage();
  });

  document.getElementById('contact').addEventListener('click', () => {
    contentDiv.innerHTML = '';
    loadContactPage();
  });
});
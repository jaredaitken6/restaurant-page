// test
import { greeting } from './greeting.js';
// end of test
import "./styles.css";
import { loadMenuPage } from './menu.js';
import { menuButton } from './menu.js';
import { loadHomePage } from './home.js';
import { homeButton } from './home.js';
import { loadAboutPage } from './about.js';
import { aboutButton } from './about.js';

loadHomePage();

menuButton.forEach(button => {
  button.addEventListener("click", loadMenuPage);
});

homeButton.forEach(button => {
  button.addEventListener("click", loadHomePage);
});

aboutButton.forEach(button => {
  button.addEventListener("click", loadAboutPage);
});


// test
console.log(greeting);
// end of test
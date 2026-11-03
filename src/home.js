import wholeHomePage from './home.html';

const templateContentDiv = document.querySelector('#content');
export const homeButton = document.querySelectorAll('.home-btn');

export function loadHomePage() {
    templateContentDiv.innerHTML = wholeHomePage;
}


import wholeMenuPage from './menu.html';

const templateContentDiv = document.querySelector('#content');
export const menuButton = document.querySelectorAll('.menu-btn');

export function loadMenuPage() {
    templateContentDiv.innerHTML = wholeMenuPage;
}
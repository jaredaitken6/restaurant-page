import wholeAboutPage from './about.html';

const templateContentDiv = document.querySelector('#content');
export const aboutButton = document.querySelectorAll('.about-btn');

export function loadAboutPage() {
    templateContentDiv.innerHTML = wholeAboutPage;
}
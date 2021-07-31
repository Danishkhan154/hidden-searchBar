console.log("in javaScript");

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click' , toggleSearch);

function toggleSearch() {
    search.classList.toggle('active');
    input.focus();
}
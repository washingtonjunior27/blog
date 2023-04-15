const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggle');
const closeMenu = document.querySelector('.close');
const search = document.querySelector('.search i');
const searchBox = document.querySelector('.search-box');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

search.addEventListener('click', () => {
    searchBox.classList.toggle('show')
})
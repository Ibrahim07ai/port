let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav_links');

menu.onclick = () => {
    menu.classList.toggle("fa-solid fa-bars")
nav.classList.toggle('open')
}
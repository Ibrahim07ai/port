let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav_links');

menu.onclick = () => {
    menu.classList.toggle('bx')
    nav.classList.toggle('open')
}
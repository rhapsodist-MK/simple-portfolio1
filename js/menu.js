const nav_bar_btn = document.querySelector('.toggle-btn')
const nav_bar__toggle = document.querySelector('#nav-bar__toggle')
const menu_bar = document.querySelector('#menu-bar')

const showMenuEvent = (el) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        nav_bar__toggle.classList.toggle('active')
        menu_bar.classList.toggle('active')
        window.scrollTo(0, 0)
    })
}

showMenuEvent(nav_bar_btn)
showMenuEvent(nav_bar__toggle)

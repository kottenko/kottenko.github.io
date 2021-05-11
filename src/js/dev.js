window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger__inner'),
        menuItem = document.querySelectorAll('.hamburger__nav'),
        hamburger = document.querySelector('.hamburger__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__menu-active');
        menu.classList.toggle('hamburger__inner-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__menu-active');
            menu.classList.toggle('hamburger__inner-active');
        })
    })
})
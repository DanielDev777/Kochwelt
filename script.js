let mobileMenu = document.getElementById('mobile-menu');
let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');

function openMenu() {
    mobileMenu.classList.remove('closed');
}
function closeMenu(e) {
    if (e.target !== mobileMenu && e.target !== menuBtn) {
        mobileMenu.classList.add('closed');
    }
}

menuBtn.addEventListener('click', openMenu);
document.addEventListener('click', closeMenu);
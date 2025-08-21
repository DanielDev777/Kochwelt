let mobileMenu = document.getElementById('mobile-menu');
let menuBtn = document.getElementById('menu-btn');

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

function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xwpqdjgy", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./kontakt send.html";
    }).catch((error) => {
        console.log(error);
    });
}
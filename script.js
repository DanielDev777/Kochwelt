let mobileMenu = document.getElementById('mobile-menu');
let menuBtn = document.getElementById('menu-btn');
let successDialog = document.getElementById('successDialog');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

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

function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xwpqdjgy", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        successDialog.showModal();
        successDialog.classList.toggle('open');
        
        document.getElementById('name').value = "";
        emailInput.value = "";
        messageInput.value = "";
    }).catch((error) => {
        console.log(error);
    });
}

function closeDialog() {
    successDialog.close();
    successDialog.classList.toggle('open');
}
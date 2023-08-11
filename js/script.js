function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../imagens/menu/menu_FILL0_wght400_GRAD0_opsz48.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "../imagens/menu/close.svg"
    }
}


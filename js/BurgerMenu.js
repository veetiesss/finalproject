const burgerMenu = document.querySelector('.burgerMenu')
const openBurgerMenu = document.querySelector('.nav__burgerMenu')
const closenBurgerMenu = document.querySelector('.burgerMenu_close')
let activeBurgerMenu = false

openBurgerMenu.addEventListener('click', e => {
    activeBurgerMenu = true
    blurEffect.classList.remove('hidden')
    burgerMenu.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
})

closenBurgerMenu.addEventListener('click', e => {
    activeBurgerMenu = false
    if (cartOpened === false) blurEffect.classList.add('hidden')
    burgerMenu.classList.add('hidden')
    document.body.style.overflow = ''
})

window.addEventListener('resize', e => {
    if (window.innerWidth > 900) {
        if (cartOpened === false) blurEffect.classList.add('hidden')
        burgerMenu.classList.add('hidden')
    }
    else if(activeBurgerMenu === true) {
        burgerMenu.classList.remove('hidden')
        blurEffect.classList.remove('hidden')
    }
})
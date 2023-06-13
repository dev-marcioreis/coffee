// Open / Close menu navbar
const openMenuBtn = document.getElementById('open')
const closeMenuBtn = document.getElementById('close')
const menuNavbar = document.querySelector('.navbar__menu')
const overlay = document.querySelector('.overlay')

const openMenu = () => {
    menuNavbar.style.right = '.1rem'
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'block'
}

openMenuBtn.addEventListener('click', openMenu)

const closeMenu = () => {
    menuNavbar.style.right = '-100%'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'block'
}

closeMenuBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)


// Close menu navbar when clicking any option
if(window.innerWidth <= 992) {
    document.querySelectorAll('.navbar__menu .menu__item .menu__link').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeMenu()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})


// Mouse move
document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {

        const speed = layer.getAttribute('move-speed')
        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerWidth - e.pageX * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


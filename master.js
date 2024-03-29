// ____________/  N A V B A R  /____________

console.log(window.innerHeight, "X", window.innerWidth)

const menu = document.getElementById('menu');
const button = document.getElementById('button');
let menuOpen = false;

button.addEventListener('click', () => {
    if (!menuOpen) {
        button.classList.add('open');
        menuOpen = true;
        menu.style.transform = 'translateX(0%)';
    } else {
        button.classList.remove('open');
        menuOpen = false;
        menu.style.transform = 'translateX(100%)'
    }
})

window.addEventListener('scroll', function(){
    let navbar = document.getElementById('navbar')
    navbar.classList.toggle('navbar--scroll', window.scrollY > 400)
})

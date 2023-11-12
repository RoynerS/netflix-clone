const nav =document.querySelector(".menu");

window.addEventListener("scroll",function(){
    nav.classList.toggle("activo",window.scrollY > 0)
})

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.submenu').style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.submenu').style.display = 'none';
});

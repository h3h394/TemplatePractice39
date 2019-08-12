const burgerMenu = document.getElementById('burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        800,
        'linear'
    )
});
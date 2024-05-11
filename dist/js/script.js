const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].computedStyleMap.width = item.innerHTML;
});
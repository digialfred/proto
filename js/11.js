const texto1 = document.querySelector('#text1');
const texto2 = document.querySelector('#text2');
const texto3 = document.querySelector('#caja3');
const foto = document.querySelector('#caja2');

texto1.addEventListener('mouseover', function () {
    texto1.classList.add('oculto');
    texto2.classList.remove('oculto');
});

texto1.addEventListener('mouseout', function () {
    texto1.classList.remove('oculto');
    texto2.classList.add('oculto');
});

foto.addEventListener('click', function(){
    document.querySelector('img').classList.add('aumentar');
});

foto.addEventListener('mouseout', function () {
    document.querySelector('img').classList.remove('aumentar');
});

texto3.addEventListener('dblclick', function () {
    texto3.classList.add('grande');
});
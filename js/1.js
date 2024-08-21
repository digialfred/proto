const f1 = document.querySelector('#formulario');
 
 
 
 document.querySelector('#enviar').addEventListener('click', function(){
    alert("Formulario enviado correctamente");
})

f1.addEventListener('mouseover', function() {
    f1.style.backgroundColor = '#FF00FF';
});

f1.addEventListener('mouseout', function(){
    f1.style.backgroundColor = '';
})
const text1 = document.querySelector('#message');
const box1 = document.querySelector("#textContainer")


document.querySelector("#changeColorButton").addEventListener("click", function(){
    box1.style.add("myStyle");
})


document.querySelectorAll('.zoomable').addEventListener('click', function() {
    this.classList.toggle('zoom');
})

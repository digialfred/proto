var tareas = [
  { tarea: "Pintar la fachada de la casa" },
  { tarea: "Comprar comida para el perro" },
  { tarea: "Pagar la tarjeta de crédito" },
];

const form1 = document.getElementById("formulario");
var semuestra = false;

document.getElementById("agregartarea").addEventListener("click", function () {
  if (semuestra == false) {
    form1.style.display = "block";
    semuestra = true;
  } else {
    form1.style.display = "none";
    semuestra = false;
  }
});

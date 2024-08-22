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

document.getElementById("agregar").addEventListener("click", function () {
  const tareacon = document.getElementById("nuevaTarea");
  const tarea = tareacon.value;
  agregartarea(tarea);
});

function agregartarea(tarea) {
  const tabla = document.getElementById("tabla-tareas");
  const fila = tabla.insertRow();
  const celda1 = fila.insertCell(0);
  const celda2 = fila.insertCell(1);

  celda1.textContent = tarea;

  const btn = document.createElement('button');
            btn.textContent = 'Finalizar';
            btn.setAttribute('onclick', 'deleteTask(this)');
            celda2.appendChild(btn);
}
function deleteTask(btn) {
    const fila = btn.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

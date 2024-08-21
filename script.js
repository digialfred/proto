document.getElementById('addTaskBtn').addEventListener('click', function() {
    const task = prompt('Escribe la nueva tarea:');
    if (task) {
        addTask(task);
    }
});

function addTask(task) {
    const table = document.getElementById('taskList');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = task;

    const btn = document.createElement('button');
    btn.textContent = 'Finalizar';
    btn.addEventListener('click', function() {
        table.deleteRow(row.rowIndex - 1); // Borra la fila correspondiente
    });

    cell2.appendChild(btn);
}

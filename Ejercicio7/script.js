document.addEventListener('DOMContentLoaded', () => {
    const cartaUsuarios = document.getElementById('carta-usuarios');   //cargo la lista llamando la api apenas inicia el dom del servidor (domcontentloaded)

    // los usuarios trayendo la api
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const cartaUsuario = document.createElement('div');
                cartaUsuario.classList.add('carta-usuario');
                
                
                //aca abajo inicio el div que me trae la informacion

                cartaUsuario.innerHTML = `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Nombre:</strong> ${user.name}</p>
                    <p><strong>Nombre de Usuario:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Sitio Web:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <button onclick="mostrarTareas(${user.id})">Ver Tareas</button>
                    <div id="tareas-${user.id}"></div>
                `;

                //agrego al div

                cartaUsuarios.appendChild(cartaUsuario);
            });
        });
});

function mostrarTareas(userId) {
    const tareasContainer = document.getElementById(`tareas-${userId}`);

    // Si ya se han cargado las tareas, cambiar  su visibilidad
    if (tareasContainer.innerHTML !== '') {
        tareasContainer.style.display = tareasContainer.style.display === 'none' ? 'block' : 'none';      //operador ternario si se completaron o no tareas
        return;
    }

    // Obtener las tareas del usuario
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const tareaItem = document.createElement('div');
                tareaItem.classList.add('tarea');
                tareaItem.classList.add(task.completed ? 'completada' : 'no-completada');

                tareaItem.innerText = task.title;

                tareasContainer.appendChild(tareaItem);
            });
        });
}

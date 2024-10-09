// Función para mostrar un mensaje de éxito al agregar el servicio
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.backgroundColor = '#28a745'; // Color verde para éxito
    mensajeDiv.style.color = '#fff';
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.margin = '10px 0';
    mensajeDiv.style.borderRadius = '5px';

    document.body.prepend(mensajeDiv);

    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Función para agregar un servicio a la tabla
function agregarServicio(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombreServicio = document.getElementById('nombreServicio').value; // Obtener el valor del campo de nombre del servicio
    const descripcionServicio = document.getElementById('descripcionServicio').value; // Obtener la descripción

    // Validar campos
    if (nombreServicio === '' || descripcionServicio === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Insertar el nuevo servicio en la tabla
    const tabla = document.getElementById('tablaServicios').getElementsByTagName('tbody')[0]; // Obtener el cuerpo de la tabla
    const nuevaFila = tabla.insertRow(); // Insertar una nueva fila en la tabla

    const celdaNombre = nuevaFila.insertCell(0); // Crear una nueva celda para el nombre del servicio
    const celdaDescripcion = nuevaFila.insertCell(1); // Crear una nueva celda para la descripción

    celdaNombre.textContent = nombreServicio; // Asignar el valor del nombre del servicio a la celda
    celdaDescripcion.textContent = descripcionServicio; // Asignar la descripción a la celda

    // Mostrar mensaje de éxito
    mostrarMensaje('Servicio agregado exitosamente.');

    // Limpiar el formulario
    document.getElementById('formServicio').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    // Validación del formulario de registro
    const formulario = document.getElementById('formRegistro');
    if (formulario) {
        formulario.addEventListener('submit', validarFormulario);
    }

    // Gestión del formulario de recuperación de contraseña
    const formularioRecuperacion = document.getElementById('formRecuperarContrasena');
    if (formularioRecuperacion) {
        formularioRecuperacion.addEventListener('submit', recuperarContrasena);
    }

    // Gestión del formulario de servicio
    const formularioServicio = document.getElementById('formServicio');
    if (formularioServicio) {
        formularioServicio.addEventListener('submit', agregarServicio); // Llamar a la función para agregar servicio
    }

    // Gestión del formulario de contacto
    const formularioContacto = document.getElementById('formContacto');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', enviarContacto);
    }

    // Desplazarse al hacer clic en un botón o enlace
    const botonDesplazar = document.getElementById('scrollButton');
    if (botonDesplazar) {
        botonDesplazar.addEventListener('click', function() {
            desplazarAlElemento('miSeccion');  // Reemplaza 'miSeccion' por el ID del elemento al que quieres desplazarte
        });
    }
});

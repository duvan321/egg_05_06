const form = document.getElementById("miFormulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    mostrarMensaje("¡Formulario enviado correctamente!");
  }
});

function mostrarMensaje(mensaje) {
  const mensajeElement = document.createElement("p");
  mensajeElement.textContent = mensaje;
  mensajeElement.classList.add("mensaje", "mostrar");
  document.body.appendChild(mensajeElement);
}
function showAlert(){
    swal.fire({
        title:'Has llegado al pie de la pagina',
        icon: "success",
        showConfirmButton: true,
    confirmButtonColor: "#24E040",

    })
}

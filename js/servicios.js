function showAlert() {
  swal.fire({
    title: "Has llegado al pie de la pagina",
    icon: "success",
    showConfirmButton: true,
    confirmButtonColor: "#24E040",
  });
}

function mostrarDescripcion(id) {
  var descripcion = document.getElementById(id);
  descripcion.style.display =
    descripcion.style.display === "none" ? "block" : "none";
}

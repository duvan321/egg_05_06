(async () => {
  const { value: paiz } = await Swal.fire({
    title: "Bienvenidos",
    text: "Seleciona tu pais",
    //html:'<b class="rojo">Hola</b>'
    icon: "question",
    confirmButtonText: "Selecionar",
    footer: '<span class="rojo">Esta es una informacion importante</span>',
    // width: "90%",
    padding: "1rem",
    // background:
    //grow:'fullscreen'
    backdrop: true,
    //timer:10000,
    //timerProgressBar:true
    //toast:true,
    position: "center",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: true,

    input: "select",
    inputPlaceholder: "pais",
    inputValue: "",
    inputOptions: {
      colombia: "colombia",
      argentina: "Argentina",
      brasil: "Brasil",
      chile: "Chile",
      españa: "España",
    },

    customClass: {
      //container:
      popup: "popup-class",
      // 	header:
      // 	title:
      // 	closeButton:
      // 	icon:
      // 	image:
      // 	content:
      // 	input:
      // 	actions:
      // 	confirmButton:
      // 	cancelButton:
      // 	footer:
    },

    showConfirmButton: true,
    confirmButtonColor: "#24E040",

    confirmButtonAriaLabel: "confirmar",

    showCancelButton: false,
    cancelButtonText: "cancelar",
    //cancelButtonColor:
    cancelButtonAriaLabel: "cancelar",

    buttonsStyling: true,
    showCloseButton: true,
    closeButtonAriaLabel: "cerrar alerta",

    imageUrl: "img/1.jpg",
    imageWidth: "200px",
    // imageHeight:
    imageAlt: "eggcooperation",
  });
  if (paiz) {
    Swal.fire({
      title: `Selecionaste ${paiz}`,
      showConfirmButton: true,
      confirmButtonColor: "#24E040",
    });
  }
})();

function showAlert() {
  swal.fire({
    title: "Has llegado al pie de la pagina",
    icon: "success",
    showConfirmButton: true,
    confirmButtonColor: "#24E040",
  });
}

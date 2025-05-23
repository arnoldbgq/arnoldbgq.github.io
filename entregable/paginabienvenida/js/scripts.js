// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactoForm");
  let formLR = document.getElementById("ReclamacionesForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe realmente

    const nombre = document.getElementById("nombre").value;
    alert(`Gracias ${nombre}, se ha registrado su mensaje.`);

    form.reset(); // Limpia el formulario
  });

  formLR.addEventListener("submit", function(e){
    e.preventDefault();

    const emailLR = document.getElementById("email").value;
    alert(`Su reclamo fue registrado. Recibira un mensaje de confirmación en su Email ${emailLR}.`);
        form.reset();
  });
});

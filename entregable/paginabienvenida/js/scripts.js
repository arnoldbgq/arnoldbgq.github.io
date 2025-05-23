// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Formulario de contacto
  const form = document.getElementById("contactoForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`Gracias ${nombre}, se ha registrado su mensaje.`);
      form.reset();
    });
  }

  // Formulario de reclamos
  const formLR = document.getElementById("ReclamacionesForm");
  if (formLR) {
    formLR.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailLR = document.getElementById("email").value;
      alert(`Su reclamo fue registrado. Recibirá un mensaje de confirmación en su Email ${emailLR}.`);
      formLR.reset();
    });
  }
});

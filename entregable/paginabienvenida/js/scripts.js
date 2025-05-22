// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactoForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe realmente

    const nombre = document.getElementById("nombre").value;
    alert(`Gracias ${nombre}, se ha registrado su mensaje.`);

    form.reset(); // Limpia el formulario
  });
});

var botonTema = document.querySelector("#botonModo");
var modoActual = document.querySelector("html").getAttribute("data-bs-theme");


if (localStorage.getItem("tema") === null) {
    localStorage.setItem("tema", document.querySelector("html").getAttribute("data-bs-theme"));
} else {
    document.querySelector("html").setAttribute("data-bs-theme", localStorage.getItem("tema"));
}


botonTema.addEventListener("click", function () {
    if (modoActual == "light") {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        modoActual = "dark";
        localStorage.setItem("tema", "dark");        
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        modoActual = "light";
        localStorage.setItem("tema", "light");
    }
    
});

// DOMCcontentLoaded espera que se cargue la página, porque al compartir ambos html el mismo js
// ocurría que el js se ejecutaba antes de que se cargara el formulario, y no funcionaba. 
document.addEventListener("DOMContentLoaded", function() {
    const formRegistro = document.getElementById("formularioReg");
    //const btnRegistro = document.getElementById("btnRegistro"); 
    
    // Agrego un event listener al botón "Registrarme"
    formRegistro.addEventListener("submit", function(event) {
      event.preventDefault(); // prevenir la acción por defecto del botón
    
    // Obtenengo los valores ingresados en los campos del formulario
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const email = document.getElementById("inputEmail4").value;
    const direccion = document.getElementById("inputAddress").value;
    const ciudad = document.getElementById("inputCity").value;
    const provincia = document.getElementById("inputState").value;
    var novedades = document.getElementById("gridCheck").checked ? 'Si' : 'No';
    const profes = "gabriel.molina@unahur.edu.ar,jesusnicolas.rios@unahur.edu.ar"

      // Crear el cuerpo del correo electrónico a enviar con los datos del formulario
      const cuerpoEmail = `Nombres: ${nombre}%0AApellidos: ${apellido}%0AEmail: ${email}%0ADirección: ${direccion}%0ACiudad: ${ciudad}%0AProvincia: ${provincia}%0ANovedades: ${novedades}`;
    
      // Abro el programa de correo electrónico predeterminado del usuario y completo campos
      window.location.href = `mailto:${profes}?subject=Primer Parcial 2023C1 Coniglio Hernan&body=${cuerpoEmail}`;
      alert("Gracias por registrarte, te enviaremos un correo electrónico con tu Nro de Ticket.");
      window. open("./index.html" , "_self" )
    });
});

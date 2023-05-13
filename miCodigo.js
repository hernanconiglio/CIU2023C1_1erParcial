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


const formulario = document.getElementById('formularioReg');
const inputs = document.querySelectorAll('#formularioReg input');


/* manejo del formulario y envío de datos */

/*
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = encodeURIComponent(document.getElementById('inputNombre').value);
  const apellido = encodeURIComponent(document.getElementById('inputApellido').value);
  const email = encodeURIComponent(document.getElementById('inputEmail4').value);
  const direccion = encodeURIComponent(document.getElementById('inputAddress').value);
  const ciudad = encodeURIComponent(document.getElementById('inputCity').value);
  const provincia = encodeURIComponent(document.getElementById('inputState').value);
  const novedades = document.getElementById('gridCheck').checked ? 'Sí' : 'No';
  
  const subject = encodeURIComponent('Primer Parcial 2023C1 Coniglio Hernán');
  const body = encodeURIComponent(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nDirección: ${direccion}\nCiudad: ${ciudad}\nProvincia: ${provincia}\nQuiero recibir novedades: ${novedades}`);
  const addresses = encodeURIComponent('profe1@unahur.edu.ar,profe2@unahur.edu.ar');
  
  const mailtoUrl = `mailto:${addresses}?subject=${subject}&body=${body}`;
  
  window.open(mailtoUrl);
});
*/



//// pruebas de primeras funciones con botones pero no me funciono //// 
/* function myFunction() {
    alert("Que disfrutes la musica");
  }
const nombre = document.querySelector(".nombre");
function cambiacolor() { 
    nombre.style.color = "blue"; }

function changeColor(newColor) {
        var elem = document.getElementById("cambio_de_color");
        elem.style.color = newColor;
      }
*/
      // Cuando el mouse pasa por encima de algún elemento
window.addEventListener('mouseover', function(evt) {
  // Si elemento tiene la clase `Hola`
  if (evt.target.classList.contains('Hola')) {
    evt.target.style.color = 'blue';
  }
});

// Cuando el mouse salga de encima de algún elemento
window.addEventListener('mouseout', function(evt) {
  // Si elemento tiene la clase `Hola`
  if (evt.target.classList.contains('Hola')) {
    evt.target.style.color = 'black';
  }
});
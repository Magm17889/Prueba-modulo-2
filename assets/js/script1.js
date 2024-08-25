/// Saludo de Disfruta la musica /// 
function myFunction() {
    alert("Que disfrutes la musica");
  }

  //// pruebas de primeras funciones con botones pero no me funciono //// 
/* const nombre = document.querySelector(".nombre");
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

// esta funcion me funciona bien el cambio de fondo azul y letras blancas ////
function cambiarFondo(){
  document.getElementById("contenido").style.backgroundColor = "blue"; document.getElementById("contenido").style.color = "white";
}

//// esta funcion funciona solo la 1 parte la segunda no, trate de hacerlo igual a la de arriba cambiandole el style color a black pero sin exito // 
function normalizar(){
  document.getElementById("contenido").style.backgroundColor = "white"; document.getElementById("contenido").style.Color ="black"; 
}

//MODAL VER+ DASHBOARD
function vermas(){ //para que salte modal ver +
    let myModal = new bootstrap.Modal(document.getElementById('ModalSemestre'), {});
    myModal.show();
  }

//MODAL ELIMINAR DASHBOARD
  function eliminar(id_semestre) { //eliminar semestre
    if (confirm("¿Quieres eliminar el semestre?")) {
          
          document.getElementById('semestre-'+id_semestre).remove();
    } else {
          alert("No se ha eliminado el semestre");
      }
  }

  //INTERFAZ 2
  // Obtén el elemento 'select' por su ID
var selectYear = document.getElementById('year');

// Obtiene el año actual
var currentYear = new Date().getFullYear();

$(document).ready(function() {
    // Inicializa los popovers
    $('#background-color').popover({
      content: $('#color-picker-popover').html(),
      html: true,
      placement: 'bottom',
    });
  
    // Maneja la selección de color
    $(document).on('click', '.color-box', function() {
      var selectedColor = $(this).css('background-color');
      $('#background-color').css('background-color', selectedColor);
      $('#background-color').popover('hide');
    });
  });

// Obtén referencias a los elementos HTML y el rango de dificultad
const range = document.getElementById('dificultad');
const minValue = document.querySelector('.min-value');
const maxValue = document.querySelector('.max-value');
const currentValue = document.querySelector('.current-value');

// Agrega un evento de cambio al rango para actualizar los valores
range.addEventListener('input', function() {
  // Actualiza el valor actual
  currentValue.textContent = range.value;
});

// Inicializa los valores mínimo y máximo
minValue.textContent = range.min;
maxValue.textContent = range.max;
currentValue.textContent = range.value;



//Función añadir card a partir del formulario
function addCard()
{

  var floatingInput = document.getElementById("floatingInput").value;
  //var v1 = document.getElementById("v1").value;
  //var a1 = document.getElementById("a1").value;
  //var x2 = document.getElementById("x2").value;
  //var v2 = document.getElementById("v2").value;
  //var a2 = document.getElementById("a2").value;



  var tempCard = "";
  tempCard += '<div class="margen-top-lg col-sm-4" id="semestre-3">';
  tempCard += '<div class="card" style="width: 18rem;">';
  tempCard += '<div class="card-body">';
  tempCard += '<h5 class="card-title colorfondo-rosa">CURSO 2023 - 2024</h5>';
  tempCard += '<div class="padding-sm">';
  tempCard += '<p class="card-text">'+floatingInput+'</p>';
  tempCard += '<a href="#" class="btn btn-primary" id="añadir" onclick="vermas()">ver +</a>';
  tempCard += '<button class="btn btn-danger" id="eliminar" onclick="eliminar(3)">';
  tempCard += '<i class="fas fa-trash"></i>';
  tempCard += '</div>';
  tempCard += '</div>';
  tempCard += '</div>';
  tempCard += '</div>';

  $(".card-container").append(tempCard);
}
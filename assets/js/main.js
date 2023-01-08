const tareasPorDia = {
  'lunes': 0,
  'martes': 0,
  'miercoles': 0,
  'jueves': 0,
  'viernes': 0,
};

const mostrarInput = {
  'lunes': true,
  'martes': true,
  'miercoles': true,
  'jueves': true,
  'viernes': true,
};

let contadorDeTodosLosEstatus = 0;
let tareas = [];

const inicializarOactualizarCantidadTareasCompletadas = () => {
  let tareasCompletadas = 0;
  
  if (tareas.length > 0 ) {
    tareasCompletadas = tareas.filter(item => item.estatus == 'completada').length;
  }

  document.getElementById('contador-tareas-completadas').innerHTML = `Tareas completadas: ${tareasCompletadas}`;
}

const inicializarFecha = () => { 
  const fecha = new Date();
  const dia = fecha.getDay();
  let lunes = '';
  let martes = '';
  let miercoles = '';
  let jueves = '';
  let viernes = '';
  
  if (dia == 0) {
    lunes = `Lunes ${fecha.getDate() + 1}`;
    martes = `Martes ${fecha.getDate() + 2}`;
    miercoles = `Miercoles ${fecha.getDate() + 3 }`;
    jueves = `Jueves ${fecha.getDate() + 4}`;
    viernes = `Viernes ${fecha.getDate() + 5}`;
  } else if (dia == 1) {
    lunes =   `Lunes ${fecha.getDate()}`;
    martes = `Martes ${fecha.getDate() + 1}`;
    miercoles = `Miercoles ${fecha.getDate() + 2 }`;
    jueves = `Jueves ${fecha.getDate() + 3}`;
    viernes = `Viernes ${fecha.getDate() + 4}`;
  } else if (dia == 2) {
    lunes = `Lunes ${fecha.getDate() - 1}`;
    martes = `Martes ${fecha.getDate()}`;
    miercoles = `Miercoles ${fecha.getDate() + 1 }`;
    jueves = `Jueves ${fecha.getDate() + 2}`;
    viernes = `Viernes ${fecha.getDate() + 3}`;
  } else if (dia == 3) {
    lunes = `Lunes ${fecha.getDate() - 2}`;
    martes = `Martes ${fecha.getDate() - 1}`;
    miercoles = `Miercoles ${fecha.getDate() }`;
    jueves = `Jueves ${fecha.getDate() + 1}`;
    viernes = `Viernes ${fecha.getDate() + 2}`;
  } else if (dia == 4) {
    lunes = `Lunes ${fecha.getDate() - 3}`;
    martes = `Martes ${fecha.getDate() - 2}`;
    miercoles = `Miercoles ${fecha.getDate() - 1 }`;
    jueves = `Jueves ${fecha.getDate()}`;
    viernes = `Viernes ${fecha.getDate() + 1}`;
  } else if (dia == 5) {
    lunes = `Lunes ${fecha.getDate() - 4}`;
    martes = `Martes ${fecha.getDate() - 3}`;
    miercoles = `Miercoles ${fecha.getDate() - 2 }`;
    jueves = `Jueves ${fecha.getDate() - 1}`;
    viernes = `Viernes ${fecha.getDate()}`;
  } else if ( dia == 6) {
    lunes = `Lunes ${fecha.getDate() - 5}`;
    martes = `Martes ${fecha.getDate() - 4}`;
    miercoles = `Miercoles ${fecha.getDate() - 3 }`;
    jueves = `Jueves ${fecha.getDate() - 2}`;
    viernes = `Viernes ${fecha.getDate() - 1}`;
  }

  document.getElementById("p-lunes").innerHTML = lunes;
  document.getElementById("p-martes").innerHTML = martes;
  document.getElementById("p-miercoles").innerHTML = miercoles;
  document.getElementById("p-jueves").innerHTML = jueves;
  document.getElementById("p-viernes").innerHTML = viernes;
}

const inicializarContadorTareas = () => {
  document.getElementById('contador-tareas-registradas').innerHTML = `Tareas registradas: ${tareas.length}`;
}

const showBlock = (dia) => {
  console.log("showBlock");
  if (mostrarInput[dia] == true) {
    document.getElementById(`input-task-${dia}`).style.display = "block";
    mostrarInput[dia] = false;
  } else {
    document.getElementById(`input-task-${dia}`).style.display = "none";
    mostrarInput[dia] = true;
  }
};

const validateInput = (event, dia) => {
  const inputId = `input-task-${dia}`;
  let input = document.getElementById(inputId).value;
  if (input != "") {
    if (event.key === "Enter") {
      event.preventDefault();
      const tareasPorDia = contadorPorDia(dia);
      contadorDeTodosLosEstatus = contadorDeTodosLosEstatus + 1;
      
      const tareaActual = document.getElementById(dia).innerHTML;
      const identificadorDiv = `div-${dia}-${tareasPorDia}`;
      const identificadorSpan = `estatus-tarea-${contadorDeTodosLosEstatus}`
      document.getElementById(dia).innerHTML = tareaActual + `<div class="añadido" id="${identificadorDiv}">
          <span>${contadorDeTodosLosEstatus} - ${input}</span>
          <p id="${identificadorSpan}">Estatus: por hacer</p>
          <p class="sumaresta">
            <span onclick="eliminar('${identificadorDiv}', '${dia}')" class="btn">
                <i class="fa-solid fa-circle-minus" style="color:rgb(240, 116, 116)"></i>
            </span>
            <span onclick="actualizarTareasPorEstatus('${identificadorDiv}', '${identificadorSpan}')" class="btn">
                <i class="fa-solid fa-circle-plus" style="color:rgb(192, 227, 255)"></i>
            </span>
          </p>
        </div>`;
      
      tareas.push(
        {
          id: identificadorDiv,
          estatus: 'por hacer',
          texto: input
        }
      );

      //vaciamos el input para poder agregar otra tarea
      document.getElementById(inputId).value = "";
      console.log(`tareas ${JSON.stringify(tareas)}`);
      document.getElementById('contador-tareas-registradas').innerHTML = `Tareas registradas: ${tareas.length}`;
    }
  }
};

const eliminar = (id, dia) => {
  document.getElementById(id).remove();
  tareas = tareas.filter(item => item.id != id);
  console.log(`tareas restantes ${JSON.stringify(tareas)}`);
  document.getElementById(`input-task-${dia}`).style.display = "none";
  document.getElementById('contador-tareas').innerHTML = `Tareas registradas: ${tareas.length}`;
}

const contadorPorDia = (dia) => {
  tareasPorDia[dia] = tareasPorDia[dia] + 1;
  return tareasPorDia[dia];
};

const actualizarTareasPorEstatus = (tareaId) => {
  tareas = tareas.map(item => {
    if(item.id == tareaId) {
      if (item.estatus == 'por hacer') {
        item.estatus = 'desarrollo';
      } else if (item.estatus == 'desarrollo') {
        item.estatus = 'completada';
      } else if (item.estatus == 'completada') {
        item.estatus = 'por hacer';
      }
    }
    return item;
  });

  inicializarOactualizarCantidadTareasCompletadas();
  
  return tareas;
}

inicializarContadorTareas();
inicializarFecha();
inicializarOactualizarCantidadTareasCompletadas();
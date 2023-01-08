const estatus = ['por hacer', 'en curso', 'completado'];

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

const generarCssDinamico = (tareas) => {
  tareas.forEach(tarea => {
    const identificadorEstatus = `estatus-tarea-${tarea.id.split('-')[2]}`;
    console.log(identificadorEstatus);
    let colorEstatus = '';
  
    if (tarea.estatus == estatus[0]) { //por hacer
      colorEstatus = 'red'
    } else if (tarea.estatus == estatus[1]) { // en curso
      colorEstatus = 'orange'
    } else if (tarea.estatus == estatus[2]) { // completado
      colorEstatus = 'green'
    }
  
    document.getElementById(identificadorEstatus).style.backgroundColor = colorEstatus;
    document.getElementById(identificadorEstatus).style.height = '20px';
  });
};

const generarHtml = (contador, identificadorDiv, texto, dia, estatus) => {
  return `<div class="tarea" id="${identificadorDiv}">
    <span>${contador} - ${texto}</span>
    <button id="estatus-tarea-${contador}"></button>
    <div class="acciones">
      <span onclick="eliminar('${identificadorDiv}', '${dia}')" class="btn">
        <i class="fa-solid fa-circle-minus" style="color:rgb(240, 116, 116)"></i>
      </span>
      <span onclick="actualizarTareasPorEstatus('${identificadorDiv}')" class="btn">
        <i class="fa-solid fa-circle-plus" style="color:rgb(192, 227, 255)"></i>
      </span>
    </div>
  </div>`;
}

const inicializarTareasPredeterminadas = () => {
  const dia = 'lunes';

  tareas = [
    {
      id: 'div-lunes-1',
      texto: 'Pasear a princesa',
      estatus: estatus[0],
    },
    {
      id: 'div-lunes-2',
      texto: 'Asistir a desafio latam',
      estatus: estatus[0],
    },
    {
      id: 'div-lunes-3',
      texto: 'Practicar react',
      estatus: estatus[0],
    },
  ];
  
  let tareasPredeterminadas = document.getElementById(dia).innerHTML;
  tareasPorDia['lunes'] = tareas.length;
  contadorDeTodosLosEstatus = tareas.length;
  tareas.forEach((tarea, index) => {
    tareasPredeterminadas += generarHtml(index+1, tarea.id, tarea.texto, dia, tarea.estatus);
  });

  document.getElementById(dia).innerHTML = tareasPredeterminadas;

  generarCssDinamico(tareas);
}

const inicializarOactualizarCantidadTareasCompletadas = () => {
  let tareasCompletadas = 0;
  let tareasPorHacer = 0;
  let tareasEnCurso = 0;
  
  if (tareas.length > 0 ) {
    tareasCompletadas = tareas.filter(item => item.estatus == estatus[2]).length;
    tareasPorHacer = tareas.filter(item => item.estatus == estatus[0]).length;
    tareasEnCurso = tareas.filter(item => item.estatus == estatus[1]).length;
  }

  document.getElementById('contador-tareas-completadas').innerHTML = `Tareas completadas: ${tareasCompletadas}`;
  document.getElementById('contador-tareas-pendientes').innerHTML = `Tareas por hacer: ${tareasPorHacer}`;
  document.getElementById('contador-tareas-proceso').innerHTML = `Tareas en curso: ${tareasEnCurso}`;
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

const mostrarInputPorDia = (dia) => {
  if (mostrarInput[dia] == true) {
    document.getElementById(`input-task-${dia}`).style.display = "block";
    mostrarInput[dia] = false;
  } else {
    document.getElementById(`input-task-${dia}`).style.display = "none";
    mostrarInput[dia] = true;
  }
};

const agregarTareaPorDia = (event, dia) => {
  const inputId = `input-task-${dia}`;
  let texto = document.getElementById(inputId).value;
  if (texto != "") {
    if (event.key === "Enter") {
      event.preventDefault();
      const tareasPorDia = contadorPorDia(dia);
      contadorDeTodosLosEstatus = contadorDeTodosLosEstatus + 1;
      
      const tareasPreviasDelDia = document.getElementById(dia).innerHTML;
      const identificadorDiv = `div-${dia}-${tareasPorDia}`;
      
      document.getElementById(dia).innerHTML = tareasPreviasDelDia + generarHtml(contadorDeTodosLosEstatus, identificadorDiv, texto, dia, estatus[0]);
      
      tareas.push(
        {
          id: identificadorDiv,
          estatus: estatus[0],
          texto: texto
        }
      );

      generarCssDinamico(tareas);

      //vaciamos el input para poder agregar otra tarea
      document.getElementById(inputId).value = "";
      console.log(`tareas ${JSON.stringify(tareas)}`);
      document.getElementById('contador-tareas-registradas').innerHTML = `Tareas registradas: ${tareas.length}`;
    }
  }
};

const eliminar = (id, dia) => {
  document.getElementById(id).remove();
  //la funcion filter, nos permite devolver un nuevo arreglo sin el elemento que queremos dejar por fuera, para eso nos ayudamos con el id
  tareas = tareas.filter(item => item.id != id);
  console.log(`tareas restantes ${JSON.stringify(tareas)}`);
  document.getElementById(`input-task-${dia}`).style.display = "none";
  document.getElementById('contador-tareas-registradas').innerHTML = `Tareas registradas: ${tareas.length}`;
  inicializarOactualizarCantidadTareasCompletadas();
}

const contadorPorDia = (dia) => {
  tareasPorDia[dia] = tareasPorDia[dia] + 1;
  return tareasPorDia[dia];
};

const actualizarTareasPorEstatus = (tareaId) => {
  tareas = tareas.map(item => {
    if(item.id == tareaId) {
      if (item.estatus == estatus[0]) { //por hacer
        item.estatus = estatus[1]; // en curso
      } else if (item.estatus == estatus[1]) { // en curso
        item.estatus = estatus[2]; // completado
      } else if (item.estatus == estatus[2]) { // completado
        item.estatus = estatus[0]; // por hacer
      }
    }
    return item;
  });

  generarCssDinamico(tareas);
  inicializarOactualizarCantidadTareasCompletadas();
  
  return tareas;
}

inicializarTareasPredeterminadas();
inicializarContadorTareas();
inicializarFecha();
inicializarOactualizarCantidadTareasCompletadas();
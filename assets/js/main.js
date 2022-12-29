const inicializarFecha = () => { 
  const fecha = new Date();
const day = fecha.getDay();

let lunes = '';
let martes = '';
let miercoles = '';
let jueves = '';
let viernes = '';

if (day == 1) {
  lunes =   `Lunes ${fecha.getDate()}`;
  martes = `Martes ${fecha.getDate() + 1}`;
  miercoles = `Miercoles ${fecha.getDate() + 2 }`;
  jueves = `Jueves ${fecha.getDate() + 3}`;
  viernes = `Viernes ${fecha.getDate() + 4}`;
} else if (day == 2) {
  lunes = `Lunes ${fecha.getDate() - 1}`;
  martes = `Martes ${fecha.getDate()}`;
  miercoles = `Miercoles ${fecha.getDate() + 1 }`;
  jueves = `Jueves ${fecha.getDate() + 2}`;
  viernes = `Viernes ${fecha.getDate() + 3}`;
} else if (day == 3) {
  lunes = `Lunes ${fecha.getDate() - 2}`;
  martes = `Martes ${fecha.getDate() - 1}`;
  miercoles = `Miercoles ${fecha.getDate() }`;
  jueves = `Jueves ${fecha.getDate() + 1}`;
  viernes = `Viernes ${fecha.getDate() + 2}`;
} else if (day == 4) {
  lunes = `Lunes ${fecha.getDate() - 3}`;
  martes = `Martes ${fecha.getDate() - 2}`;
  miercoles = `Miercoles ${fecha.getDate() - 1 }`;
  jueves = `Jueves ${fecha.getDate()}`;
  viernes = `Viernes ${fecha.getDate() + 1}`;
} else if (day == 5) {
  lunes = `Lunes ${fecha.getDate() - 4}`;
  martes = `Martes ${fecha.getDate() - 3}`;
  miercoles = `Miercoles ${fecha.getDate() - 2 }`;
  jueves = `Jueves ${fecha.getDate() - 1}`;
  viernes = `Viernes ${fecha.getDate()}`;
}

document.getElementById("p-lunes").innerHTML = lunes;
document.getElementById("p-martes").innerHTML = martes;
document.getElementById("p-miercoles").innerHTML = miercoles;
document.getElementById("p-jueves").innerHTML = jueves;
document.getElementById("p-viernes").innerHTML = viernes;
}

let showInput = true;
const showBlock = () => {
  console.log("showBlock");
  if (showInput == true) {
    document.getElementById("task1").style.display = "block";
    showInput = false;
  } else {
    document.getElementById("task1").style.display = "none";
    showInput = true;
  }
};
let contadorTareasLunes = 0;
const validateInput = (event) => {
  console.log("validateInput");
  let input = document.getElementById("task1").value;
  if (input != "") {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      contadorTareasLunes = contadorTareasLunes + 1;
      // Trigger the button element with a click
      const tareaactual = document.getElementById("lunes").innerHTML;
      document.getElementById("lunes").innerHTML =
        tareaactual +
        `  <div class="añadido" id="eliminar-lunes-${contadorTareasLunes}">
      <span>${input}</span>
      <p class="sumaresta">
          <span onclick="eliminar('eliminar-lunes-${contadorTareasLunes}')" class="btn">
              <i class="fa-solid fa-circle-minus" style="color:rgb(240, 116, 116)"></i>
          </span>
          <span onclick="editar()" class="btn">
              <i class="fa-solid fa-circle-plus" style="color:rgb(192, 227, 255)"></i>
          </span>
      </p>
  </div> `;
    }
  }
};
const eliminar = (id) => {
  console.log(id);
  const idEliminar = document.getElementById(id);
  idEliminar.remove();
}

inicializarFecha();
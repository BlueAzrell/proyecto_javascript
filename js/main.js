const articulos = [
  {
    id: "0",
    tipo: "procesador",
    modelo: "Ryzen 5 5600G",
    precio: 31000,
    img: "../img/ryzen55600g.jpg",
  },
  {
    id: "1",
    tipo: "procesador",
    modelo: "Ryzen 5 5600",
    precio: 29000,
    img: "../img/ryzen55600.jpg",
  },
  {
    id: "2",
    tipo: "ram",
    modelo: "Corsair RGB Pro 8GB",
    precio: 9500,
    img: "../img/corsairrgb.png",
  },
  {
    id: "3",
    tipo: "ram",
    modelo: "Corsair Vengeance 8GB",
    precio: 6000,
    img: "../img/corsairvengeance.jpg",
  },
  {
    id: "4",
    tipo: "ssd",
    modelo: "SanDisk Ultra 480GB'",
    precio: 7800,
    img: "../img/sanDiskultra.jpg",
  },
  {
    id: "5",
    tipo: "hdd",
    modelo: "Seagate 2TB 5400RPM",
    precio: 6000,
    img: "../img/Seagate2tb.jpg",
  },
  {
    id: "6",
    tipo: "fuente",
    modelo: "Gamemax VP 500W",
    precio: 8000,
    img: "../img/Gamemaxvp.jpg",
  },
];

const contenedorTienda = document.getElementById("contenedorTienda");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const carrito = [];
for (const articulo of articulos) {
  const divarticulo = document.createElement("div");
  const imgarticulo = document.createElement("img");
  const nombrearticulo = document.createElement("h2");
  const precioarticulo = document.createElement("h3");
  const botonComprar = document.createElement("button");

  divarticulo.className = "card";
  imgarticulo.className = "card-img-top";
  nombrearticulo.className = "nombre-articulo";
  precioarticulo.className = "card-precio";
  botonComprar.className = "btn btn-primary";

  divarticulo.id = articulo.id;
  imgarticulo.src = articulo.img;
  nombrearticulo.append(articulo.modelo);
  precioarticulo.append(`$${articulo.precio}`);
  botonComprar.append("Comprar");
  botonComprar.id = `${articulo.id}`;

  botonComprar.onclick = () => {
    const articuloComprado = articulos.find(
      (articulo) => articulo.id === botonComprar.id
    );
    carrito.push({
      nombre: articuloComprado.modelo,
      precio: articuloComprado.precio,
    });
  };
  divarticulo.append(imgarticulo, nombrearticulo, precioarticulo, botonComprar);
  contenedorTienda.append(divarticulo);
}

const mostrarCarrito = () => {
  for (const articulo of carrito) {
    const nombrearticulo = `<h4>articulo : ${articulo.nombre}</h4>`;
    const precioarticulo = `<h4>Precio : ${articulo.precio}</h4>`;
    contenedorCarrito.innerHTML += nombrearticulo;
    contenedorCarrito.innerHTML += precioarticulo;
  }

  const total = carrito.reduce(
    (cuenta, articulo) => cuenta + articulo.precio,
    0
  );
  contenedorCarrito.append(`Total Compra :  ${total}`);
};

let botonCarrito = document.getElementById("btnCarrito");
botonCarrito.onclick = mostrarCarrito;

const btnbuscar = document.getElementById("btnBuscar");
const inputBuscador = document.getElementById("buscadorInput");

const buscararticulo = () => {
  const articuloTipo = inputBuscador.value;

  const resultadoBusqueda = articulos.filter(
    (articulo) => articulo.tipo === articuloTipo
  );
  for (articulo of articulos) {
    const id = articulo.id;
    document.getElementById(id).style.display = "none";
  }
  for (articulo of resultadoBusqueda) {
    const id = articulo.id;
    document.getElementById(id).style.display = "flex";
  }
};

btnbuscar.onclick = buscararticulo;

const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sorpresa!",
    text: "Ganaste 1000000 de dólares!",
    icon: "success",
    confirmButtonText: "No me lo creo",
  });
});

let pieza = prompt(
  //pregunta de guardia de seguridad

  "Nombra la pieza de la pc que se encarga de procesar toda la información"
);
while (pieza != "procesador") {
  Swal.fire({
    icon: "error",
    title: "Incorrecto",
    text: "La pieza que ingresaste fue " + pieza,
    confirmButtonText: "Lo intento otra vez",
  });

  pieza = prompt("Ingresar otra pieza"); //sin la respuesta correcta es imposible seguir adelante
}

Swal.fire(
  "Correcto!", 
  "La pieza ingresada " + pieza + " es correcta",
  "success"
);

console.log(
  "Acceso del constructor de computadoras concedido gracias a la respuesta " +
    pieza +
    " . Ahora podrás registrarte en el sistema"
);

console.log(saludo("Coder"));
const saludo = (nombre) => "¡Saludos " + nombre + "!"; //Saludo por consola usando función flecha

let insertarSaludo = document.createElement("div");
insertarSaludo.innerHTML = "<h2>¡Bienvenido al constructor de PC!</h2>"; //Inserción de un h2 al HTML

document.getElementById("saludoId").append(insertarSaludo);

class Pc {
  constructor(cpu, ram, ssd, fuentePoder) {
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
    this.fuentePoder = fuentePoder;
  }
}

let pcs = JSON.parse(localStorage.getItem("pcs")) ?? [];
document.getElementById("formulario-pc").addEventListener("submit", agregarPc);

function agregarPc(e) {
  e.preventDefault();
  const formulario = new FormData(e.target);
  const cpu = formulario.get("cpu");
  const ram = formulario.get("ram");
  const ssd = formulario.get("ssd");
  const fuentePoder = formulario.get("fuentePoder");

  const pc = new Pc(cpu, ram, ssd, fuentePoder);

  if (camposCorrectos(pc)) {
    pcs.push(pc);
    localStorage.setItem("pcs", JSON.stringify(pcs));
    mostrarPcs();
    e.target.reset();
  }
}

function mostrarPcs() {
  let listadodePcs = document.getElementById("listadodePcs");
  listadodePcs.innerHTML = "";

  pcs.forEach(({ cpu, ram, ssd, fuentePoder }) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <hr> 
    ${cpu} - 
    ${ram && ram + " GB y -"}
    ${ssd && ssd + " - "}
    <a href="${fuentePoder}" target="blank">Ver trailer</a>`;

    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.classList.add("btn", "btn-danger");

    botonBorrar.addEventListener("click", () => {
      eliminarPc(cpu);
    });
    li.appendChild(botonBorrar);

    listadodePcs.appendChild(li);
  });
}

function eliminarPc(cpu) {
  Swal.fire({
    title: "Estás seguro de borrar la PC creada?",
    text: "Una vez eliminada no volverá a aparecer!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, haré otra!",
  }).then((result) => {
    if (result.isConfirmed) {
      pcs = pcs.filter((item) => item.cpu != cpu);
      localStorage.setItem("pcs", JSON.stringify(pcs));
      mostrarPcs();
      Swal.fire(
        "Borrada!",
        "Su PC creada ha sido eliminada satisfactoriamente.",
        "success"
      );
    }
  });
}

mostrarPcs();

console.log("Fetch a JSON local");

const URL = "../productos.json";

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

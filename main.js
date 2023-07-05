import productos from "./productos.js";

// function validarCodigoProducto(codigo) {
//   for (let i = 0; i < productos.length; i++) {
//     const producto = productos[i];
//     if (codigo == producto.codigo) {
//       return true;
//     }
//   }
//   return false;
// }

function formatearFormasPagosProductos(producto) {
  const precioEfectivo = (producto.precio * 0.9).toFixed(2);
  const precioTarjetaTresCuotas = (producto.precio / 3).toFixed(2);
  const precioTarjetaDoceCuotas = ((producto.precio * 1.3) / 12).toFixed(2);
  return (
    "Nombre: " +
    producto.nombre +
    "\n" +
    "Precio: $ " +
    producto.precio.toFixed(2) +
    "\n" +
    "\n" +
    "Formas de pago: " +
    "\n" +
    "Efectivo: $ " +
    precioEfectivo +
    "\n" +
    "3 cuotas de: $ " +
    precioTarjetaTresCuotas +
    " sin interés" +
    "\n" +
    "12 cuotas de: $ " +
    precioTarjetaDoceCuotas +
    "\n"
  );
}

function buscarProducto(codigo) {
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    if (codigo == producto.codigo) {
      return producto;
    }
  }
  return {};
}

// function formatearCatalogosProductos() {
//   let respuesta = "";
//   for (let i = 0; i < productos.length; i++) {
//     const producto = productos[i];
//     respuesta =
//       respuesta +
//       " - [" +
//       producto.codigo +
//       "] " +
//       producto.nombre +
//       " " +
//       producto.precio +
//       "\n";
//   }
//   return respuesta;
// }

function mostrarFormasPagosProductos(codigoProducto) {
  const productoSeleccionado = buscarProducto(codigoProducto);
  alert(formatearFormasPagosProductos(productoSeleccionado));
}

let catalogo = document.getElementById("catalogo");

for (const producto of productos) {
  let productoHTML = document.createElement("producto1");
  productoHTML.innerHTML = `
  <div class="card">
  <img
    src="../images/${producto.imagen}"
    alt="Collar"
  />
  <h4>${producto.nombre}</h4>
  <p>$ ${producto.precio.toFixed(2)}</p>
  <button id="but-${
    producto.codigo
  }" class="btn btn-outline-dark btn-alert">Comprar</button>
  </div>
  `;
  catalogo.appendChild(productoHTML);
}

// Agregar el evento onclick a los botones
for (const producto of productos) {
  let botonProducto = document.getElementById(`but-${producto.codigo}`);
  botonProducto.addEventListener("click", () =>
    mostrarFormasPagosProductos(producto.codigo)
  );
}

//Primera entrega
// let inicio = prompt(
//   "Bienvenidos a nuestra tienda virtual, desea comprar algo? si/no"
// );
// console.log(catalogo);

// while (inicio != "si" && inicio != "no") {
//   alert("Por favor ingrese si o no");
//   inicio = prompt("Bienvenidos a nuestra tienda virtual, desea comprar algo?");
// }

// if (inicio == "si") {
//   codigoProducto = prompt(
//     formatearCatalogosProductos() +
//       "\n" +
//       "Ingrese el codigo del producto (se encuentra entre corchetes)"
//   );
//   if (!validarCodigoProducto(codigoProducto)) {
//     //Entra cuando no encuentra el producto
//     alert("Codigo de producto inexistente");
//   } else {
//     const productoSeleccionado = buscarProducto(codigoProducto);
//     alert(formatearFormasPagosProductos(productoSeleccionado));
//   }
// } else if (inicio == "no") {
//   alert("Muchas gracias, vuelva pronto");
// }

const productos = [
    {nombre: "leche", precio: 150},
    {nombre: "galletitas" , precio: 100},
    {nombre: "cerveza" , precio: 230 },
    {nombre: "manteca" , precio: 200},
    {nombre: "azucar" , precio: 100},
    {nombre: "arroz" , precio: 150},
];

let carrito = [];

// Obtiene el formulario de selección de producto y el formulario de cantidad de unidades
const formularioProducto = document.querySelector("#formulario-producto");
const formularioUnidades = document.querySelector("#formulario-unidades");

// Obtiene el botón de agregar al carrito y escucha el evento click
const botonAgregar = document.querySelector("#agregar-al-carrito");
botonAgregar.addEventListener("click", () => {
    // Obtiene el valor del formulario de selección de producto y el formulario de cantidad de unidades
    const producto = formularioProducto.querySelector("#producto").value;
    const unidades = formularioUnidades.querySelector("#unidades").value;

    // Busca el producto en el listado de productos y obtiene su precio
    const productoEncontrado = productos.find((p) => p.nombre === producto);
    const precio = productoEncontrado ? productoEncontrado.precio : 0;

    // Agrega el producto al carrito
    carrito.push({ producto, unidades, precio });

    // Muestra el carrito en pantalla
    mostrarCarrito();
});

// Función para mostrar el carrito en pantalla
function mostrarCarrito() {
    const carritoDiv = document.querySelector("#carrito");
    carritoDiv.innerHTML = "";

    // Recorre el carrito y crea un elemento li por cada producto
    carrito.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `Producto: ${item.producto}, Unidades: ${item.unidades}, Total: ${item.precio * item.unidades}`;
        carritoDiv.appendChild(li);
    });
}

// Carga el carrito del local storage al inicio
const carritoStorage = localStorage.getItem("carrito");
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
    mostrarCarrito();
}

// Al cerrar la página, guarda el carrito en el local storage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
});

// Botón para finalizar la compra y mostrar el total
const botonFinalizar = document.querySelector("#finalizar-compra");
botonFinalizar.addEventListener("click", () => {
    // Calcula el total de la compra sumando los precios de cada producto por sus unidades
    const total = carrito.reduce((acc, item) => acc + item.precio * item.unidades, 0);

    // Muestra el total en pantalla
    alert(`Total a pagar: ${total}`);
});


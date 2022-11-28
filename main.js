
const productos = [
    {nombre: "leche", precio: 150},
    {nombre: "galletitas" , precio: 100},
    {nombre: "cerveza" , precio: 230 },
    {nombre: "manteca" , precio: 200},
    {nombre: "azucar" , precio: 100},
    {nombre: "arroz" , precio: 150},
];
let carrito = []
let seleccion = prompt("Hola ¿desea comprar algo? si o no.")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Hola ¿desea comprar algo? si o no.")
}

if(seleccion == "si"){
    alert("a continuacion se mostrara nuestro listado de productos")
    let todosLosProductos = productos.map((producto) => `${producto.nombre}  $${producto.precio}`);
    alert(todosLosProductos.join(" - "))
}else if(seleccion == "no"){
    alert("gracias, vuelva prontos")
}
while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0
    
    if(producto == "leche" || producto == "galletitas" || producto == "cerveza" || producto == "manteca" || producto == "azucar" || producto == "arroz"){
        switch(producto){
            case "leche":
                precio = 150 ;
                break;
            case "galletitas":
                precio = 100;
                break;
            case "cerveza":
                precio = 230 ;
                break;
            case "manteca":
                precio = 200 ;
                break;
            case "azucar":
                precio = 100 ;
                break;
            case "arroz":
                precio = 150;
                break;
        }
        let unidades =parseInt(prompt("¿cuantas unidades quiere llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando? si o no.")
    while(seleccion === "no"){
        alert("gracias, vuelva prontos")
        carrito.forEach((carritoFinal) => {
            console.log(`producto : ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}
 const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
 console.log(`el total a pagar es: ${total}`)

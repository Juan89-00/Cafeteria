// leemos los parametros que vienen en la URL (?cliente=...&producto=...)
const parametros = new URLSearchParams(window.location.search);

// sacamos cada dato del pedido
const cliente = parametros.get("cliente");
const correo = parametros.get("correo");
const producto = parametros.get("producto");
const cantidad = parametros.get("cantidad");
const tamano = parametros.get("tamano");
const llevar = parametros.get("llevar");

// escribimos el nombre en el parrafo con id mensaje
document.getElementById("mensaje").textContent = "Gracias, " + cliente + ", tu pedido fue registrado.";

// escribimos cada dato en su lugar
document.getElementById("correo").textContent = correo;
document.getElementById("producto").textContent = producto;
document.getElementById("cantidad").textContent = cantidad;
document.getElementById("tamano").textContent = tamano;

// si no marcaron la casilla, llevar llega como "no"
if (llevar == "si") {
    document.getElementById("llevar").textContent = "Sí";
} else {
    document.getElementById("llevar").textContent = "No";
}

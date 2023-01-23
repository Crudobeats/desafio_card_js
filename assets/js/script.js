// Card
const precio = 74990
const precioSpan = document.querySelector(".price");
precioSpan.innerHTML = precio.toLocaleString();

const cantidadInput = document.querySelector("#cant");
const colorInput = document.querySelector("#col");

// Total
const precioFinal = document.querySelector(".final-price");
const cantidadFinal = document.querySelector(".final-quantity");
const colorFinal = document.querySelector(".color .box");


let total = 0;


function calcularTotal() {

    const cantidad = cantidadInput.value
    const color = colorInput.value

    precioFinal.innerHTML = ( +cantidad * precio).toLocaleString();
    cantidadFinal.innerHTML = cantidad
    colorFinal.style.backgroundColor = color
}
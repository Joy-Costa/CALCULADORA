var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var resultado = document.getElementById("resultado");
var multiplicar;

function MULTIPLICAR()
{ 
    multiplicar = parseFloat (N1.value) * parseFloat (N2.value);
    resultado.innerHTML = multiplicar;

}
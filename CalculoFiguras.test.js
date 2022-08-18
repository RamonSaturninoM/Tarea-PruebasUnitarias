
//IMPORTAR

const CalculoFiguras = require('./CalculoFiguras');


// INICIA EL TESTING


//test triangulo
test ('areaTri', () => {
    expect (CalculoFiguras.calcularAreaTriangulo(5, 10)).toBe(25); //true
})


//test circulo
test ('areaCir', () => {
    expect (CalculoFiguras.calcularAreaCirculo(3.14, 20)).toBe(1256); //true
})


//test cuadrado
test ('areaCuad', () => {
    expect (CalculoFiguras.calcularAreaCuadrado(25, 25)).toBe(625); //true
})
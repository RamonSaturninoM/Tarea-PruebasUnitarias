// Programa para calcular areas de figuras



// Programa para calcular area de un triangulo

const calcularAreaTriangulo = (base, altura) =>{
    return ((base * altura)/ 2);
}


// Programa para calcular area de un circulo

const pi = 3.14;

const calcularAreaCirculo = (pi, radio) =>{
    return (pi * (radio * radio));
}


// Programa para calcular area de un cuadrado

const calcularAreaCuadrado = (lado1, lado2) =>{
    return lado1 * lado2;
}



//CONSTANTE PARA ALMACENAR LAS VARIABLES

const operaciones = {
    calcularAreaTriangulo,
    calcularAreaCirculo,
    calcularAreaCuadrado
}

//EXPORTAR
module.exports = operaciones;



	
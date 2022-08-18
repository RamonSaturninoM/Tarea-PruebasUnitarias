// Programa para ver cuanto gano al dia por horas trabajadas

//Diario

const pagoDiario = (horas, costePorHora) => {
    return horas * costePorHora;
}


//Semanal (5 dias)

const pagoSemanal = (pagoDiario, dias) => {
    return pagoDiario * dias;
}


//Quincenal (2 semanas)

const pagoQuincenal = (pagoSemanal, semanas) => {
    return pagoSemanal * semanas;
}


//Mensual (2 quincenas)

const pagoMensual = (pagoQuincenal, quincenas) => {
    return pagoQuincenal * quincenas;
}



//CONSTANTE PARA ALMACENAR LAS VARIABLES

const operacionesPago = {
    pagoDiario,
    pagoSemanal,
    pagoQuincenal,
    pagoMensual
}

//EXPORTAR
module.exports = operacionesPago;
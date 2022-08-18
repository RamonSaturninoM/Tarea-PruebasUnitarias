//IMPORTAR

const HorasTrabajadas = require('./HorasTrabajadas');


// INICIA EL TESTING


//test diario
test ('pagoD', () => {
    expect (HorasTrabajadas.pagoDiario(8, 35)).toBe(280); //true
})

//test semanal
test ('pagoS', () => {
    expect (HorasTrabajadas.pagoSemanal(280, 5)).toBe(1400); //true
})

//test quincenal
test ('pagoQ', () => {
    expect (HorasTrabajadas.pagoQuincenal(1400, 2)).toBe(2800); //true
})

//test mensual
test ('pagoM', () => {
    expect (HorasTrabajadas.pagoMensual(2800, 2)).toBe(5600); //true
})
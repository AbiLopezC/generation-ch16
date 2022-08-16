const suma= require('../js/suma');

// pedir un valor esperado
// comparar el resultado

test('sumar 1 + 2 debe ser 3', ()=> {
    expect(suma(1,2)).toBe( 3 )
})

test('sumar 1 + 2 debe ser 3', ()=> {
    expect(suma(1,3)).not.toBe( 5 )
})
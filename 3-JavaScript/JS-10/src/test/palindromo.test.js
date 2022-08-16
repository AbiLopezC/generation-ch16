const palindromo= require ('../js/palindromo.js');

describe('pruebas de la funcion palindromo', ()=> {
    test('debe ingresar "es un palindormo" si ingresamos ojo', ()=> {
        let mensaje= 'Es un palindromo';
        let palabra= 'ojo';
        expect ( palindromo(palabra)).toBe(mensaje);
    })

    test('No debe regresar "es un palindro" al ingresar generation', ()=> {
          let mensaje= 'No es un palindromo';
          let palabra= 'Generation';
    expect ( palindromo(palabra) ).toBe(mensaje);
    }
    )
    
    test('al ingresar un número debe regresar el mensaje', () => {
        let mensaje = 'No es una palabra';
        let valor = 1;

        expect( palindromo(valor) ).toBe(mensaje);
  })


})
// Biblioteca de aserciones:
// La función 'expect' recibe un valor y retorna un objeto con métodos
// para ejecutar afirmaciones sobre ese valor:
function expect(actual) {
    return {
      toBe(expected) {
        if (actual !== expected) {
          throw new Error(`${actual} no es igual a ${expected}`);
        }
      },
      //... otras afirmaciones como toBeGreaterThan, toBeNull, toBeTruthy, etc.
    };
  }
   
  // Funciones a probar
  function sum(a, b) {
    return a + b;
  }
   
  function substract(a, b) {
    return a - b;
  }
   
  // Pruebas
   
  // probando la función 'sum'
  expect(sum(3, 4)).toBe(7);
   
  // Prueba substract
  expect(substract(10, 6)).toBe(4);
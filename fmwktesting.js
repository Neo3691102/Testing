// Testing Framework
// test recibe un titulo (string) y una función callback
// que encapsula la lógica del test
function test(title, callback) {
    try {
      callback();
      console.log(`✓ ${title}`);
    } catch (error) {
      console.error(`✕ ${title}`);
      console.error(error);
    }
  }
   
  // Biblioteca de aserciones
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
   
  // Prueba sum
  test("sum suma 2 números", () => {
    const result = sum(3, 4);
    const expected = 7;
    expect(result).toBe(expected);
  });
   
  // Prueba substract
  test("substract resta 2 números", () => {
    const result = substract(10, 6);
    const expected = 4;
    expect(result).toBe(expected);
  });
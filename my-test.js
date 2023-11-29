// Función a probar
function sum(a, b) {
    return a + b;
  }
   
  // Prueba
  const result = sum(3, 4);
  const expected = 7;
   
  if (result !== expected) {
    throw new Error(`${result} no es igual a ${expected}`);
  }
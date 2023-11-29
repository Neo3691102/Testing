// Testing Framework (con soporte asíncrono)
async function test(title, callback) {
    try {
      await callback();
      console.log(`✓ ${title}`);
    } catch (error) {
      console.error(`✕ ${title}`);
      console.error(error);
    }
  }
   
  // Biblioteca de aserciones
  // ...
   
  // ...funciones sum y substract
   
  // función asíncrona
  async function sumAsync(a, b) {
    return a + b;
  }
   
  // ...pruebas de sum y substract
   
  // Prueba sumAsync
  test("sum suma 2 números de manera asíncrona", async () => {
    const result = await sumAsync(3, 4);
    const expected = 7;
    expect(result).toBe(expected);
  });
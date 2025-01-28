const mongoose = require('mongoose');
const {
  buscaPrimero,
  buscaTodos,
  buscaPorId,
  buscaPrecioMayor,
  creaOrdenador,
  actualizaOrdenador,
  eliminaOrdenador,
  insertaOrdenadores,
} = require('./models/ordenador'); // Ruta ajustada

// Conexión a la base de datos.
mongoose.connect('mongodb+srv://daniellomas116:E3fYYVVm5XrfUOJj@cluster0.aqra3.mongodb.net/almacen')
  .then(() => {
    console.log('Connected!');

    // Ejemplo de uso de las funciones:
    buscaPrimero();
    buscaTodos();
    buscaPorId('679149758be34bca122b2575');
    buscaPrecioMayor();
    creaOrdenador('Apple', 3000);
    actualizaOrdenador('679149758be34bca122b2575', 9000);
    eliminaOrdenador('679149758be34bca122b2575');
    insertaOrdenadores([
      { marca: 'Asus', precio: 2800 },
      { marca: 'Lenovo', precio: 2000 },
    ]);
  })
  .catch(err => console.error('Connection error:', err));

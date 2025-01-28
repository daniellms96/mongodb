// Using Node.js `require()`
const mongoose = require('mongoose');
const { buscaPrimero, buscaTodos, buscaPorId, buscaPrecioMayor } = require('./models/ordenador');

// Conexión a la base de datos.
mongoose.connect('mongodb+srv://daniellomas116:E3fYYVVm5XrfUOJj@cluster0.aqra3.mongodb.net/almacen')
  .then(() => {
    console.log('Connected!');
    // Llamar a las funciones aquí, por ejemplo:
    const idBuscado = '6799081d4f475301883d11e0';
    buscaPrimero();
    buscaTodos();
    buscaPorId(idBuscado);
    buscaPrecioMayor();
  })
  .catch(err => console.error('Connection error:', err));

// Importar mongoose y definir el esquema.
const mongoose = require('mongoose');

// Esquema del documento.
const ordenadorSchema = new mongoose.Schema({
    marca: String,
    precio: Number,
});

// Crear el modelo.
const Ordenador = mongoose.model('Ordenadore', ordenadorSchema, 'ordenadores');

// Función para buscar el primer registro.
const buscaPrimero = () => {
  Ordenador.findOne()
    .then(ordenador => {
      if (ordenador) {
        console.log('Primer ordenador encontrado:', ordenador);
      } else {
        console.log('No se encontró ningún registro');
      }
    })
    .catch(err => console.error('Error al obtener el ordenador:', err));
};

// Función para buscar todos los registros.
const buscaTodos = () => {
  Ordenador.find()
    .then(ordenadores => {
      if (ordenadores.length > 0) {
        console.log('Ordenadores encontrados:', ordenadores);
      } else {
        console.log('No se encontró ningún registro');
      }
    })
    .catch(err => console.error('Error al obtener los ordenadores:', err));
};

// Función para buscar por id.
const buscaPorId = (id) => {
  Ordenador.findById(id)
    .then(ordenador => {
      if (ordenador) {
        console.log('Ordenador por id encontrado:', ordenador);
      } else {
        console.log('No se encontró ningún registro con el id ' + id);
      }
    })
    .catch(err => console.error('Error al obtener el ordenador:', err));
};

// Función para buscar registros con precio mayor a 300.
const buscaPrecioMayor = () => {
  Ordenador.find({ precio: { $gt: 300 } })
    .then(ordenadores => {
      if (ordenadores.length > 0) {
        console.log('Ordenadores encontrados con precio mayor a 300:', ordenadores);
      } else {
        console.log('No se encontró ningún registro');
      }
    })
    .catch(err => console.error('Error al obtener los ordenadores:', err));
};

// Exportar las funciones y el modelo.
module.exports = { buscaPrimero, buscaTodos, buscaPorId, buscaPrecioMayor, Ordenador };

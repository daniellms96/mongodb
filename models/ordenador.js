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

// Función para buscar por ID.
const buscaPorId = (id) => {
  Ordenador.findById(id)
    .then(ordenador => {
      if (ordenador) {
        console.log('Ordenador por ID encontrado:', ordenador);
      } else {
        console.log('No se encontró ningún registro con el ID ' + id);
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

// Función para crear un nuevo ordenador.
const creaOrdenador = (marca, precio) => {
  const nuevoOrdenador = new Ordenador({ marca, precio });
  nuevoOrdenador.save()
    .then(ordenador => console.log('Ordenador guardado:', ordenador))
    .catch(err => console.error('Error al guardar el ordenador:', err));
};

// Función para actualizar un ordenador por ID.
const actualizaOrdenador = (id, nuevoPrecio) => {
  Ordenador.findByIdAndUpdate(id, { precio: nuevoPrecio }, { new: true })
    .then(ordenadorActualizado => {
      if (ordenadorActualizado) {
        console.log('Ordenador actualizado:', ordenadorActualizado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al actualizar el ordenador:', err));
};

// Función para eliminar un ordenador por ID.
const eliminaOrdenador = (id) => {
  Ordenador.findByIdAndDelete(id)
    .then(ordenadorEliminado => {
      if (ordenadorEliminado) {
        console.log('Ordenador eliminado:', ordenadorEliminado);
      } else {
        console.log('No se encontró ningún ordenador con ese ID.');
      }
    })
    .catch(err => console.error('Error al eliminar el ordenador:', err));
};

// Función para insertar múltiples ordenadores.
const insertaOrdenadores = (datos) => {
  Ordenador.create(datos)
    .then(ordenadoresCreados => {
      console.log('Ordenadores creados:', ordenadoresCreados);
    })
    .catch(err => console.error('Error al crear los ordenadores:', err));
};

// Exportar todas las funciones y el modelo.
module.exports = {
  buscaPrimero,
  buscaTodos,
  buscaPorId,
  buscaPrecioMayor,
  creaOrdenador,
  actualizaOrdenador,
  eliminaOrdenador,
  insertaOrdenadores,
  Ordenador,
};

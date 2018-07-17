/**
 * Producto.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    codigo: {
      type: 'string',
      required: true
    },
    valor: {
      type: 'number',
      required: true
    },
    urlImg: {
      type: 'string',
      required: true
    },
    tienda: {
      model: 'Tienda',
    }
  },
};


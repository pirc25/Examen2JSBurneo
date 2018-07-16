/**
 * Tienda.js
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
    direccion: {
      type: 'string',
      required: true
    },
    sucursal: {
      type: 'string',
      required: true
    },
    urlImg: {
      type: 'number',
      required: true
    },
    producto: {
      collection: 'Producto',
      via: 'productoId'
    }

  },

};


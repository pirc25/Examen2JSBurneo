/**
 * Api.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    direccion: { type: 'string', required: true },
    sucursal: { type: 'string', required:true },
    img:{type:'string',required:true},

    apps:{collection:'aplicaciones',via:'so'}

  },

};


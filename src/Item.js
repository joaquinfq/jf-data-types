const jfDataTypeObject = require('./Object');

/**
 * Representa un elemento gestionado por una colección.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Item
 * @extends   jf.dataType.Object
 */
class jfDataTypeItem extends jfDataTypeObject
{
    /**
     * Nombre de la colección que gestiona el elemento.
     *
     * @property COLLECTION
     * @type     {object}
     */
    static get COLLECTION()
    {
        return 'Collection';
    }

    /**
     * @override
     */
    static get KEY()
    {
        return 'Item';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Item';
    }

    /**
     * Relaciones que tiene este elemento con otros y la propiedad que los relaciona.
     *
     * El objeto devuelvo tiene:
     * - Cada clave corresponde con el nombre registrado en la factoría de otro jf.dataType.Item.
     * - El valor de cada clave es la propiedad que tienen común ambos jf.dataType.Item.
     *
     * @property RELATIONS
     * @type     {object}
     */
    static get RELATIONS()
    {
        return {};
    }
}

//------------------------------------------------------------------------------
jfDataTypeObject.register(jfDataTypeItem.KEY, jfDataTypeItem);
module.exports = jfDataTypeItem;

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
     * Relaciones que otros elementos tienen con éste y la propiedad que los relaciona.
     * Es decir, aquellos elementos para los cuales la clase actual es una dependencia.
     *
     * El objeto devuelvo tiene:
     * - Cada clave corresponde con el nombre registrado en la factoría de otro jf.dataType.Item.
     * - El valor de cada clave es la propiedad que tienen común ambos jf.dataType.Item.
     *
     *
     * @property RELATED
     * @type     {object}
     */
    static get RELATED()
    {
        return {};
    }

    /**
     * Relaciones que tiene este elemento con otros y la propiedad que los relaciona.
     * Es decir, aquellos elementos de los que depende la clase actual.
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

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Nombre de la colección que gestiona el elemento.
         *
         * @property $collection
         * @type     {string}
         */
        this.$collection = '';
        /**
         * Listado de elementos que tienen relación el actual.
         *
         * @property $related
         * @type     {jf.dataType.Item[]}
         */
        this.$related = [];
        /**
         * Listado de elementos con los que tiene relación el actual.
         *
         * @property $relations
         * @type     {jf.dataType.Item[]}
         */
        this.$relations = [];
        //------------------------------------------------------------------------------
        this.setProperties(config);
    }

    /**
     * Agrega los elementos relacionados con el actual.
     *
     * @param {object[]} items Instancia de elementos a analizar su relación el actual.
     * @param {string}   type  Tipo de relación a construir (`related'  o ' relations').
     */
    addRelations(items, type)
    {
        const _Class = this.constructor;
        if (_Class.isObject(items))
        {
            const _relations = _Class[type.toUpperCase()];
            if (Object.keys(_relations).length)
            {
                const _property = `$${type.toLowerCase()}`;
                Object
                    .keys(items)
                    .filter(type => type in _relations)
                    .forEach(
                        type =>
                        {
                            const _field = _relations[type];
                            items[type]
                                .filter(item => this[_field] === item[_field])
                                .forEach(item => this[_property].push(item));
                        }
                    );
            }
        }
    }
}

//------------------------------------------------------------------------------
jfDataTypeObject.register(jfDataTypeItem.KEY, jfDataTypeItem);
module.exports = jfDataTypeItem;

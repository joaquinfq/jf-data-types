const jfDataTypeBase       = require('./Base');
const jfDataTypeCollection = require('./Collection');
const jfDataTypeObject     = require('./Object');

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
         * Colecciones de elementos que tienen relación el actual.
         * La clave es el tipo y el valor es la colección.
         *
         * @property $related
         * @type     {object}
         */
        this.$related = {};
        /**
         * Colecciones de elementos con los que tiene relación el actual.
         * La clave es el tipo y el valor es la colección.
         *
         * @property $relations
         * @type     {object}
         */
        this.$relations = {};
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
                const _property = `$${ type.toLowerCase() }`;
                const _getValue = item => item instanceof jfDataTypeBase
                    ? item.value
                    : item;
                Object
                    .keys(items)
                    .filter(type => type in _relations)
                    .forEach(
                        type =>
                        {
                            const _Collection = jfDataTypeCollection.getForItem(type);
                            if (_Collection)
                            {
                                const _field = _getValue(_relations[type]);
                                const _value = _getValue(this[_field]);
                                const _items = items[type].filter(item => _value === item[_field]);
                                if (_items.length)
                                {
                                    let _collection = this[_property][type];
                                    if (_collection)
                                    {
                                        _items.forEach(
                                            item => _collection.add(item, _field, true)
                                        );
                                    }
                                    else
                                    {
                                        this[_property][type] = new _Collection(_items);
                                    }
                                }
                            }
                        }
                    );
            }
        }
    }
}

//------------------------------------------------------------------------------
jfDataTypeObject.register(jfDataTypeItem.KEY, jfDataTypeItem);
module.exports = jfDataTypeItem;

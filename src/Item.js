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
     * @param {object} items Instancia de elementos a analizar su relación con el actual.
     */
    addRelations(items)
    {
        const _Class    = this.constructor;
        const _isObject = _Class.isObject;
        if (_isObject(items))
        {
            const _relations = _Class.RELATIONS;
            if (Object.keys(_relations).length)
            {
                const $relations = this.$relations;
                Object
                    .keys(items)
                    .filter(type => type in _relations)
                    .forEach(
                        type =>
                        {
                            const _Collection = jfDataTypeCollection.getForItem(type);
                            if (_Collection)
                            {
                                const _field = _relations[type];
                                const _value = this.getValue(_field);
                                const _items = items[type].filter(
                                    item => _isObject(item) && this.getValue.call(item, _field) === _value
                                );
                                if (_items.length)
                                {
                                    let _collection = $relations[type];
                                    if (_collection)
                                    {
                                        _items.forEach(
                                            item => _collection.add(item, _field, true)
                                        );
                                    }
                                    else
                                    {
                                        $relations[type] = new _Collection(_items);
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

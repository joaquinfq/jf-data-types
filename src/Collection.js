const jfDataTypeArray = require('./Array');
const jfDataTypeBase = require('./Base');

/**
 * Clase para el manejo de colecciones.
 *
 * La principal diferencia con respecto a la clase `jf.dataType.Array` es
 * que está pensada para trabajar con modelos que heredan de `jf.dataType.Object`.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Collection
 * @extends   jf.dataType.Array
 */
class jfDataTypeCollection extends jfDataTypeArray
{
    /**
     * @override
     */
    static get KEY()
    {
        return 'Collection';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Collection';
    }

    /**
     * Compara dos elementos para realizar la ordenación de la colección.
     *
     * @param {*} item1 Elemento 1 a comparar.
     * @param {*} item2 Elemento 2 a comparar.
     *
     * @return {number} Resultado de la comparación (<0, 0, >0).
     *
     * @protected
     */
    static _cmp(item1, item2)
    {
        const _value1 = item1.valueOf();
        const _value2 = item2.valueOf();

        return typeof _value1 === 'string'
            ? _value1.localeCompare(_value2)
            : _value1 - _value2;
    }

    /**
     * Añade un nuevo elemento a la colección.
     *
     * @param {Object}  item     Elemento a añadir.
     * @param {String}  property Propiedad a usar para comparar los elementos existentes.
     * @param {Boolean} unique   Indica si el elemento a añadir puede repetirse o no.
     *
     * @return {jf.dataType.Object|null} Elemento agregado o `null` si no se agregó.
     */
    add(item, property = 'id', unique = false)
    {
        let _item = this.constructor.buildItem(item);
        if (_item && (!unique || !this.findFirst(property, _item[property].value)))
        {
            const _items = this.raw();
            if (Array.isArray(_items))
            {
                _items.push(_item);
            }
            else
            {
                this.setValue([_item]);
            }
        }
        else
        {
            _item = null;
        }

        return _item;
    }

    /**
     * Busca los elementos que contiene el valor indicado en la propiedad especifada.
     *
     * @param {String} property Nombre de la propiedad donde se buscará el valor.
     * @param {*}      value    Valor a buscar.
     *
     * @return {jf.dataType.Object[]} Elementos encontrados.
     */
    findBy(property, value)
    {
        return this.call('filter', item => item[property] && item[property].value === value) || [];
    }

    /**
     * Busca el primer elemento que contiene el valor indicado en la propiedad especifada.
     *
     * @param {String} property Nombre de la propiedad donde se buscará el valor.
     * @param {*}      value    Valor a buscar.
     *
     * @return {jf.dataType.Object|undefined} Elemento encontrado o `undefined`.
     */
    findFirst(property, value)
    {
        return this.call(
            'find',
            elem => elem[property] && elem[property].value === value
        );
    }

    /**
     * Agrupa los elementos de la colección por la clave especificada.
     *
     * @param {string} property Nombre de la propiedad a usar para agrupar el resultado.
     *
     * @return {object} Elementos agrupados por clave.
     */
    groupBy(property)
    {
        const _groups = {};
        this.call(
            'forEach',
            item =>
            {
                let _value = item[property];
                if (_value instanceof jfDataTypeBase)
                {
                    _value = String(_value);
                }
                const _type = typeof _value;
                if (_type === 'number' || _type === 'string')
                {
                    if (_value in _groups)
                    {
                        _groups[_value].push(item);
                    }
                    else
                    {
                        _groups[_value] = [item];
                    }
                }
            }
        );

        return _groups;
    }

    /**
     * Elimina los elementos existentes en la colección que tengan el valor
     * especificado en la propiedad indicada.
     *
     * @param {string} property Propiedad a leer en los elementos.
     * @param {*}      value    Valor de la propiedad que se verificará.
     *
     * @return {jf.dataType.Object[]} Elementos eliminados.
     */
    removeBy(property, value)
    {
        const _removed = [];
        const _items   = this.raw() || [];
        let _index     = _items.length - 1;
        while (_index >= 0)
        {
            const _item = _items[_index];
            if (_item[property] && _item[property].value === value)
            {
                _items.splice(_index, 1);
                _removed.unshift(_item);
            }
            --_index;
        }

        return _removed;
    }

    /**
     * Elimina un elemento existente de la colección.
     *
     * @param {jf.dataType.Object} item Elemento a eliminar.
     */
    removeItem(item)
    {
        if (this.constructor.isItem(item))
        {
            this.call(
                'some',
                (currentItem, index, items) =>
                {
                    const _is = item === currentItem;
                    if (_is)
                    {
                        items.splice(index, 1);
                    }

                    return _is;
                }
            );
        }
    }

    /**
     * Ordena los elementos de la colección por la propiedad indicada.
     *
     * @param {string}    property Propiedad por la que se ordenarán los elementos.
     * @param {string}    order    Orden de los elementos ('ASC' o 'DESC').
     * @param {function?} cmp      Función usada como comparador.
     *
     * @return {jf.dataType.Object[]} Listado de elementos ordenados.
     */
    sortBy(property, order = 'ASC', cmp = null)
    {
        const _items = this.raw();
        if (Array.isArray(_items))
        {
            const _cmp = typeof cmp === 'function'
                ? cmp
                : this.constructor._cmp;
            if (order === 'ASC')
            {
                _items.sort((m1, m2) => _cmp(m1[property], m2[property]));
            }
            else
            {
                _items.sort((m1, m2) => _cmp(m2[property], m1[property]));
            }
        }

        return _items;
    }
}

//------------------------------------------------------------------------------
jfDataTypeArray.register(jfDataTypeCollection.KEY, jfDataTypeCollection);
module.exports = jfDataTypeCollection;

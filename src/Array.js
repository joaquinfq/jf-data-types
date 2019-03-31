const jfDataTypeBase = require('./Base');

/**
 * Clase para el manejo de arrays de un solo tipo de datos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Array
 * @extends   jf.dataType.Base
 */
class jfDataTypeArray extends jfDataTypeBase
{
    /**
     * Valores de configuración por defecto para cada elemento del array.
     *
     * @property defaults
     * @type     {object}
     */
    static get defaults()
    {
        return {
            config : {},
            type   : 'String'
        };
    };

    constructor(config)
    {
        super();
        if (Array.isArray(config))
        {
            this.setValue(config);
        }
        else
        {
            this.setProperties(config);
        }
    }

    /**
     * Iterador que permite usar un bucle `for..of` para iterar sobre la instancia.
     *
     * @return {Object} Configuración a usar por el iterador.
     */
    [Symbol.iterator]()
    {
        let _current  = 0;
        const _values = this.raw() || [];

        return {
            next()
            {
                const _value = _values[_current++];
                return {
                    done  : _value === undefined,
                    value : _value
                };
            }
        };
    }

    /**
     * Ejecuta el método de un array como si fuera un método de la instancia.
     * Esto permitir acceder a algunas funciones útiles presentes en los array
     * pero que no existen en la clase debido a no poder extender de `Array`.
     *
     * @param {string} fn   Nombre del método.
     * @param {*}      args Argumentos de la función.
     *
     * @return {*} Valor retornado por la función ejecutada.
     */
    call(fn, ...args)
    {
        const _items = this.raw();

        return Array.isArray(_items) && typeof _items[fn] === 'function'
            ? _items[fn](...args)
            : undefined;
    }

    /**
     * @override
     */
    _parseValue(value)
    {
        if (Array.isArray(value))
        {
            if (value.length)
            {
                const _Class = this.constructor;
                value        = value
                    .map(
                        value => _Class.isItem(value)
                            ? value
                            : _Class.buildItem(value)
                    )
                    .filter(Boolean);
            }
            else
            {
                value = [];
            }
        }
        else
        {
            value = null;
        }

        return value;
    };

    /**
     * @override
     */
    valueOf()
    {
        const _value = super.valueOf();

        return Array.isArray(_value)
            ? _value.map(v => v instanceof jfDataTypeBase ? v.valueOf() : v)
            : null;
    }

    /**
     * Construye un elemento del array.
     *
     * @param  {object} config Configuración del elemento a construir.
     *
     * @return {jf.dataType.Base|null} Elemento del tipo válido o `null`.
     */
    static buildItem(config)
    {
        let _item = null;
        if (config && !this.isItem(config))
        {
            const _defaults = this.defaults;
            _item           = this.create(_defaults.type);
            if (_item)
            {
                _item.setProperties(_defaults.config);
                if (config && typeof config === 'object')
                {
                    _item.setProperties(config);
                }
                else
                {
                    _item.value = config;
                }
            }
        }

        return _item;
    }

    /**
     * Verifica si el elemento corresponde es del tipo de dato manejado por la clase.
     *
     * @param {*} item Elemento a verificar.
     *
     * @return {Boolean} `true` si el elemento es un tipo de dato válido para la clase.
     *
     * @static
     */
    static isItem(item)
    {
        let _is = false;
        if (item)
        {
            const _type = this.defaults.type;
            if (_type)
            {
                const _Class = this.factory.get(_type);
                if (_Class)
                {
                    _is = item instanceof _Class;
                }
            }
        }

        return _is;
    }
}

//------------------------------------------------------------------------------
jfDataTypeBase.register('Array', jfDataTypeArray);
module.exports = jfDataTypeArray;

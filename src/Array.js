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
     * @property DEFAULTS
     * @type     {object}
     */
    static get DEFAULTS()
    {
        return {};
    }

    /**
     * @override
     */
    static get KEY()
    {
        return 'Array';
    }

    /**
     * Nombre del elemento que se construirá para al insertar cada
     * elemento en el array.
     */
    static get ITEM()
    {
        return 'String';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Array';
    }

    /**
     * @override
     */
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
                        value =>
                        {
                            const _model = _Class.isItem(value)
                                ? value
                                : _Class.buildItem(value);
                            if (_model)
                            {
                                _model.$collection = this;
                            }

                            return _model;
                        }
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
            const _defaults = this.DEFAULTS;
            _item           = this.create(this.ITEM);
            if (_item)
            {
                _item.setProperties(_defaults);
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
            const _type = this.ITEM;
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
jfDataTypeBase.register(jfDataTypeArray.KEY, jfDataTypeArray);
module.exports = jfDataTypeArray;

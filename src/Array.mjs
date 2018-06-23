import jfDataTypeBase from './Base';

/**
 * Clase para el manejo de arrays de un solo tipo de datos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Array
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeArray extends jfDataTypeBase
{
    /**
     * Valores de configuración por defecto para cada elemento del array.
     *
     * @property defaults
     * @type     {Object}
     * @static
     */
    static defaults = {
        config : {},
        type   : 'String'
    };

    /**
     * @override
     */
    static parser = function (value)
    {
        if (Array.isArray(value))
        {
            if (value.length)
            {
                const _Class     = this.constructor;
                const _config    = _Class.defaults.config;
                const _hasConfig = _config && typeof _config === 'object';
                value            = value
                    .map(
                        value => {
                            if (!_Class.isItem(value))
                            {
                                value = _Class.buildItem(value);
                                if (value && _hasConfig)
                                {
                                    value.setProperties(_config);
                                }
                            }

                            return value;
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
     * Construye un elemento del array.
     *
     * @param  {Object} config Configuración del elemento a construir.
     *
     * @return {jf.dataType.Base|null} Elemento del tipo válido o `null`.
     *
     * @static
     */
    static buildItem(config)
    {
        let _item = null;
        if (config && !this.isItem(config))
        {
            const _defaults = this.defaults;
            _item           = this.create(_defaults.type, config);
            if (_item && _defaults.config)
            {
                _item.setProperties(_defaults.config)
            }
        }

        return _item;
    }

    /**
     * Ejecuta el método de un array como si fuera un método de la instancia.
     * Esto permitir acceder a algunas funciones útiles presentes en los array
     * pero que no existen en la clase debido a no poder extender de `Array`.
     *
     * @method apply
     *
     * @param {String} fn   Nombre del método.
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
}
//------------------------------------------------------------------------------
jfDataTypeArray.register('Array', jfDataTypeArray);

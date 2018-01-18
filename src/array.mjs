import jfDataTypeBase from './base';

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
                const _defaults  = _Class.defaults;
                const _config    = _defaults.config;
                const _hasConfig = _config && typeof _config === 'object';
                const _type      = _defaults.type;
                value            = value
                    .map(
                        value => {
                            if (!(value instanceof jfDataTypeBase))
                            {
                                value = _Class.create(_type, value);
                                if (_hasConfig)
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
     * @override
     */
    valueOf()
    {
        const _value = super.valueOf();

        return Array.isArray(_value)
            ? _value.map(v => v instanceof jfDataTypeBase ? v.valueOf() : v)
            : _value;
    }
}
//------------------------------------------------------------------------------
jfDataTypeArray.register('Array', jfDataTypeArray);

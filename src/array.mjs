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
                const _defs = this.constructor.defaults;
                value       = value.map(
                    value => jfDataTypeBase.factory(
                        _defs.type,
                        Object.assign(
                            {
                                value
                            },
                            _defs.config
                        )
                    )
                );
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

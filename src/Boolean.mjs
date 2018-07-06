import jfDataTypeBase from './Base';

/**
 * Clase para el manejo de valores booleanos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Boolean
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeBoolean extends jfDataTypeBase
{
    /**
     * @override
     */
    _parseValue(value)
    {
        // Si es un objeto y no tiene claves se asumirá como un valor vacío y el valor asignado será `false`.
        if (value && typeof value === 'object' && !Array.isArray(value))
        {
            value = Object.keys(value);
        }

        return value === 'off' || value === '0' || (Array.isArray(value) && value.length === 0)
            ? false
            : Boolean(value);
    };

    /**
     * @override
     */
    toString()
    {
        const _value = this.value;

        return _value === null
            ? super.toString()
            : _value
                   ? 'true'
                   : 'false';
    }
}
//------------------------------------------------------------------------------
jfDataTypeBoolean.register('Boolean', jfDataTypeBoolean);

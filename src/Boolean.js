const jfDataTypeBase = require('./Base');
/**
 * Clase para el manejo de valores booleanos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Boolean
 * @extends   jf.dataType.Base
 */
class jfDataTypeBoolean extends jfDataTypeBase
{
    /**
     * @override
     */
    static get KEY()
    {
        return 'Boolean';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Boolean';
    }

    /**
     * @override
     */
    _parseValue(value)
    {
        // Si es un objeto y no tiene claves se asumirá como un valor vacío y el valor asignado será `false`.
        if (jfDataTypeBase.isObject(value))
        {
            value = jfDataTypeBase.keys(value);
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
jfDataTypeBase.register(jfDataTypeBoolean.KEY, jfDataTypeBoolean);
module.exports = jfDataTypeBoolean;

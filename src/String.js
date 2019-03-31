const jfDataTypeBase = require('./Base');

/**
 * Clase para el manejo de textos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.String
 * @extends   jf.dataType.Base
 */
class jfDataTypeString extends jfDataTypeBase
{
    /**
     * @override
     */
    _parseValue(value)
    {
        return value === null || value === undefined
            ? ''
            : String(value);
    };

    /**
     * @override
     */
    toString()
    {
        const _value = this.value;

        return _value === null
            ? super.toString()
            : String(_value || '');
    }
}
//------------------------------------------------------------------------------
jfDataTypeBase.register('String', jfDataTypeString);
module.exports = jfDataTypeString;

import jfDataTypeFloat from './Float';

/**
 * Clase para el manejo de números enteros.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Integer
 * @extends   jf.dataType.Float
 */
export default class jfDataTypeInteger extends jfDataTypeFloat
{
    /**
     * @override
     */
    precision     = 0;

    /**
     * @override
     */
    _parseValue(value)
    {
        const _value = parseInt(value, 10);

        return isNaN(_value)
            ? null
            : _value;
    };
}
//------------------------------------------------------------------------------
jfDataTypeInteger.register('Integer', jfDataTypeInteger);

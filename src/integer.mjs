import jfDataTypeFloat from './float';

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
    static parser = value =>
    {
        const _value = parseInt(value, 10);
        return isNaN(_value)
            ? null
            : _value;
    };
    /**
     * @override
     */
    precision            = 0;
}
//------------------------------------------------------------------------------
jfDataTypeInteger.register('Integer', jfDataTypeInteger);

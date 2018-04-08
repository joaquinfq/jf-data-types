import jfFormatDecimal from 'format-decimal';
import jfDataTypeBase from './Base';

/**
 * Clase para el manejo de números decimales.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Float
 * @extends   jf.dataType.Base
 * @uses      jf.formatDecimal
 */
export default class jfDataTypeFloat extends jfDataTypeBase
{
    /**
     * @override
     */
    static parser = function(value)
    {
        const _value = parseFloat(value);

        return isNaN(_value)
            ? null
            : _value;
    };

    /**
     * Símbolo a usar para el punto decimal.
     *
     * @property decimal
     * @type     {String}
     */
    decimal              = ',';

    /**
     * Número de decimales a mostrar
     *
     * @property precision
     * @type     {Number}
     */
    precision            = 2;

    /**
     * Símbolo a usar para los separadores de miles.
     *
     * @property thousands
     * @type     {String}
     */
    thousands            = '.';

    /**
     *
     * @override
     */
    toString()
    {
        const _value = this.value;

        return typeof _value === 'number'
            ? jfFormatDecimal(_value, this)
            : '';
    }
}
//------------------------------------------------------------------------------
jfDataTypeFloat.register('Float', jfDataTypeFloat);

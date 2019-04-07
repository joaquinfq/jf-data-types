const jfFormatDecimal = require('format-decimal');
const jfDataTypeBase  = require('./Base');

/**
 * Clase para el manejo de números decimales.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Float
 * @extends   jf.dataType.Base
 * @uses      jf.formatDecimal
 */
class jfDataTypeFloat extends jfDataTypeBase
{
    /**
     * @override
     */
    static get KEY()
    {
        return 'Float';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Float';
    }

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Símbolo a usar para el punto decimal.
         *
         * @property decimal
         * @type     {String}
         */
        this.decimal = ',';
        /**
         * Número de decimales a mostrar
         *
         * @property precision
         * @type     {Number}
         */
        this.precision = 2;
        /**
         * Símbolo a usar para los separadores de miles.
         *
         * @property thousands
         * @type     {String}
         */
        this.thousands = '.';
        //------------------------------------------------------------------------------
        this.setProperties(config);
    }

    /**
     * @override
     */
    _parseValue(value)
    {
        const _value = parseFloat(value);

        return isNaN(_value)
            ? null
            : _value;
    };

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
jfDataTypeBase.register(jfDataTypeFloat.KEY, jfDataTypeFloat);
module.exports = jfDataTypeFloat;

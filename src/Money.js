const jfDataTypeFloat = require('./Float');

/**
 * Clase para el manejo de cantidades monetarias.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Money
 * @extends   jf.dataType.Float
 */
class jfDataTypeMoney extends jfDataTypeFloat
{
    /**
     * @override
     */
    static get KEY()
    {
        return 'Money';
    }

    /**
     * Constante para indicar que el símbolo monetario debe ir
     * a la izquierda de la cantidad numérica.
     *
     * @const LEFT
     * @type  {string}
     */
    static get LEFT()
    {
        return 'left';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Money';
    }

    /**
     * Constante para indicar que el símbolo monetario debe ir
     * a la derecha de la cantidad numérica.
     *
     * @const RIGHT
     * @type  {string}
     */
    static get RIGHT()
    {
        return 'right';
    }

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Símbolo de la moneda.
         *
         * @property currency
         * @type     {string}
         */
        this.currency = '€';
        /**
         * Posición del símbolo.
         *
         * @property position
         * @type     {string}
         */
        this.position = jfDataTypeMoney.RIGHT;
        //------------------------------------------------------------------------------
        this.setProperties(config);
    }

    /**
     * @override
     */
    toString()
    {
        let _value = super.toString();
        if (_value && this.currency)
        {
            const _position = this.position;
            if (_position === jfDataTypeMoney.LEFT)
            {
                _value = this.currency + _value;
            }
            else if (_position === jfDataTypeMoney.RIGHT)
            {
                _value += this.currency;
            }
        }
        return _value;
    }
}

//------------------------------------------------------------------------------
jfDataTypeFloat.register(jfDataTypeMoney.KEY, jfDataTypeMoney);
module.exports = jfDataTypeMoney;

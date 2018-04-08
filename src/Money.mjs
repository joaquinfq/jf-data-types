import jfDataTypeFloat from './Float';

/**
 * Clase para el manejo de cantidades monetarias.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Money
 * @extends   jf.dataType.Float
 */
export default class jfDataTypeMoney extends jfDataTypeFloat
{
    /**
     * Constante para indicar que el símbolo monetario debe ir
     * a la izquierda de la cantidad numérica.
     *
     * @const LEFT
     * @type  {String}
     */
    static get LEFT() {
        return 'left';
    }

    /**
     * Constante para indicar que el símbolo monetario debe ir
     * a la derecha de la cantidad numérica.
     *
     * @const RIGHT
     * @type  {String}
     */
    static get RIGHT() {
        return 'right';
    }
    /**
     * Símbolo de la moneda.
     *
     * @property currency
     * @type     {String}
     */
    currency = '€';
    /**
     * Posición del símbolo.
     *
     * @property position
     * @type     {String}
     */
    position = 'right';

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
jfDataTypeMoney.register('Money', jfDataTypeMoney);

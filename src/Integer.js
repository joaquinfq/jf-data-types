const jfDataTypeFloat = require('./Float');

/**
 * Clase para el manejo de números enteros.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Integer
 * @extends   jf.dataType.Float
 */
class jfDataTypeInteger extends jfDataTypeFloat
{
    /**
     * @override
     */
    constructor(config)
    {
        super(
            Object.assign(
                {
                    precision : 0
                },
                config
            )
        );
    }

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
jfDataTypeFloat.register('Integer', jfDataTypeInteger);
module.exports = jfDataTypeInteger;

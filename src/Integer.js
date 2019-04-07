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
    static get KEY()
    {
        return 'Integer';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Integer';
    }

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
jfDataTypeFloat.register(jfDataTypeInteger.KEY, jfDataTypeInteger);
module.exports = jfDataTypeInteger;

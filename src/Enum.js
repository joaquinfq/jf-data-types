const jfDataTypeBase = require('./Base');

/**
 * Clase para manejar enumeraciones.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Enum
 * @extends   jf.dataType.Base
 */
class jfDataTypeEnum extends jfDataTypeBase
{
    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Valores permitidos.
         *
         * @property $allowedValues
         * @type     {Array}
         */
        this.$allowedValues = [];
        /**
         * Valor a seleccionar por defecto.
         *
         * @property $defValue
         * @type     {*}
         */
        this.$defValue = null;
        //------------------------------------------------------------------------------
        this.$validators = [
            value => this.$allowedValues.includes(value)
        ];
        this.setProperties(config);
    }

    /**
     * Selecciona el valor por defecto.
     */
    loadDefault()
    {
        const _default = this.$defValue;
        this.value     = this.$allowedValues.includes(_default)
            ? _default
            : null;
    }

    /**
     * @override
     */
    _parseValue(value)
    {
        return this.$allowedValues.includes(value)
            ? value
            : null;
    };
}

//------------------------------------------------------------------------------
jfDataTypeBase.register('Enum', jfDataTypeEnum);
module.exports = jfDataTypeEnum;

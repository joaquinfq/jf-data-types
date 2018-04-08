import jfDataTypeBase from './Base';
/**
 * Clase para manejar enumeraciones.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Enum
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeEnum extends jfDataTypeBase
{
    /**
     * Valores permitidos.
     *
     * @property allowedValues
     * @type     {Array}
     */
    allowedValues = [];

    /**
     * Valor a seleccionar por defecto.
     *
     * @property defValue
     * @type     {*}
     */
    defValue = null;

    /**
     * @override
     */
    static parser = function(value)
    {
        return this.allowedValues.includes(value)
            ? value
            : null;
    };

    /**
     * @override
     */
    constructor(...args)
    {
        super(...args);
        this.validators = [
            value => this.allowedValues.includes(value)
        ];
    }

    /**
     * Selecciona el valor por defecto.
     *
     * @method loadDefault
     */
    loadDefault()
    {
        const _default = this.defValue;
        this.value     = this.allowedValues.includes(_default)
            ? _default
            : null;
    }

    /**
     * @override
     */
    setProperties(values)
    {
        super.setProperties(values);
        if (values && typeof values === 'object' && 'defValue' in values && this.value === null)
        {
            this.loadDefault();
        }
    }
}
//------------------------------------------------------------------------------
jfDataTypeBase.register('Enum', jfDataTypeEnum);

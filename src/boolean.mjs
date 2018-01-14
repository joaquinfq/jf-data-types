import jfDataTypeBase from './base';

/**
 * Clase para el manejo de valores booleanos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Boolean
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeBoolean extends jfDataTypeBase
{
    /**
     * @override
     */
    static parser = value => value === 'off' || value === '0' || (Array.isArray(value) && value.length === 0)
        ? false
        : Boolean(value);

    /**
     * @override
     */
    toString()
    {
        const _value = this.value;

        return _value === null
            ? super.toString()
            : _value
                   ? 'true'
                   : 'false';
    }
}
//------------------------------------------------------------------------------
jfDataTypeBoolean.register('Boolean', jfDataTypeBoolean);

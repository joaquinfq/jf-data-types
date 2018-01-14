import jfDataTypeBase from './base';

/**
 * Clase para el manejo de textos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.String
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeString extends jfDataTypeBase
{
    /**
     * @override
     */
    static parser = value => value === null || value === undefined
        ? ''
        : String(value);

    /**
     * @override
     */
    toString()
    {
        const _value = this.value;

        return _value === null
            ? super.toString()
            : String(_value || '');
    }
}
//------------------------------------------------------------------------------
jfDataTypeString.register('String', jfDataTypeString);

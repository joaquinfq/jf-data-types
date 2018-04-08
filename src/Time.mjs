import jfDataTypeDateTime from './DateTime';
/**
 * Clase para el manejo de horas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Time
 * @extends   jf.dataType.DateTime
 */
export default class jfDataTypeTime extends jfDataTypeDateTime
{
    /**
     * @override
     */
    static defaultFormat = 'HH:mm';

    /**
     * @override
     */
    toJSON()
    {
        const _value = this.value;

        return _value === null
            ? super.toJSON()
            : this.constructor.formatDate(_value, 'HH:mm:ss');
    }
}
//------------------------------------------------------------------------------
jfDataTypeTime.register('Time', jfDataTypeTime);

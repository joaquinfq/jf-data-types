const jfDataTypeDateTime = require('./DateTime');

/**
 * Clase para el manejo de horas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Time
 * @extends   jf.dataType.DateTime
 */
class jfDataTypeTime extends jfDataTypeDateTime
{
    /**
     * @override
     */
    static get defaultFormat()
    {
        return 'HH:mm';
    }

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
jfDataTypeDateTime.register('Time', jfDataTypeTime);
module.exports = jfDataTypeTime;

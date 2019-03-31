const jfDataTypeDateTime = require('./DateTime');

/**
 * Clase para el manejo de fechas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Date
 * @extends   jf.dataType.DateTime
 */
class jfDataTypeDate extends jfDataTypeDateTime
{
    /**
     * @override
     */
    static get defaultFormat()
    {
        return 'yyyy-MM-dd';
    }
}
//------------------------------------------------------------------------------
jfDataTypeDateTime.register('Date', jfDataTypeDate);
module.exports = jfDataTypeDate;

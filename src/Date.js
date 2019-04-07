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

    /**
     * @override
     */
    static get KEY()
    {
        return 'Date';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Date';
    }
}

//------------------------------------------------------------------------------
jfDataTypeDateTime.register(jfDataTypeDate.KEY, jfDataTypeDate);
module.exports = jfDataTypeDate;

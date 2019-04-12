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
    static get KEY()
    {
        return 'Time';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.Time';
    }
}

//------------------------------------------------------------------------------
jfDataTypeDateTime.register(jfDataTypeTime.KEY, jfDataTypeTime);
module.exports = jfDataTypeTime;

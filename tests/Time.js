const jfDataTypeBase     = require('../src/Base');
const jfDataTypeDateTime = require('../src/DateTime');
const jfDataTypeTime     = require('../src/Time');
const jfDataTypeTestBase = require('./_Base');

/**
 * Pruebas unitarias de la clase `jf.dataType.Time`.
 */
module.exports = class jfDataTypeTimeTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Time';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        for (const _number of this.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _time  = this.formatTime(_value);
            this._testClass('Time', _value.getTime(), _value, _time, _time.substr(0, 5));
        }
        this._testInvalid(jfDataTypeTime);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeTime,
            {
                defaultFormat : 'HH:mm'
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeTime, jfDataTypeDateTime, jfDataTypeBase);
    }
};

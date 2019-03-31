const jfDataTypeBase     = require('../src/Base');
const jfDataTypeDate     = require('../src/Date');
const jfDataTypeDateTime = require('../src/DateTime');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Date`.
 */
module.exports = class jfDataTypeDateTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Date';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        for (const _number of this.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _date  = this.formatDate(_value);
            this._testClass('Date', _value.getTime(), _value, _date, _date);
        }
        // Verificamos que si se pasa un array, se desestructure como parámetros del constructor Date.
        const _value = new Date();
        const _date  = this.formatDate(_value);
        this._testClass(
            'Date',
            [
                _value.getFullYear(),
                _value.getMonth(),
                _value.getDate(),
                _value.getHours(),
                _value.getMinutes(),
                _value.getSeconds(),
                _value.getMilliseconds()
            ],
            _value,
            _date,
            _date
        );
        this._testInvalid(jfDataTypeDate);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeDate,
            {
                defaultFormat : 'yyyy-MM-dd'
            },
            {
                format : ''
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeDate, jfDataTypeDateTime, jfDataTypeBase);
    }
};

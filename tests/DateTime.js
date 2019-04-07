const jfDataTypeBase     = require('../src/Base');
const jfDataTypeDateTime = require('../src/DateTime');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.DateTime`.
 */
module.exports = class jfDataTypeDateTimeTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.DateTime';
    }

    /**
     * @override
     */
    setUp()
    {
        this.sut = new jfDataTypeDateTime();
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        const _sut   = this.sut;
        const _value = new Date();
        _sut.value   = _value.toISOString();
        this._assert('', _sut.value.getTime(), _value.getTime());
        //
        for (const _number of this.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _date  = this.formatDate(_value);
            const _time  = this.formatTime(_value);
            this._testClass('DateTime', _value.getTime(), _value, `${_date}T${_time}`, `${_date}T${_time}`);
        }
        this._testInvalid(jfDataTypeDateTime);
        this._testInvalid(jfDataTypeDateTime, [-1, -1000, -0.001]);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeDateTime,
            {
                defaultFormat : 'yyyy-MM-ddTHH:mm:ss',
                KEY           : 'DateTime',
                NAME          : 'jf.dataType.DateTime'
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
        this._testInheritance(jfDataTypeDateTime, jfDataTypeBase, jfDataTypeBase);
    }

    /**
     * Pruebas del manejo de los símbolos.
     */
    testSymbols()
    {
        const _day     = 1;
        const _month   = 3;
        const _year    = 5;
        const _hours   = 7;
        const _minutes = 9;
        const _seconds = 2;
        const _pad     = this.pad;
        const _args    = [_year, _month - 1, _day, _hours, _minutes, _seconds];
        const _value   = new Date(..._args);
        const _values  = {
            d    : String(_day),
            dd   : _pad(_day),
            H    : String(_hours),
            HH   : _pad(_hours),
            m    : String(_minutes),
            mm   : _pad(_minutes),
            M    : String(_month),
            MM   : _pad(_month),
            s    : String(_seconds),
            ss   : _pad(_seconds),
            X    : _value.toISOString() + '#' + [..._args].sort().join('@'),
            y    : String(1900 + _year),
            yy   : _pad(_year),
            yyyy : String(1900 + _year)
        };
        jfDataTypeDateTime.addSymbol('X', date => date.toISOString() + '#' + [..._args].sort().join('@'));
        const _sut = new jfDataTypeDateTime();
        _sut.value = _value;
        for (const _format of Object.keys(_values))
        {
            _sut.format = _format;
            this._assert('', _sut.toString(), _values[_format]);
        }
    }

    /**
     * Pruebas del método estático `formatDate`.
     */
    testStaticFormatDate()
    {
        const _date = new Date();
        this._assert('', jfDataTypeDateTime.formatDate(), '', 'date = undefined, format = undefined');
        this._assert('', jfDataTypeDateTime.formatDate(null, ''), '', 'date = null, format = ""');
        this._assert('', jfDataTypeDateTime.formatDate(_date), _date.toISOString(), 'date = Date, format = undefined');
        this._assert('', jfDataTypeDateTime.formatDate(_date, 1234), _date.toISOString(), 'date = Date, format != string');
    }
};

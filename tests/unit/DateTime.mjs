import base               from '#/utils/base';
import helpers            from '#/utils/helpers';
import jfDataTypeBase     from '@/Base';
import jfDataTypeDateTime from '@/DateTime';

base(jfDataTypeDateTime, jfDataTypeBase);
describe(
    'jfDataTypeDateTime',
    () =>
    {
        const _sut   = new jfDataTypeDateTime();
        const _value = new Date();
        _sut.value   = _value.toISOString();
        expect(_sut.value.getTime()).toBe(_value.getTime());
        //
        const _tests = [];
        for (const _number of helpers.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _date  = helpers.formatDate(_value);
            const _time  = helpers.formatTime(_value);
            _tests.push([ 'DateTime', _value.getTime(), _value, `${_date} ${_time}`, `${_date} ${_time}` ]);
        }
        helpers.testAll(jfDataTypeDateTime, _tests, { defaultFormat : 'yyyy-MM-dd HH:mm:ss' }, { format : '' });
        helpers.testInvalid(jfDataTypeDateTime, [ -1, -1000, -0.001 ])
    }
);
describe(
    'jfDataTypeDateTime - formatDate',
    () =>
    {
        it(
            'date = undefined, format = undefined',
            () => expect(jfDataTypeDateTime.formatDate()).toBe('')
        );
        it(
            'date = null, format = ""',
            () => expect(jfDataTypeDateTime.formatDate(null, '')).toBe('')
        );
        it(
            'date = Date, format = undefined',
            () => {
                const _date = new Date();
                expect(jfDataTypeDateTime.formatDate(_date)).toBe(_date.toISOString())
            }
        );
        it(
            'date = Date, format != string',
            () => {
                const _date = new Date();
                expect(jfDataTypeDateTime.formatDate(_date, 1234)).toBe(_date.toISOString())
            }
        );
    }
);
describe(
    'jfDataTypeDateTime - Símbolos',
    () =>
    {
        const _day     = 1;
        const _month   = 3;
        const _year    = 5;
        const _hours   = 7;
        const _minutes = 9;
        const _seconds = 2;
        const _pad     = helpers.pad;
        const _args    = [ _year, _month - 1, _day, _hours, _minutes, _seconds ];
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
        const _sut    = new jfDataTypeDateTime();
        _sut.value    = _value;
        for (const _format of Object.keys(_values))
        {
            _sut.format  = _format;
            expect(_sut.toString()).toBe(_values[_format]);
        }
        // Símbolos que deben ponerse tal cual al no estár presentes en el mapa.
        _sut.format  = 'abc';
        expect(_sut.toString()).toBe('abc');
    }
);

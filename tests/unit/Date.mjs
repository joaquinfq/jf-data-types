import base               from '#/utils/base';
import helpers            from '#/utils/helpers';
import jfDataTypeDate     from '@/Date';
import jfDataTypeDateTime from '@/DateTime';

base(jfDataTypeDate, jfDataTypeDateTime);
describe(
    'jfDataTypeDate',
    () =>
    {
        const _tests = [];
        for (const _number of helpers.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _date  = helpers.formatDate(_value);
            _tests.push([ 'Date', _value.getTime(), _value, _date, _date ]);
        }
        // Verificamos que si se pasa un array, se desestructure como parámetros del constructor Date.
        const _value = new Date();
        const _date  = helpers.formatDate(_value);
        _tests.push(
            [
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
            ]
        );
        helpers.testAll(jfDataTypeDate, _tests, { defaultFormat : 'yyyy-MM-dd' });
    }
);

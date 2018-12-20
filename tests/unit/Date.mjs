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
describe(
    'jfDataTypeDateTime - toJSON',
    () =>
    {
        it(
            'Prioridad de format sobre defaultFormat',
            () =>
            {
                const _time = Date.now();
                const _sut  = new jfDataTypeDate();
                const _date = new Date(_time);
                _sut.format = 'd::M::y';
                _sut.value  = new Date(_time);
                expect(_sut.toJSON()).toBe(
                    [
                        _date.getDate(),
                        _date.getMonth() + 1,
                        _date.getFullYear()
                    ].join('::')
                );
            }
        );
        it(
            'Uso de defaultFormat si no hay format',
            () =>
            {
                const _time = Date.now();
                const _sut  = new jfDataTypeDate();
                const _date = new Date(_time);
                _sut.format = '';
                _sut.value  = new Date(_time);
                _date.setTime(_date.getTime() - _date.getTimezoneOffset() * 60 * 1000);
                expect(_sut.toJSON()).toBe(_date.toISOString().substr(0, 10).replace('T', ' '));
            }
        );
    }
);

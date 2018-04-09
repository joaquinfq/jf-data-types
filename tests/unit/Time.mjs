import base               from '#/utils/base';
import helpers            from '#/utils/helpers';
import jfDataTypeDateTime from '@/DateTime';
import jfDataTypeTime     from '@/Time';

base(jfDataTypeTime, jfDataTypeDateTime);
describe(
    'jfDataTypeTime',
    () =>
    {
        const _tests = [];
        for (const _number of helpers.generateNumbers())
        {
            const _value = new Date(parseInt(_number, 10));
            const _time  = helpers.formatTime(_value);
            _tests.push([ 'Time', _value.getTime(), _value, _time, _time.substr(0, 5) ]);
        }
        helpers.testAll(jfDataTypeTime, _tests, { defaultFormat : 'HH:mm' });
    }
);

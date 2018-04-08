import common             from '../utils/common';
import helpers            from '../utils/helpers';
import jfDataTypeDateTime from '../../src/DateTime';
import jfDataTypeTime     from '../../src/Time';

describe('jfDataTypeTime - common', () => common(jfDataTypeTime, jfDataTypeDateTime));
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

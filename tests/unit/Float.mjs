import base            from '#/utils/base';
import formatDecimal   from 'format-decimal';
import helpers         from '#/utils/helpers';
import jfDataTypeBase  from '@/Base';
import jfDataTypeFloat from '@/Float';

base(jfDataTypeFloat, jfDataTypeBase);
describe(
    'jfDataTypeDateFloat',
    () =>
    {
        const _tests = [
            [ 'Float', { value : null }, null, null, '' ]
        ];
        for (const _number of helpers.generateNumbers())
        {
            const _config = {
                precision : Math.floor(Math.random() * 5),
                value     : _number
            };
            _tests.push([ 'Float', _config, _number, _number, formatDecimal(_number, _config) ]);
        }
        helpers.testAll(
            'Float',
            _tests,
            null,
            {
                decimal   : ',',
                precision : 2,
                thousands : '.'
            }
        );
    }
);

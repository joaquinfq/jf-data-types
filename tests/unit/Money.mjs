import base            from '#/utils/base';
import formatDecimal   from 'format-decimal';
import helpers         from '#/utils/helpers';
import jfDataTypeFloat from '@/Float';
import jfDataTypeMoney from '@/Money';

base(jfDataTypeMoney, jfDataTypeFloat);
describe(
    'jfDataTypeDateMoney',
    () =>
    {
        const _tests = [
            [ 'Money', { value : null }, null, null, '' ]
        ];
        for (const _number of helpers.generateNumbers())
        {
            const _precision = Math.floor(Math.random() * 5);
            const _char      = String.fromCharCode(65 + _precision);
            const _config    = {
                currency  : _char,
                precision : _precision,
                value     : _number
            };
            const _formatted = formatDecimal(_number, _config);
            _tests.push([ 'Money', _config, _number, _number, _formatted + _char ]);
            _tests.push([ 'Money', Object.assign({}, _config, { position : 'left' }), _number, _number, _char + _formatted ]);
            _tests.push([ 'Money', Object.assign({}, _config, { position : '' }), _number, _number, _formatted ]);
        }
        helpers.testAll(
            'Money',
            _tests,
            {
                LEFT  : 'left',
                RIGHT : 'right',
            },
            {
                currency : '€',
                position : 'right'
            }
        );
    }
);

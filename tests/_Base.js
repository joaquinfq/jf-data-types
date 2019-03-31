const jfDataTypesBase = require('../src/Base');
const jfTestsUnit     = require('@jf/tests/src/type/Unit');
module.exports        = class jfDataTypeTestBase extends jfTestsUnit
{
    _testClass(Class, value/*, valueOf, toJSON, toString*/)
    {
        let _instance;
        if (typeof Class === 'string')
        {
            _instance = jfDataTypesBase.create(Class, value);
        }
        else
        {
            _instance       = new Class();
            _instance.value = value;
        }
        ['valueOf', 'toJSON', 'toString'].forEach(
            (method, index) =>
            {
                const _actual   = _instance[method]();
                const _expected = arguments[index + 2];
                this._testValue(
                    _actual,
                    _expected,
                    `${this.constructor.name}::_testClass -- ${_instance.constructor.name}::${method} -- ${JSON.stringify(_actual)} !== ${JSON.stringify(_expected)}'`
                );
            }
        );
    }

    _testInvalid(Class, values = [null, false, true, undefined, {}, [], () => 1, 'abc', ''])
    {
        // Para cada valor inválido, toJSON y valueOf deben ser null y toString una cadena vacía.
        values.map(value => this._testClass(Class, value, null, null, ''));
    }

    _testValue(actual, expected, message)
    {
        if (actual instanceof Date)
        {
            actual   = actual.getTime();
            expected = expected.getTime();
        }
        this._assert('', actual, expected, message);
    }
};

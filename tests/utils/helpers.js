import jfDataTypesBase from '../../src/Base';

module.exports = {
    NUMBERS : 200,
    formatDate(date)
    {
        return [
            date.getFullYear(),
            this.pad(date.getMonth() + 1),
            this.pad(date.getDate())
        ].join('-');
    },
    formatTime(date)
    {
        return [
            this.pad(date.getHours()),
            this.pad(date.getMinutes()),
            this.pad(date.getSeconds())
        ].join(':');
    },
    generateNumbers()
    {
        const _numbers = [];
        for (let _i = 0; _i < this.NUMBERS; ++_i)
        {
            _numbers.push(1e7 * Math.random());
        }
        return _numbers;
    },
    pad(value)
    {
        return ('00' + value).substr(-2);
    },
    runTests(tests, staticProps, props, invalid)
    {
        const Class = tests[0][0];
        if (typeof Class === 'string')
        {
            if (staticProps)
            {
                this.testObject(jfDataTypesBase.create(Class).constructor, staticProps, Class);
            }
            if (props)
            {
                this.testObject(jfDataTypesBase.create(Class), props, Class);
            }
        }
        else
        {
            if (staticProps)
            {
                this.testObject(Class, staticProps, Class.name);
            }
            if (props)
            {
                this.testObject(new Class(), props, Class.name);
            }
        }
        if (invalid === undefined)
        {
            this.testInvalid(Class);
        }
        else
        {
            this.testInvalid(Class, invalid);
        }
        this.testFactory(tests);
    },
    testAll(Class, tests, staticProps, props, invalid)
    {
        this.runTests(tests, staticProps, props, invalid);
        if (typeof Class !== 'string')
        {
            this.runTests(tests.map(test => [Class, ...test.slice(1)]), staticProps, props, invalid);
        }
    },
    testClass(Class, value, valueOf, toJSON, toString)
    {
        let _args = Array.from(arguments);
        let _instance;
        if (typeof Class === 'string')
        {
            _instance = jfDataTypesBase.create(Class, value);
        }
        else
        {
            _args[0]        = Class.name;
            _instance       = new Class();
            _instance.value = value;
        }
        const _description = 'Factoría: ' + JSON.stringify(_args);
        it(_description + ': toJSON',   () => this.testValue(_instance.toJSON(),   toJSON));
        it(_description + ': toString', () => this.testValue(_instance.toString(), toString));
        it(_description + ': valueOf',  () => this.testValue(_instance.valueOf(),  valueOf));
    },
    testFactory(tests)
    {
        tests.map(data => this.testClass(...data));
    },
    testInvalid(Class, values = [ null, false, true, undefined, {}, [], () => 1, 'abc', '' ])
    {
        // Para cada valor inválido, toJSON y valueOf deben ser null y toString una cadena vacía.
        values.map(value => this.testClass(Class, value, null, null, ''));
    },
    testObject(object, values, description)
    {
        for (const _key of Object.keys(values))
        {
            it(
                `${description}: ${_key}`,
                () => {
                    const _value = values[_key];
                    if (_value && typeof _value === 'object')
                    {
                        expect(object[_key]).toEqual(_value)
                    }
                    else
                    {
                        expect(object[_key]).toBe(_value)
                    }
                }
            );
        }
    },
    testValue(actual, expected)
    {
        if (actual instanceof Date)
        {
            actual   = actual.getTime();
            expected = expected.getTime();
        }
        expect(actual).toEqual(expected);
    }
};

const assert        = require('assert');
const formatDecimal = require('format-decimal');
const jfDataTypes   = require('./build/jfDataTypes').default;
const NUMBERS       = 200;
let numAssertions   = 0;

function formatDate(date)
{
    return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join('-');
}

function formatTime(date)
{
    return [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(':');
}

function generateNumbers()
{
    const _numbers = [];
    for (let _i = 0; _i < NUMBERS; ++_i)
    {
        _numbers.push(1e7 * Math.random());
    }
    return _numbers;
}

function pad(value)
{
    return ('00' + value).substr(-2);
}

function testClass(Class, value, valueOf, toJSON, toString)
{
    const _instance = jfDataTypes.Base.factory(Class, value);
    testValue(_instance.valueOf(), valueOf, `${Class} (valueOf)`);
    testValue(_instance.toJSON(), toJSON, `${Class} (toJSON)`);
    testValue(_instance.toString(), toString, `${Class} (toString)`);
}

function testValue(actual, expected, description)
{
    if (actual instanceof Date)
    {
        actual   = actual.getTime();
        expected = expected.getTime();
    }
    assert.strictEqual(actual, expected, `${description}: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    ++numAssertions;
}

//------------------------------------------------------------------------------
// Verificación de los valores booleanos.
//------------------------------------------------------------------------------
function testBoolean()
{
    const _tests = [
        // Valores `false`
        ['Boolean', 'off', false, false, 'false'],
        ['Boolean', false, false, false, 'false'],
        ['Boolean', '', false, false, 'false'],
        ['Boolean', '0', false, false, 'false'],
        ['Boolean', 0, false, false, 'false'],
        ['Boolean', 0.0, false, false, 'false'],
        ['Boolean', undefined, false, false, 'false'],
        // Valores `true`
        ['Boolean', 'on', true, true, 'true'],
        ['Boolean', 1, true, true, 'true'],
        ['Boolean', 0.1, true, true, 'true'],
        ['Boolean', '1', true, true, 'true'],
        ['Boolean', 'abc', true, true, 'true'],
        ['Boolean', true, true, true, 'true']
    ];
    for (const _test of _tests)
    {
        testClass(..._test);
    }
}

//------------------------------------------------------------------------------
// Verificación de las clases que gestionan fechas y horas.
//------------------------------------------------------------------------------
function testDate()
{
    for (const _number of generateNumbers())
    {
        const _value = new Date(parseInt(_number, 10));
        const _date  = formatDate(_value);
        testClass('Date', _value.getTime(), _value, _date, _date);
    }
}

function testDateTime()
{
    for (const _number of generateNumbers())
    {
        const _value = new Date(parseInt(_number, 10));
        const _date  = formatDate(_value);
        const _time  = formatTime(_value);
        testClass('DateTime', _value.getTime(), _value, `${_date}T${_time}`, `${_date} ${_time}`);
    }
}

function testTime()
{
    for (const _number of generateNumbers())
    {
        const _value = new Date(parseInt(_number, 10));
        const _time  = formatTime(_value);
        testClass('Time', _value.getTime(), _value, _time, _time.substr(0, 5));
    }
}

//------------------------------------------------------------------------------
// Verificación de las clases que manejan números.
//------------------------------------------------------------------------------
function testFloat()
{
    for (const _number of generateNumbers())
    {
        const _config = {
            precision : Math.floor(Math.random() * 5),
            value     : _number
        };
        testClass('Float', _config, _number, _number, formatDecimal(_number, _config));
    }
}

function testInteger()
{
    for (const _number of generateNumbers())
    {
        const _config = {
            precision : 0,
            value     : _number
        };
        const _int    = parseInt(_number, 10);
        testClass('Integer', _config, _int, _int, formatDecimal(_int, _config));
    }
}

function testMoney()
{
    for (const _number of generateNumbers())
    {
        const _config    = {
            precision : Math.floor(Math.random() * 5),
            value     : _number
        };
        const _formatted = formatDecimal(_number, _config);
        testClass('Money', _config, _number, _number, _formatted + '€');
        testClass('Money', { ..._config, position : 'left' }, _number, _number, '€' + _formatted);
        testClass('Money', { ..._config, position : '' }, _number, _number, _formatted);
    }
}

//------------------------------------------------------------------------------
// Verificación de la gestión de los texto.
//------------------------------------------------------------------------------
function testString()
{
    const _tests = [
        ['String', false, 'false', 'false', 'false'],
        ['String', '', '', '', ''],
        ['String', '0', '0', '0', '0'],
        ['String', 0, '0', '0', '0'],
        ['String', 1, '1', '1', '1'],
        ['String', '1', '1', '1', '1'],
        ['String', null, null, null, ''],
        ['String', undefined, '', '', ''],
        ['String', true, 'true', 'true', 'true'],
        ...generateNumbers().map(number => ['String', number, '' + number, '' + number, '' + number])
    ];
    for (const _test of _tests)
    {
        testClass(..._test);
    }
}

//------------------------------------------------------------------------------
// Verificación de los valores nulos. Deben mostrarse como una cadena vacía pero
// deben enviarse al servidor como `null`.
//------------------------------------------------------------------------------
function testNull()
{
    for (const Class of Object.keys(jfDataTypes))
    {
        if (Class !== 'Base' && Class !== 'Object')
        {
            testClass(Class, null, null, null, '');
        }
    }
}

//------------------------------------------------------------------------------
// Verificación de la clase Object
//------------------------------------------------------------------------------
function testObject()
{
    const _config = {
        amount : 123.45,
        name   : 'TestObjectConfig'
    };
    const _object = jfDataTypes.Base.factory(
        class TestObject extends jfDataTypes.Object
        {
            constructor()
            {
                super();
                this.amount = null;
                this.name = null;
                this.$propertyTypes = {
                    amount : jfDataTypes.Money,
                    name   : jfDataTypes.String
                }
            }
        }
    );
    testValue(_object.amount, null, 'Object::amount');
    testValue(_object.name, null, 'Object::name');
    //------------------------------------------------------------------------------
    // Verificamos la asignación de una propiedad solamente sin que afecte al resto
    // Propiedad: amount
    //------------------------------------------------------------------------------
    _object.setValue(
        {
            amount : _config.amount
        }
    );
    testValue(_object.amount instanceof jfDataTypes.Money, true, 'Object::amount');
    testValue(_object.amount.value, _config.amount, 'Object::amount');
    testValue(_object.name, null, 'Object::name');
    //------------------------------------------------------------------------------
    // Verificamos la asignación de una propiedad solamente sin que afecte al resto
    // Propiedad: name
    //------------------------------------------------------------------------------
    _object.setValue(
        {
            name : _config.name
        }
    );
    testValue(_object.amount instanceof jfDataTypes.Money, true, 'Object::amount');
    testValue(_object.amount.value, _config.amount, 'Object::amount');
    testValue(_object.name instanceof jfDataTypes.String, true, 'Object::name');
    testValue(_object.name.value, _config.name, 'Object::name');
    assert.deepStrictEqual(_object.toJSON(), _config, 'Object::toJSON');
    ++numAssertions;
}

function testValidators()
{
    const _value  = 'lorem ipsum';
    const _checkValidators = (validators, n) =>
    {
        _numCalls          = 0;
        _string.validators = validators;
        const _isFail      = Array.isArray(validators) && validators.includes(_fail);
        testValue(_string.validate(), !_isFail, 'validators ' + n);
        testValue(
            _string.value === null
                ? 0
                : ((_isFail ? validators.length - 1 : validators.length) || 0),
            _numCalls,
            'numCalls ' + n
        );
    };
    const _validator       = value =>
    {
        ++_numCalls;
        return value === _value;
    };
    const _fail            = () => false;
    const _string          = jfDataTypes.Base.factory(
        'String',
        {
            value      : null,
            validators : _validator
        }
    );
    let _numCalls          = 0;
    //------------------------------------------------------------------------------
    // Verificamos que si el valor es `null` se valide a `true` y además no se
    // llame a los validadores.
    //------------------------------------------------------------------------------
    _checkValidators(_validator, 1);
    //------------------------------------------------------------------------------
    _string.value = _value;
    for (let _i = 1; _i < 10; ++_i)
    {
        const _validators = Array.from({ length : _i }).map(i => _validator);
        if (_i % 2)
        {
            _validators.push(_fail);
        }
        _checkValidators(_validators, _i + 1);
    }
}

//------------------------------------------------------------------------------
// Inicio de las pruebas.
//------------------------------------------------------------------------------
testBoolean();
testDate();
testDateTime();
testFloat();
testInteger();
testMoney();
testString();
testTime();
testNull();
testObject();
testValidators();
//------------------------------------------------------------------------------
console.log(
    'Total aserciones: %s',
    formatDecimal(
        numAssertions,
        {
            precision : 0
        }
    )
);

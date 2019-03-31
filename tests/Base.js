const factory            = require('@jf/factory').i('@jf/data-types');
const jfDataTypeBase     = require('../src/Base');
const jfDataTypeDate     = require('../src/Date');
const jfDataTypeObject   = require('../src/Object');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Base`.
 */
module.exports = class jfDataTypeBaseTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Base';
    }

    /**
     * @override
     */
    setUp()
    {
        this.sut = new jfDataTypeBase();
    }

    validate(validators, valueOk, valueKo)
    {
        const _sut       = this.sut;
        _sut.$validators = validators;
        if (valueOk === null)
        {
            _sut.value = 'DaIgual';
            this.assertFalse(_sut.validate());
        }
        else
        {
            _sut.value = valueOk;
            this.assertTrue(_sut.validate());
            _sut.value = valueKo;
            this.assertFalse(_sut.validate());
        }
    }

    /**
     * Pruebas del método `constructor`.
     */
    testConstructor()
    {
        this._testClass('Base', null, null,  null,  '');
        this._testInvalid(jfDataTypeBase, [ null ]);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeBase,
            null,
            {
                $nullable   : true,
                $validators : null,
                $value      : null
            }
        );
    }

    /**
     * Prueba que la propiedad `factory` devuelva la factoría correcta.
     */
    testFactory()
    {
        this._assert('', jfDataTypeBase.factory, factory);
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeBase, null, jfDataTypeBase);
    }

    /**
     * Pruebas del método `raw`.
     */
    testRaw()
    {
        const _sut = this.sut;
        this.constructor.getAllTypes().forEach(
            value =>
            {
                _sut.value = value;
                this._assert('', _sut.raw(), value);
            }
        );
    }

    /**
     * Pruebas del método `setValue`.
     */
    testSetValue()
    {
        const _sut = this.sut;
        this.constructor.getAllTypes().forEach(
            value =>
            {
                _sut.setValue(value);
                this._assert('', _sut.raw(), value);
            }
        );
    }

    /**
     * Pruebas del método estático `create`.
     */
    testStaticCreate()
    {
        const _name = 'Base::testStaticCreate';
        const _data = { a : 1 };
        let _calls = 0;
        let _values;
        let _value;

        const _Class = class
        {
            set value(value)
            {
                _value = value;
            }

            setProperties(values)
            {
                if (values !== undefined)
                {
                    _values = values;
                    ++_calls;
                }
            }
        };
        jfDataTypeBase.register(_name, _Class);
        this.assertUndefined(jfDataTypeBase.create('x-x-x-x'));
        this._assert('equal', _calls, 0);
        this.assertTrue(jfDataTypeBase.create(_name) instanceof _Class);
        this._assert('equal', _calls, 0);
        this.assertUndefined(_values);
        this.assertTrue(jfDataTypeBase.create(_name, _data) instanceof _Class);
        this._assert('equal', _calls, 1);
        this._assert('', _values, _data);
    }

    /**
     * Pruebas del método estático `is`.
     */
    testStaticIs()
    {
        [0, null, undefined, '', false].forEach(
            falsy =>
            {
                this.assertFalse(jfDataTypeBase.is(falsy, 'Base'));
                this.assertFalse(jfDataTypeBase.is(new jfDataTypeBase(), falsy));
            }
        );
        this.assertTrue(jfDataTypeBase.is(new jfDataTypeBase(), 'Base'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeBase(), 'Date'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeBase(), 'Object'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeBase(), 'Unknown'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeDate(), 'Base'));
        this.assertTrue(jfDataTypeBase.is(new jfDataTypeDate(), 'Date'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeDate(), 'Object'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeDate(), 'Unknown'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeObject(), 'Base'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeObject(), 'Date'));
        this.assertTrue(jfDataTypeBase.is(new jfDataTypeObject(), 'Object'));
        this.assertFalse(jfDataTypeBase.is(new jfDataTypeObject(), 'Unknown'));
    }

    /**
     * Pruebas del método estático `register`.
     */
    testStaticRegister()
    {
        const _name = Date.now();
        const _Class = class {};
        jfDataTypeBase.register(_name, _Class);
        this.assertTrue(factory.get(_name) === _Class);
        factory.unregister(_name);
    }

    /**
     * Pruebas del método `toJSON`.
     */
    testToJSON()
    {
        const _sut = this.sut;
        this.constructor.getAllTypes().forEach(
            value =>
            {
                _sut.value = value;
                this._assert('', _sut.toJSON(), value);
            }
        );
    }

    /**
     * Pruebas del método `toString`.
     */
    testToString()
    {
        [
            [null, ''],
            [undefined, ''],
            ['', ''],
            [0, '0'],
            [1, '1'],
            [false, 'false'],
            [true, 'true'],
            ['abc', 'abc']
        ].forEach(
            ([value, expected]) => this._assert('', new jfDataTypeBase({ value }).toString(), expected)
        );
    }

    /**
     * Pruebas del método `validate`.
     */
    testValidate()
    {
        this.validate(5, null, null);
        this.validate(value => value > 5, 10, 2);
        this.validate([value => value < 10], 1, 20);
        this.validate([{ fn : value => value instanceof Date }], new Date(), Date.now());
    }

    /**
     * Pruebas del método `validate` cuando un validador lanza una excepción.
     */
    testValidateException()
    {
        const _sut       = this.sut;
        const _exception = { a : 1 };
        const _value     = Date.now();
        _sut.value       = _value;
        _sut.$validators = [
            value =>
            {
                this.assertEqual(value, _value);
                throw _exception;
            }
        ];
        this._assert('', _sut.validate(), _exception);
    }

    /**
     * Pruebas del método `validate` sin validadores.
     */
    testValidateNoValidators()
    {
        const _sut       = this.sut;
        // Si los validadores están vacíos se da por bueno cualquier valor.
        _sut.$validators = null;
        _sut.value       = 10;
        this.assertTrue(_sut.validate());
        _sut.$validators = [];
        this.assertTrue(_sut.validate());
    }

    /**
     * Pruebas del método `validate` con `$nullable`.
     */
    testValidateNullable()
    {
        const _sut     = this.sut;
        _sut.$nullable = true;
        _sut.value     = null;
        this.assertTrue(_sut.validate());
        _sut.$nullable = false;
        this.assertFalse(_sut.validate());
    }

    /**
     * Pruebas del método `valueOf`.
     */
    testValueOf()
    {
        const _sut       = this.sut;
        _sut.$validators = () => false;
        _sut.value       = 100;
        this.assertFalse(_sut.validate());
        this.assertNull(_sut.valueOf());
        _sut.$validators = null;
        this.assertTrue(_sut.validate());
        this._assert('equal', _sut.valueOf(), 100);
    }
};

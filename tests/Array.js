const jfDataTypeArray    = require('../src/Array');
const jfDataTypeBase     = require('../src/Base');
const jfDataTypeString   = require('../src/String');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Array`.
 */
module.exports = class jfDataTypeArrayTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Array';
    }

    createTypes(Class, values)
    {
        return values.map(value => new Class({ value }));
    }

    /**
     * Pruebas del método `call`.
     */
    testCall()
    {
        const _values = [1, 2, 3, 4];
        const _sut    = new jfDataTypeArray(_values);
        //------------------------------------------------------------------------------
        // Iteración con una función existente
        //------------------------------------------------------------------------------
        let _count  = 0;
        let _result = _sut.call(
            'map',
            (item, index) =>
            {
                const _value = parseInt(item.value, 10);
                this._assert('', _value, _values[index]);
                ++_count;
                return _value * _value;
            }
        );
        this.assertTrue(_count === _values.length);
        this._assert('', _result, _values.map(value => value * value));
        //------------------------------------------------------------------------------
        // Iteración con una función inexistente
        //------------------------------------------------------------------------------
        _count  = 0;
        _result = _sut.call('abcdefg', () => ++_count);
        this.assertTrue(_count === 0);
        this.assertUndefined(_result);
    }

    /**
     * Pruebas de la class.
     */
    testClass()
    {
        this._testClass(jfDataTypeArray, null, null, null, '');
        this._testInvalid(jfDataTypeArray, [null]);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeArray,
            {
                DEFAULTS : {},
                ITEM     : 'String',
                KEY      : 'Array',
                NAME     : 'jf.dataType.Array'
            },
            null
        );
    }

    /**
     * Verifica el bucle for..of.
     */
    testForOf()
    {
        //------------------------------------------------------------------------------
        // Sin inicializar
        //------------------------------------------------------------------------------
        let _sut   = new jfDataTypeArray();
        let _count = 0;
        for (const _ of _sut)
        {
            ++_count;
        }
        this._assert('equal', _count, 0);
        //------------------------------------------------------------------------------
        // Listado de valores
        //------------------------------------------------------------------------------
        const _expected = ['a', 'b', 'c', 'd', 'e', 'f'];
        _sut            = new jfDataTypeArray(_expected);
        let _values     = [];
        for (const _v of _sut)
        {
            _values.push(_v.valueOf());
        }
        this._assert('', _values, _expected);
        //------------------------------------------------------------------------------
        // Con valor inválido
        //------------------------------------------------------------------------------
        _sut    = new jfDataTypeArray({});
        _values = [];
        for (const _v of _sut)
        {
            _values.push(_v.valueOf());
        }
        this._assert('', _values, []);
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeArray, jfDataTypeBase, jfDataTypeBase);
    }

    /**
     * Pruebas del método `_parseValue`.
     */
    testParseValue()
    {
        const _values = [1, 2, 3];
        const _types  = this.createTypes(jfDataTypeString, _values);
        //------------------------------------------------------------------------------
        // Tipo por defecto
        //------------------------------------------------------------------------------
        this._assert('', new jfDataTypeArray(_types).raw(), _types);
        //------------------------------------------------------------------------------
        // Escalares
        //------------------------------------------------------------------------------
        this._assert('', new jfDataTypeArray(_values).raw(), _types);
        //------------------------------------------------------------------------------
        // Tipo sin definir
        //------------------------------------------------------------------------------
        const _Class = class extends jfDataTypeArray
        {
            static get ITEM()
            {
                return '';
            };
        };
        this._assert('', new _Class(_values).valueOf(), []);
        //------------------------------------------------------------------------------
        // Tipo sin registrar
        //------------------------------------------------------------------------------
        const _Class2 = class extends jfDataTypeArray
        {
            static get ITEM()
            {
                return 'UnregisteredType';
            };
        };
        this._assert('', new _Class2(_values).valueOf(), []);
    }

    /**
     * Pruebas del método estático `buildItem`.
     */
    testStaticBuildItem()
    {
        [undefined, null, false].forEach(
            value => this.assertNull(jfDataTypeArray.buildItem(value))
        );
        //------------------------------------------------------------------------------
        // Mismo tipo no lo construye y devuelve null
        //------------------------------------------------------------------------------
        this.assertNull(jfDataTypeArray.buildItem(jfDataTypeArray.create(jfDataTypeArray.ITEM)));
        //------------------------------------------------------------------------------
        // Diferente tipo lo construye
        //------------------------------------------------------------------------------
        const _item = jfDataTypeArray.buildItem('lorem ipsum');
        this.assertTrue(_item instanceof jfDataTypeString);
        this._assert('equal', _item.value, 'lorem ipsum');
    }

    /**
     * Pruebas del método estático `isItem`.
     */
    testStaticIsItem()
    {
        //------------------------------------------------------------------------------
        // Valor falsy devuelve false
        //------------------------------------------------------------------------------
        [undefined, null, false].forEach(
            value => this.assertFalse(jfDataTypeArray.isItem(value))
        );
        //------------------------------------------------------------------------------
        // Si type no está definido devuelve false
        //------------------------------------------------------------------------------
        let _Class = class extends jfDataTypeArray
        {
            static get ITEM()
            {
                return '';
            };
        };
        this.assertFalse(_Class.isItem({}));
        //------------------------------------------------------------------------------
        // Si type está definido pero no coincide el tipo
        //------------------------------------------------------------------------------
        _Class = class extends jfDataTypeArray
        {
            static get ITEM()
            {
                return 'String';
            };
        };
        this.assertFalse(_Class.isItem({}));
        //------------------------------------------------------------------------------
        // Si type está definido y coincide el tipo
        //------------------------------------------------------------------------------
        _Class = class extends jfDataTypeArray
        {
            static get ITEM()
            {
                return 'String';
            };
        };
        this.assertTrue(_Class.isItem(new jfDataTypeString()));
    }

    /**
     * Pruebas del método `valueOf`.
     */
    testValueOf()
    {
        const _values = [1, 2, 3];
        //------------------------------------------------------------------------------
        // Escalares
        //------------------------------------------------------------------------------
        let _sut = new jfDataTypeArray([]);
        this._assert('', _sut.valueOf(), []);
        _sut.$value = [..._values];
        this._assert('', _sut.valueOf(), _values);
        //------------------------------------------------------------------------------
        // ITEM
        // En ITEM se asigna el tipo por defecto a String.
        //------------------------------------------------------------------------------
        this._assert('', new jfDataTypeArray(_values).valueOf(), _values.map(String));
    }
};

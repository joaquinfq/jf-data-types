const jfDataTypeBase     = require('../src/Base');
const jfDataTypeFloat    = require('../src/Float');
const jfDataTypeInteger  = require('../src/Integer');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Integer`.
 */
module.exports = class jfDataTypeIntegerTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Integer';
    }

    /**
     * Pruebas del método `constructor`.
     */
    testClass()
    {
        this._testClass('Integer', { value : null }, null, null, '');
        this._testInvalid(jfDataTypeInteger);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeInteger,
            {
                KEY  : 'Integer',
                NAME : 'jf.dataType.Integer'
            },
            {
                precision : 0
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeInteger, jfDataTypeFloat, jfDataTypeBase);
    }

    /**
     * Pruebas del método `_parseValue`.
     */
    testParseValue()
    {
        // NaN
        [false, true, {}, () => 1, [], 'abc'].forEach(
            value =>
            {
                let _sut   = new jfDataTypeInteger();
                _sut.value = value;
                this.assertNull(_sut.value);
            }
        );
        // int
        [0, 1, 1.234, '0', '1', [0], [1]].forEach(
            value =>
            {
                let _sut   = new jfDataTypeInteger();
                _sut.value = value;
                this._assert('', _sut.value, parseInt(value, 10));
            }
        );
    }
};

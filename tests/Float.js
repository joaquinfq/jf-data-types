const formatDecimal      = require('format-decimal');
const jfDataTypeBase     = require('../src/Base');
const jfDataTypeFloat    = require('../src/Float');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Float`.
 */
module.exports = class jfDataTypeFloatTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Float';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        this._testClass('Float', { value : null }, null, null, '');
        for (const _number of this.generateNumbers())
        {
            const _config = {
                precision : Math.floor(Math.random() * 5),
                value     : _number
            };
            this._testClass('Float', _config, _number, _number, formatDecimal(_number, _config));
        }
        this._testInvalid(jfDataTypeFloat);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeFloat,
            null,
            {
                decimal   : ',',
                precision : 2,
                thousands : '.'
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeFloat, jfDataTypeBase, jfDataTypeBase);
    }
};

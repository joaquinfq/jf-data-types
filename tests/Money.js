const formatDecimal      = require('format-decimal');
const jfDataTypeBase     = require('../src/Base');
const jfDataTypeFloat    = require('../src/Float');
const jfDataTypeMoney    = require('../src/Money');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Money`.
 */
module.exports = class jfDataTypeMoneyTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Money';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        this._testClass('Money', { value : null }, null, null, '');
        for (const _number of this.generateNumbers())
        {
            const _precision = Math.floor(Math.random() * 5);
            const _char      = String.fromCharCode(65 + _precision);
            const _config    = {
                currency  : _char,
                precision : _precision,
                value     : _number
            };
            const _formatted = formatDecimal(_number, _config);
            this._testClass('Money', _config, _number, _number, _formatted + _char);
            this._testClass('Money', Object.assign({}, _config, { position : 'left' }), _number, _number, _char + _formatted);
            this._testClass('Money', Object.assign({}, _config, { position : '' }), _number, _number, _formatted);
        }
        this._testInvalid(jfDataTypeMoney);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeMoney,
            {
                LEFT  : 'left',
                RIGHT : 'right'
            },
            {
                currency : '€',
                position : 'right'
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeMoney, jfDataTypeFloat, jfDataTypeBase);
    }
};

const jfDataTypeBase     = require('../src/Base');
const jfDataTypeBoolean  = require('../src/Boolean');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Boolean`.
 */
module.exports = class jfDataTypeBooleanTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Boolean';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        [
            // @formatter:off
            // Valor `null`
            [ 'Boolean', null,          null,  null,  ''      ],
            [ 'Boolean', {},            null,  null,  ''      ],
            [ 'Boolean', { a : 1 },     null,  null,  ''      ],
            // Valores `false`
            [ 'Boolean', [],            false, false, 'false' ],
            [ 'Boolean', 'off',         false, false, 'false' ],
            [ 'Boolean', false,         false, false, 'false' ],
            [ 'Boolean', '',            false, false, 'false' ],
            [ 'Boolean', '0',           false, false, 'false' ],
            [ 'Boolean', 0,             false, false, 'false' ],
            [ 'Boolean', 0.0,           false, false, 'false' ],
            [ 'Boolean', undefined,     false, false, 'false' ],
            [ 'Boolean', {value:'off'}, false, false, 'false' ],
            // Valores `true`
            [ 'Boolean', 'on',           true,  true,  'true'  ],
            [ 'Boolean', [0],            true,  true,  'true'  ],
            [ 'Boolean', () => 1,        true,  true,  'true'  ],
            [ 'Boolean', 1,              true,  true,  'true'  ],
            [ 'Boolean', 0.1,            true,  true,  'true'  ],
            [ 'Boolean', '1',            true,  true,  'true'  ],
            [ 'Boolean', 'abc',          true,  true,  'true'  ],
            [ 'Boolean', true,           true,  true,  'true'  ],
            [ 'Boolean', {value:1},      true,  true,  'true'  ],
            [ 'Boolean', {value:'on'},   true,  true,  'true'  ],
            //------------------------------------------------------------------------------
            // Casos especiales cuando no se usa la factoría. El uso de la factoría afecta
            // los valores que son objetos ya que se aplican como si fueran propiedades.
            //------------------------------------------------------------------------------
            [ jfDataTypeBoolean, {},            false, false, 'false' ],
            [ jfDataTypeBoolean, {a:1},         true,  true,  'true'  ],
            [ jfDataTypeBoolean, {value:'on'},  true,  true,  'true'  ],
            [ jfDataTypeBoolean, {value:'off'}, true,  true,  'true'  ],
            // @formatter:on
        ].forEach(test => this._testClass(...test));
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeBoolean,
            {
                KEY  : 'Boolean',
                NAME : 'jf.dataType.Boolean'
            },
            null
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeBoolean, jfDataTypeBase, jfDataTypeBase);
    }
};

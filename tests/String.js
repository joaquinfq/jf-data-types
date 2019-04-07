const jfDataTypeBase     = require('../src/Base');
const jfDataTypeString   = require('../src/String.js');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.String`.
 */
module.exports = class jfDataTypeStringTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.String';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        [
            // @formatter:off
            [ 'String', false,     'false', 'false', 'false' ],
            [ 'String', '',        '',      '',      ''      ],
            [ 'String', '0',       '0',     '0',     '0'     ],
            [ 'String', 0,         '0',     '0',     '0'     ],
            [ 'String', 1,         '1',     '1',     '1'     ],
            [ 'String', '1',       '1',     '1',     '1'     ],
            [ 'String', null,      null,    null,    ''      ],
            [ 'String', undefined, '',      '',      ''      ],
            [ 'String', true,      'true',  'true',  'true'  ],
            // @formatter:on
            ...this.generateNumbers().map(number => ['String', number, '' + number, '' + number, '' + number])
        ].forEach(test => this._testClass(...test));
        this._testInvalid(jfDataTypeString, [null]);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeString,
            {
                KEY  : 'String',
                NAME : 'jf.dataType.String'
            },
            null
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeString, jfDataTypeBase, jfDataTypeBase);
    }
};

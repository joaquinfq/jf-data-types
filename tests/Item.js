const jfDataTypeObject   = require('../src/Object');
const jfDataTypeItem     = require('../src/Item');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Item`.
 */
module.exports = class jfDataTypeItemTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Item';
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeItem,
            {
                COLLECTION : 'Collection',
                KEY        : 'Item',
                NAME       : 'jf.dataType.Item',
                RELATIONS  : {}
            },
            null
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeItem, jfDataTypeObject, jfDataTypeObject);
    }
};

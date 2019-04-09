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

    _buildItems()
    {
        return Array.from({ length : 10 })
            .map((_, index) => ({ id : `c1-id-${index % 2}`, name : `c1-name-${index % 2}` }));
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeItem,
            {
                KEY       : 'Item',
                NAME      : 'jf.dataType.Item',
                RELATED   : {},
                RELATIONS : {}
            },
            {
                $collection : '',
                $related    : [],
                $relations  : []
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeItem, jfDataTypeObject, jfDataTypeObject);
    }

    /**
     * Pruebas del método `addRelations`.
     */
    testAddRelations()
    {
        const _Class  = class extends jfDataTypeItem
        {
            static get RELATED()
            {
                return {
                    Class2 : 'name'
                };
            }

            static get RELATIONS()
            {
                return {
                    Class1 : 'id'
                };
            }
        };
        const _class1 = this._buildItems();
        const _class2 = this._buildItems();
        const _class3 = this._buildItems();
        [0, 1].forEach(
            i => ['id', 'name'].forEach(
                property =>
                {
                    const _id        = `c1-${property}-${i}`;
                    const _name      = `c2-${property}-${i}`;
                    const _exp1      = _class1.filter(item => item.id === _id);
                    const _exp2      = _class2.filter(item => item.name === _name);
                    const _relations = {
                        Class1 : _class1,
                        Class2 : _class2,
                        Class3 : _class3
                    };
                    const _sut       = new _Class();
                    _sut.id          = _id;
                    _sut.name        = _name;
                    _sut.addRelations(_relations, 'RELATIONS');
                    this._assert('', _sut.$related, []);
                    this._assert('', _sut.$relations, _exp1);
                    _sut.$relations = [];
                    _sut.addRelations(_relations, 'RELATED');
                    this._assert('', _sut.$related, _exp2);
                    this._assert('', _sut.$relations, []);
                    _sut.addRelations(_relations, 'RELATIONS');
                    _sut.addRelations(_relations, 'RELATED');
                    this._assert('', _sut.$related, _exp2);
                    this._assert('', _sut.$relations, _exp1);
                }
            )
        );
    }

    /**
     * Pruebas del método `addRelations` sin valores o sin relaciones.
     */
    testAddRelationsEmpty()
    {
        const _sut   = new jfDataTypeItem();
        const _items = this._buildItems();
        [ 'RELATED', 'RELATIONS'].forEach(
            key =>
            {
                _sut.addRelations(null, key);
                this._assert('', _sut.$related, []);
                this._assert('', _sut.$relations, []);
                //-----------------------------------------
                _sut.addRelations({ Class1 : [] }, key);
                this._assert('', _sut.$related, []);
                this._assert('', _sut.$relations, []);
                //-----------------------------------------
                _sut.addRelations({ Class1 : [] }, key);
                this._assert('', _sut.$related, []);
                this._assert('', _sut.$relations, []);
                //-----------------------------------------
                _sut.addRelations({ Class2 : _items }, key);
                this._assert('', _sut.$related, []);
                this._assert('', _sut.$relations, []);

            }
        );
    }
};

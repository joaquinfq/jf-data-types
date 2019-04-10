const CollectionItem     = require('./_CollectionItem');
const CollectionTest     = require('./_CollectionTest');
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

    _buildItems(prefix)
    {
        return Array.from({ length : 10 })
            .map((_, index) => ({
                index,
                any  : `${prefix}-any-${index % 2}`,
                name : `${prefix}-name-${index % 2}`
            }));
    }

    /**
     * Crea una clase para una colección.
     */
    _createCollectionClass(name, item)
    {
        const _Collection = class extends CollectionTest
        {
            static get ITEM()
            {
                return item;
            }

            static get KEY()
            {
                return name;
            }
        };
        CollectionTest.register(_Collection.KEY, _Collection);
    }

    /**
     * Crea una clase para un elemento.
     */
    _createItemClass(name)
    {
        const _Item = class extends CollectionItem
        {
            static get KEY()
            {
                return name;
            }
        };
        CollectionItem.register(_Item.KEY, _Item);
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
                RELATIONS : {}
            },
            {
                $collection : '',
                $relations  : {}
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
        this._createItemClass('Item1');
        this._createCollectionClass('Coll1', 'Item1');
        const _Class  = class extends CollectionItem
        {
            static get RELATIONS()
            {
                return {
                    Item1 : 'name',
                    Item2 : 'name' // No está registrada en la colección
                };
            }
        };
        const _items1 = this._buildItems('c1');
        const _items2 = this._buildItems('c2');
        [0, 1].forEach(
            i =>
            {
                const _any       = `c2-any-${i}`;
                const _name      = `c1-name-${i}`;
                const _exp1      = _items1.filter(item => item.name === _name);
                const _relations = { Item1 : _items1 };
                const _sut       = new _Class(
                    {
                        any  : _any,
                        name : _name
                    }
                );
                // Verificamos que no pase nada si la clase es una relación pero no hay elementos con el valor en común.
                _sut.addRelations(
                    {
                        Item1 : _items1.map(
                            i => ({
                                ...i,
                                name : i.name + i.name
                            })
                        )
                    }
                );
                this._assert('', _sut.$relations, {});
                // Verificamos que no pase nada si la clase es una relación pero no está registrada
                _sut.addRelations({ Item2 : _items2 });
                this._assert('', _sut.$relations, {});
                // Agregamos el tipo relación.
                _sut.addRelations(_relations);
                this._assert('', Object.keys(_sut.$relations), ['Item1']);
                this._assert('', _sut.$relations.Item1.toJSON(), _exp1);
                // Verificamos que no se añada un elemento repetido.
                _sut.addRelations(_relations);
                this._assert('', Object.keys(_sut.$relations), ['Item1']);
                this._assert('', _sut.$relations.Item1.toJSON(), _exp1);
            }
        );
    }

    /**
     * Pruebas del método `addRelations` sin valores o sin relaciones.
     */
    testAddRelationsEmpty()
    {
        const _sut   = new CollectionItem();
        const _items = this._buildItems();
        _sut.addRelations(null);
        this._assert('', _sut.$relations, {});
        //-----------------------------------------
        _sut.addRelations({ Class1 : [] });
        this._assert('', _sut.$relations, {});
        //-----------------------------------------
        _sut.addRelations({ Class2 : _items });
        this._assert('', _sut.$relations, {});
    }
};

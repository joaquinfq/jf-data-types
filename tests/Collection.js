require('../src/Integer');
require('../src/String');
const jfDataTypeArray      = require('../src/Array');
const jfDataTypeBase       = require('../src/Base');
const jfDataTypeCollection = require('../src/Collection');
const jfDataTypeObject     = require('../src/Object');
const jfDataTypeTestBase   = require('./_Base');

/**
 * Elemento de la colección de prueba.
 */
class CollectionItem extends jfDataTypeObject
{
    constructor(config)
    {
        super();
        this.index          = '';
        this.name           = '';
        this.$propertyTypes = {
            any   : '*',
            index : 'Integer',
            name  : 'String'
        };
        this.setProperties(config);
    }
}

/**
 * Colección de prueba.
 */
class CollectionTest extends jfDataTypeCollection
{
    static get defaults()
    {
        return {
            type : 'CollectionItem'
        };
    }
}

const values      = [
    { any : 0.0, name : 'a', index : 1 },
    { any : 100, name : 'b', index : 2 },
    { any : 'x', name : 'c', index : 3 },
    { any : 1.0, name : 'a', index : 4 },
    { any : -20, name : 'b', index : 5 },
    { any : 'y', name : 'c', index : 6 }
];
const singleValue = {
    any   : 0.0,
    name  : 'f',
    index : 7
};
jfDataTypeBase.register('CollectionTest', CollectionTest);
jfDataTypeBase.register('CollectionItem', CollectionItem);
// ------------------------------------------------------------------------------
/**
 * Pruebas unitarias de la clase `jf.dataType.Collection`.
 */
module.exports = class jfDataTypeCollectionTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Collection';
    }

    /**
     * @override
     */
    setUp()
    {
        this.sut = new CollectionTest();
    }

    /**
     * Pruebas del método `add`.
     */
    ['testAdd - add() - No altera el número de elementos']()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        _sut.add();
        this._assert('', _sut.value, values);
    }

    /**
     * Pruebas del método `add`.
     */
    ['testAdd - add(item) - Agrega el elemento a la colección']()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        _sut.add(singleValue);
        this._assert('', _sut.value, [...values, singleValue]);
    }

    /**
     * Pruebas del método `add`.
     */
    ['testAdd - add(item) - Inicia la colección']()
    {
        const _sut = this.sut;
        _sut.value = null;
        this.assertNull(_sut.raw());
        _sut.add(singleValue);
        this._assert('', _sut.value, [singleValue]);
    }

    /**
     * Pruebas del método `add`.
     */
    ['testAdd - add(item, "id", false) - Añade un nuevo elemento aunque exista']()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        _sut.add(singleValue, 'name', false);
        this._assert('', _sut.value, [...values, singleValue]);
        _sut.add(singleValue, 'name');
        this._assert('', _sut.value, [...values, singleValue, singleValue]);
    }

    /**
     * Pruebas del método `add`.
     */
    ['testAdd - add(item, "id", true) - Añade un nuevo elemento solamente si no existe']()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        _sut.add(singleValue, 'name', true);
        this._assert('', _sut.value, [...values, singleValue]);
        _sut.add(singleValue, 'name', true);
        this._assert('', _sut.value, [...values, singleValue]);
    }

    /**
     * Pruebas del método `constructor`.
     */
    testConstructor()
    {
        //------------------------------------------------------------------------------
        // Cualquier valor que no sea un array, no debe asignarse.
        //------------------------------------------------------------------------------
        [0, 1, false, true, null, undefined, {}, () => 1].forEach(
            value => this.assertNull(new CollectionTest(value).raw())
        );
        //------------------------------------------------------------------------------
        // constructor([])
        //------------------------------------------------------------------------------
        this._assert('', new CollectionTest([]).value, []);
        this.assertNull(this.sut.value);
        //------------------------------------------------------------------------------
        // constructor([...])
        //------------------------------------------------------------------------------
        const _collection = new CollectionTest(values);
        _collection.raw().forEach(
            (raw, index) =>
            {
                this.assertTrue(raw instanceof CollectionItem);
                this._assert('', raw.valueOf(), values[index]);
            }
        );
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeCollection,
            {
                KEY  : 'Collection',
                NAME : 'jf.dataType.Collection'
            },
            null
        );
    }

    /**
     * Pruebas del método `findBy`.
     */
    testFindBy()
    {
        const _sut = this.sut;
        this._assert('', _sut.findBy(), []);
        _sut.setValue(values);
        this._assert('', _sut.findBy('name', 'b').map(i => i.toJSON()), values.filter(v => v.name === 'b'));
    }

    /**
     * Pruebas del método `findFirst`.
     */
    testFindFirst()
    {
        const _sut = this.sut;
        _sut.setValue(values);
        this.assertUndefined(_sut.findFirst());
        this._assert('', _sut.findFirst('name', 'b').toJSON(), values.find(v => v.name === 'b'));
    }

    /**
     * Pruebas del método `groupBy`.
     */
    testGroupBy()
    {
        const _sut = this.sut;
        //------------------------------------------------------------------------------
        // groupBy(key) - Sin valores
        //------------------------------------------------------------------------------
        this._assert('', _sut.groupBy('name'), {});
        //------------------------------------------------------------------------------
        // groupBy(key) - Con valores y clave inexistente
        //------------------------------------------------------------------------------
        _sut.value = values;
        this._assert('', _sut.value, values);
        this._assert('', _sut.groupBy('abcde'), {});
    }

    /**
     * Pruebas del método `groupBy` con valores y claves válidas.
     */
    testGroupByKeyValue()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        //------------------------------------------------------------------------------
        // Pruebas para cada uno de los tipos de datos diferentes en las propiedades.
        //------------------------------------------------------------------------------
        Object.keys(values[0]).forEach(
            key =>
            {
                const _groups = {};
                values.forEach(
                    item =>
                    {
                        if (!_groups[item[key]])
                        {
                            _groups[item[key]] = [];
                        }
                        _groups[item[key]].push(item);
                    }
                );
                let _total     = 0;
                const _groupBy = _sut.groupBy(key);
                Object.keys(_groups).forEach(
                    name =>
                    {
                        const _data = _groups[name];
                        _groupBy[name].forEach(
                            (item, index) =>
                            {
                                this._assert('', _data[index], item instanceof jfDataTypeBase ? item.value : item);
                                delete _data[index];
                                delete _groupBy[name][index];
                                ++_total;
                            }
                        );
                    }
                );
                this._assert('', _total, values.length);
                this._assert('', _groupBy, _groups);
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeCollection, jfDataTypeArray, jfDataTypeBase);
    }

    /**
     * Pruebas del método `removeBy`.
     */
    testRemoveBy()
    {
        const _sut = this.sut;
        this._assert('', _sut.removeBy(), []);
        _sut.setValue(values);
        this._assert('', _sut.removeBy('name', 'b').map(i => i.toJSON()), values.filter(v => v.name === 'b'));
        this._assert('', _sut.value, values.filter(v => v.name !== 'b'));
    }

    /**
     * Pruebas del método `removeItem`.
     */
    testRemoveItem()
    {
        const _sut = this.sut;
        _sut.value = values;
        this._assert('', _sut.value, values);
        _sut.removeItem();
        this._assert('', _sut.value, values);
        const _item  = _sut.raw()[1];
        const _index = _item.toJSON().index;
        _sut.removeItem(_item);
        this._assert('', _sut.value, values.filter(v => v.index !== _index));
    }

    /**
     * Pruebas del método `sortBy`.
     */
    ['testSortBy - sortBy(key, order) - Colección vacía']()
    {
        const _sut = this.sut;
        _sut.sortBy('index');
        this.assertNull(_sut.value);
        _sut.sortBy('index', 'ASC');
        this.assertNull(_sut.value);
        _sut.sortBy('index', 'DESC');
        this.assertNull(_sut.value);
    }

    /**
     * Pruebas del método `sortBy`.
     */
    ['testSortBy - sortBy(key, order) - Con clave inexistente']()
    {
        const _sut = this.sut;
        _sut.sortBy('abcd');
        this.assertNull(_sut.value);
        _sut.sortBy('abcd', 'ASC');
        this.assertNull(_sut.value);
        _sut.sortBy('abcd', 'DESC');
        this.assertNull(_sut.value);
    }

    /**
     * Pruebas del método `sortBy` usando la función de comparación por defecto.
     */
    ['testSortBy - sortBy(key, order, cmp = null) - Con valores']()
    {
        const _key = 'index';
        const _sut = this.sut;
        _sut.value = values;
        _sut.sortBy(_key, 'DESC');
        this._assert('', _sut.value, [...values].reverse());
        _sut.sortBy(_key);
        this._assert('', _sut.value, values);
        _sut.sortBy(_key, 'ASC');
        this._assert('', _sut.value, values);
    }

    /**
     * Pruebas del método `sortBy` usando la función de comparación definida por el usuario.
     */
    ['testSortBy - sortBy(key, order, cmp) - Con valores']()
    {
        const _key    = 'index';
        const _sut    = this.sut;
        const _sorter = (a, b) => String(a.valueOf()).localeCompare(String(b.valueOf()));
        _sut.value    = values;
        _sut.sortBy(_key, 'ASC', _sorter);
        this._assert('', _sut.value, [...values].sort((v1, v2) => _sorter(v1[_key], v2[_key])));
        values.sort((v1, v2) => _sorter(v2[_key], v1[_key]));
        _sut.sortBy(_key, 'DESC', _sorter);
        this._assert('', _sut.value, [...values].sort((v2, v1) => _sorter(v1[_key], v2[_key])));
    }

    /**
     * Pruebas del método estático `_cmp`.
     */
    testStaticCmp()
    {
        this._assert('', jfDataTypeCollection._cmp('a', 'b'), -1);
        this._assert('', jfDataTypeCollection._cmp('a', 'a'), 0);
        this._assert('', jfDataTypeCollection._cmp('b', 'a'), 1);
        this._assert('', jfDataTypeCollection._cmp(50, 80), -30);
        this._assert('', jfDataTypeCollection._cmp(50, 50), 0);
        this._assert('', jfDataTypeCollection._cmp(50, 25), 25);
    }
};

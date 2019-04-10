const jfDataTypeBase     = require('../src/Base');
const jfDataTypeBoolean  = require('../src/Boolean');
const jfDataTypeFloat    = require('../src/Float');
const jfDataTypeInteger  = require('../src/Integer');
const jfDataTypeMoney    = require('../src/Money');
const jfDataTypeObject   = require('../src/Object');
const jfDataTypeString   = require('../src/String');
const jfDataTypeTestBase = require('./_Base');
//------------------------------------------------------------------------------
// Configuramos algunas propiedades como textos y otras como referencias
// para verificar que ambas definiciones funcionan
//------------------------------------------------------------------------------
const config        = {
    boolean : true,
    float   : 987654.21,
    integer : 123456789,
    money   : 123.45,
    string  : 'TestObjectConfig'
};
const propertyMap   = {
    boolean : 'b',
    float   : 'f',
    integer : 'i',
    money   : 'm',
    string  : 's'
};
const propertyTypes = {
    boolean : 'Boolean',
    float   : 'Float',
    integer : 'Integer',
    money   : 'Money',
    string  : 'String'
};
const types         = {
    boolean : jfDataTypeBoolean,
    float   : jfDataTypeFloat,
    integer : jfDataTypeInteger,
    money   : jfDataTypeMoney,
    string  : jfDataTypeString
};
const properties    = Object.keys(propertyTypes);
//------------------------------------------------------------------------------
// Registramos una clase nueva para la pruebas.
//------------------------------------------------------------------------------
class TestObject extends jfDataTypeObject
{
    constructor(config)
    {
        super();
        this.$propertyTypes = { ...propertyTypes };
        this.boolean        = null;
        this.float          = null;
        this.integer        = null;
        this.money          = null;
        this.string         = null;
        this.setProperties(config);
    }
}

class TestObjectMap extends TestObject
{
    constructor(config)
    {
        super();
        this.$propertyMap = { ...propertyMap };
        this.setProperties(config);
    }
}

jfDataTypeBase.register('TestObject', TestObject);
jfDataTypeBase.register('TestObjectMap', TestObjectMap);
//------------------------------------------------------------------------------
/**
 * Pruebas unitarias de la clase `jf.dataType.Object`.
 */
module.exports = class jfDataTypeObjectTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Object';
    }

    /**
     * @override
     */
    setUp()
    {
        this.sut = new TestObject();
    }

    testAssignment(map = '')
    {
        const _object   = jfDataTypeBase.create(map ? 'TestObjectMap' : 'TestObject');
        _object.$useMap = !!map;
        //------------------------------------------------------------------------------
        // Verificamos la asignación de una propiedad solamente sin que afecte al resto
        //------------------------------------------------------------------------------
        const _assigned = [];
        const _expected = {};
        for (const _property of [...Object.keys(config), ''])
        {
            // Verificamos que los valores ya asignados retengan su valor.
            for (const _assignedProperty of _assigned)
            {
                let _prop = _object[_assignedProperty];
                this.assertTrue(_prop instanceof types[_assignedProperty]);
                this._assert('', _prop.value, config[_assignedProperty]);
            }
            if (_property)
            {
                _expected[map[_property] || _property] = config[_property];
                _object.setValue(_expected);
                // Verificamos que el valor se haya asignado correctamente.
                this._assert('', _object[_property].value, config[_property]);
                _assigned.push(_property);
            }
        }
        //------------------------------------------------------------------------------
        // Verificamos que se devuelva el objeto con los valores originales.
        //------------------------------------------------------------------------------
        this._testObject(_object.toJSON(), _expected);
        if (!map)
        {
            this.testAssignment(propertyMap);
        }
    }

    /**
     * Verifica las propiedades de tipo `*`.
     */
    testAsterisk()
    {
        const _sut          = this.sut;
        _sut.$propertyTypes = {
            boolean : '*',
            float   : '*',
            integer : '*',
            money   : '*',
            string  : '*'
        };
        const _values       = {
            boolean : new Date(),
            float   : new Map(),
            integer : new WeakMap(),
            money   : [1, 2, 3],
            string  : { a : 1, b : 2 }
        };
        _sut.setValue(_values);
        Object.keys(_values).forEach(
            prop => this._assert('', _sut[prop], _values[prop])
        );
    }

    /**
     * Pruebas del método `constructor`.
     */
    testConstructor()
    {
        const _expected = {};
        for (const _property of properties)
        {
            _expected[_property] = null;
        }
        const _sut = jfDataTypeBase.create('TestObjectMap');
        this._testObject(_sut, _expected, 'Valores por defecto');
        this._testObject(_sut.$propertyMap, propertyMap, 'Mapeo de propiedades');
        this._testObject(_sut.$propertyTypes, propertyTypes, 'Tipos de las propiedades');
        _sut.value = config;
        this._testObject(_sut.toJSON(), config);
        this._testObject(jfDataTypeBase.create('TestObject', config).toJSON(), config);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeObject,
            {
                KEY  : 'Object',
                NAME : 'jf.dataType.Object'
            },
            {
                $propertyMap   : null,
                $propertyTypes : null,
                $useMap        : false
            }
        );
    }

    /**
     * Pruebas del método `getValue`.
     */
    testGetValue()
    {
        const _sut = this.sut;
        _sut.value = config;
        Object.keys(config).forEach(
            property =>
            {
                this.assertTrue(_sut[property] instanceof jfDataTypeBase);
                // Verificamos la devolución del valor de un jf.dataType.
                this.assertEqual(_sut.getValue(property), config[property]);
                // Verificamos la devolución de un valor primitivo.
                _sut[property] = config[property];
                this.assertEqual(_sut.getValue(property), config[property]);
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeObject, jfDataTypeBase, jfDataTypeBase);
    }

    /**
     * Verifica el uso de la propiedad `$propertyTypes`.
     *
     * @param {object|null} types Valor a asignar a la propiedad `$propertyTypes`
     */
    testPropertyTypes(types = null)
    {
        // Si la propiedad no está definida, no se debería asignar.
        // Si no se definen propiedades no se deberían asignar ni devolver valores
        const _sut = this.sut;
        _sut.value = { abc : 1 };
        this.assertUndefined(_sut.abc);
        _sut.$propertyTypes = types;
        this._assert('', _sut.valueOf(), {});
        _sut.setValue(config);
        this._assert('', _sut.valueOf(), {});
        if (!types)
        {
            this.testPropertyTypes({});
        }
    }

    /**
     * Pruebas del método `_remap`.
     */
    testRemap()
    {
        const _sut    = new TestObjectMap();
        const _config = { ...config };
        const _remap  = {};
        _sut.$useMap  = true;
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        let _values = { ..._remap };
        _sut._remap(_values);
        this._testObject(_values, config, 'Valores remapeados modificados');
        _sut.$propertyMap = null;
        _values           = { ..._remap };
        _sut._remap(_values);
        this._testObject(_values, _remap, 'Valores remapeados sin modificar');
    }

    /**
     * Verificación de la asignación de valores escalares.
     */
    testScalars()
    {
        const _sut = this.sut;
        for (const _property of properties)
        {
            _sut[_property] = config[_property];
        }
        this._testObject(_sut.value, config, 'Valores escalares');
    }

    /**
     * Pruebas del método `setProperties`.
     */
    testSetProperties()
    {
        const _sut = this.sut;
        // Verifica que cuando es null no se construya una instancia de
        // jf.dataType.Base sino que se asigne `null`.
        [false, true].forEach(
            value =>
            {
                _sut.setProperties(
                    {
                        boolean : value
                    }
                );
                this.assertTrue(_sut.boolean instanceof jfDataTypeBoolean);
                this._assert('', _sut.boolean.value, value);
            }
        );
        _sut.setProperties(
            {
                boolean : null
            }
        );
        this.assertNull(_sut.boolean);
    }

    /**
     * Pruebas del método `toJSON`.
     */
    testToJson()
    {
        const _sut = this.sut;
        _sut.value = config;
        for (const _property of Object.keys(config))
        {
            this._assert('', _sut.toJSON()[_property], config[_property]);
            _sut[_property] = undefined;
            this.assertUndefined(_sut.toJSON()[_property]);
        }
    }

    /**
     * Pruebas del método `valueOf`.
     */
    testValueOf()
    {
        const _sut    = new TestObjectMap();
        const _config = { ...config };
        const _remap  = {};
        _sut.$useMap  = true;
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        let _values = { ..._remap };
        _sut.value  = _values;
        this._testObject(_sut.value, _values, 'Valores remapeados');
        _sut.$propertyMap = null;
        this._testObject(_sut.value, config, 'Valores sin remapear');
    }

    /**
     * Pruebas del método `valueOf` con `$useMap = false`.
     */
    testValueOfNoUseMap()
    {
        const _sut    = new TestObjectMap();
        const _config = { ...config };
        const _remap  = {};
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        _sut.value = { ..._remap };
        this._testObject(_sut.value, config, 'Valores sin remapear');
        _sut.$propertyMap = null;
        this._testObject(_sut.value, config, 'Valores sin remapear');
    }
};

import base              from '#/utils/base';
import helpers           from '#/utils/helpers';
import jfDataTypeBase    from '@/Base';
import jfDataTypeBoolean from '@/Boolean';
import jfDataTypeFloat   from '@/Float';
import jfDataTypeInteger from '@/Integer';
import jfDataTypeMoney   from '@/Money';
import jfDataTypeString  from '@/String';
import jfDataTypeObject  from '@/Object';
//------------------------------------------------------------------------------
// Configuramos algunas propiedades como textos y otras como referencias
// para verificar que ambas definiciones funcionan
//------------------------------------------------------------------------------
const config = {
    boolean : true,
    float   : 987654.21,
    integer : 123456789,
    money   : 123.45,
    string  : 'TestObjectConfig'
};
const propertyMap = {
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
const types = {
    boolean    : jfDataTypeBoolean,
    float      : jfDataTypeFloat,
    integer    : jfDataTypeInteger,
    money      : jfDataTypeMoney,
    string     : jfDataTypeString
};
const properties = Object.keys(propertyTypes);
//------------------------------------------------------------------------------
// Registramos una clase nueva para la pruebas.
//------------------------------------------------------------------------------
class TestObject extends jfDataTypeObject
{
    $propertyTypes = {...propertyTypes };
    boolean        = null;
    float          = null;
    integer        = null;
    money          = null;
    string         = null;
}
class TestObjectMap extends TestObject
{
    $propertyMap = {...propertyMap   };
}
jfDataTypeBase.register('TestObject',    TestObject);
jfDataTypeBase.register('TestObjectMap', TestObjectMap);
//------------------------------------------------------------------------------
function buildSut(config)
{
    const _sut = new TestObject();
    if (config)
    {
        _sut.value = config;
    }

    return _sut;
}
function generateTestAssignment(map = '')
{
    describe(
        'jfDataTypeDateObject - Asignación de propiedades: ' + JSON.stringify(map),
        () =>
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
                    it(`${_assignedProperty}: Tipo`, () => expect(_prop).toBeInstanceOf(types[_assignedProperty]));
                    it(`${_assignedProperty}: Valor`, () => expect(_prop.value).toBe(config[_assignedProperty]));
                }
                if (_property)
                {
                    _expected[map[_property] || _property] = config[_property];
                    _object.setValue(_expected);
                    // Verificamos que el valor se haya asignado correctamente.
                    it(_property, () => expect(_object[_property].value).toBe(config[_property]));
                    _assigned.push(_property);
                }
            }
            //------------------------------------------------------------------------------
            // Verificamos que se devuelva el objeto con los valores originales.
            //------------------------------------------------------------------------------
            helpers.testObject(_object.toJSON(), _expected);
        }
    );
}
function generateTestPropertyTypes(value)
{
    const _name = JSON.stringify(value);
    describe(
        'jfDataTypeDateObject - $propertyTypes = ' + _name,
        () =>
        {
            // Si la propiedad no está definida, no se debería asignar.
            // Si no se definen propiedades no se deberían asignar ni devolver valores
            const _sut = buildSut({ abc : 1 });
            it(`sut.abc`, () => expect(_sut.abc).toBeUndefined());
            _sut.$propertyTypes = value;
            it(`valueOf() ${_name} 1`, () => expect(_sut.valueOf()).toEqual({}));
            _sut.setValue(config);
            it(`valueOf() ${_name} 2`, () => expect(_sut.valueOf()).toEqual({}));
        }
    );

}
//------------------------------------------------------------------------------
base(jfDataTypeObject, jfDataTypeBase);
describe(
    'jfDataTypeDateObject - Construcción',
    () =>
    {
        const _sut = buildSut(config);
        helpers.testObject(_sut.toJSON(), config);
        helpers.testObject(jfDataTypeBase.create('TestObject', config).toJSON(), config);
    }
);
describe(
    'jfDataTypeDateObject - Estado inicial',
    () =>
    {
        const _expected = {};
        for (const _property of properties)
        {
            _expected[_property] = null;
        }
        const _object = jfDataTypeBase.create('TestObjectMap');
        helpers.testObject(_object, _expected, 'Valores por defecto');
        helpers.testObject(_object.$propertyMap, propertyMap, 'Mapeo de propiedades');
        helpers.testObject(_object.$propertyTypes, propertyTypes, 'Tipos de las propiedades');
    }
);
generateTestAssignment();
generateTestAssignment(propertyMap);
generateTestPropertyTypes(null);
generateTestPropertyTypes({});
describe(
    'jfDataTypeDateObject - setProperties - null',
    () =>
    {
        // Verifica que cuando es null no se construya una instancia de
        // jf.dataType.Base sino que se asigne `null`.
        const _sut = buildSut();
        [ false, true ].forEach(
            value => {
                _sut.setProperties(
                    {
                        boolean : value
                    }
                );
                expect(_sut.boolean).toBeInstanceOf(jfDataTypeBoolean);
                expect(_sut.boolean.value).toBe(value);
            }
        );
        _sut.setProperties(
            {
                boolean : null
            }
        );
        expect(_sut.boolean).toBeNull();
    }
);
describe(
    'jfDataTypeDateObject - Valores sin definir',
    () =>
    {
        const _sut = buildSut(config);
        for (const _property of Object.keys(config))
        {
            expect(_sut.toJSON()[_property]).toBe(config[_property]);
            _sut[_property] = undefined;
            expect(_sut.toJSON()[_property]).toBeUndefined();
        }
    }
);
describe(
    'jfDataTypeDateObject - Propiedades escalares',
    () =>
    {
        const _sut = buildSut();
        for (const _property of properties)
        {
            _sut[_property] = config[_property];
        }
        helpers.testObject(_sut.value, config, 'Valores escalares');
    }
);
describe(
    'jfDataTypeDateObject - remap',
    () =>
    {
        const _sut    = new TestObjectMap();
        const _config = {...config};
        const _remap  = {};
        _sut.$useMap  = true;
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        let _values = {..._remap};
        _sut._remap(_values);
        helpers.testObject(_values, config, 'Valores remapeados modificados');
        _sut.$propertyMap = null;
        _values = {..._remap};
        _sut._remap(_values);
        helpers.testObject(_values, _remap, 'Valores remapeados sin modificar');
    }
);
describe(
    'jfDataTypeDateObject - valueOf() --> $propertMap && $useMap',
    () =>
    {
        const _sut    = new TestObjectMap();
        const _config = {...config};
        const _remap  = {};
        _sut.$useMap  = true;
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        let _values = {..._remap};
        _sut.value  = _values;
        helpers.testObject(_sut.value, _values, 'Valores remapeados');
        _sut.$propertyMap = null;
        helpers.testObject(_sut.value, config, 'Valores sin remapear');
    }
);
describe(
    'jfDataTypeDateObject - valueOf() --> $propertMap && !$useMap',
    () =>
    {
        const _sut    = new TestObjectMap();
        const _config = {...config};
        const _remap  = {};
        for (const _property of properties)
        {
            _remap[propertyMap[_property]] = _config[_property];
        }
        _sut.value  = {..._remap};
        helpers.testObject(_sut.value, config, 'Valores sin remapear');
        _sut.$propertyMap = null;
        helpers.testObject(_sut.value, config, 'Valores sin remapear');
    }
);


import base             from '#/utils/base';
import helpers          from '#/utils/helpers';
import jfDataTypeArray  from '@/Array';
import jfDataTypeBase   from '@/Base';
import jfDataTypeString from '@/String';

function createInstance(values, Class = jfDataTypeArray)
{
    const _array = new Class();
    if (values)
    {
        _array.value = values;
    }

    return _array;
}

function createTypes(Class, values)
{
    return values.map(value => createInstance(value, Class))
}

base(jfDataTypeArray, jfDataTypeBase);
describe(
    'jfDataTypeArray',
    () => {
        helpers.runTests(
            [
                [ jfDataTypeArray, null, null,  null,  '' ]
            ],
            {
                defaults : {
                    config : {},
                    type   : 'String'
                }
            },
            null,
            [ null ]
        );
    }
);
describe(
    'jfDataTypeArray - buildItem',
    () => {
        it(
            'Valor falsy devuelve null',
            () => [ undefined, null, false ].forEach(
                value => expect(jfDataTypeArray.buildItem(value)).toBeNull()
            )
        );
        it(
            'Mismo tipo no lo construye y devuelve null',
            () => expect(jfDataTypeArray.buildItem(jfDataTypeArray.create(jfDataTypeArray.defaults.type))).toBeNull()
        );
        it(
            'Diferente tipo lo construye',
            () => {
                const _item = jfDataTypeArray.buildItem('lorem ipsum');
                expect(_item).toBeInstanceOf(jfDataTypeString);
                expect(_item.value).toBe('lorem ipsum');
            }
        );
    }
);
describe(
    'jfDataTypeArray - call',
    () => {
        const _values = [1, 2, 3, 4];
        const _sut    = createInstance(_values);
        // Iteración con una función existente
        it(
            'Función inexistente',
            () => {
                let _count = 0;
                let _result = _sut.call(
                    'map',
                    (item, index) => {
                        const _value = parseInt(item.value, 10);
                        expect(_value).toBe(_values[index]);
                        ++_count;

                        return _value * _value;
                    }
                );
                expect(_count).toBe(_values.length);
                expect(_result).toEqual(_values.map(value => value * value));
            }
        );
        it(
            'Función inexistente',
            () => {
                let _count = 0;
                let _result = _sut.call('abcdefg', () => ++_count);
                expect(_count).toBe(0);
                expect(_result).toBeUndefined();
            }
        );
    }
);
describe(
    'jfDataTypeArray - isItem',
    () => {
        it(
            'Valor falsy devuelve false',
            () => [ undefined, null, false ].forEach(
                value => expect(jfDataTypeArray.isItem(value)).toBe(false)
            )
        );
        it(
            'Si type no está definido devuelve false',
            () => {
                const _Class = class extends jfDataTypeArray {
                    static defaults = {};
                };
                expect(_Class.isItem({})).toBe(false);
            }
        );
    }
);
describe(
    'jfDataTypeArray - parser',
    () => {
        const _value = [ 1, 2, 3 ];
        it(
            'Tipo por defecto',
            () => {
                const _value = createTypes(jfDataTypeString, [ 1, 2, 3 ]);
                expect(createInstance(_value).raw()).toEqual(_value);
            }
        );
        it(
            'jfDataTypeArray - parser - Escalares',
            () => expect(createInstance(_value).raw()).toEqual(createTypes(jfDataTypeString, [ 1, 2, 3 ]))
        );
        it(
            'jfDataTypeArray - parser - Tipo sin definir',
            () => {
                const _Class = class extends jfDataTypeArray {
                    static defaults = {};
                };
                const _sut   = createInstance(_value, _Class);
                expect(_sut.valueOf()).toEqual([]);
            }
        );
        it(
            'jfDataTypeArray - parser - Tipo sin registrar',
            () => {
                const _Class = class extends jfDataTypeArray {
                    static defaults = {
                        type : 'UnregisteredType'
                    };
                };
                const _sut   = createInstance(_value, _Class);
                expect(_sut.valueOf()).toEqual([]);
            }
        );
    }
);
describe(
    'jfDataTypeArray - valueOf',
    () => {
        const _value = [ 1, 2, 3 ];
        it(
            'Escalares',
            () =>
            {
                const _sut = createInstance([]);
                expect(_sut.valueOf()).toEqual([]);
                _sut.$$value = [..._value];
                expect(_sut.valueOf()).toEqual(_value);
            }
        );
        it(
            'defaults.type',
            () => {
                // En defaults se asigna el tipo por defecto a String.
                const _sut = createInstance(_value);
                expect(_sut.valueOf()).toEqual(_value.map(String));
            }
        );
    }
);
describe(
    'jfDataTypeArray - for...of',
    () => {
        it(
            'Sin inicializar',
            () =>
            {
                const _sut = createInstance();
                let _count = 0;
                for (const _ of _sut)
                {
                    ++_count;
                }
                expect(_count).toBe(0);
            }
        );
        it(
            'Listado de valores',
            () =>
            {
                const _expected = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
                const _sut      = createInstance(_expected);
                const _values   = [];
                for (const _v of _sut)
                {
                    _values.push(_v.valueOf());
                }
                expect(_values).toEqual(_expected);
            }
        );
        it(
            'Con valor inválido',
            () => {
                const _sut   = createInstance({});
                const _value = [];
                for (const _v of _sut)
                {
                    _value.push(_v.valueOf());
                }
                expect(_value).toEqual([]);
            }
        );
    }
);

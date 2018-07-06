import helpers          from '#/utils/helpers';
import jfFactory        from 'jf-factory';
import jfDataTypeBase   from '@/Base';
import jfDataTypeDate   from '@/Date';
import jfDataTypeObject from '@/Object';

function createSut(config)
{
    const _sut = new jfDataTypeBase();
    _sut.setProperties(config);

    return _sut;
}
function validate(description, validators, valueOk, valueKo)
{
    const _sut       = createSut();
    _sut.$validators = validators;
    if (valueOk === null )
    {
        it(
            `${description}: Sin validación`,
            () =>
            {
                _sut.value = 'DaIgual';
                expect(_sut.validate()).toBe(false);
            }
        );
    }
    else
    {
        it(
            `${description}: Valor OK`,
            () =>
            {
                _sut.value = valueOk;
                expect(_sut.validate()).toBe(true);
            }
        );
        it(
            `${description}: Valor KO`,
            () =>
            {
                _sut.value = valueKo;
                expect(_sut.validate()).toBe(false);
            }
        );
    }
}

describe(
    'jfDataTypeBase',
    () => {
        helpers.runTests(
            [
                [ jfDataTypeBase, null, null,  null,  '' ]
            ],
            null,
            {
                $nullable   : true,
                $validators : null,
                $$value     : null
            },
            [ null ]
        );
    }
);
describe(
    'jfDataTypeBase - factory',
    () => expect(jfDataTypeBase.factory).toBe(jfFactory.i('jf-data-types'))
);
describe(
    'jfDataTypeBase - is',
    () => {
        [ 0, null, undefined, '', false ].forEach(
            falsy => {
                expect(jfDataTypeBase.is(falsy, 'Base')).toBe(false);
                expect(jfDataTypeBase.is(new jfDataTypeBase(), falsy)).toBe(false);
            }
        );

        expect(jfDataTypeBase.is(new jfDataTypeBase(), 'Base')).toBe(true);
        expect(jfDataTypeBase.is(new jfDataTypeBase(), 'Date')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeBase(), 'Object')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeBase(), 'Unknown')).toBe(false);

        expect(jfDataTypeBase.is(new jfDataTypeDate(), 'Base')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeDate(), 'Date')).toBe(true);
        expect(jfDataTypeBase.is(new jfDataTypeDate(), 'Object')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeDate(), 'Unknown')).toBe(false);

        expect(jfDataTypeBase.is(new jfDataTypeObject(), 'Base')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeObject(), 'Date')).toBe(false);
        expect(jfDataTypeBase.is(new jfDataTypeObject(), 'Object')).toBe(true);
        expect(jfDataTypeBase.is(new jfDataTypeObject(), 'Unknown')).toBe(false);
    }
);
describe(
    'jfDataTypeBase - setProperties',
    () => {
        [
            [ '$$value',      null      ],
            [ '$internal',    undefined ],
            [ '_underscore',  undefined ],
            [ 'unknown',      undefined ],
        ].forEach(
            ([ property, expected ]) => it(
                JSON.stringify(property),
                () => expect(createSut({ [property] : Math.random() })[property]).toBe(expected)
            )
        );
        it(
            'undefined',
            () => {
                const _value = Math.random();
                const _sut   = createSut();
                _sut.value   = _value;
                _sut.setProperties(
                    {
                        value : undefined
                    }
                );
                expect(_sut.value).toBe(_value);
            }
        );
    }
);
describe(
    'jfDataTypeBase - toString',
    () => {
        [
            [ null,      ''      ],
            [ undefined, ''      ],
            [ '',        ''      ],
            [ 0,         '0'     ],
            [ 1,         '1'     ],
            [ false,     'false' ],
            [ true,      'true'  ],
            [ 'abc',     'abc'   ]
        ].forEach(
            ([ value, expected ]) => it(
                JSON.stringify(value),
                () => expect(createSut({ value }).toString()).toBe(expected)
            )
        );
    }
);
describe(
    'jfDataTypeBase - validate',
    () => {
        it(
            '$nullable',
            () => {
                const _sut = createSut();
                _sut.$nullable = true;
                _sut.value     = null;
                expect(_sut.validate()).toBe(true);
                _sut.$nullable = false;
                expect(_sut.validate()).toBe(false);
            }
        );
        it(
            'Sin validadores',
            () => {
                // Si los validadores están vacíos se da por bueno cualquier valor.
                const _sut = createSut();
                _sut.$validators = null;
                _sut.value       = 10;
                expect(_sut.validate()).toBe(true);
                _sut.$validators = [];
                expect(_sut.validate()).toBe(true);
            }
        );
        validate('!== Function', 5, null, null);
        validate('=== Function', value => value > 5, 10, 2);
        validate('=== [ Function ]', [ value => value < 10 ], 1, 20);
        validate('=== [ { fn : Function } ]', [ { fn: value => value instanceof Date } ], new Date(), Date.now());
    }
);
describe(
    'jfDataTypeBase - valueOf()',
    () => {
        const _sut = createSut();
        _sut.$validators = () => false;
        _sut.value       = 100;
        expect(_sut.validate()).toBe(false);
        expect(_sut.valueOf()).toBe(null);
        _sut.$validators = null;
        expect(_sut.validate()).toBe(true);
        expect(_sut.valueOf()).toBe(100);
    }
);

global.window = {};
/**
 * Ejecuta una prueba muy básica sobre cada una de las clases solamente para verificar
 * que la * transpilación se ha ejecutado correctamente.
 *
 * Al crear una clase, pasarle un valor y luego recuperarlo deberíamos obtener el mismo valor.
 */
console.log('\n\n%s\nVerificación básica de la transpilación\n%s', '-'.repeat(39), '-'.repeat(39));
const assert  = require('assert');
const lib     = require(require('path').resolve(process.argv[2])).default;
const date    = new Date();
const float   = Math.random();
//@formatter:off
const tests = [
    //[ Class,   defValue, value,               expected            ]
    [ 'Array',    null,     [ 1, 2 ],            [ '1', '2' ]       ],
    [ 'Boolean',  false,    true,                true               ],
    [ 'Date',     null,     date.getTime(),      date.toISOString() ],
    [ 'DateTime', null,     date.getTime(),      date.toISOString() ],
    [ 'Enum',     null,     null,                null               ],
    [ 'Float',    null,     float,               float              ],
    [ 'Integer',  null,     parseInt(float, 10), parseInt(float)    ],
    [ 'Money',    null,     float,               float              ],
    [ 'Object',   {},       null,                {}                 ],
    [ 'String',   '',       float,               String(float)      ],
    [ 'Time',     null,     date.getTime(),      date.toISOString() ],
];
//@formatter:on
tests.forEach(
    ([Class, defValue, value, expected]) =>
    {
        console.log('Verificando la clase %s...', Class);
        const _instance = lib.Base.create(Class);
        assert.deepEqual(_instance.value, defValue);
        _instance.value = value;
        let _actual     = _instance.value;
        if (_actual instanceof Date)
        {
            _actual = _actual.toISOString();
        }
        assert.deepStrictEqual(_actual, expected);
    }
);

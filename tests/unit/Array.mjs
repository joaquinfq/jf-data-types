import common           from '../utils/common';
import helpers          from '../utils/helpers';
import jfDataTypeBase   from '../../src/Base';
import jfDataTypeArray  from '../../src/Array';
import jfDataTypeString from '../../src/String';

function createTypes(Class, values)
{
    return values.map(
        value => {
            const _type = new Class();
            _type.value = value;

            return _type;
        }
    )
}

describe('jfDataTypeArray - common', () => common(jfDataTypeArray, jfDataTypeBase));
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
    'jfDataTypeArray - parser - jfDataTypeString',
    () => {
        const _value = createTypes(jfDataTypeString, [ 1, 2, 3 ]);
        const _sut   = new jfDataTypeArray();
        _sut.value   = _value;
        expect(_sut.$$value).toEqual(_value);
    }
);
describe(
    'jfDataTypeArray - parser - Escalares',
    () => {
        const _value = [ 1, 2, 3 ];
        const _sut   = new jfDataTypeArray();
        _sut.value   = _value;
        expect(_sut.$$value).toEqual(createTypes(jfDataTypeString, [ 1, 2, 3 ]));
    }
);
describe(
    'jfDataTypeArray - parser - Tipo sin registrar',
    () => {
        const _type  = jfDataTypeArray.defaults.type;
        jfDataTypeArray.defaults.type = 'UnknownClass';
        const _value = [ 1, 2, 3 ];
        const _sut   = new jfDataTypeArray();
        _sut.value   = _value;
        expect(_sut.valueOf()).toEqual([]);
        jfDataTypeArray.defaults.type = _type;
    }
);
describe(
    'jfDataTypeArray - valueOf() - Escalares',
    () => {
        const _value = [ 1, 2, 3 ];
        const _sut   = new jfDataTypeArray();
        _sut.value   = [];
        expect(_sut.valueOf()).toEqual([]);
        _sut.$$value = [..._value];
        expect(_sut.valueOf()).toEqual(_value);
    }
);
describe(
    'jfDataTypeArray - valueOf() - defaults.type',
    () => {
        // En defaults se asigna el tipo por defecto a String.
        const _value = [ 1, 2, 3 ];
        const _sut   = new jfDataTypeArray();
        _sut.value   = _value;
        expect(_sut.valueOf()).toEqual(_value.map(String));
    }
);

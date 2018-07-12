import base           from '#/utils/base';
import helpers        from '#/utils/helpers';
import jfDataTypeBase from '@/Base';
import jfDataTypeEnum from '@/Enum';

base(jfDataTypeEnum, jfDataTypeBase);
describe(
    'jfDataTypeEnum',
    () => {
        helpers.runTests(
            [
                [ 'Enum', null, null,  null,  '' ]
            ],
            null,
            {
                $allowedValues : [],
                $defValue      : null
            },
            [ null ]
        );
    }
);
describe(
    'jfDataTypeArray - loadDefault()',
    () => {
        const _sut = new jfDataTypeEnum({ value : 5 });
        // No se ha asignado $allowedValues --> null
        expect(_sut.value).toBeNull();
        _sut.value = 5;
        expect(_sut.value).toBeNull();
        _sut.loadDefault();
        expect(_sut.value).toBeNull();
        // Inicializamos la instancia
        _sut.$allowedValues = [ 'red', 'green', 'blue' ];
        _sut.$defValue      = 'green';
        // Verificamos que se asigne el valor por defecto si es válido.
        _sut.loadDefault();
        expect(_sut.value).toBe('green');
        // El valor por defecto no existe --> null
        _sut.$defValue = 'white';
        _sut.loadDefault();
        expect(_sut.value).toBeNull();
        // blue no es un valor válido al sacarlo de allowedValues --> null
        _sut.value = 'red';
        expect(_sut.value).toBe('red');
        _sut.value = _sut.$allowedValues.pop();
        expect(_sut.value).toBeNull();
    }
);

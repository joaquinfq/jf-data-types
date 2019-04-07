const jfDataTypeBase     = require('../src/Base');
const jfDataTypeEnum     = require('../src/Enum.js');
const jfDataTypeTestBase = require('./_Base');
/**
 * Pruebas unitarias de la clase `jf.dataType.Enum`.
 */
module.exports = class jfDataTypeEnumTest extends jfDataTypeTestBase
{
    /**
     * @override
     */
    static get title()
    {
        return 'jf.dataType.Enum';
    }

    /**
     * Pruebas de la clase.
     */
    testClass()
    {
        this._testClass('Enum', null, null, null, '');
        this._testInvalid(jfDataTypeEnum, [null]);
    }

    /**
     * Comprueba la definición de la clase.
     */
    testDefinition()
    {
        this._testDefinition(
            jfDataTypeEnum,
            {
                KEY  : 'Enum',
                NAME : 'jf.dataType.Enum'
            },
            {
                $allowedValues : [],
                $defValue      : null
            }
        );
    }

    /**
     * Comprueba la herencia de la clase.
     */
    testInheritance()
    {
        this._testInheritance(jfDataTypeEnum, jfDataTypeBase, jfDataTypeBase);
    }

    /**
     * Pruebas del método `loadDefault`.
     */
    testLoadDefault()
    {
        const _sut = new jfDataTypeEnum({ value : 5 });
        // No se ha asignado $allowedValues --> null
        this.assertNull(_sut.value);
        _sut.value = 5;
        this.assertNull(_sut.value);
        _sut.loadDefault();
        this.assertNull(_sut.value);
        // Inicializamos la instancia
        _sut.$allowedValues = ['red', 'green', 'blue'];
        _sut.$defValue      = 'green';
        // Verificamos que se asigne el valor por defecto si es válido.
        _sut.loadDefault();
        this._assert('equal', _sut.value, 'green');
        // El valor por defecto no existe --> null
        _sut.$defValue = 'white';
        _sut.loadDefault();
        this.assertNull(_sut.value);
        // blue no es un valor válido al sacarlo de allowedValues --> null
        _sut.value = 'red';
        this._assert('equal', _sut.value, 'red');
        _sut.value = _sut.$allowedValues.pop();
        this.assertNull(_sut.value);
    }
};

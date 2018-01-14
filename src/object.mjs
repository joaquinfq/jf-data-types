import jfDataTypeBase from './base';

/**
 * Clase para el manejo de objetos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Object
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeObject extends jfDataTypeBase
{
    /**
     * Configuración de las propiedades de la clase.
     *
     * Es un objeto donde las claves son las propiedades existentes en la clase
     * y el valor es el tipo de datos asignado a esa propiedad.
     *
     * Cada clave debe corresponder con una propiedad definida en la clase.
     *
     * ```
     * class MyType extends jfDataTypeObject
     * {
     *     amount = null;
     *     name = null;
     *     $propertyTypes = {
     *        amount : jfDataTypeMoney,
     *        name   : jfDataTypeString
     *     }
     * }
     * ```
     *
     * @property $propertyTypes
     * @type     {Object|null}
     */
    $propertyTypes = null;

    /**
     * @override
     */
    setValue(value)
    {
        if (value && typeof value === 'object')
        {
            const _propertyTpes = this.$propertyTypes;
            if (_propertyTpes && typeof _propertyTpes === 'object')
            {
                for (const _property of Object.keys(_propertyTpes))
                {
                    if (_property in value)
                    {
                        this[_property] = jfDataTypeBase.factory(_propertyTpes[_property], value[_property]);
                    }
                }
            }
        }
        super.setValue(null);
    }

    /**
     * @override
     */
    valueOf()
    {
        const _values = {};
        const _propertyTpes = this.$propertyTypes;
        if (_propertyTpes && typeof _propertyTpes === 'object')
        {
            for (const _name of Object.keys(_propertyTpes))
            {
                const _value = this[_name];
                if (_value !== undefined)
                {
                    _values[_name] = _value instanceof jfDataTypeBase
                        ? _value.value
                        : _value;
                }
            }
        }

        return _values;
    }
}
//------------------------------------------------------------------------------
jfDataTypeObject.register('Object', jfDataTypeObject);

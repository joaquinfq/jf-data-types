import jfDataTypeBase from './Base';

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
     * Mapea las propiedades de la instancia con nuevos nombres
     * permitiendo cambiar al vuelo la asignación de los valores.
     *
     * @property $propertyMap
     * @type     {Object|null}
     */
    $propertyMap = null;

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
     * Indica si se usa el mapeo cuando se devuelven los valores.
     *
     * @type {Boolean}
     */
    $useMap = false;

    /**
     * Mapea los valores con nombres de propiedades de la instancia.
     *
     * @method _remap
     *
     * @param {Object} values Valores a remapear.
     *
     * @protected
     */
    _remap(values)
    {
        const _map = this.$propertyMap;
        if (_map && typeof _map === 'object')
        {
            for (const _property of Object.keys(_map))
            {
                const _oldName = _map[_property];
                if (_oldName in values)
                {
                    values[_property] = values[_oldName];
                    delete values[_oldName];
                }
            }
        }
    }

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
                const _Class = this.constructor;
                const _value = {...value};
                this._remap(_value);
                for (const _property of Object.keys(_value))
                {
                    if (_property in _propertyTpes)
                    {
                        const _data     = _value[_property];
                        if (_data === null || _data === undefined)
                        {
                            this[_property] = null;
                        }
                        else
                        {
                            const _type     = _propertyTpes[_property];
                            this[_property] = _type === '*'
                                ? _data
                                : _Class.create(_propertyTpes[_property], _data);
                        }
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
        const _values       = {};
        const _propertyTpes = this.$propertyTypes;
        if (_propertyTpes && typeof _propertyTpes === 'object')
        {
            const _map = this.$useMap
                ? this.$propertyMap || {}
                : {};
            for (const _name of Object.keys(_propertyTpes))
            {
                const _value = this[_name];
                if (_value !== undefined)
                {
                    _values[_map[_name] || _name] = _value instanceof jfDataTypeBase
                        ? _value.value
                        : _value;
                }
            }
        }

        return _values;
    }

    /**
     * @override
     */
    setProperties(values)
    {
        this.setValue(values);
    }
}
//------------------------------------------------------------------------------
jfDataTypeObject.register('Object', jfDataTypeObject);

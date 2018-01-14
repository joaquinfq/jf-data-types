/**
 * Almacena los diferentes tipos de campos soportados por la bibliteca.
 *
 * @type {Object}
 */
const fieldTypes = {};

/**
 * Clase que representa un campo de una tabla o respuesta del servidor.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Base
 * @extends   jf.dataType.Base
 */
export default class jfDataTypeBase
{
    /**
     * Callback a usar para analizar el valor de entrada y que deberá devolver
     * el valor a asignar a la instancia.
     *
     * @property parser
     * @type     {Function|null}
     * @static
     */
    static parser = null;

    /**
     * Indica si el campo puede ser `null`.
     *
     * @property nullable
     * @type     {Boolean}
     */
    nullable = true;

    /**
     * Validadores a usar para verificar el valor de la instancia.
     *
     * Cada elemento del array puede ser una función o un objeto
     * con al menos la clave `fn`.
     *
     * @property validators
     * @type     {Object[]|Function[]|null}
     */
    validators = null;

    /**
     * Valor del campo.
     *
     * @property $$value
     * @type     {*}
     *
     * @protected
     * @internal
     */
    $$value = null;

    /**
     * Asigna el valor de la clase.
     *
     * @param {*} value Valor a asignar.
     */
    setValue(value)
    {
        if (value === null)
        {
            this.$$value = null;
        }
        else
        {
            const _parser = this.constructor.parser;
            this.$$value  = typeof _parser === 'function'
                ? _parser.call(this, value)
                : value;
        }
    }

    /**
     * @override
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
     */
    toJSON()
    {
        return this.value;
    }

    /**
     * @override
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
     */
    toString()
    {
        const _value = this.value;

        return _value === null || _value === undefined
            ? ''
            : String(_value);
    }

    /**
     * Valida el valor de la instancia usando los validadores especificados en
     * la propiedad `validators`.
     *
     * @method validate
     *
     * @return {Boolean} `true` si el valor es válido.
     */
    validate()
    {
        let _isValid;
        const _value = this.value;
        if (_value === null)
        {
            _isValid = this.nullable;
        }
        else
        {
            let _validators = this.validators;
            if (_validators)
            {
                if (!Array.isArray(_validators))
                {
                    _validators = [_validators];
                }
                for (const _validator of _validators)
                {
                    if (typeof _validator === 'function')
                    {
                        // Si es una función se llama con un solo parámetro, el valor.
                        _isValid = _validator(_value);
                    }
                    else if (_validator && typeof _validator.fn === 'function')
                    {
                        // Si es un objeto, se pasa como segundo parámetro el propio
                        // objeto para permitir configurar el validador.
                        _isValid = _validator.fn(_value, _validator);
                    }
                    else
                    {
                        // Si se especificó un validador incorrecto, devolvemos `false`.
                        _isValid = false;
                    }
                    if (!_isValid)
                    {
                        break;
                    }
                }
            }
            else
            {
                _isValid = true;
            }
        }

        return _isValid;
    }

    /**
     * Devuelve el valor de la instancia.
     */
    get value()
    {
        return this.valueOf();
    }

    /**
     * Asigna el valor de la instancia.
     */
    set value(value)
    {
        this.setValue(value);
    }

    /**
     * @override
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
     */
    valueOf()
    {
        return this.$$value;
    }

    /**
     * Construye la instancia del tipo de datos especificado.
     *
     * @method factory
     *
     * @param {String|Class} name  Nombre del tipo de dato o referencia de la clase.
     * @param {*?}           value Configuración a aplicar a la nueva instancia.
     *
     * @return {jf.dataType.Base|undefined} Instancia construida.
     *
     * @static
     */
    static factory(name, value)
    {
        let _instance;
        let _Class = typeof name === 'function'
            ? name
            : fieldTypes[name];
        if (_Class)
        {
            _instance = new _Class();
            if (value && typeof value === 'object' && !Array.isArray(value))
            {
                if ('$propertyTypes' in _instance)
                {
                    _instance.value = value;
                }
                else
                {
                    for (const _property of Object.keys(value))
                    {
                        // Se descartan aquellas claves que no sean propiedades de la instancia.
                        if (_property in _instance)
                        {
                            _instance[_property] = value[_property];
                        }
                    }
                }
            }
            else
            {
                _instance.value = value;
            }
        }
        return _instance;
    }

    /**
     * Rellena una cantidad con ceros a la izquierda.
     *
     * @method pad
     *
     * @param {Number} value  Valor a formatear.
     * @param {Number} length Longitud del texto resultante.
     *
     * @return {String} Número formateado.
     *
     * @static
     */
    static pad(value, length = 2)
    {
        const _value = value.toFixed(0);
        return _value.length < length
            ? ('0'.repeat(length) + _value).substr(-length)
            : _value;
    }

    /**
     * Registra la referencia de la clase que maneja el tipo de dato especificado.
     *
     * @method register
     *
     * @param {String} name Nombre del tipo de dato.
     * @param {Class}  Class Referencia de la clase que maneja el tipo de dato.
     *
     * @static
     */
    static register(name, Class)
    {
        fieldTypes[name] = Class;
    }
}

const jfFactory    = require('@jf/factory');
const jfObject     = require('@jf/object');
/**
 * Factoría para los tipos de datos.
 *
 * @type {Factory}
 */
const factory      = jfFactory.i('@jf/data-types');
factory.initMethod = 'setProperties';
/**
 * Clase que representa un campo de una tabla o respuesta del servidor.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Base
 * @extends   jf.Object
 */
class jfDataTypeBase extends jfObject
{
    /**
     * Devuelve el valor de la instancia.
     */
    get value()
    {
        return this.valueOf();
    }

    /**
     * Asigna el valor de la instancia.
     *
     * @param {*} value Valor a asignar a la instancia.
     */
    set value(value)
    {
        this.setValue(value);
    }

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Indica si el campo puede ser `null`.
         *
         * @property $nullable
         * @type     {Boolean}
         */
        this.$nullable = true;
        /**
         * Validadores a usar para verificar el valor de la instancia.
         *
         * Cada elemento del array puede ser una función o un objeto
         * con al menos la clave `fn`.
         *
         * @property $validators
         * @type     {Object[]|Function[]|null}
         */
        this.$validators = null;
        /**
         * Valor del campo.
         *
         * @property $value
         * @type     {*}
         *
         * @protected
         * @internal
         */
        this.$value = null;
        //------------------------------------------------------------------------------
        this.setProperties(config);
    }

    /**
     * Analiza el valor de entrada y devuelve el valor a asignar a la instancia.
     *
     * @return {*|null} El valor a asignar a la instancia.
     */
    _parseValue(value)
    {
        return value;
    }

    /**
     * Retorna el valor de la instancia sin procesar.
     *
     * @return {*} Valor de la instancia.
     */
    raw()
    {
        return this.$value;
    }

    /**
     * Asigna el valor de la clase.
     *
     * @param {*} value Valor a asignar.
     */
    setValue(value)
    {
        this.$value = value === null
            ? null
            : this._parseValue(value);
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
     * la propiedad `$validators`.
     *
     * @method validate
     *
     * @return {Boolean|Error} `true` si el valor es válido.
     */
    validate()
    {
        let _isValid;
        const _value = this.raw();
        if (_value === null)
        {
            _isValid = this.$nullable;
        }
        else
        {
            let _validators = this.$validators;
            if (_validators)
            {
                if (!Array.isArray(_validators))
                {
                    _validators = [_validators];
                }
                if (_validators.length)
                {
                    try
                    {
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
                            // Cualquier valor devuelto que no sea `true` se asume como inválido.
                            if (_isValid !== true)
                            {
                                break;
                            }
                        }
                    }
                    catch (error)
                    {
                        // Si un validador prefiere lanzar una excepción, se devuelve dicha excepción.
                        // Esto permite asignar un valor en la propiedad `message` para explicar el error.
                        _isValid = error;
                    }
                }
                else
                {
                    // Si los validadores están vacíos, damos por bueno cualquier valor.
                    _isValid = true;
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
     * @override
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
     */
    valueOf()
    {
        return this.validate()
            ? this.raw()
            : null;
    }

    /**
     * Construye la instancia del tipo de datos especificado.
     *
     * @param {String|Class} name  Nombre del tipo de dato o referencia de la clase.
     * @param {*?}           value Configuración a aplicar a la nueva instancia.
     *
     * @return {jf.dataType.Base|undefined} Instancia construida.
     *
     * @static
     */
    static create(name, value)
    {
        const _instance = factory.create(name);
        if (_instance)
        {
            if (value && typeof value === 'object' && !Array.isArray(value))
            {
                _instance.setProperties(value);
            }
            else
            {
                _instance.value = value;
            }
        }

        return _instance;
    }

    /**
     * Indica si una instancia es de la clase especificada.
     *
     * @param {Object} instance  Instancia a verificar.
     * @param {String} classname Nombre de la clase a comprobar.
     *
     * @return {Boolean} `true` si la instancia es de esa clase.
     */
    static is(instance, classname)
    {
        let _is = false;
        if (instance && classname)
        {
            const _Class = factory.get(classname);
            if (_Class)
            {
                _is = instance.constructor === _Class;
            }
        }

        return _is;
    }
}
//------------------------------------------------------------------------------
factory.attach(jfDataTypeBase, ['factory', 'register']);
jfDataTypeBase.register('Base', jfDataTypeBase);
module.exports = jfDataTypeBase;

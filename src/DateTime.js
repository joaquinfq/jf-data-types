const jfDataTypeBase = require('./Base');
/**
 * Manejadores para los símbolos usados en los formatos de las fechas.
 *
 * Se pueden registrar otros manejadores. Por ejemplo para el formato 'eeee' (que
 * depende del idioma) se podría hacer:
 *
 * ```
 * jfDataTypeDateTime.registerSymbol(
 *     'eeee',
 *     date => tr('weekday' + date.getDay())
 * );
 * ```
 *
 * @type {Object}
 *
 * @see http://userguide.icu-project.org/formatparse/datetime
 */
const customSymbols = {
    d    : date => date.getDate(),
    dd   : date => String(date.getDate()).padStart(2, '0'),
    H    : date => date.getHours(),
    HH   : date => String(date.getHours()).padStart(2, '0'),
    m    : date => date.getMinutes(),
    mm   : date => String(date.getMinutes()).padStart(2, '0'),
    M    : date => date.getMonth() + 1,
    MM   : date => String(date.getMonth() + 1).padStart(2, '0'),
    s    : date => date.getSeconds(),
    ss   : date => String(date.getSeconds()).padStart(2, '0'),
    y    : date => date.getFullYear(),
    yy   : date => date.getFullYear().toString().substr(-2),
    yyyy : date => date.getFullYear()
};
/**
 * Clase para el manejo de fechas que incluyen las horas.
 * Dependiendo del formato recibido del servidor podría usarse
 * el método `_parseValue` para definir el analizador del valor
 * de entrada.
 *
 * ```
 * // Diferentes ejemplos de lo que debería retornar esta función
 * // para un formato de entrada `dd/mm/YYYY`
 * class MyDateTime extends jfDataTypeDateTime
 * {
 *     _parseValue(value)
 *     {
 *         const _parts = value.split('/');
 *
 *         return [
 *             parseInt(_parts[2], 10),
 *             parseInt(_parts[1], 10) - 1,
 *             parseInt(_parts[0], 10),
 *         ]
 *     }
 *     _parseValue(value)
 *     {
 *         const _parts = value.split('/');
 *
 *         return new Date(
 *             parseInt(_parts[2], 10),
 *             parseInt(_parts[1], 10) - 1,
 *             parseInt(_parts[0], 10),
 *         );
 *     }
 *     _parseValue(value)
 *     {
 *         return value.split('/').reverse().join('-');
 *     }
 * }
 * //
 * const _date = new MyDateTime();
 * console.log(_date.setValue('15/01/2017'));
 * ```
 *
 * @namespace jf.dataType
 * @class     jf.dataType.DateTime
 * @extends   jf.dataType.Base
 */
class jfDataTypeDateTime extends jfDataTypeBase
{
    /**
     * Formato por defecto para convertir la fecha en texto.
     *
     * @property defaultFormat
     * @type     {string}
     */
    static get defaultFormat()
    {
        return 'yyyy-MM-ddTHH:mm:ss';
    }

    /**
     * @override
     */
    static get KEY()
    {
        return 'DateTime';
    }

    /**
     * @override
     */
    static get NAME()
    {
        return 'jf.dataType.DateTime';
    }

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Formato a usar para convertir la fecha en texto.
         * Si no se especifica se usa `defaultFormat`.
         *
         * @property format
         * @type     {string}
         */
        this.format = '';
        //------------------------------------------------------------------------------
        this.setProperties(config);
    }

    /**
     * @override
     */
    _parseValue(value)
    {
        switch (typeof value)
        {
            case 'number':
                if (value > 0)
                {
                    value = new Date(value);
                }
                break;
            case 'object':
                if (Array.isArray(value) && value.length)
                {
                    value = new Date(...value);
                }
                break;
            case 'string':
                const _time = Date.parse(value);
                if (!isNaN(_time))
                {
                    value = new Date(_time);
                }
                break;
        }

        return value instanceof Date
            ? value
            : null;
    };

    /**
     * @override
     */
    toJSON()
    {
        const _value = this.value;

        return _value === null
            ? super.toJSON()
            : this.constructor.formatDate(_value, this.format || this.constructor.defaultFormat);
    }

    /**
     * @override
     */
    toString()
    {
        const _value = this.value;
        return _value === null
            ? super.toString()
            : this.constructor.formatDate(_value, this.format || this.constructor.defaultFormat);
    }

    /**
     * Agrega un símbolo aceptado en el formato de la fecha.
     *
     * @param {string}   symbol  Símbolo a registrar.
     * @param {function} handler Función que se ejecutará para realizar la conversión.
     */
    static addSymbol(symbol, handler)
    {
        customSymbols[symbol] = handler;
    }

    /**
     * Formatea una fecha convirtiéndola a texto.
     *
     * @param {date}    date   Fecha a formatear.
     * @param {string?} format Formato de la fecha.
     */
    static formatDate(date, format = '')
    {
        let _result = '';
        if (date instanceof Date)
        {
            _result = format && typeof format === 'string'
                ? format.replace(
                    /(\w)\1{0,3}/g,
                    symbol => symbol in customSymbols
                        ? customSymbols[symbol](date)
                        : symbol
                )
                : date.toISOString();
        }

        return _result;
    }
}
//------------------------------------------------------------------------------
jfDataTypeBase.register(jfDataTypeDateTime.KEY, jfDataTypeDateTime);
module.exports = jfDataTypeDateTime;

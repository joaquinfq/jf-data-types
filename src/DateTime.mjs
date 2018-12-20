import jfDataTypeBase from './Base';

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
    dd   : date => jfDataTypeDateTime.pad(date.getDate()),
    H    : date => date.getHours(),
    HH   : date => jfDataTypeDateTime.pad(date.getHours()),
    m    : date => date.getMinutes(),
    mm   : date => jfDataTypeDateTime.pad(date.getMinutes()),
    M    : date => date.getMonth() + 1,
    MM   : date => jfDataTypeDateTime.pad(date.getMonth() + 1),
    s    : date => date.getSeconds(),
    ss   : date => jfDataTypeDateTime.pad(date.getSeconds()),
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
export default class jfDataTypeDateTime extends jfDataTypeBase
{
    /**
     * Formato por defecto para convertir la fecha en texto.
     *
     * @property defaultFormat
     * @type     {String}
     * @static
     */
    static defaultFormat = 'yyyy-MM-dd HH:mm:ss';

    /**
     * Formato a usar para convertir la fecha en texto.
     * Si no se especifica se usa `defaultFormat`.
     *
     * @property format
     * @type     {String}
     */
    format               = '';

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
     * @method addSymbol
     *
     * @param {String}   symbol  Símbolo a registrar.
     * @param {Function} handler Función que se ejecutará para realizar la conversión.
     *
     * @static
     */
    static addSymbol(symbol, handler)
    {
        customSymbols[symbol] = handler;
    }

    /**
     * Formatea una fecha convirtiéndola a texto.
     *
     * @param {Date}    date   Fecha a formatear.
     * @param {String?} format Formato de la fecha.
     */
    static formatDate(date, format)
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
jfDataTypeDateTime.register('DateTime', jfDataTypeDateTime);

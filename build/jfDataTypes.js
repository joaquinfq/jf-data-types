(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dataTypes"] = factory();
	else
		root["jf"] = root["jf"] || {}, root["jf"]["dataTypes"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 82), __esModule: true };

/***/ }),
/* 3 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 84);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 4 */
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 90);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 94);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 36)('wks');
var uid = __webpack_require__(/*! ./_uid */ 24);
var Symbol = __webpack_require__(/*! ./_global */ 8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 8);
var core = __webpack_require__(/*! ./_core */ 0);
var ctx = __webpack_require__(/*! ./_ctx */ 31);
var hide = __webpack_require__(/*! ./_hide */ 17);
var has = __webpack_require__(/*! ./_has */ 15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 13);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 48);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/get.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ 87);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 11 */
/*!**********************!*\
  !*** ./src/Base.mjs ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 26);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 44);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _jfFactory = __webpack_require__(/*! jf-factory */ 102);

var _jfFactory2 = _interopRequireDefault(_jfFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Factoría para los tipos de datos.
 *
 * @type {Factory}
 */
var factory = _jfFactory2.default.i('jf-data-types');
factory.initMethod = 'setProperties';

/**
 * Clase que representa un campo de una tabla o respuesta del servidor.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Base
 * @extends   jf.dataType.Base
 */

var jfDataTypeBase = function () {
    function jfDataTypeBase() {
        (0, _classCallCheck3.default)(this, jfDataTypeBase);
        this.$nullable = true;
        this.$validators = null;
        this.$$value = null;
    }
    /**
     * Callback a usar para analizar el valor de entrada y que deberá devolver
     * el valor a asignar a la instancia.
     *
     * @property parser
     * @type     {Function|null}
     * @static
     */


    /**
     * Indica si el campo puede ser `null`.
     *
     * @property $nullable
     * @type     {Boolean}
     */


    /**
     * Validadores a usar para verificar el valor de la instancia.
     *
     * Cada elemento del array puede ser una función o un objeto
     * con al menos la clave `fn`.
     *
     * @property $validators
     * @type     {Object[]|Function[]|null}
     */


    /**
     * Valor del campo.
     *
     * @property $$value
     * @type     {*}
     *
     * @protected
     * @internal
     */


    (0, _createClass3.default)(jfDataTypeBase, [{
        key: 'setProperties',


        /**
         * Asigna las propiedades de la clase a partir de un objeto.
         *
         * @param {Object} values Valores a asignar.
         */
        value: function setProperties(values) {
            if (values && (typeof values === 'undefined' ? 'undefined' : (0, _typeof3.default)(values)) === 'object') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(values)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _property = _step.value;

                        if (_property[0] !== '$' && _property[0] !== '_' && _property in this) {
                            var _value = values[_property];
                            if (_value !== undefined) {
                                this[_property] = _value;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }

        /**
         * Asigna el valor de la clase.
         *
         * @param {*} value Valor a asignar.
         */

    }, {
        key: 'setValue',
        value: function setValue(value) {
            if (value === null) {
                this.$$value = null;
            } else {
                var _parser = this.constructor.parser;
                this.$$value = typeof _parser === 'function' ? _parser.call(this, value) : value;
            }
        }

        /**
         * @override
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
         */

    }, {
        key: 'toJSON',
        value: function toJSON() {
            return this.value;
        }

        /**
         * @override
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
         */

    }, {
        key: 'toString',
        value: function toString() {
            var _value = this.value;

            return _value === null || _value === undefined ? '' : String(_value);
        }

        /**
         * Valida el valor de la instancia usando los validadores especificados en
         * la propiedad `$validators`.
         *
         * @method validate
         *
         * @return {Boolean} `true` si el valor es válido.
         */

    }, {
        key: 'validate',
        value: function validate() {
            var _isValid = void 0;
            var _value = this.$$value;
            if (_value === null) {
                _isValid = this.$nullable;
            } else {
                var _validators = this.$validators;
                if (_validators) {
                    if (!Array.isArray(_validators)) {
                        _validators = [_validators];
                    }
                    if (_validators.length) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = (0, _getIterator3.default)(_validators), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var _validator = _step2.value;

                                if (typeof _validator === 'function') {
                                    // Si es una función se llama con un solo parámetro, el valor.
                                    _isValid = _validator(_value);
                                } else if (_validator && typeof _validator.fn === 'function') {
                                    // Si es un objeto, se pasa como segundo parámetro el propio
                                    // objeto para permitir configurar el validador.
                                    _isValid = _validator.fn(_value, _validator);
                                } else {
                                    // Si se especificó un validador incorrecto, devolvemos `false`.
                                    _isValid = false;
                                }
                                if (!_isValid) {
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    } else {
                        // Si los validadores están vacíos, damos por bueno cualquier valor.
                        _isValid = true;
                    }
                } else {
                    _isValid = true;
                }
            }

            return _isValid;
        }

        /**
         * Devuelve el valor de la instancia.
         */

    }, {
        key: 'valueOf',


        /**
         * @override
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
         */
        value: function valueOf() {
            return this.validate() ? this.$$value : null;
        }

        /**
         * Construye la instancia del tipo de datos especificado.
         *
         * @method create
         *
         * @param {String|Class} name  Nombre del tipo de dato o referencia de la clase.
         * @param {*?}           value Configuración a aplicar a la nueva instancia.
         *
         * @return {jf.dataType.Base|undefined} Instancia construida.
         *
         * @static
         */

    }, {
        key: 'value',
        get: function get() {
            return this.valueOf();
        }

        /**
         * Asigna el valor de la instancia.
         *
         * @param {*} value Valor a asignar a la instancia.
         */
        ,
        set: function set(value) {
            this.setValue(value);
        }
    }], [{
        key: 'create',
        value: function create(name, value) {
            var _instance = factory.create(name);
            if (_instance) {
                if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && !Array.isArray(value)) {
                    _instance.setProperties(value);
                } else {
                    _instance.value = value;
                }
            }

            return _instance;
        }

        /**
         * Devuelve la instancia de la factoría siendo usada.
         *
         * @return {Factory} Factoría usada.
         */

    }, {
        key: 'is',


        /**
         * Indica si una instancia es de la clase especificada.
         *
         * @param {Object} instance  Instancia a verificar.
         * @param {String} classname Nombre de la clase a comprobar.
         *
         * @return {Boolean} `true` si la instancia es de esa clase.
         */
        value: function is(instance, classname) {
            var _is = false;
            if (instance && classname) {
                var _Class = factory.get(classname);
                if (_Class) {
                    _is = instance.constructor === _Class;
                }
            }

            return _is;
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

    }, {
        key: 'pad',
        value: function pad(value) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var _value = value.toFixed(0);

            return _value.length < length ? ('0'.repeat(length) + _value).substr(-length) : _value;
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

    }, {
        key: 'register',
        value: function register(name, Class) {
            factory.register(name, Class);
        }
    }, {
        key: 'factory',
        get: function get() {
            return factory;
        }
    }]);
    return jfDataTypeBase;
}();
//------------------------------------------------------------------------------


jfDataTypeBase.parser = null;
exports.default = jfDataTypeBase;
factory.register('Base', jfDataTypeBase);

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 60);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 72);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 13 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 52);
var defined = __webpack_require__(/*! ./_defined */ 29);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 9);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);
module.exports = __webpack_require__(/*! ./_descriptors */ 14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 51);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 29);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 24 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 97), __esModule: true };

/***/ }),
/* 27 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 62)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 47)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 28 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 30 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 63);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 32 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var dPs = __webpack_require__(/*! ./_object-dps */ 65);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 35)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 49)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 68).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 34 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 36)('keys');
var uid = __webpack_require__(/*! ./_uid */ 24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 37 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 38 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 9).f;
var has = __webpack_require__(/*! ./_has */ 15);
var TAG = __webpack_require__(/*! ./_wks */ 6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 6);


/***/ }),
/* 40 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 8);
var core = __webpack_require__(/*! ./_core */ 0);
var LIBRARY = __webpack_require__(/*! ./_library */ 30);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 39);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 41 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 42 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 25);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 32);
var has = __webpack_require__(/*! ./_has */ 15);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 43 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 7);
var core = __webpack_require__(/*! ./_core */ 0);
var fails = __webpack_require__(/*! ./_fails */ 19);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 44 */
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 99), __esModule: true };

/***/ }),
/* 45 */
/*!**************************!*\
  !*** ./src/DateTime.mjs ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 105);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var customSymbols = {
    d: function d(date) {
        return date.getDate();
    },
    dd: function dd(date) {
        return jfDataTypeDateTime.pad(date.getDate());
    },
    H: function H(date) {
        return date.getHours();
    },
    HH: function HH(date) {
        return jfDataTypeDateTime.pad(date.getHours());
    },
    m: function m(date) {
        return date.getMinutes();
    },
    mm: function mm(date) {
        return jfDataTypeDateTime.pad(date.getMinutes());
    },
    M: function M(date) {
        return date.getMonth() + 1;
    },
    MM: function MM(date) {
        return jfDataTypeDateTime.pad(date.getMonth() + 1);
    },
    s: function s(date) {
        return date.getSeconds();
    },
    ss: function ss(date) {
        return jfDataTypeDateTime.pad(date.getSeconds());
    },
    y: function y(date) {
        return date.getFullYear();
    },
    yy: function yy(date) {
        return date.getFullYear().toString().substr(-2);
    },
    yyyy: function yyyy(date) {
        return date.getFullYear();
    }
};
/**
 * Clase para el manejo de fechas que incluyen las horas.
 * Dependiendo del formato recibido del servidor podría usarse
 * la propiedad `parser` para definir el analizador del valor
 * de entrada.
 *
 * ```
 * // Diferentes ejemplos de lo que debería retornar esta función
 * // para un formato de entrada `dd/mm/YYYY`
 * jfDataTypeDateTime.parser = function(value)
 * {
 *     const _parts = value.split('/');
 *
 *     return [
 *         parseInt(_parts[2], 10),
 *         parseInt(_parts[1], 10) - 1,
 *         parseInt(_parts[0], 10),
 *     ]
 * }
 * jfDataTypeDateTime.parser = function(value)
 * {
 *     const _parts = value.split('/');
 *
 *     return new Date(
 *         parseInt(_parts[2], 10),
 *         parseInt(_parts[1], 10) - 1,
 *         parseInt(_parts[0], 10),
 *     );
 * }
 * jfDataTypeDateTime.parser = function(value)
 * {
 *     return value.split('/').reverse().join('-');
 * }
 * //
 * const _date = new jfDataTypeDateTime();
 * console.log(_date.setValue('15/01/2017'));
 * ```
 *
 * @namespace jf.dataType
 * @class     jf.dataType.DateTime
 * @extends   jf.dataType.Base
 */

var jfDataTypeDateTime = function (_jfDataTypeBase) {
    (0, _inherits3.default)(jfDataTypeDateTime, _jfDataTypeBase);

    function jfDataTypeDateTime() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, jfDataTypeDateTime);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeDateTime.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeDateTime)).call.apply(_ref, [this].concat(args))), _this), _this.format = '', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    /**
     * @override
     */


    /**
     * Formato por defecto para convertir la fecha en texto.
     *
     * @property defaultFormat
     * @type     {String}
     * @static
     */


    /**
     * Formato a usar para convertir la fecha en texto.
     * Si no se especifica se usa `defaultFormat`.
     *
     * @property format
     * @type     {String}
     */


    (0, _createClass3.default)(jfDataTypeDateTime, [{
        key: 'toJSON',


        /**
         * @override
         */
        value: function toJSON() {
            var _value = this.value;

            return _value === null ? (0, _get3.default)(jfDataTypeDateTime.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeDateTime.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'yyyy-MM-ddTHH:mm:ss');
        }

        /**
         * @override
         */

    }, {
        key: 'toString',
        value: function toString() {
            var _value = this.value;

            return _value === null ? (0, _get3.default)(jfDataTypeDateTime.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeDateTime.prototype), 'toString', this).call(this) : this.constructor.formatDate(_value, this.format || this.constructor.defaultFormat);
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

    }], [{
        key: 'addSymbol',
        value: function addSymbol(symbol, handler) {
            customSymbols[symbol] = handler;
        }

        /**
         * Formatea una fecha convirtiéndola a texto.
         *
         * @param {Date}    date   Fecha a formatear.
         * @param {String?} format Formato de la fecha.
         */

    }, {
        key: 'formatDate',
        value: function formatDate(date, format) {
            var _result = '';
            if (date instanceof Date) {
                _result = format && typeof format === 'string' ? format.replace(/(\w)\1{0,3}/g, function (symbol) {
                    return symbol in customSymbols ? customSymbols[symbol](date) : symbol;
                }) : date.toISOString();
            }
            return _result;
        }
    }]);
    return jfDataTypeDateTime;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeDateTime.parser = function (value) {
    switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
        case 'number':
            if (value > 0) {
                value = new Date(value);
            }
            break;
        case 'object':
            if (Array.isArray(value) && value.length) {
                value = new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(value))))();
            }
            break;
        case 'string':
            var _time = Date.parse(value);
            if (!isNaN(_time)) {
                value = new Date(_time);
            }
            break;
    }
    return value instanceof Date ? value : null;
};

jfDataTypeDateTime.defaultFormat = 'yyyy-MM-dd HH:mm:ss';
exports.default = jfDataTypeDateTime;
jfDataTypeDateTime.register('DateTime', jfDataTypeDateTime);

/***/ }),
/* 46 */
/*!***********************!*\
  !*** ./src/Float.mjs ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _formatDecimal = __webpack_require__(/*! format-decimal */ 114);

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de números decimales.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Float
 * @extends   jf.dataType.Base
 * @uses      jf.formatDecimal
 */
var jfDataTypeFloat = function (_jfDataTypeBase) {
  (0, _inherits3.default)(jfDataTypeFloat, _jfDataTypeBase);

  function jfDataTypeFloat() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, jfDataTypeFloat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeFloat.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeFloat)).call.apply(_ref, [this].concat(args))), _this), _this.decimal = ',', _this.precision = 2, _this.thousands = '.', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /**
   * @override
   */


  /**
   * Símbolo a usar para el punto decimal.
   *
   * @property decimal
   * @type     {String}
   */


  /**
   * Número de decimales a mostrar
   *
   * @property precision
   * @type     {Number}
   */


  /**
   * Símbolo a usar para los separadores de miles.
   *
   * @property thousands
   * @type     {String}
   */


  (0, _createClass3.default)(jfDataTypeFloat, [{
    key: 'toString',


    /**
     *
     * @override
     */
    value: function toString() {
      var _value = this.value;

      return typeof _value === 'number' ? (0, _formatDecimal2.default)(_value, this) : '';
    }
  }]);
  return jfDataTypeFloat;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeFloat.parser = function (value) {
  var _value = parseFloat(value);

  return isNaN(_value) ? null : _value;
};

exports.default = jfDataTypeFloat;
jfDataTypeFloat.register('Float', jfDataTypeFloat);

/***/ }),
/* 47 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 30);
var $export = __webpack_require__(/*! ./_export */ 7);
var redefine = __webpack_require__(/*! ./_redefine */ 50);
var hide = __webpack_require__(/*! ./_hide */ 17);
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 64);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 54);
var ITERATOR = __webpack_require__(/*! ./_wks */ 6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 48 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 14) && !__webpack_require__(/*! ./_fails */ 19)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 49)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 18);
var document = __webpack_require__(/*! ./_global */ 8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 50 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 17);


/***/ }),
/* 51 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 15);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 66)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 15);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 69);
var global = __webpack_require__(/*! ./_global */ 8);
var hide = __webpack_require__(/*! ./_hide */ 17);
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 56 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 51);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 101);
var ITERATOR = __webpack_require__(/*! ./_wks */ 6)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
module.exports = __webpack_require__(/*! ./_core */ 0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 58 */
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Array = __webpack_require__(/*! ./Array */ 59);

var _Array2 = _interopRequireDefault(_Array);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

var _Boolean = __webpack_require__(/*! ./Boolean */ 103);

var _Boolean2 = _interopRequireDefault(_Boolean);

var _Date = __webpack_require__(/*! ./Date */ 104);

var _Date2 = _interopRequireDefault(_Date);

var _DateTime = __webpack_require__(/*! ./DateTime */ 45);

var _DateTime2 = _interopRequireDefault(_DateTime);

var _Enum = __webpack_require__(/*! ./Enum */ 113);

var _Enum2 = _interopRequireDefault(_Enum);

var _Float = __webpack_require__(/*! ./Float */ 46);

var _Float2 = _interopRequireDefault(_Float);

var _Integer = __webpack_require__(/*! ./Integer */ 115);

var _Integer2 = _interopRequireDefault(_Integer);

var _Money = __webpack_require__(/*! ./Money */ 116);

var _Money2 = _interopRequireDefault(_Money);

var _Object = __webpack_require__(/*! ./Object */ 117);

var _Object2 = _interopRequireDefault(_Object);

var _String = __webpack_require__(/*! ./String */ 123);

var _String2 = _interopRequireDefault(_String);

var _Time = __webpack_require__(/*! ./Time */ 124);

var _Time2 = _interopRequireDefault(_Time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Índice del paquete.
 *
 * @author    Joaquín Fernández
 * @namespace jf.dataType
 */
exports.default = {
    'Array': _Array2.default,
    'Base': _Base2.default,
    'Boolean': _Boolean2.default,
    'Date': _Date2.default,
    'DateTime': _DateTime2.default,
    'Enum': _Enum2.default,
    'Float': _Float2.default,
    'Integer': _Integer2.default,
    'Money': _Money2.default,
    'Object': _Object2.default,
    'String': _String2.default,
    'Time': _Time2.default
};

/***/ }),
/* 59 */
/*!***********************!*\
  !*** ./src/Array.mjs ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de arrays de un solo tipo de datos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Array
 * @extends   jf.dataType.Base
 */
var jfDataTypeArray = function (_jfDataTypeBase) {
    (0, _inherits3.default)(jfDataTypeArray, _jfDataTypeBase);

    function jfDataTypeArray() {
        (0, _classCallCheck3.default)(this, jfDataTypeArray);
        return (0, _possibleConstructorReturn3.default)(this, (jfDataTypeArray.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeArray)).apply(this, arguments));
    }

    (0, _createClass3.default)(jfDataTypeArray, [{
        key: 'valueOf',


        /**
         * @override
         */

        /**
         * Valores de configuración por defecto para cada elemento del array.
         *
         * @property defaults
         * @type     {Object}
         * @static
         */
        value: function valueOf() {
            var _value = (0, _get3.default)(jfDataTypeArray.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeArray.prototype), 'valueOf', this).call(this);

            return Array.isArray(_value) ? _value.map(function (v) {
                return v instanceof _Base2.default ? v.valueOf() : v;
            }) : null;
        }
        /**
         * @override
         */

    }]);
    return jfDataTypeArray;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeArray.defaults = {
    config: {},
    type: 'String'
};

jfDataTypeArray.parser = function (value) {
    if (Array.isArray(value)) {
        if (value.length) {
            var _Class = this.constructor;
            var _defaults = _Class.defaults;
            var _config = _defaults.config;
            var _hasConfig = _config && (typeof _config === 'undefined' ? 'undefined' : (0, _typeof3.default)(_config)) === 'object';
            var _type = _defaults.type;
            value = value.map(function (value) {
                if (!(value instanceof _Base2.default)) {
                    value = _Class.create(_type, value);
                    if (value && _hasConfig) {
                        value.setProperties(_config);
                    }
                }

                return value;
            }).filter(Boolean);
        } else {
            value = [];
        }
    } else {
        value = null;
    }
    return value;
};

exports.default = jfDataTypeArray;
jfDataTypeArray.register('Array', jfDataTypeArray);

/***/ }),
/* 60 */
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 61), __esModule: true };

/***/ }),
/* 61 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 27);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 55);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 39).f('iterator');


/***/ }),
/* 62 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 28);
var defined = __webpack_require__(/*! ./_defined */ 29);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 63 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 64 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 33);
var descriptor = __webpack_require__(/*! ./_property-desc */ 20);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 17)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 65 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 9);
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var getKeys = __webpack_require__(/*! ./_object-keys */ 22);

module.exports = __webpack_require__(/*! ./_descriptors */ 14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var toLength = __webpack_require__(/*! ./_to-length */ 53);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 67);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 67 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 68 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 69 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 70);
var step = __webpack_require__(/*! ./_iter-step */ 71);
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 47)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 70 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 71 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 72 */
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 73), __esModule: true };

/***/ }),
/* 73 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 74);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 79);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 80);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 81);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Symbol;


/***/ }),
/* 74 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 8);
var has = __webpack_require__(/*! ./_has */ 15);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 14);
var $export = __webpack_require__(/*! ./_export */ 7);
var redefine = __webpack_require__(/*! ./_redefine */ 50);
var META = __webpack_require__(/*! ./_meta */ 75).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 19);
var shared = __webpack_require__(/*! ./_shared */ 36);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var uid = __webpack_require__(/*! ./_uid */ 24);
var wks = __webpack_require__(/*! ./_wks */ 6);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 39);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 40);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 76);
var isArray = __webpack_require__(/*! ./_is-array */ 77);
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var isObject = __webpack_require__(/*! ./_is-object */ 18);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 32);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);
var _create = __webpack_require__(/*! ./_object-create */ 33);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 78);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 42);
var $DP = __webpack_require__(/*! ./_object-dp */ 9);
var $keys = __webpack_require__(/*! ./_object-keys */ 22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 25).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 41).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 30)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 75 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 24)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 18);
var has = __webpack_require__(/*! ./_has */ 15);
var setDesc = __webpack_require__(/*! ./_object-dp */ 9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 19)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 76 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 22);
var gOPS = __webpack_require__(/*! ./_object-gops */ 41);
var pIE = __webpack_require__(/*! ./_object-pie */ 25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 77 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 34);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 78 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 56).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 79 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 80 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 40)('asyncIterator');


/***/ }),
/* 81 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 40)('observable');


/***/ }),
/* 82 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 83);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.getPrototypeOf;


/***/ }),
/* 83 */
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 54);

__webpack_require__(/*! ./_object-sap */ 43)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 84 */
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 85), __esModule: true };

/***/ }),
/* 85 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 86);
var $Object = __webpack_require__(/*! ../../modules/_core */ 0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 86 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 14), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 9).f });


/***/ }),
/* 87 */
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 88), __esModule: true };

/***/ }),
/* 88 */
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 89);
var $Object = __webpack_require__(/*! ../../modules/_core */ 0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 89 */
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 42).f;

__webpack_require__(/*! ./_object-sap */ 43)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 90 */
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 91), __esModule: true };

/***/ }),
/* 91 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 92);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.setPrototypeOf;


/***/ }),
/* 92 */
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 93).set });


/***/ }),
/* 93 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 18);
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 31)(Function.call, __webpack_require__(/*! ./_object-gopd */ 42).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 94 */
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 95), __esModule: true };

/***/ }),
/* 95 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 96);
var $Object = __webpack_require__(/*! ../../modules/_core */ 0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 96 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 33) });


/***/ }),
/* 97 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ 98);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.keys;


/***/ }),
/* 98 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var $keys = __webpack_require__(/*! ./_object-keys */ 22);

__webpack_require__(/*! ./_object-sap */ 43)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 99 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 55);
__webpack_require__(/*! ../modules/es6.string.iterator */ 27);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 100);


/***/ }),
/* 100 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 13);
var get = __webpack_require__(/*! ./core.get-iterator-method */ 57);
module.exports = __webpack_require__(/*! ./_core */ 0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 101 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 34);
var TAG = __webpack_require__(/*! ./_wks */ 6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 102 */
/*!******************************************!*\
  !*** ./node_modules/jf-factory/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 26);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 44);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Instancias de factorías.
 * Permite usar la clase como un singleton.
 *
 * @type {Object}
 */
var instances = {};
/**
 * Clase usada como una factoría de instancias.
 * Se pueden crear distintas instancias para manejar diferentes registros.
 * Si solamente se desea un registro, se puede usar como un singleton
 * llamando al método `i()`.
 *
 * @namespace jf
 * @class     jf.Factory
 */
module.exports = function () {
    /**
     * Constructor de la clase.
     *
     * @constructor
     */
    function Factory() {
        (0, _classCallCheck3.default)(this, Factory);

        /**
         * Nombre del método de inicialización a llamar cuando se pase
         * una configuración al método `build`.
         *
         * Usando `babel` las subclases que hacen uso del plugin
         * `babel-plugin-transform-class-properties` no pueden asignar
         * los valores recibidos en el constructor ya que se asignan
         * las propiedades usando este plugin después de asignar esos
         * valores y se pierden la asignación anterior.
         *
         * @property initMethod
         * @type     {String}
         */
        this.initMethod = '';
        /**
         * Registro de clases.
         *
         * @property $$registry
         * @type     {Object}
         * @internal
         */
        this.$$registry = {};
    }

    /**
     * Crea una instancia de una clase registrada.
     *
     * @method create
     *
     * @param {String} name   Nombre con el que se ha registrado la clase.
     * @param {*?}     config Configuración a aplicar a la nueva instancia.
     *
     * @return {Class} Instancia de la clase construida o `undefined` si no existe la clase.
     */


    (0, _createClass3.default)(Factory, [{
        key: 'create',
        value: function create(name, config) {
            var _instance = void 0;
            var _Class = typeof name === 'function' ? name : this.get(name);
            if (_Class && typeof _Class === 'function') {
                // En algunos casos usando `babel` el pasar `config` como parámetro no
                // permite asignar las propiedades. En esos casos se debe usar un método auxiliar.
                var _initMethod = this.initMethod;
                if (_initMethod) {
                    _instance = new _Class();
                    if (typeof _instance[_initMethod] === 'function') {
                        _instance[_initMethod](config);
                    }
                } else {
                    _instance = new _Class(config);
                }
            }

            return _instance;
        }

        /**
         * Permite limpiar el registro para liberar la memoria al eliminar las referencias.
         *
         * @method clear
         *
         * @param {String} method Nombre del método que se llamará en cada clase registrada antes de eliminarse.
         *                        Si retorna `false` no se elimina del registro.
         */

    }, {
        key: 'clear',
        value: function clear() {
            var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (method) {
                var _registry = this.$$registry;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(_registry)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _name = _step.value;

                        var _Class = _registry[_name];
                        if (typeof _Class[_name] === 'function' && _Class[_name]() !== false) {
                            delete _registry[_name];
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {
                this.$$registry = {};
            }
        }

        /**
         * Devuelve la referencia de la clase que corresponde con el nombre especificado.
         *
         * @method get
         *
         * @param {String} name Nombre que hace referencia a la clase que se desea recuperar.
         */

    }, {
        key: 'get',
        value: function get(name) {
            return this.$$registry[name];
        }

        /**
         * Registra la referencia de una clase.
         *
         * @method register
         *
         * @param {String} name  Nombre con el que registrará la clase.
         * @param {Class}  Class Referencia de la clase a registrar.
         */

    }, {
        key: 'register',
        value: function register(name, Class) {
            this.$$registry[name] = Class;
        }

        /**
         * Elimina una clase del registro.
         *
         * @method unregister
         *
         * @param {String} name Nombre con el que se registró la clase.
         */

    }, {
        key: 'unregister',
        value: function unregister(name) {
            delete this.$$registry[name];
        }

        /**
         * Devuelve la instancia de la factoría usada como singleton.
         * Si no se ha creado previamente, se crea una nueva.
         *
         * @method i
         *
         * @param {String} name Nombre de la factoría a construir.
         *
         * @return {Factory}
         *
         * @static
         */

    }], [{
        key: 'i',
        value: function i() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (!(name in instances)) {
                instances[name] = new Factory();
            }

            return instances[name];
        }
    }]);
    return Factory;
}();

/***/ }),
/* 103 */
/*!*************************!*\
  !*** ./src/Boolean.mjs ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 26);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de valores booleanos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Boolean
 * @extends   jf.dataType.Base
 */
var jfDataTypeBoolean = function (_jfDataTypeBase) {
    (0, _inherits3.default)(jfDataTypeBoolean, _jfDataTypeBase);

    function jfDataTypeBoolean() {
        (0, _classCallCheck3.default)(this, jfDataTypeBoolean);
        return (0, _possibleConstructorReturn3.default)(this, (jfDataTypeBoolean.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeBoolean)).apply(this, arguments));
    }

    (0, _createClass3.default)(jfDataTypeBoolean, [{
        key: 'toString',


        /**
         * @override
         */
        value: function toString() {
            var _value = this.value;

            return _value === null ? (0, _get3.default)(jfDataTypeBoolean.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeBoolean.prototype), 'toString', this).call(this) : _value ? 'true' : 'false';
        }
        /**
         * @override
         */

    }]);
    return jfDataTypeBoolean;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeBoolean.parser = function (value) {
    // Si es un objeto y no tiene claves se asumirá como un valor vacío y el valor asignado será `false`.
    if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && !Array.isArray(value)) {
        value = (0, _keys2.default)(value);
    }

    return value === 'off' || value === '0' || Array.isArray(value) && value.length === 0 ? false : Boolean(value);
};

exports.default = jfDataTypeBoolean;
jfDataTypeBoolean.register('Boolean', jfDataTypeBoolean);

/***/ }),
/* 104 */
/*!**********************!*\
  !*** ./src/Date.mjs ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DateTime = __webpack_require__(/*! ./DateTime */ 45);

var _DateTime2 = _interopRequireDefault(_DateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de fechas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Date
 * @extends   jf.dataType.DateTime
 */
var jfDataTypeDate = function (_jfDataTypeDateTime) {
  (0, _inherits3.default)(jfDataTypeDate, _jfDataTypeDateTime);

  function jfDataTypeDate() {
    (0, _classCallCheck3.default)(this, jfDataTypeDate);
    return (0, _possibleConstructorReturn3.default)(this, (jfDataTypeDate.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeDate)).apply(this, arguments));
  }

  (0, _createClass3.default)(jfDataTypeDate, [{
    key: 'toJSON',


    /**
     * @override
     */
    value: function toJSON() {
      var _value = this.value;

      return _value === null ? (0, _get3.default)(jfDataTypeDate.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeDate.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'yyyy-MM-dd');
    }
    /**
     * @override
     */

  }]);
  return jfDataTypeDate;
}(_DateTime2.default);
//------------------------------------------------------------------------------


jfDataTypeDate.defaultFormat = 'yyyy-MM-dd';
exports.default = jfDataTypeDate;
jfDataTypeDate.register('Date', jfDataTypeDate);

/***/ }),
/* 105 */
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ 106);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 106 */
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 107), __esModule: true };

/***/ }),
/* 107 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 27);
__webpack_require__(/*! ../../modules/es6.array.from */ 108);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Array.from;


/***/ }),
/* 108 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ 31);
var $export = __webpack_require__(/*! ./_export */ 7);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var call = __webpack_require__(/*! ./_iter-call */ 109);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 110);
var toLength = __webpack_require__(/*! ./_to-length */ 53);
var createProperty = __webpack_require__(/*! ./_create-property */ 111);
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 57);

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 112)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 109 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ 13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 110 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
var ITERATOR = __webpack_require__(/*! ./_wks */ 6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 111 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ 9);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 112 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ 6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 113 */
/*!**********************!*\
  !*** ./src/Enum.mjs ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para manejar enumeraciones.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Enum
 * @extends   jf.dataType.Base
 */
var jfDataTypeEnum = function (_jfDataTypeBase) {
  (0, _inherits3.default)(jfDataTypeEnum, _jfDataTypeBase);

  /**
   * @override
   */


  /**
   * Valor a seleccionar por defecto.
   *
   * @property $defValue
   * @type     {*}
   */
  function jfDataTypeEnum() {
    var _ref;

    (0, _classCallCheck3.default)(this, jfDataTypeEnum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeEnum.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeEnum)).call.apply(_ref, [this].concat(args)));

    _this.$allowedValues = [];
    _this.$defValue = null;

    _this.$validators = [function (value) {
      return _this.$allowedValues.includes(value);
    }];
    return _this;
  }

  /**
   * Selecciona el valor por defecto.
   *
   * @method loadDefault
   */


  /**
   * @override
   */

  /**
   * Valores permitidos.
   *
   * @property $allowedValues
   * @type     {Array}
   */


  (0, _createClass3.default)(jfDataTypeEnum, [{
    key: 'loadDefault',
    value: function loadDefault() {
      var _default = this.$defValue;
      this.value = this.$allowedValues.includes(_default) ? _default : null;
    }
  }]);
  return jfDataTypeEnum;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeEnum.parser = function (value) {
  return this.$allowedValues.includes(value) ? value : null;
};

exports.default = jfDataTypeEnum;
_Base2.default.register('Enum', jfDataTypeEnum);

/***/ }),
/* 114 */
/*!**********************************************!*\
  !*** ./node_modules/format-decimal/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Devuelve el número especificado formateado con los separadores especificados.
 *
 * @param {Number}  value            Valor a formatear.
 * @param {Object}  config           Configuración para modificar el resultado.
 * @param {String}  config.decimal   Símbolo a usar para el punto decimal (`,` por defecto).
 * @param {Number}  config.precision Número de dígitos decimales a mostrar (`2` por defecto).
 * @param {String}  config.thousands Separador de miles ('.' por defecto).
 *
 * @return {String} Número formateado.
 */
module.exports = function FormatDecimal(value, config)
{
    if (!Number.isFinite(value))
    {
        throw new TypeError(`You MUST specify a finite number, not [${typeof value} = ${value}]`);
    }
    if (!config)
    {
        config = {};
    }
    //------------------------------------------------------------------------------
    // Configuración del resultado.
    //------------------------------------------------------------------------------
    var _decimal   = typeof config.decimal === 'string'
        ? config.decimal
        : ',';
    var _precision = typeof config.precision === 'number'
        ? config.precision
        : 2;
    var _thousands = typeof config.thousands === 'string'
        ? config.thousands
        : '.';
    //------------------------------------------------------------------------------
    // Obtención del resultado.
    //------------------------------------------------------------------------------
    var _parts = value.toFixed(_precision).split('.');
    _parts[0]  = _parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, _thousands);
    //
    return _parts.join(_decimal);
};


/***/ }),
/* 115 */
/*!*************************!*\
  !*** ./src/Integer.mjs ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Float = __webpack_require__(/*! ./Float */ 46);

var _Float2 = _interopRequireDefault(_Float);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de números enteros.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Integer
 * @extends   jf.dataType.Float
 */
var jfDataTypeInteger = function (_jfDataTypeFloat) {
  (0, _inherits3.default)(jfDataTypeInteger, _jfDataTypeFloat);

  function jfDataTypeInteger() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, jfDataTypeInteger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeInteger.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeInteger)).call.apply(_ref, [this].concat(args))), _this), _this.precision = 0, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /**
   * @override
   */


  /**
   * @override
   */


  return jfDataTypeInteger;
}(_Float2.default);
//------------------------------------------------------------------------------


jfDataTypeInteger.parser = function (value) {
  var _value = parseInt(value, 10);

  return isNaN(_value) ? null : _value;
};

exports.default = jfDataTypeInteger;
jfDataTypeInteger.register('Integer', jfDataTypeInteger);

/***/ }),
/* 116 */
/*!***********************!*\
  !*** ./src/Money.mjs ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Float = __webpack_require__(/*! ./Float */ 46);

var _Float2 = _interopRequireDefault(_Float);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de cantidades monetarias.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Money
 * @extends   jf.dataType.Float
 */
var jfDataTypeMoney = function (_jfDataTypeFloat) {
    (0, _inherits3.default)(jfDataTypeMoney, _jfDataTypeFloat);

    function jfDataTypeMoney() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, jfDataTypeMoney);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeMoney.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeMoney)).call.apply(_ref, [this].concat(args))), _this), _this.currency = '€', _this.position = 'right', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(jfDataTypeMoney, [{
        key: 'toString',


        /**
         * @override
         */
        value: function toString() {
            var _value = (0, _get3.default)(jfDataTypeMoney.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeMoney.prototype), 'toString', this).call(this);
            if (_value && this.currency) {
                var _position = this.position;
                if (_position === jfDataTypeMoney.LEFT) {
                    _value = this.currency + _value;
                } else if (_position === jfDataTypeMoney.RIGHT) {
                    _value += this.currency;
                }
            }
            return _value;
        }
    }], [{
        key: 'LEFT',

        /**
         * Constante para indicar que el símbolo monetario debe ir
         * a la izquierda de la cantidad numérica.
         *
         * @const LEFT
         * @type  {String}
         */
        get: function get() {
            return 'left';
        }

        /**
         * Constante para indicar que el símbolo monetario debe ir
         * a la derecha de la cantidad numérica.
         *
         * @const RIGHT
         * @type  {String}
         */

    }, {
        key: 'RIGHT',
        get: function get() {
            return 'right';
        }
        /**
         * Símbolo de la moneda.
         *
         * @property currency
         * @type     {String}
         */

        /**
         * Posición del símbolo.
         *
         * @property position
         * @type     {String}
         */

    }]);
    return jfDataTypeMoney;
}(_Float2.default);
//------------------------------------------------------------------------------


exports.default = jfDataTypeMoney;
jfDataTypeMoney.register('Money', jfDataTypeMoney);

/***/ }),
/* 117 */
/*!************************!*\
  !*** ./src/Object.mjs ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 118);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 26);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 44);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de objetos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Object
 * @extends   jf.dataType.Base
 */
var jfDataTypeObject = function (_jfDataTypeBase) {
    (0, _inherits3.default)(jfDataTypeObject, _jfDataTypeBase);

    function jfDataTypeObject() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, jfDataTypeObject);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = jfDataTypeObject.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeObject)).call.apply(_ref, [this].concat(args))), _this), _this.$propertyMap = null, _this.$propertyTypes = null, _this.$useMap = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    /**
     * Mapea las propiedades de la instancia con nuevos nombres
     * permitiendo cambiar al vuelo la asignación de los valores.
     *
     * @property $propertyMap
     * @type     {Object|null}
     */


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


    /**
     * Indica si se usa el mapeo cuando se devuelven los valores.
     *
     * @type {Boolean}
     */


    (0, _createClass3.default)(jfDataTypeObject, [{
        key: '_remap',


        /**
         * Mapea los valores con nombres de propiedades de la instancia.
         *
         * @method _remap
         *
         * @param {Object} values Valores a remapear.
         *
         * @protected
         */
        value: function _remap(values) {
            var _map = this.$propertyMap;
            if (_map && (typeof _map === 'undefined' ? 'undefined' : (0, _typeof3.default)(_map)) === 'object') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(_map)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _property = _step.value;

                        var _oldName = _map[_property];
                        if (_oldName in values) {
                            values[_property] = values[_oldName];
                            delete values[_oldName];
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }

        /**
         * @override
         */

    }, {
        key: 'setValue',
        value: function setValue(value) {
            if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
                var _propertyTpes = this.$propertyTypes;
                if (_propertyTpes && (typeof _propertyTpes === 'undefined' ? 'undefined' : (0, _typeof3.default)(_propertyTpes)) === 'object') {
                    var _Class = this.constructor;
                    var _value = (0, _extends3.default)({}, value);
                    this._remap(_value);
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(_value)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _property = _step2.value;

                            if (_property in _propertyTpes) {
                                this[_property] = _Class.create(_propertyTpes[_property], _value[_property]);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }
            (0, _get3.default)(jfDataTypeObject.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeObject.prototype), 'setValue', this).call(this, null);
        }

        /**
         * @override
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            var _values = {};
            var _propertyTpes = this.$propertyTypes;
            if (_propertyTpes && (typeof _propertyTpes === 'undefined' ? 'undefined' : (0, _typeof3.default)(_propertyTpes)) === 'object') {
                var _map = this.$useMap ? this.$propertyMap || {} : {};
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(_propertyTpes)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _name = _step3.value;

                        var _value = this[_name];
                        if (_value !== undefined) {
                            _values[_map[_name] || _name] = _value instanceof _Base2.default ? _value.value : _value;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }

            return _values;
        }

        /**
         * @override
         */

    }, {
        key: 'setProperties',
        value: function setProperties(values) {
            this.setValue(values);
        }
    }]);
    return jfDataTypeObject;
}(_Base2.default);
//------------------------------------------------------------------------------


exports.default = jfDataTypeObject;
jfDataTypeObject.register('Object', jfDataTypeObject);

/***/ }),
/* 118 */
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ 119);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 119 */
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 120), __esModule: true };

/***/ }),
/* 120 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 121);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.assign;


/***/ }),
/* 121 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 122) });


/***/ }),
/* 122 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ 22);
var gOPS = __webpack_require__(/*! ./_object-gops */ 41);
var pIE = __webpack_require__(/*! ./_object-pie */ 25);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var IObject = __webpack_require__(/*! ./_iobject */ 52);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 19)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 123 */
/*!************************!*\
  !*** ./src/String.mjs ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Base = __webpack_require__(/*! ./Base */ 11);

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de textos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.String
 * @extends   jf.dataType.Base
 */
var jfDataTypeString = function (_jfDataTypeBase) {
  (0, _inherits3.default)(jfDataTypeString, _jfDataTypeBase);

  function jfDataTypeString() {
    (0, _classCallCheck3.default)(this, jfDataTypeString);
    return (0, _possibleConstructorReturn3.default)(this, (jfDataTypeString.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeString)).apply(this, arguments));
  }

  (0, _createClass3.default)(jfDataTypeString, [{
    key: 'toString',


    /**
     * @override
     */
    value: function toString() {
      var _value = this.value;

      return _value === null ? (0, _get3.default)(jfDataTypeString.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeString.prototype), 'toString', this).call(this) : String(_value || '');
    }
    /**
     * @override
     */

  }]);
  return jfDataTypeString;
}(_Base2.default);
//------------------------------------------------------------------------------


jfDataTypeString.parser = function (value) {
  return value === null || value === undefined ? '' : String(value);
};

exports.default = jfDataTypeString;
jfDataTypeString.register('String', jfDataTypeString);

/***/ }),
/* 124 */
/*!**********************!*\
  !*** ./src/Time.mjs ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ 10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DateTime = __webpack_require__(/*! ./DateTime */ 45);

var _DateTime2 = _interopRequireDefault(_DateTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clase para el manejo de horas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Time
 * @extends   jf.dataType.DateTime
 */
var jfDataTypeTime = function (_jfDataTypeDateTime) {
  (0, _inherits3.default)(jfDataTypeTime, _jfDataTypeDateTime);

  function jfDataTypeTime() {
    (0, _classCallCheck3.default)(this, jfDataTypeTime);
    return (0, _possibleConstructorReturn3.default)(this, (jfDataTypeTime.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeTime)).apply(this, arguments));
  }

  (0, _createClass3.default)(jfDataTypeTime, [{
    key: 'toJSON',


    /**
     * @override
     */
    value: function toJSON() {
      var _value = this.value;

      return _value === null ? (0, _get3.default)(jfDataTypeTime.prototype.__proto__ || (0, _getPrototypeOf2.default)(jfDataTypeTime.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'HH:mm:ss');
    }
    /**
     * @override
     */

  }]);
  return jfDataTypeTime;
}(_DateTime2.default);
//------------------------------------------------------------------------------


jfDataTypeTime.defaultFormat = 'HH:mm';
exports.default = jfDataTypeTime;
jfDataTypeTime.register('Time', jfDataTypeTime);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZDliMzIyYTNmODNiMWY4NWI4OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zsb2F0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubWpzIiwid2VicGFjazovLy8uL3NyYy9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamYtZmFjdG9yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbi5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtYXQtZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZWdlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vbmV5Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmcubWpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lLm1qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiaSIsImluaXRNZXRob2QiLCJqZkRhdGFUeXBlQmFzZSIsIiRudWxsYWJsZSIsIiR2YWxpZGF0b3JzIiwiJCR2YWx1ZSIsInZhbHVlcyIsIl9wcm9wZXJ0eSIsIl92YWx1ZSIsInVuZGVmaW5lZCIsInZhbHVlIiwiX3BhcnNlciIsImNvbnN0cnVjdG9yIiwicGFyc2VyIiwiY2FsbCIsIlN0cmluZyIsIl9pc1ZhbGlkIiwiX3ZhbGlkYXRvcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJfdmFsaWRhdG9yIiwiZm4iLCJ2YWxpZGF0ZSIsInZhbHVlT2YiLCJzZXRWYWx1ZSIsIm5hbWUiLCJfaW5zdGFuY2UiLCJjcmVhdGUiLCJzZXRQcm9wZXJ0aWVzIiwiaW5zdGFuY2UiLCJjbGFzc25hbWUiLCJfaXMiLCJfQ2xhc3MiLCJnZXQiLCJ0b0ZpeGVkIiwicmVwZWF0Iiwic3Vic3RyIiwiQ2xhc3MiLCJyZWdpc3RlciIsImN1c3RvbVN5bWJvbHMiLCJkIiwiZGF0ZSIsImdldERhdGUiLCJkZCIsImpmRGF0YVR5cGVEYXRlVGltZSIsInBhZCIsIkgiLCJnZXRIb3VycyIsIkhIIiwibSIsImdldE1pbnV0ZXMiLCJtbSIsIk0iLCJnZXRNb250aCIsIk1NIiwicyIsImdldFNlY29uZHMiLCJzcyIsInkiLCJnZXRGdWxsWWVhciIsInl5IiwidG9TdHJpbmciLCJ5eXl5IiwiZm9ybWF0IiwiZm9ybWF0RGF0ZSIsImRlZmF1bHRGb3JtYXQiLCJzeW1ib2wiLCJoYW5kbGVyIiwiX3Jlc3VsdCIsIkRhdGUiLCJyZXBsYWNlIiwidG9JU09TdHJpbmciLCJfdGltZSIsInBhcnNlIiwiaXNOYU4iLCJqZkRhdGFUeXBlRmxvYXQiLCJkZWNpbWFsIiwicHJlY2lzaW9uIiwidGhvdXNhbmRzIiwicGFyc2VGbG9hdCIsImpmRGF0YVR5cGVBcnJheSIsIm1hcCIsInYiLCJkZWZhdWx0cyIsImNvbmZpZyIsInR5cGUiLCJfZGVmYXVsdHMiLCJfY29uZmlnIiwiX2hhc0NvbmZpZyIsIl90eXBlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImluc3RhbmNlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCIkJHJlZ2lzdHJ5IiwiX2luaXRNZXRob2QiLCJtZXRob2QiLCJfcmVnaXN0cnkiLCJfbmFtZSIsIkZhY3RvcnkiLCJqZkRhdGFUeXBlQm9vbGVhbiIsImpmRGF0YVR5cGVEYXRlIiwiamZEYXRhVHlwZUVudW0iLCJhcmdzIiwiJGFsbG93ZWRWYWx1ZXMiLCIkZGVmVmFsdWUiLCJpbmNsdWRlcyIsIl9kZWZhdWx0IiwiamZEYXRhVHlwZUludGVnZXIiLCJwYXJzZUludCIsImpmRGF0YVR5cGVNb25leSIsImN1cnJlbmN5IiwicG9zaXRpb24iLCJfcG9zaXRpb24iLCJMRUZUIiwiUklHSFQiLCJqZkRhdGFUeXBlT2JqZWN0IiwiJHByb3BlcnR5TWFwIiwiJHByb3BlcnR5VHlwZXMiLCIkdXNlTWFwIiwiX21hcCIsIl9vbGROYW1lIiwiX3Byb3BlcnR5VHBlcyIsIl9yZW1hcCIsIl92YWx1ZXMiLCJqZkRhdGFUeXBlU3RyaW5nIiwiamZEYXRhVHlwZVRpbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7Ozs7Ozs7QUNEdkM7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QUFPQSxVQUFVLElBQVYsSUFBa0JBLFVBQVVELFNBQTVCLEdBQ0QsRUFEQyxHQUVETSxPQUFPTCxLQUFQLENBRk47QUFHSCxDOztrQkFWZ0JxSCxnQjtBQXlCckJBLGlCQUFpQnhGLFFBQWpCLENBQTBCLFFBQTFCLEVBQW9Dd0YsZ0JBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7O0FBQ0E7Ozs7Ozs7O0lBUXFCQyxjOzs7Ozs7Ozs7Ozs7QUFPakI7Ozs2QkFJQTtBQUNJLFVBQU14SCxTQUFTLEtBQUtFLEtBQXBCOztBQUVBLGFBQU9GLFdBQVcsSUFBWCxrSkFFRCxLQUFLSSxXQUFMLENBQWlCcUQsVUFBakIsQ0FBNEJ6RCxNQUE1QixFQUFvQyxVQUFwQyxDQUZOO0FBR0g7QUFmRDs7Ozs7OztBQWlCSjs7O0FBbkJxQndILGMsQ0FLVjlELGEsR0FBZ0IsTztrQkFMTjhELGM7QUFvQnJCQSxlQUFlekYsUUFBZixDQUF3QixNQUF4QixFQUFnQ3lGLGNBQWhDLEUiLCJmaWxlIjoiamZEYXRhVHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXRhVHlwZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiamZcIl0gPSByb290W1wiamZcIl0gfHwge30sIHJvb3RbXCJqZlwiXVtcImRhdGFUeXBlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkOWIzMjJhM2Y4M2IxZjg1Yjg5IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS40JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkZhY3RvcnkgZnJvbSAnamYtZmFjdG9yeSc7XG5cbi8qKlxuICogRmFjdG9yw61hIHBhcmEgbG9zIHRpcG9zIGRlIGRhdG9zLlxuICpcbiAqIEB0eXBlIHtGYWN0b3J5fVxuICovXG5jb25zdCBmYWN0b3J5ID0gamZGYWN0b3J5LmkoJ2pmLWRhdGEtdHlwZXMnKTtcbmZhY3RvcnkuaW5pdE1ldGhvZCA9ICdzZXRQcm9wZXJ0aWVzJztcblxuLyoqXG4gKiBDbGFzZSBxdWUgcmVwcmVzZW50YSB1biBjYW1wbyBkZSB1bmEgdGFibGEgbyByZXNwdWVzdGEgZGVsIHNlcnZpZG9yLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGEgdXNhciBwYXJhIGFuYWxpemFyIGVsIHZhbG9yIGRlIGVudHJhZGEgeSBxdWUgZGViZXLDoSBkZXZvbHZlclxuICAgICAqIGVsIHZhbG9yIGEgYXNpZ25hciBhIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJzZXJcbiAgICAgKiBAdHlwZSAgICAge0Z1bmN0aW9ufG51bGx9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIGNhbXBvIHB1ZWRlIHNlciBgbnVsbGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJG51bGxhYmxlXG4gICAgICogQHR5cGUgICAgIHtCb29sZWFufVxuICAgICAqL1xuICAgICRudWxsYWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGFkb3JlcyBhIHVzYXIgcGFyYSB2ZXJpZmljYXIgZWwgdmFsb3IgZGUgbGEgaW5zdGFuY2lhLlxuICAgICAqXG4gICAgICogQ2FkYSBlbGVtZW50byBkZWwgYXJyYXkgcHVlZGUgc2VyIHVuYSBmdW5jacOzbiBvIHVuIG9iamV0b1xuICAgICAqIGNvbiBhbCBtZW5vcyBsYSBjbGF2ZSBgZm5gLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5ICR2YWxpZGF0b3JzXG4gICAgICogQHR5cGUgICAgIHtPYmplY3RbXXxGdW5jdGlvbltdfG51bGx9XG4gICAgICovXG4gICAgJHZhbGlkYXRvcnMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVmFsb3IgZGVsIGNhbXBvLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5ICQkdmFsdWVcbiAgICAgKiBAdHlwZSAgICAgeyp9XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgJCR2YWx1ZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBc2lnbmEgbGFzIHByb3BpZWRhZGVzIGRlIGxhIGNsYXNlIGEgcGFydGlyIGRlIHVuIG9iamV0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgVmFsb3JlcyBhIGFzaWduYXIuXG4gICAgICovXG4gICAgc2V0UHJvcGVydGllcyh2YWx1ZXMpXG4gICAge1xuICAgICAgICBpZiAodmFsdWVzICYmIHR5cGVvZiB2YWx1ZXMgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF9wcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyh2YWx1ZXMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvcGVydHlbMF0gIT09ICckJyAmJiBfcHJvcGVydHlbMF0gIT09ICdfJyAmJiBfcHJvcGVydHkgaW4gdGhpcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF92YWx1ZSA9IHZhbHVlc1tfcHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbX3Byb3BlcnR5XSA9IF92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzaWduYSBlbCB2YWxvciBkZSBsYSBjbGFzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsb3IgYSBhc2lnbmFyLlxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLiQkdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgX3BhcnNlciA9IHRoaXMuY29uc3RydWN0b3IucGFyc2VyO1xuICAgICAgICAgICAgdGhpcy4kJHZhbHVlICA9IHR5cGVvZiBfcGFyc2VyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBfcGFyc2VyLmNhbGwodGhpcywgdmFsdWUpXG4gICAgICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9KU09OL3N0cmluZ2lmeSN0b0pTT04oKV9iZWhhdmlvclxuICAgICAqL1xuICAgIHRvSlNPTigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L3RvU3RyaW5nXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsIHx8IF92YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICA6IFN0cmluZyhfdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYSBlbCB2YWxvciBkZSBsYSBpbnN0YW5jaWEgdXNhbmRvIGxvcyB2YWxpZGFkb3JlcyBlc3BlY2lmaWNhZG9zIGVuXG4gICAgICogbGEgcHJvcGllZGFkIGAkdmFsaWRhdG9yc2AuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHZhbGlkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgc2kgZWwgdmFsb3IgZXMgdsOhbGlkby5cbiAgICAgKi9cbiAgICB2YWxpZGF0ZSgpXG4gICAge1xuICAgICAgICBsZXQgX2lzVmFsaWQ7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMuJCR2YWx1ZTtcbiAgICAgICAgaWYgKF92YWx1ZSA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgX2lzVmFsaWQgPSB0aGlzLiRudWxsYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBfdmFsaWRhdG9ycyA9IHRoaXMuJHZhbGlkYXRvcnM7XG4gICAgICAgICAgICBpZiAoX3ZhbGlkYXRvcnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF92YWxpZGF0b3JzKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF92YWxpZGF0b3JzID0gW192YWxpZGF0b3JzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF92YWxpZGF0b3JzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgX3ZhbGlkYXRvciBvZiBfdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGVzIHVuYSBmdW5jacOzbiBzZSBsbGFtYSBjb24gdW4gc29sbyBwYXLDoW1ldHJvLCBlbCB2YWxvci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IF92YWxpZGF0b3IoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF92YWxpZGF0b3IgJiYgdHlwZW9mIF92YWxpZGF0b3IuZm4gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgZXMgdW4gb2JqZXRvLCBzZSBwYXNhIGNvbW8gc2VndW5kbyBwYXLDoW1ldHJvIGVsIHByb3Bpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamV0byBwYXJhIHBlcm1pdGlyIGNvbmZpZ3VyYXIgZWwgdmFsaWRhZG9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gX3ZhbGlkYXRvci5mbihfdmFsdWUsIF92YWxpZGF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIHNlIGVzcGVjaWZpY8OzIHVuIHZhbGlkYWRvciBpbmNvcnJlY3RvLCBkZXZvbHZlbW9zIGBmYWxzZWAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2lzVmFsaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgbG9zIHZhbGlkYWRvcmVzIGVzdMOhbiB2YWPDrW9zLCBkYW1vcyBwb3IgYnVlbm8gY3VhbHF1aWVyIHZhbG9yLlxuICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXZ1ZWx2ZSBlbCB2YWxvciBkZSBsYSBpbnN0YW5jaWEuXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc2lnbmEgZWwgdmFsb3IgZGUgbGEgaW5zdGFuY2lhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWxvciBhIGFzaWduYXIgYSBsYSBpbnN0YW5jaWEuXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC92YWx1ZU9mXG4gICAgICovXG4gICAgdmFsdWVPZigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpXG4gICAgICAgICAgICA/IHRoaXMuJCR2YWx1ZVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnV5ZSBsYSBpbnN0YW5jaWEgZGVsIHRpcG8gZGUgZGF0b3MgZXNwZWNpZmljYWRvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfENsYXNzfSBuYW1lICBOb21icmUgZGVsIHRpcG8gZGUgZGF0byBvIHJlZmVyZW5jaWEgZGUgbGEgY2xhc2UuXG4gICAgICogQHBhcmFtIHsqP30gICAgICAgICAgIHZhbHVlIENvbmZpZ3VyYWNpw7NuIGEgYXBsaWNhciBhIGxhIG51ZXZhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2pmLmRhdGFUeXBlLkJhc2V8dW5kZWZpbmVkfSBJbnN0YW5jaWEgY29uc3RydWlkYS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKG5hbWUsIHZhbHVlKVxuICAgIHtcbiAgICAgICAgY29uc3QgX2luc3RhbmNlID0gZmFjdG9yeS5jcmVhdGUobmFtZSk7XG4gICAgICAgIGlmIChfaW5zdGFuY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2Uuc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldnVlbHZlIGxhIGluc3RhbmNpYSBkZSBsYSBmYWN0b3LDrWEgc2llbmRvIHVzYWRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RmFjdG9yeX0gRmFjdG9yw61hIHVzYWRhLlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgZmFjdG9yeSgpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgdW5hIGluc3RhbmNpYSBlcyBkZSBsYSBjbGFzZSBlc3BlY2lmaWNhZGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2UgIEluc3RhbmNpYSBhIHZlcmlmaWNhci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NuYW1lIE5vbWJyZSBkZSBsYSBjbGFzZSBhIGNvbXByb2Jhci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBzaSBsYSBpbnN0YW5jaWEgZXMgZGUgZXNhIGNsYXNlLlxuICAgICAqL1xuICAgIHN0YXRpYyBpcyhpbnN0YW5jZSwgY2xhc3NuYW1lKVxuICAgIHtcbiAgICAgICAgbGV0IF9pcyA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgY2xhc3NuYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBfQ2xhc3MgPSBmYWN0b3J5LmdldChjbGFzc25hbWUpO1xuICAgICAgICAgICAgaWYgKF9DbGFzcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaXMgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciA9PT0gX0NsYXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9pcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxsZW5hIHVuYSBjYW50aWRhZCBjb24gY2Vyb3MgYSBsYSBpenF1aWVyZGEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHBhZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlICBWYWxvciBhIGZvcm1hdGVhci5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIExvbmdpdHVkIGRlbCB0ZXh0byByZXN1bHRhbnRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBOw7ptZXJvIGZvcm1hdGVhZG8uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIHBhZCh2YWx1ZSwgbGVuZ3RoID0gMilcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMCk7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZS5sZW5ndGggPCBsZW5ndGhcbiAgICAgICAgICAgID8gKCcwJy5yZXBlYXQobGVuZ3RoKSArIF92YWx1ZSkuc3Vic3RyKC1sZW5ndGgpXG4gICAgICAgICAgICA6IF92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RyYSBsYSByZWZlcmVuY2lhIGRlIGxhIGNsYXNlIHF1ZSBtYW5lamEgZWwgdGlwbyBkZSBkYXRvIGVzcGVjaWZpY2Fkby5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgcmVnaXN0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5vbWJyZSBkZWwgdGlwbyBkZSBkYXRvLlxuICAgICAqIEBwYXJhbSB7Q2xhc3N9ICBDbGFzcyBSZWZlcmVuY2lhIGRlIGxhIGNsYXNlIHF1ZSBtYW5lamEgZWwgdGlwbyBkZSBkYXRvLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyByZWdpc3RlcihuYW1lLCBDbGFzcylcbiAgICB7XG4gICAgICAgIGZhY3RvcnkucmVnaXN0ZXIobmFtZSwgQ2xhc3MpO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mYWN0b3J5LnJlZ2lzdGVyKCdCYXNlJywgamZEYXRhVHlwZUJhc2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Jhc2UubWpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBNYW5lamFkb3JlcyBwYXJhIGxvcyBzw61tYm9sb3MgdXNhZG9zIGVuIGxvcyBmb3JtYXRvcyBkZSBsYXMgZmVjaGFzLlxuICpcbiAqIFNlIHB1ZWRlbiByZWdpc3RyYXIgb3Ryb3MgbWFuZWphZG9yZXMuIFBvciBlamVtcGxvIHBhcmEgZWwgZm9ybWF0byAnZWVlZScgKHF1ZVxuICogZGVwZW5kZSBkZWwgaWRpb21hKSBzZSBwb2Ryw61hIGhhY2VyOlxuICpcbiAqIGBgYFxuICogamZEYXRhVHlwZURhdGVUaW1lLnJlZ2lzdGVyU3ltYm9sKFxuICogICAgICdlZWVlJyxcbiAqICAgICBkYXRlID0+IHRyKCd3ZWVrZGF5JyArIGRhdGUuZ2V0RGF5KCkpXG4gKiApO1xuICogYGBgXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqXG4gKiBAc2VlIGh0dHA6Ly91c2VyZ3VpZGUuaWN1LXByb2plY3Qub3JnL2Zvcm1hdHBhcnNlL2RhdGV0aW1lXG4gKi9cbmNvbnN0IGN1c3RvbVN5bWJvbHMgPSB7XG4gICAgZCAgICA6IGRhdGUgPT4gZGF0ZS5nZXREYXRlKCksXG4gICAgZGQgICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldERhdGUoKSksXG4gICAgSCAgICA6IGRhdGUgPT4gZGF0ZS5nZXRIb3VycygpLFxuICAgIEhIICAgOiBkYXRlID0+IGpmRGF0YVR5cGVEYXRlVGltZS5wYWQoZGF0ZS5nZXRIb3VycygpKSxcbiAgICBtICAgIDogZGF0ZSA9PiBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBtbSAgIDogZGF0ZSA9PiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFkKGRhdGUuZ2V0TWludXRlcygpKSxcbiAgICBNICAgIDogZGF0ZSA9PiBkYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgIE1NICAgOiBkYXRlID0+IGpmRGF0YVR5cGVEYXRlVGltZS5wYWQoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgcyAgICA6IGRhdGUgPT4gZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgc3MgICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldFNlY29uZHMoKSksXG4gICAgeSAgICA6IGRhdGUgPT4gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIHl5ICAgOiBkYXRlID0+IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cigtMiksXG4gICAgeXl5eSA6IGRhdGUgPT4gZGF0ZS5nZXRGdWxsWWVhcigpXG59O1xuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBmZWNoYXMgcXVlIGluY2x1eWVuIGxhcyBob3Jhcy5cbiAqIERlcGVuZGllbmRvIGRlbCBmb3JtYXRvIHJlY2liaWRvIGRlbCBzZXJ2aWRvciBwb2Ryw61hIHVzYXJzZVxuICogbGEgcHJvcGllZGFkIGBwYXJzZXJgIHBhcmEgZGVmaW5pciBlbCBhbmFsaXphZG9yIGRlbCB2YWxvclxuICogZGUgZW50cmFkYS5cbiAqXG4gKiBgYGBcbiAqIC8vIERpZmVyZW50ZXMgZWplbXBsb3MgZGUgbG8gcXVlIGRlYmVyw61hIHJldG9ybmFyIGVzdGEgZnVuY2nDs25cbiAqIC8vIHBhcmEgdW4gZm9ybWF0byBkZSBlbnRyYWRhIGBkZC9tbS9ZWVlZYFxuICogamZEYXRhVHlwZURhdGVUaW1lLnBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICoge1xuICogICAgIGNvbnN0IF9wYXJ0cyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gKlxuICogICAgIHJldHVybiBbXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1syXSwgMTApLFxuICogICAgICAgICBwYXJzZUludChfcGFydHNbMV0sIDEwKSAtIDEsXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1swXSwgMTApLFxuICogICAgIF1cbiAqIH1cbiAqIGpmRGF0YVR5cGVEYXRlVGltZS5wYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAqIHtcbiAqICAgICBjb25zdCBfcGFydHMgPSB2YWx1ZS5zcGxpdCgnLycpO1xuICpcbiAqICAgICByZXR1cm4gbmV3IERhdGUoXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1syXSwgMTApLFxuICogICAgICAgICBwYXJzZUludChfcGFydHNbMV0sIDEwKSAtIDEsXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1swXSwgMTApLFxuICogICAgICk7XG4gKiB9XG4gKiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gKiB7XG4gKiAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcvJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcbiAqIH1cbiAqIC8vXG4gKiBjb25zdCBfZGF0ZSA9IG5ldyBqZkRhdGFUeXBlRGF0ZVRpbWUoKTtcbiAqIGNvbnNvbGUubG9nKF9kYXRlLnNldFZhbHVlKCcxNS8wMS8yMDE3JykpO1xuICogYGBgXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5EYXRlVGltZVxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVEYXRlVGltZSBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUoLi4udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgY29uc3QgX3RpbWUgPSBEYXRlLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKF90aW1lKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUoX3RpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gcG9yIGRlZmVjdG8gcGFyYSBjb252ZXJ0aXIgbGEgZmVjaGEgZW4gdGV4dG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVmYXVsdEZvcm1hdFxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEZvcm1hdCA9ICd5eXl5LU1NLWRkIEhIOm1tOnNzJztcblxuICAgIC8qKlxuICAgICAqIEZvcm1hdG8gYSB1c2FyIHBhcmEgY29udmVydGlyIGxhIGZlY2hhIGVuIHRleHRvLlxuICAgICAqIFNpIG5vIHNlIGVzcGVjaWZpY2Egc2UgdXNhIGBkZWZhdWx0Rm9ybWF0YC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmb3JtYXRcbiAgICAgKiBAdHlwZSAgICAge1N0cmluZ31cbiAgICAgKi9cbiAgICBmb3JtYXQgICAgICAgICAgICAgICA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9KU09OKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBzdXBlci50b0pTT04oKVxuICAgICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLmZvcm1hdERhdGUoX3ZhbHVlLCAneXl5eS1NTS1kZFRISDptbTpzcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBzdXBlci50b1N0cmluZygpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsIHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdEZvcm1hdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWdyZWdhIHVuIHPDrW1ib2xvIGFjZXB0YWRvIGVuIGVsIGZvcm1hdG8gZGUgbGEgZmVjaGEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGFkZFN5bWJvbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICAgc3ltYm9sICBTw61tYm9sbyBhIHJlZ2lzdHJhci5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmNpw7NuIHF1ZSBzZSBlamVjdXRhcsOhIHBhcmEgcmVhbGl6YXIgbGEgY29udmVyc2nDs24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGFkZFN5bWJvbChzeW1ib2wsIGhhbmRsZXIpXG4gICAge1xuICAgICAgICBjdXN0b21TeW1ib2xzW3N5bWJvbF0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdGVhIHVuYSBmZWNoYSBjb252aXJ0acOpbmRvbGEgYSB0ZXh0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gICAgZGF0ZSAgIEZlY2hhIGEgZm9ybWF0ZWFyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nP30gZm9ybWF0IEZvcm1hdG8gZGUgbGEgZmVjaGEuXG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0KVxuICAgIHtcbiAgICAgICAgbGV0IF9yZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBfcmVzdWx0ID0gZm9ybWF0ICYmIHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgLyhcXHcpXFwxezAsM30vZyxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0+IHN5bWJvbCBpbiBjdXN0b21TeW1ib2xzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1c3RvbVN5bWJvbHNbc3ltYm9sXShkYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzeW1ib2xcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBkYXRlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVEYXRlVGltZS5yZWdpc3RlcignRGF0ZVRpbWUnLCBqZkRhdGFUeXBlRGF0ZVRpbWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVUaW1lLm1qcyIsImltcG9ydCBqZkZvcm1hdERlY2ltYWwgZnJvbSAnZm9ybWF0LWRlY2ltYWwnO1xuaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgbsO6bWVyb3MgZGVjaW1hbGVzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkZsb2F0XG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqIEB1c2VzICAgICAgamYuZm9ybWF0RGVjaW1hbFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlRmxvYXQgZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpc05hTihfdmFsdWUpXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogX3ZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTw61tYm9sbyBhIHVzYXIgcGFyYSBlbCBwdW50byBkZWNpbWFsLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlY2ltYWxcbiAgICAgKiBAdHlwZSAgICAge1N0cmluZ31cbiAgICAgKi9cbiAgICBkZWNpbWFsICAgICAgICAgICAgICA9ICcsJztcblxuICAgIC8qKlxuICAgICAqIE7Dum1lcm8gZGUgZGVjaW1hbGVzIGEgbW9zdHJhclxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHByZWNpc2lvblxuICAgICAqIEB0eXBlICAgICB7TnVtYmVyfVxuICAgICAqL1xuICAgIHByZWNpc2lvbiAgICAgICAgICAgID0gMjtcblxuICAgIC8qKlxuICAgICAqIFPDrW1ib2xvIGEgdXNhciBwYXJhIGxvcyBzZXBhcmFkb3JlcyBkZSBtaWxlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aG91c2FuZHNcbiAgICAgKiBAdHlwZSAgICAge1N0cmluZ31cbiAgICAgKi9cbiAgICB0aG91c2FuZHMgICAgICAgICAgICA9ICcuJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIF92YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gamZGb3JtYXREZWNpbWFsKF92YWx1ZSwgdGhpcylcbiAgICAgICAgICAgIDogJyc7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVGbG9hdC5yZWdpc3RlcignRmxvYXQnLCBqZkRhdGFUeXBlRmxvYXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Zsb2F0Lm1qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRGF0YVR5cGVBcnJheSAgICBmcm9tICcuL0FycmF5JztcbmltcG9ydCBqZkRhdGFUeXBlQmFzZSAgICAgZnJvbSAnLi9CYXNlJztcbmltcG9ydCBqZkRhdGFUeXBlQm9vbGVhbiAgZnJvbSAnLi9Cb29sZWFuJztcbmltcG9ydCBqZkRhdGFUeXBlRGF0ZSAgICAgZnJvbSAnLi9EYXRlJztcbmltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG5pbXBvcnQgamZEYXRhVHlwZUVudW0gICAgIGZyb20gJy4vRW51bSc7XG5pbXBvcnQgamZEYXRhVHlwZUZsb2F0ICAgIGZyb20gJy4vRmxvYXQnO1xuaW1wb3J0IGpmRGF0YVR5cGVJbnRlZ2VyICBmcm9tICcuL0ludGVnZXInO1xuaW1wb3J0IGpmRGF0YVR5cGVNb25leSAgICBmcm9tICcuL01vbmV5JztcbmltcG9ydCBqZkRhdGFUeXBlT2JqZWN0ICAgZnJvbSAnLi9PYmplY3QnO1xuaW1wb3J0IGpmRGF0YVR5cGVTdHJpbmcgICBmcm9tICcuL1N0cmluZyc7XG5pbXBvcnQgamZEYXRhVHlwZVRpbWUgICAgIGZyb20gJy4vVGltZSc7XG5cbi8qKlxuICogw41uZGljZSBkZWwgcGFxdWV0ZS5cbiAqXG4gKiBAYXV0aG9yICAgIEpvYXF1w61uIEZlcm7DoW5kZXpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgICdBcnJheScgICAgOiBqZkRhdGFUeXBlQXJyYXksXG4gICAgJ0Jhc2UnICAgICA6IGpmRGF0YVR5cGVCYXNlLFxuICAgICdCb29sZWFuJyAgOiBqZkRhdGFUeXBlQm9vbGVhbixcbiAgICAnRGF0ZScgICAgIDogamZEYXRhVHlwZURhdGUsXG4gICAgJ0RhdGVUaW1lJyA6IGpmRGF0YVR5cGVEYXRlVGltZSxcbiAgICAnRW51bScgICAgIDogamZEYXRhVHlwZUVudW0sXG4gICAgJ0Zsb2F0JyAgICA6IGpmRGF0YVR5cGVGbG9hdCxcbiAgICAnSW50ZWdlcicgIDogamZEYXRhVHlwZUludGVnZXIsXG4gICAgJ01vbmV5JyAgICA6IGpmRGF0YVR5cGVNb25leSxcbiAgICAnT2JqZWN0JyAgIDogamZEYXRhVHlwZU9iamVjdCxcbiAgICAnU3RyaW5nJyAgIDogamZEYXRhVHlwZVN0cmluZyxcbiAgICAnVGltZScgICAgIDogamZEYXRhVHlwZVRpbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgubWpzIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgYXJyYXlzIGRlIHVuIHNvbG8gdGlwbyBkZSBkYXRvcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5BcnJheVxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVBcnJheSBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBkZSBjb25maWd1cmFjacOzbiBwb3IgZGVmZWN0byBwYXJhIGNhZGEgZWxlbWVudG8gZGVsIGFycmF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlZmF1bHRzXG4gICAgICogQHR5cGUgICAgIHtPYmplY3R9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAgICAgY29uZmlnIDoge30sXG4gICAgICAgIHR5cGUgICA6ICdTdHJpbmcnXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9DbGFzcyAgICAgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9kZWZhdWx0cyAgPSBfQ2xhc3MuZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgY29uc3QgX2NvbmZpZyAgICA9IF9kZWZhdWx0cy5jb25maWc7XG4gICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbmZpZyA9IF9jb25maWcgJiYgdHlwZW9mIF9jb25maWcgPT09ICdvYmplY3QnO1xuICAgICAgICAgICAgICAgIGNvbnN0IF90eXBlICAgICAgPSBfZGVmYXVsdHMudHlwZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgICAgID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIGpmRGF0YVR5cGVCYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX0NsYXNzLmNyZWF0ZShfdHlwZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgX2hhc0NvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2V0UHJvcGVydGllcyhfY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB2YWx1ZU9mKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHN1cGVyLnZhbHVlT2YoKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShfdmFsdWUpXG4gICAgICAgICAgICA/IF92YWx1ZS5tYXAodiA9PiB2IGluc3RhbmNlb2YgamZEYXRhVHlwZUJhc2UgPyB2LnZhbHVlT2YoKSA6IHYpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVBcnJheS5yZWdpc3RlcignQXJyYXknLCBqZkRhdGFUeXBlQXJyYXkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FycmF5Lm1qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnN0YW5jaWFzIGRlIGZhY3RvcsOtYXMuXG4gKiBQZXJtaXRlIHVzYXIgbGEgY2xhc2UgY29tbyB1biBzaW5nbGV0b24uXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xubGV0IGluc3RhbmNlcyA9IHt9O1xuLyoqXG4gKiBDbGFzZSB1c2FkYSBjb21vIHVuYSBmYWN0b3LDrWEgZGUgaW5zdGFuY2lhcy5cbiAqIFNlIHB1ZWRlbiBjcmVhciBkaXN0aW50YXMgaW5zdGFuY2lhcyBwYXJhIG1hbmVqYXIgZGlmZXJlbnRlcyByZWdpc3Ryb3MuXG4gKiBTaSBzb2xhbWVudGUgc2UgZGVzZWEgdW4gcmVnaXN0cm8sIHNlIHB1ZWRlIHVzYXIgY29tbyB1biBzaW5nbGV0b25cbiAqIGxsYW1hbmRvIGFsIG3DqXRvZG8gYGkoKWAuXG4gKlxuICogQG5hbWVzcGFjZSBqZlxuICogQGNsYXNzICAgICBqZi5GYWN0b3J5XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRmFjdG9yeVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGRlIGxhIGNsYXNlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vbWJyZSBkZWwgbcOpdG9kbyBkZSBpbmljaWFsaXphY2nDs24gYSBsbGFtYXIgY3VhbmRvIHNlIHBhc2VcbiAgICAgICAgICogdW5hIGNvbmZpZ3VyYWNpw7NuIGFsIG3DqXRvZG8gYGJ1aWxkYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXNhbmRvIGBiYWJlbGAgbGFzIHN1YmNsYXNlcyBxdWUgaGFjZW4gdXNvIGRlbCBwbHVnaW5cbiAgICAgICAgICogYGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tY2xhc3MtcHJvcGVydGllc2Agbm8gcHVlZGVuIGFzaWduYXJcbiAgICAgICAgICogbG9zIHZhbG9yZXMgcmVjaWJpZG9zIGVuIGVsIGNvbnN0cnVjdG9yIHlhIHF1ZSBzZSBhc2lnbmFuXG4gICAgICAgICAqIGxhcyBwcm9waWVkYWRlcyB1c2FuZG8gZXN0ZSBwbHVnaW4gZGVzcHXDqXMgZGUgYXNpZ25hciBlc29zXG4gICAgICAgICAqIHZhbG9yZXMgeSBzZSBwaWVyZGVuIGxhIGFzaWduYWNpw7NuIGFudGVyaW9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgaW5pdE1ldGhvZFxuICAgICAgICAgKiBAdHlwZSAgICAge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdE1ldGhvZCA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0cm8gZGUgY2xhc2VzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgJCRyZWdpc3RyeVxuICAgICAgICAgKiBAdHlwZSAgICAge09iamVjdH1cbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiQkcmVnaXN0cnkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhIHVuYSBpbnN0YW5jaWEgZGUgdW5hIGNsYXNlIHJlZ2lzdHJhZGEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgICBOb21icmUgY29uIGVsIHF1ZSBzZSBoYSByZWdpc3RyYWRvIGxhIGNsYXNlLlxuICAgICAqIEBwYXJhbSB7Kj99ICAgICBjb25maWcgQ29uZmlndXJhY2nDs24gYSBhcGxpY2FyIGEgbGEgbnVldmEgaW5zdGFuY2lhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q2xhc3N9IEluc3RhbmNpYSBkZSBsYSBjbGFzZSBjb25zdHJ1aWRhIG8gYHVuZGVmaW5lZGAgc2kgbm8gZXhpc3RlIGxhIGNsYXNlLlxuICAgICAqL1xuICAgIGNyZWF0ZShuYW1lLCBjb25maWcpXG4gICAge1xuICAgICAgICBsZXQgX2luc3RhbmNlO1xuICAgICAgICBsZXQgX0NsYXNzID0gdHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gbmFtZVxuICAgICAgICAgICAgOiB0aGlzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKF9DbGFzcyAmJiB0eXBlb2YgX0NsYXNzID09PSAnZnVuY3Rpb24nKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBFbiBhbGd1bm9zIGNhc29zIHVzYW5kbyBgYmFiZWxgIGVsIHBhc2FyIGBjb25maWdgIGNvbW8gcGFyw6FtZXRybyBub1xuICAgICAgICAgICAgLy8gcGVybWl0ZSBhc2lnbmFyIGxhcyBwcm9waWVkYWRlcy4gRW4gZXNvcyBjYXNvcyBzZSBkZWJlIHVzYXIgdW4gbcOpdG9kbyBhdXhpbGlhci5cbiAgICAgICAgICAgIGNvbnN0IF9pbml0TWV0aG9kID0gdGhpcy5pbml0TWV0aG9kO1xuICAgICAgICAgICAgaWYgKF9pbml0TWV0aG9kKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pbnN0YW5jZSA9IG5ldyBfQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9pbnN0YW5jZVtfaW5pdE1ldGhvZF0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2VbX2luaXRNZXRob2RdKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pbnN0YW5jZSA9IG5ldyBfQ2xhc3MoY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVybWl0ZSBsaW1waWFyIGVsIHJlZ2lzdHJvIHBhcmEgbGliZXJhciBsYSBtZW1vcmlhIGFsIGVsaW1pbmFyIGxhcyByZWZlcmVuY2lhcy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgTm9tYnJlIGRlbCBtw6l0b2RvIHF1ZSBzZSBsbGFtYXLDoSBlbiBjYWRhIGNsYXNlIHJlZ2lzdHJhZGEgYW50ZXMgZGUgZWxpbWluYXJzZS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIFNpIHJldG9ybmEgYGZhbHNlYCBubyBzZSBlbGltaW5hIGRlbCByZWdpc3Ryby5cbiAgICAgKi9cbiAgICBjbGVhcihtZXRob2QgPSAnJylcbiAgICB7XG4gICAgICAgIGlmIChtZXRob2QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9yZWdpc3RyeSA9IHRoaXMuJCRyZWdpc3RyeTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX25hbWUgb2YgT2JqZWN0LmtleXMoX3JlZ2lzdHJ5KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfQ2xhc3MgPSBfcmVnaXN0cnlbX25hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX0NsYXNzW19uYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBfQ2xhc3NbX25hbWVdKCkgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9yZWdpc3RyeVtfbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy4kJHJlZ2lzdHJ5ID0ge307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXZ1ZWx2ZSBsYSByZWZlcmVuY2lhIGRlIGxhIGNsYXNlIHF1ZSBjb3JyZXNwb25kZSBjb24gZWwgbm9tYnJlIGVzcGVjaWZpY2Fkby5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOb21icmUgcXVlIGhhY2UgcmVmZXJlbmNpYSBhIGxhIGNsYXNlIHF1ZSBzZSBkZXNlYSByZWN1cGVyYXIuXG4gICAgICovXG4gICAgZ2V0KG5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdHJhIGxhIHJlZmVyZW5jaWEgZGUgdW5hIGNsYXNlLlxuICAgICAqXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgIE5vbWJyZSBjb24gZWwgcXVlIHJlZ2lzdHJhcsOhIGxhIGNsYXNlLlxuICAgICAqIEBwYXJhbSB7Q2xhc3N9ICBDbGFzcyBSZWZlcmVuY2lhIGRlIGxhIGNsYXNlIGEgcmVnaXN0cmFyLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyKG5hbWUsIENsYXNzKVxuICAgIHtcbiAgICAgICAgdGhpcy4kJHJlZ2lzdHJ5W25hbWVdID0gQ2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWxpbWluYSB1bmEgY2xhc2UgZGVsIHJlZ2lzdHJvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1bnJlZ2lzdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOb21icmUgY29uIGVsIHF1ZSBzZSByZWdpc3Ryw7MgbGEgY2xhc2UuXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihuYW1lKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuJCRyZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXZ1ZWx2ZSBsYSBpbnN0YW5jaWEgZGUgbGEgZmFjdG9yw61hIHVzYWRhIGNvbW8gc2luZ2xldG9uLlxuICAgICAqIFNpIG5vIHNlIGhhIGNyZWFkbyBwcmV2aWFtZW50ZSwgc2UgY3JlYSB1bmEgbnVldmEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5vbWJyZSBkZSBsYSBmYWN0b3LDrWEgYSBjb25zdHJ1aXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGYWN0b3J5fVxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBpKG5hbWUgPSAnJylcbiAgICB7XG4gICAgICAgIGlmICghKG5hbWUgaW4gaW5zdGFuY2VzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaW5zdGFuY2VzW25hbWVdID0gbmV3IEZhY3RvcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZXNbbmFtZV07XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9qZi1mYWN0b3J5L2luZGV4LmpzIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgdmFsb3JlcyBib29sZWFub3MuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuQm9vbGVhblxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVCb29sZWFuIGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICAvLyBTaSBlcyB1biBvYmpldG8geSBubyB0aWVuZSBjbGF2ZXMgc2UgYXN1bWlyw6EgY29tbyB1biB2YWxvciB2YWPDrW8geSBlbCB2YWxvciBhc2lnbmFkbyBzZXLDoSBgZmFsc2VgLlxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnb2ZmJyB8fCB2YWx1ZSA9PT0gJzAnIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IEJvb2xlYW4odmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgID8gc3VwZXIudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiBfdmFsdWVcbiAgICAgICAgICAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgICAgICAgICAgIDogJ2ZhbHNlJztcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZUJvb2xlYW4ucmVnaXN0ZXIoJ0Jvb2xlYW4nLCBqZkRhdGFUeXBlQm9vbGVhbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9vbGVhbi5tanMiLCJpbXBvcnQgamZEYXRhVHlwZURhdGVUaW1lIGZyb20gJy4vRGF0ZVRpbWUnO1xuXG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIGZlY2hhcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5EYXRlXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkRhdGVUaW1lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVEYXRlIGV4dGVuZHMgamZEYXRhVHlwZURhdGVUaW1lXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvSlNPTigpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsICd5eXl5LU1NLWRkJyk7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVEYXRlLnJlZ2lzdGVyKCdEYXRlJywgamZEYXRhVHlwZURhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGUubWpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkRhdGFUeXBlQmFzZSBmcm9tICcuL0Jhc2UnO1xuLyoqXG4gKiBDbGFzZSBwYXJhIG1hbmVqYXIgZW51bWVyYWNpb25lcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5FbnVtXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUVudW0gZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIFZhbG9yZXMgcGVybWl0aWRvcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkYWxsb3dlZFZhbHVlc1xuICAgICAqIEB0eXBlICAgICB7QXJyYXl9XG4gICAgICovXG4gICAgJGFsbG93ZWRWYWx1ZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFZhbG9yIGEgc2VsZWNjaW9uYXIgcG9yIGRlZmVjdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJGRlZlZhbHVlXG4gICAgICogQHR5cGUgICAgIHsqfVxuICAgICAqL1xuICAgICRkZWZWYWx1ZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy4kYWxsb3dlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uYXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLiR2YWxpZGF0b3JzID0gW1xuICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy4kYWxsb3dlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY2Npb25hIGVsIHZhbG9yIHBvciBkZWZlY3RvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBsb2FkRGVmYXVsdFxuICAgICAqL1xuICAgIGxvYWREZWZhdWx0KClcbiAgICB7XG4gICAgICAgIGNvbnN0IF9kZWZhdWx0ID0gdGhpcy4kZGVmVmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgICAgID0gdGhpcy4kYWxsb3dlZFZhbHVlcy5pbmNsdWRlcyhfZGVmYXVsdClcbiAgICAgICAgICAgID8gX2RlZmF1bHRcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZUJhc2UucmVnaXN0ZXIoJ0VudW0nLCBqZkRhdGFUeXBlRW51bSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW51bS5tanMiLCIvKipcbiAqIERldnVlbHZlIGVsIG7Dum1lcm8gZXNwZWNpZmljYWRvIGZvcm1hdGVhZG8gY29uIGxvcyBzZXBhcmFkb3JlcyBlc3BlY2lmaWNhZG9zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgdmFsdWUgICAgICAgICAgICBWYWxvciBhIGZvcm1hdGVhci5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgY29uZmlnICAgICAgICAgICBDb25maWd1cmFjacOzbiBwYXJhIG1vZGlmaWNhciBlbCByZXN1bHRhZG8uXG4gKiBAcGFyYW0ge1N0cmluZ30gIGNvbmZpZy5kZWNpbWFsICAgU8OtbWJvbG8gYSB1c2FyIHBhcmEgZWwgcHVudG8gZGVjaW1hbCAoYCxgIHBvciBkZWZlY3RvKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSAgY29uZmlnLnByZWNpc2lvbiBOw7ptZXJvIGRlIGTDrWdpdG9zIGRlY2ltYWxlcyBhIG1vc3RyYXIgKGAyYCBwb3IgZGVmZWN0bykuXG4gKiBAcGFyYW0ge1N0cmluZ30gIGNvbmZpZy50aG91c2FuZHMgU2VwYXJhZG9yIGRlIG1pbGVzICgnLicgcG9yIGRlZmVjdG8pLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gTsO6bWVybyBmb3JtYXRlYWRvLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZvcm1hdERlY2ltYWwodmFsdWUsIGNvbmZpZylcbntcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBZb3UgTVVTVCBzcGVjaWZ5IGEgZmluaXRlIG51bWJlciwgbm90IFske3R5cGVvZiB2YWx1ZX0gPSAke3ZhbHVlfV1gKTtcbiAgICB9XG4gICAgaWYgKCFjb25maWcpXG4gICAge1xuICAgICAgICBjb25maWcgPSB7fTtcbiAgICB9XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb25maWd1cmFjacOzbiBkZWwgcmVzdWx0YWRvLlxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIF9kZWNpbWFsICAgPSB0eXBlb2YgY29uZmlnLmRlY2ltYWwgPT09ICdzdHJpbmcnXG4gICAgICAgID8gY29uZmlnLmRlY2ltYWxcbiAgICAgICAgOiAnLCc7XG4gICAgdmFyIF9wcmVjaXNpb24gPSB0eXBlb2YgY29uZmlnLnByZWNpc2lvbiA9PT0gJ251bWJlcidcbiAgICAgICAgPyBjb25maWcucHJlY2lzaW9uXG4gICAgICAgIDogMjtcbiAgICB2YXIgX3Rob3VzYW5kcyA9IHR5cGVvZiBjb25maWcudGhvdXNhbmRzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGNvbmZpZy50aG91c2FuZHNcbiAgICAgICAgOiAnLic7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPYnRlbmNpw7NuIGRlbCByZXN1bHRhZG8uXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgX3BhcnRzID0gdmFsdWUudG9GaXhlZChfcHJlY2lzaW9uKS5zcGxpdCgnLicpO1xuICAgIF9wYXJ0c1swXSAgPSBfcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgX3Rob3VzYW5kcyk7XG4gICAgLy9cbiAgICByZXR1cm4gX3BhcnRzLmpvaW4oX2RlY2ltYWwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Zvcm1hdC1kZWNpbWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRGF0YVR5cGVGbG9hdCBmcm9tICcuL0Zsb2F0JztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBuw7ptZXJvcyBlbnRlcm9zLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkludGVnZXJcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRmxvYXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUludGVnZXIgZXh0ZW5kcyBqZkRhdGFUeXBlRmxvYXRcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgICAgIHJldHVybiBpc05hTihfdmFsdWUpXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogX3ZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBwcmVjaXNpb24gICAgID0gMDtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlSW50ZWdlci5yZWdpc3RlcignSW50ZWdlcicsIGpmRGF0YVR5cGVJbnRlZ2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnRlZ2VyLm1qcyIsImltcG9ydCBqZkRhdGFUeXBlRmxvYXQgZnJvbSAnLi9GbG9hdCc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgY2FudGlkYWRlcyBtb25ldGFyaWFzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLk1vbmV5XG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkZsb2F0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVNb25leSBleHRlbmRzIGpmRGF0YVR5cGVGbG9hdFxue1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50ZSBwYXJhIGluZGljYXIgcXVlIGVsIHPDrW1ib2xvIG1vbmV0YXJpbyBkZWJlIGlyXG4gICAgICogYSBsYSBpenF1aWVyZGEgZGUgbGEgY2FudGlkYWQgbnVtw6lyaWNhLlxuICAgICAqXG4gICAgICogQGNvbnN0IExFRlRcbiAgICAgKiBAdHlwZSAge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IExFRlQoKSB7XG4gICAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRlIHBhcmEgaW5kaWNhciBxdWUgZWwgc8OtbWJvbG8gbW9uZXRhcmlvIGRlYmUgaXJcbiAgICAgKiBhIGxhIGRlcmVjaGEgZGUgbGEgY2FudGlkYWQgbnVtw6lyaWNhLlxuICAgICAqXG4gICAgICogQGNvbnN0IFJJR0hUXG4gICAgICogQHR5cGUgIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldCBSSUdIVCgpIHtcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFPDrW1ib2xvIGRlIGxhIG1vbmVkYS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjdXJyZW5jeVxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIGN1cnJlbmN5ID0gJ+KCrCc7XG4gICAgLyoqXG4gICAgICogUG9zaWNpw7NuIGRlbCBzw61tYm9sby5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb3NpdGlvblxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHBvc2l0aW9uID0gJ3JpZ2h0JztcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIGxldCBfdmFsdWUgPSBzdXBlci50b1N0cmluZygpO1xuICAgICAgICBpZiAoX3ZhbHVlICYmIHRoaXMuY3VycmVuY3kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgICAgICAgICBpZiAoX3Bvc2l0aW9uID09PSBqZkRhdGFUeXBlTW9uZXkuTEVGVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfdmFsdWUgPSB0aGlzLmN1cnJlbmN5ICsgX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3Bvc2l0aW9uID09PSBqZkRhdGFUeXBlTW9uZXkuUklHSFQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX3ZhbHVlICs9IHRoaXMuY3VycmVuY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZU1vbmV5LnJlZ2lzdGVyKCdNb25leScsIGpmRGF0YVR5cGVNb25leSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTW9uZXkubWpzIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgb2JqZXRvcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5PYmplY3RcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlT2JqZWN0IGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBNYXBlYSBsYXMgcHJvcGllZGFkZXMgZGUgbGEgaW5zdGFuY2lhIGNvbiBudWV2b3Mgbm9tYnJlc1xuICAgICAqIHBlcm1pdGllbmRvIGNhbWJpYXIgYWwgdnVlbG8gbGEgYXNpZ25hY2nDs24gZGUgbG9zIHZhbG9yZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJHByb3BlcnR5TWFwXG4gICAgICogQHR5cGUgICAgIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICAkcHJvcGVydHlNYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhY2nDs24gZGUgbGFzIHByb3BpZWRhZGVzIGRlIGxhIGNsYXNlLlxuICAgICAqXG4gICAgICogRXMgdW4gb2JqZXRvIGRvbmRlIGxhcyBjbGF2ZXMgc29uIGxhcyBwcm9waWVkYWRlcyBleGlzdGVudGVzIGVuIGxhIGNsYXNlXG4gICAgICogeSBlbCB2YWxvciBlcyBlbCB0aXBvIGRlIGRhdG9zIGFzaWduYWRvIGEgZXNhIHByb3BpZWRhZC5cbiAgICAgKlxuICAgICAqIENhZGEgY2xhdmUgZGViZSBjb3JyZXNwb25kZXIgY29uIHVuYSBwcm9waWVkYWQgZGVmaW5pZGEgZW4gbGEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjbGFzcyBNeVR5cGUgZXh0ZW5kcyBqZkRhdGFUeXBlT2JqZWN0XG4gICAgICoge1xuICAgICAqICAgICBhbW91bnQgPSBudWxsO1xuICAgICAqICAgICBuYW1lID0gbnVsbDtcbiAgICAgKiAgICAgJHByb3BlcnR5VHlwZXMgPSB7XG4gICAgICogICAgICAgIGFtb3VudCA6IGpmRGF0YVR5cGVNb25leSxcbiAgICAgKiAgICAgICAgbmFtZSAgIDogamZEYXRhVHlwZVN0cmluZ1xuICAgICAqICAgICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHByb3BlcnR5ICRwcm9wZXJ0eVR5cGVzXG4gICAgICogQHR5cGUgICAgIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICAkcHJvcGVydHlUeXBlcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2Egc2kgc2UgdXNhIGVsIG1hcGVvIGN1YW5kbyBzZSBkZXZ1ZWx2ZW4gbG9zIHZhbG9yZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICAkdXNlTWFwID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBNYXBlYSBsb3MgdmFsb3JlcyBjb24gbm9tYnJlcyBkZSBwcm9waWVkYWRlcyBkZSBsYSBpbnN0YW5jaWEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9yZW1hcFxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyBWYWxvcmVzIGEgcmVtYXBlYXIuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlbWFwKHZhbHVlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IF9tYXAgPSB0aGlzLiRwcm9wZXJ0eU1hcDtcbiAgICAgICAgaWYgKF9tYXAgJiYgdHlwZW9mIF9tYXAgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF9wcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhfbWFwKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfb2xkTmFtZSA9IF9tYXBbX3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBpZiAoX29sZE5hbWUgaW4gdmFsdWVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW19wcm9wZXJ0eV0gPSB2YWx1ZXNbX29sZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVzW19vbGROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBfcHJvcGVydHlUcGVzID0gdGhpcy4kcHJvcGVydHlUeXBlcztcbiAgICAgICAgICAgIGlmIChfcHJvcGVydHlUcGVzICYmIHR5cGVvZiBfcHJvcGVydHlUcGVzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IF92YWx1ZSA9IHsuLi52YWx1ZX07XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtYXAoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IF9wcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhfdmFsdWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcm9wZXJ0eSBpbiBfcHJvcGVydHlUcGVzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19wcm9wZXJ0eV0gPSBfQ2xhc3MuY3JlYXRlKF9wcm9wZXJ0eVRwZXNbX3Byb3BlcnR5XSwgX3ZhbHVlW19wcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnNldFZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHZhbHVlT2YoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlcyAgICAgICA9IHt9O1xuICAgICAgICBjb25zdCBfcHJvcGVydHlUcGVzID0gdGhpcy4kcHJvcGVydHlUeXBlcztcbiAgICAgICAgaWYgKF9wcm9wZXJ0eVRwZXMgJiYgdHlwZW9mIF9wcm9wZXJ0eVRwZXMgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBfbWFwID0gdGhpcy4kdXNlTWFwXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRwcm9wZXJ0eU1hcCB8fCB7fVxuICAgICAgICAgICAgICAgIDoge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF9uYW1lIG9mIE9iamVjdC5rZXlzKF9wcm9wZXJ0eVRwZXMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXNbX25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChfdmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZXNbX21hcFtfbmFtZV0gfHwgX25hbWVdID0gX3ZhbHVlIGluc3RhbmNlb2YgamZEYXRhVHlwZUJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZhbHVlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3ZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzZXRQcm9wZXJ0aWVzKHZhbHVlcylcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZU9iamVjdC5yZWdpc3RlcignT2JqZWN0JywgamZEYXRhVHlwZU9iamVjdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT2JqZWN0Lm1qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSB0ZXh0b3MuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuU3RyaW5nXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZVN0cmluZyBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogU3RyaW5nKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvU3RyaW5nKClcbiAgICAgICAgICAgIDogU3RyaW5nKF92YWx1ZSB8fCAnJyk7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVTdHJpbmcucmVnaXN0ZXIoJ1N0cmluZycsIGpmRGF0YVR5cGVTdHJpbmcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0cmluZy5tanMiLCJpbXBvcnQgamZEYXRhVHlwZURhdGVUaW1lIGZyb20gJy4vRGF0ZVRpbWUnO1xuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBob3Jhcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5UaW1lXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkRhdGVUaW1lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVUaW1lIGV4dGVuZHMgamZEYXRhVHlwZURhdGVUaW1lXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRGb3JtYXQgPSAnSEg6bW0nO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9KU09OKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBzdXBlci50b0pTT04oKVxuICAgICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLmZvcm1hdERhdGUoX3ZhbHVlLCAnSEg6bW06c3MnKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZVRpbWUucmVnaXN0ZXIoJ1RpbWUnLCBqZkRhdGFUeXBlVGltZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVGltZS5tanMiXSwic291cmNlUm9vdCI6IiJ9
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
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 82), __esModule: true };

/***/ }),
/* 2 */
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
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
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 8);

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
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 90);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 94);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 8);

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

var store = __webpack_require__(/*! ./_shared */ 35)('wks');
var uid = __webpack_require__(/*! ./_uid */ 24);
var Symbol = __webpack_require__(/*! ./_global */ 10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/get.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ 1);

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
/* 8 */
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
/* 9 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 10);
var core = __webpack_require__(/*! ./_core */ 0);
var ctx = __webpack_require__(/*! ./_ctx */ 30);
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
/* 10 */
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
/* 11 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 13);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 47);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 31);
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
/* 12 */
/*!**********************!*\
  !*** ./src/Base.mjs ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jf_factory__ = __webpack_require__(/*! jf-factory */ 102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jf_factory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jf_factory__);







/**
 * Factoría para los tipos de datos.
 *
 * @type {Factory}
 */
var factory = __WEBPACK_IMPORTED_MODULE_5_jf_factory___default.a.i('jf-data-types');
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
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeBase);

        this.nullable = true;
        this.validators = null;
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
     * @property nullable
     * @type     {Boolean}
     */


    /**
     * Validadores a usar para verificar el valor de la instancia.
     *
     * Cada elemento del array puede ser una función o un objeto
     * con al menos la clave `fn`.
     *
     * @property validators
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


    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(jfDataTypeBase, [{
        key: 'setProperties',


        /**
         * Asigna las propiedades de la clase a partir de un objeto.
         *
         * @param {Object} values Valores a asignar.
         */
        value: function setProperties(values) {
            if (values && (typeof values === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(values)) === 'object') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(values)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
         * la propiedad `validators`.
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
                _isValid = this.nullable;
            } else {
                var _validators = this.validators;
                if (_validators) {
                    if (!Array.isArray(_validators)) {
                        _validators = [_validators];
                    }
                    if (_validators.length) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_validators), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
                if (value && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(value)) === 'object' && !Array.isArray(value)) {
                    _instance.setProperties(value);
                } else {
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
    }]);

    return jfDataTypeBase;
}();

jfDataTypeBase.parser = null;
/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeBase);

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
var IObject = __webpack_require__(/*! ./_iobject */ 51);
var defined = __webpack_require__(/*! ./_defined */ 28);
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

var dP = __webpack_require__(/*! ./_object-dp */ 11);
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
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 50);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36);

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
var defined = __webpack_require__(/*! ./_defined */ 28);
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
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 62)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 46)(String, 'String', function (iterated) {
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
/* 27 */
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
/* 28 */
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
/* 29 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var dPs = __webpack_require__(/*! ./_object-dps */ 65);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 48)('iframe');
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
/* 33 */
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
/* 34 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 35)('keys');
var uid = __webpack_require__(/*! ./_uid */ 24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 36 */
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
/* 37 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 11).f;
var has = __webpack_require__(/*! ./_has */ 15);
var TAG = __webpack_require__(/*! ./_wks */ 6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 38 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 6);


/***/ }),
/* 39 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 10);
var core = __webpack_require__(/*! ./_core */ 0);
var LIBRARY = __webpack_require__(/*! ./_library */ 29);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 38);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 41 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 25);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 31);
var has = __webpack_require__(/*! ./_has */ 15);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 47);
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
/* 42 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 9);
var core = __webpack_require__(/*! ./_core */ 0);
var fails = __webpack_require__(/*! ./_fails */ 19);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 43 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 97), __esModule: true };

/***/ }),
/* 44 */
/*!**************************!*\
  !*** ./src/DateTime.mjs ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Base__ = __webpack_require__(/*! ./Base */ 12);










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
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(jfDataTypeDateTime, _jfDataTypeBase);

    function jfDataTypeDateTime() {
        var _ref;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeDateTime);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeDateTime.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeDateTime)).call.apply(_ref, [this].concat(args))), _this), _this.format = '', _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
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


    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(jfDataTypeDateTime, [{
        key: 'toJSON',


        /**
         * @override
         */
        value: function toJSON() {
            var _value = this.value;

            return _value === null ? __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(jfDataTypeDateTime.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeDateTime.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'yyyy-MM-ddTHH:mm:ss');
        }

        /**
         * @override
         */

    }, {
        key: 'toString',
        value: function toString() {
            var _value = this.value;

            return _value === null ? __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(jfDataTypeDateTime.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeDateTime.prototype), 'toString', this).call(this) : this.constructor.formatDate(_value, this.format || this.constructor.defaultFormat);
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
}(__WEBPACK_IMPORTED_MODULE_8__Base__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeDateTime.parser = function (value) {
    switch (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(value)) {
        case 'number':
            if (value > 0) {
                value = new Date(value);
            }
            break;
        case 'object':
            if (Array.isArray(value) && value.length) {
                value = new (Function.prototype.bind.apply(Date, [null].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(value))))();
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
/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeDateTime);
jfDataTypeDateTime.register('DateTime', jfDataTypeDateTime);

/***/ }),
/* 45 */
/*!***********************!*\
  !*** ./src/Float.mjs ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_format_decimal__ = __webpack_require__(/*! format-decimal */ 114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_format_decimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_format_decimal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Base__ = __webpack_require__(/*! ./Base */ 12);








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
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(jfDataTypeFloat, _jfDataTypeBase);

  function jfDataTypeFloat() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeFloat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeFloat.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeFloat)).call.apply(_ref, [this].concat(args))), _this), _this.decimal = ',', _this.precision = 2, _this.thousands = '.', _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
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


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(jfDataTypeFloat, [{
    key: 'toString',


    /**
     *
     * @override
     */
    value: function toString() {
      var _value = this.value;

      return typeof _value === 'number' ? __WEBPACK_IMPORTED_MODULE_5_format_decimal___default()(_value, this) : '';
    }
  }]);

  return jfDataTypeFloat;
}(__WEBPACK_IMPORTED_MODULE_6__Base__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeFloat.parser = function (value) {
  var _value = parseFloat(value);

  return isNaN(_value) ? null : _value;
};

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeFloat);
jfDataTypeFloat.register('Float', jfDataTypeFloat);

/***/ }),
/* 46 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 29);
var $export = __webpack_require__(/*! ./_export */ 9);
var redefine = __webpack_require__(/*! ./_redefine */ 49);
var hide = __webpack_require__(/*! ./_hide */ 17);
var Iterators = __webpack_require__(/*! ./_iterators */ 21);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 64);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 37);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 53);
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
/* 47 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 14) && !__webpack_require__(/*! ./_fails */ 19)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 48)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 18);
var document = __webpack_require__(/*! ./_global */ 10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 49 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 17);


/***/ }),
/* 50 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 15);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 66)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 34)('IE_PROTO');

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
/* 51 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 53 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 15);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 69);
var global = __webpack_require__(/*! ./_global */ 10);
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
/* 55 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 50);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 56 */
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 99), __esModule: true };

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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Array__ = __webpack_require__(/*! ./Array */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Base__ = __webpack_require__(/*! ./Base */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Boolean__ = __webpack_require__(/*! ./Boolean */ 103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Date__ = __webpack_require__(/*! ./Date */ 104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateTime__ = __webpack_require__(/*! ./DateTime */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Enum__ = __webpack_require__(/*! ./Enum */ 113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Float__ = __webpack_require__(/*! ./Float */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Integer__ = __webpack_require__(/*! ./Integer */ 115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Money__ = __webpack_require__(/*! ./Money */ 116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Object__ = __webpack_require__(/*! ./Object */ 117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__String__ = __webpack_require__(/*! ./String */ 123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Time__ = __webpack_require__(/*! ./Time */ 124);













/**
 * Índice del paquete.
 *
 * @author    Joaquín Fernández
 * @namespace jf.dataType
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    'Array': __WEBPACK_IMPORTED_MODULE_0__Array__["a" /* default */],
    'Base': __WEBPACK_IMPORTED_MODULE_1__Base__["a" /* default */],
    'Boolean': __WEBPACK_IMPORTED_MODULE_2__Boolean__["a" /* default */],
    'Date': __WEBPACK_IMPORTED_MODULE_3__Date__["a" /* default */],
    'DateTime': __WEBPACK_IMPORTED_MODULE_4__DateTime__["a" /* default */],
    'Enum': __WEBPACK_IMPORTED_MODULE_5__Enum__["a" /* default */],
    'Float': __WEBPACK_IMPORTED_MODULE_6__Float__["a" /* default */],
    'Integer': __WEBPACK_IMPORTED_MODULE_7__Integer__["a" /* default */],
    'Money': __WEBPACK_IMPORTED_MODULE_8__Money__["a" /* default */],
    'Object': __WEBPACK_IMPORTED_MODULE_9__Object__["a" /* default */],
    'String': __WEBPACK_IMPORTED_MODULE_10__String__["a" /* default */],
    'Time': __WEBPACK_IMPORTED_MODULE_11__Time__["a" /* default */]
});

/***/ }),
/* 59 */
/*!***********************!*\
  !*** ./src/Array.mjs ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Base__ = __webpack_require__(/*! ./Base */ 12);









/**
 * Clase para el manejo de arrays de un solo tipo de datos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Array
 * @extends   jf.dataType.Base
 */

var jfDataTypeArray = function (_jfDataTypeBase) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(jfDataTypeArray, _jfDataTypeBase);

    function jfDataTypeArray() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeArray);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (jfDataTypeArray.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeArray)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(jfDataTypeArray, [{
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
            var _value = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(jfDataTypeArray.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeArray.prototype), 'valueOf', this).call(this);

            return Array.isArray(_value) ? _value.map(function (v) {
                return v instanceof __WEBPACK_IMPORTED_MODULE_7__Base__["a" /* default */] ? v.valueOf() : v;
            }) : null;
        }
        /**
         * @override
         */

    }]);

    return jfDataTypeArray;
}(__WEBPACK_IMPORTED_MODULE_7__Base__["a" /* default */]);
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
            var _hasConfig = _config && (typeof _config === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_config)) === 'object';
            var _type = _defaults.type;
            value = value.map(function (value) {
                if (!(value instanceof __WEBPACK_IMPORTED_MODULE_7__Base__["a" /* default */])) {
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

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeArray);
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

__webpack_require__(/*! ../../modules/es6.string.iterator */ 26);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 54);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 38).f('iterator');


/***/ }),
/* 62 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 27);
var defined = __webpack_require__(/*! ./_defined */ 28);
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

var create = __webpack_require__(/*! ./_object-create */ 32);
var descriptor = __webpack_require__(/*! ./_property-desc */ 20);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 37);
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

var dP = __webpack_require__(/*! ./_object-dp */ 11);
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
var toLength = __webpack_require__(/*! ./_to-length */ 52);
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

var toInteger = __webpack_require__(/*! ./_to-integer */ 27);
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

var document = __webpack_require__(/*! ./_global */ 10).document;
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
module.exports = __webpack_require__(/*! ./_iter-define */ 46)(Array, 'Array', function (iterated, kind) {
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
var global = __webpack_require__(/*! ./_global */ 10);
var has = __webpack_require__(/*! ./_has */ 15);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 14);
var $export = __webpack_require__(/*! ./_export */ 9);
var redefine = __webpack_require__(/*! ./_redefine */ 49);
var META = __webpack_require__(/*! ./_meta */ 75).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 19);
var shared = __webpack_require__(/*! ./_shared */ 35);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 37);
var uid = __webpack_require__(/*! ./_uid */ 24);
var wks = __webpack_require__(/*! ./_wks */ 6);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 38);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 39);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 76);
var isArray = __webpack_require__(/*! ./_is-array */ 77);
var anObject = __webpack_require__(/*! ./_an-object */ 13);
var isObject = __webpack_require__(/*! ./_is-object */ 18);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 16);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 31);
var createDesc = __webpack_require__(/*! ./_property-desc */ 20);
var _create = __webpack_require__(/*! ./_object-create */ 32);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 78);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 41);
var $DP = __webpack_require__(/*! ./_object-dp */ 11);
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
  __webpack_require__(/*! ./_object-gopn */ 55).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 25).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 40).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 29)) {
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
var setDesc = __webpack_require__(/*! ./_object-dp */ 11).f;
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
var gOPS = __webpack_require__(/*! ./_object-gops */ 40);
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
var cof = __webpack_require__(/*! ./_cof */ 33);
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
var gOPN = __webpack_require__(/*! ./_object-gopn */ 55).f;
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

__webpack_require__(/*! ./_wks-define */ 39)('asyncIterator');


/***/ }),
/* 81 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 39)('observable');


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
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 53);

__webpack_require__(/*! ./_object-sap */ 42)('getPrototypeOf', function () {
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

var $export = __webpack_require__(/*! ./_export */ 9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 14), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 11).f });


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
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 41).f;

__webpack_require__(/*! ./_object-sap */ 42)('getOwnPropertyDescriptor', function () {
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
var $export = __webpack_require__(/*! ./_export */ 9);
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
        set = __webpack_require__(/*! ./_ctx */ 30)(Function.call, __webpack_require__(/*! ./_object-gopd */ 41).f(Object.prototype, '__proto__').set, 2);
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

var $export = __webpack_require__(/*! ./_export */ 9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 32) });


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

__webpack_require__(/*! ./_object-sap */ 42)('keys', function () {
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

__webpack_require__(/*! ../modules/web.dom.iterable */ 54);
__webpack_require__(/*! ../modules/es6.string.iterator */ 26);
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
var cof = __webpack_require__(/*! ./_cof */ 33);
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
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * Instancias de factorías.
 * Permite usar la clase como un singleton.
 *
 * @type {Object}
 */
let instances = {};
/**
 * Clase usada como una factoría de instancias.
 * Se pueden crear distintas instancias para manejar diferentes registros.
 * Si solamente se desea un registro, se puede usar como un singleton
 * llamando al método `i()`.
 *
 * @namespace jf
 * @class     jf.Factory
 */
module.exports = class Factory
{
    /**
     * Constructor de la clase.
     *
     * @constructor
     */
    constructor()
    {
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
    create(name, config)
    {
        let _instance;
        let _Class = typeof name === 'function'
            ? name
            : this.get(name);
        if (_Class && typeof _Class === 'function')
        {
            // En algunos casos usando `babel` el pasar `config` como parámetro no
            // permite asignar las propiedades. En esos casos se debe usar un método auxiliar.
            const _initMethod = this.initMethod;
            if (_initMethod)
            {
                _instance = new _Class();
                if (typeof _instance[_initMethod] === 'function')
                {
                    _instance[_initMethod](config);
                }
            }
            else
            {
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
    clear(method = '')
    {
        if (method)
        {
            const _registry = this.$$registry;
            for (const _name of Object.keys(_registry))
            {
                const _Class = _registry[_name];
                if (typeof _Class[_name] === 'function' && _Class[_name]() !== false)
                {
                    delete _registry[_name];
                }
            }
        }
        else
        {
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
    get(name)
    {
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
    register(name, Class)
    {
        this.$$registry[name] = Class;
    }

    /**
     * Elimina una clase del registro.
     *
     * @method unregister
     *
     * @param {String} name Nombre con el que se registró la clase.
     */
    unregister(name)
    {
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
    static i(name = '')
    {
        if (!(name in instances))
        {
            instances[name] = new Factory();
        }

        return instances[name];
    }
};


/***/ }),
/* 103 */
/*!*************************!*\
  !*** ./src/Boolean.mjs ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Base__ = __webpack_require__(/*! ./Base */ 12);










/**
 * Clase para el manejo de valores booleanos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Boolean
 * @extends   jf.dataType.Base
 */

var jfDataTypeBoolean = function (_jfDataTypeBase) {
    __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(jfDataTypeBoolean, _jfDataTypeBase);

    function jfDataTypeBoolean() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeBoolean);

        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (jfDataTypeBoolean.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeBoolean)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(jfDataTypeBoolean, [{
        key: 'toString',


        /**
         * @override
         */
        value: function toString() {
            var _value = this.value;

            return _value === null ? __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(jfDataTypeBoolean.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeBoolean.prototype), 'toString', this).call(this) : _value ? 'true' : 'false';
        }
        /**
         * @override
         */

    }]);

    return jfDataTypeBoolean;
}(__WEBPACK_IMPORTED_MODULE_8__Base__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeBoolean.parser = function (value) {
    // Si es un objeto y no tiene claves se asumirá como un valor vacío y el valor asignado será `false`.
    if (value && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(value)) === 'object' && !Array.isArray(value)) {
        value = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(value);
    }

    return value === 'off' || value === '0' || Array.isArray(value) && value.length === 0 ? false : Boolean(value);
};

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeBoolean);
jfDataTypeBoolean.register('Boolean', jfDataTypeBoolean);

/***/ }),
/* 104 */
/*!**********************!*\
  !*** ./src/Date.mjs ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateTime__ = __webpack_require__(/*! ./DateTime */ 44);








/**
 * Clase para el manejo de fechas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Date
 * @extends   jf.dataType.DateTime
 */

var jfDataTypeDate = function (_jfDataTypeDateTime) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(jfDataTypeDate, _jfDataTypeDateTime);

  function jfDataTypeDate() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeDate);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (jfDataTypeDate.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeDate)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(jfDataTypeDate, [{
    key: 'toJSON',


    /**
     * @override
     */
    value: function toJSON() {
      var _value = this.value;

      return _value === null ? __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(jfDataTypeDate.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeDate.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'yyyy-MM-dd');
    }
    /**
     * @override
     */

  }]);

  return jfDataTypeDate;
}(__WEBPACK_IMPORTED_MODULE_6__DateTime__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeDate.defaultFormat = 'yyyy-MM-dd';
/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeDate);
jfDataTypeDate.register('Date', jfDataTypeDate);

/***/ }),
/* 105 */
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
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

__webpack_require__(/*! ../../modules/es6.string.iterator */ 26);
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

var ctx = __webpack_require__(/*! ./_ctx */ 30);
var $export = __webpack_require__(/*! ./_export */ 9);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var call = __webpack_require__(/*! ./_iter-call */ 109);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 110);
var toLength = __webpack_require__(/*! ./_to-length */ 52);
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

var $defineProperty = __webpack_require__(/*! ./_object-dp */ 11);
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
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Base__ = __webpack_require__(/*! ./Base */ 12);








/**
 * Clase para manejar enumeraciones.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Enum
 * @extends   jf.dataType.Base
 */

var jfDataTypeEnum = function (_jfDataTypeBase) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(jfDataTypeEnum, _jfDataTypeBase);

  /**
   * @override
   */


  /**
   * Valor a seleccionar por defecto.
   *
   * @property defValue
   * @type     {*}
   */
  function jfDataTypeEnum() {
    var _ref;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeEnum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeEnum.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeEnum)).call.apply(_ref, [this].concat(args)));

    _this.allowedValues = [];
    _this.defValue = null;

    _this.validators = [function (value) {
      return _this.allowedValues.includes(value);
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
   * @property allowedValues
   * @type     {Array}
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(jfDataTypeEnum, [{
    key: 'loadDefault',
    value: function loadDefault() {
      var _default = this.defValue;
      this.value = this.allowedValues.includes(_default) ? _default : null;
    }

    /**
     * @override
     */

  }, {
    key: 'setProperties',
    value: function setProperties(values) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(jfDataTypeEnum.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeEnum.prototype), 'setProperties', this).call(this, values);
      if (values && (typeof values === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(values)) === 'object' && 'defValue' in values && this.value === null) {
        this.loadDefault();
      }
    }
  }]);

  return jfDataTypeEnum;
}(__WEBPACK_IMPORTED_MODULE_7__Base__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeEnum.parser = function (value) {
  return this.allowedValues.includes(value) ? value : null;
};

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeEnum);
__WEBPACK_IMPORTED_MODULE_7__Base__["a" /* default */].register('Enum', jfDataTypeEnum);

/***/ }),
/* 114 */
/*!**********************************************!*\
  !*** ./node_modules/format-decimal/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! exports used: default */
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
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Float__ = __webpack_require__(/*! ./Float */ 45);






/**
 * Clase para el manejo de números enteros.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Integer
 * @extends   jf.dataType.Float
 */

var jfDataTypeInteger = function (_jfDataTypeFloat) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(jfDataTypeInteger, _jfDataTypeFloat);

  function jfDataTypeInteger() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeInteger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeInteger.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeInteger)).call.apply(_ref, [this].concat(args))), _this), _this.precision = 0, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }
  /**
   * @override
   */


  /**
   * @override
   */


  return jfDataTypeInteger;
}(__WEBPACK_IMPORTED_MODULE_4__Float__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeInteger.parser = function (value) {
  var _value = parseInt(value, 10);

  return isNaN(_value) ? null : _value;
};

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeInteger);
jfDataTypeInteger.register('Integer', jfDataTypeInteger);

/***/ }),
/* 116 */
/*!***********************!*\
  !*** ./src/Money.mjs ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Float__ = __webpack_require__(/*! ./Float */ 45);








/**
 * Clase para el manejo de cantidades monetarias.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Money
 * @extends   jf.dataType.Float
 */

var jfDataTypeMoney = function (_jfDataTypeFloat) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(jfDataTypeMoney, _jfDataTypeFloat);

    function jfDataTypeMoney() {
        var _ref;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeMoney);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeMoney.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeMoney)).call.apply(_ref, [this].concat(args))), _this), _this.currency = '€', _this.position = 'right', _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(jfDataTypeMoney, [{
        key: 'toString',


        /**
         * @override
         */
        value: function toString() {
            var _value = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(jfDataTypeMoney.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeMoney.prototype), 'toString', this).call(this);
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
}(__WEBPACK_IMPORTED_MODULE_6__Float__["a" /* default */]);
//------------------------------------------------------------------------------


/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeMoney);
jfDataTypeMoney.register('Money', jfDataTypeMoney);

/***/ }),
/* 117 */
/*!************************!*\
  !*** ./src/Object.mjs ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(/*! babel-runtime/helpers/extends */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Base__ = __webpack_require__(/*! ./Base */ 12);












/**
 * Clase para el manejo de objetos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Object
 * @extends   jf.dataType.Base
 */

var jfDataTypeObject = function (_jfDataTypeBase) {
    __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(jfDataTypeObject, _jfDataTypeBase);

    function jfDataTypeObject() {
        var _ref;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeObject);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = jfDataTypeObject.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeObject)).call.apply(_ref, [this].concat(args))), _this), _this.$propertyMap = null, _this.$propertyTypes = null, _temp), __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
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


    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(jfDataTypeObject, [{
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
            if (_map && (typeof _map === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(_map)) === 'object') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(_map)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
            if (value && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(value)) === 'object') {
                var _propertyTpes = this.$propertyTypes;
                if (_propertyTpes && (typeof _propertyTpes === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(_propertyTpes)) === 'object') {
                    var _Class = this.constructor;
                    var _value = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, value);
                    this._remap(_value);
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(_value)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
            __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_get___default()(jfDataTypeObject.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeObject.prototype), 'setValue', this).call(this, null);
        }

        /**
         * @override
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            var _values = {};
            var _propertyTpes = this.$propertyTypes;
            if (_propertyTpes && (typeof _propertyTpes === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(_propertyTpes)) === 'object') {
                var _map = this.$propertyMap || {};
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(_propertyTpes)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _name = _step3.value;

                        var _value = this[_name];
                        if (_value !== undefined) {
                            _values[_map[_name] || _name] = _value instanceof __WEBPACK_IMPORTED_MODULE_10__Base__["a" /* default */] ? _value.value : _value;
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
}(__WEBPACK_IMPORTED_MODULE_10__Base__["a" /* default */]);
//------------------------------------------------------------------------------


/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeObject);
jfDataTypeObject.register('Object', jfDataTypeObject);

/***/ }),
/* 118 */
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! exports used: default */
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
var $export = __webpack_require__(/*! ./_export */ 9);

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
var gOPS = __webpack_require__(/*! ./_object-gops */ 40);
var pIE = __webpack_require__(/*! ./_object-pie */ 25);
var toObject = __webpack_require__(/*! ./_to-object */ 23);
var IObject = __webpack_require__(/*! ./_iobject */ 51);
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
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Base__ = __webpack_require__(/*! ./Base */ 12);








/**
 * Clase para el manejo de textos.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.String
 * @extends   jf.dataType.Base
 */

var jfDataTypeString = function (_jfDataTypeBase) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(jfDataTypeString, _jfDataTypeBase);

  function jfDataTypeString() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeString);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (jfDataTypeString.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeString)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(jfDataTypeString, [{
    key: 'toString',


    /**
     * @override
     */
    value: function toString() {
      var _value = this.value;

      return _value === null ? __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(jfDataTypeString.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeString.prototype), 'toString', this).call(this) : String(_value || '');
    }
    /**
     * @override
     */

  }]);

  return jfDataTypeString;
}(__WEBPACK_IMPORTED_MODULE_6__Base__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeString.parser = function (value) {
  return value === null || value === undefined ? '' : String(value);
};

/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeString);
jfDataTypeString.register('String', jfDataTypeString);

/***/ }),
/* 124 */
/*!**********************!*\
  !*** ./src/Time.mjs ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(/*! babel-runtime/helpers/get */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DateTime__ = __webpack_require__(/*! ./DateTime */ 44);







/**
 * Clase para el manejo de horas.
 *
 *
 * @namespace jf.dataType
 * @class     jf.dataType.Time
 * @extends   jf.dataType.DateTime
 */

var jfDataTypeTime = function (_jfDataTypeDateTime) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(jfDataTypeTime, _jfDataTypeDateTime);

  function jfDataTypeTime() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, jfDataTypeTime);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (jfDataTypeTime.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeTime)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(jfDataTypeTime, [{
    key: 'toJSON',


    /**
     * @override
     */
    value: function toJSON() {
      var _value = this.value;

      return _value === null ? __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(jfDataTypeTime.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(jfDataTypeTime.prototype), 'toJSON', this).call(this) : this.constructor.formatDate(_value, 'HH:mm:ss');
    }
    /**
     * @override
     */

  }]);

  return jfDataTypeTime;
}(__WEBPACK_IMPORTED_MODULE_6__DateTime__["a" /* default */]);
//------------------------------------------------------------------------------


jfDataTypeTime.defaultFormat = 'HH:mm';
/* harmony default export */ __webpack_exports__["a"] = (jfDataTypeTime);
jfDataTypeTime.register('Time', jfDataTypeTime);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMDdkNjc1MzdlNGY5YjgzYTJjNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zsb2F0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubWpzIiwid2VicGFjazovLy8uL3NyYy9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamYtZmFjdG9yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbi5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtYXQtZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZWdlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vbmV5Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmcubWpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lLm1qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiamZGYWN0b3J5IiwiaSIsImluaXRNZXRob2QiLCJqZkRhdGFUeXBlQmFzZSIsIm51bGxhYmxlIiwidmFsaWRhdG9ycyIsIiQkdmFsdWUiLCJ2YWx1ZXMiLCJfcHJvcGVydHkiLCJfdmFsdWUiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsIl9wYXJzZXIiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImNhbGwiLCJTdHJpbmciLCJfaXNWYWxpZCIsIl92YWxpZGF0b3JzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiX3ZhbGlkYXRvciIsImZuIiwidmFsaWRhdGUiLCJ2YWx1ZU9mIiwic2V0VmFsdWUiLCJuYW1lIiwiX2luc3RhbmNlIiwiY3JlYXRlIiwic2V0UHJvcGVydGllcyIsInRvRml4ZWQiLCJyZXBlYXQiLCJzdWJzdHIiLCJDbGFzcyIsInJlZ2lzdGVyIiwiY3VzdG9tU3ltYm9scyIsImQiLCJkYXRlIiwiZ2V0RGF0ZSIsImRkIiwiamZEYXRhVHlwZURhdGVUaW1lIiwicGFkIiwiSCIsImdldEhvdXJzIiwiSEgiLCJtIiwiZ2V0TWludXRlcyIsIm1tIiwiTSIsImdldE1vbnRoIiwiTU0iLCJzIiwiZ2V0U2Vjb25kcyIsInNzIiwieSIsImdldEZ1bGxZZWFyIiwieXkiLCJ0b1N0cmluZyIsInl5eXkiLCJmb3JtYXQiLCJmb3JtYXREYXRlIiwiZGVmYXVsdEZvcm1hdCIsInN5bWJvbCIsImhhbmRsZXIiLCJfcmVzdWx0IiwiRGF0ZSIsInJlcGxhY2UiLCJ0b0lTT1N0cmluZyIsIl90aW1lIiwicGFyc2UiLCJpc05hTiIsImpmRGF0YVR5cGVGbG9hdCIsImRlY2ltYWwiLCJwcmVjaXNpb24iLCJ0aG91c2FuZHMiLCJqZkZvcm1hdERlY2ltYWwiLCJwYXJzZUZsb2F0IiwiamZEYXRhVHlwZVRpbWUiLCJqZkRhdGFUeXBlQXJyYXkiLCJtYXAiLCJ2IiwiZGVmYXVsdHMiLCJjb25maWciLCJ0eXBlIiwiX0NsYXNzIiwiX2RlZmF1bHRzIiwiX2NvbmZpZyIsIl9oYXNDb25maWciLCJfdHlwZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqZkRhdGFUeXBlQm9vbGVhbiIsImpmRGF0YVR5cGVEYXRlIiwiamZEYXRhVHlwZUVudW0iLCJhcmdzIiwiYWxsb3dlZFZhbHVlcyIsImRlZlZhbHVlIiwiaW5jbHVkZXMiLCJfZGVmYXVsdCIsImxvYWREZWZhdWx0IiwiamZEYXRhVHlwZUludGVnZXIiLCJwYXJzZUludCIsImpmRGF0YVR5cGVNb25leSIsImN1cnJlbmN5IiwicG9zaXRpb24iLCJfcG9zaXRpb24iLCJMRUZUIiwiUklHSFQiLCJqZkRhdGFUeXBlT2JqZWN0IiwiJHByb3BlcnR5TWFwIiwiJHByb3BlcnR5VHlwZXMiLCJfbWFwIiwiX29sZE5hbWUiLCJfcHJvcGVydHlUcGVzIiwiX3JlbWFwIiwiX3ZhbHVlcyIsIl9uYW1lIiwiamZEYXRhVHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REEsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7Ozs7Ozs7O0FDRHZDLGtCQUFrQiwwRzs7Ozs7Ozs7Ozs7O0FDQWxCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7O0FBRUE7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QVUsSUFBVixJQUFrQkEsVUFBVUQsU0FBNUIsR0FDRCxFQURDLEdBRURNLE9BQU9MLEtBQVAsQ0FGTjtBQUdILEM7O3lEQVZnQjJHLGdCO0FBeUJyQkEsaUJBQWlCbkYsUUFBakIsQ0FBMEIsUUFBMUIsRUFBb0NtRixnQkFBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7Ozs7Ozs7SUFRcUJ4QyxjOzs7Ozs7Ozs7Ozs7O0FBT2pCOzs7NkJBSUE7QUFDSSxVQUFNckUsU0FBUyxLQUFLRSxLQUFwQjs7QUFFQSxhQUFPRixXQUFXLElBQVgseVBBRUQsS0FBS0ksV0FBTCxDQUFpQmdELFVBQWpCLENBQTRCcEQsTUFBNUIsRUFBb0MsVUFBcEMsQ0FGTjtBQUdIO0FBZkQ7Ozs7Ozs7RUFGd0MsMEQ7QUFtQjVDOzs7QUFuQnFCcUUsYyxDQUtWaEIsYSxHQUFnQixPO3lEQUxOZ0IsYztBQW9CckJBLGVBQWUzQyxRQUFmLENBQXdCLE1BQXhCLEVBQWdDMkMsY0FBaEMsRSIsImZpbGUiOiJqZkRhdGFUeXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhdGFUeXBlc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqZlwiXSA9IHJvb3RbXCJqZlwiXSB8fCB7fSwgcm9vdFtcImpmXCJdW1wiZGF0YVR5cGVzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjA3ZDY3NTM3ZTRmOWI4M2EyYzciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjQnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRmFjdG9yeSBmcm9tICdqZi1mYWN0b3J5JztcblxuLyoqXG4gKiBGYWN0b3LDrWEgcGFyYSBsb3MgdGlwb3MgZGUgZGF0b3MuXG4gKlxuICogQHR5cGUge0ZhY3Rvcnl9XG4gKi9cbmNvbnN0IGZhY3RvcnkgPSBqZkZhY3RvcnkuaSgnamYtZGF0YS10eXBlcycpO1xuZmFjdG9yeS5pbml0TWV0aG9kID0gJ3NldFByb3BlcnRpZXMnO1xuLyoqXG4gKiBDbGFzZSBxdWUgcmVwcmVzZW50YSB1biBjYW1wbyBkZSB1bmEgdGFibGEgbyByZXNwdWVzdGEgZGVsIHNlcnZpZG9yLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGEgdXNhciBwYXJhIGFuYWxpemFyIGVsIHZhbG9yIGRlIGVudHJhZGEgeSBxdWUgZGViZXLDoSBkZXZvbHZlclxuICAgICAqIGVsIHZhbG9yIGEgYXNpZ25hciBhIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJzZXJcbiAgICAgKiBAdHlwZSAgICAge0Z1bmN0aW9ufG51bGx9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhIHNpIGVsIGNhbXBvIHB1ZWRlIHNlciBgbnVsbGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbnVsbGFibGVcbiAgICAgKiBAdHlwZSAgICAge0Jvb2xlYW59XG4gICAgICovXG4gICAgbnVsbGFibGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRhZG9yZXMgYSB1c2FyIHBhcmEgdmVyaWZpY2FyIGVsIHZhbG9yIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIENhZGEgZWxlbWVudG8gZGVsIGFycmF5IHB1ZWRlIHNlciB1bmEgZnVuY2nDs24gbyB1biBvYmpldG9cbiAgICAgKiBjb24gYWwgbWVub3MgbGEgY2xhdmUgYGZuYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2YWxpZGF0b3JzXG4gICAgICogQHR5cGUgICAgIHtPYmplY3RbXXxGdW5jdGlvbltdfG51bGx9XG4gICAgICovXG4gICAgdmFsaWRhdG9ycyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBWYWxvciBkZWwgY2FtcG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJCR2YWx1ZVxuICAgICAqIEB0eXBlICAgICB7Kn1cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAkJHZhbHVlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFzaWduYSBsYXMgcHJvcGllZGFkZXMgZGUgbGEgY2xhc2UgYSBwYXJ0aXIgZGUgdW4gb2JqZXRvLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyBWYWxvcmVzIGEgYXNpZ25hci5cbiAgICAgKi9cbiAgICBzZXRQcm9wZXJ0aWVzKHZhbHVlcylcbiAgICB7XG4gICAgICAgIGlmICh2YWx1ZXMgJiYgdHlwZW9mIHZhbHVlcyA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX3Byb3BlcnR5IG9mIE9iamVjdC5rZXlzKHZhbHVlcykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9wZXJ0eVswXSAhPT0gJyQnICYmIF9wcm9wZXJ0eVswXSAhPT0gJ18nICYmIF9wcm9wZXJ0eSBpbiB0aGlzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3ZhbHVlID0gdmFsdWVzW19wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfcHJvcGVydHldID0gX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNpZ25hIGVsIHZhbG9yIGRlIGxhIGNsYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWxvciBhIGFzaWduYXIuXG4gICAgICovXG4gICAgc2V0VmFsdWUodmFsdWUpXG4gICAge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuJCR2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBfcGFyc2VyID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZXI7XG4gICAgICAgICAgICB0aGlzLiQkdmFsdWUgID0gdHlwZW9mIF9wYXJzZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IF9wYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0pTT04vc3RyaW5naWZ5I3RvSlNPTigpX2JlaGF2aW9yXG4gICAgICovXG4gICAgdG9KU09OKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvdG9TdHJpbmdcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogU3RyaW5nKF92YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhIGVsIHZhbG9yIGRlIGxhIGluc3RhbmNpYSB1c2FuZG8gbG9zIHZhbGlkYWRvcmVzIGVzcGVjaWZpY2Fkb3MgZW5cbiAgICAgKiBsYSBwcm9waWVkYWQgYHZhbGlkYXRvcnNgLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB2YWxpZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIHNpIGVsIHZhbG9yIGVzIHbDoWxpZG8uXG4gICAgICovXG4gICAgdmFsaWRhdGUoKVxuICAgIHtcbiAgICAgICAgbGV0IF9pc1ZhbGlkO1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLiQkdmFsdWU7XG4gICAgICAgIGlmIChfdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pc1ZhbGlkID0gdGhpcy5udWxsYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBfdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdG9ycztcbiAgICAgICAgICAgIGlmIChfdmFsaWRhdG9ycylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3ZhbGlkYXRvcnMpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbGlkYXRvcnMgPSBbX3ZhbGlkYXRvcnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3ZhbGlkYXRvcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBfdmFsaWRhdG9yIG9mIF92YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF92YWxpZGF0b3IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgZXMgdW5hIGZ1bmNpw7NuIHNlIGxsYW1hIGNvbiB1biBzb2xvIHBhcsOhbWV0cm8sIGVsIHZhbG9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gX3ZhbGlkYXRvcihfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX3ZhbGlkYXRvciAmJiB0eXBlb2YgX3ZhbGlkYXRvci5mbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBlcyB1biBvYmpldG8sIHNlIHBhc2EgY29tbyBzZWd1bmRvIHBhcsOhbWV0cm8gZWwgcHJvcGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZXRvIHBhcmEgcGVybWl0aXIgY29uZmlndXJhciBlbCB2YWxpZGFkb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWQgPSBfdmFsaWRhdG9yLmZuKF92YWx1ZSwgX3ZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2kgc2UgZXNwZWNpZmljw7MgdW4gdmFsaWRhZG9yIGluY29ycmVjdG8sIGRldm9sdmVtb3MgYGZhbHNlYC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXNWYWxpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaSBsb3MgdmFsaWRhZG9yZXMgZXN0w6FuIHZhY8Otb3MsIGRhbW9zIHBvciBidWVubyBjdWFscXVpZXIgdmFsb3IuXG4gICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9pc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldnVlbHZlIGVsIHZhbG9yIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzaWduYSBlbCB2YWxvciBkZSBsYSBpbnN0YW5jaWEuXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC92YWx1ZU9mXG4gICAgICovXG4gICAgdmFsdWVPZigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpXG4gICAgICAgICAgICA/IHRoaXMuJCR2YWx1ZVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnV5ZSBsYSBpbnN0YW5jaWEgZGVsIHRpcG8gZGUgZGF0b3MgZXNwZWNpZmljYWRvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfENsYXNzfSBuYW1lICBOb21icmUgZGVsIHRpcG8gZGUgZGF0byBvIHJlZmVyZW5jaWEgZGUgbGEgY2xhc2UuXG4gICAgICogQHBhcmFtIHsqP30gICAgICAgICAgIHZhbHVlIENvbmZpZ3VyYWNpw7NuIGEgYXBsaWNhciBhIGxhIG51ZXZhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2pmLmRhdGFUeXBlLkJhc2V8dW5kZWZpbmVkfSBJbnN0YW5jaWEgY29uc3RydWlkYS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKG5hbWUsIHZhbHVlKVxuICAgIHtcbiAgICAgICAgbGV0IF9pbnN0YW5jZSA9IGZhY3RvcnkuY3JlYXRlKG5hbWUpO1xuICAgICAgICBpZiAoX2luc3RhbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLnNldFByb3BlcnRpZXModmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVsbGVuYSB1bmEgY2FudGlkYWQgY29uIGNlcm9zIGEgbGEgaXpxdWllcmRhLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBwYWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAgVmFsb3IgYSBmb3JtYXRlYXIuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBMb25naXR1ZCBkZWwgdGV4dG8gcmVzdWx0YW50ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gTsO6bWVybyBmb3JtYXRlYWRvLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBwYWQodmFsdWUsIGxlbmd0aCA9IDIpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICByZXR1cm4gX3ZhbHVlLmxlbmd0aCA8IGxlbmd0aFxuICAgICAgICAgICAgPyAoJzAnLnJlcGVhdChsZW5ndGgpICsgX3ZhbHVlKS5zdWJzdHIoLWxlbmd0aClcbiAgICAgICAgICAgIDogX3ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdHJhIGxhIHJlZmVyZW5jaWEgZGUgbGEgY2xhc2UgcXVlIG1hbmVqYSBlbCB0aXBvIGRlIGRhdG8gZXNwZWNpZmljYWRvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTm9tYnJlIGRlbCB0aXBvIGRlIGRhdG8uXG4gICAgICogQHBhcmFtIHtDbGFzc30gIENsYXNzIFJlZmVyZW5jaWEgZGUgbGEgY2xhc2UgcXVlIG1hbmVqYSBlbCB0aXBvIGRlIGRhdG8uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIHJlZ2lzdGVyKG5hbWUsIENsYXNzKVxuICAgIHtcbiAgICAgICAgZmFjdG9yeS5yZWdpc3RlcihuYW1lLCBDbGFzcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Jhc2UubWpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkRhdGFUeXBlQmFzZSBmcm9tICcuL0Jhc2UnO1xuXG4vKipcbiAqIE1hbmVqYWRvcmVzIHBhcmEgbG9zIHPDrW1ib2xvcyB1c2Fkb3MgZW4gbG9zIGZvcm1hdG9zIGRlIGxhcyBmZWNoYXMuXG4gKlxuICogU2UgcHVlZGVuIHJlZ2lzdHJhciBvdHJvcyBtYW5lamFkb3Jlcy4gUG9yIGVqZW1wbG8gcGFyYSBlbCBmb3JtYXRvICdlZWVlJyAocXVlXG4gKiBkZXBlbmRlIGRlbCBpZGlvbWEpIHNlIHBvZHLDrWEgaGFjZXI6XG4gKlxuICogYGBgXG4gKiBqZkRhdGFUeXBlRGF0ZVRpbWUucmVnaXN0ZXJTeW1ib2woXG4gKiAgICAgJ2VlZWUnLFxuICogICAgIGRhdGUgPT4gdHIoJ3dlZWtkYXknICsgZGF0ZS5nZXREYXkoKSlcbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICpcbiAqIEBzZWUgaHR0cDovL3VzZXJndWlkZS5pY3UtcHJvamVjdC5vcmcvZm9ybWF0cGFyc2UvZGF0ZXRpbWVcbiAqL1xuY29uc3QgY3VzdG9tU3ltYm9scyA9IHtcbiAgICBkICAgIDogZGF0ZSA9PiBkYXRlLmdldERhdGUoKSxcbiAgICBkZCAgIDogZGF0ZSA9PiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFkKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBIICAgIDogZGF0ZSA9PiBkYXRlLmdldEhvdXJzKCksXG4gICAgSEggICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldEhvdXJzKCkpLFxuICAgIG0gICAgOiBkYXRlID0+IGRhdGUuZ2V0TWludXRlcygpLFxuICAgIG1tICAgOiBkYXRlID0+IGpmRGF0YVR5cGVEYXRlVGltZS5wYWQoZGF0ZS5nZXRNaW51dGVzKCkpLFxuICAgIE0gICAgOiBkYXRlID0+IGRhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgTU0gICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBzICAgIDogZGF0ZSA9PiBkYXRlLmdldFNlY29uZHMoKSxcbiAgICBzcyAgIDogZGF0ZSA9PiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFkKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgICB5ICAgIDogZGF0ZSA9PiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgeXkgICA6IGRhdGUgPT4gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyKC0yKSxcbiAgICB5eXl5IDogZGF0ZSA9PiBkYXRlLmdldEZ1bGxZZWFyKClcbn07XG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIGZlY2hhcyBxdWUgaW5jbHV5ZW4gbGFzIGhvcmFzLlxuICogRGVwZW5kaWVuZG8gZGVsIGZvcm1hdG8gcmVjaWJpZG8gZGVsIHNlcnZpZG9yIHBvZHLDrWEgdXNhcnNlXG4gKiBsYSBwcm9waWVkYWQgYHBhcnNlcmAgcGFyYSBkZWZpbmlyIGVsIGFuYWxpemFkb3IgZGVsIHZhbG9yXG4gKiBkZSBlbnRyYWRhLlxuICpcbiAqIGBgYFxuICogLy8gRGlmZXJlbnRlcyBlamVtcGxvcyBkZSBsbyBxdWUgZGViZXLDrWEgcmV0b3JuYXIgZXN0YSBmdW5jacOzblxuICogLy8gcGFyYSB1biBmb3JtYXRvIGRlIGVudHJhZGEgYGRkL21tL1lZWVlgXG4gKiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gKiB7XG4gKiAgICAgY29uc3QgX3BhcnRzID0gdmFsdWUuc3BsaXQoJy8nKTtcbiAqXG4gKiAgICAgcmV0dXJuIFtcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzJdLCAxMCksXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1sxXSwgMTApIC0gMSxcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzBdLCAxMCksXG4gKiAgICAgXVxuICogfVxuICogamZEYXRhVHlwZURhdGVUaW1lLnBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICoge1xuICogICAgIGNvbnN0IF9wYXJ0cyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gKlxuICogICAgIHJldHVybiBuZXcgRGF0ZShcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzJdLCAxMCksXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1sxXSwgMTApIC0gMSxcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzBdLCAxMCksXG4gKiAgICAgKTtcbiAqIH1cbiAqIGpmRGF0YVR5cGVEYXRlVGltZS5wYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAqIHtcbiAqICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJy8nKS5yZXZlcnNlKCkuam9pbignLScpO1xuICogfVxuICogLy9cbiAqIGNvbnN0IF9kYXRlID0gbmV3IGpmRGF0YVR5cGVEYXRlVGltZSgpO1xuICogY29uc29sZS5sb2coX2RhdGUuc2V0VmFsdWUoJzE1LzAxLzIwMTcnKSk7XG4gKiBgYGBcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkRhdGVUaW1lXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZURhdGVUaW1lIGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSguLi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjb25zdCBfdGltZSA9IERhdGUucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oX3RpbWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZShfdGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBwb3IgZGVmZWN0byBwYXJhIGNvbnZlcnRpciBsYSBmZWNoYSBlbiB0ZXh0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWZhdWx0Rm9ybWF0XG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0Rm9ybWF0ID0gJ3l5eXktTU0tZGQgSEg6bW06c3MnO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBhIHVzYXIgcGFyYSBjb252ZXJ0aXIgbGEgZmVjaGEgZW4gdGV4dG8uXG4gICAgICogU2kgbm8gc2UgZXNwZWNpZmljYSBzZSB1c2EgYGRlZmF1bHRGb3JtYXRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZvcm1hdFxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIGZvcm1hdCAgICAgICAgICAgICAgID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvSlNPTigpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsICd5eXl5LU1NLWRkVEhIOm1tOnNzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvU3RyaW5nKClcbiAgICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5mb3JtYXREYXRlKF92YWx1ZSwgdGhpcy5mb3JtYXQgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0Rm9ybWF0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZ3JlZ2EgdW4gc8OtbWJvbG8gYWNlcHRhZG8gZW4gZWwgZm9ybWF0byBkZSBsYSBmZWNoYS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgYWRkU3ltYm9sXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICBzeW1ib2wgIFPDrW1ib2xvIGEgcmVnaXN0cmFyLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY2nDs24gcXVlIHNlIGVqZWN1dGFyw6EgcGFyYSByZWFsaXphciBsYSBjb252ZXJzacOzbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkU3ltYm9sKHN5bWJvbCwgaGFuZGxlcilcbiAgICB7XG4gICAgICAgIGN1c3RvbVN5bWJvbHNbc3ltYm9sXSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0ZWEgdW5hIGZlY2hhIGNvbnZpcnRpw6luZG9sYSBhIHRleHRvLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSAgICBkYXRlICAgRmVjaGEgYSBmb3JtYXRlYXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmc/fSBmb3JtYXQgRm9ybWF0byBkZSBsYSBmZWNoYS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpXG4gICAge1xuICAgICAgICBsZXQgX3Jlc3VsdCA9ICcnO1xuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9yZXN1bHQgPSBmb3JtYXQgJiYgdHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvKFxcdylcXDF7MCwzfS9nLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPT4gc3ltYm9sIGluIGN1c3RvbVN5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3VzdG9tU3ltYm9sc1tzeW1ib2xdKGRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bWJvbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZURhdGVUaW1lLnJlZ2lzdGVyKCdEYXRlVGltZScsIGpmRGF0YVR5cGVEYXRlVGltZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVRpbWUubWpzIiwiaW1wb3J0IGpmRm9ybWF0RGVjaW1hbCBmcm9tICdmb3JtYXQtZGVjaW1hbCc7XG5pbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBuw7ptZXJvcyBkZWNpbWFsZXMuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuRmxvYXRcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICogQHVzZXMgICAgICBqZi5mb3JtYXREZWNpbWFsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVGbG9hdCBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlzTmFOKF92YWx1ZSlcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBfdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFPDrW1ib2xvIGEgdXNhciBwYXJhIGVsIHB1bnRvIGRlY2ltYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVjaW1hbFxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIGRlY2ltYWwgICAgICAgICAgICAgID0gJywnO1xuXG4gICAgLyoqXG4gICAgICogTsO6bWVybyBkZSBkZWNpbWFsZXMgYSBtb3N0cmFyXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcHJlY2lzaW9uXG4gICAgICogQHR5cGUgICAgIHtOdW1iZXJ9XG4gICAgICovXG4gICAgcHJlY2lzaW9uICAgICAgICAgICAgPSAyO1xuXG4gICAgLyoqXG4gICAgICogU8OtbWJvbG8gYSB1c2FyIHBhcmEgbG9zIHNlcGFyYWRvcmVzIGRlIG1pbGVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRob3VzYW5kc1xuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRob3VzYW5kcyAgICAgICAgICAgID0gJy4nO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgX3ZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyBqZkZvcm1hdERlY2ltYWwoX3ZhbHVlLCB0aGlzKVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZUZsb2F0LnJlZ2lzdGVyKCdGbG9hdCcsIGpmRGF0YVR5cGVGbG9hdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRmxvYXQubWpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRGF0YVR5cGVBcnJheSAgICBmcm9tICcuL0FycmF5JztcbmltcG9ydCBqZkRhdGFUeXBlQmFzZSAgICAgZnJvbSAnLi9CYXNlJztcbmltcG9ydCBqZkRhdGFUeXBlQm9vbGVhbiAgZnJvbSAnLi9Cb29sZWFuJztcbmltcG9ydCBqZkRhdGFUeXBlRGF0ZSAgICAgZnJvbSAnLi9EYXRlJztcbmltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG5pbXBvcnQgamZEYXRhVHlwZUVudW0gICAgIGZyb20gJy4vRW51bSc7XG5pbXBvcnQgamZEYXRhVHlwZUZsb2F0ICAgIGZyb20gJy4vRmxvYXQnO1xuaW1wb3J0IGpmRGF0YVR5cGVJbnRlZ2VyICBmcm9tICcuL0ludGVnZXInO1xuaW1wb3J0IGpmRGF0YVR5cGVNb25leSAgICBmcm9tICcuL01vbmV5JztcbmltcG9ydCBqZkRhdGFUeXBlT2JqZWN0ICAgZnJvbSAnLi9PYmplY3QnO1xuaW1wb3J0IGpmRGF0YVR5cGVTdHJpbmcgICBmcm9tICcuL1N0cmluZyc7XG5pbXBvcnQgamZEYXRhVHlwZVRpbWUgICAgIGZyb20gJy4vVGltZSc7XG5cbi8qKlxuICogw41uZGljZSBkZWwgcGFxdWV0ZS5cbiAqXG4gKiBAYXV0aG9yICAgIEpvYXF1w61uIEZlcm7DoW5kZXpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgICdBcnJheScgICAgOiBqZkRhdGFUeXBlQXJyYXksXG4gICAgJ0Jhc2UnICAgICA6IGpmRGF0YVR5cGVCYXNlLFxuICAgICdCb29sZWFuJyAgOiBqZkRhdGFUeXBlQm9vbGVhbixcbiAgICAnRGF0ZScgICAgIDogamZEYXRhVHlwZURhdGUsXG4gICAgJ0RhdGVUaW1lJyA6IGpmRGF0YVR5cGVEYXRlVGltZSxcbiAgICAnRW51bScgICAgIDogamZEYXRhVHlwZUVudW0sXG4gICAgJ0Zsb2F0JyAgICA6IGpmRGF0YVR5cGVGbG9hdCxcbiAgICAnSW50ZWdlcicgIDogamZEYXRhVHlwZUludGVnZXIsXG4gICAgJ01vbmV5JyAgICA6IGpmRGF0YVR5cGVNb25leSxcbiAgICAnT2JqZWN0JyAgIDogamZEYXRhVHlwZU9iamVjdCxcbiAgICAnU3RyaW5nJyAgIDogamZEYXRhVHlwZVN0cmluZyxcbiAgICAnVGltZScgICAgIDogamZEYXRhVHlwZVRpbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgubWpzIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgYXJyYXlzIGRlIHVuIHNvbG8gdGlwbyBkZSBkYXRvcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5BcnJheVxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVBcnJheSBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBkZSBjb25maWd1cmFjacOzbiBwb3IgZGVmZWN0byBwYXJhIGNhZGEgZWxlbWVudG8gZGVsIGFycmF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlZmF1bHRzXG4gICAgICogQHR5cGUgICAgIHtPYmplY3R9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAgICAgY29uZmlnIDoge30sXG4gICAgICAgIHR5cGUgICA6ICdTdHJpbmcnXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24gKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9DbGFzcyAgICAgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9kZWZhdWx0cyAgPSBfQ2xhc3MuZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgY29uc3QgX2NvbmZpZyAgICA9IF9kZWZhdWx0cy5jb25maWc7XG4gICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbmZpZyA9IF9jb25maWcgJiYgdHlwZW9mIF9jb25maWcgPT09ICdvYmplY3QnO1xuICAgICAgICAgICAgICAgIGNvbnN0IF90eXBlICAgICAgPSBfZGVmYXVsdHMudHlwZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgICAgID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIGpmRGF0YVR5cGVCYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX0NsYXNzLmNyZWF0ZShfdHlwZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgX2hhc0NvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2V0UHJvcGVydGllcyhfY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB2YWx1ZU9mKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHN1cGVyLnZhbHVlT2YoKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShfdmFsdWUpXG4gICAgICAgICAgICA/IF92YWx1ZS5tYXAodiA9PiB2IGluc3RhbmNlb2YgamZEYXRhVHlwZUJhc2UgPyB2LnZhbHVlT2YoKSA6IHYpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVBcnJheS5yZWdpc3RlcignQXJyYXknLCBqZkRhdGFUeXBlQXJyYXkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FycmF5Lm1qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnN0YW5jaWFzIGRlIGZhY3RvcsOtYXMuXG4gKiBQZXJtaXRlIHVzYXIgbGEgY2xhc2UgY29tbyB1biBzaW5nbGV0b24uXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xubGV0IGluc3RhbmNlcyA9IHt9O1xuLyoqXG4gKiBDbGFzZSB1c2FkYSBjb21vIHVuYSBmYWN0b3LDrWEgZGUgaW5zdGFuY2lhcy5cbiAqIFNlIHB1ZWRlbiBjcmVhciBkaXN0aW50YXMgaW5zdGFuY2lhcyBwYXJhIG1hbmVqYXIgZGlmZXJlbnRlcyByZWdpc3Ryb3MuXG4gKiBTaSBzb2xhbWVudGUgc2UgZGVzZWEgdW4gcmVnaXN0cm8sIHNlIHB1ZWRlIHVzYXIgY29tbyB1biBzaW5nbGV0b25cbiAqIGxsYW1hbmRvIGFsIG3DqXRvZG8gYGkoKWAuXG4gKlxuICogQG5hbWVzcGFjZSBqZlxuICogQGNsYXNzICAgICBqZi5GYWN0b3J5XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRmFjdG9yeVxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGRlIGxhIGNsYXNlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vbWJyZSBkZWwgbcOpdG9kbyBkZSBpbmljaWFsaXphY2nDs24gYSBsbGFtYXIgY3VhbmRvIHNlIHBhc2VcbiAgICAgICAgICogdW5hIGNvbmZpZ3VyYWNpw7NuIGFsIG3DqXRvZG8gYGJ1aWxkYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXNhbmRvIGBiYWJlbGAgbGFzIHN1YmNsYXNlcyBxdWUgaGFjZW4gdXNvIGRlbCBwbHVnaW5cbiAgICAgICAgICogYGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tY2xhc3MtcHJvcGVydGllc2Agbm8gcHVlZGVuIGFzaWduYXJcbiAgICAgICAgICogbG9zIHZhbG9yZXMgcmVjaWJpZG9zIGVuIGVsIGNvbnN0cnVjdG9yIHlhIHF1ZSBzZSBhc2lnbmFuXG4gICAgICAgICAqIGxhcyBwcm9waWVkYWRlcyB1c2FuZG8gZXN0ZSBwbHVnaW4gZGVzcHXDqXMgZGUgYXNpZ25hciBlc29zXG4gICAgICAgICAqIHZhbG9yZXMgeSBzZSBwaWVyZGVuIGxhIGFzaWduYWNpw7NuIGFudGVyaW9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgaW5pdE1ldGhvZFxuICAgICAgICAgKiBAdHlwZSAgICAge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdE1ldGhvZCA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0cm8gZGUgY2xhc2VzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgJCRyZWdpc3RyeVxuICAgICAgICAgKiBAdHlwZSAgICAge09iamVjdH1cbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiQkcmVnaXN0cnkgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhIHVuYSBpbnN0YW5jaWEgZGUgdW5hIGNsYXNlIHJlZ2lzdHJhZGEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgICBOb21icmUgY29uIGVsIHF1ZSBzZSBoYSByZWdpc3RyYWRvIGxhIGNsYXNlLlxuICAgICAqIEBwYXJhbSB7Kj99ICAgICBjb25maWcgQ29uZmlndXJhY2nDs24gYSBhcGxpY2FyIGEgbGEgbnVldmEgaW5zdGFuY2lhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q2xhc3N9IEluc3RhbmNpYSBkZSBsYSBjbGFzZSBjb25zdHJ1aWRhIG8gYHVuZGVmaW5lZGAgc2kgbm8gZXhpc3RlIGxhIGNsYXNlLlxuICAgICAqL1xuICAgIGNyZWF0ZShuYW1lLCBjb25maWcpXG4gICAge1xuICAgICAgICBsZXQgX2luc3RhbmNlO1xuICAgICAgICBsZXQgX0NsYXNzID0gdHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gbmFtZVxuICAgICAgICAgICAgOiB0aGlzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKF9DbGFzcyAmJiB0eXBlb2YgX0NsYXNzID09PSAnZnVuY3Rpb24nKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBFbiBhbGd1bm9zIGNhc29zIHVzYW5kbyBgYmFiZWxgIGVsIHBhc2FyIGBjb25maWdgIGNvbW8gcGFyw6FtZXRybyBub1xuICAgICAgICAgICAgLy8gcGVybWl0ZSBhc2lnbmFyIGxhcyBwcm9waWVkYWRlcy4gRW4gZXNvcyBjYXNvcyBzZSBkZWJlIHVzYXIgdW4gbcOpdG9kbyBhdXhpbGlhci5cbiAgICAgICAgICAgIGNvbnN0IF9pbml0TWV0aG9kID0gdGhpcy5pbml0TWV0aG9kO1xuICAgICAgICAgICAgaWYgKF9pbml0TWV0aG9kKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pbnN0YW5jZSA9IG5ldyBfQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9pbnN0YW5jZVtfaW5pdE1ldGhvZF0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2VbX2luaXRNZXRob2RdKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pbnN0YW5jZSA9IG5ldyBfQ2xhc3MoY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVybWl0ZSBsaW1waWFyIGVsIHJlZ2lzdHJvIHBhcmEgbGliZXJhciBsYSBtZW1vcmlhIGFsIGVsaW1pbmFyIGxhcyByZWZlcmVuY2lhcy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgTm9tYnJlIGRlbCBtw6l0b2RvIHF1ZSBzZSBsbGFtYXLDoSBlbiBjYWRhIGNsYXNlIHJlZ2lzdHJhZGEgYW50ZXMgZGUgZWxpbWluYXJzZS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIFNpIHJldG9ybmEgYGZhbHNlYCBubyBzZSBlbGltaW5hIGRlbCByZWdpc3Ryby5cbiAgICAgKi9cbiAgICBjbGVhcihtZXRob2QgPSAnJylcbiAgICB7XG4gICAgICAgIGlmIChtZXRob2QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9yZWdpc3RyeSA9IHRoaXMuJCRyZWdpc3RyeTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX25hbWUgb2YgT2JqZWN0LmtleXMoX3JlZ2lzdHJ5KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfQ2xhc3MgPSBfcmVnaXN0cnlbX25hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX0NsYXNzW19uYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBfQ2xhc3NbX25hbWVdKCkgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9yZWdpc3RyeVtfbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy4kJHJlZ2lzdHJ5ID0ge307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXZ1ZWx2ZSBsYSByZWZlcmVuY2lhIGRlIGxhIGNsYXNlIHF1ZSBjb3JyZXNwb25kZSBjb24gZWwgbm9tYnJlIGVzcGVjaWZpY2Fkby5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOb21icmUgcXVlIGhhY2UgcmVmZXJlbmNpYSBhIGxhIGNsYXNlIHF1ZSBzZSBkZXNlYSByZWN1cGVyYXIuXG4gICAgICovXG4gICAgZ2V0KG5hbWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdHJhIGxhIHJlZmVyZW5jaWEgZGUgdW5hIGNsYXNlLlxuICAgICAqXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgIE5vbWJyZSBjb24gZWwgcXVlIHJlZ2lzdHJhcsOhIGxhIGNsYXNlLlxuICAgICAqIEBwYXJhbSB7Q2xhc3N9ICBDbGFzcyBSZWZlcmVuY2lhIGRlIGxhIGNsYXNlIGEgcmVnaXN0cmFyLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyKG5hbWUsIENsYXNzKVxuICAgIHtcbiAgICAgICAgdGhpcy4kJHJlZ2lzdHJ5W25hbWVdID0gQ2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWxpbWluYSB1bmEgY2xhc2UgZGVsIHJlZ2lzdHJvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1bnJlZ2lzdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOb21icmUgY29uIGVsIHF1ZSBzZSByZWdpc3Ryw7MgbGEgY2xhc2UuXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihuYW1lKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuJCRyZWdpc3RyeVtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXZ1ZWx2ZSBsYSBpbnN0YW5jaWEgZGUgbGEgZmFjdG9yw61hIHVzYWRhIGNvbW8gc2luZ2xldG9uLlxuICAgICAqIFNpIG5vIHNlIGhhIGNyZWFkbyBwcmV2aWFtZW50ZSwgc2UgY3JlYSB1bmEgbnVldmEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5vbWJyZSBkZSBsYSBmYWN0b3LDrWEgYSBjb25zdHJ1aXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGYWN0b3J5fVxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBpKG5hbWUgPSAnJylcbiAgICB7XG4gICAgICAgIGlmICghKG5hbWUgaW4gaW5zdGFuY2VzKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaW5zdGFuY2VzW25hbWVdID0gbmV3IEZhY3RvcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZXNbbmFtZV07XG4gICAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pmLWZhY3RvcnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSB2YWxvcmVzIGJvb2xlYW5vcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5Cb29sZWFuXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUJvb2xlYW4gZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIC8vIFNpIGVzIHVuIG9iamV0byB5IG5vIHRpZW5lIGNsYXZlcyBzZSBhc3VtaXLDoSBjb21vIHVuIHZhbG9yIHZhY8OtbyB5IGVsIHZhbG9yIGFzaWduYWRvIHNlcsOhIGBmYWxzZWAuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICdvZmYnIHx8IHZhbHVlID09PSAnMCcgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogQm9vbGVhbih2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBzdXBlci50b1N0cmluZygpXG4gICAgICAgICAgICA6IF92YWx1ZVxuICAgICAgICAgICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgICAgICAgICAgOiAnZmFsc2UnO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlQm9vbGVhbi5yZWdpc3RlcignQm9vbGVhbicsIGpmRGF0YVR5cGVCb29sZWFuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb29sZWFuLm1qcyIsImltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgZmVjaGFzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkRhdGVcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRGF0ZVRpbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZURhdGUgZXh0ZW5kcyBqZkRhdGFUeXBlRGF0ZVRpbWVcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEZvcm1hdCA9ICd5eXl5LU1NLWRkJztcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvSlNPTigpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgID8gc3VwZXIudG9KU09OKClcbiAgICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5mb3JtYXREYXRlKF92YWx1ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZURhdGUucmVnaXN0ZXIoJ0RhdGUnLCBqZkRhdGFUeXBlRGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZS5tanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG4vKipcbiAqIENsYXNlIHBhcmEgbWFuZWphciBlbnVtZXJhY2lvbmVzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkVudW1cbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlRW51bSBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBwZXJtaXRpZG9zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFsbG93ZWRWYWx1ZXNcbiAgICAgKiBAdHlwZSAgICAge0FycmF5fVxuICAgICAqL1xuICAgIGFsbG93ZWRWYWx1ZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFZhbG9yIGEgc2VsZWNjaW9uYXIgcG9yIGRlZmVjdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVmVmFsdWVcbiAgICAgKiBAdHlwZSAgICAgeyp9XG4gICAgICovXG4gICAgZGVmVmFsdWUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uYXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXG4gICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLmFsbG93ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWNjaW9uYSBlbCB2YWxvciBwb3IgZGVmZWN0by5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgbG9hZERlZmF1bHRcbiAgICAgKi9cbiAgICBsb2FkRGVmYXVsdCgpXG4gICAge1xuICAgICAgICBjb25zdCBfZGVmYXVsdCA9IHRoaXMuZGVmVmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgICAgID0gdGhpcy5hbGxvd2VkVmFsdWVzLmluY2x1ZGVzKF9kZWZhdWx0KVxuICAgICAgICAgICAgPyBfZGVmYXVsdFxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHNldFByb3BlcnRpZXModmFsdWVzKVxuICAgIHtcbiAgICAgICAgc3VwZXIuc2V0UHJvcGVydGllcyh2YWx1ZXMpO1xuICAgICAgICBpZiAodmFsdWVzICYmIHR5cGVvZiB2YWx1ZXMgPT09ICdvYmplY3QnICYmICdkZWZWYWx1ZScgaW4gdmFsdWVzICYmIHRoaXMudmFsdWUgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubG9hZERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlQmFzZS5yZWdpc3RlcignRW51bScsIGpmRGF0YVR5cGVFbnVtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbnVtLm1qcyIsIi8qKlxuICogRGV2dWVsdmUgZWwgbsO6bWVybyBlc3BlY2lmaWNhZG8gZm9ybWF0ZWFkbyBjb24gbG9zIHNlcGFyYWRvcmVzIGVzcGVjaWZpY2Fkb3MuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICB2YWx1ZSAgICAgICAgICAgIFZhbG9yIGEgZm9ybWF0ZWFyLlxuICogQHBhcmFtIHtPYmplY3R9ICBjb25maWcgICAgICAgICAgIENvbmZpZ3VyYWNpw7NuIHBhcmEgbW9kaWZpY2FyIGVsIHJlc3VsdGFkby5cbiAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLmRlY2ltYWwgICBTw61tYm9sbyBhIHVzYXIgcGFyYSBlbCBwdW50byBkZWNpbWFsIChgLGAgcG9yIGRlZmVjdG8pLlxuICogQHBhcmFtIHtOdW1iZXJ9ICBjb25maWcucHJlY2lzaW9uIE7Dum1lcm8gZGUgZMOtZ2l0b3MgZGVjaW1hbGVzIGEgbW9zdHJhciAoYDJgIHBvciBkZWZlY3RvKS5cbiAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLnRob3VzYW5kcyBTZXBhcmFkb3IgZGUgbWlsZXMgKCcuJyBwb3IgZGVmZWN0bykuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSBOw7ptZXJvIGZvcm1hdGVhZG8uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRm9ybWF0RGVjaW1hbCh2YWx1ZSwgY29uZmlnKVxue1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFlvdSBNVVNUIHNwZWNpZnkgYSBmaW5pdGUgbnVtYmVyLCBub3QgWyR7dHlwZW9mIHZhbHVlfSA9ICR7dmFsdWV9XWApO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZylcbiAgICB7XG4gICAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbmZpZ3VyYWNpw7NuIGRlbCByZXN1bHRhZG8uXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgX2RlY2ltYWwgICA9IHR5cGVvZiBjb25maWcuZGVjaW1hbCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjb25maWcuZGVjaW1hbFxuICAgICAgICA6ICcsJztcbiAgICB2YXIgX3ByZWNpc2lvbiA9IHR5cGVvZiBjb25maWcucHJlY2lzaW9uID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGNvbmZpZy5wcmVjaXNpb25cbiAgICAgICAgOiAyO1xuICAgIHZhciBfdGhvdXNhbmRzID0gdHlwZW9mIGNvbmZpZy50aG91c2FuZHMgPT09ICdzdHJpbmcnXG4gICAgICAgID8gY29uZmlnLnRob3VzYW5kc1xuICAgICAgICA6ICcuJztcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE9idGVuY2nDs24gZGVsIHJlc3VsdGFkby5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBfcGFydHMgPSB2YWx1ZS50b0ZpeGVkKF9wcmVjaXNpb24pLnNwbGl0KCcuJyk7XG4gICAgX3BhcnRzWzBdICA9IF9wYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBfdGhvdXNhbmRzKTtcbiAgICAvL1xuICAgIHJldHVybiBfcGFydHMuam9pbihfZGVjaW1hbCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9ybWF0LWRlY2ltYWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUZsb2F0IGZyb20gJy4vRmxvYXQnO1xuXG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIG7Dum1lcm9zIGVudGVyb3MuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuSW50ZWdlclxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5GbG9hdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlSW50ZWdlciBleHRlbmRzIGpmRGF0YVR5cGVGbG9hdFxue1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIGlzTmFOKF92YWx1ZSlcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBfdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHByZWNpc2lvbiAgICAgPSAwO1xufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVJbnRlZ2VyLnJlZ2lzdGVyKCdJbnRlZ2VyJywgamZEYXRhVHlwZUludGVnZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVnZXIubWpzIiwiaW1wb3J0IGpmRGF0YVR5cGVGbG9hdCBmcm9tICcuL0Zsb2F0JztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBjYW50aWRhZGVzIG1vbmV0YXJpYXMuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuTW9uZXlcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRmxvYXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZU1vbmV5IGV4dGVuZHMgamZEYXRhVHlwZUZsb2F0XG57XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRlIHBhcmEgaW5kaWNhciBxdWUgZWwgc8OtbWJvbG8gbW9uZXRhcmlvIGRlYmUgaXJcbiAgICAgKiBhIGxhIGl6cXVpZXJkYSBkZSBsYSBjYW50aWRhZCBudW3DqXJpY2EuXG4gICAgICpcbiAgICAgKiBAY29uc3QgTEVGVFxuICAgICAqIEB0eXBlICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTEVGVCgpIHtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdGFudGUgcGFyYSBpbmRpY2FyIHF1ZSBlbCBzw61tYm9sbyBtb25ldGFyaW8gZGViZSBpclxuICAgICAqIGEgbGEgZGVyZWNoYSBkZSBsYSBjYW50aWRhZCBudW3DqXJpY2EuXG4gICAgICpcbiAgICAgKiBAY29uc3QgUklHSFRcbiAgICAgKiBAdHlwZSAge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJJR0hUKCkge1xuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU8OtbWJvbG8gZGUgbGEgbW9uZWRhLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGN1cnJlbmN5XG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICovXG4gICAgY3VycmVuY3kgPSAn4oKsJztcbiAgICAvKipcbiAgICAgKiBQb3NpY2nDs24gZGVsIHPDrW1ib2xvLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICovXG4gICAgcG9zaXRpb24gPSAncmlnaHQnO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IHN1cGVyLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChfdmFsdWUgJiYgdGhpcy5jdXJyZW5jeSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChfcG9zaXRpb24gPT09IGpmRGF0YVR5cGVNb25leS5MRUZUKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF92YWx1ZSA9IHRoaXMuY3VycmVuY3kgKyBfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcG9zaXRpb24gPT09IGpmRGF0YVR5cGVNb25leS5SSUdIVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfdmFsdWUgKz0gdGhpcy5jdXJyZW5jeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlTW9uZXkucmVnaXN0ZXIoJ01vbmV5JywgamZEYXRhVHlwZU1vbmV5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Nb25leS5tanMiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBvYmpldG9zLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLk9iamVjdFxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVPYmplY3QgZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIE1hcGVhIGxhcyBwcm9waWVkYWRlcyBkZSBsYSBpbnN0YW5jaWEgY29uIG51ZXZvcyBub21icmVzXG4gICAgICogcGVybWl0aWVuZG8gY2FtYmlhciBhbCB2dWVsbyBsYSBhc2lnbmFjacOzbiBkZSBsb3MgdmFsb3Jlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkcHJvcGVydHlNYXBcbiAgICAgKiBAdHlwZSAgICAge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgICRwcm9wZXJ0eU1hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmFjacOzbiBkZSBsYXMgcHJvcGllZGFkZXMgZGUgbGEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBFcyB1biBvYmpldG8gZG9uZGUgbGFzIGNsYXZlcyBzb24gbGFzIHByb3BpZWRhZGVzIGV4aXN0ZW50ZXMgZW4gbGEgY2xhc2VcbiAgICAgKiB5IGVsIHZhbG9yIGVzIGVsIHRpcG8gZGUgZGF0b3MgYXNpZ25hZG8gYSBlc2EgcHJvcGllZGFkLlxuICAgICAqXG4gICAgICogQ2FkYSBjbGF2ZSBkZWJlIGNvcnJlc3BvbmRlciBjb24gdW5hIHByb3BpZWRhZCBkZWZpbmlkYSBlbiBsYSBjbGFzZS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNsYXNzIE15VHlwZSBleHRlbmRzIGpmRGF0YVR5cGVPYmplY3RcbiAgICAgKiB7XG4gICAgICogICAgIGFtb3VudCA9IG51bGw7XG4gICAgICogICAgIG5hbWUgPSBudWxsO1xuICAgICAqICAgICAkcHJvcGVydHlUeXBlcyA9IHtcbiAgICAgKiAgICAgICAgYW1vdW50IDogamZEYXRhVHlwZU1vbmV5LFxuICAgICAqICAgICAgICBuYW1lICAgOiBqZkRhdGFUeXBlU3RyaW5nXG4gICAgICogICAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJHByb3BlcnR5VHlwZXNcbiAgICAgKiBAdHlwZSAgICAge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgICRwcm9wZXJ0eVR5cGVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIE1hcGVhIGxvcyB2YWxvcmVzIGNvbiBub21icmVzIGRlIHByb3BpZWRhZGVzIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3JlbWFwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIFZhbG9yZXMgYSByZW1hcGVhci5cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVtYXAodmFsdWVzKVxuICAgIHtcbiAgICAgICAgY29uc3QgX21hcCA9IHRoaXMuJHByb3BlcnR5TWFwO1xuICAgICAgICBpZiAoX21hcCAmJiB0eXBlb2YgX21hcCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX3Byb3BlcnR5IG9mIE9iamVjdC5rZXlzKF9tYXApKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9vbGROYW1lID0gX21hcFtfcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmIChfb2xkTmFtZSBpbiB2YWx1ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbX3Byb3BlcnR5XSA9IHZhbHVlc1tfb2xkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZXNbX29sZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9wcm9wZXJ0eVRwZXMgPSB0aGlzLiRwcm9wZXJ0eVR5cGVzO1xuICAgICAgICAgICAgaWYgKF9wcm9wZXJ0eVRwZXMgJiYgdHlwZW9mIF9wcm9wZXJ0eVRwZXMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9DbGFzcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgY29uc3QgX3ZhbHVlID0gey4uLnZhbHVlfTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1hcChfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgX3Byb3BlcnR5IG9mIE9iamVjdC5rZXlzKF92YWx1ZSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Byb3BlcnR5IGluIF9wcm9wZXJ0eVRwZXMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbX3Byb3BlcnR5XSA9IF9DbGFzcy5jcmVhdGUoX3Byb3BlcnR5VHBlc1tfcHJvcGVydHldLCBfdmFsdWVbX3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdmFsdWVPZigpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWVzICAgICAgID0ge307XG4gICAgICAgIGNvbnN0IF9wcm9wZXJ0eVRwZXMgPSB0aGlzLiRwcm9wZXJ0eVR5cGVzO1xuICAgICAgICBpZiAoX3Byb3BlcnR5VHBlcyAmJiB0eXBlb2YgX3Byb3BlcnR5VHBlcyA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9tYXAgPSB0aGlzLiRwcm9wZXJ0eU1hcCB8fCB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX25hbWUgb2YgT2JqZWN0LmtleXMoX3Byb3BlcnR5VHBlcykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpc1tfbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKF92YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1tfbWFwW19uYW1lXSB8fCBfbmFtZV0gPSBfdmFsdWUgaW5zdGFuY2VvZiBqZkRhdGFUeXBlQmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHNldFByb3BlcnRpZXModmFsdWVzKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlT2JqZWN0LnJlZ2lzdGVyKCdPYmplY3QnLCBqZkRhdGFUeXBlT2JqZWN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PYmplY3QubWpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkRhdGFUeXBlQmFzZSBmcm9tICcuL0Jhc2UnO1xuXG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIHRleHRvcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5TdHJpbmdcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlU3RyaW5nIGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiBTdHJpbmcodmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgID8gc3VwZXIudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiBTdHJpbmcoX3ZhbHVlIHx8ICcnKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZVN0cmluZy5yZWdpc3RlcignU3RyaW5nJywgamZEYXRhVHlwZVN0cmluZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RyaW5nLm1qcyIsImltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIGhvcmFzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLlRpbWVcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRGF0ZVRpbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZVRpbWUgZXh0ZW5kcyBqZkRhdGFUeXBlRGF0ZVRpbWVcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEZvcm1hdCA9ICdISDptbSc7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvSlNPTigpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsICdISDptbTpzcycpO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlVGltZS5yZWdpc3RlcignVGltZScsIGpmRGF0YVR5cGVUaW1lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UaW1lLm1qcyJdLCJzb3VyY2VSb290IjoiIn0=
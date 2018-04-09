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
exports.default = jfDataTypeBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3OTA1MjViYTZjZDIxZDRmODNmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZS5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zsb2F0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubWpzIiwid2VicGFjazovLy8uL3NyYy9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamYtZmFjdG9yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbi5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtYXQtZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZWdlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vbmV5Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmcubWpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lLm1qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiaSIsImluaXRNZXRob2QiLCJqZkRhdGFUeXBlQmFzZSIsIiRudWxsYWJsZSIsIiR2YWxpZGF0b3JzIiwiJCR2YWx1ZSIsInZhbHVlcyIsIl9wcm9wZXJ0eSIsIl92YWx1ZSIsInVuZGVmaW5lZCIsInZhbHVlIiwiX3BhcnNlciIsImNvbnN0cnVjdG9yIiwicGFyc2VyIiwiY2FsbCIsIlN0cmluZyIsIl9pc1ZhbGlkIiwiX3ZhbGlkYXRvcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJfdmFsaWRhdG9yIiwiZm4iLCJ2YWxpZGF0ZSIsInZhbHVlT2YiLCJzZXRWYWx1ZSIsIm5hbWUiLCJfaW5zdGFuY2UiLCJjcmVhdGUiLCJzZXRQcm9wZXJ0aWVzIiwidG9GaXhlZCIsInJlcGVhdCIsInN1YnN0ciIsIkNsYXNzIiwicmVnaXN0ZXIiLCJjdXN0b21TeW1ib2xzIiwiZCIsImRhdGUiLCJnZXREYXRlIiwiZGQiLCJqZkRhdGFUeXBlRGF0ZVRpbWUiLCJwYWQiLCJIIiwiZ2V0SG91cnMiLCJISCIsIm0iLCJnZXRNaW51dGVzIiwibW0iLCJNIiwiZ2V0TW9udGgiLCJNTSIsInMiLCJnZXRTZWNvbmRzIiwic3MiLCJ5IiwiZ2V0RnVsbFllYXIiLCJ5eSIsInRvU3RyaW5nIiwieXl5eSIsImZvcm1hdCIsImZvcm1hdERhdGUiLCJkZWZhdWx0Rm9ybWF0Iiwic3ltYm9sIiwiaGFuZGxlciIsIl9yZXN1bHQiLCJEYXRlIiwicmVwbGFjZSIsInRvSVNPU3RyaW5nIiwiX3RpbWUiLCJwYXJzZSIsImlzTmFOIiwiamZEYXRhVHlwZUZsb2F0IiwiZGVjaW1hbCIsInByZWNpc2lvbiIsInRob3VzYW5kcyIsInBhcnNlRmxvYXQiLCJqZkRhdGFUeXBlQXJyYXkiLCJtYXAiLCJ2IiwiZGVmYXVsdHMiLCJjb25maWciLCJ0eXBlIiwiX0NsYXNzIiwiX2RlZmF1bHRzIiwiX2NvbmZpZyIsIl9oYXNDb25maWciLCJfdHlwZSIsImZpbHRlciIsIkJvb2xlYW4iLCJpbnN0YW5jZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCRyZWdpc3RyeSIsImdldCIsIl9pbml0TWV0aG9kIiwibWV0aG9kIiwiX3JlZ2lzdHJ5IiwiX25hbWUiLCJGYWN0b3J5IiwiamZEYXRhVHlwZUJvb2xlYW4iLCJqZkRhdGFUeXBlRGF0ZSIsImpmRGF0YVR5cGVFbnVtIiwiYXJncyIsIiRhbGxvd2VkVmFsdWVzIiwiJGRlZlZhbHVlIiwiaW5jbHVkZXMiLCJfZGVmYXVsdCIsImpmRGF0YVR5cGVJbnRlZ2VyIiwicGFyc2VJbnQiLCJqZkRhdGFUeXBlTW9uZXkiLCJjdXJyZW5jeSIsInBvc2l0aW9uIiwiX3Bvc2l0aW9uIiwiTEVGVCIsIlJJR0hUIiwiamZEYXRhVHlwZU9iamVjdCIsIiRwcm9wZXJ0eU1hcCIsIiRwcm9wZXJ0eVR5cGVzIiwiJHVzZU1hcCIsIl9tYXAiLCJfb2xkTmFtZSIsIl9wcm9wZXJ0eVRwZXMiLCJfcmVtYXAiLCJfdmFsdWVzIiwiamZEYXRhVHlwZVN0cmluZyIsImpmRGF0YVR5cGVUaW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQSw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7Ozs7Ozs7O0FDRHZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNSQSxrQkFBa0IsMEc7Ozs7Ozs7Ozs7OztBQ0FsQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDMUJEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7Ozs7OztBQ0x6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsVUFBVSxvQkFBVUMsQ0FBVixDQUFZLGVBQVosQ0FBaEI7QUFDQUQsUUFBUUUsVUFBUixHQUFxQixlQUFyQjtBQUNBOzs7Ozs7Ozs7SUFRcUJDLGM7OzthQWtCakJDLFMsR0FBWSxJO2FBV1pDLFcsR0FBYyxJO2FBV2RDLE8sR0FBVSxJOztBQXRDVjs7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7c0NBS2NDLE0sRUFDZDtBQUNJLGdCQUFJQSxVQUFVLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsT0FBa0IsUUFBaEMsRUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLG9FQUF3QixvQkFBWUEsTUFBWixDQUF4Qiw0R0FDQTtBQUFBLDRCQURXQyxTQUNYOztBQUNJLDRCQUFJQSxVQUFVLENBQVYsTUFBaUIsR0FBakIsSUFBd0JBLFVBQVUsQ0FBVixNQUFpQixHQUF6QyxJQUFnREEsYUFBYSxJQUFqRSxFQUNBO0FBQ0ksZ0NBQU1DLFNBQVNGLE9BQU9DLFNBQVAsQ0FBZjtBQUNBLGdDQUFJQyxXQUFXQyxTQUFmLEVBQ0E7QUFDSSxxQ0FBS0YsU0FBTCxJQUFrQkMsTUFBbEI7QUFDSDtBQUNKO0FBQ0o7QUFYTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUM7QUFDSjs7QUFFRDs7Ozs7Ozs7aUNBS1NFLEssRUFDVDtBQUNJLGdCQUFJQSxVQUFVLElBQWQsRUFDQTtBQUNJLHFCQUFLTCxPQUFMLEdBQWUsSUFBZjtBQUNILGFBSEQsTUFLQTtBQUNJLG9CQUFNTSxVQUFVLEtBQUtDLFdBQUwsQ0FBaUJDLE1BQWpDO0FBQ0EscUJBQUtSLE9BQUwsR0FBZ0IsT0FBT00sT0FBUCxLQUFtQixVQUFuQixHQUNWQSxRQUFRRyxJQUFSLENBQWEsSUFBYixFQUFtQkosS0FBbkIsQ0FEVSxHQUVWQSxLQUZOO0FBR0g7QUFDSjs7QUFFRDs7Ozs7Ozs7aUNBTUE7QUFDSSxtQkFBTyxLQUFLQSxLQUFaO0FBQ0g7O0FBRUQ7Ozs7Ozs7O21DQU1BO0FBQ0ksZ0JBQU1GLFNBQVMsS0FBS0UsS0FBcEI7O0FBRUEsbUJBQU9GLFdBQVcsSUFBWCxJQUFtQkEsV0FBV0MsU0FBOUIsR0FDRCxFQURDLEdBRURNLE9BQU9QLE1BQVAsQ0FGTjtBQUdIOztBQUVEOzs7Ozs7Ozs7OzttQ0FTQTtBQUNJLGdCQUFJUSxpQkFBSjtBQUNBLGdCQUFNUixTQUFTLEtBQUtILE9BQXBCO0FBQ0EsZ0JBQUlHLFdBQVcsSUFBZixFQUNBO0FBQ0lRLDJCQUFXLEtBQUtiLFNBQWhCO0FBQ0gsYUFIRCxNQUtBO0FBQ0ksb0JBQUljLGNBQWMsS0FBS2IsV0FBdkI7QUFDQSxvQkFBSWEsV0FBSixFQUNBO0FBQ0ksd0JBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjRixXQUFkLENBQUwsRUFDQTtBQUNJQSxzQ0FBYyxDQUFDQSxXQUFELENBQWQ7QUFDSDtBQUNELHdCQUFJQSxZQUFZRyxNQUFoQixFQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksNkVBQXlCSCxXQUF6QixpSEFDQTtBQUFBLG9DQURXSSxVQUNYOztBQUNJLG9DQUFJLE9BQU9BLFVBQVAsS0FBc0IsVUFBMUIsRUFDQTtBQUNJO0FBQ0FMLCtDQUFXSyxXQUFXYixNQUFYLENBQVg7QUFDSCxpQ0FKRCxNQUtLLElBQUlhLGNBQWMsT0FBT0EsV0FBV0MsRUFBbEIsS0FBeUIsVUFBM0MsRUFDTDtBQUNJO0FBQ0E7QUFDQU4sK0NBQVdLLFdBQVdDLEVBQVgsQ0FBY2QsTUFBZCxFQUFzQmEsVUFBdEIsQ0FBWDtBQUNILGlDQUxJLE1BT0w7QUFDSTtBQUNBTCwrQ0FBVyxLQUFYO0FBQ0g7QUFDRCxvQ0FBSSxDQUFDQSxRQUFMLEVBQ0E7QUFDSTtBQUNIO0FBQ0o7QUF2Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQyxxQkF6QkQsTUEyQkE7QUFDSTtBQUNBQSxtQ0FBVyxJQUFYO0FBQ0g7QUFDSixpQkFyQ0QsTUF1Q0E7QUFDSUEsK0JBQVcsSUFBWDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU9BLFFBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7QUFnQkE7Ozs7O2tDQU1BO0FBQ0ksbUJBQU8sS0FBS08sUUFBTCxLQUNELEtBQUtsQixPQURKLEdBRUQsSUFGTjtBQUdIOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NEJBeEJBO0FBQ0ksbUJBQU8sS0FBS21CLE9BQUwsRUFBUDtBQUNIOztBQUVEOzs7OzBCQUdVZCxLLEVBQ1Y7QUFDSSxpQkFBS2UsUUFBTCxDQUFjZixLQUFkO0FBQ0g7OzsrQkEwQmFnQixJLEVBQU1oQixLLEVBQ3BCO0FBQ0ksZ0JBQUlpQixZQUFZNUIsUUFBUTZCLE1BQVIsQ0FBZUYsSUFBZixDQUFoQjtBQUNBLGdCQUFJQyxTQUFKLEVBQ0E7QUFDSSxvQkFBSWpCLFNBQVMsUUFBT0EsS0FBUCx1REFBT0EsS0FBUCxPQUFpQixRQUExQixJQUFzQyxDQUFDUSxNQUFNQyxPQUFOLENBQWNULEtBQWQsQ0FBM0MsRUFDQTtBQUNJaUIsOEJBQVVFLGFBQVYsQ0FBd0JuQixLQUF4QjtBQUNILGlCQUhELE1BS0E7QUFDSWlCLDhCQUFVakIsS0FBVixHQUFrQkEsS0FBbEI7QUFDSDtBQUNKO0FBQ0QsbUJBQU9pQixTQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs0QkFZV2pCLEssRUFDWDtBQUFBLGdCQURrQlUsTUFDbEIsdUVBRDJCLENBQzNCOztBQUNJLGdCQUFNWixTQUFTRSxNQUFNb0IsT0FBTixDQUFjLENBQWQsQ0FBZjtBQUNBLG1CQUFPdEIsT0FBT1ksTUFBUCxHQUFnQkEsTUFBaEIsR0FDRCxDQUFDLElBQUlXLE1BQUosQ0FBV1gsTUFBWCxJQUFxQlosTUFBdEIsRUFBOEJ3QixNQUE5QixDQUFxQyxDQUFDWixNQUF0QyxDQURDLEdBRURaLE1BRk47QUFHSDs7QUFFRDs7Ozs7Ozs7Ozs7OztpQ0FVZ0JrQixJLEVBQU1PLEssRUFDdEI7QUFDSWxDLG9CQUFRbUMsUUFBUixDQUFpQlIsSUFBakIsRUFBdUJPLEtBQXZCO0FBQ0g7Ozs7O0FBelFnQi9CLGMsQ0FVVlcsTSxHQUFTLEk7a0JBVkNYLGM7Ozs7Ozs7Ozs7OztBQ2pCckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUhBQWlILG1CQUFtQixFQUFFLG1CQUFtQiw0SkFBNEo7O0FBRXJULHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNIRCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsY0FBYzs7Ozs7Ozs7Ozs7O0FDQWQsa0JBQWtCLDhGOzs7Ozs7Ozs7Ozs7QUNBbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOzs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLHVDQUF1QztBQUN2Qzs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsc0JBQXNCO0FBQ2hGLGtGQUFrRix3QkFBd0I7QUFDMUc7Ozs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscURBQXFELE9BQU8sRUFBRTtBQUM5RDs7Ozs7Ozs7Ozs7O0FDVEEsa0JBQWtCLCtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQU1pQyxnQkFBZ0I7QUFDbEJDLE9BQU87QUFBQSxlQUFRQyxLQUFLQyxPQUFMLEVBQVI7QUFBQSxLQURXO0FBRWxCQyxRQUFPO0FBQUEsZUFBUUMsbUJBQW1CQyxHQUFuQixDQUF1QkosS0FBS0MsT0FBTCxFQUF2QixDQUFSO0FBQUEsS0FGVztBQUdsQkksT0FBTztBQUFBLGVBQVFMLEtBQUtNLFFBQUwsRUFBUjtBQUFBLEtBSFc7QUFJbEJDLFFBQU87QUFBQSxlQUFRSixtQkFBbUJDLEdBQW5CLENBQXVCSixLQUFLTSxRQUFMLEVBQXZCLENBQVI7QUFBQSxLQUpXO0FBS2xCRSxPQUFPO0FBQUEsZUFBUVIsS0FBS1MsVUFBTCxFQUFSO0FBQUEsS0FMVztBQU1sQkMsUUFBTztBQUFBLGVBQVFQLG1CQUFtQkMsR0FBbkIsQ0FBdUJKLEtBQUtTLFVBQUwsRUFBdkIsQ0FBUjtBQUFBLEtBTlc7QUFPbEJFLE9BQU87QUFBQSxlQUFRWCxLQUFLWSxRQUFMLEtBQWtCLENBQTFCO0FBQUEsS0FQVztBQVFsQkMsUUFBTztBQUFBLGVBQVFWLG1CQUFtQkMsR0FBbkIsQ0FBdUJKLEtBQUtZLFFBQUwsS0FBa0IsQ0FBekMsQ0FBUjtBQUFBLEtBUlc7QUFTbEJFLE9BQU87QUFBQSxlQUFRZCxLQUFLZSxVQUFMLEVBQVI7QUFBQSxLQVRXO0FBVWxCQyxRQUFPO0FBQUEsZUFBUWIsbUJBQW1CQyxHQUFuQixDQUF1QkosS0FBS2UsVUFBTCxFQUF2QixDQUFSO0FBQUEsS0FWVztBQVdsQkUsT0FBTztBQUFBLGVBQVFqQixLQUFLa0IsV0FBTCxFQUFSO0FBQUEsS0FYVztBQVlsQkMsUUFBTztBQUFBLGVBQVFuQixLQUFLa0IsV0FBTCxHQUFtQkUsUUFBbkIsR0FBOEJ6QixNQUE5QixDQUFxQyxDQUFDLENBQXRDLENBQVI7QUFBQSxLQVpXO0FBYWxCMEIsVUFBTztBQUFBLGVBQVFyQixLQUFLa0IsV0FBTCxFQUFSO0FBQUE7QUFiVyxDQUF0QjtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMENxQmYsa0I7Ozs7Ozs7Ozs7Ozs7O3dPQWtEakJtQixNLEdBQXVCLEU7O0FBaER2Qjs7Ozs7QUFnQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7O0FBU0E7OztpQ0FJQTtBQUNJLGdCQUFNbkQsU0FBUyxLQUFLRSxLQUFwQjs7QUFFQSxtQkFBT0YsV0FBVyxJQUFYLDBKQUVELEtBQUtJLFdBQUwsQ0FBaUJnRCxVQUFqQixDQUE0QnBELE1BQTVCLEVBQW9DLHFCQUFwQyxDQUZOO0FBR0g7O0FBRUQ7Ozs7OzttQ0FJQTtBQUNJLGdCQUFNQSxTQUFTLEtBQUtFLEtBQXBCOztBQUVBLG1CQUFPRixXQUFXLElBQVgsNEpBRUQsS0FBS0ksV0FBTCxDQUFpQmdELFVBQWpCLENBQTRCcEQsTUFBNUIsRUFBb0MsS0FBS21ELE1BQUwsSUFBZSxLQUFLL0MsV0FBTCxDQUFpQmlELGFBQXBFLENBRk47QUFHSDs7QUFFRDs7Ozs7Ozs7Ozs7OztrQ0FVaUJDLE0sRUFBUUMsTyxFQUN6QjtBQUNJNUIsMEJBQWMyQixNQUFkLElBQXdCQyxPQUF4QjtBQUNIOztBQUVEOzs7Ozs7Ozs7bUNBTWtCMUIsSSxFQUFNc0IsTSxFQUN4QjtBQUNJLGdCQUFJSyxVQUFVLEVBQWQ7QUFDQSxnQkFBSTNCLGdCQUFnQjRCLElBQXBCLEVBQ0E7QUFDSUQsMEJBQVVMLFVBQVUsT0FBT0EsTUFBUCxLQUFrQixRQUE1QixHQUNKQSxPQUFPTyxPQUFQLENBQ0UsY0FERixFQUVFO0FBQUEsMkJBQVVKLFVBQVUzQixhQUFWLEdBQ0pBLGNBQWMyQixNQUFkLEVBQXNCekIsSUFBdEIsQ0FESSxHQUVKeUIsTUFGTjtBQUFBLGlCQUZGLENBREksR0FPSnpCLEtBQUs4QixXQUFMLEVBUE47QUFRSDtBQUNELG1CQUFPSCxPQUFQO0FBQ0g7Ozs7QUFFTDs7O0FBbEhxQnhCLGtCLENBS1YzQixNLEdBQVMsVUFBU0gsS0FBVCxFQUNoQjtBQUNJLG1CQUFlQSxLQUFmLHVEQUFlQSxLQUFmO0FBRUksYUFBSyxRQUFMO0FBQ0ksZ0JBQUlBLFFBQVEsQ0FBWixFQUNBO0FBQ0lBLHdCQUFRLElBQUl1RCxJQUFKLENBQVN2RCxLQUFULENBQVI7QUFDSDtBQUNEO0FBQ0osYUFBSyxRQUFMO0FBQ0ksZ0JBQUlRLE1BQU1DLE9BQU4sQ0FBY1QsS0FBZCxLQUF3QkEsTUFBTVUsTUFBbEMsRUFDQTtBQUNJViwyREFBWXVELElBQVosaURBQW9CdkQsS0FBcEI7QUFDSDtBQUNEO0FBQ0osYUFBSyxRQUFMO0FBQ0ksZ0JBQU0wRCxRQUFRSCxLQUFLSSxLQUFMLENBQVczRCxLQUFYLENBQWQ7QUFDQSxnQkFBSSxDQUFDNEQsTUFBTUYsS0FBTixDQUFMLEVBQ0E7QUFDSTFELHdCQUFRLElBQUl1RCxJQUFKLENBQVNHLEtBQVQsQ0FBUjtBQUNIO0FBQ0Q7QUFwQlI7QUFzQkEsV0FBTzFELGlCQUFpQnVELElBQWpCLEdBQ0R2RCxLQURDLEdBRUQsSUFGTjtBQUdILEM7O0FBaENnQjhCLGtCLENBeUNWcUIsYSxHQUFnQixxQjtrQkF6Q05yQixrQjtBQW1IckJBLG1CQUFtQk4sUUFBbkIsQ0FBNEIsVUFBNUIsRUFBd0NNLGtCQUF4QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7O0lBU3FCK0IsZTs7Ozs7Ozs7Ozs7Ozs7OE5Bb0JqQkMsTyxHQUF1QixHLFFBUXZCQyxTLEdBQXVCLEMsUUFRdkJDLFMsR0FBdUIsRzs7QUFsQ3ZCOzs7OztBQVlBOzs7Ozs7OztBQVFBOzs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFRQTs7OzsrQkFLQTtBQUNJLFVBQU1sRSxTQUFTLEtBQUtFLEtBQXBCOztBQUVBLGFBQU8sT0FBT0YsTUFBUCxLQUFrQixRQUFsQixHQUNELDZCQUFnQkEsTUFBaEIsRUFBd0IsSUFBeEIsQ0FEQyxHQUVELEVBRk47QUFHSDs7OztBQUVMOzs7QUFuRHFCK0QsZSxDQUtWMUQsTSxHQUFTLFVBQVNILEtBQVQsRUFDaEI7QUFDSSxNQUFNRixTQUFTbUUsV0FBV2pFLEtBQVgsQ0FBZjs7QUFFQSxTQUFPNEQsTUFBTTlELE1BQU4sSUFDRCxJQURDLEdBRURBLE1BRk47QUFHSCxDOztrQkFaZ0IrRCxlO0FBb0RyQkEsZ0JBQWdCckMsUUFBaEIsQ0FBeUIsT0FBekIsRUFBa0NxQyxlQUFsQyxFOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixhQUFhOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9DQUFvQztBQUM3RSw2Q0FBNkMsb0NBQW9DO0FBQ2pGLEtBQUssNEJBQTRCLG9DQUFvQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBLDBGQUFzRSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDdkcsQ0FBQzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O2tCQU1lO0FBQ1gsNEJBRFc7QUFFWCwwQkFGVztBQUdYLGdDQUhXO0FBSVgsMEJBSlc7QUFLWCxrQ0FMVztBQU1YLDBCQU5XO0FBT1gsNEJBUFc7QUFRWCxnQ0FSVztBQVNYLDRCQVRXO0FBVVgsOEJBVlc7QUFXWCw4QkFYVztBQVlYO0FBWlcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCSyxlOzs7Ozs7Ozs7Ozs7QUF3RGpCOzs7O0FBdERBOzs7Ozs7O2tDQTBEQTtBQUNJLGdCQUFNcEUsd0pBQU47O0FBRUEsbUJBQU9VLE1BQU1DLE9BQU4sQ0FBY1gsTUFBZCxJQUNEQSxPQUFPcUUsR0FBUCxDQUFXO0FBQUEsdUJBQUtDLDhCQUE4QkEsRUFBRXRELE9BQUYsRUFBOUIsR0FBNENzRCxDQUFqRDtBQUFBLGFBQVgsQ0FEQyxHQUVELElBRk47QUFHSDtBQXJERDs7Ozs7OztBQXVESjs7O0FBcEVxQkYsZSxDQVNWRyxRLEdBQVc7QUFDZEMsWUFBUyxFQURLO0FBRWRDLFVBQVM7QUFGSyxDOztBQVRETCxlLENBZ0JWL0QsTSxHQUFTLFVBQVVILEtBQVYsRUFDaEI7QUFDSSxRQUFJUSxNQUFNQyxPQUFOLENBQWNULEtBQWQsQ0FBSixFQUNBO0FBQ0ksWUFBSUEsTUFBTVUsTUFBVixFQUNBO0FBQ0ksZ0JBQU04RCxTQUFhLEtBQUt0RSxXQUF4QjtBQUNBLGdCQUFNdUUsWUFBYUQsT0FBT0gsUUFBMUI7QUFDQSxnQkFBTUssVUFBYUQsVUFBVUgsTUFBN0I7QUFDQSxnQkFBTUssYUFBYUQsV0FBVyxRQUFPQSxPQUFQLHVEQUFPQSxPQUFQLE9BQW1CLFFBQWpEO0FBQ0EsZ0JBQU1FLFFBQWFILFVBQVVGLElBQTdCO0FBQ0F2RSxvQkFBbUJBLE1BQ2RtRSxHQURjLENBRVgsaUJBQVM7QUFDTCxvQkFBSSxFQUFFbkUsK0JBQUYsQ0FBSixFQUNBO0FBQ0lBLDRCQUFRd0UsT0FBT3RELE1BQVAsQ0FBYzBELEtBQWQsRUFBcUI1RSxLQUFyQixDQUFSO0FBQ0Esd0JBQUlBLFNBQVMyRSxVQUFiLEVBQ0E7QUFDSTNFLDhCQUFNbUIsYUFBTixDQUFvQnVELE9BQXBCO0FBQ0g7QUFDSjs7QUFFRCx1QkFBTzFFLEtBQVA7QUFDSCxhQWJVLEVBZWQ2RSxNQWZjLENBZVBDLE9BZk8sQ0FBbkI7QUFnQkgsU0F2QkQsTUF5QkE7QUFDSTlFLG9CQUFRLEVBQVI7QUFDSDtBQUNKLEtBOUJELE1BZ0NBO0FBQ0lBLGdCQUFRLElBQVI7QUFDSDtBQUNELFdBQU9BLEtBQVA7QUFDSCxDOztrQkF0RGdCa0UsZTtBQXFFckJBLGdCQUFnQjFDLFFBQWhCLENBQXlCLE9BQXpCLEVBQWtDMEMsZUFBbEMsRTs7Ozs7Ozs7Ozs7QUMvRUEsa0JBQWtCLGtHOzs7Ozs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5SEFBa0YsYUFBYSxFQUFFOztBQUVqRztBQUNBLHFEQUFxRCw0QkFBNEI7QUFDakY7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZLGVBQWU7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0EsOEJBQThCOzs7Ozs7Ozs7Ozs7QUNBOUI7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7OztBQ0ZBLGtCQUFrQix5Rjs7Ozs7Ozs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsc0JBQXNCLHVCQUF1QixXQUFXLElBQUk7QUFDNUQsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pELEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxnQ0FBZ0M7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxrQkFBa0I7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7O0FBRTNDLG9EQUFvRCw2QkFBNkI7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsZUFBZSxFQUFFO0FBQzNDLDBCQUEwQixnQkFBZ0I7QUFDMUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sUUFBUSxpQ0FBaUM7QUFDcEcsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxDQUFDO0FBQ0Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1QsR0FBRyxFQUFFO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNSRCxrQkFBa0IseUc7Ozs7Ozs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSwyRkFBdUUsK0RBQTRDOzs7Ozs7Ozs7Ozs7QUNGbkgsa0JBQWtCLHFIOzs7Ozs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNSRCxrQkFBa0IsMEc7Ozs7Ozs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQSw4QkFBOEIsa0VBQThDOzs7Ozs7Ozs7Ozs7QUNGNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVksY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkEsa0JBQWtCLGdHOzs7Ozs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0EsOEJBQThCLDBEQUFzQzs7Ozs7Ozs7Ozs7O0FDRnBFO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQixFQUFFOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7OztBQU1BLElBQUlhLFlBQVksRUFBaEI7QUFDQTs7Ozs7Ozs7O0FBU0FDLE9BQU9DLE9BQVA7QUFFSTs7Ozs7QUFLQSx1QkFDQTtBQUFBOztBQUNJOzs7Ozs7Ozs7Ozs7O0FBYUEsYUFBSzFGLFVBQUwsR0FBa0IsRUFBbEI7QUFDQTs7Ozs7OztBQU9BLGFBQUsyRixVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OztBQWpDSjtBQUFBO0FBQUEsK0JBMkNXbEUsSUEzQ1gsRUEyQ2lCc0QsTUEzQ2pCLEVBNENJO0FBQ0ksZ0JBQUlyRCxrQkFBSjtBQUNBLGdCQUFJdUQsU0FBUyxPQUFPeEQsSUFBUCxLQUFnQixVQUFoQixHQUNQQSxJQURPLEdBRVAsS0FBS21FLEdBQUwsQ0FBU25FLElBQVQsQ0FGTjtBQUdBLGdCQUFJd0QsVUFBVSxPQUFPQSxNQUFQLEtBQWtCLFVBQWhDLEVBQ0E7QUFDSTtBQUNBO0FBQ0Esb0JBQU1ZLGNBQWMsS0FBSzdGLFVBQXpCO0FBQ0Esb0JBQUk2RixXQUFKLEVBQ0E7QUFDSW5FLGdDQUFZLElBQUl1RCxNQUFKLEVBQVo7QUFDQSx3QkFBSSxPQUFPdkQsVUFBVW1FLFdBQVYsQ0FBUCxLQUFrQyxVQUF0QyxFQUNBO0FBQ0luRSxrQ0FBVW1FLFdBQVYsRUFBdUJkLE1BQXZCO0FBQ0g7QUFDSixpQkFQRCxNQVNBO0FBQ0lyRCxnQ0FBWSxJQUFJdUQsTUFBSixDQUFXRixNQUFYLENBQVo7QUFDSDtBQUNKOztBQUVELG1CQUFPckQsU0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7QUF2RUo7QUFBQTtBQUFBLGdDQWdGSTtBQUFBLGdCQURNb0UsTUFDTix1RUFEZSxFQUNmOztBQUNJLGdCQUFJQSxNQUFKLEVBQ0E7QUFDSSxvQkFBTUMsWUFBWSxLQUFLSixVQUF2QjtBQURKO0FBQUE7QUFBQTs7QUFBQTtBQUVJLG9FQUFvQixvQkFBWUksU0FBWixDQUFwQiw0R0FDQTtBQUFBLDRCQURXQyxLQUNYOztBQUNJLDRCQUFNZixTQUFTYyxVQUFVQyxLQUFWLENBQWY7QUFDQSw0QkFBSSxPQUFPZixPQUFPZSxLQUFQLENBQVAsS0FBeUIsVUFBekIsSUFBdUNmLE9BQU9lLEtBQVAsUUFBb0IsS0FBL0QsRUFDQTtBQUNJLG1DQUFPRCxVQUFVQyxLQUFWLENBQVA7QUFDSDtBQUNKO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVDLGFBWEQsTUFhQTtBQUNJLHFCQUFLTCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7Ozs7QUFuR0o7QUFBQTtBQUFBLDRCQTBHUWxFLElBMUdSLEVBMkdJO0FBQ0ksbUJBQU8sS0FBS2tFLFVBQUwsQ0FBZ0JsRSxJQUFoQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztBQS9HSjtBQUFBO0FBQUEsaUNBdUhhQSxJQXZIYixFQXVIbUJPLEtBdkhuQixFQXdISTtBQUNJLGlCQUFLMkQsVUFBTCxDQUFnQmxFLElBQWhCLElBQXdCTyxLQUF4QjtBQUNIOztBQUVEOzs7Ozs7OztBQTVISjtBQUFBO0FBQUEsbUNBbUllUCxJQW5JZixFQW9JSTtBQUNJLG1CQUFPLEtBQUtrRSxVQUFMLENBQWdCbEUsSUFBaEIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7O0FBeElKO0FBQUE7QUFBQSw0QkFxSkk7QUFBQSxnQkFEU0EsSUFDVCx1RUFEZ0IsRUFDaEI7O0FBQ0ksZ0JBQUksRUFBRUEsUUFBUStELFNBQVYsQ0FBSixFQUNBO0FBQ0lBLDBCQUFVL0QsSUFBVixJQUFrQixJQUFJd0UsT0FBSixFQUFsQjtBQUNIOztBQUVELG1CQUFPVCxVQUFVL0QsSUFBVixDQUFQO0FBQ0g7QUE1Skw7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOzs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJ5RSxpQjs7Ozs7Ozs7Ozs7O0FBa0JqQjs7O21DQUlBO0FBQ0ksZ0JBQU0zRixTQUFTLEtBQUtFLEtBQXBCOztBQUVBLG1CQUFPRixXQUFXLElBQVgsMEpBRURBLFNBQ08sTUFEUCxHQUVPLE9BSmI7QUFLSDtBQTVCRDs7Ozs7OztBQThCSjs7O0FBaENxQjJGLGlCLENBS1Z0RixNLEdBQVMsVUFBU0gsS0FBVCxFQUNoQjtBQUNJO0FBQ0EsUUFBSUEsU0FBUyxRQUFPQSxLQUFQLHVEQUFPQSxLQUFQLE9BQWlCLFFBQTFCLElBQXNDLENBQUNRLE1BQU1DLE9BQU4sQ0FBY1QsS0FBZCxDQUEzQyxFQUNBO0FBQ0lBLGdCQUFRLG9CQUFZQSxLQUFaLENBQVI7QUFDSDs7QUFFRCxXQUFPQSxVQUFVLEtBQVYsSUFBbUJBLFVBQVUsR0FBN0IsSUFBcUNRLE1BQU1DLE9BQU4sQ0FBY1QsS0FBZCxLQUF3QkEsTUFBTVUsTUFBTixLQUFpQixDQUE5RSxHQUNELEtBREMsR0FFRG9FLFFBQVE5RSxLQUFSLENBRk47QUFHSCxDOztrQkFoQmdCeUYsaUI7QUFpQ3JCQSxrQkFBa0JqRSxRQUFsQixDQUEyQixTQUEzQixFQUFzQ2lFLGlCQUF0QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkMsYzs7Ozs7Ozs7Ozs7O0FBT2pCOzs7NkJBSUE7QUFDSSxVQUFNNUYsU0FBUyxLQUFLRSxLQUFwQjs7QUFFQSxhQUFPRixXQUFXLElBQVgsa0pBRUQsS0FBS0ksV0FBTCxDQUFpQmdELFVBQWpCLENBQTRCcEQsTUFBNUIsRUFBb0MsWUFBcEMsQ0FGTjtBQUdIO0FBZkQ7Ozs7Ozs7QUFpQko7OztBQW5CcUI0RixjLENBS1Z2QyxhLEdBQWdCLFk7a0JBTE51QyxjO0FBb0JyQkEsZUFBZWxFLFFBQWYsQ0FBd0IsTUFBeEIsRUFBZ0NrRSxjQUFoQyxFOzs7Ozs7Ozs7Ozs7QUM5QkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDcEJBLGtCQUFrQiw4Rjs7Ozs7Ozs7Ozs7QUNBbEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlHQUE0RSxrQkFBa0IsRUFBRTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxnQ0FBZ0M7QUFDdkY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxFQUFFO0FBQzVDLENBQUMsWUFBWTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxxQkFBcUI7QUFDM0QsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7OztBQUNBOzs7Ozs7OztJQVFxQkMsYzs7O0FBNEJqQjs7Ozs7QUFsQkE7Ozs7OztBQXFCQSw0QkFDQTtBQUFBOztBQUFBOztBQUFBLHNDQURlQyxJQUNmO0FBRGVBLFVBQ2Y7QUFBQTs7QUFBQSxpTEFDYUEsSUFEYjs7QUFBQSxVQXhCQUMsY0F3QkEsR0F4QmlCLEVBd0JqQjtBQUFBLFVBaEJBQyxTQWdCQSxHQWhCWSxJQWdCWjs7QUFFSSxVQUFLcEcsV0FBTCxHQUFtQixDQUNmO0FBQUEsYUFBUyxNQUFLbUcsY0FBTCxDQUFvQkUsUUFBcEIsQ0FBNkIvRixLQUE3QixDQUFUO0FBQUEsS0FEZSxDQUFuQjtBQUZKO0FBS0M7O0FBRUQ7Ozs7Ozs7QUFyQkE7Ozs7QUFoQkE7Ozs7Ozs7Ozs7a0NBMkNBO0FBQ0ksVUFBTWdHLFdBQVcsS0FBS0YsU0FBdEI7QUFDQSxXQUFLOUYsS0FBTCxHQUFpQixLQUFLNkYsY0FBTCxDQUFvQkUsUUFBcEIsQ0FBNkJDLFFBQTdCLElBQ1hBLFFBRFcsR0FFWCxJQUZOO0FBR0g7Ozs7QUFFTDs7O0FBcERxQkwsYyxDQXFCVnhGLE0sR0FBUyxVQUFTSCxLQUFULEVBQ2hCO0FBQ0ksU0FBTyxLQUFLNkYsY0FBTCxDQUFvQkUsUUFBcEIsQ0FBNkIvRixLQUE3QixJQUNEQSxLQURDLEdBRUQsSUFGTjtBQUdILEM7O2tCQTFCZ0IyRixjO0FBcURyQixlQUFlbkUsUUFBZixDQUF3QixNQUF4QixFQUFnQ21FLGNBQWhDLEU7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxhQUFhLEtBQUssTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBOzs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJNLGlCOzs7Ozs7Ozs7Ozs7OztrT0FpQmpCbEMsUyxHQUFnQixDOztBQWZoQjs7Ozs7QUFZQTs7Ozs7OztBQUtKOzs7QUFuQnFCa0MsaUIsQ0FLVjlGLE0sR0FBUyxVQUFTSCxLQUFULEVBQ2hCO0FBQ0ksTUFBTUYsU0FBU29HLFNBQVNsRyxLQUFULEVBQWdCLEVBQWhCLENBQWY7O0FBRUEsU0FBTzRELE1BQU05RCxNQUFOLElBQ0QsSUFEQyxHQUVEQSxNQUZOO0FBR0gsQzs7a0JBWmdCbUcsaUI7QUFvQnJCQSxrQkFBa0J6RSxRQUFsQixDQUEyQixTQUEzQixFQUFzQ3lFLGlCQUF0QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkUsZTs7Ozs7Ozs7Ozs7Ozs7a09BNkJqQkMsUSxHQUFXLEcsUUFPWEMsUSxHQUFXLE87Ozs7Ozs7QUFFWDs7O21DQUlBO0FBQ0ksZ0JBQUl2Ryx5SkFBSjtBQUNBLGdCQUFJQSxVQUFVLEtBQUtzRyxRQUFuQixFQUNBO0FBQ0ksb0JBQU1FLFlBQVksS0FBS0QsUUFBdkI7QUFDQSxvQkFBSUMsY0FBY0gsZ0JBQWdCSSxJQUFsQyxFQUNBO0FBQ0l6Ryw2QkFBUyxLQUFLc0csUUFBTCxHQUFnQnRHLE1BQXpCO0FBQ0gsaUJBSEQsTUFJSyxJQUFJd0csY0FBY0gsZ0JBQWdCSyxLQUFsQyxFQUNMO0FBQ0kxRyw4QkFBVSxLQUFLc0csUUFBZjtBQUNIO0FBQ0o7QUFDRCxtQkFBT3RHLE1BQVA7QUFDSDs7OztBQXZERDs7Ozs7Ozs0QkFPa0I7QUFDZCxtQkFBTyxNQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT21CO0FBQ2YsbUJBQU8sT0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7QUFPQTs7Ozs7Ozs7OztBQTZCSjs7O2tCQTNEcUJxRyxlO0FBNERyQkEsZ0JBQWdCM0UsUUFBaEIsQ0FBeUIsT0FBekIsRUFBa0MyRSxlQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBOzs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJNLGdCOzs7Ozs7Ozs7Ozs7OztvT0FTakJDLFksR0FBZSxJLFFBeUJmQyxjLEdBQWlCLEksUUFPakJDLE8sR0FBVSxLOztBQXZDVjs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7OzsrQkFTT2hILE0sRUFDUDtBQUNJLGdCQUFNaUgsT0FBTyxLQUFLSCxZQUFsQjtBQUNBLGdCQUFJRyxRQUFRLFFBQU9BLElBQVAsdURBQU9BLElBQVAsT0FBZ0IsUUFBNUIsRUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLG9FQUF3QixvQkFBWUEsSUFBWixDQUF4Qiw0R0FDQTtBQUFBLDRCQURXaEgsU0FDWDs7QUFDSSw0QkFBTWlILFdBQVdELEtBQUtoSCxTQUFMLENBQWpCO0FBQ0EsNEJBQUlpSCxZQUFZbEgsTUFBaEIsRUFDQTtBQUNJQSxtQ0FBT0MsU0FBUCxJQUFvQkQsT0FBT2tILFFBQVAsQ0FBcEI7QUFDQSxtQ0FBT2xILE9BQU9rSCxRQUFQLENBQVA7QUFDSDtBQUNKO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVDO0FBQ0o7O0FBRUQ7Ozs7OztpQ0FHUzlHLEssRUFDVDtBQUNJLGdCQUFJQSxTQUFTLFFBQU9BLEtBQVAsdURBQU9BLEtBQVAsT0FBaUIsUUFBOUIsRUFDQTtBQUNJLG9CQUFNK0csZ0JBQWdCLEtBQUtKLGNBQTNCO0FBQ0Esb0JBQUlJLGlCQUFpQixRQUFPQSxhQUFQLHVEQUFPQSxhQUFQLE9BQXlCLFFBQTlDLEVBQ0E7QUFDSSx3QkFBTXZDLFNBQVMsS0FBS3RFLFdBQXBCO0FBQ0Esd0JBQU1KLG9DQUFhRSxLQUFiLENBQU47QUFDQSx5QkFBS2dILE1BQUwsQ0FBWWxILE1BQVo7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFJSSx5RUFBd0Isb0JBQVlBLE1BQVosQ0FBeEIsaUhBQ0E7QUFBQSxnQ0FEV0QsU0FDWDs7QUFDSSxnQ0FBSUEsYUFBYWtILGFBQWpCLEVBQ0E7QUFDSSxxQ0FBS2xILFNBQUwsSUFBa0IyRSxPQUFPdEQsTUFBUCxDQUFjNkYsY0FBY2xILFNBQWQsQ0FBZCxFQUF3Q0MsT0FBT0QsU0FBUCxDQUF4QyxDQUFsQjtBQUNIO0FBQ0o7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0M7QUFDSjtBQUNELCtKQUFlLElBQWY7QUFDSDs7QUFFRDs7Ozs7O2tDQUlBO0FBQ0ksZ0JBQU1vSCxVQUFnQixFQUF0QjtBQUNBLGdCQUFNRixnQkFBZ0IsS0FBS0osY0FBM0I7QUFDQSxnQkFBSUksaUJBQWlCLFFBQU9BLGFBQVAsdURBQU9BLGFBQVAsT0FBeUIsUUFBOUMsRUFDQTtBQUNJLG9CQUFNRixPQUFPLEtBQUtELE9BQUwsR0FDUCxLQUFLRixZQUFMLElBQXFCLEVBRGQsR0FFUCxFQUZOO0FBREo7QUFBQTtBQUFBOztBQUFBO0FBSUkscUVBQW9CLG9CQUFZSyxhQUFaLENBQXBCLGlIQUNBO0FBQUEsNEJBRFd4QixLQUNYOztBQUNJLDRCQUFNekYsU0FBUyxLQUFLeUYsS0FBTCxDQUFmO0FBQ0EsNEJBQUl6RixXQUFXQyxTQUFmLEVBQ0E7QUFDSWtILG9DQUFRSixLQUFLdEIsS0FBTCxLQUFlQSxLQUF2QixJQUFnQ3pGLG1DQUMxQkEsT0FBT0UsS0FEbUIsR0FFMUJGLE1BRk47QUFHSDtBQUNKO0FBYkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNDOztBQUVELG1CQUFPbUgsT0FBUDtBQUNIOztBQUVEOzs7Ozs7c0NBR2NySCxNLEVBQ2Q7QUFDSSxpQkFBS21CLFFBQUwsQ0FBY25CLE1BQWQ7QUFDSDs7OztBQUVMOzs7a0JBaklxQjZHLGdCO0FBa0lyQkEsaUJBQWlCakYsUUFBakIsQ0FBMEIsUUFBMUIsRUFBb0NpRixnQkFBcEMsRTs7Ozs7Ozs7Ozs7O0FDNUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN0QkEsa0JBQWtCLGlHOzs7Ozs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOztBQUVBLDBDQUEwQywyREFBc0M7Ozs7Ozs7Ozs7Ozs7QUNIaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVUsRUFBRTtBQUNoRCxtQkFBbUIsc0NBQXNDO0FBQ3pELENBQUMscUNBQXFDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOzs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJTLGdCOzs7Ozs7Ozs7Ozs7QUFZakI7OzsrQkFJQTtBQUNJLFVBQU1wSCxTQUFTLEtBQUtFLEtBQXBCOztBQUVBLGFBQU9GLFdBQVcsSUFBWCx3SkFFRE8sT0FBT1AsVUFBVSxFQUFqQixDQUZOO0FBR0g7QUFwQkQ7Ozs7Ozs7QUFzQko7OztBQXhCcUJvSCxnQixDQUtWL0csTSxHQUFTLFVBQVNILEtBQVQsRUFDaEI7QUFDSSxTQUFPQSxVQUFVLElBQVYsSUFBa0JBLFVBQVVELFNBQTVCLEdBQ0QsRUFEQyxHQUVETSxPQUFPTCxLQUFQLENBRk47QUFHSCxDOztrQkFWZ0JrSCxnQjtBQXlCckJBLGlCQUFpQjFGLFFBQWpCLENBQTBCLFFBQTFCLEVBQW9DMEYsZ0JBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7O0FBQ0E7Ozs7Ozs7O0lBUXFCQyxjOzs7Ozs7Ozs7Ozs7QUFPakI7Ozs2QkFJQTtBQUNJLFVBQU1ySCxTQUFTLEtBQUtFLEtBQXBCOztBQUVBLGFBQU9GLFdBQVcsSUFBWCxrSkFFRCxLQUFLSSxXQUFMLENBQWlCZ0QsVUFBakIsQ0FBNEJwRCxNQUE1QixFQUFvQyxVQUFwQyxDQUZOO0FBR0g7QUFmRDs7Ozs7OztBQWlCSjs7O0FBbkJxQnFILGMsQ0FLVmhFLGEsR0FBZ0IsTztrQkFMTmdFLGM7QUFvQnJCQSxlQUFlM0YsUUFBZixDQUF3QixNQUF4QixFQUFnQzJGLGNBQWhDLEUiLCJmaWxlIjoiamZEYXRhVHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYXRhVHlwZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiamZcIl0gPSByb290W1wiamZcIl0gfHwge30sIHJvb3RbXCJqZlwiXVtcImRhdGFUeXBlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc5MDUyNWJhNmNkMjFkNGY4M2ZmIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS40JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkZhY3RvcnkgZnJvbSAnamYtZmFjdG9yeSc7XG5cbi8qKlxuICogRmFjdG9yw61hIHBhcmEgbG9zIHRpcG9zIGRlIGRhdG9zLlxuICpcbiAqIEB0eXBlIHtGYWN0b3J5fVxuICovXG5jb25zdCBmYWN0b3J5ID0gamZGYWN0b3J5LmkoJ2pmLWRhdGEtdHlwZXMnKTtcbmZhY3RvcnkuaW5pdE1ldGhvZCA9ICdzZXRQcm9wZXJ0aWVzJztcbi8qKlxuICogQ2xhc2UgcXVlIHJlcHJlc2VudGEgdW4gY2FtcG8gZGUgdW5hIHRhYmxhIG8gcmVzcHVlc3RhIGRlbCBzZXJ2aWRvci5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5CYXNlXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBhIHVzYXIgcGFyYSBhbmFsaXphciBlbCB2YWxvciBkZSBlbnRyYWRhIHkgcXVlIGRlYmVyw6EgZGV2b2x2ZXJcbiAgICAgKiBlbCB2YWxvciBhIGFzaWduYXIgYSBsYSBpbnN0YW5jaWEuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFyc2VyXG4gICAgICogQHR5cGUgICAgIHtGdW5jdGlvbnxudWxsfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBlbCBjYW1wbyBwdWVkZSBzZXIgYG51bGxgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5ICRudWxsYWJsZVxuICAgICAqIEB0eXBlICAgICB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICAkbnVsbGFibGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRhZG9yZXMgYSB1c2FyIHBhcmEgdmVyaWZpY2FyIGVsIHZhbG9yIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIENhZGEgZWxlbWVudG8gZGVsIGFycmF5IHB1ZWRlIHNlciB1bmEgZnVuY2nDs24gbyB1biBvYmpldG9cbiAgICAgKiBjb24gYWwgbWVub3MgbGEgY2xhdmUgYGZuYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkdmFsaWRhdG9yc1xuICAgICAqIEB0eXBlICAgICB7T2JqZWN0W118RnVuY3Rpb25bXXxudWxsfVxuICAgICAqL1xuICAgICR2YWxpZGF0b3JzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFZhbG9yIGRlbCBjYW1wby5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkJHZhbHVlXG4gICAgICogQHR5cGUgICAgIHsqfVxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgICQkdmFsdWUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXNpZ25hIGxhcyBwcm9waWVkYWRlcyBkZSBsYSBjbGFzZSBhIHBhcnRpciBkZSB1biBvYmpldG8uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIFZhbG9yZXMgYSBhc2lnbmFyLlxuICAgICAqL1xuICAgIHNldFByb3BlcnRpZXModmFsdWVzKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlcyAmJiB0eXBlb2YgdmFsdWVzID09PSAnb2JqZWN0JylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChjb25zdCBfcHJvcGVydHkgb2YgT2JqZWN0LmtleXModmFsdWVzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Byb3BlcnR5WzBdICE9PSAnJCcgJiYgX3Byb3BlcnR5WzBdICE9PSAnXycgJiYgX3Byb3BlcnR5IGluIHRoaXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdmFsdWUgPSB2YWx1ZXNbX3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19wcm9wZXJ0eV0gPSBfdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc2lnbmEgZWwgdmFsb3IgZGUgbGEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFZhbG9yIGEgYXNpZ25hci5cbiAgICAgKi9cbiAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy4kJHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9wYXJzZXIgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlcjtcbiAgICAgICAgICAgIHRoaXMuJCR2YWx1ZSAgPSB0eXBlb2YgX3BhcnNlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gX3BhcnNlci5jYWxsKHRoaXMsIHZhbHVlKVxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSlNPTi9zdHJpbmdpZnkjdG9KU09OKClfYmVoYXZpb3JcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC90b1N0cmluZ1xuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiBTdHJpbmcoX3ZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGEgZWwgdmFsb3IgZGUgbGEgaW5zdGFuY2lhIHVzYW5kbyBsb3MgdmFsaWRhZG9yZXMgZXNwZWNpZmljYWRvcyBlblxuICAgICAqIGxhIHByb3BpZWRhZCBgJHZhbGlkYXRvcnNgLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB2YWxpZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIHNpIGVsIHZhbG9yIGVzIHbDoWxpZG8uXG4gICAgICovXG4gICAgdmFsaWRhdGUoKVxuICAgIHtcbiAgICAgICAgbGV0IF9pc1ZhbGlkO1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLiQkdmFsdWU7XG4gICAgICAgIGlmIChfdmFsdWUgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pc1ZhbGlkID0gdGhpcy4kbnVsbGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgX3ZhbGlkYXRvcnMgPSB0aGlzLiR2YWxpZGF0b3JzO1xuICAgICAgICAgICAgaWYgKF92YWxpZGF0b3JzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfdmFsaWRhdG9ycykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfdmFsaWRhdG9ycyA9IFtfdmFsaWRhdG9yc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdmFsaWRhdG9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IF92YWxpZGF0b3Igb2YgX3ZhbGlkYXRvcnMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3ZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBlcyB1bmEgZnVuY2nDs24gc2UgbGxhbWEgY29uIHVuIHNvbG8gcGFyw6FtZXRybywgZWwgdmFsb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWQgPSBfdmFsaWRhdG9yKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfdmFsaWRhdG9yICYmIHR5cGVvZiBfdmFsaWRhdG9yLmZuID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIGVzIHVuIG9iamV0bywgc2UgcGFzYSBjb21vIHNlZ3VuZG8gcGFyw6FtZXRybyBlbCBwcm9waW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmpldG8gcGFyYSBwZXJtaXRpciBjb25maWd1cmFyIGVsIHZhbGlkYWRvci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IF92YWxpZGF0b3IuZm4oX3ZhbHVlLCBfdmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaSBzZSBlc3BlY2lmaWPDsyB1biB2YWxpZGFkb3IgaW5jb3JyZWN0bywgZGV2b2x2ZW1vcyBgZmFsc2VgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pc1ZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpIGxvcyB2YWxpZGFkb3JlcyBlc3TDoW4gdmFjw61vcywgZGFtb3MgcG9yIGJ1ZW5vIGN1YWxxdWllciB2YWxvci5cbiAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV2dWVsdmUgZWwgdmFsb3IgZGUgbGEgaW5zdGFuY2lhLlxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNpZ25hIGVsIHZhbG9yIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L3ZhbHVlT2ZcbiAgICAgKi9cbiAgICB2YWx1ZU9mKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKClcbiAgICAgICAgICAgID8gdGhpcy4kJHZhbHVlXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydXllIGxhIGluc3RhbmNpYSBkZWwgdGlwbyBkZSBkYXRvcyBlc3BlY2lmaWNhZG8uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8Q2xhc3N9IG5hbWUgIE5vbWJyZSBkZWwgdGlwbyBkZSBkYXRvIG8gcmVmZXJlbmNpYSBkZSBsYSBjbGFzZS5cbiAgICAgKiBAcGFyYW0geyo/fSAgICAgICAgICAgdmFsdWUgQ29uZmlndXJhY2nDs24gYSBhcGxpY2FyIGEgbGEgbnVldmEgaW5zdGFuY2lhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7amYuZGF0YVR5cGUuQmFzZXx1bmRlZmluZWR9IEluc3RhbmNpYSBjb25zdHJ1aWRhLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUobmFtZSwgdmFsdWUpXG4gICAge1xuICAgICAgICBsZXQgX2luc3RhbmNlID0gZmFjdG9yeS5jcmVhdGUobmFtZSk7XG4gICAgICAgIGlmIChfaW5zdGFuY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2Uuc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxsZW5hIHVuYSBjYW50aWRhZCBjb24gY2Vyb3MgYSBsYSBpenF1aWVyZGEuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHBhZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlICBWYWxvciBhIGZvcm1hdGVhci5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIExvbmdpdHVkIGRlbCB0ZXh0byByZXN1bHRhbnRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBOw7ptZXJvIGZvcm1hdGVhZG8uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIHBhZCh2YWx1ZSwgbGVuZ3RoID0gMilcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIHJldHVybiBfdmFsdWUubGVuZ3RoIDwgbGVuZ3RoXG4gICAgICAgICAgICA/ICgnMCcucmVwZWF0KGxlbmd0aCkgKyBfdmFsdWUpLnN1YnN0cigtbGVuZ3RoKVxuICAgICAgICAgICAgOiBfdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0cmEgbGEgcmVmZXJlbmNpYSBkZSBsYSBjbGFzZSBxdWUgbWFuZWphIGVsIHRpcG8gZGUgZGF0byBlc3BlY2lmaWNhZG8uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHJlZ2lzdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOb21icmUgZGVsIHRpcG8gZGUgZGF0by5cbiAgICAgKiBAcGFyYW0ge0NsYXNzfSAgQ2xhc3MgUmVmZXJlbmNpYSBkZSBsYSBjbGFzZSBxdWUgbWFuZWphIGVsIHRpcG8gZGUgZGF0by5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVnaXN0ZXIobmFtZSwgQ2xhc3MpXG4gICAge1xuICAgICAgICBmYWN0b3J5LnJlZ2lzdGVyKG5hbWUsIENsYXNzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQmFzZS5tanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkRhdGFUeXBlQmFzZSBmcm9tICcuL0Jhc2UnO1xuXG4vKipcbiAqIE1hbmVqYWRvcmVzIHBhcmEgbG9zIHPDrW1ib2xvcyB1c2Fkb3MgZW4gbG9zIGZvcm1hdG9zIGRlIGxhcyBmZWNoYXMuXG4gKlxuICogU2UgcHVlZGVuIHJlZ2lzdHJhciBvdHJvcyBtYW5lamFkb3Jlcy4gUG9yIGVqZW1wbG8gcGFyYSBlbCBmb3JtYXRvICdlZWVlJyAocXVlXG4gKiBkZXBlbmRlIGRlbCBpZGlvbWEpIHNlIHBvZHLDrWEgaGFjZXI6XG4gKlxuICogYGBgXG4gKiBqZkRhdGFUeXBlRGF0ZVRpbWUucmVnaXN0ZXJTeW1ib2woXG4gKiAgICAgJ2VlZWUnLFxuICogICAgIGRhdGUgPT4gdHIoJ3dlZWtkYXknICsgZGF0ZS5nZXREYXkoKSlcbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICpcbiAqIEBzZWUgaHR0cDovL3VzZXJndWlkZS5pY3UtcHJvamVjdC5vcmcvZm9ybWF0cGFyc2UvZGF0ZXRpbWVcbiAqL1xuY29uc3QgY3VzdG9tU3ltYm9scyA9IHtcbiAgICBkICAgIDogZGF0ZSA9PiBkYXRlLmdldERhdGUoKSxcbiAgICBkZCAgIDogZGF0ZSA9PiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFkKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICBIICAgIDogZGF0ZSA9PiBkYXRlLmdldEhvdXJzKCksXG4gICAgSEggICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldEhvdXJzKCkpLFxuICAgIG0gICAgOiBkYXRlID0+IGRhdGUuZ2V0TWludXRlcygpLFxuICAgIG1tICAgOiBkYXRlID0+IGpmRGF0YVR5cGVEYXRlVGltZS5wYWQoZGF0ZS5nZXRNaW51dGVzKCkpLFxuICAgIE0gICAgOiBkYXRlID0+IGRhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgTU0gICA6IGRhdGUgPT4gamZEYXRhVHlwZURhdGVUaW1lLnBhZChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBzICAgIDogZGF0ZSA9PiBkYXRlLmdldFNlY29uZHMoKSxcbiAgICBzcyAgIDogZGF0ZSA9PiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFkKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgICB5ICAgIDogZGF0ZSA9PiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgeXkgICA6IGRhdGUgPT4gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyKC0yKSxcbiAgICB5eXl5IDogZGF0ZSA9PiBkYXRlLmdldEZ1bGxZZWFyKClcbn07XG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIGZlY2hhcyBxdWUgaW5jbHV5ZW4gbGFzIGhvcmFzLlxuICogRGVwZW5kaWVuZG8gZGVsIGZvcm1hdG8gcmVjaWJpZG8gZGVsIHNlcnZpZG9yIHBvZHLDrWEgdXNhcnNlXG4gKiBsYSBwcm9waWVkYWQgYHBhcnNlcmAgcGFyYSBkZWZpbmlyIGVsIGFuYWxpemFkb3IgZGVsIHZhbG9yXG4gKiBkZSBlbnRyYWRhLlxuICpcbiAqIGBgYFxuICogLy8gRGlmZXJlbnRlcyBlamVtcGxvcyBkZSBsbyBxdWUgZGViZXLDrWEgcmV0b3JuYXIgZXN0YSBmdW5jacOzblxuICogLy8gcGFyYSB1biBmb3JtYXRvIGRlIGVudHJhZGEgYGRkL21tL1lZWVlgXG4gKiBqZkRhdGFUeXBlRGF0ZVRpbWUucGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gKiB7XG4gKiAgICAgY29uc3QgX3BhcnRzID0gdmFsdWUuc3BsaXQoJy8nKTtcbiAqXG4gKiAgICAgcmV0dXJuIFtcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzJdLCAxMCksXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1sxXSwgMTApIC0gMSxcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzBdLCAxMCksXG4gKiAgICAgXVxuICogfVxuICogamZEYXRhVHlwZURhdGVUaW1lLnBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICoge1xuICogICAgIGNvbnN0IF9wYXJ0cyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gKlxuICogICAgIHJldHVybiBuZXcgRGF0ZShcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzJdLCAxMCksXG4gKiAgICAgICAgIHBhcnNlSW50KF9wYXJ0c1sxXSwgMTApIC0gMSxcbiAqICAgICAgICAgcGFyc2VJbnQoX3BhcnRzWzBdLCAxMCksXG4gKiAgICAgKTtcbiAqIH1cbiAqIGpmRGF0YVR5cGVEYXRlVGltZS5wYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAqIHtcbiAqICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJy8nKS5yZXZlcnNlKCkuam9pbignLScpO1xuICogfVxuICogLy9cbiAqIGNvbnN0IF9kYXRlID0gbmV3IGpmRGF0YVR5cGVEYXRlVGltZSgpO1xuICogY29uc29sZS5sb2coX2RhdGUuc2V0VmFsdWUoJzE1LzAxLzIwMTcnKSk7XG4gKiBgYGBcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkRhdGVUaW1lXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZURhdGVUaW1lIGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSguLi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjb25zdCBfdGltZSA9IERhdGUucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oX3RpbWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZShfdGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBwb3IgZGVmZWN0byBwYXJhIGNvbnZlcnRpciBsYSBmZWNoYSBlbiB0ZXh0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWZhdWx0Rm9ybWF0XG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0Rm9ybWF0ID0gJ3l5eXktTU0tZGQgSEg6bW06c3MnO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0byBhIHVzYXIgcGFyYSBjb252ZXJ0aXIgbGEgZmVjaGEgZW4gdGV4dG8uXG4gICAgICogU2kgbm8gc2UgZXNwZWNpZmljYSBzZSB1c2EgYGRlZmF1bHRGb3JtYXRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZvcm1hdFxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIGZvcm1hdCAgICAgICAgICAgICAgID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvSlNPTigpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsICd5eXl5LU1NLWRkVEhIOm1tOnNzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvU3RyaW5nKClcbiAgICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5mb3JtYXREYXRlKF92YWx1ZSwgdGhpcy5mb3JtYXQgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0Rm9ybWF0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZ3JlZ2EgdW4gc8OtbWJvbG8gYWNlcHRhZG8gZW4gZWwgZm9ybWF0byBkZSBsYSBmZWNoYS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgYWRkU3ltYm9sXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICBzeW1ib2wgIFPDrW1ib2xvIGEgcmVnaXN0cmFyLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY2nDs24gcXVlIHNlIGVqZWN1dGFyw6EgcGFyYSByZWFsaXphciBsYSBjb252ZXJzacOzbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkU3ltYm9sKHN5bWJvbCwgaGFuZGxlcilcbiAgICB7XG4gICAgICAgIGN1c3RvbVN5bWJvbHNbc3ltYm9sXSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0ZWEgdW5hIGZlY2hhIGNvbnZpcnRpw6luZG9sYSBhIHRleHRvLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSAgICBkYXRlICAgRmVjaGEgYSBmb3JtYXRlYXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmc/fSBmb3JtYXQgRm9ybWF0byBkZSBsYSBmZWNoYS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpXG4gICAge1xuICAgICAgICBsZXQgX3Jlc3VsdCA9ICcnO1xuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9yZXN1bHQgPSBmb3JtYXQgJiYgdHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvKFxcdylcXDF7MCwzfS9nLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPT4gc3ltYm9sIGluIGN1c3RvbVN5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3VzdG9tU3ltYm9sc1tzeW1ib2xdKGRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN5bWJvbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdDtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZURhdGVUaW1lLnJlZ2lzdGVyKCdEYXRlVGltZScsIGpmRGF0YVR5cGVEYXRlVGltZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVRpbWUubWpzIiwiaW1wb3J0IGpmRm9ybWF0RGVjaW1hbCBmcm9tICdmb3JtYXQtZGVjaW1hbCc7XG5pbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBuw7ptZXJvcyBkZWNpbWFsZXMuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuRmxvYXRcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICogQHVzZXMgICAgICBqZi5mb3JtYXREZWNpbWFsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVGbG9hdCBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlciA9IGZ1bmN0aW9uKHZhbHVlKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlzTmFOKF92YWx1ZSlcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBfdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFPDrW1ib2xvIGEgdXNhciBwYXJhIGVsIHB1bnRvIGRlY2ltYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVjaW1hbFxuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIGRlY2ltYWwgICAgICAgICAgICAgID0gJywnO1xuXG4gICAgLyoqXG4gICAgICogTsO6bWVybyBkZSBkZWNpbWFsZXMgYSBtb3N0cmFyXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcHJlY2lzaW9uXG4gICAgICogQHR5cGUgICAgIHtOdW1iZXJ9XG4gICAgICovXG4gICAgcHJlY2lzaW9uICAgICAgICAgICAgPSAyO1xuXG4gICAgLyoqXG4gICAgICogU8OtbWJvbG8gYSB1c2FyIHBhcmEgbG9zIHNlcGFyYWRvcmVzIGRlIG1pbGVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRob3VzYW5kc1xuICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRob3VzYW5kcyAgICAgICAgICAgID0gJy4nO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgX3ZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyBqZkZvcm1hdERlY2ltYWwoX3ZhbHVlLCB0aGlzKVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZUZsb2F0LnJlZ2lzdGVyKCdGbG9hdCcsIGpmRGF0YVR5cGVGbG9hdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRmxvYXQubWpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUFycmF5ICAgIGZyb20gJy4vQXJyYXknO1xuaW1wb3J0IGpmRGF0YVR5cGVCYXNlICAgICBmcm9tICcuL0Jhc2UnO1xuaW1wb3J0IGpmRGF0YVR5cGVCb29sZWFuICBmcm9tICcuL0Jvb2xlYW4nO1xuaW1wb3J0IGpmRGF0YVR5cGVEYXRlICAgICBmcm9tICcuL0RhdGUnO1xuaW1wb3J0IGpmRGF0YVR5cGVEYXRlVGltZSBmcm9tICcuL0RhdGVUaW1lJztcbmltcG9ydCBqZkRhdGFUeXBlRW51bSAgICAgZnJvbSAnLi9FbnVtJztcbmltcG9ydCBqZkRhdGFUeXBlRmxvYXQgICAgZnJvbSAnLi9GbG9hdCc7XG5pbXBvcnQgamZEYXRhVHlwZUludGVnZXIgIGZyb20gJy4vSW50ZWdlcic7XG5pbXBvcnQgamZEYXRhVHlwZU1vbmV5ICAgIGZyb20gJy4vTW9uZXknO1xuaW1wb3J0IGpmRGF0YVR5cGVPYmplY3QgICBmcm9tICcuL09iamVjdCc7XG5pbXBvcnQgamZEYXRhVHlwZVN0cmluZyAgIGZyb20gJy4vU3RyaW5nJztcbmltcG9ydCBqZkRhdGFUeXBlVGltZSAgICAgZnJvbSAnLi9UaW1lJztcblxuLyoqXG4gKiDDjW5kaWNlIGRlbCBwYXF1ZXRlLlxuICpcbiAqIEBhdXRob3IgICAgSm9hcXXDrW4gRmVybsOhbmRlelxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgJ0FycmF5JyAgICA6IGpmRGF0YVR5cGVBcnJheSxcbiAgICAnQmFzZScgICAgIDogamZEYXRhVHlwZUJhc2UsXG4gICAgJ0Jvb2xlYW4nICA6IGpmRGF0YVR5cGVCb29sZWFuLFxuICAgICdEYXRlJyAgICAgOiBqZkRhdGFUeXBlRGF0ZSxcbiAgICAnRGF0ZVRpbWUnIDogamZEYXRhVHlwZURhdGVUaW1lLFxuICAgICdFbnVtJyAgICAgOiBqZkRhdGFUeXBlRW51bSxcbiAgICAnRmxvYXQnICAgIDogamZEYXRhVHlwZUZsb2F0LFxuICAgICdJbnRlZ2VyJyAgOiBqZkRhdGFUeXBlSW50ZWdlcixcbiAgICAnTW9uZXknICAgIDogamZEYXRhVHlwZU1vbmV5LFxuICAgICdPYmplY3QnICAgOiBqZkRhdGFUeXBlT2JqZWN0LFxuICAgICdTdHJpbmcnICAgOiBqZkRhdGFUeXBlU3RyaW5nLFxuICAgICdUaW1lJyAgICAgOiBqZkRhdGFUeXBlVGltZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5tanMiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBhcnJheXMgZGUgdW4gc29sbyB0aXBvIGRlIGRhdG9zLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkFycmF5XG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUFycmF5IGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBWYWxvcmVzIGRlIGNvbmZpZ3VyYWNpw7NuIHBvciBkZWZlY3RvIHBhcmEgY2FkYSBlbGVtZW50byBkZWwgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVmYXVsdHNcbiAgICAgKiBAdHlwZSAgICAge09iamVjdH1cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgICAgICBjb25maWcgOiB7fSxcbiAgICAgICAgdHlwZSAgIDogJ1N0cmluZydcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbiAodmFsdWUpXG4gICAge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgX0NsYXNzICAgICA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgY29uc3QgX2RlZmF1bHRzICA9IF9DbGFzcy5kZWZhdWx0cztcbiAgICAgICAgICAgICAgICBjb25zdCBfY29uZmlnICAgID0gX2RlZmF1bHRzLmNvbmZpZztcbiAgICAgICAgICAgICAgICBjb25zdCBfaGFzQ29uZmlnID0gX2NvbmZpZyAmJiB0eXBlb2YgX2NvbmZpZyA9PT0gJ29iamVjdCc7XG4gICAgICAgICAgICAgICAgY29uc3QgX3R5cGUgICAgICA9IF9kZWZhdWx0cy50eXBlO1xuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgamZEYXRhVHlwZUJhc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfQ2xhc3MuY3JlYXRlKF90eXBlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBfaGFzQ29uZmlnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zZXRQcm9wZXJ0aWVzKF9jb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHZhbHVlT2YoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gc3VwZXIudmFsdWVPZigpO1xuXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KF92YWx1ZSlcbiAgICAgICAgICAgID8gX3ZhbHVlLm1hcCh2ID0+IHYgaW5zdGFuY2VvZiBqZkRhdGFUeXBlQmFzZSA/IHYudmFsdWVPZigpIDogdilcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZUFycmF5LnJlZ2lzdGVyKCdBcnJheScsIGpmRGF0YVR5cGVBcnJheSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXJyYXkubWpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEluc3RhbmNpYXMgZGUgZmFjdG9yw61hcy5cbiAqIFBlcm1pdGUgdXNhciBsYSBjbGFzZSBjb21vIHVuIHNpbmdsZXRvbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5sZXQgaW5zdGFuY2VzID0ge307XG4vKipcbiAqIENsYXNlIHVzYWRhIGNvbW8gdW5hIGZhY3RvcsOtYSBkZSBpbnN0YW5jaWFzLlxuICogU2UgcHVlZGVuIGNyZWFyIGRpc3RpbnRhcyBpbnN0YW5jaWFzIHBhcmEgbWFuZWphciBkaWZlcmVudGVzIHJlZ2lzdHJvcy5cbiAqIFNpIHNvbGFtZW50ZSBzZSBkZXNlYSB1biByZWdpc3Rybywgc2UgcHVlZGUgdXNhciBjb21vIHVuIHNpbmdsZXRvblxuICogbGxhbWFuZG8gYWwgbcOpdG9kbyBgaSgpYC5cbiAqXG4gKiBAbmFtZXNwYWNlIGpmXG4gKiBAY2xhc3MgICAgIGpmLkZhY3RvcnlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGYWN0b3J5XG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZGUgbGEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogTm9tYnJlIGRlbCBtw6l0b2RvIGRlIGluaWNpYWxpemFjacOzbiBhIGxsYW1hciBjdWFuZG8gc2UgcGFzZVxuICAgICAgICAgKiB1bmEgY29uZmlndXJhY2nDs24gYWwgbcOpdG9kbyBgYnVpbGRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2FuZG8gYGJhYmVsYCBsYXMgc3ViY2xhc2VzIHF1ZSBoYWNlbiB1c28gZGVsIHBsdWdpblxuICAgICAgICAgKiBgYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1jbGFzcy1wcm9wZXJ0aWVzYCBubyBwdWVkZW4gYXNpZ25hclxuICAgICAgICAgKiBsb3MgdmFsb3JlcyByZWNpYmlkb3MgZW4gZWwgY29uc3RydWN0b3IgeWEgcXVlIHNlIGFzaWduYW5cbiAgICAgICAgICogbGFzIHByb3BpZWRhZGVzIHVzYW5kbyBlc3RlIHBsdWdpbiBkZXNwdcOpcyBkZSBhc2lnbmFyIGVzb3NcbiAgICAgICAgICogdmFsb3JlcyB5IHNlIHBpZXJkZW4gbGEgYXNpZ25hY2nDs24gYW50ZXJpb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBpbml0TWV0aG9kXG4gICAgICAgICAqIEB0eXBlICAgICB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0TWV0aG9kID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RybyBkZSBjbGFzZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSAkJHJlZ2lzdHJ5XG4gICAgICAgICAqIEB0eXBlICAgICB7T2JqZWN0fVxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJCRyZWdpc3RyeSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWEgdW5hIGluc3RhbmNpYSBkZSB1bmEgY2xhc2UgcmVnaXN0cmFkYS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAgIE5vbWJyZSBjb24gZWwgcXVlIHNlIGhhIHJlZ2lzdHJhZG8gbGEgY2xhc2UuXG4gICAgICogQHBhcmFtIHsqP30gICAgIGNvbmZpZyBDb25maWd1cmFjacOzbiBhIGFwbGljYXIgYSBsYSBudWV2YSBpbnN0YW5jaWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtDbGFzc30gSW5zdGFuY2lhIGRlIGxhIGNsYXNlIGNvbnN0cnVpZGEgbyBgdW5kZWZpbmVkYCBzaSBubyBleGlzdGUgbGEgY2xhc2UuXG4gICAgICovXG4gICAgY3JlYXRlKG5hbWUsIGNvbmZpZylcbiAgICB7XG4gICAgICAgIGxldCBfaW5zdGFuY2U7XG4gICAgICAgIGxldCBfQ2xhc3MgPSB0eXBlb2YgbmFtZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBuYW1lXG4gICAgICAgICAgICA6IHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoX0NsYXNzICYmIHR5cGVvZiBfQ2xhc3MgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIEVuIGFsZ3Vub3MgY2Fzb3MgdXNhbmRvIGBiYWJlbGAgZWwgcGFzYXIgYGNvbmZpZ2AgY29tbyBwYXLDoW1ldHJvIG5vXG4gICAgICAgICAgICAvLyBwZXJtaXRlIGFzaWduYXIgbGFzIHByb3BpZWRhZGVzLiBFbiBlc29zIGNhc29zIHNlIGRlYmUgdXNhciB1biBtw6l0b2RvIGF1eGlsaWFyLlxuICAgICAgICAgICAgY29uc3QgX2luaXRNZXRob2QgPSB0aGlzLmluaXRNZXRob2Q7XG4gICAgICAgICAgICBpZiAoX2luaXRNZXRob2QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IF9DbGFzcygpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2luc3RhbmNlW19pbml0TWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9pbnN0YW5jZVtfaW5pdE1ldGhvZF0oY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IF9DbGFzcyhjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJtaXRlIGxpbXBpYXIgZWwgcmVnaXN0cm8gcGFyYSBsaWJlcmFyIGxhIG1lbW9yaWEgYWwgZWxpbWluYXIgbGFzIHJlZmVyZW5jaWFzLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBOb21icmUgZGVsIG3DqXRvZG8gcXVlIHNlIGxsYW1hcsOhIGVuIGNhZGEgY2xhc2UgcmVnaXN0cmFkYSBhbnRlcyBkZSBlbGltaW5hcnNlLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgU2kgcmV0b3JuYSBgZmFsc2VgIG5vIHNlIGVsaW1pbmEgZGVsIHJlZ2lzdHJvLlxuICAgICAqL1xuICAgIGNsZWFyKG1ldGhvZCA9ICcnKVxuICAgIHtcbiAgICAgICAgaWYgKG1ldGhvZClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgX3JlZ2lzdHJ5ID0gdGhpcy4kJHJlZ2lzdHJ5O1xuICAgICAgICAgICAgZm9yIChjb25zdCBfbmFtZSBvZiBPYmplY3Qua2V5cyhfcmVnaXN0cnkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9DbGFzcyA9IF9yZWdpc3RyeVtfbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfQ2xhc3NbX25hbWVdID09PSAnZnVuY3Rpb24nICYmIF9DbGFzc1tfbmFtZV0oKSAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3JlZ2lzdHJ5W19uYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLiQkcmVnaXN0cnkgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldnVlbHZlIGxhIHJlZmVyZW5jaWEgZGUgbGEgY2xhc2UgcXVlIGNvcnJlc3BvbmRlIGNvbiBlbCBub21icmUgZXNwZWNpZmljYWRvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5vbWJyZSBxdWUgaGFjZSByZWZlcmVuY2lhIGEgbGEgY2xhc2UgcXVlIHNlIGRlc2VhIHJlY3VwZXJhci5cbiAgICAgKi9cbiAgICBnZXQobmFtZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkcmVnaXN0cnlbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0cmEgbGEgcmVmZXJlbmNpYSBkZSB1bmEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHJlZ2lzdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAgTm9tYnJlIGNvbiBlbCBxdWUgcmVnaXN0cmFyw6EgbGEgY2xhc2UuXG4gICAgICogQHBhcmFtIHtDbGFzc30gIENsYXNzIFJlZmVyZW5jaWEgZGUgbGEgY2xhc2UgYSByZWdpc3RyYXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXIobmFtZSwgQ2xhc3MpXG4gICAge1xuICAgICAgICB0aGlzLiQkcmVnaXN0cnlbbmFtZV0gPSBDbGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbGltaW5hIHVuYSBjbGFzZSBkZWwgcmVnaXN0cm8uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVucmVnaXN0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5vbWJyZSBjb24gZWwgcXVlIHNlIHJlZ2lzdHLDsyBsYSBjbGFzZS5cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKG5hbWUpXG4gICAge1xuICAgICAgICBkZWxldGUgdGhpcy4kJHJlZ2lzdHJ5W25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldnVlbHZlIGxhIGluc3RhbmNpYSBkZSBsYSBmYWN0b3LDrWEgdXNhZGEgY29tbyBzaW5nbGV0b24uXG4gICAgICogU2kgbm8gc2UgaGEgY3JlYWRvIHByZXZpYW1lbnRlLCBzZSBjcmVhIHVuYSBudWV2YS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTm9tYnJlIGRlIGxhIGZhY3RvcsOtYSBhIGNvbnN0cnVpci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0ZhY3Rvcnl9XG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGkobmFtZSA9ICcnKVxuICAgIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBpbnN0YW5jZXMpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZXNbbmFtZV0gPSBuZXcgRmFjdG9yeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlc1tuYW1lXTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2pmLWZhY3RvcnkvaW5kZXguanMiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSB2YWxvcmVzIGJvb2xlYW5vcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5Cb29sZWFuXG4gKiBAZXh0ZW5kcyAgIGpmLmRhdGFUeXBlLkJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZUJvb2xlYW4gZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIC8vIFNpIGVzIHVuIG9iamV0byB5IG5vIHRpZW5lIGNsYXZlcyBzZSBhc3VtaXLDoSBjb21vIHVuIHZhbG9yIHZhY8OtbyB5IGVsIHZhbG9yIGFzaWduYWRvIHNlcsOhIGBmYWxzZWAuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICdvZmYnIHx8IHZhbHVlID09PSAnMCcgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogQm9vbGVhbih2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvU3RyaW5nKClcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIF92YWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBzdXBlci50b1N0cmluZygpXG4gICAgICAgICAgICA6IF92YWx1ZVxuICAgICAgICAgICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgICAgICAgICAgOiAnZmFsc2UnO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlQm9vbGVhbi5yZWdpc3RlcignQm9vbGVhbicsIGpmRGF0YVR5cGVCb29sZWFuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb29sZWFuLm1qcyIsImltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG5cbi8qKlxuICogQ2xhc2UgcGFyYSBlbCBtYW5lam8gZGUgZmVjaGFzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkRhdGVcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRGF0ZVRpbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZURhdGUgZXh0ZW5kcyBqZkRhdGFUeXBlRGF0ZVRpbWVcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEZvcm1hdCA9ICd5eXl5LU1NLWRkJztcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHRvSlNPTigpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgID8gc3VwZXIudG9KU09OKClcbiAgICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5mb3JtYXREYXRlKF92YWx1ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZURhdGUucmVnaXN0ZXIoJ0RhdGUnLCBqZkRhdGFUeXBlRGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZS5tanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGpmRGF0YVR5cGVCYXNlIGZyb20gJy4vQmFzZSc7XG4vKipcbiAqIENsYXNlIHBhcmEgbWFuZWphciBlbnVtZXJhY2lvbmVzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLkVudW1cbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlRW51bSBleHRlbmRzIGpmRGF0YVR5cGVCYXNlXG57XG4gICAgLyoqXG4gICAgICogVmFsb3JlcyBwZXJtaXRpZG9zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5ICRhbGxvd2VkVmFsdWVzXG4gICAgICogQHR5cGUgICAgIHtBcnJheX1cbiAgICAgKi9cbiAgICAkYWxsb3dlZFZhbHVlcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVmFsb3IgYSBzZWxlY2Npb25hciBwb3IgZGVmZWN0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkZGVmVmFsdWVcbiAgICAgKiBAdHlwZSAgICAgeyp9XG4gICAgICovXG4gICAgJGRlZlZhbHVlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLiRhbGxvd2VkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKVxuICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuJHZhbGlkYXRvcnMgPSBbXG4gICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLiRhbGxvd2VkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjY2lvbmEgZWwgdmFsb3IgcG9yIGRlZmVjdG8uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGxvYWREZWZhdWx0XG4gICAgICovXG4gICAgbG9hZERlZmF1bHQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgX2RlZmF1bHQgPSB0aGlzLiRkZWZWYWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSAgICAgPSB0aGlzLiRhbGxvd2VkVmFsdWVzLmluY2x1ZGVzKF9kZWZhdWx0KVxuICAgICAgICAgICAgPyBfZGVmYXVsdFxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlQmFzZS5yZWdpc3RlcignRW51bScsIGpmRGF0YVR5cGVFbnVtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbnVtLm1qcyIsIi8qKlxuICogRGV2dWVsdmUgZWwgbsO6bWVybyBlc3BlY2lmaWNhZG8gZm9ybWF0ZWFkbyBjb24gbG9zIHNlcGFyYWRvcmVzIGVzcGVjaWZpY2Fkb3MuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICB2YWx1ZSAgICAgICAgICAgIFZhbG9yIGEgZm9ybWF0ZWFyLlxuICogQHBhcmFtIHtPYmplY3R9ICBjb25maWcgICAgICAgICAgIENvbmZpZ3VyYWNpw7NuIHBhcmEgbW9kaWZpY2FyIGVsIHJlc3VsdGFkby5cbiAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLmRlY2ltYWwgICBTw61tYm9sbyBhIHVzYXIgcGFyYSBlbCBwdW50byBkZWNpbWFsIChgLGAgcG9yIGRlZmVjdG8pLlxuICogQHBhcmFtIHtOdW1iZXJ9ICBjb25maWcucHJlY2lzaW9uIE7Dum1lcm8gZGUgZMOtZ2l0b3MgZGVjaW1hbGVzIGEgbW9zdHJhciAoYDJgIHBvciBkZWZlY3RvKS5cbiAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLnRob3VzYW5kcyBTZXBhcmFkb3IgZGUgbWlsZXMgKCcuJyBwb3IgZGVmZWN0bykuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSBOw7ptZXJvIGZvcm1hdGVhZG8uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRm9ybWF0RGVjaW1hbCh2YWx1ZSwgY29uZmlnKVxue1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFlvdSBNVVNUIHNwZWNpZnkgYSBmaW5pdGUgbnVtYmVyLCBub3QgWyR7dHlwZW9mIHZhbHVlfSA9ICR7dmFsdWV9XWApO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZylcbiAgICB7XG4gICAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbmZpZ3VyYWNpw7NuIGRlbCByZXN1bHRhZG8uXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgX2RlY2ltYWwgICA9IHR5cGVvZiBjb25maWcuZGVjaW1hbCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjb25maWcuZGVjaW1hbFxuICAgICAgICA6ICcsJztcbiAgICB2YXIgX3ByZWNpc2lvbiA9IHR5cGVvZiBjb25maWcucHJlY2lzaW9uID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGNvbmZpZy5wcmVjaXNpb25cbiAgICAgICAgOiAyO1xuICAgIHZhciBfdGhvdXNhbmRzID0gdHlwZW9mIGNvbmZpZy50aG91c2FuZHMgPT09ICdzdHJpbmcnXG4gICAgICAgID8gY29uZmlnLnRob3VzYW5kc1xuICAgICAgICA6ICcuJztcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE9idGVuY2nDs24gZGVsIHJlc3VsdGFkby5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBfcGFydHMgPSB2YWx1ZS50b0ZpeGVkKF9wcmVjaXNpb24pLnNwbGl0KCcuJyk7XG4gICAgX3BhcnRzWzBdICA9IF9wYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBfdGhvdXNhbmRzKTtcbiAgICAvL1xuICAgIHJldHVybiBfcGFydHMuam9pbihfZGVjaW1hbCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9ybWF0LWRlY2ltYWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgamZEYXRhVHlwZUZsb2F0IGZyb20gJy4vRmxvYXQnO1xuXG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIG7Dum1lcm9zIGVudGVyb3MuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuSW50ZWdlclxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5GbG9hdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlSW50ZWdlciBleHRlbmRzIGpmRGF0YVR5cGVGbG9hdFxue1xuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZXIgPSBmdW5jdGlvbih2YWx1ZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIGlzTmFOKF92YWx1ZSlcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBfdmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHByZWNpc2lvbiAgICAgPSAwO1xufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpmRGF0YVR5cGVJbnRlZ2VyLnJlZ2lzdGVyKCdJbnRlZ2VyJywgamZEYXRhVHlwZUludGVnZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ludGVnZXIubWpzIiwiaW1wb3J0IGpmRGF0YVR5cGVGbG9hdCBmcm9tICcuL0Zsb2F0JztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBjYW50aWRhZGVzIG1vbmV0YXJpYXMuXG4gKlxuICpcbiAqIEBuYW1lc3BhY2UgamYuZGF0YVR5cGVcbiAqIEBjbGFzcyAgICAgamYuZGF0YVR5cGUuTW9uZXlcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRmxvYXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZU1vbmV5IGV4dGVuZHMgamZEYXRhVHlwZUZsb2F0XG57XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRlIHBhcmEgaW5kaWNhciBxdWUgZWwgc8OtbWJvbG8gbW9uZXRhcmlvIGRlYmUgaXJcbiAgICAgKiBhIGxhIGl6cXVpZXJkYSBkZSBsYSBjYW50aWRhZCBudW3DqXJpY2EuXG4gICAgICpcbiAgICAgKiBAY29uc3QgTEVGVFxuICAgICAqIEB0eXBlICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTEVGVCgpIHtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdGFudGUgcGFyYSBpbmRpY2FyIHF1ZSBlbCBzw61tYm9sbyBtb25ldGFyaW8gZGViZSBpclxuICAgICAqIGEgbGEgZGVyZWNoYSBkZSBsYSBjYW50aWRhZCBudW3DqXJpY2EuXG4gICAgICpcbiAgICAgKiBAY29uc3QgUklHSFRcbiAgICAgKiBAdHlwZSAge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJJR0hUKCkge1xuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU8OtbWJvbG8gZGUgbGEgbW9uZWRhLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGN1cnJlbmN5XG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICovXG4gICAgY3VycmVuY3kgPSAn4oKsJztcbiAgICAvKipcbiAgICAgKiBQb3NpY2nDs24gZGVsIHPDrW1ib2xvLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAgICogQHR5cGUgICAgIHtTdHJpbmd9XG4gICAgICovXG4gICAgcG9zaXRpb24gPSAncmlnaHQnO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdG9TdHJpbmcoKVxuICAgIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IHN1cGVyLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChfdmFsdWUgJiYgdGhpcy5jdXJyZW5jeSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChfcG9zaXRpb24gPT09IGpmRGF0YVR5cGVNb25leS5MRUZUKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF92YWx1ZSA9IHRoaXMuY3VycmVuY3kgKyBfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcG9zaXRpb24gPT09IGpmRGF0YVR5cGVNb25leS5SSUdIVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfdmFsdWUgKz0gdGhpcy5jdXJyZW5jeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlTW9uZXkucmVnaXN0ZXIoJ01vbmV5JywgamZEYXRhVHlwZU1vbmV5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Nb25leS5tanMiLCJpbXBvcnQgamZEYXRhVHlwZUJhc2UgZnJvbSAnLi9CYXNlJztcblxuLyoqXG4gKiBDbGFzZSBwYXJhIGVsIG1hbmVqbyBkZSBvYmpldG9zLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLk9iamVjdFxuICogQGV4dGVuZHMgICBqZi5kYXRhVHlwZS5CYXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpmRGF0YVR5cGVPYmplY3QgZXh0ZW5kcyBqZkRhdGFUeXBlQmFzZVxue1xuICAgIC8qKlxuICAgICAqIE1hcGVhIGxhcyBwcm9waWVkYWRlcyBkZSBsYSBpbnN0YW5jaWEgY29uIG51ZXZvcyBub21icmVzXG4gICAgICogcGVybWl0aWVuZG8gY2FtYmlhciBhbCB2dWVsbyBsYSBhc2lnbmFjacOzbiBkZSBsb3MgdmFsb3Jlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSAkcHJvcGVydHlNYXBcbiAgICAgKiBAdHlwZSAgICAge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgICRwcm9wZXJ0eU1hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmFjacOzbiBkZSBsYXMgcHJvcGllZGFkZXMgZGUgbGEgY2xhc2UuXG4gICAgICpcbiAgICAgKiBFcyB1biBvYmpldG8gZG9uZGUgbGFzIGNsYXZlcyBzb24gbGFzIHByb3BpZWRhZGVzIGV4aXN0ZW50ZXMgZW4gbGEgY2xhc2VcbiAgICAgKiB5IGVsIHZhbG9yIGVzIGVsIHRpcG8gZGUgZGF0b3MgYXNpZ25hZG8gYSBlc2EgcHJvcGllZGFkLlxuICAgICAqXG4gICAgICogQ2FkYSBjbGF2ZSBkZWJlIGNvcnJlc3BvbmRlciBjb24gdW5hIHByb3BpZWRhZCBkZWZpbmlkYSBlbiBsYSBjbGFzZS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNsYXNzIE15VHlwZSBleHRlbmRzIGpmRGF0YVR5cGVPYmplY3RcbiAgICAgKiB7XG4gICAgICogICAgIGFtb3VudCA9IG51bGw7XG4gICAgICogICAgIG5hbWUgPSBudWxsO1xuICAgICAqICAgICAkcHJvcGVydHlUeXBlcyA9IHtcbiAgICAgKiAgICAgICAgYW1vdW50IDogamZEYXRhVHlwZU1vbmV5LFxuICAgICAqICAgICAgICBuYW1lICAgOiBqZkRhdGFUeXBlU3RyaW5nXG4gICAgICogICAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgJHByb3BlcnR5VHlwZXNcbiAgICAgKiBAdHlwZSAgICAge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgICRwcm9wZXJ0eVR5cGVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEluZGljYSBzaSBzZSB1c2EgZWwgbWFwZW8gY3VhbmRvIHNlIGRldnVlbHZlbiBsb3MgdmFsb3Jlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgICR1c2VNYXAgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIE1hcGVhIGxvcyB2YWxvcmVzIGNvbiBub21icmVzIGRlIHByb3BpZWRhZGVzIGRlIGxhIGluc3RhbmNpYS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3JlbWFwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIFZhbG9yZXMgYSByZW1hcGVhci5cbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVtYXAodmFsdWVzKVxuICAgIHtcbiAgICAgICAgY29uc3QgX21hcCA9IHRoaXMuJHByb3BlcnR5TWFwO1xuICAgICAgICBpZiAoX21hcCAmJiB0eXBlb2YgX21hcCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX3Byb3BlcnR5IG9mIE9iamVjdC5rZXlzKF9tYXApKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9vbGROYW1lID0gX21hcFtfcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmIChfb2xkTmFtZSBpbiB2YWx1ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbX3Byb3BlcnR5XSA9IHZhbHVlc1tfb2xkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZXNbX29sZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9wcm9wZXJ0eVRwZXMgPSB0aGlzLiRwcm9wZXJ0eVR5cGVzO1xuICAgICAgICAgICAgaWYgKF9wcm9wZXJ0eVRwZXMgJiYgdHlwZW9mIF9wcm9wZXJ0eVRwZXMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9DbGFzcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgY29uc3QgX3ZhbHVlID0gey4uLnZhbHVlfTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1hcChfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgX3Byb3BlcnR5IG9mIE9iamVjdC5rZXlzKF92YWx1ZSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Byb3BlcnR5IGluIF9wcm9wZXJ0eVRwZXMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbX3Byb3BlcnR5XSA9IF9DbGFzcy5jcmVhdGUoX3Byb3BlcnR5VHBlc1tfcHJvcGVydHldLCBfdmFsdWVbX3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgdmFsdWVPZigpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWVzICAgICAgID0ge307XG4gICAgICAgIGNvbnN0IF9wcm9wZXJ0eVRwZXMgPSB0aGlzLiRwcm9wZXJ0eVR5cGVzO1xuICAgICAgICBpZiAoX3Byb3BlcnR5VHBlcyAmJiB0eXBlb2YgX3Byb3BlcnR5VHBlcyA9PT0gJ29iamVjdCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9tYXAgPSB0aGlzLiR1c2VNYXBcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHByb3BlcnR5TWFwIHx8IHt9XG4gICAgICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgX25hbWUgb2YgT2JqZWN0LmtleXMoX3Byb3BlcnR5VHBlcykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpc1tfbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKF92YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlc1tfbWFwW19uYW1lXSB8fCBfbmFtZV0gPSBfdmFsdWUgaW5zdGFuY2VvZiBqZkRhdGFUeXBlQmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHNldFByb3BlcnRpZXModmFsdWVzKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlT2JqZWN0LnJlZ2lzdGVyKCdPYmplY3QnLCBqZkRhdGFUeXBlT2JqZWN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PYmplY3QubWpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBqZkRhdGFUeXBlQmFzZSBmcm9tICcuL0Jhc2UnO1xuXG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIHRleHRvcy5cbiAqXG4gKlxuICogQG5hbWVzcGFjZSBqZi5kYXRhVHlwZVxuICogQGNsYXNzICAgICBqZi5kYXRhVHlwZS5TdHJpbmdcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuQmFzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqZkRhdGFUeXBlU3RyaW5nIGV4dGVuZHMgamZEYXRhVHlwZUJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VyID0gZnVuY3Rpb24odmFsdWUpXG4gICAge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiBTdHJpbmcodmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b1N0cmluZygpXG4gICAge1xuICAgICAgICBjb25zdCBfdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfdmFsdWUgPT09IG51bGxcbiAgICAgICAgICAgID8gc3VwZXIudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiBTdHJpbmcoX3ZhbHVlIHx8ICcnKTtcbiAgICB9XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuamZEYXRhVHlwZVN0cmluZy5yZWdpc3RlcignU3RyaW5nJywgamZEYXRhVHlwZVN0cmluZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RyaW5nLm1qcyIsImltcG9ydCBqZkRhdGFUeXBlRGF0ZVRpbWUgZnJvbSAnLi9EYXRlVGltZSc7XG4vKipcbiAqIENsYXNlIHBhcmEgZWwgbWFuZWpvIGRlIGhvcmFzLlxuICpcbiAqXG4gKiBAbmFtZXNwYWNlIGpmLmRhdGFUeXBlXG4gKiBAY2xhc3MgICAgIGpmLmRhdGFUeXBlLlRpbWVcbiAqIEBleHRlbmRzICAgamYuZGF0YVR5cGUuRGF0ZVRpbWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamZEYXRhVHlwZVRpbWUgZXh0ZW5kcyBqZkRhdGFUeXBlRGF0ZVRpbWVcbntcbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEZvcm1hdCA9ICdISDptbSc7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICB0b0pTT04oKVxuICAgIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICByZXR1cm4gX3ZhbHVlID09PSBudWxsXG4gICAgICAgICAgICA/IHN1cGVyLnRvSlNPTigpXG4gICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuZm9ybWF0RGF0ZShfdmFsdWUsICdISDptbTpzcycpO1xuICAgIH1cbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5qZkRhdGFUeXBlVGltZS5yZWdpc3RlcignVGltZScsIGpmRGF0YVR5cGVUaW1lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UaW1lLm1qcyJdLCJzb3VyY2VSb290IjoiIn0=
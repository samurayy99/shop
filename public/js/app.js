/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/auth-login.js":
/*!************************************!*\
  !*** ./resources/js/auth-login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
// Import jQuery and jQuery Validation plugin



jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  'use strict';

  // Setup CSRF token for AJAX POST requests
  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta[name="csrf-token"]').attr('content')
    }
  });
  var pageLoginForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.auth-login-form');
  if (pageLoginForm.length) {
    pageLoginForm.validate({
      rules: {
        'username': {
          required: true
        },
        'password': {
          required: true
        },
        'captcha': {
          required: true
        }
      },
      messages: {
        'username': {
          required: "Please enter your username."
        },
        'password': {
          required: "Please enter your password."
        },
        'captcha': {
          required: "Please enter the captcha."
        }
      },
      submitHandler: function submitHandler(form) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          url: jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).attr('action'),
          type: 'POST',
          data: jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).serialize(),
          success: function success(response) {
            if (response && response.success) {
              // Load the new page content without a full page reload
              jquery__WEBPACK_IMPORTED_MODULE_0___default().get(response.redirect, function (data) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#content-wrapper').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('#content-wrapper').html());
              });
            } else {
              console.error(response ? response.message : 'Response is undefined.');
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.error("AJAX error: ", textStatus, errorThrown);
            console.error('An error occurred. Please try again.');
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/auth-register.js":
/*!***************************************!*\
  !*** ./resources/js/auth-register.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*=========================================================================================
  File Name: auth-register.js
  Description: Auth register js file.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  'use strict';
  var assetsPath = '../../../app-assets/',
    registerMultiStepsWizard = document.querySelector('.register-multi-steps-wizard'),
    pageResetForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.auth-register-form'),
    select = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select2'),
    creditCard = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.credit-card-mask'),
    expiryDateMask = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.expiry-date-mask'),
    cvvMask = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cvv-code-mask'),
    mobileNumberMask = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-number-mask'),
    pinCodeMask = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pin-code-mask');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').attr('data-framework') === 'laravel') {
    assetsPath = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').attr('data-asset-path');
  }

  // jQuery Validation
  // --------------------------------------------------------------------
  if (pageResetForm.length) {
    pageResetForm.validate({
      /*
      * ? To enable validation onkeyup
      onkeyup: function (element) {
        $(element).valid();
      },*/
      /*
      * ? To enable validation on focusout
      onfocusout: function (element) {
        $(element).valid();
      }, */
      rules: {
        'register-username': {
          required: true
        },
        'register-email': {
          required: true,
          email: true
        },
        'register-password': {
          required: true
        }
      }
    });
  }

  // multi-steps registration
  // --------------------------------------------------------------------

  // Horizontal Wizard
  if (_typeof(registerMultiStepsWizard) !== undefined && registerMultiStepsWizard !== null) {
    var numberedStepper = new Stepper(registerMultiStepsWizard),
      $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(registerMultiStepsWizard).find('form');
    $form.each(function () {
      var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      $this.validate({
        rules: {
          username: {
            required: true
          },
          email: {
            required: true
          },
          password: {
            required: true,
            minlength: 8
          },
          'confirm-password': {
            required: true,
            minlength: 8,
            equalTo: '#password'
          },
          'first-name': {
            required: true
          },
          'home-address': {
            required: true
          },
          addCard: {
            required: true
          }
        },
        messages: {
          password: {
            required: 'Enter new password',
            minlength: 'Enter at least 8 characters'
          },
          'confirm-password': {
            required: 'Please confirm new password',
            minlength: 'Enter at least 8 characters',
            equalTo: 'The password and its confirm are not the same'
          }
        }
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(registerMultiStepsWizard).find('.btn-next').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('click', function (e) {
        var isValid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().siblings('form').valid();
        if (isValid) {
          numberedStepper.next();
        } else {
          e.preventDefault();
        }
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(registerMultiStepsWizard).find('.btn-prev').on('click', function () {
      numberedStepper.previous();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(registerMultiStepsWizard).find('.btn-submit').on('click', function () {
      var isValid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().siblings('form').valid();
      if (isValid) {
        alert('Submitted..!!');
      }
    });
  }

  // select2
  select.each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    $this.wrap('<div class="position-relative"></div>');
    $this.select2({
      // the following code is used to disable x-scrollbar when click in select input and
      // take 100% width in responsive also
      dropdownAutoWidth: true,
      width: '100%',
      dropdownParent: $this.parent()
    });
  });

  // credit card

  // Credit Card
  if (creditCard.length) {
    creditCard.each(function () {
      new Cleave(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), {
        creditCard: true,
        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
          var elementNodeList = document.querySelectorAll('.card-type');
          if (type != '' && type != 'unknown') {
            //! we accept this approach for multiple credit card masking
            for (var i = 0; i < elementNodeList.length; i++) {
              elementNodeList[i].innerHTML = '<img src="' + assetsPath + 'images/icons/payments/' + type + '-cc.png" height="24"/>';
            }
          } else {
            for (var _i = 0; _i < elementNodeList.length; _i++) {
              elementNodeList[_i].innerHTML = '';
            }
          }
        }
      });
    });
  }

  // Expiry Date Mask
  if (expiryDateMask.length) {
    new Cleave(expiryDateMask, {
      date: true,
      delimiter: '/',
      datePattern: ['m', 'y']
    });
  }

  // CVV
  if (cvvMask.length) {
    new Cleave(cvvMask, {
      numeral: true,
      numeralPositiveOnly: true
    });
  }

  // phone number mask
  if (mobileNumberMask.length) {
    new Cleave(mobileNumberMask, {
      phone: true,
      phoneRegionCode: 'US'
    });
  }

  // Pincode
  if (pinCodeMask.length) {
    new Cleave(pinCodeMask, {
      delimiter: '',
      numeral: true
    });
  }

  // multi-steps registration
  // --------------------------------------------------------------------
});

/***/ }),

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/***/ (() => {

/******/(function () {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*****************************!*\
      !*** ./public/js/custom.js ***!
      \*****************************/
  /******/
  (function () {
    // webpackBootstrap
    var __webpack_exports__ = {};
    /*!*****************************!*\
        !*** ./public/js/custom.js ***!
        \*****************************/
    /******/
    (function () {
      // webpackBootstrap
      /******/
      "use strict";

      /******/
      /******/
      /******/
    })();
    /******/
  })();
  /******/
})();

/***/ }),

/***/ "./resources/js/vendors.min.js":
/*!*************************************!*\
  !*** ./resources/js/vendors.min.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get.bind();}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1;}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r;}finally{try{if(!f&&null!=t["return"]&&(u=t["return"](),Object(u)!==u))return;}finally{if(o)throw n;}}return a;}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */!function(e,t){"use strict";"object"==( false?0:_typeof(module))&&"object"==_typeof(module.exports)?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e);}:t(e);}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],i=Object.getPrototypeOf,o=n.slice,r=n.flat?function(e){return n.flat.call(e);}:function(e){return n.concat.apply([],e);},s=n.push,a=n.indexOf,l={},c=l.toString,u=l.hasOwnProperty,p=u.toString,h=p.call(Object),f={},d=function d(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item;},g=function g(e){return null!=e&&e===e.window;},m=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function v(e,t,n){var i,o,r=(n=n||m).createElement("script");if(r.text=e,t)for(i in y)(o=t[i]||t.getAttribute&&t.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r);}function b(e){return null==e?e+"":"object"==_typeof(e)||"function"==typeof e?l[c.call(e)]||"object":_typeof(e);}var x="3.6.0",w=function w(e,t){return new w.fn.init(e,t);};function _(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!d(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e);}w.fn=w.prototype={jquery:x,constructor:w,length:0,toArray:function toArray(){return o.call(this);},get:function get(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e];},pushStack:function pushStack(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t;},each:function each(e){return w.each(this,e);},map:function map(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t);}));},slice:function slice(){return this.pushStack(o.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},even:function even(){return this.pushStack(w.grep(this,function(e,t){return(t+1)%2;}));},odd:function odd(){return this.pushStack(w.grep(this,function(e,t){return t%2;}));},eq:function eq(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[]);},end:function end(){return this.prevObject||this.constructor();},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==_typeof(s)||d(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(w.isPlainObject(i)||(o=Array.isArray(i)))?(n=s[t],r=o&&!Array.isArray(n)?[]:o||w.isPlainObject(n)?n:{},o=!1,s[t]=w.extend(c,r,i)):void 0!==i&&(s[t]=i));return s;},w.extend({expando:"jQuery"+(x+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(e){throw new Error(e);},noop:function noop(){},isPlainObject:function isPlainObject(e){var t,n;return!(!e||"[object Object]"!==c.call(e)||(t=i(e))&&("function"!=typeof(n=u.call(t,"constructor")&&t.constructor)||p.call(n)!==h));},isEmptyObject:function isEmptyObject(e){var t;for(t in e)return!1;return!0;},globalEval:function globalEval(e,t,n){v(e,{nonce:t&&t.nonce},n);},each:function each(e,t){var n,i=0;if(_(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e;},makeArray:function makeArray(e,t){var n=t||[];return null!=e&&(_(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n;},inArray:function inArray(e,t,n){return null==t?-1:a.call(t,e,n);},merge:function merge(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e;},grep:function grep(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!==s&&i.push(e[o]);return i;},map:function map(e,t,n){var i,o,s=0,a=[];if(_(e))for(i=e.length;s<i;s++)null!=(o=t(e[s],s,n))&&a.push(o);else for(s in e)null!=(o=t(e[s],s,n))&&a.push(o);return r(a);},guid:1,support:f}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase();});var k=function(e){var t,n,i,o,r,s,a,l,c,u,p,h,f,d,g,m,y,v,b,x="sizzle"+1*new Date(),w=e.document,_=0,k=0,E=le(),T=le(),S=le(),C=le(),A=function A(e,t){return e===t&&(p=!0),0;},O={}.hasOwnProperty,L=[],M=L.pop,j=L.push,N=L.push,D=L.slice,P=function P(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1;},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",R="(?:\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q="\\["+H+"*("+R+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+H+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",z=new RegExp(H+"+","g"),F=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),B=new RegExp("^"+H+"*,"+H+"*"),U=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),X=new RegExp(H+"|>"),Y=new RegExp(W),V=new RegExp("^"+R+"$"),$={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\([^\\r\\n\\f])","g"),ne=function ne(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320));},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function oe(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;},re=function re(){h();},se=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase();},{dir:"parentNode",next:"legend"});try{N.apply(L=D.call(w.childNodes),w.childNodes),L[w.childNodes.length].nodeType;}catch(t){N={apply:L.length?function(e,t){j.apply(e,D.call(t));}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1;}};}function ae(e,t,i,o){var r,a,c,u,p,d,y,v=t&&t.ownerDocument,w=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;if(!o&&(h(t),t=t||f,g)){if(11!==w&&(p=Z.exec(e)))if(r=p[1]){if(9===w){if(!(c=t.getElementById(r)))return i;if(c.id===r)return i.push(c),i;}else if(v&&(c=v.getElementById(r))&&b(t,c)&&c.id===r)return i.push(c),i;}else{if(p[2])return N.apply(i,t.getElementsByTagName(e)),i;if((r=p[3])&&n.getElementsByClassName&&t.getElementsByClassName)return N.apply(i,t.getElementsByClassName(r)),i;}if(n.qsa&&!C[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(y=e,v=t,1===w&&(X.test(e)||U.test(e))){for((v=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(ie,oe):t.setAttribute("id",u=x)),a=(d=s(e)).length;a--;)d[a]=(u?"#"+u:":scope")+" "+be(d[a]);y=d.join(",");}try{return N.apply(i,v.querySelectorAll(y)),i;}catch(t){C(e,!0);}finally{u===x&&t.removeAttribute("id");}}}return l(e.replace(F,"$1"),t,i,o);}function le(){var e=[];return function t(n,o){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=o;};}function ce(e){return e[x]=!0,e;}function ue(e){var t=f.createElement("fieldset");try{return!!e(t);}catch(e){return!1;}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function pe(e,t){for(var n=e.split("|"),o=n.length;o--;)i.attrHandle[n[o]]=t;}function he(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1;}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e;};}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e;};}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e;};}function me(e){return ce(function(t){return t=+t,ce(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]));});});}function ye(e){return e&&void 0!==e.getElementsByTagName&&e;}for(t in n=ae.support={},r=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!K.test(t||n&&n.nodeName||"HTML");},h=ae.setDocument=function(e){var t,o,s=e?e.ownerDocument||e:w;return s!=f&&9===s.nodeType&&s.documentElement&&(d=(f=s).documentElement,g=!r(f),w!=f&&(o=f.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",re,!1):o.attachEvent&&o.attachEvent("onunload",re)),n.scope=ue(function(e){return d.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length;}),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className");}),n.getElementsByTagName=ue(function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length;}),n.getElementsByClassName=J.test(f.getElementsByClassName),n.getById=ue(function(e){return d.appendChild(e).id=x,!f.getElementsByName||!f.getElementsByName(x).length;}),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t;};},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[];}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t;};},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r];}return[];}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0;}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i;}return r;},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e);},y=[],m=[],(n.qsa=J.test(f.querySelectorAll))&&(ue(function(e){var t;d.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+H+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+H+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+H+"*name"+H+"*="+H+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]");}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+H+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:");})),(n.matchesSelector=J.test(v=d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),y.push("!=",W);}),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=J.test(d.compareDocumentPosition),b=t||J.test(d.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)));}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1;},A=t?function(e,t){if(e===t)return p=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e==f||e.ownerDocument==w&&b(w,e)?-1:t==f||t.ownerDocument==w&&b(w,t)?1:u?P(u,e)-P(u,t):0:4&i?-1:1);}:function(e,t){if(e===t)return p=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!o||!r)return e==f?-1:t==f?1:o?-1:r?1:u?P(u,e)-P(u,t):0;if(o===r)return he(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?he(s[i],a[i]):s[i]==w?-1:a[i]==w?1:0;}),f;},ae.matches=function(e,t){return ae(e,null,null,t);},ae.matchesSelector=function(e,t){if(h(e),n.matchesSelector&&g&&!C[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var i=v.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i;}catch(e){C(t,!0);}return 0<ae(t,f,null,[e]).length;},ae.contains=function(e,t){return(e.ownerDocument||e)!=f&&h(e),b(e,t);},ae.attr=function(e,t){(e.ownerDocument||e)!=f&&h(e);var o=i.attrHandle[t.toLowerCase()],r=o&&O.call(i.attrHandle,t.toLowerCase())?o(e,t,!g):void 0;return void 0!==r?r:n.attributes||!g?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null;},ae.escape=function(e){return(e+"").replace(ie,oe);},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);},ae.uniqueSort=function(e){var t,i=[],o=0,r=0;if(p=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(A),p){for(;t=e[r++];)t===e[r]&&(o=i.push(r));for(;o--;)e.splice(i[o],1);}return u=null,e;},o=ae.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e);}else if(3===r||4===r)return e.nodeValue;}else for(;t=e[i++];)n+=o(t);return n;},(i=ae.selectors={cacheLength:50,createPseudo:ce,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4);},CHILD:function CHILD(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e;},PSEUDO:function PSEUDO(e){var t,n=!e[6]&&e[2];return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Y.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));}},filter:{TAG:function TAG(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0;}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;};},CLASS:function CLASS(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"");});},ATTR:function ATTR(e,t,n){return function(i){var o=ae.attr(i,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&-1<o.indexOf(n):"$="===t?n&&o.slice(-n.length)===n:"~="===t?-1<(" "+o.replace(z," ")+" ").indexOf(n):"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"));};},CHILD:function CHILD(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode;}:function(t,n,l){var c,u,p,h,f,d,g=r!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!l&&!a,b=!1;if(m){if(r){for(;g;){for(h=t;h=h[g];)if(a?h.nodeName.toLowerCase()===y:1===h.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling";}return!0;}if(d=[s?m.firstChild:m.lastChild],s&&v){for(b=(f=(c=(u=(p=(h=m)[x]||(h[x]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]||[])[0]===_&&c[1])&&c[2],h=f&&m.childNodes[f];h=++f&&h&&h[g]||(b=f=0)||d.pop();)if(1===h.nodeType&&++b&&h===t){u[e]=[_,f,b];break;}}else if(v&&(b=f=(c=(u=(p=(h=t)[x]||(h[x]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]||[])[0]===_&&c[1]),!1===b)for(;(h=++f&&h&&h[g]||(b=f=0)||d.pop())&&((a?h.nodeName.toLowerCase()!==y:1!==h.nodeType)||!++b||(v&&((u=(p=h[x]||(h[x]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]=[_,b]),h!==t)););return(b-=o)===i||b%i==0&&0<=b/i;}};},PSEUDO:function PSEUDO(e,t){var n,o=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return o[x]?o(t):1<o.length?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,n){for(var i,r=o(e,t),s=r.length;s--;)e[i=P(e,r[s])]=!(n[i]=r[s]);}):function(e){return o(e,0,n);}):o;}},pseudos:{not:ce(function(e){var t=[],n=[],i=a(e.replace(F,"$1"));return i[x]?ce(function(e,t,n,o){for(var r,s=i(e,null,o,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r));}):function(e,o,r){return t[0]=e,i(t,null,r,n),t[0]=null,!n.pop();};}),has:ce(function(e){return function(t){return 0<ae(e,t).length;};}),contains:ce(function(e){return e=e.replace(te,ne),function(t){return-1<(t.textContent||o(t)).indexOf(e);};}),lang:ce(function(e){return V.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");}while((t=t.parentNode)&&1===t.nodeType);return!1;};}),target:function target(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id;},root:function root(e){return e===d;},focus:function focus(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex);},enabled:ge(!1),disabled:ge(!0),checked:function checked(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected;},selected:function selected(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected;},empty:function empty(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0;},parent:function parent(e){return!i.pseudos.empty(e);},header:function header(e){return G.test(e.nodeName);},input:function input(e){return Q.test(e.nodeName);},button:function button(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t;},text:function text(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());},first:me(function(){return[0];}),last:me(function(e,t){return[t-1];}),eq:me(function(e,t,n){return[n<0?n+t:n];}),even:me(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e;}),odd:me(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e;}),lt:me(function(e,t,n){for(var i=n<0?n+t:t<n?t:n;0<=--i;)e.push(i);return e;}),gt:me(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e;})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=de(t);function ve(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i;}function xe(e,t,n){var i=t.dir,o=t.next,r=o||i,s=n&&"parentNode"===r,a=k++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,o);return!1;}:function(t,n,l){var c,u,p,h=[_,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0;}else for(;t=t[i];)if(1===t.nodeType||s)if(u=(p=t[x]||(t[x]={}))[t.uniqueID]||(p[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[r])&&c[0]===_&&c[1]===a)return h[2]=c[2];if((u[r]=h)[2]=e(t,n,l))return!0;}return!1;};}function we(e){return 1<e.length?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0;}:e[0];}function _e(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s;}function ke(e,t,n,i,o,r){return i&&!i[x]&&(i=ke(i)),o&&!o[x]&&(o=ke(o,r)),ce(function(r,s,a,l){var c,u,p,h=[],f=[],d=s.length,g=r||function(e,t,n){for(var i=0,o=t.length;i<o;i++)ae(e,t[i],n);return n;}(t||"*",a.nodeType?[a]:a,[]),m=!e||!r&&t?g:_e(g,h,e,a,l),y=n?o||(r?e:d||i)?[]:s:m;if(n&&n(m,y,a,l),i)for(c=_e(y,f),i(c,[],a,l),u=c.length;u--;)(p=c[u])&&(y[f[u]]=!(m[f[u]]=p));if(r){if(o||e){if(o){for(c=[],u=y.length;u--;)(p=y[u])&&c.push(m[u]=p);o(null,y=[],c,l);}for(u=y.length;u--;)(p=y[u])&&-1<(c=o?P(r,p):h[u])&&(r[c]=!(s[c]=p));}}else y=_e(y===s?y.splice(d,y.length):y),o?o(null,s,y,l):N.apply(s,y);});}function Ee(e){for(var t,n,o,r=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,u=xe(function(e){return e===t;},a,!0),p=xe(function(e){return-1<P(t,e);},a,!0),h=[function(e,n,i){var o=!s&&(i||n!==c)||((t=n).nodeType?u(e,n,i):p(e,n,i));return t=null,o;}];l<r;l++)if(n=i.relative[e[l].type])h=[xe(we(h),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[x]){for(o=++l;o<r&&!i.relative[e[o].type];o++);return ke(1<l&&we(h),1<l&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(F,"$1"),n,l<o&&Ee(e.slice(l,o)),o<r&&Ee(e=e.slice(o)),o<r&&be(e));}h.push(n);}return we(h);}return ve.prototype=i.filters=i.pseudos,i.setFilters=new ve(),s=ae.tokenize=function(e,t){var n,o,r,s,a,l,c,u=T[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=i.preFilter;a;){for(s in n&&!(o=B.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),n=!1,(o=U.exec(a))&&(n=o.shift(),r.push({value:n,type:o[0].replace(F," ")}),a=a.slice(n.length)),i.filter)!(o=$[s].exec(a))||c[s]&&!(o=c[s](o))||(n=o.shift(),r.push({value:n,type:s,matches:o}),a=a.slice(n.length));if(!n)break;}return t?a.length:a?ae.error(e):T(e,l).slice(0);},a=ae.compile=function(e,t){var n,o,r,a,l,u,p=[],d=[],m=S[e+" "];if(!m){for(t||(t=s(e)),n=t.length;n--;)(m=Ee(t[n]))[x]?p.push(m):d.push(m);(m=S(e,(o=d,a=0<(r=p).length,l=0<o.length,u=function u(e,t,n,s,_u){var p,d,m,y=0,v="0",b=e&&[],x=[],w=c,k=e||l&&i.find.TAG("*",_u),E=_+=null==w?1:Math.random()||0.1,T=k.length;for(_u&&(c=t==f||t||_u);v!==T&&null!=(p=k[v]);v++){if(l&&p){for(d=0,t||p.ownerDocument==f||(h(p),n=!g);m=o[d++];)if(m(p,t||f,n)){s.push(p);break;}_u&&(_=E);}a&&((p=!m&&p)&&y--,e&&b.push(p));}if(y+=v,a&&v!==y){for(d=0;m=r[d++];)m(b,x,t,n);if(e){if(0<y)for(;v--;)b[v]||x[v]||(x[v]=M.call(s));x=_e(x);}N.apply(s,x),_u&&!e&&0<x.length&&1<y+r.length&&ae.uniqueSort(s);}return _u&&(_=E,c=w),b;},a?ce(u):u))).selector=e;}return m;},l=ae.select=function(e,t,n,o){var r,l,c,u,p,h="function"==typeof e&&e,f=!o&&s(e=h.selector||e);if(n=n||[],1===f.length){if(2<(l=f[0]=f[0].slice(0)).length&&"ID"===(c=l[0]).type&&9===t.nodeType&&g&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;h&&(t=t.parentNode),e=e.slice(l.shift().value.length);}for(r=$.needsContext.test(e)?0:l.length;r--&&(c=l[r],!i.relative[u=c.type]);)if((p=i.find[u])&&(o=p(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ye(t.parentNode)||t))){if(l.splice(r,1),!(e=o.length&&be(l)))return N.apply(n,o),n;break;}}return(h||a(e,f))(o,t,!g,n,!t||ee.test(e)&&ye(t.parentNode)||t),n;},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!p,h(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"));}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href");})||pe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2);}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value");})||pe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;}),ue(function(e){return null==e.getAttribute("disabled");})||pe(I,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null;}),ae;}(e);w.find=k,w.expr=k.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=k.uniqueSort,w.text=k.getText,w.isXMLDoc=k.isXML,w.contains=k.contains,w.escapeSelector=k.escape;var E=function E(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&w(e).is(n))break;i.push(e);}return i;},T=function T(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n;},S=w.expr.match.needsContext;function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function O(e,t,n){return d(t)?w.grep(e,function(e,i){return!!t.call(e,i,e)!==n;}):t.nodeType?w.grep(e,function(e){return e===t!==n;}):"string"!=typeof t?w.grep(e,function(e){return-1<a.call(t,e)!==n;}):w.filter(t,e,n);}w.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?w.find.matchesSelector(i,e)?[i]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType;}));},w.fn.extend({find:function find(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<i;t++)if(w.contains(o[t],this))return!0;}));for(n=this.pushStack([]),t=0;t<i;t++)w.find(e,o[t],n);return 1<i?w.uniqueSort(n):n;},filter:function filter(e){return this.pushStack(O(this,e||[],!1));},not:function not(e){return this.pushStack(O(this,e||[],!0));},is:function is(e){return!!O(this,"string"==typeof e&&S.test(e)?w(e):e||[],!1).length;}});var L,M=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:M.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)d(this[i])?this[i](t[i]):this.attr(i,t[i]);return this;}return(o=m.getElementById(i[2]))&&(this[0]=o,this.length=1),this;}return e.nodeType?(this[0]=e,this.length=1,this):d(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this);}).prototype=w.fn,L=w(m);var j=/^(?:parents|prev(?:Until|All))/,N={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e;}w.fn.extend({has:function has(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0;});},closest:function closest(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&w(e);if(!S.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&w.find.matchesSelector(n,e))){r.push(n);break;}return this.pushStack(1<r.length?w.uniqueSort(r):r);},index:function index(e){return e?"string"==typeof e?a.call(w(e),this[0]):a.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function add(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))));},addBack:function addBack(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));}}),w.each({parent:function parent(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null;},parents:function parents(e){return E(e,"parentNode");},parentsUntil:function parentsUntil(e,t,n){return E(e,"parentNode",n);},next:function next(e){return D(e,"nextSibling");},prev:function prev(e){return D(e,"previousSibling");},nextAll:function nextAll(e){return E(e,"nextSibling");},prevAll:function prevAll(e){return E(e,"previousSibling");},nextUntil:function nextUntil(e,t,n){return E(e,"nextSibling",n);},prevUntil:function prevUntil(e,t,n){return E(e,"previousSibling",n);},siblings:function siblings(e){return T((e.parentNode||{}).firstChild,e);},children:function children(e){return T(e.firstChild);},contents:function contents(e){return null!=e.contentDocument&&i(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),w.merge([],e.childNodes));}},function(e,t){w.fn[e]=function(n,i){var o=w.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=w.filter(i,o)),1<this.length&&(N[e]||w.uniqueSort(o),j.test(e)&&o.reverse()),this.pushStack(o);};});var P=/[^\x20\t\r\n\f]+/g;function I(e){return e;}function H(e){throw e;}function R(e,t,n,i){var o;try{e&&d(o=e.promise)?o.call(e).done(t).fail(n):e&&d(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i));}catch(e){n.apply(void 0,[e]);}}w.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},w.each(t.match(P)||[],function(e,t){n[t]=!0;}),n):w.extend({},e);var i,o,r,s,a=[],l=[],c=-1,u=function u(){for(s=s||e.once,r=i=!0;l.length;c=-1)for(o=l.shift();++c<a.length;)!1===a[c].apply(o[0],o[1])&&e.stopOnFalse&&(c=a.length,o=!1);e.memory||(o=!1),i=!1,s&&(a=o?[]:"");},p={add:function add(){return a&&(o&&!i&&(c=a.length-1,l.push(o)),function t(n){w.each(n,function(n,i){d(i)?e.unique&&p.has(i)||a.push(i):i&&i.length&&"string"!==b(i)&&t(i);});}(arguments),o&&!i&&u()),this;},remove:function remove(){return w.each(arguments,function(e,t){for(var n;-1<(n=w.inArray(t,a,n));)a.splice(n,1),n<=c&&c--;}),this;},has:function has(e){return e?-1<w.inArray(e,a):0<a.length;},empty:function empty(){return a&&(a=[]),this;},disable:function disable(){return s=l=[],a=o="",this;},disabled:function disabled(){return!a;},lock:function lock(){return s=l=[],o||i||(a=o=""),this;},locked:function locked(){return!!s;},fireWith:function fireWith(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||u()),this;},fire:function fire(){return p.fireWith(this,arguments),this;},fired:function fired(){return!!r;}};return p;},w.extend({Deferred:function Deferred(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function state(){return i;},always:function always(){return r.done(arguments).fail(arguments),this;},"catch":function _catch(e){return o.then(null,e);},pipe:function pipe(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,i){var o=d(e[i[4]])&&e[i[4]];r[i[1]](function(){var e=o&&o.apply(this,arguments);e&&d(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,o?[e]:arguments);});}),e=null;}).promise();},then:function then(t,i,o){var r=0;function s(t,n,i,o){return function(){var a=this,l=arguments,c=function c(){var e,c;if(!(t<r)){if((e=i.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==_typeof(e)||"function"==typeof e)&&e.then,d(c)?o?c.call(e,s(r,n,I,o),s(r,n,H,o)):(r++,c.call(e,s(r,n,I,o),s(r,n,H,o),s(r,n,I,n.notifyWith))):(i!==I&&(a=void 0,l=[e]),(o||n.resolveWith)(a,l));}},u=o?c:function(){try{c();}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,u.stackTrace),r<=t+1&&(i!==H&&(a=void 0,l=[e]),n.rejectWith(a,l));}};t?u():(w.Deferred.getStackHook&&(u.stackTrace=w.Deferred.getStackHook()),e.setTimeout(u));};}return w.Deferred(function(e){n[0][3].add(s(0,e,d(o)?o:I,e.notifyWith)),n[1][3].add(s(0,e,d(t)?t:I)),n[2][3].add(s(0,e,d(i)?i:H));}).promise();},promise:function promise(e){return null!=e?w.extend(e,o):o;}},r={};return w.each(n,function(e,t){var s=t[2],a=t[5];o[t[1]]=s.add,a&&s.add(function(){i=a;},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this;},r[t[0]+"With"]=s.fireWith;}),o.promise(r),t&&t.call(r,r),r;},when:function when(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),s=w.Deferred(),a=function a(e){return function(n){i[e]=this,r[e]=1<arguments.length?o.call(arguments):n,--t||s.resolveWith(i,r);};};if(t<=1&&(R(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||d(r[n]&&r[n].then)))return s.then();for(;n--;)R(r[n],a(n),s.reject);return s.promise();}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&q.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n);},w.readyException=function(t){e.setTimeout(function(){throw t;});};var W=w.Deferred();function z(){m.removeEventListener("DOMContentLoaded",z),e.removeEventListener("load",z),w.ready();}w.fn.ready=function(e){return W.then(e)["catch"](function(e){w.readyException(e);}),this;},w.extend({isReady:!1,readyWait:1,ready:function ready(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0)!==e&&0<--w.readyWait||W.resolveWith(m,[w]);}}),w.ready.then=W.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?e.setTimeout(w.ready):(m.addEventListener("DOMContentLoaded",z),e.addEventListener("load",z));var F=function F(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===b(n))for(a in o=!0,n)F(e,t,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,d(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function t(e,_t2,n){return c.call(w(e),n);})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r;},B=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase();}function Y(e){return e.replace(B,"ms-").replace(U,X);}var V=function V(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType;};function $(){this.expando=w.expando+$.uid++;}$.uid=1,$.prototype={cache:function cache(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t;},set:function set(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[Y(t)]=n;else for(i in t)o[Y(i)]=t[i];return o;},get:function get(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Y(t)];},access:function access(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t);},remove:function remove(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Y):(t=Y(t))in i?[t]:t.match(P)||[]).length;for(;n--;)delete i[t[n]];}(void 0===t||w.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function hasData(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t);}};var K=new $(),Q=new $(),G=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(e,t,n){var i,o;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(o=n)||"false"!==o&&("null"===o?null:o===+o+""?+o:G.test(o)?JSON.parse(o):o);}catch(e){}Q.set(e,t,n);}else n=void 0;return n;}w.extend({hasData:function hasData(e){return Q.hasData(e)||K.hasData(e);},data:function data(e,t,n){return Q.access(e,t,n);},removeData:function removeData(e,t){Q.remove(e,t);},_data:function _data(e,t,n){return K.access(e,t,n);},_removeData:function _removeData(e,t){K.remove(e,t);}}),w.fn.extend({data:function data(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=Q.get(r),1===r.nodeType&&!K.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=Y(i.slice(5)),Z(r,i,o[i]));K.set(r,"hasDataAttrs",!0);}return o;}return"object"==_typeof(e)?this.each(function(){Q.set(this,e);}):F(this,function(t){var n;if(r&&void 0===t)return void 0!==(n=Q.get(r,e))||void 0!==(n=Z(r,e))?n:void 0;this.each(function(){Q.set(this,e,t);});},null,t,1<arguments.length,null,!0);},removeData:function removeData(e){return this.each(function(){Q.remove(this,e);});}}),w.extend({queue:function queue(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=K.get(e,t),n&&(!i||Array.isArray(n)?i=K.access(e,t,w.makeArray(n)):i.push(n)),i||[];},dequeue:function dequeue(e,t){t=t||"fx";var n=w.queue(e,t),i=n.length,o=n.shift(),r=w._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){w.dequeue(e,t);},r)),!i&&r&&r.empty.fire();},_queueHooks:function _queueHooks(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:w.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n]);})});}}),w.fn.extend({queue:function queue(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e);});},dequeue:function dequeue(e){return this.each(function(){w.dequeue(this,e);});},clearQueue:function clearQueue(e){return this.queue(e||"fx",[]);},promise:function promise(e,t){var n,i=1,o=w.Deferred(),r=this,s=this.length,a=function a(){--i||o.resolveWith(r,[r]);};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=K.get(r[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t);}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ie=m.documentElement,oe=function oe(e){return w.contains(e.ownerDocument,e);},re={composed:!0};ie.getRootNode&&(oe=function oe(e){return w.contains(e.ownerDocument,e)||e.getRootNode(re)===e.ownerDocument;});var se=function se(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===w.css(e,"display");};function ae(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur();}:function(){return w.css(e,t,"");},l=a(),c=n&&n[3]||(w.cssNumber[t]?"":"px"),u=e.nodeType&&(w.cssNumber[t]||"px"!==c&&+l)&&te.exec(w.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;s--;)w.style(e,t,u+c),(1-r)*(1-(r=a()/l||0.5))<=0&&(s=0),u/=r;u*=2,w.style(e,t,u+c),n=n||[];}return n&&(u=+u||+l||0,o=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=o)),o;}var le={};function ce(e,t){for(var n,i,o,r,s,a,l,c=[],u=0,p=e.length;u<p;u++)(i=e[u]).style&&(n=i.style.display,t?("none"===n&&(c[u]=K.get(i,"display")||null,c[u]||(i.style.display="")),""===i.style.display&&se(i)&&(c[u]=(l=s=r=void 0,s=(o=i).ownerDocument,a=o.nodeName,(l=le[a])||(r=s.body.appendChild(s.createElement(a)),l=w.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),le[a]=l)))):"none"!==n&&(c[u]="none",K.set(i,"display",n)));for(u=0;u<p;u++)null!=c[u]&&(e[u].style.display=c[u]);return e;}w.fn.extend({show:function show(){return ce(this,!0);},hide:function hide(){return ce(this);},toggle:function toggle(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?w(this).show():w(this).hide();});}});var ue,pe,he=/^(?:checkbox|radio)$/i,fe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,de=/^$|^module$|\/(?:java|ecma)script/i;ue=m.createDocumentFragment().appendChild(m.createElement("div")),(pe=m.createElement("input")).setAttribute("type","radio"),pe.setAttribute("checked","checked"),pe.setAttribute("name","t"),ue.appendChild(pe),f.checkClone=ue.cloneNode(!0).cloneNode(!0).lastChild.checked,ue.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!ue.cloneNode(!0).lastChild.defaultValue,ue.innerHTML="<option></option>",f.option=!!ue.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function me(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t)?w.merge([e],n):n;}function ye(e,t){for(var n=0,i=e.length;n<i;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"));}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,f.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var ve=/<|&#?\w+;/;function be(e,t,n,i,o){for(var r,s,a,l,c,u,p=t.createDocumentFragment(),h=[],f=0,d=e.length;f<d;f++)if((r=e[f])||0===r)if("object"===b(r))w.merge(h,r.nodeType?[r]:r);else if(ve.test(r)){for(s=s||p.appendChild(t.createElement("div")),a=(fe.exec(r)||["",""])[1].toLowerCase(),l=ge[a]||ge._default,s.innerHTML=l[1]+w.htmlPrefilter(r)+l[2],u=l[0];u--;)s=s.lastChild;w.merge(h,s.childNodes),(s=p.firstChild).textContent="";}else h.push(t.createTextNode(r));for(p.textContent="",f=0;r=h[f++];)if(i&&-1<w.inArray(r,i))o&&o.push(r);else if(c=oe(r),s=me(p.appendChild(r),"script"),c&&ye(s),n)for(u=0;r=s[u++];)de.test(r.type||"")&&n.push(r);return p;}var xe=/^([^.]*)(?:\.(.+)|)/;function we(){return!0;}function _e(){return!1;}function ke(e,t){return e===function(){try{return m.activeElement;}catch(e){}}()==("focus"===t);}function Ee(e,t,n,i,o,r){var s,a;if("object"==_typeof(t)){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Ee(e,a,n,i,t[a],r);return e;}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=_e;else if(!o)return e;return 1===r&&(s=o,(o=function o(e){return w().off(e),s.apply(this,arguments);}).guid=s.guid||(s.guid=w.guid++)),e.each(function(){w.event.add(this,t,o,i,n);});}function Te(e,t,n){n?(K.set(e,t,!1),w.event.add(e,t,{namespace:!1,handler:function handler(e){var i,r,s=K.get(this,t);if(1&e.isTrigger&&this[t]){if(s.length)(w.event.special[t]||{}).delegateType&&e.stopPropagation();else if(s=o.call(arguments),K.set(this,t,s),i=n(this,t),this[t](),s!==(r=K.get(this,t))||i?K.set(this,t,!1):r={},s!==r)return e.stopImmediatePropagation(),e.preventDefault(),r&&r.value;}else s.length&&(K.set(this,t,{value:w.event.trigger(w.extend(s[0],w.Event.prototype),s.slice(1),this)}),e.stopImmediatePropagation());}})):void 0===K.get(e,t)&&w.event.add(e,t,we);}w.event={global:{},add:function add(e,t,n,i,o){var r,s,a,l,c,u,p,h,f,d,g,m=K.get(e);if(V(e))for(n.handler&&(n=(r=n).handler,o=r.selector),o&&w.find.matchesSelector(ie,o),n.guid||(n.guid=w.guid++),(l=m.events)||(l=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){return void 0!==w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0;}),c=(t=(t||"").match(P)||[""]).length;c--;)f=g=(a=xe.exec(t[c])||[])[1],d=(a[2]||"").split(".").sort(),f&&(p=w.event.special[f]||{},f=(o?p.delegateType:p.bindType)||f,p=w.event.special[f]||{},u=w.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&w.expr.match.needsContext.test(o),namespace:d.join(".")},r),(h=l[f])||((h=l[f]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,i,d,s)||e.addEventListener&&e.addEventListener(f,s)),p.add&&(p.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,u):h.push(u),w.event.global[f]=!0);},remove:function remove(e,t,n,i,o){var r,s,a,l,c,u,p,h,f,d,g,m=K.hasData(e)&&K.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(P)||[""]).length;c--;)if(f=g=(a=xe.exec(t[c])||[])[1],d=(a[2]||"").split(".").sort(),f){for(p=w.event.special[f]||{},h=l[f=(i?p.delegateType:p.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=h.length;r--;)u=h[r],!o&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(h.splice(r,1),u.selector&&h.delegateCount--,p.remove&&p.remove.call(e,u));s&&!h.length&&(p.teardown&&!1!==p.teardown.call(e,d,m.handle)||w.removeEvent(e,f,m.handle),delete l[f]);}else for(f in l)w.event.remove(e,f+t[c],n,i,!0);w.isEmptyObject(l)&&K.remove(e,"handle events");}},dispatch:function dispatch(e){var t,n,i,o,r,s,a=new Array(arguments.length),l=w.event.fix(e),c=(K.get(this,"events")||Object.create(null))[l.type]||[],u=w.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(s=w.event.handlers.call(this,l,c),t=0;(o=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==r.namespace&&!l.rnamespace.test(r.namespace)||(l.handleObj=r,l.data=r.data,void 0!==(i=((w.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result;}},handlers:function handlers(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<w(o,this).index(c):w.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r});}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a;},addProp:function addProp(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:d(t)?function(){if(this.originalEvent)return t(this.originalEvent);}:function(){if(this.originalEvent)return this.originalEvent[e];},set:function set(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});}});},fix:function fix(e){return e[w.expando]?e:new w.Event(e);},special:{load:{noBubble:!0},click:{setup:function setup(e){var t=this||e;return he.test(t.type)&&t.click&&C(t,"input")&&Te(t,"click",we),!1;},trigger:function trigger(e){var t=this||e;return he.test(t.type)&&t.click&&C(t,"input")&&Te(t,"click"),!0;},_default:function _default(e){var t=e.target;return he.test(t.type)&&t.click&&C(t,"input")&&K.get(t,"click")||C(t,"a");}},beforeunload:{postDispatch:function postDispatch(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:_e,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0;},w.Event.prototype={constructor:w.Event,isDefaultPrevented:_e,isPropagationStopped:_e,isImmediatePropagationStopped:_e,isSimulated:!1,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault();},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation();},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation();}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},function(e,t){w.event.special[e]={setup:function setup(){return Te(this,e,ke),!1;},trigger:function trigger(){return Te(this,e),!0;},_default:function _default(){return!0;},delegateType:t};}),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function handle(e){var n,i=e.relatedTarget,o=e.handleObj;return i&&(i===this||w.contains(this,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n;}};}),w.fn.extend({on:function on(e,t,n,i){return Ee(this,e,t,n,i);},one:function one(e,t,n,i){return Ee(this,e,t,n,i,1);},off:function off(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,w(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==_typeof(e)){for(o in e)this.off(o,t,e[o]);return this;}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=_e),this.each(function(){w.event.remove(this,e,n,t);});}});var Se=/<script|<style|<link/i,Ce=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&w(e).children("tbody")[0]||e;}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e;}function Me(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e;}function je(e,t){var n,i,o,r,s,a;if(1===t.nodeType){if(K.hasData(e)&&(a=K.get(e).events))for(o in K.remove(t,"handle events"),a)for(n=0,i=a[o].length;n<i;n++)w.event.add(t,o,a[o][n]);Q.hasData(e)&&(r=Q.access(e),s=w.extend({},r),Q.set(t,s));}}function Ne(e,t,n,i){t=r(t);var o,s,a,l,c,u,p=0,h=e.length,g=h-1,m=t[0],y=d(m);if(y||1<h&&"string"==typeof m&&!f.checkClone&&Ce.test(m))return e.each(function(o){var r=e.eq(o);y&&(t[0]=m.call(this,o,r.html())),Ne(r,t,n,i);});if(h&&(s=(o=be(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=s),s||i)){for(l=(a=w.map(me(o,"script"),Le)).length;p<h;p++)c=o,p!==g&&(c=w.clone(c,!0,!0),l&&w.merge(a,me(c,"script"))),n.call(e[p],c,p);if(l)for(u=a[a.length-1].ownerDocument,w.map(a,Me),p=0;p<l;p++)c=a[p],de.test(c.type||"")&&!K.access(c,"globalEval")&&w.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?w._evalUrl&&!c.noModule&&w._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):v(c.textContent.replace(Ae,""),c,u));}return e;}function De(e,t,n){for(var i,o=t?w.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||w.cleanData(me(i)),i.parentNode&&(n&&oe(i)&&ye(me(i,"script")),i.parentNode.removeChild(i));return e;}w.extend({htmlPrefilter:function htmlPrefilter(e){return e;},clone:function clone(e,t,n){var i,o,r,s,a,l,c,u=e.cloneNode(!0),p=oe(e);if(!(f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(s=me(u),i=0,o=(r=me(e)).length;i<o;i++)a=r[i],"input"===(c=(l=s[i]).nodeName.toLowerCase())&&he.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||me(e),s=s||me(u),i=0,o=r.length;i<o;i++)je(r[i],s[i]);else je(e,u);return 0<(s=me(u,"script")).length&&ye(s,!p&&me(e,"script")),u;},cleanData:function cleanData(e){for(var t,n,i,o=w.event.special,r=0;void 0!==(n=e[r]);r++)if(V(n)){if(t=n[K.expando]){if(t.events)for(i in t.events)o[i]?w.event.remove(n,i):w.removeEvent(n,i,t.handle);n[K.expando]=void 0;}n[Q.expando]&&(n[Q.expando]=void 0);}}}),w.fn.extend({detach:function detach(e){return De(this,e,!0);},remove:function remove(e){return De(this,e);},text:function text(e){return F(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);});},null,e,arguments.length);},append:function append(){return Ne(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e);});},prepend:function prepend(){return Ne(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild);}});},before:function before(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);});},after:function after(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);});},empty:function empty(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(me(e,!1)),e.textContent="");return this;},clone:function clone(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t);});},html:function html(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!ge[(fe.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(me(t,!1)),t.innerHTML=e);t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length);},replaceWith:function replaceWith(){var e=[];return Ne(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(me(this)),n&&n.replaceChild(t,this));},e);}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,i=[],o=w(e),r=o.length-1,a=0;a<=r;a++)n=a===r?this:this.clone(!0),w(o[a])[t](n),s.apply(i,n.get());return this.pushStack(i);};});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function Ie(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t);},He=function He(e,t,n){var i,o,r={};for(o in t)r[o]=e.style[o],e.style[o]=t[o];for(o in i=n.call(e),t)e.style[o]=r[o];return i;},Re=new RegExp(ne.join("|"),"i");function qe(e,t,n){var i,o,r,s,a=e.style;return(n=n||Ie(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||oe(e)||(s=w.style(e,t)),!f.pixelBoxStyles()&&Pe.test(s)&&Re.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s;}function We(e,t){return{get:function get(){if(!e())return(this.get=t).apply(this,arguments);delete this.get;}};}!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,l=12===n(t.marginLeft),u.style.right="60%",s=36===n(t.right),o=36===n(t.width),u.style.position="absolute",r=12===n(u.offsetWidth/3),ie.removeChild(c),u=null;}}function n(e){return Math.round(parseFloat(e));}var i,o,r,s,a,l,c=m.createElement("div"),u=m.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===u.style.backgroundClip,w.extend(f,{boxSizingReliable:function boxSizingReliable(){return t(),o;},pixelBoxStyles:function pixelBoxStyles(){return t(),s;},pixelPosition:function pixelPosition(){return t(),i;},reliableMarginLeft:function reliableMarginLeft(){return t(),l;},scrollboxSize:function scrollboxSize(){return t(),r;},reliableTrDimensions:function reliableTrDimensions(){var t,n,i,o;return null==a&&(t=m.createElement("table"),n=m.createElement("tr"),i=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",i.style.height="9px",i.style.display="block",ie.appendChild(t).appendChild(n).appendChild(i),o=e.getComputedStyle(n),a=parseInt(o.height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===n.offsetHeight,ie.removeChild(t)),a;}}));}();var ze=["Webkit","Moz","ms"],Fe=m.createElement("div").style,Be={};function Ue(e){return w.cssProps[e]||Be[e]||(e in Fe?e:Be[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=ze.length;n--;)if((e=ze[n]+t)in Fe)return e;}(e)||e);}var Xe=/^(none|table(?!-c[ea]).+)/,Ye=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},$e={letterSpacing:"0",fontWeight:"400"};function Ke(e,t,n){var i=te.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t;}function Qe(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=w.css(e,n+ne[s],!0,o)),i?("content"===n&&(l-=w.css(e,"padding"+ne[s],!0,o)),"margin"!==n&&(l-=w.css(e,"border"+ne[s]+"Width",!0,o))):(l+=w.css(e,"padding"+ne[s],!0,o),"padding"!==n?l+=w.css(e,"border"+ne[s]+"Width",!0,o):a+=w.css(e,"border"+ne[s]+"Width",!0,o));return!i&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-0.5))||0),l;}function Ge(e,t,n){var i=Ie(e),o=(!f.boxSizingReliable()||n)&&"border-box"===w.css(e,"boxSizing",!1,i),r=o,s=qe(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(s)){if(!n)return s;s="auto";}return(!f.boxSizingReliable()&&o||!f.reliableTrDimensions()&&C(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===w.css(e,"display",!1,i))&&e.getClientRects().length&&(o="border-box"===w.css(e,"boxSizing",!1,i),(r=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+Qe(e,t,n||(o?"border":"content"),r,i,s)+"px";}function Je(e,t,n,i,o){return new Je.prototype.init(e,t,n,i,o);}w.extend({cssHooks:{opacity:{get:function get(e,t){if(t){var n=qe(e,"opacity");return""===n?"1":n;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function style(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=Y(t),l=Ye.test(t),c=e.style;if(l||(t=Ue(a)),s=w.cssHooks[t]||w.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:c[t];"string"==(r=_typeof(n))&&(o=te.exec(n))&&o[1]&&(n=ae(e,t,o),r="number"),null!=n&&n==n&&("number"!==r||l||(n+=o&&o[3]||(w.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n));}},css:function css(e,t,n,i){var o,r,s,a=Y(t);return Ye.test(t)||(t=Ue(a)),(s=w.cssHooks[t]||w.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=qe(e,t,i)),"normal"===o&&t in $e&&(o=$e[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o;}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function get(e,n,i){if(n)return!Xe.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ge(e,t,i):He(e,Ve,function(){return Ge(e,t,i);});},set:function set(e,n,i){var o,r=Ie(e),s=!f.scrollboxSize()&&"absolute"===r.position,a=(s||i)&&"border-box"===w.css(e,"boxSizing",!1,r),l=i?Qe(e,t,i,a,r):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-Qe(e,t,"border",!1,r)-0.5)),l&&(o=te.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(0,n,l);}};}),w.cssHooks.marginLeft=We(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(qe(e,"marginLeft"))||e.getBoundingClientRect().left-He(e,{marginLeft:0},function(){return e.getBoundingClientRect().left;}))+"px";}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function expand(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+ne[i]+t]=r[i]||r[i-2]||r[0];return o;}},"margin"!==e&&(w.cssHooks[e+t].set=Ke);}),w.fn.extend({css:function css(e,t){return F(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=Ie(e),o=t.length;s<o;s++)r[t[s]]=w.css(e,t[s],!1,i);return r;}return void 0!==n?w.style(e,t,n):w.css(e,t);},e,t,1<arguments.length);}}),((w.Tween=Je).prototype={constructor:Je,init:function init(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(w.cssNumber[n]?"":"px");},cur:function cur(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this);},run:function run(e){var t,n=Je.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this;}}).init.prototype=Je.prototype,(Je.propHooks={_default:{get:function get(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0;},set:function set(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||!w.cssHooks[e.prop]&&null==e.elem.style[Ue(e.prop)]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit);}}}).scrollTop=Je.propHooks.scrollLeft={set:function set(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},w.easing={linear:function linear(e){return e;},swing:function swing(e){return 0.5-Math.cos(e*Math.PI)/2;},_default:"swing"},w.fx=Je.prototype.init,w.fx.step={};var Ze,et,tt,nt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function rt(){et&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(rt):e.setTimeout(rt,w.fx.interval),w.fx.tick());}function st(){return e.setTimeout(function(){Ze=void 0;}),Ze=Date.now();}function at(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=ne[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o;}function lt(e,t,n){for(var i,o=(ct.tweeners[t]||[]).concat(ct.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i;}function ct(e,t,n){var i,o,r=0,s=ct.prefilters.length,a=w.Deferred().always(function(){delete l.elem;}),l=function l(){if(o)return!1;for(var t=Ze||st(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),r=0,s=c.tweens.length;r<s;r++)c.tweens[r].run(i);return a.notifyWith(e,[c,i,n]),i<1&&s?n:(s||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1);},c=a.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ze||st(),duration:n.duration,tweens:[],createTween:function createTween(t,n){var i=w.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i;},stop:function stop(t){var n=0,i=t?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this;}}),u=c.props;for(function(e,t){var n,i,o,r,s;for(n in e)if(o=t[i=Y(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=w.cssHooks[i])&&("expand"in s))for(n in r=s.expand(r),delete e[i],r)(n in e)||(e[n]=r[n],t[n]=o);else t[i]=o;}(u,c.opts.specialEasing);r<s;r++)if(i=ct.prefilters[r].call(c,e,u,c.opts))return d(i.stop)&&(w._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return w.map(u,lt,c),d(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),w.fx.timer(w.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c;}w.Animation=w.extend(ct,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ae(n.elem,e,te.exec(t),n),n;}]},tweener:function tweener(e,t){d(e)?(t=e,e=["*"]):e=e.match(P);for(var n,i=0,o=e.length;i<o;i++)n=e[i],ct.tweeners[n]=ct.tweeners[n]||[],ct.tweeners[n].unshift(t);},prefilters:[function(e,t,n){var i,o,r,s,a,l,c,u,p="width"in t||"height"in t,h=this,f={},d=e.style,g=e.nodeType&&se(e),m=K.get(e,"fxshow");for(i in n.queue||(null==(s=w._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a();}),s.unqueued++,h.always(function(){h.always(function(){s.unqueued--,w.queue(e,"fx").length||s.empty.fire();});})),t)if(o=t[i],it.test(o)){if(delete t[i],r=r||"toggle"===o,o===(g?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue;g=!0;}f[i]=m&&m[i]||w.style(e,i);}if((l=!w.isEmptyObject(t))||!w.isEmptyObject(f))for(i in p&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(c=m&&m.display)&&(c=K.get(e,"display")),"none"===(u=w.css(e,"display"))&&(c?u=c:(ce([e],!0),c=e.style.display||c,u=w.css(e,"display"),ce([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===w.css(e,"float")&&(l||(h.done(function(){d.display=c;}),null==c&&(u=d.display,c="none"===u?"":u)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",h.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2];})),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=K.access(e,"fxshow",{display:c}),r&&(m.hidden=!g),g&&ce([e],!0),h.done(function(){for(i in g||ce([e]),K.remove(e,"fxshow"),f)w.style(e,i,f[i]);})),l=lt(g?m[i]:0,i,h),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0));}],prefilter:function prefilter(e,t){t?ct.prefilters.unshift(e):ct.prefilters.push(e);}}),w.speed=function(e,t,n){var i=e&&"object"==_typeof(e)?w.extend({},e):{complete:n||!n&&t||d(e)&&e,duration:e,easing:n&&t||t&&!d(t)&&t};return w.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in w.fx.speeds?i.duration=w.fx.speeds[i.duration]:i.duration=w.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){d(i.old)&&i.old.call(this),i.queue&&w.dequeue(this,i.queue);},i;},w.fn.extend({fadeTo:function fadeTo(e,t,n,i){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,i);},animate:function animate(e,t,n,i){var o=w.isEmptyObject(e),r=w.speed(t,n,i),s=function s(){var t=ct(this,w.extend({},e),r);(o||K.get(this,"finish"))&&t.stop(!0);};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s);},stop:function stop(e,t,n){var i=function i(e){var t=e.stop;delete e.stop,t(n);};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=w.timers,s=K.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&ot.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||w.dequeue(this,e);});},finish:function finish(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=K.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=w.timers,s=i?i.length:0;for(n.finish=!0,w.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish;});}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,i,o);};}),w.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,i){return this.animate(t,e,n,i);};}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),Ze=void 0;},w.fx.timer=function(e){w.timers.push(e),w.fx.start();},w.fx.interval=13,w.fx.start=function(){et||(et=!0,rt());},w.fx.stop=function(){et=null;},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx&&w.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o);};});},tt=m.createElement("input"),nt=m.createElement("select").appendChild(m.createElement("option")),tt.type="checkbox",f.checkOn=""!==tt.value,f.optSelected=nt.selected,(tt=m.createElement("input")).value="t",tt.type="radio",f.radioValue="t"===tt.value;var ut,pt=w.expr.attrHandle;w.fn.extend({attr:function attr(e,t){return F(this,w.attr,e,t,1<arguments.length);},removeAttr:function removeAttr(e){return this.each(function(){w.removeAttr(this,e);});}}),w.extend({attr:function attr(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?w.prop(e,t,n):(1===r&&w.isXMLDoc(e)||(o=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=w.find.attr(e,t))?void 0:i);},attrHooks:{type:{set:function set(e,t){if(!f.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t;}}}},removeAttr:function removeAttr(e,t){var n,i=0,o=t&&t.match(P);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n);}}),ut={set:function set(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n;}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=pt[t]||w.find.attr;pt[t]=function(e,t,i){var o,r,s=t.toLowerCase();return i||(r=pt[s],pt[s]=o,o=null!=n(e,t,i)?s:null,pt[s]=r),o;};});var ht=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;function dt(e){return(e.match(P)||[]).join(" ");}function gt(e){return e.getAttribute&&e.getAttribute("class")||"";}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[];}w.fn.extend({prop:function prop(e,t){return F(this,w.prop,e,t,1<arguments.length);},removeProp:function removeProp(e){return this.each(function(){delete this[w.propFix[e]||e];});}}),w.extend({prop:function prop(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&w.isXMLDoc(e)||(t=w.propFix[t]||t,o=w.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t];},propHooks:{tabIndex:{get:function get(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),f.optSelected||(w.propHooks.selected={get:function get(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null;},set:function set(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this;}),w.fn.extend({addClass:function addClass(e){var t,n,i,o,r,s,a,l=0;if(d(e))return this.each(function(t){w(this).addClass(e.call(this,t,gt(this)));});if((t=mt(e)).length)for(;n=this[l++];)if(o=gt(n),i=1===n.nodeType&&" "+dt(o)+" "){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=dt(i))&&n.setAttribute("class",a);}return this;},removeClass:function removeClass(e){var t,n,i,o,r,s,a,l=0;if(d(e))return this.each(function(t){w(this).removeClass(e.call(this,t,gt(this)));});if(!arguments.length)return this.attr("class","");if((t=mt(e)).length)for(;n=this[l++];)if(o=gt(n),i=1===n.nodeType&&" "+dt(o)+" "){for(s=0;r=t[s++];)for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");o!==(a=dt(i))&&n.setAttribute("class",a);}return this;},toggleClass:function toggleClass(e,t){var n=_typeof(e),i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):d(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,gt(this),t),t);}):this.each(function(){var t,o,r,s;if(i)for(o=0,r=w(this),s=mt(e);t=s[o++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||((t=gt(this))&&K.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":K.get(this,"__className__")||""));});},hasClass:function hasClass(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+dt(gt(n))+" ").indexOf(t))return!0;return!1;}});var yt=/\r/g;w.fn.extend({val:function val(e){var t,n,i,o=this[0];return arguments.length?(i=d(e),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?e.call(this,n,w(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=w.map(o,function(e){return null==e?"":e+"";})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o));})):o?(t=w.valHooks[o.type]||w.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(yt,""):null==n?"":n:void 0;}}),w.extend({valHooks:{option:{get:function get(e){var t=w.find.attr(e,"value");return null!=t?t:dt(w.text(e));}},select:{get:function get(e){var t,n,i,o=e.options,r=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?r+1:o.length;for(i=r<0?l:s?r:0;i<l;i++)if(((n=o[i]).selected||i===r)&&!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){if(t=w(n).val(),s)return t;a.push(t);}return a;},set:function set(e,t){for(var n,i,o=e.options,r=w.makeArray(t),s=o.length;s--;)((i=o[s]).selected=-1<w.inArray(w.valHooks.option.get(i),r))&&(n=!0);return n||(e.selectedIndex=-1),r;}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function set(e,t){if(Array.isArray(t))return e.checked=-1<w.inArray(w(e).val(),t);}},f.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value;});}),f.focusin="onfocusin"in e;var vt=/^(?:focusinfocus|focusoutblur)$/,bt=function bt(e){e.stopPropagation();};w.extend(w.event,{trigger:function trigger(t,n,i,o){var r,s,a,l,c,p,h,f,y=[i||m],v=u.call(t,"type")?t.type:t,b=u.call(t,"namespace")?t.namespace.split("."):[];if(s=f=a=i=i||m,3!==i.nodeType&&8!==i.nodeType&&!vt.test(v+w.event.triggered)&&(-1<v.indexOf(".")&&(v=(b=v.split(".")).shift(),b.sort()),c=v.indexOf(":")<0&&"on"+v,(t=t[w.expando]?t:new w.Event(v,"object"==_typeof(t)&&t)).isTrigger=o?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),h=w.event.special[v]||{},o||!h.trigger||!1!==h.trigger.apply(i,n))){if(!o&&!h.noBubble&&!g(i)){for(l=h.delegateType||v,vt.test(l+v)||(s=s.parentNode);s;s=s.parentNode)y.push(s),a=s;a===(i.ownerDocument||m)&&y.push(a.defaultView||a.parentWindow||e);}for(r=0;(s=y[r++])&&!t.isPropagationStopped();)f=s,t.type=1<r?l:h.bindType||v,(p=(K.get(s,"events")||Object.create(null))[t.type]&&K.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&V(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=v,o||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(y.pop(),n)||!V(i)||c&&d(i[v])&&!g(i)&&((a=i[c])&&(i[c]=null),w.event.triggered=v,t.isPropagationStopped()&&f.addEventListener(v,bt),i[v](),t.isPropagationStopped()&&f.removeEventListener(v,bt),w.event.triggered=void 0,a&&(i[c]=a)),t.result;}},simulate:function simulate(e,t,n){var i=w.extend(new w.Event(),n,{type:e,isSimulated:!0});w.event.trigger(i,null,t);}}),w.fn.extend({trigger:function trigger(e,t){return this.each(function(){w.event.trigger(e,t,this);});},triggerHandler:function triggerHandler(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0);}}),f.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function n(e){w.event.simulate(t,e.target,w.event.fix(e));};w.event.special[t]={setup:function setup(){var i=this.ownerDocument||this.document||this,o=K.access(i,t);o||i.addEventListener(e,n,!0),K.access(i,t,(o||0)+1);},teardown:function teardown(){var i=this.ownerDocument||this.document||this,o=K.access(i,t)-1;o?K.access(i,t,o):(i.removeEventListener(e,n,!0),K.remove(i,t));}};});var xt=e.location,wt={guid:Date.now()},_t=/\?/;w.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;try{n=new e.DOMParser().parseFromString(t,"text/xml");}catch(t){}return i=n&&n.getElementsByTagName("parsererror")[0],n&&!i||w.error("Invalid XML: "+(i?w.map(i.childNodes,function(e){return e.textContent;}).join("\n"):t)),n;};var kt=/\[\]$/,Et=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function Ct(e,t,n,i){var o;if(Array.isArray(t))w.each(t,function(t,o){n||kt.test(e)?i(e,o):Ct(e+"["+("object"==_typeof(o)&&null!=o?t:"")+"]",o,n,i);});else if(n||"object"!==b(t))i(e,t);else for(o in t)Ct(e+"["+o+"]",t[o],n,i);}w.param=function(e,t){var n,i=[],o=function o(e,t){var n=d(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){o(this.name,this.value);});else for(n in e)Ct(n,e[n],t,o);return i.join("&");},w.fn.extend({serialize:function serialize(){return w.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this;}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&St.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!he.test(e));}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")};}):{name:t.name,value:n.replace(Et,"\r\n")};}).get();}});var At=/%20/g,Ot=/#.*$/,Lt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,jt=/^(?:GET|HEAD)$/,Nt=/^\/\//,Dt={},Pt={},It="*/".concat("*"),Ht=m.createElement("a");function Rt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(P)||[];if(d(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n);};}function qt(e,t,n,i){var o={},r=e===Pt;function s(a){var l;return o[a]=!0,w.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||r||o[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1);}),l;}return s(t.dataTypes[0])||!o["*"]&&s("*");}function Wt(e,t){var n,i,o=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&w.extend(!0,e,i),e;}Ht.href=xt.href,w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(e,t){return t?Wt(Wt(e,w.ajaxSettings),t):Wt(w.ajaxSettings,e);},ajaxPrefilter:Rt(Dt),ajaxTransport:Rt(Pt),ajax:function ajax(t,n){"object"==_typeof(t)&&(n=t,t=void 0),n=n||{};var i,o,r,s,a,l,c,u,p,h,f=w.ajaxSetup({},n),d=f.context||f,g=f.context&&(d.nodeType||d.jquery)?w(d):w.event,y=w.Deferred(),v=w.Callbacks("once memory"),b=f.statusCode||{},x={},_={},k="canceled",E={readyState:0,getResponseHeader:function getResponseHeader(e){var t;if(c){if(!s)for(s={};t=Mt.exec(r);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "];}return null==t?null:t.join(", ");},getAllResponseHeaders:function getAllResponseHeaders(){return c?r:null;},setRequestHeader:function setRequestHeader(e,t){return null==c&&(e=_[e.toLowerCase()]=_[e.toLowerCase()]||e,x[e]=t),this;},overrideMimeType:function overrideMimeType(e){return null==c&&(f.mimeType=e),this;},statusCode:function statusCode(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)b[t]=[b[t],e[t]];return this;},abort:function abort(e){var t=e||k;return i&&i.abort(t),T(0,t),this;}};if(y.promise(E),f.url=((t||f.url||xt.href)+"").replace(Nt,xt.protocol+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(P)||[""],null==f.crossDomain){l=m.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Ht.protocol+"//"+Ht.host!=l.protocol+"//"+l.host;}catch(t){f.crossDomain=!0;}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=w.param(f.data,f.traditional)),qt(Dt,f,n,E),c)return E;for(p in(u=w.event&&f.global)&&0==w.active++&&w.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!jt.test(f.type),o=f.url.replace(Ot,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(At,"+")):(h=f.url.slice(o.length),f.data&&(f.processData||"string"==typeof f.data)&&(o+=(_t.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(o=o.replace(Lt,"$1"),h=(_t.test(o)?"&":"?")+"_="+wt.guid++ +h),f.url=o+h),f.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+It+"; q=0.01":""):f.accepts["*"]),f.headers)E.setRequestHeader(p,f.headers[p]);if(f.beforeSend&&(!1===f.beforeSend.call(d,E,f)||c))return E.abort();if(k="abort",v.add(f.complete),E.done(f.success),E.fail(f.error),i=qt(Pt,f,n,E)){if(E.readyState=1,u&&g.trigger("ajaxSend",[E,f]),c)return E;f.async&&0<f.timeout&&(a=e.setTimeout(function(){E.abort("timeout");},f.timeout));try{c=!1,i.send(x,T);}catch(t){if(c)throw t;T(-1,t);}}else T(-1,"No Transport");function T(t,n,s,l){var p,h,m,x,_,k=n;c||(c=!0,a&&e.clearTimeout(a),i=void 0,r=l||"",E.readyState=0<t?4:0,p=200<=t&&t<300||304===t,s&&(x=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break;}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break;}s||(s=o);}r=r||s;}if(r)return r!==l[0]&&l.unshift(r),n[r];}(f,E,s)),!p&&-1<w.inArray("script",f.dataTypes)&&w.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),x=function(e,t,n,i){var o,r,s,a,l,c={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=u.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],u.unshift(a[1]));break;}if(!0!==s)if(s&&e["throws"])t=s(t);else try{t=s(t);}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r};}}return{state:"success",data:t};}(f,x,E,p),p?(f.ifModified&&((_=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=_),(_=E.getResponseHeader("etag"))&&(w.etag[o]=_)),204===t||"HEAD"===f.type?k="nocontent":304===t?k="notmodified":(k=x.state,h=x.data,p=!(m=x.error))):(m=k,!t&&k||(k="error",t<0&&(t=0))),E.status=t,E.statusText=(n||k)+"",p?y.resolveWith(d,[h,k,E]):y.rejectWith(d,[E,k,m]),E.statusCode(b),b=void 0,u&&g.trigger(p?"ajaxSuccess":"ajaxError",[E,f,p?h:m]),v.fireWith(d,[E,k]),u&&(g.trigger("ajaxComplete",[E,f]),--w.active||w.event.trigger("ajaxStop")));}return E;},getJSON:function getJSON(e,t,n){return w.get(e,t,n,"json");},getScript:function getScript(e,t){return w.get(e,void 0,t,"script");}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,i,o){return d(n)&&(o=o||i,i=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:o,data:n,success:i},w.isPlainObject(e)&&e));};}),w.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"");}),w._evalUrl=function(e,t,n){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function textScript(){}},dataFilter:function dataFilter(e){w.globalEval(e,t,n);}});},w.fn.extend({wrapAll:function wrapAll(e){var t;return this[0]&&(d(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e;}).append(this)),this;},wrapInner:function wrapInner(e){return d(e)?this.each(function(t){w(this).wrapInner(e.call(this,t));}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e);});},wrap:function wrap(e){var t=d(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e);});},unwrap:function unwrap(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes);}),this;}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e);},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest();}catch(e){}};var zt={0:200,1223:204},Ft=w.ajaxSettings.xhr();f.cors=!!Ft&&"withCredentials"in Ft,f.ajax=Ft=!!Ft,w.ajaxTransport(function(t){var _n,i;if(f.cors||Ft&&!t.crossDomain)return{send:function send(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)a.setRequestHeader(s,o[s]);_n=function n(e){return function(){_n&&(_n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(zt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()));};},a.onload=_n(),i=a.onerror=a.ontimeout=_n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){_n&&i();});},_n=_n("abort");try{a.send(t.hasContent&&t.data||null);}catch(o){if(_n)throw o;}},abort:function abort(){_n&&_n();}};}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(e){return w.globalEval(e),e;}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),w.ajaxTransport("script",function(e){var t,_n2;if(e.crossDomain||e.scriptAttrs)return{send:function send(i,o){t=w("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",_n2=function n(e){t.remove(),_n2=null,e&&o("error"===e.type?404:200,e.type);}),m.head.appendChild(t[0]);},abort:function abort(){_n2&&_n2();}};});var Bt,Ut=[],Xt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var e=Ut.pop()||w.expando+"_"+wt.guid++;return this[e]=!0,e;}}),w.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=!1!==t.jsonp&&(Xt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Xt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=d(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Xt,"$1"+o):!1!==t.jsonp&&(t.url+=(_t.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||w.error(o+" was not called"),s[0];},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments;},i.always(function(){void 0===r?w(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Ut.push(o)),s&&d(r)&&r(s[0]),s=r=void 0;}),"script";}),f.createHTMLDocument=((Bt=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Bt.childNodes.length),w.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(f.createHTMLDocument?((i=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(i)):t=m),r=!n&&[],(o=A.exec(e))?[t.createElement(o[1])]:(o=be([e],t,r),r&&r.length&&w(r).remove(),w.merge([],o.childNodes)));var i,o,r;},w.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=dt(e.slice(a)),e=e.slice(0,a)),d(t)?(n=t,t=void 0):t&&"object"==_typeof(t)&&(o="POST"),0<s.length&&w.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?w("<div>").append(w.parseHTML(e)).find(i):e);}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e]);});}),this;},w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem;}).length;},w.offset={setOffset:function setOffset(e,t,n){var i,o,r,s,a,l,c=w.css(e,"position"),u=w(e),p={};"static"===c&&(e.style.position="relative"),a=u.offset(),r=w.css(e,"top"),l=w.css(e,"left"),("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto")?(s=(i=u.position()).top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),d(t)&&(t=t.call(e,n,w.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):u.css(p);}},w.fn.extend({offset:function offset(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t);});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0;},position:function position(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===w.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),o.left+=w.css(e,"borderLeftWidth",!0));}return{top:t.top-o.top-w.css(i,"marginTop",!0),left:t.left-o.left-w.css(i,"marginLeft",!0)};}},offsetParent:function offsetParent(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===w.css(e,"position");)e=e.offsetParent;return e||ie;});}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(i){return F(this,function(e,i,o){var r;if(g(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===o)return r?r[t]:e[i];r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o;},e,i,arguments.length);};}),w.each(["top","left"],function(e,t){w.cssHooks[t]=We(f.pixelPosition,function(e,n){if(n)return n=qe(e,t),Pe.test(n)?w(e).position()[t]+"px":n;});}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){w.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return F(this,function(t,n,o){var r;return g(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?w.css(t,n,a):w.style(t,n,o,a);},t,s?o:void 0,s);};});}),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e);};}),w.fn.extend({bind:function bind(e,t,n){return this.on(e,null,t,n);},unbind:function unbind(e,t){return this.off(e,null,t);},delegate:function delegate(e,t,n,i){return this.on(t,e,n,i);},undelegate:function undelegate(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);},hover:function hover(e,t){return this.mouseenter(e).mouseleave(t||e);}}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t);};});var Yt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),d(e))return i=o.call(arguments,2),(r=function r(){return e.apply(t||this,i.concat(o.call(arguments)));}).guid=e.guid=e.guid||w.guid++,r;},w.holdReady=function(e){e?w.readyWait++:w.ready(!0);},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=C,w.isFunction=d,w.isWindow=g,w.camelCase=Y,w.type=b,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e));},w.trim=function(e){return null==e?"":(e+"").replace(Yt,"");}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function(){return w;}).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports));var Vt=e.jQuery,$t=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=$t),t&&e.jQuery===w&&(e.jQuery=Vt),w;},void 0===t&&(e.jQuery=e.$=w),w;}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?t(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top};}function n(e){return null==e?window:"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e;}function i(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset};}function o(e){return e instanceof n(e).Element||e instanceof Element;}function r(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement;}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof n(e).ShadowRoot||e instanceof ShadowRoot);}function a(e){return e?(e.nodeName||"").toLowerCase():null;}function l(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement;}function c(e){return t(l(e)).left+i(e).scrollLeft;}function u(e){return n(e).getComputedStyle(e);}function p(e){return e=u(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX);}function h(e,o,s){void 0===s&&(s=!1);var u=l(o);e=t(e);var h=r(o),f={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(h||!h&&!s)&&(("body"!==a(o)||p(u))&&(f=o!==n(o)&&r(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:i(o)),r(o)?((d=t(o)).x+=o.clientLeft,d.y+=o.clientTop):u&&(d.x=c(u))),{x:e.left+f.scrollLeft-d.x,y:e.top+f.scrollTop-d.y,width:e.width,height:e.height};}function f(e){var n=t(e),i=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(n.width-i)&&(i=n.width),1>=Math.abs(n.height-o)&&(o=n.height),{x:e.offsetLeft,y:e.offsetTop,width:i,height:o};}function d(e){return"html"===a(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||l(e);}function g(e){return 0<=["html","body","#document"].indexOf(a(e))?e.ownerDocument.body:r(e)&&p(e)?e:g(d(e));}function m(e,t){var i;void 0===t&&(t=[]);var o=g(e);return e=o===(null==(i=e.ownerDocument)?void 0:i.body),i=n(o),o=e?[i].concat(i.visualViewport||[],p(o)?o:[]):o,t=t.concat(o),e?t:t.concat(m(d(o)));}function y(e){return r(e)&&"fixed"!==u(e).position?e.offsetParent:null;}function v(e){for(var t=n(e),i=y(e);i&&0<=["table","td","th"].indexOf(a(i))&&"static"===u(i).position;)i=y(i);if(i&&("html"===a(i)||"body"===a(i)&&"static"===u(i).position))return t;if(!i)e:{if(i=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),-1===navigator.userAgent.indexOf("Trident")||!r(e)||"fixed"!==u(e).position)for(e=d(e);r(e)&&0>["html","body"].indexOf(a(e));){var o=u(e);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||i&&"filter"===o.willChange||i&&o.filter&&"none"!==o.filter){i=e;break e;}e=e.parentNode;}i=null;}return i||t;}function b(e){function t(e){i.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){i.has(e)||(e=n.get(e))&&t(e);}),o.push(e);}var n=new Map(),i=new Set(),o=[];return e.forEach(function(e){n.set(e.name,e);}),e.forEach(function(e){i.has(e.name)||t(e);}),o;}function x(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e());});})),t;};}function w(e){return e.split("-")[0];}function _(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n))do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host;}while(t);return!1;}function k(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height});}function E(e,o){if("viewport"===o){o=n(e);var s=l(e);o=o.visualViewport;var a=s.clientWidth;s=s.clientHeight;var p=0,h=0;o&&(a=o.width,s=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(p=o.offsetLeft,h=o.offsetTop)),e=k(e={width:a,height:s,x:p+c(e),y:h});}else r(o)?((e=t(o)).top+=o.clientTop,e.left+=o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top):(h=l(e),e=l(h),a=i(h),o=null==(s=h.ownerDocument)?void 0:s.body,s=F(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=F(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),h=-a.scrollLeft+c(h),a=-a.scrollTop,"rtl"===u(o||e).direction&&(h+=F(e.clientWidth,o?o.clientWidth:0)-s),e=k({width:s,height:p,x:h,y:a}));return e;}function T(e,t,n){return t="clippingParents"===t?function(e){var t=m(d(e)),n=0<=["absolute","fixed"].indexOf(u(e).position)&&r(e)?v(e):e;return o(n)?t.filter(function(e){return o(e)&&_(e,n)&&"body"!==a(e);}):[];}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce(function(t,n){return n=E(e,n),t.top=F(n.top,t.top),t.right=B(n.right,t.right),t.bottom=B(n.bottom,t.bottom),t.left=F(n.left,t.left),t;},E(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n;}function S(e){return 0<=["top","bottom"].indexOf(e)?"x":"y";}function C(e){var t=e.reference,n=e.element,i=(e=e.placement)?w(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,r=t.y+t.height/2-n.height/2;switch(i){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:r};break;case"left":o={x:t.x-n.width,y:r};break;default:o={x:t.x,y:t.y};}if(null!=(i=i?S(i):null))switch(r="y"===i?"height":"width",e){case"start":o[i]-=t[r]/2-n[r]/2;break;case"end":o[i]+=t[r]/2-n[r]/2;}return o;}function A(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e);}function O(e,t){return t.reduce(function(t,n){return t[n]=e,t;},{});}function L(e,n){void 0===n&&(n={});var i=n;n=void 0===(n=i.placement)?e.placement:n;var r=i.boundary,s=void 0===r?"clippingParents":r,a=void 0===(r=i.rootBoundary)?"viewport":r;r=void 0===(r=i.elementContext)?"popper":r;var c=i.altBoundary,u=void 0!==c&&c;i=A("number"!=typeof(i=void 0===(i=i.padding)?0:i)?i:O(i,R));var p=e.elements.reference;c=e.rects.popper,s=T(o(u=e.elements[u?"popper"===r?"reference":"popper":r])?u:u.contextElement||l(e.elements.popper),s,a),u=C({reference:a=t(p),element:c,strategy:"absolute",placement:n}),c=k(Object.assign({},c,u)),a="popper"===r?c:a;var h={top:s.top-a.top+i.top,bottom:a.bottom-s.bottom+i.bottom,left:s.left-a.left+i.left,right:a.right-s.right+i.right};if(e=e.modifiersData.offset,"popper"===r&&e){var f=e[n];Object.keys(h).forEach(function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";h[e]+=f[n]*t;});}return h;}function M(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect);});}function j(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,i=void 0===(e=e.defaultOptions)?X:e;return function(e,t,r){function s(){l.forEach(function(e){return e();}),l=[];}void 0===r&&(r=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function setOptions(r){return s(),a.options=Object.assign({},i,a.options,r),a.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)},r=function(e){var t=b(e);return z.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n;}));},[]);}(function(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e;},{});return Object.keys(t).map(function(e){return t[e];});}([].concat(n,a.options.modifiers))),a.orderedModifiers=r.filter(function(e){return e.enabled;}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:a,name:t,instance:u,options:n}),l.push(t||function(){}));}),u.update();},forceUpdate:function forceUpdate(){if(!c){var e=a.elements,t=e.reference;if(M(t,e=e.popper))for(a.rects={reference:h(t,v(e),"fixed"===a.options.strategy),popper:f(e)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data);}),t=0;t<a.orderedModifiers.length;t++)if(!0===a.reset)a.reset=!1,t=-1;else{var n=a.orderedModifiers[t];e=n.fn;var i=n.options;i=void 0===i?{}:i,n=n.name,"function"==typeof e&&(a=e({state:a,options:i,name:n,instance:u})||a);}}},update:x(function(){return new Promise(function(e){u.forceUpdate(),e(a);});}),destroy:function destroy(){s(),c=!0;}};return M(e,t)?(u.setOptions(r).then(function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e);}),u):u;};}function N(e){var t,i=e.popper,o=e.popperRect,r=e.placement,s=e.offsets,a=e.position,c=e.gpuAcceleration,p=e.adaptive;if(!0===(e=e.roundOffsets)){e=s.y;var h=window.devicePixelRatio||1;e={x:U(U(s.x*h)/h)||0,y:U(U(e*h)/h)||0};}else e="function"==typeof e?e(s):s;e=void 0===(e=(h=e).x)?0:e,h=void 0===(h=h.y)?0:h;var f=s.hasOwnProperty("x");s=s.hasOwnProperty("y");var d,g="left",m="top",y=window;if(p){var b=v(i),x="clientHeight",w="clientWidth";b===n(i)&&"static"!==u(b=l(i)).position&&(x="scrollHeight",w="scrollWidth"),"top"===r&&(m="bottom",h-=b[x]-o.height,h*=c?1:-1),"left"===r&&(g="right",e-=b[w]-o.width,e*=c?1:-1);}return i=Object.assign({position:a},p&&K),c?Object.assign({},i,((d={})[m]=s?"0":"",d[g]=f?"0":"",d.transform=2>(y.devicePixelRatio||1)?"translate("+e+"px, "+h+"px)":"translate3d("+e+"px, "+h+"px, 0)",d)):Object.assign({},i,((t={})[m]=s?h+"px":"",t[g]=f?e+"px":"",t.transform="",t));}function D(e){return e.replace(/left|right|bottom|top/g,function(e){return Z[e];});}function P(e){return e.replace(/start|end/g,function(e){return ee[e];});}function I(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x};}function H(e){return["top","right","bottom","left"].some(function(t){return 0<=e[t];});}var R=["top","bottom","right","left"],q=R.reduce(function(e,t){return e.concat([t+"-start",t+"-end"]);},[]),W=[].concat(R,["auto"]).reduce(function(e,t){return e.concat([t,t+"-start",t+"-end"]);},[]),z="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),F=Math.max,B=Math.min,U=Math.round,X={placement:"bottom",modifiers:[],strategy:"absolute"},Y={passive:!0},V={name:"eventListeners",enabled:!0,phase:"write",fn:function fn(){},effect:function effect(e){var t=e.state,i=e.instance,o=(e=e.options).scroll,r=void 0===o||o,s=void 0===(e=e.resize)||e,a=n(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&l.forEach(function(e){e.addEventListener("scroll",i.update,Y);}),s&&a.addEventListener("resize",i.update,Y),function(){r&&l.forEach(function(e){e.removeEventListener("scroll",i.update,Y);}),s&&a.removeEventListener("resize",i.update,Y);};},data:{}},$={name:"popperOffsets",enabled:!0,phase:"read",fn:function fn(e){var t=e.state;t.modifiersData[e.name]=C({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});},data:{}},K={top:"auto",right:"auto",bottom:"auto",left:"auto"},Q={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function fn(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e;var i=n.adaptive;i=void 0===i||i,n=void 0===(n=n.roundOffsets)||n,e={placement:w(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,N(Object.assign({},e,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,N(Object.assign({},e,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement});},data:{}},G={name:"applyStyles",enabled:!0,phase:"write",fn:function fn(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];r(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(i).forEach(function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t);}));});},effect:function effect(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e;},{}),r(i)&&a(i)&&(Object.assign(i.style,e),Object.keys(o).forEach(function(e){i.removeAttribute(e);}));});};},requires:["computeStyles"]},J={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function fn(e){var t=e.state,n=e.name,i=void 0===(e=e.options.offset)?[0,0]:e,o=(e=W.reduce(function(e,n){var o=t.rects,r=w(n),s=0<=["left","top"].indexOf(r)?-1:1,a="function"==typeof i?i(Object.assign({},o,{placement:n})):i;return o=(o=a[0])||0,a=((a=a[1])||0)*s,r=0<=["left","right"].indexOf(r)?{x:a,y:o}:{x:o,y:a},e[n]=r,e;},{}))[t.placement],r=o.x;o=o.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=r,t.modifiersData.popperOffsets.y+=o),t.modifiersData[n]=e;}},Z={left:"right",right:"left",bottom:"top",top:"bottom"},ee={start:"end",end:"start"},te={name:"flip",enabled:!0,phase:"main",fn:function fn(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var i=n.mainAxis;i=void 0===i||i;var o=n.altAxis;o=void 0===o||o;var r=n.fallbackPlacements,s=n.padding,a=n.boundary,l=n.rootBoundary,c=n.altBoundary,u=n.flipVariations,p=void 0===u||u,h=n.allowedAutoPlacements;u=w(n=t.options.placement),r=r||(u!==n&&p?function(e){if("auto"===w(e))return[];var t=D(e);return[P(e),t,P(t)];}(n):[D(n)]);var f=[n].concat(r).reduce(function(e,n){return e.concat("auto"===w(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,i=t.rootBoundary,o=t.padding,r=t.flipVariations,s=t.allowedAutoPlacements,a=void 0===s?W:s,l=t.placement.split("-")[1];0===(r=(t=l?r?q:q.filter(function(e){return e.split("-")[1]===l;}):R).filter(function(e){return 0<=a.indexOf(e);})).length&&(r=t);var c=r.reduce(function(t,r){return t[r]=L(e,{placement:r,boundary:n,rootBoundary:i,padding:o})[w(r)],t;},{});return Object.keys(c).sort(function(e,t){return c[e]-c[t];});}(t,{placement:n,boundary:a,rootBoundary:l,padding:s,flipVariations:p,allowedAutoPlacements:h}):n);},[]);n=t.rects.reference,r=t.rects.popper;var d=new Map();u=!0;for(var g=f[0],m=0;m<f.length;m++){var y=f[m],v=w(y),b="start"===y.split("-")[1],x=0<=["top","bottom"].indexOf(v),_=x?"width":"height",k=L(t,{placement:y,boundary:a,rootBoundary:l,altBoundary:c,padding:s});if(b=x?b?"right":"left":b?"bottom":"top",n[_]>r[_]&&(b=D(b)),_=D(b),x=[],i&&x.push(0>=k[v]),o&&x.push(0>=k[b],0>=k[_]),x.every(function(e){return e;})){g=y,u=!1;break;}d.set(y,x);}if(u)for(i=function i(e){var t=f.find(function(t){if(t=d.get(t))return t.slice(0,e).every(function(e){return e;});});if(t)return g=t,"break";},o=p?3:1;0<o&&"break"!==i(o);o--);t.placement!==g&&(t.modifiersData[e]._skip=!0,t.placement=g,t.reset=!0);}},requiresIfExists:["offset"],data:{_skip:!1}},ne={name:"preventOverflow",enabled:!0,phase:"main",fn:function fn(e){var t=e.state,n=e.options;e=e.name;var i=n.mainAxis,o=void 0===i||i,r=void 0!==(i=n.altAxis)&&i;i=void 0===(i=n.tether)||i;var s=n.tetherOffset,a=void 0===s?0:s,l=L(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary});n=w(t.placement);var c=t.placement.split("-")[1],u=!c,p=S(n);n="x"===p?"y":"x",s=t.modifiersData.popperOffsets;var h=t.rects.reference,d=t.rects.popper,g="function"==typeof a?a(Object.assign({},t.rects,{placement:t.placement})):a;if(a={x:0,y:0},s){if(o||r){var m="y"===p?"top":"left",y="y"===p?"bottom":"right",b="y"===p?"height":"width",x=s[p],_=s[p]+l[m],k=s[p]-l[y],E=i?-d[b]/2:0,T="start"===c?h[b]:d[b];c="start"===c?-d[b]:-h[b],d=t.elements.arrow,d=i&&d?f(d):{width:0,height:0};var C=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};m=C[m],y=C[y],d=F(0,B(h[b],d[b])),T=u?h[b]/2-E-d-m-g:T-d-m-g,h=u?-h[b]/2+E+d+y+g:c+d+y+g,u=t.elements.arrow&&v(t.elements.arrow),g=t.modifiersData.offset?t.modifiersData.offset[t.placement][p]:0,u=s[p]+T-g-(u?"y"===p?u.clientTop||0:u.clientLeft||0:0),h=s[p]+h-g,o&&(o=i?B(_,u):_,k=i?F(k,h):k,o=F(o,B(x,k)),s[p]=o,a[p]=o-x),r&&(o=(r=s[n])+l["x"===p?"top":"left"],l=r-l["x"===p?"bottom":"right"],o=i?B(o,u):o,i=i?F(l,h):l,i=F(o,B(r,i)),s[n]=i,a[n]=i-r);}t.modifiersData[e]=a;}},requiresIfExists:["offset"]},ie={name:"arrow",enabled:!0,phase:"main",fn:function fn(e){var t,n=e.state,i=e.name,o=e.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=w(n.placement);if(e=S(a),a=0<=["left","right"].indexOf(a)?"height":"width",r&&s){o=A("number"!=typeof(o="function"==typeof(o=o.padding)?o(Object.assign({},n.rects,{placement:n.placement})):o)?o:O(o,R));var l=f(r),c="y"===e?"top":"left",u="y"===e?"bottom":"right",p=n.rects.reference[a]+n.rects.reference[e]-s[e]-n.rects.popper[a];s=s[e]-n.rects.reference[e],s=(r=(r=v(r))?"y"===e?r.clientHeight||0:r.clientWidth||0:0)/2-l[a]/2+(p/2-s/2),a=F(o[c],B(s,r-l[a]-o[u])),n.modifiersData[i]=((t={})[e]=a,t.centerOffset=a-s,t);}},effect:function effect(e){var t=e.state;if(null!=(e=void 0===(e=e.options.element)?"[data-popper-arrow]":e)){if("string"==typeof e&&!(e=t.elements.popper.querySelector(e)))return;_(t.elements.popper,e)&&(t.elements.arrow=e);}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function fn(e){var t=e.state;e=e.name;var n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,r=L(t,{elementContext:"reference"}),s=L(t,{altBoundary:!0});n=I(r,n),i=I(s,i,o),o=H(n),s=H(i),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:i,isReferenceHidden:o,hasPopperEscaped:s},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":s});}},re=j({defaultModifiers:[V,$,Q,G]}),se=[V,$,Q,G,J,te,ne,ie,oe],ae=j({defaultModifiers:se});e.applyStyles=G,e.arrow=ie,e.computeStyles=Q,e.createPopper=ae,e.createPopperLite=re,e.defaultModifiers=se,e.detectOverflow=L,e.eventListeners=V,e.flip=te,e.hide=oe,e.offset=J,e.popperGenerator=j,e.popperOffsets=$,e.preventOverflow=ne,Object.defineProperty(e,"__esModule",{value:!0});}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";var e=function e(_e2){var t=_e2.getAttribute("data-bs-target");if(!t||"#"===t){var _n3=_e2.getAttribute("href");if(!_n3||!_n3.includes("#")&&!_n3.startsWith("."))return null;_n3.includes("#")&&!_n3.startsWith("#")&&(_n3="#"+_n3.split("#")[1]),t=_n3&&"#"!==_n3?_n3.trim():null;}return t;},t=function t(_t3){var n=e(_t3);return n&&document.querySelector(n)?n:null;},n=function n(t){var n=e(t);return n?document.querySelector(n):null;},i=function i(e){e.dispatchEvent(new Event("transitionend"));},o=function o(e){return!(!e||"object"!=_typeof(e))&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType);},r=function r(e){return o(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null;},s=function s(e,t,n){Object.keys(n).forEach(function(i){var r=n[i],s=t[i],a=s&&o(s)?"element":null==(l=s)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(r).test(a))throw new TypeError("".concat(e.toUpperCase(),": Option \"").concat(i,"\" provided type \"").concat(a,"\" but expected type \"").concat(r,"\"."));});},a=function a(e){return!(!o(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility");},l=function l(e){return!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"));},c=function c(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var _t4=e.getRootNode();return _t4 instanceof ShadowRoot?_t4:null;}return e instanceof ShadowRoot?e:e.parentNode?c(e.parentNode):null;},u=function u(){},p=function p(e){e.offsetHeight;},h=function h(){var _window=window,e=_window.jQuery;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null;},f=[],d=function d(){return"rtl"===document.documentElement.dir;},g=function g(e){var t;t=function t(){var t=h();if(t){var _n4=e.NAME,_i=t.fn[_n4];t.fn[_n4]=e.jQueryInterface,t.fn[_n4].Constructor=e,t.fn[_n4].noConflict=function(){return t.fn[_n4]=_i,e.jQueryInterface;};}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",function(){f.forEach(function(e){return e();});}),f.push(t)):t();},m=function m(e){"function"==typeof e&&e();},y=function y(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;if(!n)return void m(e);var o=function(e){if(!e)return 0;var _window$getComputedSt=window.getComputedStyle(e),t=_window$getComputedSt.transitionDuration,n=_window$getComputedSt.transitionDelay;var i=Number.parseFloat(t),o=Number.parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0;}(t)+5;var r=!1;var s=function s(_ref){var n=_ref.target;n===t&&(r=!0,t.removeEventListener("transitionend",s),m(e));};t.addEventListener("transitionend",s),setTimeout(function(){r||i(t);},o);},v=function v(e,t,n,i){var o=e.indexOf(t);if(-1===o)return e[!n&&i?e.length-1:0];var r=e.length;return o+=n?1:-1,i&&(o=(o+r)%r),e[Math.max(0,Math.min(o,r-1))];},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,w=/::\d+$/,_={};var k=1;var E={mouseenter:"mouseover",mouseleave:"mouseout"},T=/^(mouseenter|mouseleave)/i,S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function C(e,t){return t&&"".concat(t,"::").concat(k++)||e.uidEvent||k++;}function A(e){var t=C(e);return e.uidEvent=t,_[t]=_[t]||{},_[t];}function O(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var i=Object.keys(e);for(var _o=0,_r=i.length;_o<_r;_o++){var _r2=e[i[_o]];if(_r2.originalHandler===t&&_r2.delegationSelector===n)return _r2;}return null;}function L(e,t,n){var i="string"==typeof t,o=i?n:t;var r=N(e);return S.has(r)||(r=e),[i,o,r];}function M(e,t,n,i,o){if("string"!=typeof t||!e)return;if(n||(n=i,i=null),T.test(t)){var _e3=function _e3(e){return function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t);};};i?i=_e3(i):n=_e3(n);}var _L=L(t,n,i),_L2=_slicedToArray(_L,3),r=_L2[0],s=_L2[1],a=_L2[2],l=A(e),c=l[a]||(l[a]={}),u=O(c,s,r?n:null);if(u)return void(u.oneOff=u.oneOff&&o);var p=C(s,t.replace(b,"")),h=r?function(e,t,n){return function i(o){var r=e.querySelectorAll(t);for(var _s=o.target;_s&&_s!==this;_s=_s.parentNode)for(var _a=r.length;_a--;)if(r[_a]===_s)return o.delegateTarget=_s,i.oneOff&&D.off(e,o.type,t,n),n.apply(_s,[o]);return null;};}(e,n,i):function(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&D.off(e,i.type,t),t.apply(e,[i]);};}(e,n);h.delegationSelector=r?n:null,h.originalHandler=s,h.oneOff=o,h.uidEvent=p,c[p]=h,e.addEventListener(a,h,r);}function j(e,t,n,i,o){var r=O(t[n],i,o);r&&(e.removeEventListener(n,r,Boolean(o)),delete t[n][r.uidEvent]);}function N(e){return e=e.replace(x,""),E[e]||e;}var D={on:function on(e,t,n,i){M(e,t,n,i,!1);},one:function one(e,t,n,i){M(e,t,n,i,!0);},off:function off(e,t,n,i){if("string"!=typeof t||!e)return;var _L3=L(t,n,i),_L4=_slicedToArray(_L3,3),o=_L4[0],r=_L4[1],s=_L4[2],a=s!==t,l=A(e),c=t.startsWith(".");if(void 0!==r){if(!l||!l[s])return;return void j(e,l,s,r,o?n:null);}c&&Object.keys(l).forEach(function(n){!function(e,t,n,i){var o=t[n]||{};Object.keys(o).forEach(function(r){if(r.includes(i)){var _i2=o[r];j(e,t,n,_i2.originalHandler,_i2.delegationSelector);}});}(e,l,n,t.slice(1));});var u=l[s]||{};Object.keys(u).forEach(function(n){var i=n.replace(w,"");if(!a||t.includes(i)){var _t5=u[n];j(e,l,s,_t5.originalHandler,_t5.delegationSelector);}});},trigger:function trigger(e,t,n){if("string"!=typeof t||!e)return null;var i=h(),o=N(t),r=t!==o,s=S.has(o);var a,l=!0,c=!0,u=!1,p=null;return r&&i&&(a=i.Event(t,n),i(e).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),s?(p=document.createEvent("HTMLEvents"),p.initEvent(o,l,!0)):p=new CustomEvent(t,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(function(e){Object.defineProperty(p,e,{get:function get(){return n[e];}});}),u&&p.preventDefault(),c&&e.dispatchEvent(p),p.defaultPrevented&&void 0!==a&&a.preventDefault(),p;}},P=new Map();var I={set:function set(e,t,n){P.has(e)||P.set(e,new Map());var i=P.get(e);i.has(t)||0===i.size?i.set(t,n):console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0],"."));},get:function get(e,t){return P.has(e)&&P.get(e).get(t)||null;},remove:function remove(e,t){if(!P.has(e))return;var n=P.get(e);n["delete"](t),0===n.size&&P["delete"](e);}};var H=/*#__PURE__*/function(){function H(e){_classCallCheck(this,H);(e=r(e))&&(this._element=e,I.set(this._element,this.constructor.DATA_KEY,this));}_createClass(H,[{key:"dispose",value:function dispose(){var _this=this;I.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(function(e){_this[e]=null;});}},{key:"_queueCallback",value:function _queueCallback(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;y(e,t,n);}}],[{key:"getInstance",value:function getInstance(e){return I.get(r(e),this.DATA_KEY);}},{key:"getOrCreateInstance",value:function getOrCreateInstance(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.getInstance(e)||new this(e,"object"==_typeof(t)?t:null);}},{key:"VERSION",get:function get(){return"5.1.0";}},{key:"NAME",get:function get(){throw new Error('You have to implement the static method "NAME", for each component!');}},{key:"DATA_KEY",get:function get(){return"bs."+this.NAME;}},{key:"EVENT_KEY",get:function get(){return"."+this.DATA_KEY;}}]);return H;}();var R=function R(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"hide";var i="click.dismiss"+e.EVENT_KEY,o=e.NAME;D.on(document,i,"[data-bs-dismiss=\"".concat(o,"\"]"),function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;var r=n(this)||this.closest("."+o);e.getOrCreateInstance(r)[t]();});};var q=/*#__PURE__*/function(_H){_inherits(q,_H);var _super=_createSuper(q);function q(){_classCallCheck(this,q);return _super.apply(this,arguments);}_createClass(q,[{key:"close",value:function close(){var _this2=this;if(D.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");var e=this._element.classList.contains("fade");this._queueCallback(function(){return _this2._destroyElement();},this._element,e);}},{key:"_destroyElement",value:function _destroyElement(){this._element.remove(),D.trigger(this._element,"closed.bs.alert"),this.dispose();}}],[{key:"NAME",get:function get(){return"alert";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=q.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError("No method named \"".concat(e,"\""));t[e](this);}});}}]);return q;}(H);R(q,"close"),g(q);var W=/*#__PURE__*/function(_H2){_inherits(W,_H2);var _super2=_createSuper(W);function W(){_classCallCheck(this,W);return _super2.apply(this,arguments);}_createClass(W,[{key:"toggle",value:function toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"));}}],[{key:"NAME",get:function get(){return"button";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=W.getOrCreateInstance(this);"toggle"===e&&t[e]();});}}]);return W;}(H);function z(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e);}function F(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase();});}D.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',function(e){e.preventDefault();var t=e.target.closest('[data-bs-toggle="button"]');W.getOrCreateInstance(t).toggle();}),g(W);var B={setDataAttribute:function setDataAttribute(e,t,n){e.setAttribute("data-bs-"+F(t),n);},removeDataAttribute:function removeDataAttribute(e,t){e.removeAttribute("data-bs-"+F(t));},getDataAttributes:function getDataAttributes(e){if(!e)return{};var t={};return Object.keys(e.dataset).filter(function(e){return e.startsWith("bs");}).forEach(function(n){var i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=z(e.dataset[n]);}),t;},getDataAttribute:function getDataAttribute(e,t){return z(e.getAttribute("data-bs-"+F(t)));},offset:function offset(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset};},position:function position(e){return{top:e.offsetTop,left:e.offsetLeft};}},U={find:function find(e){var _ref2;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document.documentElement;return(_ref2=[]).concat.apply(_ref2,_toConsumableArray(Element.prototype.querySelectorAll.call(t,e)));},findOne:function findOne(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document.documentElement;return Element.prototype.querySelector.call(t,e);},children:function children(e,t){var _ref3;return(_ref3=[]).concat.apply(_ref3,_toConsumableArray(e.children)).filter(function(e){return e.matches(t);});},parents:function parents(e,t){var n=[];var i=e.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(t)&&n.push(i),i=i.parentNode;return n;},prev:function prev(e,t){var n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling;}return[];},next:function next(e,t){var n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling;}return[];},focusableChildren:function focusableChildren(e){var t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(function(e){return e+':not([tabindex^="-"])';}).join(", ");return this.find(t,e).filter(function(e){return!l(e)&&a(e);});}},X={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},V="next",$="prev",K="left",Q="right",G={ArrowLeft:Q,ArrowRight:K};var J=/*#__PURE__*/function(_H3){_inherits(J,_H3);var _super3=_createSuper(J);function J(e,t){var _this3;_classCallCheck(this,J);_this3=_super3.call(this,e),_this3._items=null,_this3._interval=null,_this3._activeElement=null,_this3._isPaused=!1,_this3._isSliding=!1,_this3.touchTimeout=null,_this3.touchStartX=0,_this3.touchDeltaX=0,_this3._config=_this3._getConfig(t),_this3._indicatorsElement=U.findOne(".carousel-indicators",_this3._element),_this3._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,_this3._pointerEvent=Boolean(window.PointerEvent),_this3._addEventListeners();return _this3;}_createClass(J,[{key:"next",value:function next(){this._slide(V);}},{key:"nextWhenVisible",value:function nextWhenVisible(){!document.hidden&&a(this._element)&&this.next();}},{key:"prev",value:function prev(){this._slide($);}},{key:"pause",value:function pause(e){e||(this._isPaused=!0),U.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(i(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null;}},{key:"cycle",value:function cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval));}},{key:"to",value:function to(e){var _this4=this;this._activeElement=U.findOne(".active.carousel-item",this._element);var t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void D.one(this._element,"slid.bs.carousel",function(){return _this4.to(e);});if(t===e)return this.pause(),void this.cycle();var n=e>t?V:$;this._slide(n,this._items[e]);}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},X),B.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),s("carousel",e,Y),e;}},{key:"_handleSwipe",value:function _handleSwipe(){var e=Math.abs(this.touchDeltaX);if(e<=40)return;var t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Q:K);}},{key:"_addEventListeners",value:function _addEventListeners(){var _this5=this;this._config.keyboard&&D.on(this._element,"keydown.bs.carousel",function(e){return _this5._keydown(e);}),"hover"===this._config.pause&&(D.on(this._element,"mouseenter.bs.carousel",function(e){return _this5.pause(e);}),D.on(this._element,"mouseleave.bs.carousel",function(e){return _this5.cycle(e);})),this._config.touch&&this._touchSupported&&this._addTouchEventListeners();}},{key:"_addTouchEventListeners",value:function _addTouchEventListeners(){var _this6=this;var e=function e(_e4){!_this6._pointerEvent||"pen"!==_e4.pointerType&&"touch"!==_e4.pointerType?_this6._pointerEvent||(_this6.touchStartX=_e4.touches[0].clientX):_this6.touchStartX=_e4.clientX;},t=function t(e){_this6.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-_this6.touchStartX;},n=function n(e){!_this6._pointerEvent||"pen"!==e.pointerType&&"touch"!==e.pointerType||(_this6.touchDeltaX=e.clientX-_this6.touchStartX),_this6._handleSwipe(),"hover"===_this6._config.pause&&(_this6.pause(),_this6.touchTimeout&&clearTimeout(_this6.touchTimeout),_this6.touchTimeout=setTimeout(function(e){return _this6.cycle(e);},500+_this6._config.interval));};U.find(".carousel-item img",this._element).forEach(function(e){D.on(e,"dragstart.bs.carousel",function(e){return e.preventDefault();});}),this._pointerEvent?(D.on(this._element,"pointerdown.bs.carousel",function(t){return e(t);}),D.on(this._element,"pointerup.bs.carousel",function(e){return n(e);}),this._element.classList.add("pointer-event")):(D.on(this._element,"touchstart.bs.carousel",function(t){return e(t);}),D.on(this._element,"touchmove.bs.carousel",function(e){return t(e);}),D.on(this._element,"touchend.bs.carousel",function(e){return n(e);}));}},{key:"_keydown",value:function _keydown(e){if(/input|textarea/i.test(e.target.tagName))return;var t=G[e.key];t&&(e.preventDefault(),this._slide(t));}},{key:"_getItemIndex",value:function _getItemIndex(e){return this._items=e&&e.parentNode?U.find(".carousel-item",e.parentNode):[],this._items.indexOf(e);}},{key:"_getItemByOrder",value:function _getItemByOrder(e,t){var n=e===V;return v(this._items,t,n,this._config.wrap);}},{key:"_triggerSlideEvent",value:function _triggerSlideEvent(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(U.findOne(".active.carousel-item",this._element));return D.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:i,to:n});}},{key:"_setActiveIndicatorElement",value:function _setActiveIndicatorElement(e){if(this._indicatorsElement){var _t6=U.findOne(".active",this._indicatorsElement);_t6.classList.remove("active"),_t6.removeAttribute("aria-current");var _n5=U.find("[data-bs-target]",this._indicatorsElement);for(var _t7=0;_t7<_n5.length;_t7++)if(Number.parseInt(_n5[_t7].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){_n5[_t7].classList.add("active"),_n5[_t7].setAttribute("aria-current","true");break;}}}},{key:"_updateInterval",value:function _updateInterval(){var e=this._activeElement||U.findOne(".active.carousel-item",this._element);if(!e)return;var t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval;}},{key:"_slide",value:function _slide(e,t){var _this7=this;var n=this._directionToOrder(e),i=U.findOne(".active.carousel-item",this._element),o=this._getItemIndex(i),r=t||this._getItemByOrder(n,i),s=this._getItemIndex(r),a=Boolean(this._interval),l=n===V,c=l?"carousel-item-start":"carousel-item-end",u=l?"carousel-item-next":"carousel-item-prev",h=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,h).defaultPrevented)return;if(!i||!r)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;var f=function f(){D.trigger(_this7._element,"slid.bs.carousel",{relatedTarget:r,direction:h,from:o,to:s});};if(this._element.classList.contains("slide")){r.classList.add(u),p(r),i.classList.add(c),r.classList.add(c);var _e5=function _e5(){r.classList.remove(c,u),r.classList.add("active"),i.classList.remove("active",u,c),_this7._isSliding=!1,setTimeout(f,0);};this._queueCallback(_e5,i,!0);}else i.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,f();a&&this.cycle();}},{key:"_directionToOrder",value:function _directionToOrder(e){return[Q,K].includes(e)?d()?e===K?$:V:e===K?V:$:e;}},{key:"_orderToDirection",value:function _orderToDirection(e){return[V,$].includes(e)?d()?e===$?K:Q:e===$?Q:K:e;}}],[{key:"Default",get:function get(){return X;}},{key:"NAME",get:function get(){return"carousel";}},{key:"carouselInterface",value:function carouselInterface(e,t){var n=J.getOrCreateInstance(e,t);var i=n._config;"object"==_typeof(t)&&(i=_objectSpread(_objectSpread({},i),t));var o="string"==typeof t?t:i.slide;if("number"==typeof t)n.to(t);else if("string"==typeof o){if(void 0===n[o])throw new TypeError("No method named \"".concat(o,"\""));n[o]();}else i.interval&&i.ride&&(n.pause(),n.cycle());}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){J.carouselInterface(this,e);});}},{key:"dataApiClickHandler",value:function dataApiClickHandler(e){var t=n(this);if(!t||!t.classList.contains("carousel"))return;var i=_objectSpread(_objectSpread({},B.getDataAttributes(t)),B.getDataAttributes(this)),o=this.getAttribute("data-bs-slide-to");o&&(i.interval=!1),J.carouselInterface(t,i),o&&J.getInstance(t).to(o),e.preventDefault();}}]);return J;}(H);D.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",J.dataApiClickHandler),D.on(window,"load.bs.carousel.data-api",function(){var e=U.find('[data-bs-ride="carousel"]');for(var _t8=0,_n6=e.length;_t8<_n6;_t8++)J.carouselInterface(e[_t8],J.getInstance(e[_t8]));}),g(J);var Z={toggle:!0,parent:null},ee={toggle:"boolean",parent:"(null|element)"};var te=/*#__PURE__*/function(_H4){_inherits(te,_H4);var _super4=_createSuper(te);function te(e,n){var _this8;_classCallCheck(this,te);_this8=_super4.call(this,e),_this8._isTransitioning=!1,_this8._config=_this8._getConfig(n),_this8._triggerArray=[];var i=U.find('[data-bs-toggle="collapse"]');for(var _e6=0,_n7=i.length;_e6<_n7;_e6++){var _n8=i[_e6],_o2=t(_n8),_r3=U.find(_o2).filter(function(e){return e===_this8._element;});null!==_o2&&_r3.length&&(_this8._selector=_o2,_this8._triggerArray.push(_n8));}_this8._initializeChildren(),_this8._config.parent||_this8._addAriaAndCollapsedClass(_this8._triggerArray,_this8._isShown()),_this8._config.toggle&&_this8.toggle();return _this8;}_createClass(te,[{key:"toggle",value:function toggle(){this._isShown()?this.hide():this.show();}},{key:"show",value:function show(){var _this9=this;if(this._isTransitioning||this._isShown())return;var e,t=[];if(this._config.parent){var _e7=U.find(".collapse .collapse",this._config.parent);t=U.find(".show, .collapsing",this._config.parent).filter(function(t){return!_e7.includes(t);});}var n=U.findOne(this._selector);if(t.length){var _i3=t.find(function(e){return n!==e;});if(e=_i3?te.getInstance(_i3):null,e&&e._isTransitioning)return;}if(D.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t.forEach(function(t){n!==t&&te.getOrCreateInstance(t,{toggle:!1}).hide(),e||I.set(t,"bs.collapse",null);});var i=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;var o="scroll"+(i[0].toUpperCase()+i.slice(1));this._queueCallback(function(){_this9._isTransitioning=!1,_this9._element.classList.remove("collapsing"),_this9._element.classList.add("collapse","show"),_this9._element.style[i]="",D.trigger(_this9._element,"shown.bs.collapse");},this._element,!0),this._element.style[i]=this._element[o]+"px";}},{key:"hide",value:function hide(){var _this10=this;if(this._isTransitioning||!this._isShown())return;if(D.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;var e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",p(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var t=this._triggerArray.length;for(var _e8=0;_e8<t;_e8++){var _t9=this._triggerArray[_e8],_i4=n(_t9);_i4&&!this._isShown(_i4)&&this._addAriaAndCollapsedClass([_t9],!1);}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(function(){_this10._isTransitioning=!1,_this10._element.classList.remove("collapsing"),_this10._element.classList.add("collapse"),D.trigger(_this10._element,"hidden.bs.collapse");},this._element,!0);}},{key:"_isShown",value:function _isShown(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._element;return e.classList.contains("show");}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread(_objectSpread({},Z),B.getDataAttributes(this._element)),e)).toggle=Boolean(e.toggle),e.parent=r(e.parent),s("collapse",e,ee),e;}},{key:"_getDimension",value:function _getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height";}},{key:"_initializeChildren",value:function _initializeChildren(){var _this11=this;if(!this._config.parent)return;var e=U.find(".collapse .collapse",this._config.parent);U.find('[data-bs-toggle="collapse"]',this._config.parent).filter(function(t){return!e.includes(t);}).forEach(function(e){var t=n(e);t&&_this11._addAriaAndCollapsedClass([e],_this11._isShown(t));});}},{key:"_addAriaAndCollapsedClass",value:function _addAriaAndCollapsedClass(e,t){e.length&&e.forEach(function(e){t?e.classList.remove("collapsed"):e.classList.add("collapsed"),e.setAttribute("aria-expanded",t);});}}],[{key:"Default",get:function get(){return Z;}},{key:"NAME",get:function get(){return"collapse";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);var n=te.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError("No method named \"".concat(e,"\""));n[e]();}});}}]);return te;}(H);D.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();var n=t(this);U.find(n).forEach(function(e){te.getOrCreateInstance(e,{toggle:!1}).toggle();});}),g(te);var ne="top",ie="bottom",oe="right",re="left",se=[ne,ie,oe,re],ae=se.reduce(function(e,t){return e.concat([t+"-start",t+"-end"]);},[]),le=[].concat(se,["auto"]).reduce(function(e,t){return e.concat([t,t+"-start",t+"-end"]);},[]),ce=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ue(e){return e?(e.nodeName||"").toLowerCase():null;}function pe(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window;}return e;}function he(e){return e instanceof pe(e).Element||e instanceof Element;}function fe(e){return e instanceof pe(e).HTMLElement||e instanceof HTMLElement;}function de(e){return"undefined"!=typeof ShadowRoot&&(e instanceof pe(e).ShadowRoot||e instanceof ShadowRoot);}var ge={name:"applyStyles",enabled:!0,phase:"write",fn:function fn(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];fe(o)&&ue(o)&&(Object.assign(o.style,n),Object.keys(i).forEach(function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t);}));});},effect:function effect(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e;},{});fe(i)&&ue(i)&&(Object.assign(i.style,r),Object.keys(o).forEach(function(e){i.removeAttribute(e);}));});};},requires:["computeStyles"]};function me(e){return e.split("-")[0];}var ye=Math.round;function ve(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,o=1;return fe(e)&&t&&(i=n.width/e.offsetWidth||1,o=n.height/e.offsetHeight||1),{width:ye(n.width/i),height:ye(n.height/o),top:ye(n.top/o),right:ye(n.right/i),bottom:ye(n.bottom/o),left:ye(n.left/i),x:ye(n.left/i),y:ye(n.top/o)};}function be(e){var t=ve(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i};}function xe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&de(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host;}while(i);}return!1;}function we(e){return pe(e).getComputedStyle(e);}function _e(e){return["table","td","th"].indexOf(ue(e))>=0;}function ke(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement;}function Ee(e){return"html"===ue(e)?e:e.assignedSlot||e.parentNode||(de(e)?e.host:null)||ke(e);}function Te(e){return fe(e)&&"fixed"!==we(e).position?e.offsetParent:null;}function Se(e){for(var t=pe(e),n=Te(e);n&&_e(n)&&"static"===we(n).position;)n=Te(n);return n&&("html"===ue(n)||"body"===ue(n)&&"static"===we(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&fe(e)&&"fixed"===we(e).position)return null;for(var n=Ee(e);fe(n)&&["html","body"].indexOf(ue(n))<0;){var i=we(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode;}return null;}(e)||t;}function Ce(e){return["top","bottom"].indexOf(e)>=0?"x":"y";}var Ae=Math.max,Oe=Math.min,Le=Math.round;function Me(e,t,n){return Ae(e,Oe(t,n));}function je(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e);}function Ne(e,t){return t.reduce(function(t,n){return t[n]=e,t;},{});}var De={name:"arrow",enabled:!0,phase:"main",fn:function fn(e){var t,n=e.state,i=e.name,o=e.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=me(n.placement),l=Ce(a),c=[re,oe].indexOf(a)>=0?"height":"width";if(r&&s){var u=function(e,t){return je("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ne(e,se));}(o.padding,n),p=be(r),h="y"===l?ne:re,f="y"===l?ie:oe,d=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],g=s[l]-n.rects.reference[l],m=Se(r),y=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,v=d/2-g/2,b=u[h],x=y-p[c]-u[f],w=y/2-p[c]/2+v,_=Me(b,w,x),k=l;n.modifiersData[i]=((t={})[k]=_,t.centerOffset=_-w,t);}},effect:function effect(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&xe(t.elements.popper,i)&&(t.elements.arrow=i);},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Pe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ie(e){var t,n=e.popper,i=e.popperRect,o=e.placement,r=e.offsets,s=e.position,a=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,u=!0===c?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:Le(Le(t*i)/i)||0,y:Le(Le(n*i)/i)||0};}(r):"function"==typeof c?c(r):r,p=u.x,h=void 0===p?0:p,f=u.y,d=void 0===f?0:f,g=r.hasOwnProperty("x"),m=r.hasOwnProperty("y"),y=re,v=ne,b=window;if(l){var x=Se(n),w="clientHeight",_="clientWidth";x===pe(n)&&"static"!==we(x=ke(n)).position&&(w="scrollHeight",_="scrollWidth"),x=x,o===ne&&(v=ie,d-=x[w]-i.height,d*=a?1:-1),o===re&&(y=oe,h-=x[_]-i.width,h*=a?1:-1);}var k,E=Object.assign({position:s},l&&Pe);return a?Object.assign({},E,((k={})[v]=m?"0":"",k[y]=g?"0":"",k.transform=(b.devicePixelRatio||1)<2?"translate("+h+"px, "+d+"px)":"translate3d("+h+"px, "+d+"px, 0)",k)):Object.assign({},E,((t={})[v]=m?d+"px":"",t[y]=g?h+"px":"",t.transform="",t));}var He={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function fn(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,l=void 0===a||a,c={placement:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ie(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ie(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement});},data:{}},Re={passive:!0},qe={name:"eventListeners",enabled:!0,phase:"write",fn:function fn(){},effect:function effect(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,l=pe(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(e){e.addEventListener("scroll",n.update,Re);}),a&&l.addEventListener("resize",n.update,Re),function(){r&&c.forEach(function(e){e.removeEventListener("scroll",n.update,Re);}),a&&l.removeEventListener("resize",n.update,Re);};},data:{}},We={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(e){return e.replace(/left|right|bottom|top/g,function(e){return We[e];});}var Fe={start:"end",end:"start"};function Be(e){return e.replace(/start|end/g,function(e){return Fe[e];});}function Ue(e){var t=pe(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset};}function Xe(e){return ve(ke(e)).left+Ue(e).scrollLeft;}function Ye(e){var t=we(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return /auto|scroll|overlay|hidden/.test(n+o+i);}function Ve(e,t){var n;void 0===t&&(t=[]);var i=function e(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:fe(t)&&Ye(t)?t:e(Ee(t));}(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=pe(i),s=o?[r].concat(r.visualViewport||[],Ye(i)?i:[]):i,a=t.concat(s);return o?a:a.concat(Ve(Ee(s)));}function $e(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height});}function Ke(e,t){return"viewport"===t?$e(function(e){var t=pe(e),n=ke(e),i=t.visualViewport,o=n.clientWidth,r=n.clientHeight,s=0,a=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,a=i.offsetTop)),{width:o,height:r,x:s+Xe(e),y:a};}(e)):fe(t)?function(e){var t=ve(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t;}(t):$e(function(e){var t,n=ke(e),i=Ue(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=Ae(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Ae(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+Xe(e),l=-i.scrollTop;return"rtl"===we(o||n).direction&&(a+=Ae(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:l};}(ke(e)));}function Qe(e){return e.split("-")[1];}function Ge(e){var t,n=e.reference,i=e.element,o=e.placement,r=o?me(o):null,s=o?Qe(o):null,a=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2;switch(r){case ne:t={x:a,y:n.y-i.height};break;case ie:t={x:a,y:n.y+n.height};break;case oe:t={x:n.x+n.width,y:l};break;case re:t={x:n.x-i.width,y:l};break;default:t={x:n.x,y:n.y};}var c=r?Ce(r):null;if(null!=c){var u="y"===c?"height":"width";switch(s){case"start":t[c]=t[c]-(n[u]/2-i[u]/2);break;case"end":t[c]=t[c]+(n[u]/2-i[u]/2);}}return t;}function Je(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,r=n.boundary,s=void 0===r?"clippingParents":r,a=n.rootBoundary,l=void 0===a?"viewport":a,c=n.elementContext,u=void 0===c?"popper":c,p=n.altBoundary,h=void 0!==p&&p,f=n.padding,d=void 0===f?0:f,g=je("number"!=typeof d?d:Ne(d,se)),m="popper"===u?"reference":"popper",y=e.elements.reference,v=e.rects.popper,b=e.elements[h?m:u],x=function(e,t,n){var i="clippingParents"===t?function(e){var t=Ve(Ee(e)),n=["absolute","fixed"].indexOf(we(e).position)>=0&&fe(e)?Se(e):e;return he(n)?t.filter(function(e){return he(e)&&xe(e,n)&&"body"!==ue(e);}):[];}(e):[].concat(t),o=[].concat(i,[n]),r=o[0],s=o.reduce(function(t,n){var i=Ke(e,n);return t.top=Ae(i.top,t.top),t.right=Oe(i.right,t.right),t.bottom=Oe(i.bottom,t.bottom),t.left=Ae(i.left,t.left),t;},Ke(e,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s;}(he(b)?b:b.contextElement||ke(e.elements.popper),s,l),w=ve(y),_=Ge({reference:w,element:v,strategy:"absolute",placement:o}),k=$e(Object.assign({},v,_)),E="popper"===u?k:w,T={top:x.top-E.top+g.top,bottom:E.bottom-x.bottom+g.bottom,left:x.left-E.left+g.left,right:E.right-x.right+g.right},S=e.modifiersData.offset;if("popper"===u&&S){var C=S[o];Object.keys(T).forEach(function(e){var t=[oe,ie].indexOf(e)>=0?1:-1,n=[ne,ie].indexOf(e)>=0?"y":"x";T[e]+=C[n]*t;});}return T;}var Ze={name:"flip",enabled:!0,phase:"main",fn:function fn(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0===s||s,l=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,h=n.altBoundary,f=n.flipVariations,d=void 0===f||f,g=n.allowedAutoPlacements,m=t.options.placement,y=me(m),v=l||(y!==m&&d?function(e){if("auto"===me(e))return[];var t=ze(e);return[Be(e),t,Be(t)];}(m):[ze(m)]),b=[m].concat(v).reduce(function(e,n){return e.concat("auto"===me(n)?function(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?le:l,u=Qe(i),p=u?a?ae:ae.filter(function(e){return Qe(e)===u;}):se,h=p.filter(function(e){return c.indexOf(e)>=0;});0===h.length&&(h=p);var f=h.reduce(function(t,n){return t[n]=Je(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[me(n)],t;},{});return Object.keys(f).sort(function(e,t){return f[e]-f[t];});}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:d,allowedAutoPlacements:g}):n);},[]),x=t.rects.reference,w=t.rects.popper,_=new Map(),k=!0,E=b[0],T=0;T<b.length;T++){var S=b[T],C=me(S),A="start"===Qe(S),O=[ne,ie].indexOf(C)>=0,L=O?"width":"height",M=Je(t,{placement:S,boundary:u,rootBoundary:p,altBoundary:h,padding:c}),j=O?A?oe:re:A?ie:ne;x[L]>w[L]&&(j=ze(j));var N=ze(j),D=[];if(r&&D.push(M[C]<=0),a&&D.push(M[j]<=0,M[N]<=0),D.every(function(e){return e;})){E=S,k=!1;break;}_.set(S,D);}if(k)for(var P=function P(e){var t=b.find(function(t){var n=_.get(t);if(n)return n.slice(0,e).every(function(e){return e;});});if(t)return E=t,"break";},I=d?3:1;I>0&&"break"!==P(I);I--);t.placement!==E&&(t.modifiersData[i]._skip=!0,t.placement=E,t.reset=!0);}},requiresIfExists:["offset"],data:{_skip:!1}};function et(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x};}function tt(e){return[ne,oe,ie,re].some(function(t){return e[t]>=0;});}var nt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function fn(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,s=Je(t,{elementContext:"reference"}),a=Je(t,{altBoundary:!0}),l=et(s,i),c=et(a,o,r),u=tt(l),p=tt(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p});}},it={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function fn(e){var t=e.state,n=e.options,i=e.name,o=n.offset,r=void 0===o?[0,0]:o,s=le.reduce(function(e,n){return e[n]=function(e,t,n){var i=me(e),o=[re,ne].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*o,[re,oe].indexOf(i)>=0?{x:a,y:s}:{x:s,y:a};}(n,t.rects,r),e;},{}),a=s[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=s;}},ot={name:"popperOffsets",enabled:!0,phase:"read",fn:function fn(e){var t=e.state,n=e.name;t.modifiersData[n]=Ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});},data:{}},rt={name:"preventOverflow",enabled:!0,phase:"main",fn:function fn(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,r=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,h=n.tether,f=void 0===h||h,d=n.tetherOffset,g=void 0===d?0:d,m=Je(t,{boundary:l,rootBoundary:c,padding:p,altBoundary:u}),y=me(t.placement),v=Qe(t.placement),b=!v,x=Ce(y),w="x"===x?"y":"x",_=t.modifiersData.popperOffsets,k=t.rects.reference,E=t.rects.popper,T="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,S={x:0,y:0};if(_){if(r||a){var C="y"===x?ne:re,A="y"===x?ie:oe,O="y"===x?"height":"width",L=_[x],M=_[x]+m[C],j=_[x]-m[A],N=f?-E[O]/2:0,D="start"===v?k[O]:E[O],P="start"===v?-E[O]:-k[O],I=t.elements.arrow,H=f&&I?be(I):{width:0,height:0},R=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},q=R[C],W=R[A],z=Me(0,k[O],H[O]),F=b?k[O]/2-N-z-q-T:D-z-q-T,B=b?-k[O]/2+N+z+W+T:P+z+W+T,U=t.elements.arrow&&Se(t.elements.arrow),X=U?"y"===x?U.clientTop||0:U.clientLeft||0:0,Y=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,V=_[x]+F-Y-X,$=_[x]+B-Y;if(r){var K=Me(f?Oe(M,V):M,L,f?Ae(j,$):j);_[x]=K,S[x]=K-L;}if(a){var Q="x"===x?ne:re,G="x"===x?ie:oe,J=_[w],Z=J+m[Q],ee=J-m[G],te=Me(f?Oe(Z,V):Z,J,f?Ae(ee,$):ee);_[w]=te,S[w]=te-J;}}t.modifiersData[i]=S;}},requiresIfExists:["offset"]};function st(e,t,n){void 0===n&&(n=!1);var i,o,r=fe(t),s=fe(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,i=t.height/e.offsetHeight||1;return 1!==n||1!==i;}(t),a=ke(t),l=ve(e,s),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(("body"!==ue(t)||Ye(a))&&(c=(i=t)!==pe(i)&&fe(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:Ue(i)),fe(t)?((u=ve(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=Xe(a))),{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height};}var at={placement:"bottom",modifiers:[],strategy:"absolute"};function lt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect);});}function ct(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?at:o;return function(e,t,n){void 0===n&&(n=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},at,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function setOptions(n){p(),a.options=Object.assign({},r,a.options,n),a.scrollParents={reference:he(e)?Ve(e):e.contextElement?Ve(e.contextElement):[],popper:Ve(t)};var o,s,c=function(e){var t=function(e){var t=new Map(),n=new Set(),i=[];return e.forEach(function(e){t.set(e.name,e);}),e.forEach(function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach(function(i){if(!n.has(i)){var o=t.get(i);o&&e(o);}}),i.push(o);}(e);}),i;}(e);return ce.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n;}));},[]);}((o=[].concat(i,a.options.modifiers),s=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e;},{}),Object.keys(s).map(function(e){return s[e];})));return a.orderedModifiers=c.filter(function(e){return e.enabled;}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var r=o({state:a,name:t,instance:u,options:i});l.push(r||function(){});}}),u.update();},forceUpdate:function forceUpdate(){if(!c){var e=a.elements,t=e.reference,n=e.popper;if(lt(t,n)){a.rects={reference:st(t,Se(n),"fixed"===a.options.strategy),popper:be(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data);});for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,l=void 0===s?{}:s,p=o.name;"function"==typeof r&&(a=r({state:a,options:l,name:p,instance:u})||a);}else a.reset=!1,i=-1;}}},update:(o=function o(){return new Promise(function(e){u.forceUpdate(),e(a);});},function(){return s||(s=new Promise(function(e){Promise.resolve().then(function(){s=void 0,e(o());});})),s;}),destroy:function destroy(){p(),c=!0;}};if(!lt(e,t))return u;function p(){l.forEach(function(e){return e();}),l=[];}return u.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e);}),u;};}var ut=ct(),pt=ct({defaultModifiers:[qe,ot,He,ge]}),ht=ct({defaultModifiers:[qe,ot,He,ge,it,Ze,rt,De,nt]}),ft=Object.freeze({__proto__:null,popperGenerator:ct,detectOverflow:Je,createPopperBase:ut,createPopper:ht,createPopperLite:pt,top:ne,bottom:ie,right:oe,left:re,auto:"auto",basePlacements:se,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:ae,placements:le,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ce,applyStyles:ge,arrow:De,computeStyles:He,eventListeners:qe,flip:Ze,hide:nt,offset:it,popperOffsets:ot,preventOverflow:rt});var dt=new RegExp("ArrowUp|ArrowDown|Escape"),gt=d()?"top-end":"top-start",mt=d()?"top-start":"top-end",yt=d()?"bottom-end":"bottom-start",vt=d()?"bottom-start":"bottom-end",bt=d()?"left-start":"right-start",xt=d()?"right-start":"left-start",wt={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},_t={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};var kt=/*#__PURE__*/function(_H5){_inherits(kt,_H5);var _super5=_createSuper(kt);function kt(e,t){var _this12;_classCallCheck(this,kt);_this12=_super5.call(this,e),_this12._popper=null,_this12._config=_this12._getConfig(t),_this12._menu=_this12._getMenuElement(),_this12._inNavbar=_this12._detectNavbar();return _this12;}_createClass(kt,[{key:"toggle",value:function toggle(){return this._isShown()?this.hide():this.show();}},{key:"show",value:function show(){var _ref4;if(l(this._element)||this._isShown(this._menu))return;var e={relatedTarget:this._element};if(D.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;var t=kt.getParentFromElement(this._element);this._inNavbar?B.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&(_ref4=[]).concat.apply(_ref4,_toConsumableArray(document.body.children)).forEach(function(e){return D.on(e,"mouseover",u);}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),D.trigger(this._element,"shown.bs.dropdown",e);}},{key:"hide",value:function hide(){if(l(this._element)||!this._isShown(this._menu))return;var e={relatedTarget:this._element};this._completeHide(e);}},{key:"dispose",value:function dispose(){this._popper&&this._popper.destroy(),_get(_getPrototypeOf(kt.prototype),"dispose",this).call(this);}},{key:"update",value:function update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update();}},{key:"_completeHide",value:function _completeHide(e){var _ref5;D.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&(_ref5=[]).concat.apply(_ref5,_toConsumableArray(document.body.children)).forEach(function(e){return D.off(e,"mouseover",u);}),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,"hidden.bs.dropdown",e));}},{key:"_getConfig",value:function _getConfig(e){if(e=_objectSpread(_objectSpread(_objectSpread({},this.constructor.Default),B.getDataAttributes(this._element)),e),s("dropdown",e,this.constructor.DefaultType),"object"==_typeof(e.reference)&&!o(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e;}},{key:"_createPopper",value:function _createPopper(e){if(void 0===ft)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var t=this._element;"parent"===this._config.reference?t=e:o(this._config.reference)?t=r(this._config.reference):"object"==_typeof(this._config.reference)&&(t=this._config.reference);var n=this._getPopperConfig(),i=n.modifiers.find(function(e){return"applyStyles"===e.name&&!1===e.enabled;});this._popper=ht(t,this._menu,n),i&&B.setDataAttribute(this._menu,"popper","static");}},{key:"_isShown",value:function _isShown(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._element;return e.classList.contains("show");}},{key:"_getMenuElement",value:function _getMenuElement(){return U.next(this._element,".dropdown-menu")[0];}},{key:"_getPlacement",value:function _getPlacement(){var e=this._element.parentNode;if(e.classList.contains("dropend"))return bt;if(e.classList.contains("dropstart"))return xt;var t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?mt:gt:t?vt:yt;}},{key:"_detectNavbar",value:function _detectNavbar(){return null!==this._element.closest(".navbar");}},{key:"_getOffset",value:function _getOffset(){var _this13=this;var e=this._config.offset;return"string"==typeof e?e.split(",").map(function(e){return Number.parseInt(e,10);}):"function"==typeof e?function(t){return e(t,_this13._element);}:e;}},{key:"_getPopperConfig",value:function _getPopperConfig(){var e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),_objectSpread(_objectSpread({},e),"function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig);}},{key:"_selectMenuItem",value:function _selectMenuItem(_ref6){var e=_ref6.key,t=_ref6.target;var n=U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(a);n.length&&v(n,t,"ArrowDown"===e,!n.includes(t)).focus();}}],[{key:"Default",get:function get(){return wt;}},{key:"DefaultType",get:function get(){return _t;}},{key:"NAME",get:function get(){return"dropdown";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=kt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e]();}});}},{key:"clearMenus",value:function clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;var t=U.find('[data-bs-toggle="dropdown"]');for(var _n9=0,_i5=t.length;_n9<_i5;_n9++){var _i6=kt.getInstance(t[_n9]);if(!_i6||!1===_i6._config.autoClose)continue;if(!_i6._isShown())continue;var _o3={relatedTarget:_i6._element};if(e){var _t10=e.composedPath(),_n10=_t10.includes(_i6._menu);if(_t10.includes(_i6._element)||"inside"===_i6._config.autoClose&&!_n10||"outside"===_i6._config.autoClose&&_n10)continue;if(_i6._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(_o3.clickEvent=e);}_i6._completeHide(_o3);}}},{key:"getParentFromElement",value:function getParentFromElement(e){return n(e)||e.parentNode;}},{key:"dataApiKeydownHandler",value:function dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!dt.test(e.key))return;var t=this.classList.contains("show");if(!t&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),l(this))return;var n=this.matches('[data-bs-toggle="dropdown"]')?this:U.prev(this,'[data-bs-toggle="dropdown"]')[0],i=kt.getOrCreateInstance(n);if("Escape"!==e.key)return"ArrowUp"===e.key||"ArrowDown"===e.key?(t||i.show(),void i._selectMenuItem(e)):void(t&&"Space"!==e.key||kt.clearMenus());i.hide();}}]);return kt;}(H);D.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',kt.dataApiKeydownHandler),D.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",kt.dataApiKeydownHandler),D.on(document,"click.bs.dropdown.data-api",kt.clearMenus),D.on(document,"keyup.bs.dropdown.data-api",kt.clearMenus),D.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',function(e){e.preventDefault(),kt.getOrCreateInstance(this).toggle();}),g(kt);var Et=/*#__PURE__*/function(){function Et(){_classCallCheck(this,Et);this._element=document.body;}_createClass(Et,[{key:"getWidth",value:function getWidth(){var e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e);}},{key:"hide",value:function hide(){var e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",function(t){return t+e;}),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",function(t){return t+e;}),this._setElementAttributes(".sticky-top","marginRight",function(t){return t-e;});}},{key:"_disableOverFlow",value:function _disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden";}},{key:"_setElementAttributes",value:function _setElementAttributes(e,t,n){var _this14=this;var i=this.getWidth();this._applyManipulationCallback(e,function(e){if(e!==_this14._element&&window.innerWidth>e.clientWidth+i)return;_this14._saveInitialAttribute(e,t);var o=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(o))+"px";});}},{key:"reset",value:function reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight");}},{key:"_saveInitialAttribute",value:function _saveInitialAttribute(e,t){var n=e.style[t];n&&B.setDataAttribute(e,t,n);}},{key:"_resetElementAttributes",value:function _resetElementAttributes(e,t){this._applyManipulationCallback(e,function(e){var n=B.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(B.removeDataAttribute(e,t),e.style[t]=n);});}},{key:"_applyManipulationCallback",value:function _applyManipulationCallback(e,t){o(e)?t(e):U.find(e,this._element).forEach(t);}},{key:"isOverflowing",value:function isOverflowing(){return this.getWidth()>0;}}]);return Et;}();var Tt={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},St={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};var Ct=/*#__PURE__*/function(){function Ct(e){_classCallCheck(this,Ct);this._config=this._getConfig(e),this._isAppended=!1,this._element=null;}_createClass(Ct,[{key:"show",value:function show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&p(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(function(){m(e);})):m(e);}},{key:"hide",value:function hide(e){var _this15=this;this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(function(){_this15.dispose(),m(e);})):m(e);}},{key:"_getElement",value:function _getElement(){if(!this._element){var _e9=document.createElement("div");_e9.className=this._config.className,this._config.isAnimated&&_e9.classList.add("fade"),this._element=_e9;}return this._element;}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread({},Tt),"object"==_typeof(e)?e:{})).rootElement=r(e.rootElement),s("backdrop",e,St),e;}},{key:"_append",value:function _append(){var _this16=this;this._isAppended||(this._config.rootElement.append(this._getElement()),D.on(this._getElement(),"mousedown.bs.backdrop",function(){m(_this16._config.clickCallback);}),this._isAppended=!0);}},{key:"dispose",value:function dispose(){this._isAppended&&(D.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1);}},{key:"_emulateAnimation",value:function _emulateAnimation(e){y(e,this._getElement(),this._config.isAnimated);}}]);return Ct;}();var At={trapElement:null,autofocus:!0},Ot={trapElement:"element",autofocus:"boolean"};var Lt=/*#__PURE__*/function(){function Lt(e){_classCallCheck(this,Lt);this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null;}_createClass(Lt,[{key:"activate",value:function activate(){var _this17=this;var _this$_config=this._config,e=_this$_config.trapElement,t=_this$_config.autofocus;this._isActive||(t&&e.focus(),D.off(document,".bs.focustrap"),D.on(document,"focusin.bs.focustrap",function(e){return _this17._handleFocusin(e);}),D.on(document,"keydown.tab.bs.focustrap",function(e){return _this17._handleKeydown(e);}),this._isActive=!0);}},{key:"deactivate",value:function deactivate(){this._isActive&&(this._isActive=!1,D.off(document,".bs.focustrap"));}},{key:"_handleFocusin",value:function _handleFocusin(e){var t=e.target,n=this._config.trapElement;if(t===document||t===n||n.contains(t))return;var i=U.focusableChildren(n);0===i.length?n.focus():"backward"===this._lastTabNavDirection?i[i.length-1].focus():i[0].focus();}},{key:"_handleKeydown",value:function _handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?"backward":"forward");}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread({},At),"object"==_typeof(e)?e:{}),s("focustrap",e,Ot),e;}}]);return Lt;}();var Mt={backdrop:!0,keyboard:!0,focus:!0},jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};var Nt=/*#__PURE__*/function(_H6){_inherits(Nt,_H6);var _super6=_createSuper(Nt);function Nt(e,t){var _this18;_classCallCheck(this,Nt);_this18=_super6.call(this,e),_this18._config=_this18._getConfig(t),_this18._dialog=U.findOne(".modal-dialog",_this18._element),_this18._backdrop=_this18._initializeBackDrop(),_this18._focustrap=_this18._initializeFocusTrap(),_this18._isShown=!1,_this18._ignoreBackdropClick=!1,_this18._isTransitioning=!1,_this18._scrollBar=new Et();return _this18;}_createClass(Nt,[{key:"toggle",value:function toggle(e){return this._isShown?this.hide():this.show(e);}},{key:"show",value:function show(e){var _this19=this;this._isShown||this._isTransitioning||D.trigger(this._element,"show.bs.modal",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),D.on(this._dialog,"mousedown.dismiss.bs.modal",function(){D.one(_this19._element,"mouseup.dismiss.bs.modal",function(e){e.target===_this19._element&&(_this19._ignoreBackdropClick=!0);});}),this._showBackdrop(function(){return _this19._showElement(e);}));}},{key:"hide",value:function hide(){var _this20=this;if(!this._isShown||this._isTransitioning)return;if(D.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;var e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove("show"),D.off(this._element,"click.dismiss.bs.modal"),D.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(function(){return _this20._hideModal();},this._element,e);}},{key:"dispose",value:function dispose(){[window,this._dialog].forEach(function(e){return D.off(e,".bs.modal");}),this._backdrop.dispose(),this._focustrap.deactivate(),_get(_getPrototypeOf(Nt.prototype),"dispose",this).call(this);}},{key:"handleUpdate",value:function handleUpdate(){this._adjustDialog();}},{key:"_initializeBackDrop",value:function _initializeBackDrop(){return new Ct({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()});}},{key:"_initializeFocusTrap",value:function _initializeFocusTrap(){return new Lt({trapElement:this._element});}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},Mt),B.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),s("modal",e,jt),e;}},{key:"_showElement",value:function _showElement(e){var _this21=this;var t=this._isAnimated(),n=U.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&p(this._element),this._element.classList.add("show"),this._queueCallback(function(){_this21._config.focus&&_this21._focustrap.activate(),_this21._isTransitioning=!1,D.trigger(_this21._element,"shown.bs.modal",{relatedTarget:e});},this._dialog,t);}},{key:"_setEscapeEvent",value:function _setEscapeEvent(){var _this22=this;this._isShown?D.on(this._element,"keydown.dismiss.bs.modal",function(e){_this22._config.keyboard&&"Escape"===e.key?(e.preventDefault(),_this22.hide()):_this22._config.keyboard||"Escape"!==e.key||_this22._triggerBackdropTransition();}):D.off(this._element,"keydown.dismiss.bs.modal");}},{key:"_setResizeEvent",value:function _setResizeEvent(){var _this23=this;this._isShown?D.on(window,"resize.bs.modal",function(){return _this23._adjustDialog();}):D.off(window,"resize.bs.modal");}},{key:"_hideModal",value:function _hideModal(){var _this24=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(function(){document.body.classList.remove("modal-open"),_this24._resetAdjustments(),_this24._scrollBar.reset(),D.trigger(_this24._element,"hidden.bs.modal");});}},{key:"_showBackdrop",value:function _showBackdrop(e){var _this25=this;D.on(this._element,"click.dismiss.bs.modal",function(e){_this25._ignoreBackdropClick?_this25._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===_this25._config.backdrop?_this25.hide():"static"===_this25._config.backdrop&&_this25._triggerBackdropTransition());}),this._backdrop.show(e);}},{key:"_isAnimated",value:function _isAnimated(){return this._element.classList.contains("fade");}},{key:"_triggerBackdropTransition",value:function _triggerBackdropTransition(){var _this26=this;if(D.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;var _this$_element=this._element,e=_this$_element.classList,t=_this$_element.scrollHeight,n=_this$_element.style,i=t>document.documentElement.clientHeight;!i&&"hidden"===n.overflowY||e.contains("modal-static")||(i||(n.overflowY="hidden"),e.add("modal-static"),this._queueCallback(function(){e.remove("modal-static"),i||_this26._queueCallback(function(){n.overflowY="";},_this26._dialog);},this._dialog),this._element.focus());}},{key:"_adjustDialog",value:function _adjustDialog(){var e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!d()||n&&!e&&d())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!d()||!n&&e&&d())&&(this._element.style.paddingRight=t+"px");}},{key:"_resetAdjustments",value:function _resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight="";}}],[{key:"Default",get:function get(){return Mt;}},{key:"NAME",get:function get(){return"modal";}},{key:"jQueryInterface",value:function jQueryInterface(e,t){return this.each(function(){var n=Nt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError("No method named \"".concat(e,"\""));n[e](t);}});}}]);return Nt;}(H);D.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(e){var _this27=this;var t=n(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),D.one(t,"show.bs.modal",function(e){e.defaultPrevented||D.one(t,"hidden.bs.modal",function(){a(_this27)&&_this27.focus();});}),Nt.getOrCreateInstance(t).toggle(this);}),R(Nt),g(Nt);var Dt={backdrop:!0,keyboard:!0,scroll:!1},Pt={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};var It=/*#__PURE__*/function(_H7){_inherits(It,_H7);var _super7=_createSuper(It);function It(e,t){var _this28;_classCallCheck(this,It);_this28=_super7.call(this,e),_this28._config=_this28._getConfig(t),_this28._isShown=!1,_this28._backdrop=_this28._initializeBackDrop(),_this28._focustrap=_this28._initializeFocusTrap(),_this28._addEventListeners();return _this28;}_createClass(It,[{key:"toggle",value:function toggle(e){return this._isShown?this.hide():this.show(e);}},{key:"show",value:function show(e){var _this29=this;this._isShown||D.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new Et().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(function(){_this29._config.scroll||_this29._focustrap.activate(),D.trigger(_this29._element,"shown.bs.offcanvas",{relatedTarget:e});},this._element,!0));}},{key:"hide",value:function hide(){var _this30=this;this._isShown&&(D.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(function(){_this30._element.setAttribute("aria-hidden",!0),_this30._element.removeAttribute("aria-modal"),_this30._element.removeAttribute("role"),_this30._element.style.visibility="hidden",_this30._config.scroll||new Et().reset(),D.trigger(_this30._element,"hidden.bs.offcanvas");},this._element,!0)));}},{key:"dispose",value:function dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),_get(_getPrototypeOf(It.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},Dt),B.getDataAttributes(this._element)),"object"==_typeof(e)?e:{}),s("offcanvas",e,Pt),e;}},{key:"_initializeBackDrop",value:function _initializeBackDrop(){var _this31=this;return new Ct({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:function clickCallback(){return _this31.hide();}});}},{key:"_initializeFocusTrap",value:function _initializeFocusTrap(){return new Lt({trapElement:this._element});}},{key:"_addEventListeners",value:function _addEventListeners(){var _this32=this;D.on(this._element,"keydown.dismiss.bs.offcanvas",function(e){_this32._config.keyboard&&"Escape"===e.key&&_this32.hide();});}}],[{key:"NAME",get:function get(){return"offcanvas";}},{key:"Default",get:function get(){return Dt;}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=It.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError("No method named \"".concat(e,"\""));t[e](this);}});}}]);return It;}(H);D.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(e){var _this33=this;var t=n(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),l(this))return;D.one(t,"hidden.bs.offcanvas",function(){a(_this33)&&_this33.focus();});var i=U.findOne(".offcanvas.show");i&&i!==t&&It.getInstance(i).hide(),It.getOrCreateInstance(t).toggle(this);}),D.on(window,"load.bs.offcanvas.data-api",function(){return U.find(".offcanvas.show").forEach(function(e){return It.getOrCreateInstance(e).show();});}),R(It),g(It);var Ht=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Rt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,qt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Wt=function Wt(e,t){var n=e.nodeName.toLowerCase();if(t.includes(n))return!Ht.has(n)||Boolean(Rt.test(e.nodeValue)||qt.test(e.nodeValue));var i=t.filter(function(e){return e instanceof RegExp;});for(var _e10=0,_t11=i.length;_e10<_t11;_e10++)if(i[_e10].test(n))return!0;return!1;};function zt(e,t,n){var _ref7;if(!e.length)return e;if(n&&"function"==typeof n)return n(e);var i=new window.DOMParser().parseFromString(e,"text/html"),o=Object.keys(t),r=(_ref7=[]).concat.apply(_ref7,_toConsumableArray(i.body.querySelectorAll("*")));var _loop=function _loop(){var _ref8;var n=r[_e11],i=n.nodeName.toLowerCase();if(!o.includes(i)){n.remove();return 1;// continue
}var s=(_ref8=[]).concat.apply(_ref8,_toConsumableArray(n.attributes)),a=[].concat(t["*"]||[],t[i]||[]);s.forEach(function(e){Wt(e,a)||n.removeAttribute(e.nodeName);});};for(var _e11=0,_n11=r.length;_e11<_n11;_e11++){if(_loop())continue;}return i.body.innerHTML;}var Ft=new Set(["sanitize","allowList","sanitizeFn"]),Bt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ut={AUTO:"auto",TOP:"top",RIGHT:d()?"left":"right",BOTTOM:"bottom",LEFT:d()?"right":"left"},Xt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Yt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};var Vt=/*#__PURE__*/function(_H8){_inherits(Vt,_H8);var _super8=_createSuper(Vt);function Vt(e,t){var _this34;_classCallCheck(this,Vt);if(void 0===ft)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");_this34=_super8.call(this,e),_this34._isEnabled=!0,_this34._timeout=0,_this34._hoverState="",_this34._activeTrigger={},_this34._popper=null,_this34._config=_this34._getConfig(t),_this34.tip=null,_this34._setListeners();return _this34;}_createClass(Vt,[{key:"enable",value:function enable(){this._isEnabled=!0;}},{key:"disable",value:function disable(){this._isEnabled=!1;}},{key:"toggleEnabled",value:function toggleEnabled(){this._isEnabled=!this._isEnabled;}},{key:"toggle",value:function toggle(e){if(this._isEnabled)if(e){var _t12=this._initializeOnDelegatedTarget(e);_t12._activeTrigger.click=!_t12._activeTrigger.click,_t12._isWithActiveTrigger()?_t12._enter(null,_t12):_t12._leave(null,_t12);}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this);}}},{key:"dispose",value:function dispose(){clearTimeout(this._timeout),D.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),_get(_getPrototypeOf(Vt.prototype),"dispose",this).call(this);}},{key:"show",value:function show(){var _i$classList,_ref9,_this35=this;if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;var e=D.trigger(this._element,this.constructor.Event.SHOW),t=c(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;var i=this.getTipElement(),o=function(e){do{e+=Math.floor(1e6*Math.random());}while(document.getElementById(e));return e;}(this.constructor.NAME);i.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&i.classList.add("fade");var r="function"==typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,s=this._getAttachment(r);this._addAttachmentClass(s);var a=this._config.container;I.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(i),D.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ht(this._element,i,this._getPopperConfig(s)),i.classList.add("show");var l=this._resolvePossibleFunction(this._config.customClass);l&&(_i$classList=i.classList).add.apply(_i$classList,_toConsumableArray(l.split(" "))),"ontouchstart"in document.documentElement&&(_ref9=[]).concat.apply(_ref9,_toConsumableArray(document.body.children)).forEach(function(e){D.on(e,"mouseover",u);});var p=this.tip.classList.contains("fade");this._queueCallback(function(){var e=_this35._hoverState;_this35._hoverState=null,D.trigger(_this35._element,_this35.constructor.Event.SHOWN),"out"===e&&_this35._leave(null,_this35);},this.tip,p);}},{key:"hide",value:function hide(){var _ref10,_this36=this;if(!this._popper)return;var e=this.getTipElement();if(D.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove("show"),"ontouchstart"in document.documentElement&&(_ref10=[]).concat.apply(_ref10,_toConsumableArray(document.body.children)).forEach(function(e){return D.off(e,"mouseover",u);}),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;var t=this.tip.classList.contains("fade");this._queueCallback(function(){_this36._isWithActiveTrigger()||("show"!==_this36._hoverState&&e.remove(),_this36._cleanTipClass(),_this36._element.removeAttribute("aria-describedby"),D.trigger(_this36._element,_this36.constructor.Event.HIDDEN),_this36._popper&&(_this36._popper.destroy(),_this36._popper=null));},this.tip,t),this._hoverState="";}},{key:"update",value:function update(){null!==this._popper&&this._popper.update();}},{key:"isWithContent",value:function isWithContent(){return Boolean(this.getTitle());}},{key:"getTipElement",value:function getTipElement(){if(this.tip)return this.tip;var e=document.createElement("div");e.innerHTML=this._config.template;var t=e.children[0];return this.setContent(t),t.classList.remove("fade","show"),this.tip=t,this.tip;}},{key:"setContent",value:function setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".tooltip-inner");}},{key:"_sanitizeAndSetContent",value:function _sanitizeAndSetContent(e,t,n){var i=U.findOne(n,e);t||!i?this.setElementContent(i,t):i.remove();}},{key:"setElementContent",value:function setElementContent(e,t){if(null!==e)return o(t)?(t=r(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=zt(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t);}},{key:"getTitle",value:function getTitle(){var e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e);}},{key:"updateAttachment",value:function updateAttachment(e){return"right"===e?"end":"left"===e?"start":e;}},{key:"_initializeOnDelegatedTarget",value:function _initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig());}},{key:"_getOffset",value:function _getOffset(){var _this37=this;var e=this._config.offset;return"string"==typeof e?e.split(",").map(function(e){return Number.parseInt(e,10);}):"function"==typeof e?function(t){return e(t,_this37._element);}:e;}},{key:"_resolvePossibleFunction",value:function _resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e;}},{key:"_getPopperConfig",value:function _getPopperConfig(e){var _this38=this;var t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:".".concat(this.constructor.NAME,"-arrow")}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:function fn(e){return _this38._handlePopperPlacementChange(e);}}],onFirstUpdate:function onFirstUpdate(e){e.options.placement!==e.placement&&_this38._handlePopperPlacementChange(e);}};return _objectSpread(_objectSpread({},t),"function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig);}},{key:"_addAttachmentClass",value:function _addAttachmentClass(e){this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(),"-").concat(this.updateAttachment(e)));}},{key:"_getAttachment",value:function _getAttachment(e){return Ut[e.toUpperCase()];}},{key:"_setListeners",value:function _setListeners(){var _this39=this;this._config.trigger.split(" ").forEach(function(e){if("click"===e)D.on(_this39._element,_this39.constructor.Event.CLICK,_this39._config.selector,function(e){return _this39.toggle(e);});else if("manual"!==e){var _t13="hover"===e?_this39.constructor.Event.MOUSEENTER:_this39.constructor.Event.FOCUSIN,_n12="hover"===e?_this39.constructor.Event.MOUSELEAVE:_this39.constructor.Event.FOCUSOUT;D.on(_this39._element,_t13,_this39._config.selector,function(e){return _this39._enter(e);}),D.on(_this39._element,_n12,_this39._config.selector,function(e){return _this39._leave(e);});}}),this._hideModalHandler=function(){_this39._element&&_this39.hide();},D.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config=_objectSpread(_objectSpread({},this._config),{},{trigger:"manual",selector:""}):this._fixTitle();}},{key:"_fixTitle",value:function _fixTitle(){var e=this._element.getAttribute("title"),t=_typeof(this._element.getAttribute("data-bs-original-title"));(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""));}},{key:"_enter",value:function _enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0),t.getTipElement().classList.contains("show")||"show"===t._hoverState?t._hoverState="show":(clearTimeout(t._timeout),t._hoverState="show",t._config.delay&&t._config.delay.show?t._timeout=setTimeout(function(){"show"===t._hoverState&&t.show();},t._config.delay.show):t.show());}},{key:"_leave",value:function _leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?"focus":"hover"]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(function(){"out"===t._hoverState&&t.hide();},t._config.delay.hide):t.hide());}},{key:"_isWithActiveTrigger",value:function _isWithActiveTrigger(){for(var _e12 in this._activeTrigger)if(this._activeTrigger[_e12])return!0;return!1;}},{key:"_getConfig",value:function _getConfig(e){var t=B.getDataAttributes(this._element);return Object.keys(t).forEach(function(e){Ft.has(e)&&delete t[e];}),(e=_objectSpread(_objectSpread(_objectSpread({},this.constructor.Default),t),"object"==_typeof(e)&&e?e:{})).container=!1===e.container?document.body:r(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),s("tooltip",e,this.constructor.DefaultType),e.sanitize&&(e.template=zt(e.template,e.allowList,e.sanitizeFn)),e;}},{key:"_getDelegateConfig",value:function _getDelegateConfig(){var e={};for(var _t14 in this._config)this.constructor.Default[_t14]!==this._config[_t14]&&(e[_t14]=this._config[_t14]);return e;}},{key:"_cleanTipClass",value:function _cleanTipClass(){var e=this.getTipElement(),t=new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(),"\\S+"),"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(function(e){return e.trim();}).forEach(function(t){return e.classList.remove(t);});}},{key:"_getBasicClassPrefix",value:function _getBasicClassPrefix(){return"bs-tooltip";}},{key:"_handlePopperPlacementChange",value:function _handlePopperPlacementChange(e){var t=e.state;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)));}}],[{key:"Default",get:function get(){return Xt;}},{key:"NAME",get:function get(){return"tooltip";}},{key:"Event",get:function get(){return Yt;}},{key:"DefaultType",get:function get(){return Bt;}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=Vt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e]();}});}}]);return Vt;}(H);g(Vt);var $t=_objectSpread(_objectSpread({},Vt.Default),{},{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Kt=_objectSpread(_objectSpread({},Vt.DefaultType),{},{content:"(string|element|function)"}),Qt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};var Gt=/*#__PURE__*/function(_Vt){_inherits(Gt,_Vt);var _super9=_createSuper(Gt);function Gt(){_classCallCheck(this,Gt);return _super9.apply(this,arguments);}_createClass(Gt,[{key:"isWithContent",value:function isWithContent(){return this.getTitle()||this._getContent();}},{key:"setContent",value:function setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body");}},{key:"_getContent",value:function _getContent(){return this._resolvePossibleFunction(this._config.content);}},{key:"_getBasicClassPrefix",value:function _getBasicClassPrefix(){return"bs-popover";}}],[{key:"Default",get:function get(){return $t;}},{key:"NAME",get:function get(){return"popover";}},{key:"Event",get:function get(){return Qt;}},{key:"DefaultType",get:function get(){return Kt;}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=Gt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e]();}});}}]);return Gt;}(Vt);g(Gt);var Jt={offset:10,method:"auto",target:""},Zt={offset:"number",method:"string",target:"(string|element)"},en=".nav-link, .list-group-item, .dropdown-item";var tn=/*#__PURE__*/function(_H9){_inherits(tn,_H9);var _super10=_createSuper(tn);function tn(e,t){var _this40;_classCallCheck(this,tn);_this40=_super10.call(this,e),_this40._scrollElement="BODY"===_this40._element.tagName?window:_this40._element,_this40._config=_this40._getConfig(t),_this40._offsets=[],_this40._targets=[],_this40._activeTarget=null,_this40._scrollHeight=0,D.on(_this40._scrollElement,"scroll.bs.scrollspy",function(){return _this40._process();}),_this40.refresh(),_this40._process();return _this40;}_createClass(tn,[{key:"refresh",value:function refresh(){var _this41=this;var e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,i="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),U.find(en,this._config.target).map(function(e){var o=t(e),r=o?U.findOne(o):null;if(r){var _e13=r.getBoundingClientRect();if(_e13.width||_e13.height)return[B[n](r).top+i,o];}return null;}).filter(function(e){return e;}).sort(function(e,t){return e[0]-t[0];}).forEach(function(e){_this41._offsets.push(e[0]),_this41._targets.push(e[1]);});}},{key:"dispose",value:function dispose(){D.off(this._scrollElement,".bs.scrollspy"),_get(_getPrototypeOf(tn.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return(e=_objectSpread(_objectSpread(_objectSpread({},Jt),B.getDataAttributes(this._element)),"object"==_typeof(e)&&e?e:{})).target=r(e.target)||document.documentElement,s("scrollspy",e,Zt),e;}},{key:"_getScrollTop",value:function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;}},{key:"_getScrollHeight",value:function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);}},{key:"_getOffsetHeight",value:function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;}},{key:"_process",value:function _process(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var _e14=this._targets[this._targets.length-1];this._activeTarget!==_e14&&this._activate(_e14);}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var _t15=this._offsets.length;_t15--;)this._activeTarget!==this._targets[_t15]&&e>=this._offsets[_t15]&&(void 0===this._offsets[_t15+1]||e<this._offsets[_t15+1])&&this._activate(this._targets[_t15]);}}},{key:"_activate",value:function _activate(e){this._activeTarget=e,this._clear();var t=en.split(",").map(function(t){return"".concat(t,"[data-bs-target=\"").concat(e,"\"],").concat(t,"[href=\"").concat(e,"\"]");}),n=U.findOne(t.join(","),this._config.target);n.classList.add("active"),n.classList.contains("dropdown-item")?U.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"):U.parents(n,".nav, .list-group").forEach(function(e){U.prev(e,".nav-link, .list-group-item").forEach(function(e){return e.classList.add("active");}),U.prev(e,".nav-item").forEach(function(e){U.children(e,".nav-link").forEach(function(e){return e.classList.add("active");});});}),D.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e});}},{key:"_clear",value:function _clear(){U.find(en,this._config.target).filter(function(e){return e.classList.contains("active");}).forEach(function(e){return e.classList.remove("active");});}}],[{key:"Default",get:function get(){return Jt;}},{key:"NAME",get:function get(){return"scrollspy";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=tn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e]();}});}}]);return tn;}(H);D.on(window,"load.bs.scrollspy.data-api",function(){U.find('[data-bs-spy="scroll"]').forEach(function(e){return new tn(e);});}),g(tn);var nn=/*#__PURE__*/function(_H10){_inherits(nn,_H10);var _super11=_createSuper(nn);function nn(){_classCallCheck(this,nn);return _super11.apply(this,arguments);}_createClass(nn,[{key:"show",value:function show(){var _this42=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;var e;var t=n(this._element),i=this._element.closest(".nav, .list-group");if(i){var _t16="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";e=U.find(_t16,i),e=e[e.length-1];}var o=e?D.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(D.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,i);var r=function r(){D.trigger(e,"hidden.bs.tab",{relatedTarget:_this42._element}),D.trigger(_this42._element,"shown.bs.tab",{relatedTarget:e});};t?this._activate(t,t.parentNode,r):r();}},{key:"_activate",value:function _activate(e,t,n){var _this43=this;var i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?U.children(t,".active"):U.find(":scope > li > .active",t))[0],o=n&&i&&i.classList.contains("fade"),r=function r(){return _this43._transitionComplete(e,i,n);};i&&o?(i.classList.remove("show"),this._queueCallback(r,e,!0)):r();}},{key:"_transitionComplete",value:function _transitionComplete(e,t,n){if(t){t.classList.remove("active");var _e15=U.findOne(":scope > .dropdown-menu .active",t.parentNode);_e15&&_e15.classList.remove("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1);}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),p(e),e.classList.contains("fade")&&e.classList.add("show");var i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains("dropdown-menu")){var _t17=e.closest(".dropdown");_t17&&U.find(".dropdown-toggle",_t17).forEach(function(e){return e.classList.add("active");}),e.setAttribute("aria-expanded",!0);}n&&n();}}],[{key:"NAME",get:function get(){return"tab";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=nn.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e]();}});}}]);return nn;}(H);D.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),l(this)||nn.getOrCreateInstance(this).show();}),g(nn);var on={animation:"boolean",autohide:"boolean",delay:"number"},rn={animation:!0,autohide:!0,delay:5e3};var sn=/*#__PURE__*/function(_H11){_inherits(sn,_H11);var _super12=_createSuper(sn);function sn(e,t){var _this44;_classCallCheck(this,sn);_this44=_super12.call(this,e),_this44._config=_this44._getConfig(t),_this44._timeout=null,_this44._hasMouseInteraction=!1,_this44._hasKeyboardInteraction=!1,_this44._setListeners();return _this44;}_createClass(sn,[{key:"show",value:function show(){var _this45=this;D.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),p(this._element),this._element.classList.add("show"),this._element.classList.add("showing"),this._queueCallback(function(){_this45._element.classList.remove("showing"),D.trigger(_this45._element,"shown.bs.toast"),_this45._maybeScheduleHide();},this._element,this._config.animation));}},{key:"hide",value:function hide(){var _this46=this;this._element.classList.contains("show")&&(D.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add("showing"),this._queueCallback(function(){_this46._element.classList.add("hide"),_this46._element.classList.remove("showing"),_this46._element.classList.remove("show"),D.trigger(_this46._element,"hidden.bs.toast");},this._element,this._config.animation)));}},{key:"dispose",value:function dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),_get(_getPrototypeOf(sn.prototype),"dispose",this).call(this);}},{key:"_getConfig",value:function _getConfig(e){return e=_objectSpread(_objectSpread(_objectSpread({},rn),B.getDataAttributes(this._element)),"object"==_typeof(e)&&e?e:{}),s("toast",e,this.constructor.DefaultType),e;}},{key:"_maybeScheduleHide",value:function _maybeScheduleHide(){var _this47=this;this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(function(){_this47.hide();},this._config.delay)));}},{key:"_onInteraction",value:function _onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;}if(t)return void this._clearTimeout();var n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide();}},{key:"_setListeners",value:function _setListeners(){var _this48=this;D.on(this._element,"mouseover.bs.toast",function(e){return _this48._onInteraction(e,!0);}),D.on(this._element,"mouseout.bs.toast",function(e){return _this48._onInteraction(e,!1);}),D.on(this._element,"focusin.bs.toast",function(e){return _this48._onInteraction(e,!0);}),D.on(this._element,"focusout.bs.toast",function(e){return _this48._onInteraction(e,!1);});}},{key:"_clearTimeout",value:function _clearTimeout(){clearTimeout(this._timeout),this._timeout=null;}}],[{key:"DefaultType",get:function get(){return on;}},{key:"Default",get:function get(){return rn;}},{key:"NAME",get:function get(){return"toast";}},{key:"jQueryInterface",value:function jQueryInterface(e){return this.each(function(){var t=sn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError("No method named \"".concat(e,"\""));t[e](this);}});}}]);return sn;}(H);return R(sn),g(sn),{Alert:q,Button:W,Carousel:J,Collapse:te,Dropdown:kt,Modal:Nt,Offcanvas:It,Popover:Gt,ScrollSpy:tn,Tab:nn,Toast:sn,Tooltip:Vt};}),/*!
   * perfect-scrollbar v1.5.0
   * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   */function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";var e=Math.abs,t=Math.floor;function n(e){return getComputedStyle(e);}function i(e,t){for(var n in t){var i=t[n];"number"==typeof i&&(i+="px"),e.style[n]=i;}return e;}function o(e){var t=document.createElement("div");return t.className=e,t;}function r(e,t){if(!b)throw new Error("No element matching method supported");return b.call(e,t);}function s(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e);}function a(e,t){return Array.prototype.filter.call(e.children,function(e){return r(e,t);});}function l(e,t){var n=e.element.classList,i=x.state.scrolling(t);n.contains(i)?clearTimeout(w[t]):n.add(i);}function c(e,t){w[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(x.state.scrolling(t));},e.settings.scrollingThreshold);}function u(e,t){l(e,t),c(e,t);}function p(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t;}function h(e,t,n,i,o){var r;if(void 0===i&&(i=!0),void 0===o&&(o=!1),"top"===t)r=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");r=["contentWidth","containerWidth","scrollLeft","x","left","right"];}!function(e,t,n,i,o){var r=n[0],s=n[1],a=n[2],l=n[3],c=n[4],h=n[5];void 0===i&&(i=!0),void 0===o&&(o=!1);var f=e.element;e.reach[l]=null,1>f[a]&&(e.reach[l]="start"),f[a]>e[r]-e[s]-1&&(e.reach[l]="end"),t&&(f.dispatchEvent(p("ps-scroll-"+l)),0>t?f.dispatchEvent(p("ps-scroll-"+c)):0<t&&f.dispatchEvent(p("ps-scroll-"+h)),i&&u(e,l)),e.reach[l]&&(t||o)&&f.dispatchEvent(p("ps-"+l+"-reach-"+e.reach[l]));}(e,n,r,i,o);}function f(e){return parseInt(e,10)||0;}function d(e){return r(e,"input,[contenteditable]")||r(e,"select,[contenteditable]")||r(e,"textarea,[contenteditable]")||r(e,"button,[contenteditable]");}function g(e){var n=Math.ceil,i=e.element,o=t(i.scrollTop),r=i.getBoundingClientRect();e.containerWidth=n(r.width),e.containerHeight=n(r.height),e.contentWidth=i.scrollWidth,e.contentHeight=i.scrollHeight,i.contains(e.scrollbarXRail)||(a(i,x.element.rail("x")).forEach(function(e){return s(e);}),i.appendChild(e.scrollbarXRail)),i.contains(e.scrollbarYRail)||(a(i,x.element.rail("y")).forEach(function(e){return s(e);}),i.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=m(e,f(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=f((e.negativeScrollAdjustment+i.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=m(e,f(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=f(o*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),y(i,e),e.scrollbarXActive?i.classList.add(x.state.active("x")):(i.classList.remove(x.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,i.scrollLeft=!0===e.isRtl?e.contentWidth:0),e.scrollbarYActive?i.classList.add(x.state.active("y")):(i.classList.remove(x.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,i.scrollTop=0);}function m(e,t){var n=Math.min,i=Math.max;return e.settings.minScrollbarLength&&(t=i(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=n(t,e.settings.maxScrollbarLength)),t;}function y(e,n){var o={width:n.railXWidth},r=t(e.scrollTop);o.left=n.isRtl?n.negativeScrollAdjustment+e.scrollLeft+n.containerWidth-n.contentWidth:e.scrollLeft,n.isScrollbarXUsingBottom?o.bottom=n.scrollbarXBottom-r:o.top=n.scrollbarXTop+r,i(n.scrollbarXRail,o);var s={top:r,height:n.railYHeight};n.isScrollbarYUsingRight?n.isRtl?s.right=n.contentWidth-(n.negativeScrollAdjustment+e.scrollLeft)-n.scrollbarYRight-n.scrollbarYOuterWidth-9:s.right=n.scrollbarYRight-e.scrollLeft:n.isRtl?s.left=n.negativeScrollAdjustment+e.scrollLeft+2*n.containerWidth-n.contentWidth-n.scrollbarYLeft-n.scrollbarYOuterWidth:s.left=n.scrollbarYLeft+e.scrollLeft,i(n.scrollbarYRail,s),i(n.scrollbarX,{left:n.scrollbarXLeft,width:n.scrollbarXWidth-n.railBorderXWidth}),i(n.scrollbarY,{top:n.scrollbarYTop,height:n.scrollbarYHeight-n.railBorderYWidth});}function v(e,t){function n(t){t.touches&&t.touches[0]&&(t[a]=t.touches[0].pageY),y[f]=v+w*(t[a]-b),l(e,d),g(e),t.stopPropagation(),t.preventDefault();}function i(){c(e,d),e[m].classList.remove(x.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",n);}function o(t,o){v=y[f],o&&t.touches&&(t[a]=t.touches[0].pageY),b=t[a],w=(e[s]-e[r])/(e[u]-e[h]),o?e.event.bind(e.ownerDocument,"touchmove",n):(e.event.bind(e.ownerDocument,"mousemove",n),e.event.once(e.ownerDocument,"mouseup",i),t.preventDefault()),e[m].classList.add(x.state.clicking),t.stopPropagation();}var r=t[0],s=t[1],a=t[2],u=t[3],p=t[4],h=t[5],f=t[6],d=t[7],m=t[8],y=e.element,v=null,b=null,w=null;e.event.bind(e[p],"mousedown",function(e){o(e);}),e.event.bind(e[p],"touchstart",function(e){o(e,!0);});}var b="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),x={main:"ps",rtl:"ps__rtl",element:{thumb:function thumb(e){return"ps__thumb-"+e;},rail:function rail(e){return"ps__rail-"+e;},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function active(e){return"ps--active-"+e;},scrolling:function scrolling(e){return"ps--scrolling-"+e;}}},w={x:null,y:null},_=function _(e){this.element=e,this.handlers={};},k={isEmpty:{configurable:!0}};_.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1);},_.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter(function(i){return!(!t||i===t)||(n.element.removeEventListener(e,i,!1),!1);});},_.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e);},k.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return 0===e.handlers[t].length;});},Object.defineProperties(_.prototype,k);var E=function E(){this.eventElements=[];};E.prototype.eventElement=function(e){var t=this.eventElements.filter(function(t){return t.element===e;})[0];return t||(t=new _(e),this.eventElements.push(t)),t;},E.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n);},E.prototype.unbind=function(e,t,n){var i=this.eventElement(e);i.unbind(t,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1);},E.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll();}),this.eventElements=[];},E.prototype.once=function(e,t,n){var i=this.eventElement(e),o=function o(e){i.unbind(t,o),n(e);};i.bind(t,o);};var T={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&0<window.navigator.maxTouchPoints||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},S={"click-rail":function clickRail(e){e.element,e.event.bind(e.scrollbarY,"mousedown",function(e){return e.stopPropagation();}),e.event.bind(e.scrollbarYRail,"mousedown",function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,g(e),t.stopPropagation();}),e.event.bind(e.scrollbarX,"mousedown",function(e){return e.stopPropagation();}),e.event.bind(e.scrollbarXRail,"mousedown",function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,g(e),t.stopPropagation();});},"drag-thumb":function dragThumb(e){v(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),v(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"]);},keyboard:function keyboard(e){var n=e.element,i=function i(){return r(n,":hover");},o=function o(){return r(e.scrollbarX,":focus")||r(e.scrollbarY,":focus");};e.event.bind(e.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(i()||o())){var s=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(s){if("IFRAME"===s.tagName)s=s.contentDocument.activeElement;else for(;s.shadowRoot;)s=s.shadowRoot.activeElement;if(d(s))return;}var a=0,l=0;switch(r.which){case 37:a=r.metaKey?-e.contentWidth:r.altKey?-e.containerWidth:-30;break;case 38:l=r.metaKey?e.contentHeight:r.altKey?e.containerHeight:30;break;case 39:a=r.metaKey?e.contentWidth:r.altKey?e.containerWidth:30;break;case 40:l=r.metaKey?-e.contentHeight:r.altKey?-e.containerHeight:-30;break;case 32:l=r.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:l=e.containerHeight;break;case 34:l=-e.containerHeight;break;case 36:l=e.contentHeight;break;case 35:l=-e.contentHeight;break;default:return;}e.settings.suppressScrollX&&0!==a||e.settings.suppressScrollY&&0!==l||(n.scrollTop-=l,n.scrollLeft+=a,g(e),function(i,o){var r=t(n.scrollTop);if(0===i){if(!e.scrollbarYActive)return!1;if(0===r&&0<o||r>=e.contentHeight-e.containerHeight&&0>o)return!e.settings.wheelPropagation;}var s=n.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===s&&0>i||s>=e.contentWidth-e.containerWidth&&0<i)return!e.settings.wheelPropagation;}return!0;}(a,l)&&r.preventDefault());}});},wheel:function wheel(i){function o(e,t,i){if(!T.isWebKit&&s.querySelector("select:focus"))return!0;if(!s.contains(e))return!1;for(var o=e;o&&o!==s;){if(o.classList.contains(x.element.consuming))return!0;var r=n(o);if(i&&r.overflowY.match(/(scroll|auto)/)){var a=o.scrollHeight-o.clientHeight;if(0<a&&(0<o.scrollTop&&0>i||o.scrollTop<a&&0<i))return!0;}if(t&&r.overflowX.match(/(scroll|auto)/)){var l=o.scrollWidth-o.clientWidth;if(0<l&&(0<o.scrollLeft&&0>t||o.scrollLeft<l&&0<t))return!0;}o=o.parentNode;}return!1;}function r(n){var r=function(e){var t=e.deltaX,n=-1*e.deltaY;return(void 0===t||void 0===n)&&(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!=t&&n!=n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n];}(n),a=r[0],l=r[1];if(!o(n.target,a,l)){var c=!1;i.settings.useBothWheelAxes?i.scrollbarYActive&&!i.scrollbarXActive?(l?s.scrollTop-=l*i.settings.wheelSpeed:s.scrollTop+=a*i.settings.wheelSpeed,c=!0):i.scrollbarXActive&&!i.scrollbarYActive&&(a?s.scrollLeft+=a*i.settings.wheelSpeed:s.scrollLeft-=l*i.settings.wheelSpeed,c=!0):(s.scrollTop-=l*i.settings.wheelSpeed,s.scrollLeft+=a*i.settings.wheelSpeed),g(i),(c=c||function(n,o){var r=t(s.scrollTop),a=0===s.scrollTop,l=r+s.offsetHeight===s.scrollHeight,c=0===s.scrollLeft,u=s.scrollLeft+s.offsetWidth===s.scrollWidth;return!(e(o)>e(n)?a||l:c||u)||!i.settings.wheelPropagation;}(a,l))&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault());}}var s=i.element;void 0===window.onwheel?void 0!==window.onmousewheel&&i.event.bind(s,"mousewheel",r):i.event.bind(s,"wheel",r);},touch:function touch(i){function o(n,o){var r=t(h.scrollTop),s=h.scrollLeft,a=e(n),l=e(o);if(l>a){if(0>o&&r===i.contentHeight-i.containerHeight||0<o&&0===r)return 0===window.scrollY&&0<o&&T.isChrome;}else if(a>l&&(0>n&&s===i.contentWidth-i.containerWidth||0<n&&0===s))return!0;return!0;}function r(e,t){h.scrollTop-=t,h.scrollLeft-=e,g(i);}function s(e){return e.targetTouches?e.targetTouches[0]:e;}function a(e){return!(e.pointerType&&"pen"===e.pointerType&&0===e.buttons||(!e.targetTouches||1!==e.targetTouches.length)&&(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE));}function l(e){if(a(e)){var t=s(e);f.pageX=t.pageX,f.pageY=t.pageY,d=new Date().getTime(),null!==y&&clearInterval(y);}}function c(e,t,i){if(!h.contains(e))return!1;for(var o=e;o&&o!==h;){if(o.classList.contains(x.element.consuming))return!0;var r=n(o);if(i&&r.overflowY.match(/(scroll|auto)/)){var s=o.scrollHeight-o.clientHeight;if(0<s&&(0<o.scrollTop&&0>i||o.scrollTop<s&&0<i))return!0;}if(t&&r.overflowX.match(/(scroll|auto)/)){var a=o.scrollWidth-o.clientWidth;if(0<a&&(0<o.scrollLeft&&0>t||o.scrollLeft<a&&0<t))return!0;}o=o.parentNode;}return!1;}function u(e){if(a(e)){var t=s(e),n={pageX:t.pageX,pageY:t.pageY},i=n.pageX-f.pageX,l=n.pageY-f.pageY;if(c(e.target,i,l))return;r(i,l),f=n;var u=new Date().getTime(),p=u-d;0<p&&(m.x=i/p,m.y=l/p,d=u),o(i,l)&&e.preventDefault();}}function p(){i.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return i.isInitialized?void clearInterval(y):m.x||m.y?0.01>e(m.x)&&0.01>e(m.y)?void clearInterval(y):(r(30*m.x,30*m.y),m.x*=0.8,void(m.y*=0.8)):void clearInterval(y);},10));}if(T.supportsTouch||T.supportsIePointer){var h=i.element,f={},d=0,m={},y=null;T.supportsTouch?(i.event.bind(h,"touchstart",l),i.event.bind(h,"touchmove",u),i.event.bind(h,"touchend",p)):T.supportsIePointer&&(window.PointerEvent?(i.event.bind(h,"pointerdown",l),i.event.bind(h,"pointermove",u),i.event.bind(h,"pointerup",p)):window.MSPointerEvent&&(i.event.bind(h,"MSPointerDown",l),i.event.bind(h,"MSPointerMove",u),i.event.bind(h,"MSPointerUp",p)));}}},C=function C(e,r){var s=this;if(void 0===r&&(r={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var a in this.element=e,e.classList.add(x.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},r)this.settings[a]=r[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var l=function l(){return e.classList.add(x.state.focus);},c=function c(){return e.classList.remove(x.state.focus);};this.isRtl="rtl"===n(e).direction,!0===this.isRtl&&e.classList.add(x.rtl),this.isNegativeScroll=function(){var t,n=e.scrollLeft;return e.scrollLeft=-1,t=0>e.scrollLeft,e.scrollLeft=n,t;}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new E(),this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=o(x.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=o(x.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",l),this.event.bind(this.scrollbarX,"blur",c),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var u=n(this.scrollbarXRail);this.scrollbarXBottom=parseInt(u.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=f(u.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=f(u.borderLeftWidth)+f(u.borderRightWidth),i(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=f(u.marginLeft)+f(u.marginRight),i(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=o(x.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=o(x.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",l),this.event.bind(this.scrollbarY,"blur",c),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var p=n(this.scrollbarYRail);this.scrollbarYRight=parseInt(p.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=f(p.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var t=n(e);return f(t.width)+f(t.paddingLeft)+f(t.paddingRight)+f(t.borderLeftWidth)+f(t.borderRightWidth);}(this.scrollbarY):null,this.railBorderYWidth=f(p.borderTopWidth)+f(p.borderBottomWidth),i(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=f(p.marginTop)+f(p.marginBottom),i(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:0>=e.scrollLeft?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:0>=e.scrollTop?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(e){return S[e](s);}),this.lastScrollTop=t(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(e){return s.onScroll(e);}),g(this);};return C.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,i(this.scrollbarXRail,{display:"block"}),i(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=f(n(this.scrollbarXRail).marginLeft)+f(n(this.scrollbarXRail).marginRight),this.railYMarginHeight=f(n(this.scrollbarYRail).marginTop)+f(n(this.scrollbarYRail).marginBottom),i(this.scrollbarXRail,{display:"none"}),i(this.scrollbarYRail,{display:"none"}),g(this),h(this,"top",0,!1,!0),h(this,"left",0,!1,!0),i(this.scrollbarXRail,{display:""}),i(this.scrollbarYRail,{display:""}));},C.prototype.onScroll=function(){this.isAlive&&(g(this),h(this,"top",this.element.scrollTop-this.lastScrollTop),h(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=t(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft);},C.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1);},C.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/);}).join(" ");},C;}),function(e,t,n,i){"use strict";function o(e,t,n){return setTimeout(c(e,n),t);}function r(e,t,n){return!!Array.isArray(e)&&(s(e,n[t],n),!0);}function s(e,t,n){var o;if(e)if(e.forEach)e.forEach(t,n);else if(e.length!==i)for(o=0;o<e.length;)t.call(n,e[o],o,e),o++;else for(o in e)e.hasOwnProperty(o)&&t.call(n,e[o],o,e);}function a(t,n,i){var o="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=e.console&&(e.console.warn||e.console.log);return r&&r.call(e.console,o,i),t.apply(this,arguments);};}function l(e,t,n){var i,o=t.prototype;(i=e.prototype=Object.create(o)).constructor=e,i._super=o,n&&ie(i,n);}function c(e,t){return function(){return e.apply(t,arguments);};}function u(e,t){return _typeof(e)==se?e.apply(t&&t[0]||i,t):e;}function p(e,t){return e===i?t:e;}function h(e,t,n){s(m(t),function(t){e.addEventListener(t,n,!1);});}function f(e,t,n){s(m(t),function(t){e.removeEventListener(t,n,!1);});}function d(e,t){for(;e;){if(e==t)return!0;e=e.parentNode;}return!1;}function g(e,t){return e.indexOf(t)>-1;}function m(e){return e.trim().split(/\s+/g);}function y(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var i=0;i<e.length;){if(n&&e[i][n]==t||!n&&e[i]===t)return i;i++;}return-1;}function v(e){return Array.prototype.slice.call(e,0);}function b(e,t,n){for(var i=[],o=[],r=0;r<e.length;){var s=t?e[r][t]:e[r];y(o,s)<0&&i.push(e[r]),o[r]=s,r++;}return n&&(i=t?i.sort(function(e,n){return e[t]>n[t];}):i.sort()),i;}function x(e,t){for(var n,o,r=t[0].toUpperCase()+t.slice(1),s=0;s<oe.length;){if((o=(n=oe[s])?n+r:t)in e)return o;s++;}return i;}function w(t){var n=t.ownerDocument||t;return n.defaultView||n.parentWindow||e;}function _(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){u(e.options.enable,[e])&&n.handler(t);},this.init();}function k(e,t,n){var i=n.pointers.length,o=n.changedPointers.length,r=t&be&&i-o==0,s=t&(we|_e)&&i-o==0;n.isFirst=!!r,n.isFinal=!!s,r&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,i=t.pointers,o=i.length;n.firstInput||(n.firstInput=T(t)),o>1&&!n.firstMultiple?n.firstMultiple=T(t):1===o&&(n.firstMultiple=!1);var r=n.firstInput,s=n.firstMultiple,a=s?s.center:r.center,l=t.center=S(i);t.timeStamp=ce(),t.deltaTime=t.timeStamp-r.timeStamp,t.angle=L(a,l),t.distance=O(a,l),function(e,t){var n=t.center,i=e.offsetDelta||{},o=e.prevDelta||{},r=e.prevInput||{};t.eventType!==be&&r.eventType!==we||(o=e.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=e.offsetDelta={x:n.x,y:n.y}),t.deltaX=o.x+(n.x-i.x),t.deltaY=o.y+(n.y-i.y);}(n,t),t.offsetDirection=A(t.deltaX,t.deltaY);var c=C(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=c.x,t.overallVelocityY=c.y,t.overallVelocity=le(c.x)>le(c.y)?c.x:c.y,t.scale=s?function(e,t){return O(t[0],t[1],je)/O(e[0],e[1],je);}(s.pointers,i):1,t.rotation=s?function(e,t){return L(t[1],t[0],je)+L(e[1],e[0],je);}(s.pointers,i):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,E(n,t);var u=e.element;d(t.srcEvent.target,u)&&(u=t.srcEvent.target),t.target=u;}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n;}function E(e,t){var n,o,r,s,a=e.lastInterval||t,l=t.timeStamp-a.timeStamp;if(t.eventType!=_e&&(l>ve||a.velocity===i)){var c=t.deltaX-a.deltaX,u=t.deltaY-a.deltaY,p=C(l,c,u);o=p.x,r=p.y,n=le(p.x)>le(p.y)?p.x:p.y,s=A(c,u),e.lastInterval=t;}else n=a.velocity,o=a.velocityX,r=a.velocityY,s=a.direction;t.velocity=n,t.velocityX=o,t.velocityY=r,t.direction=s;}function T(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:ae(e.pointers[n].clientX),clientY:ae(e.pointers[n].clientY)},n++;return{timeStamp:ce(),pointers:t,center:S(t),deltaX:e.deltaX,deltaY:e.deltaY};}function S(e){var t=e.length;if(1===t)return{x:ae(e[0].clientX),y:ae(e[0].clientY)};for(var n=0,i=0,o=0;t>o;)n+=e[o].clientX,i+=e[o].clientY,o++;return{x:ae(n/t),y:ae(i/t)};}function C(e,t,n){return{x:t/e||0,y:n/e||0};}function A(e,t){return e===t?ke:le(e)>=le(t)?0>e?Ee:Te:0>t?Se:Ce;}function O(e,t,n){n||(n=Me);var i=t[n[0]]-e[n[0]],o=t[n[1]]-e[n[1]];return Math.sqrt(i*i+o*o);}function L(e,t,n){n||(n=Me);var i=t[n[0]]-e[n[0]],o=t[n[1]]-e[n[1]];return 180*Math.atan2(o,i)/Math.PI;}function M(){this.evEl=De,this.evWin=Pe,this.pressed=!1,_.apply(this,arguments);}function j(){this.evEl=Re,this.evWin=qe,_.apply(this,arguments),this.store=this.manager.session.pointerEvents=[];}function N(){this.evTarget=ze,this.evWin=Fe,this.started=!1,_.apply(this,arguments);}function D(e,t){var n=v(e.touches),i=v(e.changedTouches);return t&(we|_e)&&(n=b(n.concat(i),"identifier",!0)),[n,i];}function P(){this.evTarget=Ue,this.targetIds={},_.apply(this,arguments);}function I(e,t){var n=v(e.touches),i=this.targetIds;if(t&(be|xe)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var o,r,s=v(e.changedTouches),a=[],l=this.target;if(r=n.filter(function(e){return d(e.target,l);}),t===be)for(o=0;o<r.length;)i[r[o].identifier]=!0,o++;for(o=0;o<s.length;)i[s[o].identifier]&&a.push(s[o]),t&(we|_e)&&delete i[s[o].identifier],o++;return a.length?[b(r.concat(a),"identifier",!0),a]:void 0;}function H(){_.apply(this,arguments);var e=c(this.handler,this);this.touch=new P(this.manager,e),this.mouse=new M(this.manager,e),this.primaryTouch=null,this.lastTouches=[];}function R(e,t){e&be?(this.primaryTouch=t.changedPointers[0].identifier,q.call(this,t)):e&(we|_e)&&q.call(this,t);}function q(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var e=i.indexOf(n);e>-1&&i.splice(e,1);},Xe);}}function W(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var o=this.lastTouches[i],r=Math.abs(t-o.x),s=Math.abs(n-o.y);if(Ye>=r&&Ye>=s)return!0;}return!1;}function z(e,t){this.manager=e,this.set(t);}function F(e){this.options=ie({},this.defaults,e||{}),this.id=he++,this.manager=null,this.options.enable=p(this.options.enable,!0),this.state=nt,this.simultaneous={},this.requireFail=[];}function B(e){return e&at?"cancel":e&rt?"end":e&ot?"move":e&it?"start":"";}function U(e){return e==Ce?"down":e==Se?"up":e==Ee?"left":e==Te?"right":"";}function X(e,t){var n=t.manager;return n?n.get(e):e;}function Y(){F.apply(this,arguments);}function V(){Y.apply(this,arguments),this.pX=null,this.pY=null;}function $(){Y.apply(this,arguments);}function K(){F.apply(this,arguments),this._timer=null,this._input=null;}function Q(){Y.apply(this,arguments);}function G(){Y.apply(this,arguments);}function J(){F.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0;}function Z(e,t){return(t=t||{}).recognizers=p(t.recognizers,Z.defaults.preset),new ee(e,t);}function ee(e,t){this.options=ie({},Z.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=function(e){return new(e.options.inputClass||(de?j:ge?P:fe?H:M))(e,k);}(this),this.touchAction=new z(this,this.options.touchAction),te(this,!0),s(this.options.recognizers,function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3]);},this);}function te(e,t){var n,i=e.element;i.style&&(s(e.options.cssProps,function(o,r){n=x(i.style,r),t?(e.oldCssProps[n]=i.style[n],i.style[n]=o):i.style[n]=e.oldCssProps[n]||"";}),t||(e.oldCssProps={}));}function ne(e,n){var i=t.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=n,n.target.dispatchEvent(i);}var ie,oe=["","webkit","Moz","MS","ms","o"],re=t.createElement("div"),se="function",ae=Math.round,le=Math.abs,ce=Date.now;ie="function"!=typeof Object.assign?function(e){if(e===i||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(o!==i&&null!==o)for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r]);}return t;}:Object.assign;var ue=a(function(e,t,n){for(var o=Object.keys(t),r=0;r<o.length;)(!n||n&&e[o[r]]===i)&&(e[o[r]]=t[o[r]]),r++;return e;},"extend","Use `assign`."),pe=a(function(e,t){return ue(e,t,!0);},"merge","Use `assign`."),he=1,fe=("ontouchstart"in e),de=x(e,"PointerEvent")!==i,ge=fe&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),me="touch",ye="mouse",ve=25,be=1,xe=2,we=4,_e=8,ke=1,Ee=2,Te=4,Se=8,Ce=16,Ae=Ee|Te,Oe=Se|Ce,Le=Ae|Oe,Me=["x","y"],je=["clientX","clientY"];_.prototype={handler:function handler(){},init:function init(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(w(this.element),this.evWin,this.domHandler);},destroy:function destroy(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(w(this.element),this.evWin,this.domHandler);}};var Ne={mousedown:be,mousemove:xe,mouseup:we},De="mousedown",Pe="mousemove mouseup";l(M,_,{handler:function handler(e){var t=Ne[e.type];t&be&&0===e.button&&(this.pressed=!0),t&xe&&1!==e.which&&(t=we),this.pressed&&(t&we&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:ye,srcEvent:e}));}});var Ie={pointerdown:be,pointermove:xe,pointerup:we,pointercancel:_e,pointerout:_e},He={2:me,3:"pen",4:ye,5:"kinect"},Re="pointerdown",qe="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(Re="MSPointerDown",qe="MSPointerMove MSPointerUp MSPointerCancel"),l(j,_,{handler:function handler(e){var t=this.store,n=!1,i=e.type.toLowerCase().replace("ms",""),o=Ie[i],r=He[e.pointerType]||e.pointerType,s=r==me,a=y(t,e.pointerId,"pointerId");o&be&&(0===e.button||s)?0>a&&(t.push(e),a=t.length-1):o&(we|_e)&&(n=!0),0>a||(t[a]=e,this.callback(this.manager,o,{pointers:t,changedPointers:[e],pointerType:r,srcEvent:e}),n&&t.splice(a,1));}});var We={touchstart:be,touchmove:xe,touchend:we,touchcancel:_e},ze="touchstart",Fe="touchstart touchmove touchend touchcancel";l(N,_,{handler:function handler(e){var t=We[e.type];if(t===be&&(this.started=!0),this.started){var n=D.call(this,e,t);t&(we|_e)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:me,srcEvent:e});}}});var Be={touchstart:be,touchmove:xe,touchend:we,touchcancel:_e},Ue="touchstart touchmove touchend touchcancel";l(P,_,{handler:function handler(e){var t=Be[e.type],n=I.call(this,e,t);n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:me,srcEvent:e});}});var Xe=2500,Ye=25;l(H,_,{handler:function handler(e,t,n){var i=n.pointerType==me,o=n.pointerType==ye;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)R.call(this,t,n);else if(o&&W.call(this,n))return;this.callback(e,t,n);}},destroy:function destroy(){this.touch.destroy(),this.mouse.destroy();}});var Ve=x(re.style,"touchAction"),$e=Ve!==i,Ke="compute",Qe="auto",Ge="manipulation",Je="none",Ze="pan-x",et="pan-y",tt=function(){if(!$e)return!1;var t={},n=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!n||e.CSS.supports("touch-action",i);}),t;}();z.prototype={set:function set(e){e==Ke&&(e=this.compute()),$e&&this.manager.element.style&&tt[e]&&(this.manager.element.style[Ve]=e),this.actions=e.toLowerCase().trim();},update:function update(){this.set(this.manager.options.touchAction);},compute:function compute(){var e=[];return s(this.manager.recognizers,function(t){u(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()));}),function(e){if(g(e,Je))return Je;var t=g(e,Ze),n=g(e,et);return t&&n?Je:t||n?t?Ze:et:g(e,Ge)?Ge:Qe;}(e.join(" "));},preventDefaults:function preventDefaults(e){var t=e.srcEvent,n=e.offsetDirection;if(!this.manager.session.prevented){var i=this.actions,o=g(i,Je)&&!tt[Je],r=g(i,et)&&!tt[et],s=g(i,Ze)&&!tt[Ze];if(o){var a=1===e.pointers.length,l=e.distance<2,c=e.deltaTime<250;if(a&&l&&c)return;}return s&&r?void 0:o||r&&n&Ae||s&&n&Oe?this.preventSrc(t):void 0;}t.preventDefault();},preventSrc:function preventSrc(e){this.manager.session.prevented=!0,e.preventDefault();}};var nt=1,it=2,ot=4,rt=8,st=rt,at=16,lt=32;F.prototype={defaults:{},set:function set(e){return ie(this.options,e),this.manager&&this.manager.touchAction.update(),this;},recognizeWith:function recognizeWith(e){if(r(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=X(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this;},dropRecognizeWith:function dropRecognizeWith(e){return r(e,"dropRecognizeWith",this)||(e=X(e,this),delete this.simultaneous[e.id]),this;},requireFailure:function requireFailure(e){if(r(e,"requireFailure",this))return this;var t=this.requireFail;return-1===y(t,e=X(e,this))&&(t.push(e),e.requireFailure(this)),this;},dropRequireFailure:function dropRequireFailure(e){if(r(e,"dropRequireFailure",this))return this;e=X(e,this);var t=y(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this;},hasRequireFailures:function hasRequireFailures(){return this.requireFail.length>0;},canRecognizeWith:function canRecognizeWith(e){return!!this.simultaneous[e.id];},emit:function emit(e){function t(t){n.manager.emit(t,e);}var n=this,i=this.state;rt>i&&t(n.options.event+B(i)),t(n.options.event),e.additionalEvent&&t(e.additionalEvent),i>=rt&&t(n.options.event+B(i));},tryEmit:function tryEmit(e){return this.canEmit()?this.emit(e):void(this.state=lt);},canEmit:function canEmit(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(lt|nt)))return!1;e++;}return!0;},recognize:function recognize(e){var t=ie({},e);return u(this.options.enable,[this,t])?(this.state&(st|at|lt)&&(this.state=nt),this.state=this.process(t),void(this.state&(it|ot|rt|at)&&this.tryEmit(t))):(this.reset(),void(this.state=lt));},process:function process(e){},getTouchAction:function getTouchAction(){},reset:function reset(){}},l(Y,F,{defaults:{pointers:1},attrTest:function attrTest(e){var t=this.options.pointers;return 0===t||e.pointers.length===t;},process:function process(e){var t=this.state,n=e.eventType,i=t&(it|ot),o=this.attrTest(e);return i&&(n&_e||!o)?t|at:i||o?n&we?t|rt:t&it?t|ot:it:lt;}}),l(V,Y,{defaults:{event:"pan",threshold:10,pointers:1,direction:Le},getTouchAction:function getTouchAction(){var e=this.options.direction,t=[];return e&Ae&&t.push(et),e&Oe&&t.push(Ze),t;},directionTest:function directionTest(e){var t=this.options,n=!0,i=e.distance,o=e.direction,r=e.deltaX,s=e.deltaY;return o&t.direction||(t.direction&Ae?(o=0===r?ke:0>r?Ee:Te,n=r!=this.pX,i=Math.abs(e.deltaX)):(o=0===s?ke:0>s?Se:Ce,n=s!=this.pY,i=Math.abs(e.deltaY))),e.direction=o,n&&i>t.threshold&&o&t.direction;},attrTest:function attrTest(e){return Y.prototype.attrTest.call(this,e)&&(this.state&it||!(this.state&it)&&this.directionTest(e));},emit:function emit(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=U(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e);}}),l($,Y,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[Je];},attrTest:function attrTest(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&it);},emit:function emit(e){if(1!==e.scale){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t;}this._super.emit.call(this,e);}}),l(K,F,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function getTouchAction(){return[Qe];},process:function process(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,r=e.deltaTime>t.time;if(this._input=e,!i||!n||e.eventType&(we|_e)&&!r)this.reset();else if(e.eventType&be)this.reset(),this._timer=o(function(){this.state=st,this.tryEmit();},t.time,this);else if(e.eventType&we)return st;return lt;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(e){this.state===st&&(e&&e.eventType&we?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=ce(),this.manager.emit(this.options.event,this._input)));}}),l(Q,Y,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[Je];},attrTest:function attrTest(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&it);}}),l(G,Y,{defaults:{event:"swipe",threshold:10,velocity:0.3,direction:Ae|Oe,pointers:1},getTouchAction:function getTouchAction(){return V.prototype.getTouchAction.call(this);},attrTest:function attrTest(e){var t,n=this.options.direction;return n&(Ae|Oe)?t=e.overallVelocity:n&Ae?t=e.overallVelocityX:n&Oe&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&le(t)>this.options.velocity&&e.eventType&we;},emit:function emit(e){var t=U(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e);}}),l(J,F,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function getTouchAction(){return[Ge];},process:function process(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,r=e.deltaTime<t.time;if(this.reset(),e.eventType&be&&0===this.count)return this.failTimeout();if(i&&r&&n){if(e.eventType!=we)return this.failTimeout();var s=!this.pTime||e.timeStamp-this.pTime<t.interval,a=!this.pCenter||O(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,a&&s?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=o(function(){this.state=st,this.tryEmit();},t.interval,this),it):st;}return lt;},failTimeout:function failTimeout(){return this._timer=o(function(){this.state=lt;},this.options.interval,this),lt;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(){this.state==st&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input));}}),Z.VERSION="2.0.8",Z.defaults={domEvents:!1,touchAction:Ke,enable:!0,inputTarget:null,inputClass:null,preset:[[Q,{enable:!1}],[$,{enable:!1},["rotate"]],[G,{direction:Ae}],[V,{direction:Ae},["swipe"]],[J],[J,{event:"doubletap",taps:2},["tap"]],[K]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ee.prototype={set:function set(e){return ie(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this;},stop:function stop(e){this.session.stopped=e?2:1;},recognize:function recognize(e){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(e);var n,i=this.recognizers,o=t.curRecognizer;(!o||o&&o.state&st)&&(o=t.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===t.stopped||o&&n!=o&&!n.canRecognizeWith(o)?n.reset():n.recognize(e),!o&&n.state&(it|ot|rt)&&(o=t.curRecognizer=n),r++;}},get:function get(e){if(e instanceof F)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null;},add:function add(e){if(r(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e;},remove:function remove(e){if(r(e,"remove",this))return this;if(e=this.get(e)){var t=this.recognizers,n=y(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update());}return this;},on:function on(e,t){if(e!==i&&t!==i){var n=this.handlers;return s(m(e),function(e){n[e]=n[e]||[],n[e].push(t);}),this;}},off:function off(e,t){if(e!==i){var n=this.handlers;return s(m(e),function(e){t?n[e]&&n[e].splice(y(n[e],t),1):delete n[e];}),this;}},emit:function emit(e,t){this.options.domEvents&&ne(e,t);var n=this.handlers[e]&&this.handlers[e].slice();if(n&&n.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault();};for(var i=0;i<n.length;)n[i](t),i++;}},destroy:function destroy(){this.element&&te(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null;}},ie(Z,{INPUT_START:be,INPUT_MOVE:xe,INPUT_END:we,INPUT_CANCEL:_e,STATE_POSSIBLE:nt,STATE_BEGAN:it,STATE_CHANGED:ot,STATE_ENDED:rt,STATE_RECOGNIZED:st,STATE_CANCELLED:at,STATE_FAILED:lt,DIRECTION_NONE:ke,DIRECTION_LEFT:Ee,DIRECTION_RIGHT:Te,DIRECTION_UP:Se,DIRECTION_DOWN:Ce,DIRECTION_HORIZONTAL:Ae,DIRECTION_VERTICAL:Oe,DIRECTION_ALL:Le,Manager:ee,Input:_,TouchAction:z,TouchInput:P,MouseInput:M,PointerEventInput:j,TouchMouseInput:H,SingleTouchInput:N,Recognizer:F,AttrRecognizer:Y,Tap:J,Pan:V,Swipe:G,Pinch:$,Rotate:Q,Press:K,on:h,off:f,each:s,merge:pe,extend:ue,assign:ie,inherit:l,bindFn:c,prefixed:x}),(void 0!==e?e:"undefined"!=typeof self?self:{}).Hammer=Z, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(window,document),Unison=function(){"use strict";var e,t=window,n=document,i=n.head,o={},r=!1,s={parseMQ:function parseMQ(e){return t.getComputedStyle(e,null).getPropertyValue("font-family").replace(/"/g,"").replace(/'/g,"");},debounce:function debounce(e,t,n){var i;return function(){var o=this,r=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(o,r);},t),n&&!i&&e.apply(o,r);};},isObject:function isObject(e){return"object"==_typeof(e);},isUndefined:function isUndefined(e){return void 0===e;}},a={on:function on(e,t){s.isObject(o[e])||(o[e]=[]),o[e].push(t);},emit:function emit(e,t){if(s.isObject(o[e]))for(var n=o[e].slice(),i=0;i<n.length;i++)n[i].call(this,t);}},l={all:function all(){for(var e={},t=s.parseMQ(n.querySelector("title")).split(","),i=0;i<t.length;i++){var o=t[i].trim().split(" ");e[o[0]]=o[1];}return r?e:null;},now:function now(e){var t=s.parseMQ(i).split(" "),n={name:t[0],width:t[1]};return r?s.isUndefined(e)?n:e(n):null;},update:function update(){l.now(function(t){t.name!==e&&(a.emit(t.name),a.emit("change",t),e=t.name);});}};return t.onresize=s.debounce(l.update,100),n.addEventListener("DOMContentLoaded",function(){r="none"!==t.getComputedStyle(i,null).getPropertyValue("clear"),l.update();}),{fetch:{all:l.all,now:l.now},on:a.on,emit:a.emit,util:{debounce:s.debounce,isObject:s.isObject}};}(),function(){"use strict";function e(e){function t(t,i){var r,d,g=t==window,m=i&&void 0!==i.message?i.message:void 0;if(!(i=e.extend({},e.blockUI.defaults,i||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),r=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),d=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),m=void 0===m?i.message:m,g&&h&&n(window,{fadeOut:0}),m&&"string"!=typeof m&&(m.parentNode||m.jquery)){var y=m.jquery?m[0]:m,v={};e(t).data("blockUI.history",v),v.el=y,v.parent=y.parentNode,v.display=y.style.display,v.position=y.style.position,v.parent&&v.parent.removeChild(y);}e(t).data("blockUI.onUnblock",i.onUnblock);var b,x,w,_,k=i.baseZ;b=e(c||i.forceIframe?'<iframe class="blockUI" style="z-index:'+k++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),x=e(i.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+k++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+k++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&g?(_='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(k+10)+';display:none;position:fixed">',i.title&&(_+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),_+='<div class="ui-widget-content ui-dialog-content"></div>',_+="</div>"):i.theme?(_='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(k+10)+';display:none;position:absolute">',i.title&&(_+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),_+='<div class="ui-widget-content ui-dialog-content"></div>',_+="</div>"):_=g?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(k+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(k+10)+';display:none;position:absolute"></div>',w=e(_),m&&(i.theme?(w.css(d),w.addClass("ui-widget-content")):w.css(r)),i.theme||x.css(i.overlayCSS),x.css("position",g?"fixed":"absolute"),(c||i.forceIframe)&&b.css("opacity",0);var E=[b,x,w],T=e(g?"body":t);e.each(E,function(){this.appendTo(T);}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var S=p&&(!e.support.boxModel||e("object,embed",g?null:t).length>0);if(u||S){if(g&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!g)var C=a(t,"borderTopWidth"),A=a(t,"borderLeftWidth"),O=C?"(0 - "+C+")":0,L=A?"(0 - "+A+")":0;e.each(E,function(e,t){var n=t[0].style;if(n.position="absolute",2>e)g?n.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):n.setExpression("height",'this.parentNode.offsetHeight + "px"'),g?n.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):n.setExpression("width",'this.parentNode.offsetWidth + "px"'),L&&n.setExpression("left",L),O&&n.setExpression("top",O);else if(i.centerY)g&&n.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),n.marginTop=0;else if(!i.centerY&&g){var o="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(i.css&&i.css.top?parseInt(i.css.top,10):0)+') + "px"';n.setExpression("top",o);}});}if(m&&(i.theme?w.find(".ui-widget-content").append(m):w.append(m),(m.jquery||m.nodeType)&&e(m).show()),(c||i.forceIframe)&&i.showOverlay&&b.show(),i.fadeIn){var M=i.onBlock?i.onBlock:l,j=i.showOverlay&&!m?M:l,N=m?M:l;i.showOverlay&&x._fadeIn(i.fadeIn,j),m&&w._fadeIn(i.fadeIn,N);}else i.showOverlay&&x.show(),m&&w.show(),i.onBlock&&i.onBlock.bind(w)();if(o(1,t,i),g?(h=w[0],f=e(i.focusableElements,h),i.focusInput&&setTimeout(s,20)):function(e,t,n){var i=e.parentNode,o=e.style,r=(i.offsetWidth-e.offsetWidth)/2-a(i,"borderLeftWidth"),s=(i.offsetHeight-e.offsetHeight)/2-a(i,"borderTopWidth");t&&(o.left=r>0?r+"px":"0"),n&&(o.top=s>0?s+"px":"0");}(w[0],i.centerX,i.centerY),i.timeout){var D=setTimeout(function(){g?e.unblockUI(i):e(t).unblock(i);},i.timeout);e(t).data("blockUI.timeout",D);}}}function n(t,n){var r,s,a=t==window,l=e(t),c=l.data("blockUI.history"),u=l.data("blockUI.timeout");u&&(clearTimeout(u),l.removeData("blockUI.timeout")),n=e.extend({},e.blockUI.defaults,n||{}),o(0,t,n),null===n.onUnblock&&(n.onUnblock=l.data("blockUI.onUnblock"),l.removeData("blockUI.onUnblock")),s=a?e("body").children().filter(".blockUI").add("body > .blockUI"):l.find(">.blockUI"),n.cursorReset&&(s.length>1&&(s[1].style.cursor=n.cursorReset),s.length>2&&(s[2].style.cursor=n.cursorReset)),a&&(h=f=null),n.fadeOut?(r=s.length,s.stop().fadeOut(n.fadeOut,function(){0==--r&&i(s,c,n,t);})):i(s,c,n,t);}function i(t,n,i,o){var r=e(o);if(!r.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this);}),n&&n.el&&(n.el.style.display=n.display,n.el.style.position=n.position,n.el.style.cursor="default",n.parent&&n.parent.appendChild(n.el),r.removeData("blockUI.history")),r.data("blockUI.static")&&r.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(o,i);var s=e(document.body),a=s.width(),l=s[0].style.width;s.width(a-1).width(a),s[0].style.width=l;}}function o(t,n,i){var o=n==window,s=e(n);if((t||(!o||h)&&(o||s.data("blockUI.isBlocked")))&&(s.data("blockUI.isBlocked",t),o&&i.bindEvents&&(!t||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,i,r):e(document).unbind(a,r);}}function r(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&h&&t.data.constrainTabKey){var n=f,i=!t.shiftKey&&t.target===n[n.length-1],o=t.shiftKey&&t.target===n[0];if(i||o)return setTimeout(function(){s(o);},10),!1;}var r=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&r.onOverlayClick&&r.onOverlayClick(t),a.parents("div."+r.blockMsgClass).length>0||0===a.parents().children().filter("div.blockUI").length;}function s(e){if(f){var t=f[!0===e?f.length-1:0];t&&t.focus();}}function a(t,n){return parseInt(e.css(t,n),10)||0;}e.fn._fadeIn=e.fn.fadeIn;var l=e.noop||function(){},c=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),p=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e);},e.unblockUI=function(e){n(window,e);},e.growlUI=function(t,n,i,o){var r=e('<div class="growlUI"></div>');t&&r.append("<h1>"+t+"</h1>"),n&&r.append("<h2>"+n+"</h2>"),void 0===i&&(i=3e3);var s=function s(t){t=t||{},e.blockUI({message:r,fadeIn:void 0!==t.fadeIn?t.fadeIn:700,fadeOut:void 0!==t.fadeOut?t.fadeOut:1e3,timeout:void 0!==t.timeout?t.timeout:i,centerY:!1,showOverlay:!1,onUnblock:o,css:e.blockUI.defaults.growlCSS});};s(),r.css("opacity"),r.mouseover(function(){s({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1);}).mouseout(function(){e(".blockMsg").fadeOut(1e3);});},e.fn.block=function(n){if(this[0]===window)return e.blockUI(n),this;var i=e.extend({},e.blockUI.defaults,n||{});return this.each(function(){var t=e(this);i.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0});}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,n);});},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){n(this,t);});},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"FFF",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:0.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:0.6,cursor:"default",color:"FFF",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var h=null,f=[];} true&&__webpack_require__.amdO.jQuery?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e(jQuery);}(),function(){function e(e,t){return function(){return e.apply(t,arguments);};}var t,n,i,o,r,s,a,l,c,u,p,h,f,d,g,m,y,v,_b,x,w,_,k,E,T,S,C,A,O,L,M,j,N,D,P,I,H,R,q,W,z,F,B,U,X,Y,V=[].slice,$={}.hasOwnProperty,K=function K(e,t){for(var n in t)$.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e;}return i.prototype=t.prototype,e.prototype=new i(),e.__super__=t.prototype,e;},Q=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1;};function G(){}for(v={className:"",catchupTime:100,initialRate:0.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},S=function S(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date();},A=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,h=function h(e,t,n){if("function"==typeof e.addEventListener)return e.addEventListener(t,n,!1);var i;"function"!=typeof e["on"+t]||"object"!=_typeof(e["on"+t].eventListeners)?(i=new o(),"function"==typeof e["on"+t]&&i.on(t,e["on"+t]),e["on"+t]=function(e){return i.trigger(t,e);},e["on"+t].eventListeners=i):i=e["on"+t].eventListeners,i.on(t,n);},null==A&&(A=function A(e){return setTimeout(e,50);},y=function y(e){return clearTimeout(e);}),L=function L(e){var t=S(),n=function n(){var i=S()-t;return 33<=i?(t=S(),e(i,function(){return A(n);})):setTimeout(n,33-i);};return n();},O=function O(){var e=arguments[0],t=arguments[1],n=3<=arguments.length?V.call(arguments,2):[];return"function"==typeof e[t]?e[t].apply(e,n):e[t];},_b=function b(){for(var e,t,n,i=arguments[0],o=2<=arguments.length?V.call(arguments,1):[],r=0,s=o.length;r<s;r++)if(t=o[r])for(e in t)$.call(t,e)&&(n=t[e],null!=i[e]&&"object"==_typeof(i[e])&&null!=n&&"object"==_typeof(n)?_b(i[e],n):i[e]=n);return i;},d=function d(e){for(var t,n,i=t=0,o=0,r=e.length;o<r;o++)n=e[o],i+=Math.abs(n),t++;return i/t;},w=function w(e,t){var n,i;if(null==e&&(e="options"),null==t&&(t=!0),i=document.querySelector("[data-pace-"+e+"]")){if(n=i.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n);}catch(e){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",e):void 0;}}},G.prototype.on=function(e,t,n,i){var o;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[e]&&(o[e]=[]),this.bindings[e].push({handler:t,ctx:n,once:i});},G.prototype.once=function(e,t,n){return this.on(e,t,n,!0);},G.prototype.off=function(e,t){var n,i,o;if(null!=(null!=(i=this.bindings)?i[e]:void 0)){if(null==t)return delete this.bindings[e];for(n=0,o=[];n<this.bindings[e].length;)this.bindings[e][n].handler===t?o.push(this.bindings[e].splice(n,1)):o.push(n++);return o;}},G.prototype.trigger=function(){var e,t,n,i,o,r,s=arguments[0],a=2<=arguments.length?V.call(arguments,1):[];if(null!=(i=this.bindings)&&i[s]){for(n=0,r=[];n<this.bindings[s].length;)t=(o=this.bindings[s][n]).handler,e=o.ctx,o=o.once,t.apply(null!=e?e:this,a),o?r.push(this.bindings[s].splice(n,1)):r.push(n++);return r;}},Y=G,s=window.Pace||{},window.Pace=s,_b(s,Y.prototype),C=s.options=_b({},v,window.paceOptions,w()),W=0,F=(U=["ajax","document","eventLag","elements"]).length;W<F;W++)!0===C[D=U[W]]&&(C[D]=v[D]);function J(){return J.__super__.constructor.apply(this,arguments);}function Z(){this.progress=0;}function ee(){this.bindings={};}function te(){var e,t=this;te.__super__.constructor.apply(this,arguments),e=function e(_e16){var n=_e16.open;return _e16.open=function(i,o,r){return N(i)&&t.trigger("request",{type:i,url:o,request:_e16}),n.apply(_e16,arguments);};},window.XMLHttpRequest=function(t){return t=new q(t),e(t),t;};try{x(window.XMLHttpRequest,q);}catch(e){}if(null!=R){window.XDomainRequest=function(){var t=new R();return e(t),t;};try{x(window.XDomainRequest,R);}catch(e){}}if(null!=H&&C.ajax.trackWebSockets){window.WebSocket=function(e,n){var i=null!=n?new H(e,n):new H(e);return N("socket")&&t.trigger("request",{type:"socket",url:e,protocols:n,request:i}),i;};try{x(window.WebSocket,H);}catch(e){}}}function ne(){this.complete=e(this.complete,this);var t=this;this.elements=[],_().on("request",function(){return t.watch.apply(t,arguments);});}function ie(t){var n,o,r,s;for(null==t&&(t={}),this.complete=e(this.complete,this),this.elements=[],null==t.selectors&&(t.selectors=[]),o=0,r=(s=t.selectors).length;o<r;o++)n=s[o],this.elements.push(new i(n,this.complete));}function oe(e,t){this.selector=e,this.completeCallback=t,this.progress=0,this.check();}function re(){var e,t,n=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0;};}function se(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=O(this.source,"progress"));}K(J,Y=Error),r=J,Z.prototype.getElement=function(){var e;if(null==this.el){if(!(e=document.querySelector(C.target)))throw new r();this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var t=""!==C.className?" "+C.className:"";this.el.innerHTML='<div class="pace-progress'+t+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el);}return this.el;},Z.prototype.finish=function(){var e=this.getElement();return e.className=e.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ");},Z.prototype.update=function(e){return this.progress=e,s.trigger("progress",e),this.render();},Z.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(e){r=e;}return this.el=void 0;},Z.prototype.render=function(){var e,t,n,i,o,r,a;if(null==document.querySelector(C.target))return!1;for(e=this.getElement(),i="translate3d("+this.progress+"%, 0, 0)",o=0,r=(a=["webkitTransform","msTransform","transform"]).length;o<r;o++)t=a[o],e.children[0].style[t]=i;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),e.children[0].setAttribute("data-progress",""+n)),s.trigger("change",this.progress),this.lastRenderedProgress=this.progress;},Z.prototype.done=function(){return 100<=this.progress;},n=Z,ee.prototype.trigger=function(e,t){var n,i,o,r,s;if(null!=this.bindings[e]){for(s=[],i=0,o=(r=this.bindings[e]).length;i<o;i++)n=r[i],s.push(n.call(this,t));return s;}},ee.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t);},o=ee,q=window.XMLHttpRequest,R=window.XDomainRequest,H=window.WebSocket,x=function x(e,t){var n,i=[];for(n in t.prototype)try{null==e[n]&&"function"!=typeof t[n]?"function"==typeof Object.defineProperty?i.push(Object.defineProperty(e,n,{get:function(e){return function(){return t.prototype[e];};}(n),configurable:!0,enumerable:!0})):i.push(e[n]=t.prototype[n]):i.push(void 0);}catch(e){}return i;},E=[],s.ignore=function(){var e=arguments[0],t=2<=arguments.length?V.call(arguments,1):[];return E.unshift("ignore"),t=e.apply(null,t),E.shift(),t;},s.track=function(){var e=arguments[0],t=2<=arguments.length?V.call(arguments,1):[];return E.unshift("track"),t=e.apply(null,t),E.shift(),t;},N=function N(e){if(null==e&&(e="GET"),"track"===E[0])return"force";if(!E.length&&C.ajax){if("socket"===e&&C.ajax.trackWebSockets)return!0;if(e=e.toUpperCase(),0<=Q.call(C.ajax.trackMethods,e))return!0;}return!1;},K(te,o),a=te,z=null,j=function j(e){for(var t,n=C.ajax.ignoreURLs,i=0,o=n.length;i<o;i++)if("string"==typeof(t=n[i])){if(-1!==e.indexOf(t))return!0;}else if(t.test(e))return!0;return!1;},(_=function _(){return z=null==z?new a():z;})().on("request",function(e){var n,i=e.type,o=e.request,r=e.url;if(!j(r))return s.running||!1===C.restartOnRequestAfter&&"force"!==N(i)?void 0:(n=arguments,"boolean"==typeof(r=C.restartOnRequestAfter||0)&&(r=0),setTimeout(function(){var e,r,a,l,c="socket"===i?o.readyState<1:0<(c=o.readyState)&&c<4;if(c){for(s.restart(),l=[],e=0,r=(a=s.sources).length;e<r;e++){if((D=a[e])instanceof t){D.watch.apply(D,n);break;}l.push(void 0);}return l;}},r));}),ne.prototype.watch=function(e){var t=e.type,n=e.request;e=e.url;if(!j(e))return n=new("socket"===t?u:p)(n,this.complete),this.elements.push(n);},ne.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e;});},t=ne,p=function p(e,t){var n,i,o,r,s=this;if(this.progress=0,null!=window.ProgressEvent)for(h(e,"progress",function(e){return e.lengthComputable?s.progress=100*e.loaded/e.total:s.progress=s.progress+(100-s.progress)/2;}),n=0,i=(r=["load","abort","timeout","error"]).length;n<i;n++)h(e,r[n],function(){return t(s),s.progress=100;});else o=e.onreadystatechange,e.onreadystatechange=function(){var n;return 0===(n=e.readyState)||4===n?(t(s),s.progress=100):3===e.readyState&&(s.progress=50),"function"==typeof o?o.apply(null,arguments):void 0;};},u=function u(e,t){for(var n,i=this,o=this.progress=0,r=(n=["error","open"]).length;o<r;o++)h(e,n[o],function(){return t(i),i.progress=100;});},ie.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e;});},w=ie,oe.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check();},C.elements.checkInterval);},oe.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100;},i=oe,re.prototype.states={loading:0,interactive:50,complete:100},Y=re,K=function K(){var e,t,n,i,o,r=this;this.progress=0,o=[],i=0,n=S(),t=setInterval(function(){var s=S()-n-50;return n=S(),o.push(s),o.length>C.eventLag.sampleCount&&o.shift(),e=d(o),++i>=C.eventLag.minSamples&&e<C.eventLag.lagThreshold?(r.progress=100,clearInterval(t)):r.progress=3/(e+3)*100;},50);},se.prototype.tick=function(e,t){return 100<=(t=null==t?O(this.source,"progress"):t)&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),t=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=t*this.rate*e,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress;},c=se,m=f=I=g=M=P=null,s.running=!1,k=function k(){if(C.restartOnPushState)return s.restart();},null!=window.history.pushState&&(B=window.history.pushState,window.history.pushState=function(){return k(),B.apply(window.history,arguments);}),null!=window.history.replaceState&&(X=window.history.replaceState,window.history.replaceState=function(){return k(),X.apply(window.history,arguments);}),l={ajax:t,elements:w,document:Y,eventLag:K},(T=function T(){var e,t,i,o,r,a,u,p;for(s.sources=P=[],t=0,o=(a=["ajax","elements","document","eventLag"]).length;t<o;t++)!1!==C[e=a[t]]&&P.push(new l[e](C[e]));for(i=0,r=(p=null!=(u=C.extraSources)?u:[]).length;i<r;i++)D=p[i],P.push(new D(C));return s.bar=g=new n(),M=[],I=new c();})(),s.stop=function(){return s.trigger("stop"),s.running=!1,g.destroy(),m=!0,null!=f&&("function"==typeof y&&y(f),f=null),T();},s.restart=function(){return s.trigger("restart"),s.stop(),s.start();},s.go=function(){var e;return s.running=!0,g.render(),e=S(),m=!1,f=L(function(t,n){g.progress;for(var i,o,r,a,l,u,p,h,f,d,y=u=0,v=!0,b=p=0,x=P.length;p<x;b=++p)for(D=P[b],l=null!=M[b]?M[b]:M[b]=[],r=h=0,f=(o=null!=(d=D.elements)?d:[D]).length;h<f;r=++h)a=o[r],v&=(a=null!=l[r]?l[r]:l[r]=new c(a)).done,a.done||(y++,u+=a.tick(t));return i=u/y,g.update(I.tick(t,i)),g.done()||v||m?(g.update(100),s.trigger("done"),setTimeout(function(){return g.finish(),s.running=!1,s.trigger("hide");},Math.max(C.ghostTime,Math.max(C.minTime-(S()-e),0)))):n();});},s.start=function(e){_b(C,e),s.running=!0;try{g.render();}catch(e){r=e;}return document.querySelector(".pace")?(s.trigger("start"),s.go()):setTimeout(s.start,50);}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return s;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}.call(this),function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.Waves=t.call(e),e.Waves;}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}("object"==(typeof __webpack_require__.g==="undefined"?"undefined":_typeof(__webpack_require__.g))?__webpack_require__.g:this,function(){"use strict";var e=e||{},t=document.querySelectorAll.bind(document),n=Object.prototype.toString,i=("ontouchstart"in window);function o(e){var t=_typeof(e);return"function"==t||"object"==t&&!!e;}function r(e){var i,r=n.call(e);return"[object String]"===r?t(e):o(e)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r)&&e.hasOwnProperty("length")?e:o(i=e)&&0<i.nodeType?[e]:[];}function s(e){var t,n,i,o={top:0,left:0},r=e&&e.ownerDocument,s=r.documentElement;return void 0!==e.getBoundingClientRect&&(o=e.getBoundingClientRect()),t=null!==(i=n=r)&&i===i.window?n:9===n.nodeType&&n.defaultView,{top:o.top+t.pageYOffset-s.clientTop,left:o.left+t.pageXOffset-s.clientLeft};}function a(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";");return t;}var l={duration:750,delay:200,show:function show(e,t,n){if(2===e.button)return!1;t=t||this;var i=document.createElement("div");i.className="waves-ripple waves-rippling",t.appendChild(i);var o=s(t),r=0,c=0;c=0<=(c="touches"in e&&e.touches.length?(r=e.touches[0].pageY-o.top,e.touches[0].pageX-o.left):(r=e.pageY-o.top,e.pageX-o.left))?c:0,r=0<=r?r:0;var u="scale("+t.clientWidth/100*3+")",p="translate(0,0)";n&&(p="translate("+n.x+"px, "+n.y+"px)"),i.setAttribute("data-hold",Date.now()),i.setAttribute("data-x",c),i.setAttribute("data-y",r),i.setAttribute("data-scale",u),i.setAttribute("data-translate",p);var h={top:r+"px",left:c+"px"};i.classList.add("waves-notransition"),i.setAttribute("style",a(h)),i.classList.remove("waves-notransition"),h["-webkit-transform"]=u+" "+p,h["-moz-transform"]=u+" "+p,h["-ms-transform"]=u+" "+p,h["-o-transform"]=u+" "+p,h.transform=u+" "+p,h.opacity="1";var f="mousemove"===e.type?2500:l.duration;h["-webkit-transition-duration"]=f+"ms",h["-moz-transition-duration"]=f+"ms",h["-o-transition-duration"]=f+"ms",h["transition-duration"]=f+"ms",i.setAttribute("style",a(h));},hide:function hide(e,t){for(var n=(t=t||this).getElementsByClassName("waves-rippling"),o=0,r=n.length;o<r;o++)u(e,t,n[o]);i&&(t.removeEventListener("touchend",l.hide),t.removeEventListener("touchcancel",l.hide)),t.removeEventListener("mouseup",l.hide),t.removeEventListener("mouseleave",l.hide);}},c={input:function input(e){var t,n,i,o,r=e.parentNode;"i"===r.tagName.toLowerCase()&&r.classList.contains("waves-effect")||((t=document.createElement("i")).className=e.className+" waves-input-wrapper",e.className="waves-button-input",r.replaceChild(t,e),t.appendChild(e),i=(n=window.getComputedStyle(e,null)).color,o=n.backgroundColor,t.setAttribute("style","color:"+i+";background:"+o),e.setAttribute("style","background-color:rgba(0,0,0,0);"));},img:function img(e){var t,n=e.parentNode;"i"===n.tagName.toLowerCase()&&n.classList.contains("waves-effect")||(t=document.createElement("i"),n.replaceChild(t,e),t.appendChild(e));}};function u(e,t,n){var i,o,r,s,c,u;n&&(n.classList.remove("waves-rippling"),i=n.getAttribute("data-x"),o=n.getAttribute("data-y"),r=n.getAttribute("data-scale"),s=n.getAttribute("data-translate"),(c=350-(Date.now()-Number(n.getAttribute("data-hold"))))<0&&(c=0),"mousemove"===e.type&&(c=150),u="mousemove"===e.type?2500:l.duration,setTimeout(function(){var e={top:o+"px",left:i+"px",opacity:"0","-webkit-transition-duration":u+"ms","-moz-transition-duration":u+"ms","-o-transition-duration":u+"ms","transition-duration":u+"ms","-webkit-transform":r+" "+s,"-moz-transform":r+" "+s,"-ms-transform":r+" "+s,"-o-transform":r+" "+s,transform:r+" "+s};n.setAttribute("style",a(e)),setTimeout(function(){try{t.removeChild(n);}catch(e){return!1;}},u);},c));}var p={touches:0,allowEvent:function allowEvent(e){var t=!0;return /^(mousedown|mousemove)$/.test(e.type)&&p.touches&&(t=!1),t;},registerEvent:function registerEvent(e){var t=e.type;"touchstart"===t?p.touches+=1:/^(touchend|touchcancel)$/.test(t)&&setTimeout(function(){p.touches&&--p.touches;},500);}};function h(e){var t,n,o,r,s,a=function(e){if(!1===p.allowEvent(e))return null;for(var t=null,n=e.target||e.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){t=n;break;}n=n.parentElement;}return t;}(e);if(null!==a){if(a.disabled||a.getAttribute("disabled")||a.classList.contains("disabled"))return;p.registerEvent(e),"touchstart"===e.type&&l.delay?(t=!1,n=setTimeout(function(){n=null,l.show(e,a);},l.delay),o=function o(i){n&&(clearTimeout(n),n=null,l.show(e,a)),t||(t=!0,l.hide(i,a)),s();},r=function r(e){n&&(clearTimeout(n),n=null),o(e),s();},a.addEventListener("touchmove",r,!1),a.addEventListener("touchend",o,!1),a.addEventListener("touchcancel",o,!1),s=function s(){a.removeEventListener("touchmove",r),a.removeEventListener("touchend",o),a.removeEventListener("touchcancel",o);}):(l.show(e,a),i&&(a.addEventListener("touchend",l.hide,!1),a.addEventListener("touchcancel",l.hide,!1)),a.addEventListener("mouseup",l.hide,!1),a.addEventListener("mouseleave",l.hide,!1));}}return e.init=function(e){var t=document.body;"duration"in(e=e||{})&&(l.duration=e.duration),"delay"in e&&(l.delay=e.delay),i&&(t.addEventListener("touchstart",h,!1),t.addEventListener("touchcancel",p.registerEvent,!1),t.addEventListener("touchend",p.registerEvent,!1)),t.addEventListener("mousedown",h,!1);},e.attach=function(e,t){var i,o;e=r(e),"[object Array]"===n.call(t)&&(t=t.join(" ")),t=t?" "+t:"";for(var s=0,a=e.length;s<a;s++)o=(i=e[s]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(c[o](i),i=i.parentElement),-1===i.className.indexOf("waves-effect")&&(i.className+=" waves-effect"+t);},e.ripple=function(e,t){var n=(e=r(e)).length;if((t=t||{}).wait=t.wait||0,t.position=t.position||null,n)for(var i={},o=0,a={type:"mousedown",button:1},c=function c(e,t){return function(){l.hide(e,t);};};o<n;o++){var u=e[o],p=t.position||{x:u.clientWidth/2,y:u.clientHeight/2},h=s(u);i.x=h.left+p.x,i.y=h.top+p.y,a.pageX=i.x,a.pageY=i.y,l.show(a,u),0<=t.wait&&null!==t.wait&&setTimeout(c({type:"mouseup",button:1},u),t.wait);}},e.calm=function(e){for(var t={type:"mouseup",button:1},n=0,i=(e=r(e)).length;n<i;n++)l.hide(t,e[n]);},e.displayEffect=function(t){e.init(t);},e;}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(t);}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?Object(arguments[n]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable;}))),o.forEach(function(n){t(e,n,i[n]);});}return e;}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e;}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?s(t):n;}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e);})(e);}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e;})(e,t);}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t);}var p={type:"logger",log:function log(e){this.output("log",e);},warn:function warn(e){this.output("warn",e);},error:function error(e){this.output("error",e);},output:function output(e,t){console&&console[e]&&console[e].apply(console,t);}},h=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.init(t,n);}return r(e,[{key:"init",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||p,this.options=t,this.debug=t.debug;}},{key:"setDebug",value:function value(e){this.debug=e;}},{key:"log",value:function value(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0);}},{key:"warn",value:function value(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0);}},{key:"error",value:function value(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","");}},{key:"deprecate",value:function value(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0);}},{key:"forward",value:function value(e,t,n,i){return i&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e));}},{key:"create",value:function value(t){return new e(this.logger,n({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options));}}]),e;}())(),f=function(){function e(){i(this,e),this.observers={};}return r(e,[{key:"on",value:function value(e,t){var n=this;return e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t);}),this;}},{key:"off",value:function value(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter(function(e){return e!==t;}):delete this.observers[e]);}},{key:"emit",value:function value(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,n);}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(n));});}}]),e;}();function d(){var e,t,n=new Promise(function(n,i){e=n,t=i;});return n.resolve=e,n.reject=t,n;}function g(e){return null==e?"":""+e;}function m(e,t,n){function i(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e;}function o(){return!e||"string"==typeof e;}for(var r="string"!=typeof t?[].concat(t):t.split(".");r.length>1;){if(o())return{};var s=i(r.shift());!e[s]&&n&&(e[s]=new n()),e=e[s];}return o()?{}:{obj:e,k:i(r.shift())};}function y(e,t,n){var i=m(e,t,Object);i.obj[i.k]=n;}function v(e,t){var n=m(e,t),i=n.obj,o=n.k;if(i)return i[o];}function b(e,t,n){var i=v(e,n);return void 0!==i?i:v(t,n);}function x(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function _(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return w[e];}):e;}var k="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,E=function(e){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return i(this,t),n=a(this,l(t).call(this)),k&&f.call(s(n)),n.data=e||{},n.options=o,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n;}return u(t,f),r(t,[{key:"addNamespaces",value:function value(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e);}},{key:"removeNamespaces",value:function value(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1);}},{key:"getResource",value:function value(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,r=[e,t];return n&&"string"!=typeof n&&(r=r.concat(n)),n&&"string"==typeof n&&(r=r.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(r=e.split(".")),v(this.data,r);}},{key:"addResource",value:function value(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},r=this.options.keySeparator;void 0===r&&(r=".");var s=[e,t];n&&(s=s.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(i=t,t=(s=e.split("."))[1]),this.addNamespaces(t),y(this.data,s,i),o.silent||this.emit("added",e,t,n,i);}},{key:"addResources",value:function value(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!=typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});i.silent||this.emit("added",e,t,n);}},{key:"addResourceBundle",value:function value(e,t,i,o,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},a=[e,t];e.indexOf(".")>-1&&(o=i,i=t,t=(a=e.split("."))[1]),this.addNamespaces(t);var l=v(this.data,a)||{};o?function e(t,n,i){for(var o in n)"__proto__"!==o&&(o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof n[o]||n[o]instanceof String?i&&(t[o]=n[o]):e(t[o],n[o],i):t[o]=n[o]);return t;}(l,i,r):l=n({},l,i),y(this.data,a,l),s.silent||this.emit("added",e,t,i);}},{key:"removeResourceBundle",value:function value(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t);}},{key:"hasResourceBundle",value:function value(e,t){return void 0!==this.getResource(e,t);}},{key:"getResourceBundle",value:function value(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?n({},{},this.getResource(e,t)):this.getResource(e,t);}},{key:"getDataByLanguage",value:function value(e){return this.data[e];}},{key:"toJSON",value:function value(){return this.data;}}]),t;}(),T={processors:{},addPostProcessor:function addPostProcessor(e){this.processors[e.name]=e;},handle:function handle(e,t,n,i,o){var r=this;return e.forEach(function(e){r.processors[e]&&(t=r.processors[e].process(t,n,i,o));}),t;}},S={},C=function(t){function o(e){var t,n,r,c,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,o),t=a(this,l(o).call(this)),k&&f.call(s(t)),n=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r=e,c=s(t),n.forEach(function(e){r[e]&&(c[e]=r[e]);}),t.options=u,void 0===t.options.keySeparator&&(t.options.keySeparator="."),t.logger=h.create("translator"),t;}return u(o,f),r(o,[{key:"changeLanguage",value:function value(e){e&&(this.language=e);}},{key:"exists",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res;}},{key:"extractFromKey",value:function value(e,t){var n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var r=e.match(this.interpolator.nestingRegexp);if(r&&r.length>0)return{key:e,namespaces:o};var s=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(s[0])>-1)&&(o=s.shift()),e=s.join(i);}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o};}},{key:"translate",value:function value(t,i,o){var r=this;if("object"!==e(i)&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);var s=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,a=this.extractFromKey(t[t.length-1],i),l=a.key,c=a.namespaces,u=c[c.length-1],p=i.lng||this.language,h=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&"cimode"===p.toLowerCase()){if(h){var f=i.nsSeparator||this.options.nsSeparator;return u+f+l;}return l;}var d=this.resolve(t,i),g=d&&d.res,m=d&&d.usedKey||l,y=d&&d.exactUsedKey||l,v=Object.prototype.toString.apply(g),b=void 0!==i.joinArrays?i.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject;if(x&&g&&"string"!=typeof g&&"boolean"!=typeof g&&"number"!=typeof g&&["[object Number]","[object Function]","[object RegExp]"].indexOf(v)<0&&("string"!=typeof b||"[object Array]"!==v)){if(!i.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,g,i):"key '".concat(l," (").concat(this.language,")' returned an object instead of string.");if(s){var w="[object Array]"===v,_=w?[]:{},k=w?y:m;for(var E in g)if(Object.prototype.hasOwnProperty.call(g,E)){var T="".concat(k).concat(s).concat(E);_[E]=this.translate(T,n({},i,{joinArrays:!1,ns:c})),_[E]===T&&(_[E]=g[E]);}g=_;}}else if(x&&"string"==typeof b&&"[object Array]"===v)(g=g.join(b))&&(g=this.extendTranslation(g,t,i,o));else{var S=!1,C=!1;if(!this.isValidLookup(g)&&void 0!==i.defaultValue){if(S=!0,void 0!==i.count){var A=this.pluralResolver.getSuffix(p,i.count);g=i["defaultValue".concat(A)];}g||(g=i.defaultValue);}this.isValidLookup(g)||(C=!0,g=l);var O=i.defaultValue&&i.defaultValue!==g&&this.options.updateMissing;if(C||S||O){if(this.logger.log(O?"updateKey":"missingKey",p,u,l,O?i.defaultValue:g),s){var L=this.resolve(l,n({},i,{keySeparator:!1}));L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");}var M=[],j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if("fallback"===this.options.saveMissingTo&&j&&j[0])for(var N=0;N<j.length;N++)M.push(j[N]);else"all"===this.options.saveMissingTo?M=this.languageUtils.toResolveHierarchy(i.lng||this.language):M.push(i.lng||this.language);var D=function D(e,t){r.options.missingKeyHandler?r.options.missingKeyHandler(e,u,t,O?i.defaultValue:g,O,i):r.backendConnector&&r.backendConnector.saveMissing&&r.backendConnector.saveMissing(e,u,t,O?i.defaultValue:g,O,i),r.emit("missingKey",e,u,t,g);};if(this.options.saveMissing){var P=void 0!==i.count&&"string"!=typeof i.count;this.options.saveMissingPlurals&&P?M.forEach(function(e){r.pluralResolver.getPluralFormsOfKey(e,l).forEach(function(t){return D([e],t);});}):D(M,l);}}g=this.extendTranslation(g,t,i,d,o),C&&g===l&&this.options.appendNamespaceToMissingKey&&(g="".concat(u,":").concat(l)),C&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(g));}return g;}},{key:"extendTranslation",value:function value(e,t,i,o,r){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,i,o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(n({},i,{interpolation:n({},this.options.interpolation,i.interpolation)}));var a,l=i.interpolation&&i.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;if(l){var c=e.match(this.interpolator.nestingRegexp);a=c&&c.length;}var u=i.replace&&"string"!=typeof i.replace?i.replace:i;if(this.options.interpolation.defaultVariables&&(u=n({},this.options.interpolation.defaultVariables,u)),e=this.interpolator.interpolate(e,u,i.lng||this.language,i),l){var p=e.match(this.interpolator.nestingRegexp);a<(p&&p.length)&&(i.nest=!1);}!1!==i.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r&&r[0]===n[0]?(s.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):s.translate.apply(s,n.concat([t]));},i)),i.interpolation&&this.interpolator.reset();}var h=i.postProcess||this.options.postProcess,f="string"==typeof h?[h]:h;return null!=e&&f&&f.length&&!1!==i.applyPostProcessor&&(e=T.handle(f,e,t,this.options&&this.options.postProcessPassResolved?n({i18nResolved:o},i):i,this)),e;}},{key:"resolve",value:function value(e){var t,n,i,o,r,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!s.isValidLookup(t)){var l=s.extractFromKey(e,a),c=l.key;n=c;var u=l.namespaces;s.options.fallbackNS&&(u=u.concat(s.options.fallbackNS));var p=void 0!==a.count&&"string"!=typeof a.count,h=void 0!==a.context&&"string"==typeof a.context&&""!==a.context,f=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);u.forEach(function(e){s.isValidLookup(t)||(r=e,!S["".concat(f[0],"-").concat(e)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(r)&&(S["".concat(f[0],"-").concat(e)]=!0,s.logger.warn('key "'.concat(n,'" for languages "').concat(f.join(", "),'" won\'t get resolved as namespace "').concat(r,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(function(n){if(!s.isValidLookup(t)){o=n;var r,l,u=c,f=[u];for(s.i18nFormat&&s.i18nFormat.addLookupKeys?s.i18nFormat.addLookupKeys(f,c,n,e,a):(p&&(r=s.pluralResolver.getSuffix(n,a.count)),p&&h&&f.push(u+r),h&&f.push(u+="".concat(s.options.contextSeparator).concat(a.context)),p&&f.push(u+=r));l=f.pop();)s.isValidLookup(t)||(i=l,t=s.getResource(n,e,l,a));}}));});}}),{res:t,usedKey:n,exactUsedKey:i,usedLng:o,usedNS:r};}},{key:"isValidLookup",value:function value(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e);}},{key:"getResource",value:function value(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i);}}]),o;}();function A(e){return e.charAt(0).toUpperCase()+e.slice(1);}var O=function(){function e(t){i(this,e),this.options=t,this.whitelist=this.options.supportedLngs||!1,this.supportedLngs=this.options.supportedLngs||!1,this.logger=h.create("languageUtils");}return r(e,[{key:"getScriptPartFromCode",value:function value(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")));}},{key:"getLanguagePartFromCode",value:function value(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0]);}},{key:"formatLanguageCode",value:function value(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase();}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=A(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=A(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=A(n[2].toLowerCase()))),n.join("-");}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e;}},{key:"isWhitelisted",value:function value(e){return this.logger.deprecate("languageUtils.isWhitelisted",'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),this.isSupportedCode(e);}},{key:"isSupportedCode",value:function value(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1;}},{key:"getBestMatchFromCodes",value:function value(e){var t,n=this;return e?(e.forEach(function(e){if(!t){var i=n.formatLanguageCode(e);n.options.supportedLngs&&!n.isSupportedCode(i)||(t=i);}}),!t&&this.options.supportedLngs&&e.forEach(function(e){if(!t){var i=n.getLanguagePartFromCode(e);if(n.isSupportedCode(i))return t=i;t=n.options.supportedLngs.find(function(e){if(0===e.indexOf(i))return e;});}}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null;}},{key:"getFallbackCodes",value:function value(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e["default"]||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e["default"]),n||[];}},{key:"toResolveHierarchy",value:function value(e,t){var n=this,i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],r=function r(e){e&&(n.isSupportedCode(e)?o.push(e):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):"string"==typeof e&&r(this.formatLanguageCode(e)),i.forEach(function(e){o.indexOf(e)<0&&r(n.formatLanguageCode(e));}),o;}}]),e;}(),L=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],M={1:function _(e){return Number(e>1);},2:function _(e){return Number(1!=e);},3:function _(e){return 0;},4:function _(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2);},5:function _(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5);},6:function _(e){return Number(1==e?0:e>=2&&e<=4?1:2);},7:function _(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2);},8:function _(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3);},9:function _(e){return Number(e>=2);},10:function _(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4);},11:function _(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3);},12:function _(e){return Number(e%10!=1||e%100==11);},13:function _(e){return Number(0!==e);},14:function _(e){return Number(1==e?0:2==e?1:3==e?2:3);},15:function _(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2);},16:function _(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2);},17:function _(e){return Number(1==e||e%10==1&&e%100!=11?0:1);},18:function _(e){return Number(0==e?0:1==e?1:2);},19:function _(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3);},20:function _(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2);},21:function _(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0);},22:function _(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3);}},j=function(){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.languageUtils=t,this.options=o,this.logger=h.create("pluralResolver"),this.rules=(n={},L.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:M[e.fc]};});}),n);}return r(e,[{key:"addRule",value:function value(e,t){this.rules[e]=t;}},{key:"getRule",value:function value(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)];}},{key:"needsPlural",value:function value(e){var t=this.getRule(e);return t&&t.numbers.length>1;}},{key:"getPluralFormsOfKey",value:function value(e,t){var n=this,i=[],o=this.getRule(e);return o?(o.numbers.forEach(function(o){var r=n.getSuffix(e,o);i.push("".concat(t).concat(r));}),i):i;}},{key:"getSuffix",value:function value(e,t){var n=this,i=this.getRule(e);if(i){var o=i.noAbs?i.plurals(t):i.plurals(Math.abs(t)),r=i.numbers[o];this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var s=function s(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString();};return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?"_plural_".concat(r.toString()):s():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]?s():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();}return this.logger.warn("no plural rule found for: ".concat(e)),"";}}]),e;}(),N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.logger=h.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e;},this.init(t);}return r(e,[{key:"init",value:function value(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:_,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?x(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?x(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?x(t.nestingPrefix):t.nestingPrefixEscaped||x("$t("),this.nestingSuffix=t.nestingSuffix?x(t.nestingSuffix):t.nestingSuffixEscaped||x(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp();}},{key:"reset",value:function value(){this.options&&this.init(this.options);}},{key:"resetRegExp",value:function value(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g");}},{key:"interpolate",value:function value(e,t,n,i){var o,r,s,a=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$");}var u=function u(e){if(e.indexOf(a.formatSeparator)<0){var o=b(t,l,e);return a.alwaysFormat?a.format(o,void 0,n):o;}var r=e.split(a.formatSeparator),s=r.shift().trim(),c=r.join(a.formatSeparator).trim();return a.format(b(t,l,s),c,n,i);};this.resetRegExp();var p=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function safeValue(e){return c(e);}},{regex:this.regexp,safeValue:function safeValue(e){return a.escapeValue?c(a.escape(e)):c(e);}}].forEach(function(t){for(s=0;o=t.regex.exec(e);){if(void 0===(r=u(o[1].trim()))){if("function"==typeof p){var n=p(e,o,i);r="string"==typeof n?n:"";}else{if(h){r=o[0];continue;}a.logger.warn("missed to pass in variable ".concat(o[1]," for interpolating ").concat(e)),r="";}}else"string"==typeof r||a.useRawValueToEscape||(r=g(r));if(e=e.replace(o[0],t.safeValue(r)),t.regex.lastIndex=0,++s>=a.maxReplaces)break;}}),e;}},{key:"nest",value:function value(e,t){var i,o,r=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n({},s);function l(e,t){var i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;var o=e.split(new RegExp("".concat(i,"[ ]*{"))),r="{".concat(o[1]);e=o[0],r=(r=this.interpolate(r,a)).replace(/'/g,'"');try{a=JSON.parse(r),t&&(a=n({},t,a));}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(i).concat(r);}return delete a.defaultValue,e;}for(a.applyPostProcessor=!1,delete a.defaultValue;i=this.nestingRegexp.exec(e);){var c=[],u=!1;if(i[0].includes(this.formatSeparator)&&!/{.*}/.test(i[1])){var p=i[1].split(this.formatSeparator).map(function(e){return e.trim();});i[1]=p.shift(),c=p,u=!0;}if((o=t(l.call(this,i[1].trim(),a),a))&&i[0]===e&&"string"!=typeof o)return o;"string"!=typeof o&&(o=g(o)),o||(this.logger.warn("missed to resolve ".concat(i[1]," for nesting ").concat(e)),o=""),u&&(o=c.reduce(function(e,t){return r.format(e,t,s.lng,s);},o.trim())),e=e.replace(i[0],o),this.regexp.lastIndex=0;}return e;}}]),e;}(),D=function(e){function t(e,n,o){var r,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(this,t),r=a(this,l(t).call(this)),k&&f.call(s(r)),r.backend=e,r.store=n,r.services=o,r.languageUtils=o.languageUtils,r.options=c,r.logger=h.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(o,c.backend,c),r;}return u(t,f),r(t,[{key:"queueLoad",value:function value(e,t,n,i){var o=this,r=[],s=[],a=[],l=[];return e.forEach(function(e){var i=!0;t.forEach(function(t){var a="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[a]=2:o.state[a]<0||(1===o.state[a]?s.indexOf(a)<0&&s.push(a):(o.state[a]=1,i=!1,s.indexOf(a)<0&&s.push(a),r.indexOf(a)<0&&r.push(a),l.indexOf(t)<0&&l.push(t)));}),i||a.push(e);}),(r.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],callback:i}),{toLoad:r,pending:s,toLoadLanguages:a,toLoadNamespaces:l};}},{key:"loaded",value:function value(e,t,n){var i=e.split("|"),o=i[0],r=i[1];t&&this.emit("failedLoading",o,r,t),n&&this.store.addResourceBundle(o,r,n),this.state[e]=t?-1:2;var s={};this.queue.forEach(function(n){var i,a,l,c,u;i=n.loaded,a=r,(c=(l=m(i,[o],Object)).obj)[u=l.k]=c[u]||[],c[u].push(a),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t);}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach(function(e){s[e]||(s[e]=[]),n.loaded[e].length&&n.loaded[e].forEach(function(t){s[e].indexOf(t)<0&&s[e].push(t);});}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback());}),this.emit("loaded",s),this.queue=this.queue.filter(function(e){return!e.done;});}},{key:"read",value:function value(e,t,n){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,s=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,function(a,l){a&&l&&o<5?setTimeout(function(){i.read.call(i,e,t,n,o+1,2*r,s);},r):s(a,l);}):s(null,{});}},{key:"prepareLoading",value:function value(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var r=this.queueLoad(e,t,i,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach(function(e){n.loadOne(e);});}},{key:"load",value:function value(e,t,n){this.prepareLoading(e,t,{},n);}},{key:"reload",value:function value(e,t,n){this.prepareLoading(e,t,{reload:!0},n);}},{key:"loadOne",value:function value(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.split("|"),o=i[0],r=i[1];this.read(o,r,"read",void 0,void 0,function(i,s){i&&t.logger.warn("".concat(n,"loading namespace ").concat(r," for language ").concat(o," failed"),i),!i&&s&&t.logger.log("".concat(n,"loaded namespace ").concat(r," for language ").concat(o),s),t.loaded(e,i,s);});}},{key:"saveMissing",value:function value(e,t,i,o,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=i&&""!==i&&(this.backend&&this.backend.create&&this.backend.create(e,t,i,o,null,n({},s,{isUpdate:r})),e&&e[0]&&this.store.addResource(e[0],t,i,o));}}]),t;}();function P(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&(e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e.supportedLngs=e.whitelist),e.nonExplicitWhitelist&&(e.nonExplicitSupportedLngs=e.nonExplicitWhitelist),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e;}function I(){}return new(function(t){function o(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(i(this,o),e=a(this,l(o).call(this)),k&&f.call(s(e)),e.options=P(t),e.services={},e.logger=h,e.modules={external:[]},n&&!e.isInitialized&&!t.isClone){if(!e.options.initImmediate)return e.init(t,n),a(e,s(e));setTimeout(function(){e.init(t,n);},0);}return e;}return u(o,f),r(o,[{key:"init",value:function value(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;function r(e){return e?"function"==typeof e?new e():e:null;}if("function"==typeof i&&(o=i,i={}),i.whitelist&&!i.supportedLngs&&this.logger.deprecate("whitelist",'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),i.nonExplicitWhitelist&&!i.nonExplicitSupportedLngs&&this.logger.deprecate("whitelist",'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),this.options=n({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function overloadTranslationOptionHandler(t){var n={};if("object"===e(t[1])&&(n=t[1]),"string"==typeof t[1]&&(n.defaultValue=t[1]),"string"==typeof t[2]&&(n.tDescription=t[2]),"object"===e(t[2])||"object"===e(t[3])){var i=t[3]||t[2];Object.keys(i).forEach(function(e){n[e]=i[e];});}return n;},interpolation:{escapeValue:!0,format:function format(e,t,n,i){return e;},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!1}},this.options,P(i)),this.format=this.options.interpolation.format,o||(o=I),!this.options.isClone){this.modules.logger?h.init(r(this.modules.logger),this.options):h.init(null,this.options);var s=new O(this.options);this.store=new E(this.options.resources,this.options);var a=this.services;a.logger=h,a.resourceStore=this.store,a.languageUtils=s,a.pluralResolver=new j(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),a.interpolator=new N(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new D(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];t.emit.apply(t,[e].concat(i));}),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new C(this.services,this.options),this.translator.on("*",function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];t.emit.apply(t,[e].concat(i));}),this.modules.external.forEach(function(e){e.init&&e.init(t);});}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(e){t[e]=function(){var n;return(n=t.store)[e].apply(n,arguments);};}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(e){t[e]=function(){var n;return(n=t.store)[e].apply(n,arguments),t;};});var l=d(),c=function c(){t.changeLanguage(t.options.lng,function(e,n){t.isInitialized=!0,t.options.isClone||t.logger.log("initialized",t.options),t.emit("initialized",t.options),l.resolve(n),o(e,n);});};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l;}},{key:"loadResources",value:function value(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,i="string"==typeof e?e:this.language;if("function"==typeof e&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase())return n();var o=[],r=function r(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach(function(e){o.indexOf(e)<0&&o.push(e);});};i?r(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return r(e);}),this.options.preload&&this.options.preload.forEach(function(e){return r(e);}),this.services.backendConnector.load(o,this.options.ns,n);}else n(null);}},{key:"reloadResources",value:function value(e,t,n){var i=d();return e||(e=this.languages),t||(t=this.options.ns),n||(n=I),this.services.backendConnector.reload(e,t,function(e){i.resolve(),n(e);}),i;}},{key:"use",value:function value(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&T.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this;}},{key:"changeLanguage",value:function value(e,t){var n=this;this.isLanguageChangingTo=e;var i=d();this.emit("languageChanging",e);var o=function o(e){var o="string"==typeof e?e:n.services.languageUtils.getBestMatchFromCodes(e);o&&(n.language||(n.language=o,n.languages=n.services.languageUtils.toResolveHierarchy(o)),n.translator.language||n.translator.changeLanguage(o),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(o)),n.loadResources(o,function(e){!function(e,o){o?(n.language=o,n.languages=n.services.languageUtils.toResolveHierarchy(o),n.translator.changeLanguage(o),n.isLanguageChangingTo=void 0,n.emit("languageChanged",o),n.logger.log("languageChanged",o)):n.isLanguageChangingTo=void 0,i.resolve(function(){return n.t.apply(n,arguments);}),t&&t(e,function(){return n.t.apply(n,arguments);});}(e,o);});};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i;}},{key:"getFixedT",value:function value(t,i){var o=this,r=function t(i,r){var s;if("object"!==e(r)){for(var a=arguments.length,l=new Array(a>2?a-2:0),c=2;c<a;c++)l[c-2]=arguments[c];s=o.options.overloadTranslationOptionHandler([i,r].concat(l));}else s=n({},r);return s.lng=s.lng||t.lng,s.lngs=s.lngs||t.lngs,s.ns=s.ns||t.ns,o.t(i,s);};return"string"==typeof t?r.lng=t:r.lngs=t,r.ns=i,r;}},{key:"t",value:function value(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments);}},{key:"exists",value:function value(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments);}},{key:"setDefaultNamespace",value:function value(e){this.options.defaultNS=e;}},{key:"hasLoadedNamespace",value:function value(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var i=this.languages[0],o=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;var s=function s(e,n){var i=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===i||2===i;};if(n.precheck){var a=n.precheck(this,s);if(void 0!==a)return a;}return!!this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||!(!s(i,e)||o&&!s(r,e));}},{key:"loadNamespaces",value:function value(e,t){var n=this,i=d();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e);}),this.loadResources(function(e){i.resolve(),t&&t(e);}),i):(t&&t(),Promise.resolve());}},{key:"loadLanguages",value:function value(e,t){var n=d();"string"==typeof e&&(e=[e]);var i=this.options.preload||[],o=e.filter(function(e){return i.indexOf(e)<0;});return o.length?(this.options.preload=i.concat(o),this.loadResources(function(e){n.resolve(),t&&t(e);}),n):(t&&t(),Promise.resolve());}},{key:"dir",value:function value(e){return e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),e?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr":"rtl";}},{key:"createInstance",value:function value(){return new o(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0);}},{key:"cloneInstance",value:function value(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,r=n({},this.options,t,{isClone:!0}),s=new o(r);return["store","services","language"].forEach(function(t){s[t]=e[t];}),s.services=n({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s.translator=new C(s.services,s.options),s.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];s.emit.apply(s,[e].concat(n));}),s.init(r,i),s.translator.options=s.options,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s;}}]),o;}())();}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}var t=[],n=t.forEach,i=t.slice;function o(e){return n.call(i.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n]);}),e;}function r(e){return(r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e);})(e);}function s(e){return(s="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e);})(e);}function a(e,t){if(t&&"object"===s(t)){var n="",i=encodeURIComponent;for(var o in t)n+="&"+i(o)+"="+i(t[o]);if(!n)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+n.slice(1);}return e;}function l(e,t,n,i,o){i&&"object"===s(i)&&(o||(i._t=new Date()),i=a("",i).slice(1)),t.queryStringParams&&(e=a(e,t.queryStringParams));try{var r;(r=XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,i&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var l=t.customHeaders;if(l="function"==typeof l?l():l)for(var c in l)r.setRequestHeader(c,l[c]);r.onreadystatechange=function(){r.readyState>3&&n&&n(r.responseText,r);},r.send(i);}catch(e){console&&console.log(e);}}function c(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function parsePayload(e,t,n){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}({},t,n||"");},crossDomain:!1,ajax:l};}var u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,t),this.init(e,n),this.type="backend";}var n,i;return n=t,(i=[{key:"init",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=o(t,this.options||{},c());}},{key:"readMulti",value:function value(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath(e,t));var o=this.services.interpolator.interpolate(i,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(o,n);}},{key:"read",value:function value(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath([e],[t]));var o=this.services.interpolator.interpolate(i,{lng:e,ns:t});this.loadUrl(o,n);}},{key:"loadUrl",value:function value(e,t){var n=this;this.options.ajax(e,this.options,function(i,o){if(o.status>=500&&o.status<600)return t("failed loading "+e,!0);if(o.status>=400&&o.status<500)return t("failed loading "+e,!1);var r,s;try{r=n.options.parse(i,e);}catch(t){s="failed parsing "+e+" to json";}if(s)return t(s,!1);t(null,r);});}},{key:"create",value:function value(e,t,n,i){var o=this;"string"==typeof e&&(e=[e]);var r=this.options.parsePayload(t,n,i);e.forEach(function(e){var n=o.services.interpolator.interpolate(o.options.addPath,{lng:e,ns:t});o.options.ajax(n,o.options,function(e,t){},r);});}}])&&e(n.prototype,i),t;}();return u.type="backend",u;}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}var t=[],n=t.forEach,i=t.slice;function o(e){return n.call(i.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n]);}),e;}var r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,s=function s(e,t,n){var i=n||{};i.path=i.path||"/";var o=e+"="+encodeURIComponent(t);if(i.maxAge>0){var s=i.maxAge-0;if(isNaN(s))throw new Error("maxAge should be a Number");o+="; Max-Age="+Math.floor(s);}if(i.domain){if(!r.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain="+i.domain;}if(i.path){if(!r.test(i.path))throw new TypeError("option path is invalid");o+="; Path="+i.path;}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires="+i.expires.toUTCString();}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid");}return o;},a={name:"cookie",lookup:function lookup(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var n=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length);}return null;}(e.lookupCookie);n&&(t=n);}return t;},cacheUserLanguage:function cacheUserLanguage(e,t){t.lookupCookie&&"undefined"!=typeof document&&function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date(),o.expires.setTime(o.expires.getTime()+60*n*1e3)),i&&(o.domain=i),document.cookie=s(e,encodeURIComponent(t),o);}(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions);}},l={name:"querystring",lookup:function lookup(e){var t;if("undefined"!=typeof window)for(var n=window.location.search.substring(1).split("&"),i=0;i<n.length;i++){var o=n[i].indexOf("=");o>0&&n[i].substring(0,o)===e.lookupQuerystring&&(t=n[i].substring(o+1));}return t;}},c=null,u=function u(){if(null!==c)return c;try{c="undefined"!==window&&null!==window.localStorage,window.localStorage.setItem("i18next.translate.boo","foo"),window.localStorage.removeItem("i18next.translate.boo");}catch(e){c=!1;}return c;},p={name:"localStorage",lookup:function lookup(e){var t;if(e.lookupLocalStorage&&u()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n);}return t;},cacheUserLanguage:function cacheUserLanguage(e,t){t.lookupLocalStorage&&u()&&window.localStorage.setItem(t.lookupLocalStorage,e);}},h=null,f=function f(){if(null!==h)return h;try{h="undefined"!==window&&null!==window.sessionStorage,window.sessionStorage.setItem("i18next.translate.boo","foo"),window.sessionStorage.removeItem("i18next.translate.boo");}catch(e){h=!1;}return h;},d={name:"sessionStorage",lookup:function lookup(e){var t;if(e.lookupSessionStorage&&f()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n);}return t;},cacheUserLanguage:function cacheUserLanguage(e,t){t.lookupSessionStorage&&f()&&window.sessionStorage.setItem(t.lookupSessionStorage,e);}},g={name:"navigator",lookup:function lookup(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language);}return t.length>0?t:void 0;}},m={name:"htmlTag",lookup:function lookup(e){var t,n=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t;}},y={name:"path",lookup:function lookup(e){var t;if("undefined"!=typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","");}else t=n[0].replace("/","");}return t;}},v={name:"subdomain",lookup:function lookup(e){var t;if("undefined"!=typeof window){var n=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);n instanceof Array&&(t="number"==typeof e.lookupFromSubdomainIndex?n[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):n[0].replace("http://","").replace("https://","").replace(".",""));}return t;}},b=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,t),this.type="languageDetector",this.detectors={},this.init(e,n);}var n,i;return n=t,(i=[{key:"init",value:function value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=o(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(a),this.addDetector(l),this.addDetector(p),this.addDetector(d),this.addDetector(g),this.addDetector(m),this.addDetector(y),this.addDetector(v);}},{key:"addDetector",value:function value(e){this.detectors[e.name]=e;}},{key:"detect",value:function value(e){var t=this;e||(e=this.options.order);var n=[];return e.forEach(function(e){if(t.detectors[e]){var i=t.detectors[e].lookup(t.options);i&&"string"==typeof i&&(i=[i]),i&&(n=n.concat(i));}}),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null;}},{key:"cacheUserLanguage",value:function value(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options);}));}}])&&e(n.prototype,i),t;}();return b.type="languageDetector",b;}),function(e,t){"object"==( false?0:_typeof(exports))&&"undefined"!="object"?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);}return e;},t={tName:"t",i18nName:"i18n",handleName:"localize",selectorAttr:"data-i18n",targetAttr:"i18n-target",optionsAttr:"i18n-options",useOptionsAttr:!1,parseDefaultValueFromContent:!0};return{init:function init(n,i){function o(t,i,o){function r(t,n){return a.parseDefaultValueFromContent?e({},t,{defaultValue:n}):t;}if(0!==i.length){var s="text";if(0===i.indexOf("[")){var l=i.split("]");i=l[1],s=l[0].substr(1,l[0].length-1);}if(i.indexOf(";")===i.length-1&&(i=i.substr(0,i.length-2)),"html"===s)t.html(n.t(i,r(o,t.html())));else if("text"===s)t.text(n.t(i,r(o,t.text())));else if("prepend"===s)t.prepend(n.t(i,r(o,t.html())));else if("append"===s)t.append(n.t(i,r(o,t.html())));else if(0===s.indexOf("data-")){var c=s.substr("data-".length),u=n.t(i,r(o,t.data(c)));t.data(c,u),t.attr(s,u);}else t.attr(s,n.t(i,r(o,t.attr(s))));}}function r(t,n){var r=t.attr(a.selectorAttr);if(r||void 0===r||!1===r||(r=t.text()||t.val()),r){var s=t,l=t.data(a.targetAttr);if(l&&(s=t.find(l)||t),n||!0!==a.useOptionsAttr||(n=t.data(a.optionsAttr)),n=n||{},r.indexOf(";")>=0){var c=r.split(";");i.each(c,function(e,t){""!==t&&o(s,t.trim(),n);});}else o(s,r,n);if(!0===a.useOptionsAttr){var u={};delete(u=e({clone:u},n)).lng,t.data(a.optionsAttr,u);}}}function s(e){return this.each(function(){r(i(this),e),i(this).find("["+a.selectorAttr+"]").each(function(){r(i(this),e);});});}var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a=e({},t,a),i[a.tName]=n.t.bind(n),i[a.i18nName]=n,i.fn[a.handleName]=s;}};}),function(e,t){"object"==( false?0:_typeof(exports))&&"object"==( false?0:_typeof(module))?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i});},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0});},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="",n(n.s=80);}([function(e,t,n){(function(t){var n="object",i=function i(e){return e&&e.Math==Math&&e;};e.exports=i((typeof globalThis==="undefined"?"undefined":_typeof(globalThis))==n&&globalThis)||i((typeof window==="undefined"?"undefined":_typeof(window))==n&&window)||i((typeof self==="undefined"?"undefined":_typeof(self))==n&&self)||i(_typeof(t)==n&&t)||Function("return this")();}).call(this,n(75));},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t);};},function(e,t,n){var i=n(0),o=n(11),r=n(33),s=n(62),a=i.Symbol,l=o("wks");e.exports=function(e){return l[e]||(l[e]=s&&a[e]||(s?a:r)("Symbol."+e));};},function(e,t,n){var i=n(6);e.exports=function(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e;};},function(e,t){e.exports=function(e){try{return!!e();}catch(e){return!0;}};},function(e,t,n){var i=n(8),o=n(7),r=n(10);e.exports=i?function(e,t,n){return o.f(e,t,r(1,n));}:function(e,t,n){return e[t]=n,e;};},function(e,t){e.exports=function(e){return"object"==_typeof(e)?null!==e:"function"==typeof e;};},function(e,t,n){var i=n(8),o=n(35),r=n(3),s=n(18),a=Object.defineProperty;t.f=i?a:function(e,t,n){if(r(e),t=s(t,!0),r(n),o)try{return a(e,t,n);}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e;};},function(e,t,n){var i=n(4);e.exports=!i(function(){return 7!=Object.defineProperty({},"a",{get:function get(){return 7;}}).a;});},function(e,t){e.exports={};},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t};};},function(e,t,n){var i=n(0),o=n(19),r=n(17),s=i["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{});})("versions",[]).push({version:"3.1.3",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(43)),o=s(n(41)),r=s(n(40));function s(e){return e&&e.__esModule?e:{"default":e};}t["default"]=Object.keys(o["default"]).map(function(e){return new i["default"](e,o["default"][e],r["default"][e]);}).reduce(function(e,t){return e[t.name]=t,e;},{});},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},function(e,t,n){var i=n(72),o=n(20);e.exports=function(e){return i(o(e));};},function(e,t){e.exports={};},function(e,t,n){var i=n(11),o=n(33),r=i("keys");e.exports=function(e){return r[e]||(r[e]=o(e));};},function(e,t){e.exports=!1;},function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value");};},function(e,t,n){var i=n(0),o=n(5);e.exports=function(e,t){try{o(i,e,t);}catch(n){i[e]=t;}return t;};},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e;};},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e);};},function(e,t,n){var i;/*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */ /*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var n=t.length,i=0;i<n;++i)o(e,t[i]);}e.prototype=Object.create(null);var n={}.hasOwnProperty,i=/\s+/;function o(e,o){if(o){var r=_typeof(o);"string"===r?function(e,t){for(var n=t.split(i),o=n.length,r=0;r<o;++r)e[n[r]]=!0;}(e,o):Array.isArray(o)?t(e,o):"object"===r?function(e,t){for(var i in t)n.call(t,i)&&(e[i]=!!t[i]);}(e,o):"number"===r&&function(e,t){e[t]=!0;}(e,o);}}return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=new e();t(r,i);var s=[];for(var a in r)r[a]&&s.push(a);return s.join(" ");};}();void 0!==e&&e.exports?e.exports=n:void 0===(i=function(){return n;}.apply(t,[]))||(e.exports=i);}();},function(e,t,n){var i=n(7).f,o=n(1),r=n(2)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,r)&&i(e,r,{configurable:!0,value:t});};},function(e,t,n){var i=n(20);e.exports=function(e){return Object(i(e));};},function(e,t,n){var i=n(1),o=n(24),r=n(16),s=n(63),a=r("IE_PROTO"),l=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=o(e),i(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null;};},function(e,t,n){"use strict";var i,o,r,s=n(25),a=n(5),l=n(1),c=n(2),u=n(17),p=c("iterator"),h=!1;[].keys&&("next"in(r=[].keys())?(o=s(s(r)))!==Object.prototype&&(i=o):h=!0),null==i&&(i={}),u||l(i,p)||a(i,p,function(){return this;}),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:h};},function(e,t,n){var i=n(21),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0;};},function(e,t,n){var i=n(1),o=n(14),r=n(68),s=n(15),a=r(!1);e.exports=function(e,t){var n,r=o(e),l=0,c=[];for(n in r)!i(s,n)&&i(r,n)&&c.push(n);for(;t.length>l;)i(r,n=t[l++])&&(~a(c,n)||c.push(n));return c;};},function(e,t,n){var i=n(0),o=n(11),r=n(5),s=n(1),a=n(19),l=n(36),c=n(37),u=c.get,p=c.enforce,h=String(l).split("toString");o("inspectSource",function(e){return l.call(e);}),(e.exports=function(e,t,n,o){var l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||r(n,"name",t),p(n).source=h.join("string"==typeof t?t:"")),e!==i?(l?!u&&e[t]&&(c=!0):delete e[t],c?e[t]=n:r(e,t,n)):c?e[t]=n:a(t,n);})(Function.prototype,"toString",function(){return"function"==typeof this&&u(this).source||l.call(this);});},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1);};},function(e,t,n){var i=n(8),o=n(73),r=n(10),s=n(14),a=n(18),l=n(1),c=n(35),u=Object.getOwnPropertyDescriptor;t.f=i?u:function(e,t){if(e=s(e),t=a(t,!0),c)try{return u(e,t);}catch(e){}if(l(e,t))return r(!o.f.call(e,t),e[t]);};},function(e,t,n){var i=n(0),o=n(31).f,r=n(5),s=n(29),a=n(19),l=n(71),c=n(65);e.exports=function(e,t){var n,u,p,h,f,d=e.target,g=e.global,m=e.stat;if(n=g?i:m?i[d]||a(d,{}):(i[d]||{}).prototype)for(u in t){if(h=t[u],p=e.noTargetGet?(f=o(n,u))&&f.value:n[u],!c(g?u:d+(m?".":"#")+u,e.forced)&&void 0!==p){if(_typeof(h)==_typeof(p))continue;l(h,p);}(e.sham||p&&p.sham)&&r(h,"sham",!0),s(n,u,h,e);}};},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36));};},function(e,t,n){var i=n(0),o=n(6),r=i.document,s=o(r)&&o(r.createElement);e.exports=function(e){return s?r.createElement(e):{};};},function(e,t,n){var i=n(8),o=n(4),r=n(34);e.exports=!i&&!o(function(){return 7!=Object.defineProperty(r("div"),"a",{get:function get(){return 7;}}).a;});},function(e,t,n){var i=n(11);e.exports=i("native-function-to-string",Function.toString);},function(e,t,n){var i,o,r,s=n(76),a=n(0),l=n(6),c=n(5),u=n(1),p=n(16),h=n(15),f=a.WeakMap;if(s){var d=new f(),g=d.get,m=d.has,y=d.set;i=function i(e,t){return y.call(d,e,t),t;},o=function o(e){return g.call(d,e)||{};},r=function r(e){return m.call(d,e);};}else{var v=p("state");h[v]=!0,i=function i(e,t){return c(e,v,t),t;},o=function o(e){return u(e,v)?e[v]:{};},r=function r(e){return u(e,v);};}e.exports={set:i,get:o,has:r,enforce:function enforce(e){return r(e)?o(e):i(e,{});},getterFor:function getterFor(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n;};}};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);}return e;},o=s(n(22)),r=s(n(12));function s(e){return e&&e.__esModule?e:{"default":e};}t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var t=document.querySelectorAll("[data-feather]");Array.from(t).forEach(function(t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(e){return Array.from(e.attributes).reduce(function(e,t){return e[t.name]=t.value,e;},{});}(e),s=n["data-feather"];delete n["data-feather"];var a=r["default"][s].toSvg(i({},t,n,{"class":(0,o["default"])(t["class"],n["class"])})),l=new DOMParser().parseFromString(a,"image/svg+xml").querySelector("svg");e.parentNode.replaceChild(l,e);}(t,e);});};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=(i=n(12))&&i.__esModule?i:{"default":i};t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!e)throw new Error("The required `key` (icon name) parameter is missing.");if(!o["default"][e])throw new Error("No icon matching '"+e+"'. See the complete list of icons at https://feathericons.com");return o["default"][e].toSvg(t);};},function(e){e.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],"delete":["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],"package":["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};},function(e){e.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',"delete":'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',"package":'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'};},function(e){e.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);}return e;},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t;};}(),r=a(n(22)),s=a(n(42));function a(e){return e&&e.__esModule?e:{"default":e};}var l=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,e),this.name=t,this.contents=n,this.tags=o,this.attrs=i({},s["default"],{"class":"feather feather-"+t});}return o(e,[{key:"toSvg",value:function value(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"<svg "+function(e){return Object.keys(e).map(function(t){return t+'="'+e[t]+'"';}).join(" ");}(i({},this.attrs,e,{"class":(0,r["default"])(this.attrs["class"],e["class"])}))+">"+this.contents+"</svg>";}},{key:"toString",value:function value(){return this.contents;}}]),e;}();t["default"]=l;},function(e,t,n){"use strict";var i=s(n(12)),o=s(n(39)),r=s(n(38));function s(e){return e&&e.__esModule?e:{"default":e};}e.exports={icons:i["default"],toSvg:o["default"],replace:r["default"]};},function(e,t,n){e.exports=n(0);},function(e,t,n){var i=n(2)("iterator"),o=!1;try{var r=0,s={next:function next(){return{done:!!r++};},"return":function _return(){o=!0;}};s[i]=function(){return this;},Array.from(s,function(){throw 2;});}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function next(){return{done:n=!0};}};},e(r);}catch(e){}return n;};},function(e,t,n){var i=n(30),o=n(2)("toStringTag"),r="Arguments"==i(function(){return arguments;}());e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t];}catch(e){}}(t=Object(e),o))?n:r?i(t):"Object"==(s=i(t))&&"function"==typeof t.callee?"Arguments":s;};},function(e,t,n){var i=n(47),o=n(9),r=n(2)("iterator");e.exports=function(e){if(null!=e)return e[r]||e["@@iterator"]||o[i(e)];};},function(e,t,n){"use strict";var i=n(18),o=n(7),r=n(10);e.exports=function(e,t,n){var s=i(t);s in e?o.f(e,s,r(0,n)):e[s]=n;};},function(e,t,n){var i=n(2),o=n(9),r=i("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[r]===e);};},function(e,t,n){var i=n(3);e.exports=function(e,t,n,o){try{return o?t(i(n)[0],n[1]):t(n);}catch(t){var r=e["return"];throw void 0!==r&&i(r.call(e)),t;}};},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e;};},function(e,t,n){var i=n(52);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t);};case 1:return function(n){return e.call(t,n);};case 2:return function(n,i){return e.call(t,n,i);};case 3:return function(n,i,o){return e.call(t,n,i,o);};}return function(){return e.apply(t,arguments);};};},function(e,t,n){"use strict";var i=n(53),o=n(24),r=n(51),s=n(50),a=n(27),l=n(49),c=n(48);e.exports=function(e){var t,n,u,p,h=o(e),f="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,y=0,v=c(h);if(m&&(g=i(g,d>2?arguments[2]:void 0,2)),null==v||f==Array&&s(v))for(n=new f(t=a(h.length));t>y;y++)l(n,y,m?g(h[y],y):h[y]);else for(p=v.call(h),n=new f();!(u=p.next()).done;y++)l(n,y,m?r(p,g,[u.value,y],!0):u.value);return n.length=y,n;};},function(e,t,n){var i=n(32),o=n(54);i({target:"Array",stat:!0,forced:!n(46)(function(e){Array.from(e);})},{from:o});},function(e,t,n){var i=n(6),o=n(3);e.exports=function(e,t){if(o(e),!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");};},function(e,t,n){var i=n(56);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array;}catch(e){}return function(n,o){return i(n,o),t?e.call(n,o):n.__proto__=o,n;};}():void 0);},function(e,t,n){var i=n(0).document;e.exports=i&&i.documentElement;},function(e,t,n){var i=n(28),o=n(13);e.exports=Object.keys||function(e){return i(e,o);};},function(e,t,n){var i=n(8),o=n(7),r=n(3),s=n(59);e.exports=i?Object.defineProperties:function(e,t){r(e);for(var n,i=s(t),a=i.length,l=0;a>l;)o.f(e,n=i[l++],t[n]);return e;};},function(e,t,n){var i=n(3),o=n(60),r=n(13),s=n(15),a=n(58),l=n(34),c=n(16)("IE_PROTO"),u=function u(){},_p=function p(){var e,t=l("iframe"),n=r.length;for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</script>"),e.close(),_p=e.F;n--;)delete _p.prototype[r[n]];return _p();};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=i(e),n=new u(),u.prototype=null,n[c]=e):n=_p(),void 0===t?n:o(n,t);},s[c]=!0;},function(e,t,n){var i=n(4);e.exports=!!Object.getOwnPropertySymbols&&!i(function(){return!String(Symbol());});},function(e,t,n){var i=n(4);e.exports=!i(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e())!==e.prototype;});},function(e,t,n){"use strict";var i=n(26).IteratorPrototype,o=n(61),r=n(10),s=n(23),a=n(9),l=function l(){return this;};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=o(i,{next:r(1,n)}),s(e,c,!1,!0),a[c]=l,e;};},function(e,t,n){var i=n(4),o=/#|\.prototype\./,r=function r(e,t){var n=a[s(e)];return n==c||n!=l&&("function"==typeof t?i(t):!!t);},s=r.normalize=function(e){return String(e).replace(o,".").toLowerCase();},a=r.data={},l=r.NATIVE="N",c=r.POLYFILL="P";e.exports=r;},function(e,t){t.f=Object.getOwnPropertySymbols;},function(e,t,n){var i=n(21),o=Math.max,r=Math.min;e.exports=function(e,t){var n=i(e);return n<0?o(n+t,0):r(n,t);};},function(e,t,n){var i=n(14),o=n(27),r=n(67);e.exports=function(e){return function(t,n,s){var a,l=i(t),c=o(l.length),u=r(s,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0;}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1;};};},function(e,t,n){var i=n(28),o=n(13).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o);};},function(e,t,n){var i=n(0),o=n(69),r=n(66),s=n(3),a=i.Reflect;e.exports=a&&a.ownKeys||function(e){var t=o.f(s(e)),n=r.f;return n?t.concat(n(e)):t;};},function(e,t,n){var i=n(1),o=n(70),r=n(31),s=n(7);e.exports=function(e,t){for(var n=o(t),a=s.f,l=r.f,c=0;c<n.length;c++){var u=n[c];i(e,u)||a(e,u,l(t,u));}};},function(e,t,n){var i=n(4),o=n(30),r="".split;e.exports=i(function(){return!Object("z").propertyIsEnumerable(0);})?function(e){return"String"==o(e)?r.call(e,""):Object(e);}:Object;},function(e,t,n){"use strict";var i={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!i.call({1:2},1);t.f=r?function(e){var t=o(this,e);return!!t&&t.enumerable;}:i;},function(e,t,n){"use strict";var i=n(32),o=n(64),r=n(25),s=n(57),a=n(23),l=n(5),c=n(29),u=n(2),p=n(17),h=n(9),f=n(26),d=f.IteratorPrototype,g=f.BUGGY_SAFARI_ITERATORS,m=u("iterator"),y=function y(){return this;};e.exports=function(e,t,n,u,f,v,b){o(n,t,u);var x,w,_,k=function k(e){if(e===f&&A)return A;if(!g&&e in S)return S[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e);};}return function(){return new n(this);};},E=t+" Iterator",T=!1,S=e.prototype,C=S[m]||S["@@iterator"]||f&&S[f],A=!g&&C||k(f),O="Array"==t&&S.entries||C;if(O&&(x=r(O.call(new e())),d!==Object.prototype&&x.next&&(p||r(x)===d||(s?s(x,d):"function"!=typeof x[m]&&l(x,m,y)),a(x,E,!0,!0),p&&(h[E]=y))),"values"==f&&C&&"values"!==C.name&&(T=!0,A=function A(){return C.call(this);}),p&&!b||S[m]===A||l(S,m,A),h[t]=A,f)if(w={values:k("values"),keys:v?A:k("keys"),entries:k("entries")},b)for(_ in w)!g&&!T&&_ in S||c(S,_,w[_]);else i({target:t,proto:!0,forced:g||T},w);return w;};},function(e,t){var n;n=function(){return this;}();try{n=n||Function("return this")()||(0,eval)("this");}catch(e){"object"==(typeof window==="undefined"?"undefined":_typeof(window))&&(n=window);}e.exports=n;},function(e,t,n){var i=n(0),o=n(36),r=i.WeakMap;e.exports="function"==typeof r&&/native code/.test(o.call(r));},function(e,t,n){var i=n(21),o=n(20);e.exports=function(e,t,n){var r,s,a=String(o(e)),l=i(t),c=a.length;return l<0||l>=c?n?"":void 0:(r=a.charCodeAt(l))<55296||r>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?n?a.charAt(l):r:n?a.slice(l,l+2):s-56320+(r-55296<<10)+65536;};},function(e,t,n){"use strict";var i=n(77),o=n(37),r=n(74),s=o.set,a=o.getterFor("String Iterator");r(String,"String",function(e){s(this,{type:"String Iterator",string:String(e),index:0});},function(){var e,t=a(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=i(n,o,!0),t.index+=e.length,{value:e,done:!1});});},function(e,t,n){n(78),n(55);var i=n(45);e.exports=i.Array.from;},function(e,t,n){n(79),e.exports=n(44);}]);}),function(e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}(function(e){"use strict";var t=0;e.fn.TouchSpin=function(n){var i={min:0,max:100,initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalup:"+",verticaldown:"-",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"-",buttonup_txt:"+",callback_before_calculation:function callback_before_calculation(e){return e;},callback_after_calculation:function callback_after_calculation(e){return e;}},o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){var r,s,a,l,c,u,p,h,f,d,g=e(this),m=g.data(),y=0,v=!1;function b(){""===r.prefix&&(s=c.prefix.detach()),""===r.postfix&&(a=c.postfix.detach());}function x(){var e,t,n;""!==(e=r.callback_before_calculation(g.val()))?0<r.decimals&&"."===e||(t=parseFloat(e),isNaN(t)&&(t=""!==r.replacementval?r.replacementval:0),(n=t).toString()!==e&&(n=t),null!==r.min&&t<r.min&&(n=r.min),null!==r.max&&t>r.max&&(n=r.max),n=function(e){switch(r.forcestepdivisibility){case"round":return(Math.round(e/r.step)*r.step).toFixed(r.decimals);case"floor":return(Math.floor(e/r.step)*r.step).toFixed(r.decimals);case"ceil":return(Math.ceil(e/r.step)*r.step).toFixed(r.decimals);default:return e.toFixed(r.decimals);}}(n),Number(e).toString()!==n.toString()&&(g.val(n),g.trigger("change"))):""!==r.replacementval&&(g.val(r.replacementval),g.trigger("change"));}function w(){if(r.booster){var e=Math.pow(2,Math.floor(y/r.boostat))*r.step;return r.maxboostedstep&&e>r.maxboostedstep&&(e=r.maxboostedstep,u=Math.round(u/e)*e),Math.max(r.step,e);}return r.step;}function _(){return"number"==typeof r.firstclickvalueifempty?r.firstclickvalueifempty:(r.min+r.max)/2;}function k(){x();var e,t=u=parseFloat(r.callback_before_calculation(c.input.val()));isNaN(u)?u=_():(e=w(),u+=e),null!==r.max&&u>r.max&&(u=r.max,g.trigger("touchspin.on.max"),C()),c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))),t!==u&&g.trigger("change");}function E(){x();var e,t=u=parseFloat(r.callback_before_calculation(c.input.val()));isNaN(u)?u=_():(e=w(),u-=e),null!==r.min&&u<r.min&&(u=r.min,g.trigger("touchspin.on.min"),C()),c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))),t!==u&&g.trigger("change");}function T(){C(),y=0,v="down",g.trigger("touchspin.on.startspin"),g.trigger("touchspin.on.startdownspin"),f=setTimeout(function(){p=setInterval(function(){y++,E();},r.stepinterval);},r.stepintervaldelay);}function S(){C(),y=0,v="up",g.trigger("touchspin.on.startspin"),g.trigger("touchspin.on.startupspin"),d=setTimeout(function(){h=setInterval(function(){y++,k();},r.stepinterval);},r.stepintervaldelay);}function C(){switch(clearTimeout(f),clearTimeout(d),clearInterval(p),clearInterval(h),v){case"up":g.trigger("touchspin.on.stopupspin"),g.trigger("touchspin.on.stopspin");break;case"down":g.trigger("touchspin.on.stopdownspin"),g.trigger("touchspin.on.stopspin");}y=0,v=!1;}!function(){if(!g.data("alreadyinitialized"))g.data("alreadyinitialized",!0),t+=1,g.data("spinnerid",t),g.is("input")?(""!==(r=e.extend({},i,m,function(){var t={};return e.each(o,function(e,n){var i="bts-"+n;g.is("[data-"+i+"]")&&(t[e]=g.data(i));}),t;}(),n)).initval&&""===g.val()&&g.val(r.initval),x(),function(){var t=g.val(),n=g.parent();""!==t&&(t=r.callback_after_calculation(Number(t).toFixed(r.decimals))),g.data("initvalue",t).val(t),g.addClass("form-control"),n.hasClass("input-group")?function(t){t.addClass("bootstrap-touchspin");var n,i,o=g.prev(),s=g.next(),a='<span class="input-group-addon bootstrap-touchspin-prefix bootstrap-touchspin-injected"><span class="input-group-text">'+r.prefix+"</span></span>",c='<span class="input-group-addon bootstrap-touchspin-postfix bootstrap-touchspin-injected"><span class="input-group-text">'+r.postfix+"</span></span>";o.hasClass("input-group-btn")||o.hasClass("input-group-text")?(n='<button class="'+r.buttondown_class+' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">'+r.buttondown_txt+"</button>",o.append(n)):(n='<span class="input-group-btn bootstrap-touchspin-injected"><button class="'+r.buttondown_class+' bootstrap-touchspin-down" type="button">'+r.buttondown_txt+"</button></span>",e(n).insertBefore(g)),s.hasClass("input-group-btn")||s.hasClass("input-group-text")?(i='<button class="'+r.buttonup_class+' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">'+r.buttonup_txt+"</button>",s.text(i)):(i='<span class="input-group-btn bootstrap-touchspin-injected"><button class="'+r.buttonup_class+' bootstrap-touchspin-up" type="button">'+r.buttonup_txt+"</button></span>",e(i).insertAfter(g)),e(a).insertBefore(g),e(c).insertAfter(g),l=t;}(n):function(){var t,n="";g.hasClass("input-sm")&&(n="input-group-sm"),g.hasClass("input-lg")&&(n="input-group-lg"),t=r.verticalbuttons?'<div class="input-group '+n+' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">'+r.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">'+r.postfix+'</span></span><span class="input-group-btn-vertical"><button class="'+r.buttondown_class+" bootstrap-touchspin-up "+r.verticalupclass+'" type="button">'+r.verticalup+'</button><button class="'+r.buttonup_class+" bootstrap-touchspin-down "+r.verticaldownclass+'" type="button">'+r.verticaldown+"</button></span></div>":'<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn"><button class="'+r.buttondown_class+' bootstrap-touchspin-down" type="button">'+r.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">'+r.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">'+r.postfix+'</span></span><span class="input-group-btn"><button class="'+r.buttonup_class+' bootstrap-touchspin-up" type="button">'+r.buttonup_txt+"</button></span></div>",l=e(t).insertBefore(g),e(".bootstrap-touchspin-prefix",l).after(g),g.hasClass("input-sm")?l.addClass("input-group-sm"):g.hasClass("input-lg")&&l.addClass("input-group-lg");}();}(),c={down:e(".bootstrap-touchspin-down",l),up:e(".bootstrap-touchspin-up",l),input:e("input",l),prefix:e(".bootstrap-touchspin-prefix",l).addClass(r.prefix_extraclass),postfix:e(".bootstrap-touchspin-postfix",l).addClass(r.postfix_extraclass)},b(),g.on("keydown.touchspin",function(e){var t=e.keyCode||e.which;38===t?("up"!==v&&(k(),S()),e.preventDefault()):40===t&&("down"!==v&&(E(),T()),e.preventDefault());}),g.on("keyup.touchspin",function(e){var t=e.keyCode||e.which;38!==t&&40!==t||C();}),g.on("blur.touchspin",function(){x(),g.val(r.callback_after_calculation(g.val()));}),c.down.on("keydown",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||("down"!==v&&(E(),T()),e.preventDefault());}),c.down.on("keyup.touchspin",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||C();}),c.up.on("keydown.touchspin",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||("up"!==v&&(k(),S()),e.preventDefault());}),c.up.on("keyup.touchspin",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||C();}),c.down.on("mousedown.touchspin",function(e){c.down.off("touchstart.touchspin"),g.is(":disabled")||(E(),T(),e.preventDefault(),e.stopPropagation());}),c.down.on("touchstart.touchspin",function(e){c.down.off("mousedown.touchspin"),g.is(":disabled")||(E(),T(),e.preventDefault(),e.stopPropagation());}),c.up.on("mousedown.touchspin",function(e){c.up.off("touchstart.touchspin"),g.is(":disabled")||(k(),S(),e.preventDefault(),e.stopPropagation());}),c.up.on("touchstart.touchspin",function(e){c.up.off("mousedown.touchspin"),g.is(":disabled")||(k(),S(),e.preventDefault(),e.stopPropagation());}),c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(e){v&&(e.stopPropagation(),C());}),c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(e){v&&(e.stopPropagation(),C());}),c.down.on("mousemove.touchspin touchmove.touchspin",function(e){v&&(e.stopPropagation(),e.preventDefault());}),c.up.on("mousemove.touchspin touchmove.touchspin",function(e){v&&(e.stopPropagation(),e.preventDefault());}),g.on("mousewheel.touchspin DOMMouseScroll.touchspin",function(e){if(r.mousewheel&&g.is(":focus")){var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;e.stopPropagation(),e.preventDefault(),(t<0?E:k)();}}),g.on("touchspin.destroy",function(){!function(){var t=g.parent();C(),g.off(".touchspin"),t.hasClass("bootstrap-touchspin-injected")?(g.siblings().remove(),g.unwrap()):(e(".bootstrap-touchspin-injected",t).remove(),t.removeClass("bootstrap-touchspin")),g.data("alreadyinitialized",!1);}();}),g.on("touchspin.uponce",function(){C(),k();}),g.on("touchspin.downonce",function(){C(),E();}),g.on("touchspin.startupspin",function(){S();}),g.on("touchspin.startdownspin",function(){T();}),g.on("touchspin.stopspin",function(){C();}),g.on("touchspin.updatesettings",function(t,n){!function(t){(function(t){r=e.extend({},r,t),t.postfix&&(0===g.parent().find(".bootstrap-touchspin-postfix").length&&a.insertAfter(g),g.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix)),t.prefix&&(0===g.parent().find(".bootstrap-touchspin-prefix").length&&s.insertBefore(g),g.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix)),b();})(t),x();var n=c.input.val();""!==n&&(n=Number(r.callback_before_calculation(c.input.val())),c.input.val(r.callback_after_calculation(Number(n).toFixed(r.decimals))));}(n);})):console.log("Must be an input.");}();});};});

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module) {

/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );


/***/ }),

/***/ "./node_modules/feather-icons/dist/feather.js":
/*!****************************************************!*\
  !*** ./node_modules/feather-icons/dist/feather.js ***!
  \****************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_574__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_574__);
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
/******/ 	__nested_webpack_require_574__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_574__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_574__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_574__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_574__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_574__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_574__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_574__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_574__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_574__(__nested_webpack_require_574__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","table":"<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"></path>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_63298__) {

__nested_webpack_require_63298__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__nested_webpack_require_63298__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __nested_webpack_require_63298__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_64448__) {

var isObject = __nested_webpack_require_64448__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_65029__) {

"use strict";

var bind = __nested_webpack_require_65029__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __nested_webpack_require_65029__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __nested_webpack_require_65029__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __nested_webpack_require_65029__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __nested_webpack_require_65029__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __nested_webpack_require_65029__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __nested_webpack_require_65029__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_67651__) {

var toIndexedObject = __nested_webpack_require_67651__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __nested_webpack_require_67651__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __nested_webpack_require_67651__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_69373__) {

var aFunction = __nested_webpack_require_69373__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_70462__) {

var anObject = __nested_webpack_require_70462__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_71399__) {

var wellKnownSymbol = __nested_webpack_require_71399__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_73157__) {

var classofRaw = __nested_webpack_require_73157__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __nested_webpack_require_73157__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_74598__) {

var has = __nested_webpack_require_74598__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __nested_webpack_require_74598__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __nested_webpack_require_74598__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __nested_webpack_require_74598__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_75897__) {

var fails = __nested_webpack_require_75897__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_76570__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_76570__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __nested_webpack_require_76570__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __nested_webpack_require_76570__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __nested_webpack_require_76570__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __nested_webpack_require_76570__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_78584__) {

"use strict";

var toPrimitive = __nested_webpack_require_78584__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __nested_webpack_require_78584__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_78584__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_79634__) {

"use strict";

var $ = __nested_webpack_require_79634__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __nested_webpack_require_79634__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __nested_webpack_require_79634__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __nested_webpack_require_79634__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __nested_webpack_require_79634__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __nested_webpack_require_79634__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_79634__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __nested_webpack_require_79634__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_79634__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __nested_webpack_require_79634__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __nested_webpack_require_79634__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_84693__) {

var fails = __nested_webpack_require_84693__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_85356__) {

var global = __nested_webpack_require_85356__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_85356__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_86646__) {

var global = __nested_webpack_require_86646__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __nested_webpack_require_86646__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __nested_webpack_require_86646__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_86646__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __nested_webpack_require_86646__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __nested_webpack_require_86646__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __nested_webpack_require_86646__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90354__) {

var shared = __nested_webpack_require_90354__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90907__) {

var classof = __nested_webpack_require_90907__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __nested_webpack_require_90907__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __nested_webpack_require_90907__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_91771__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_91771__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_93479__) {

var DESCRIPTORS = __nested_webpack_require_93479__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_93479__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_93479__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_94456__) {

var global = __nested_webpack_require_94456__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_95004__) {

var DESCRIPTORS = __nested_webpack_require_95004__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __nested_webpack_require_95004__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __nested_webpack_require_95004__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_95941__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __nested_webpack_require_95941__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __nested_webpack_require_95941__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_96924__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_96924__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __nested_webpack_require_96924__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_96924__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __nested_webpack_require_96924__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __nested_webpack_require_96924__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __nested_webpack_require_96924__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __nested_webpack_require_96924__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_99240__) {

var wellKnownSymbol = __nested_webpack_require_99240__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __nested_webpack_require_99240__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_100071__) {

var fails = __nested_webpack_require_100071__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_101805__) {

"use strict";

var getPrototypeOf = __nested_webpack_require_101805__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __nested_webpack_require_101805__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_101805__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_101805__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_101805__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_104093__) {

var fails = __nested_webpack_require_104093__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_104753__) {

var global = __nested_webpack_require_104753__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __nested_webpack_require_104753__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_105495__) {

var anObject = __nested_webpack_require_105495__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __nested_webpack_require_105495__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __nested_webpack_require_105495__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __nested_webpack_require_105495__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __nested_webpack_require_105495__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __nested_webpack_require_105495__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __nested_webpack_require_105495__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_108128__) {

var DESCRIPTORS = __nested_webpack_require_108128__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_108128__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __nested_webpack_require_108128__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __nested_webpack_require_108128__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_109325__) {

var DESCRIPTORS = __nested_webpack_require_109325__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __nested_webpack_require_109325__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __nested_webpack_require_109325__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __nested_webpack_require_109325__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_110737__) {

var DESCRIPTORS = __nested_webpack_require_110737__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __nested_webpack_require_110737__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __nested_webpack_require_110737__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __nested_webpack_require_110737__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __nested_webpack_require_110737__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __nested_webpack_require_110737__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __nested_webpack_require_110737__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_112539__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __nested_webpack_require_112539__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_112539__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_113879__) {

var has = __nested_webpack_require_113879__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __nested_webpack_require_113879__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __nested_webpack_require_113879__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_113879__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_115191__) {

var has = __nested_webpack_require_115191__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __nested_webpack_require_115191__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __nested_webpack_require_115191__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __nested_webpack_require_115191__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_116427__) {

var internalObjectKeys = __nested_webpack_require_116427__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_116427__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_118089__) {

var validateSetPrototypeOfArguments = __nested_webpack_require_118089__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_119246__) {

var global = __nested_webpack_require_119246__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __nested_webpack_require_119246__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __nested_webpack_require_119246__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __nested_webpack_require_119246__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120488__) {

module.exports = __nested_webpack_require_120488__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120927__) {

var global = __nested_webpack_require_120927__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_120927__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __nested_webpack_require_120927__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_120927__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __nested_webpack_require_120927__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __nested_webpack_require_120927__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __nested_webpack_require_120927__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_123907__) {

var global = __nested_webpack_require_123907__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __nested_webpack_require_123907__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_124625__) {

var defineProperty = __nested_webpack_require_124625__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __nested_webpack_require_124625__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_124625__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_125596__) {

var shared = __nested_webpack_require_125596__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_125596__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_126233__) {

var global = __nested_webpack_require_126233__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __nested_webpack_require_126233__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __nested_webpack_require_126233__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_127243__) {

var toInteger = __nested_webpack_require_127243__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __nested_webpack_require_127243__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_128591__) {

var toInteger = __nested_webpack_require_128591__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_129459__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_129459__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __nested_webpack_require_129459__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_130797__) {

var toInteger = __nested_webpack_require_130797__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_131499__) {

var requireObjectCoercible = __nested_webpack_require_131499__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_132177__) {

var isObject = __nested_webpack_require_132177__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
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

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_133804__) {

var isObject = __nested_webpack_require_133804__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __nested_webpack_require_133804__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_134575__) {

var global = __nested_webpack_require_134575__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_134575__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_134575__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __nested_webpack_require_134575__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_135577__) {

var $ = __nested_webpack_require_135577__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __nested_webpack_require_135577__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __nested_webpack_require_135577__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_136591__) {

"use strict";

var codePointAt = __nested_webpack_require_136591__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __nested_webpack_require_136591__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __nested_webpack_require_136591__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_139336__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __nested_webpack_require_139336__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __nested_webpack_require_139336__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_142494__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __nested_webpack_require_142494__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __nested_webpack_require_142494__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __nested_webpack_require_142494__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_143470__) {

"use strict";


var _icons = __nested_webpack_require_143470__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __nested_webpack_require_143470__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __nested_webpack_require_143470__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_144252__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __nested_webpack_require_144252__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __nested_webpack_require_144252__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-buoy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_157390__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __nested_webpack_require_157390__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_158612__) {

__nested_webpack_require_158612__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __nested_webpack_require_158612__(/*! /home/runner/work/feather/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=feather.js.map

/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( window, __webpack_require__(/*! ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js") );
  } else {
    // browser global
    window.imagesLoaded = factory( window, window.EvEmitter );
  }

} )( typeof window !== 'undefined' ? window : this,
    function factory( window, EvEmitter ) {

let $ = window.jQuery;
let console = window.console;

// -------------------------- helpers -------------------------- //

// turn element or nodeList into an array
function makeArray( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {[Array, Element, NodeList, String]} elem
 * @param {[Object, Function]} options - if function, use as callback
 * @param {Function} onAlways - callback function
 * @returns {ImagesLoaded}
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  let queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = {};
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    Object.assign( this.options, options );
  }

  if ( onAlways ) this.on( 'always', onAlways );

  this.getImages();
  // add jQuery Deferred object
  if ( $ ) this.jqDeferred = new $.Deferred();

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

const elementNodeTypes = [ 1, 9, 11 ];

/**
 * @param {Node} elem
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName === 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  let { nodeType } = elem;
  if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;

  let childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( let img of childImgs ) {
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    let children = elem.querySelectorAll( this.options.background );
    for ( let child of children ) {
      this.addElementBackgroundImages( child );
    }
  }
};

const reURL = /url\((['"])?(.*?)\1\)/gi;

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  let style = getComputedStyle( elem );
  // Firefox returns null if in a hidden iframe https://bugzil.la/548397
  if ( !style ) return;

  // get url inside url("...")
  let matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    let url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  let loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  let background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  /* eslint-disable-next-line func-style */
  let onProgress = ( image, elem, message ) => {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( () => {
      this.progress( image, elem, message );
    } );
  };

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  } );
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount === this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( `progress: ${message}`, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  let eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  // add crossOrigin attribute. #204
  if ( this.img.crossOrigin ) {
    this.proxyImage.crossOrigin = this.img.crossOrigin;
  }
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.currentSrc || this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  let { parentNode } = this.img;
  // emit progress with parent <picture> or self <img>
  let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
  this.emitEvent( 'progress', [ this, elem, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) return;

  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, onAlways ) {
    let instance = new ImagesLoaded( this, options, onAlways );
    return instance.jqDeferred.promise( $( this ) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

} );


/***/ }),

/***/ "./node_modules/jquery-validation/dist/jquery.validate.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery-validation/dist/jquery.validate.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.20.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2023 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Abort any pending Ajax request from a previous call to this method.
			this.abortRequest( element );

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				if ( this.settings && this.settings.escapeHtml ) {
					error.text( message || "" );
				} else {
					error.html( message || "" );
				}
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass );

				if ( this.settings && this.settings.escapeHtml ) {
					error.text( message || "" );
				} else {
					error.html( message || "" );
				}

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			if ( string === undefined ) {
				return "";
			}

			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		elementAjaxPort: function( element ) {
			return "validate" + element.name;
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0 ) {
				$( this.currentForm ).trigger( "submit" );

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		abortRequest: function( element ) {
			var port;

			if ( this.pending[ element.name ] ) {
				port = this.elementAjaxPort( element );
				$.ajaxAbort( port );

				this.pendingRequest--;

				// Sometimes synchronization fails, make sure pendingRequest is never < 0
				if ( this.pendingRequest < 0 ) {
					this.pendingRequest = 0;
				}

				delete this.pending[ element.name ];
				$( element ).removeClass( this.settings.pendingClass );
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ type === "date" ? "dateISO" : method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: this.elementAjaxPort( element ),
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
//        $.ajaxAbort( port );
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			$.ajaxAbort( port );
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			$.ajaxAbort( port );
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}

// Abort the previous request without sending a new one
$.ajaxAbort = function( port ) {
	if ( pendingRequests[ port ] ) {
		pendingRequests[ port ].abort();
		delete pendingRequests[ port ];
	}
};
return $;
}));

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendors.min.js */ "./resources/js/vendors.min.js");
/* harmony import */ var _vendors_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-login.js */ "./resources/js/auth-login.js");
/* harmony import */ var _auth_register_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-register.js */ "./resources/js/auth-register.js");
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.js */ "./resources/js/custom.js");
/* harmony import */ var _custom_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_custom_js__WEBPACK_IMPORTED_MODULE_6__);




// Make jQuery and Feather Icons globally available
window.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.feather = (feather_icons__WEBPACK_IMPORTED_MODULE_2___default());




})();

/******/ })()
;
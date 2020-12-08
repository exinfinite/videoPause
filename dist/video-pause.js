(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: vid_pause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vid_pause\", function() { return vid_pause; });\n/* harmony import */ var _viewObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewObserver */ \"./src/viewObserver.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar vidPause = /*#__PURE__*/function () {\n  function vidPause() {\n    _classCallCheck(this, vidPause);\n  }\n\n  _createClass(vidPause, [{\n    key: \"init\",\n    value: function init(_ref) {\n      var _ref$html = _ref.html5,\n          html5 = _ref$html === void 0 ? true : _ref$html,\n          _ref$yt = _ref.yt,\n          yt = _ref$yt === void 0 ? true : _ref$yt,\n          _ref$options = _ref.options,\n          options = _ref$options === void 0 ? {} : _ref$options;\n      this.obsrv = new _viewObserver__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\n      html5 ? this.html5() : '';\n      yt ? this.yt() : '';\n      return Object.assign({}, this);\n    }\n  }, {\n    key: \"html5\",\n    value: function html5() {\n      var state = {\n        HAVE_NOTHING: 0,\n        HAVE_METADATA: 1,\n        HAVE_CURRENT_DATA: 2,\n        HAVE_FUTURE_DATA: 3,\n        HAVE_ENOUGH_DATA: 4\n      };\n      this.obsrv.observe(Array.from(document.querySelectorAll(\"video\")), function (entry) {\n        var vid = entry.target;\n\n        if (!entry.isIntersecting) {\n          return vid.readyState == state.HAVE_ENOUGH_DATA ? vid.pause() : '';\n        }\n\n        if (!!vid.autoplay) {\n          return vid.readyState == state.HAVE_ENOUGH_DATA ? vid.play() : '';\n        }\n      });\n    }\n  }, {\n    key: \"yt\",\n    value: function yt() {\n      var videos = function () {\n        var els = Array.from(document.querySelectorAll(\"iframe\"));\n        return els.filter(function (el) {\n          var _ref2 = [el.src, el.dataset.src],\n              src = _ref2[0],\n              data_src = _ref2[1];\n          return src.concat(data_src).includes(\"youtube.com/embed\");\n        });\n      }();\n\n      this.obsrv.observe(videos, function (entry) {\n        var vid = entry.target.contentWindow;\n\n        if (!entry.isIntersecting) {\n          vid.postMessage('{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}', '*');\n        }\n      });\n    }\n  }]);\n\n  return vidPause;\n}();\n\nvar vid_pause = new vidPause();\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/viewObserver.ts":
/*!*****************************!*\
  !*** ./src/viewObserver.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return viewObserver; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar viewObserver = /*#__PURE__*/function () {\n  function viewObserver() {\n    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, viewObserver);\n\n    this.cfg = cfg;\n  }\n\n  _createClass(viewObserver, [{\n    key: \"obInit\",\n    value: function obInit(cb) {\n      return new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          return cb.call(null, entry);\n        });\n      }, this.cfg);\n    }\n  }, {\n    key: \"observe\",\n    value: function observe($els, cb) {\n      var observer = this.obInit(cb);\n      $els.forEach(function (vid) {\n        return observer.observe(vid);\n      });\n    }\n  }]);\n\n  return viewObserver;\n}();\n\n\n\n//# sourceURL=webpack:///./src/viewObserver.ts?");

/***/ })

/******/ });
});
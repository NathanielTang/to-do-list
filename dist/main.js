/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-columns: 1fr 3fr;\\n  grid-template-rows: 15vh 85vh;\\n}\\n#header {\\n  grid-row: 1/2;\\n  grid-column: 1/3;\\n  background-color: #06b6d4;\\n\\n}\\n\\n#sidebar {\\n  grid-row: 2/3;\\n  grid-column: 1/2;\\n  background-color: #67e8f9;\\n}\\n\\n#content {\\n  grid-row: 2/3;\\n  grid-column: 2/3;\\n  background-color: #cffafe;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.title {\\n    color: #155e75;\\n    font-family: sans-serif;\\n    margin-left: 50px;\\n}\\n\\n#logo {\\n    color: #ecfeff;\\n}\\n\\n/* sidebar */\\n#sidebar-content {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n.project {\\n  border-radius: 10px;;\\n  border: #155e75;\\n  background-color:#cffafe;\\n  color:#155e75;\\n  padding: 2px 20px;\\n  margin: 5px 0px;\\n  font-size: 22px;\\n  cursor: pointer;\\n}\\n\\n.project:hover  {\\n  background-color:#155e75;\\n  color:#cffafe;\\n}\\n#sidebar-button-div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 25px;\\n}\\n#addProject {\\n    border-radius: 50%;\\n    border: #155e75;\\n    background-color:#cffafe;\\n    color:#155e75;\\n    width: 50px;\\n    height: 50px;\\n    font-size: 32px;\\n    cursor: pointer;\\n}\\n\\n#addProject:hover  {\\n  background-color:#155e75;\\n  color:#cffafe;\\n}\\n/* task */\\n\\n.task {\\n  background-color:#06b6d4;\\n  color:#cffafe;\\n  border-radius: 22px;\\n    margin: 10px;\\n    padding: 5px;\\n    display: flex;\\n    gap: 5px;\\n    align-items: center;\\n    font-size: 22px;\\n    font-family: sans-serif;\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  grid-template-rows: auto 15px;\\n  overflow: hidden;\\n}\\n\\n/* cannot style checkbox\\n.checkbox {\\n  font-size: 33px;\\n} */\\n\\n.description {\\n  color: purple;\\n  font-size: 16px;\\n  background-color: #06b6d4;\\n  border: none;\\n  border-top: solid black 1px;\\n}\\n\\n\\n.inputDiv {\\n  font-size: 16px;\\n  padding: 15px;\\n  background-color:#155e75;\\n  color:white;\\n  font-family: sans-serif;\\n  display: flex;\\n  gap: 50px;\\n}\\n\\n.inputDiv>input {\\n  font-size: var(--task-font);\\n}\\n#inputBtn {\\n  color:#cffafe;\\n  background-color:#06b6d4;\\n  font-weight: bold;\\n  border-radius: 5px;\\n  font-size: 18px;\\n  \\n}\\n\\n/* project input modal */\\n\\n.project-popup {\\n  --popup-size: 44px;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 200ms ease-in-out;\\n  border: solid 1px black;\\n  padding: 22px;\\n  border-radius: 5px;\\n  z-index: 10;\\n  background-color: #67e8f9;\\n  color:#155e75;\\n  font-size: var(--popup-size)\\n}\\n\\n.project-popup.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n.project-popup>button {\\n  background-color: #155e75;\\n  color:#ecfeff;\\n  font-size: var(--popup-size)\\n}\\n\\n.project-popup>input {\\n  font-size: var(--popup-size);\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  transition: 200ms ease-in-out;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  \\n  pointer-events: none;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n  background-color: rgba(0,0,0,0.5);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContent\": () => (/* binding */ createContent),\n/* harmony export */   \"createSidebar\": () => (/* binding */ createSidebar),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"taskInput\": () => (/* binding */ taskInput)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst content = document.getElementById('content');\n\nfunction render(array, project = 'All') {\n  if (project === 'All') {\n    createContent(array);\n  } else {\n    const projectArray = [];\n    array.forEach((element) => {\n      if (element.project === project) {\n        projectArray.push(element);\n      }\n      createContent(projectArray);\n    });\n  }\n  taskInput();\n}\n\n// content\nfunction createContent(array) {\n  content.innerHTML = '';\n\n  array.forEach((element) => {\n    const { title } = element;\n    const { description } = element;\n    const { dueDate } = element;\n    const { priority } = element;\n    const { completed } = element;\n\n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task');\n    content.appendChild(taskDiv);\n\n    const completedSpot = document.createElement('input');\n    completedSpot.setAttribute('type', 'checkbox');\n    completedSpot.classList.add('checkbox');\n    const titleSpot = document.createElement('p');\n    const descriptionSpot = document.createElement('textarea');\n    descriptionSpot.classList.add('description');\n    descriptionSpot.setAttribute('rows', '3');\n    descriptionSpot.setAttribute('cols', '100');\n\n    const dueDateSpot = document.createElement('p');\n    const prioritySpot = document.createElement('p');\n\n    if (completed === 'yes') {\n      completedSpot.checked = true;\n    }\n\n    completedSpot.addEventListener('click', () => {\n      if (completed === 'yes') {\n        element.completed = 'no';\n      }\n      if (completed === 'no') {\n        element.completed = 'yes';\n      }\n    });\n\n    descriptionSpot.addEventListener('focusout', () => {\n      element.description = descriptionSpot.value;\n    });\n\n    const appendChildArray = [];\n    appendChildArray.push(\n      completedSpot,\n      titleSpot,\n      dueDateSpot,\n      prioritySpot,\n    );\n    appendChildArray.forEach((element) => {\n      taskDiv.appendChild(element);\n    });\n    taskDiv.appendChild(descriptionSpot);\n    titleSpot.textContent = title;\n    descriptionSpot.textContent = description;\n    dueDateSpot.textContent = dueDate;\n  });\n}\n\n// sidebar\n\nfunction createSidebar(array) {\n  // array of the projects used to create sidebar. Add eventlistener to each div that calls on the\n  // switchToProject() function.\n  const sidebar = document.getElementById('sidebar-content');\n  sidebar.innerHTML = '';\n  array.forEach((element) => {\n    const projectDiv = document.createElement('div');\n    projectDiv.textContent = element.name;\n    projectDiv.classList.add('project');\n\n    sidebar.appendChild(projectDiv);\n\n    projectDiv.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.switchToProject);\n  });\n}\n\n// task input\n// put this at the end of the render function so that the input is at the bottom\n\nfunction taskInput() {\n  const taskInputText = document.createElement('p');\n  taskInputText.textContent = 'Add a New Task';\n\n  const inputDiv = document.createElement('div');\n  inputDiv.classList.add('task', 'inputDiv');\n  content.appendChild(inputDiv);\n\n  const titleInput = document.createElement('input');\n  titleInput.setAttribute('type', 'text');\n  titleInput.id = 'titleInput';\n  const titleLabel = document.createElement('label');\n  titleLabel.setAttribute('for', 'titleInput');\n  titleLabel.innerHTML = 'Task Name: ';\n\n  const descriptionInput = document.createElement('input');\n  descriptionInput.setAttribute('type', 'text');\n  descriptionInput.id = 'descriptionInput';\n\n  const dateInput = document.createElement('input');\n  dateInput.setAttribute('type', 'date');\n  dateInput.id = 'dateInput';\n\n  const projectInput = document.createElement('input');\n  projectInput.setAttribute('type', 'text');\n  projectInput.id = 'projectInput';\n  const projectLabel = document.createElement('label');\n  projectLabel.setAttribute('for', 'projectInput');\n  projectLabel.innerHTML = 'Project: ';\n\n  const inputBtn = document.createElement('button');\n  inputBtn.id = 'inputBtn';\n  inputBtn.textContent = 'Add Task';\n  inputBtn.addEventListener('click', () => {\n    if (titleInput.value.length <= 0) return;\n    if (projectInput.value.length <= 0) {\n      projectInput.value = 'all';\n    }\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(titleInput.value, descriptionInput.value, dateInput.value, projectInput.value);\n  });\n\n  inputDiv.appendChild(taskInputText);\n  inputDiv.appendChild(titleLabel);\n  inputDiv.appendChild(titleInput);\n  // inputDiv.appendChild(descriptionInput);\n  inputDiv.appendChild(dateInput);\n  inputDiv.appendChild(projectLabel);\n  inputDiv.appendChild(projectInput);\n  inputDiv.appendChild(inputBtn);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/DOM.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToday\": () => (/* binding */ getToday)\n/* harmony export */ });\n\n\n\nfunction getToday() {\n    var today = new Date();\nvar dd = String(today.getDate()).padStart(2, '0');\nvar mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\nvar yyyy = today.getFullYear();\n\nreturn today = mm + '/' + dd + '/' + yyyy;\n}\n\n//# sourceURL=webpack://to-do-list/./src/date.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"switchToProject\": () => (/* binding */ switchToProject)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-class */ \"./src/task-class.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n\n\n\n\n\n\n// test\nconst firstTask = new _task_class__WEBPACK_IMPORTED_MODULE_1__.Task(\n  'Read',\n  'Continue reading book from chapter ...',\n  '2022-02-22',\n  'Reading',\n);\nconst secondTask = new _task_class__WEBPACK_IMPORTED_MODULE_1__.Task('Gym', 'LEG DAY. Hamstring curls; Bulgarian Split Squats (drop set), Romanian Deadlifts, Leg press, Calf Raises', '2022-06-14', 'Health');\nconst thirdTask = new _task_class__WEBPACK_IMPORTED_MODULE_1__.Task(\n  'Meditate',\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque voluptatibus error ratione, laborum autem ex tempora fugit. Assumenda dicta ratione vero optio fuga! Officia, odit exercitationem. Expedita culpa, nostrum sunt amet accusamus maxime vitae nulla et recusandae aperiam doloremque eius ab velit tempore quae, illum voluptas deleniti. Cum explicabo perferendis possimus dolore hic nisi deserunt impedit nam maiores autem.',\n  '2022-06-14',\n  'Health',\n);\nconsole.log(secondTask.project, firstTask.project, thirdTask.project);\nconst defaultProject = new _project__WEBPACK_IMPORTED_MODULE_3__.Project('All');\nconst firstProject = new _project__WEBPACK_IMPORTED_MODULE_3__.Project('Reading');\nconst secondProject = new _project__WEBPACK_IMPORTED_MODULE_3__.Project('Health');\n// const thirdProject = new Project(\"project: d\");\n\nfirstTask.markComplete();\n\n// array\n\nconst taskArray = [];\nconst projectArray = [];\nlet currentProject = 'All';\n\ntaskArray.push(firstTask, secondTask, thirdTask);\nprojectArray.push(defaultProject);\nprojectArray.push(firstProject, secondProject);\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.render)(taskArray);\n(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.createSidebar)(projectArray);\n\n// add task\nfunction addTask(\n  title = 'New task',\n  description,\n  dueDate,\n  project = 'All',\n) {\n  if (dueDate === '') {\n    const today = (0,_date__WEBPACK_IMPORTED_MODULE_4__.getToday)();\n    console.log(today);\n    const newTask = new _task_class__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, today, project);\n    taskArray.push(newTask);\n  } else {\n    const newTask = new _task_class__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, project);\n    taskArray.push(newTask);\n  }\n\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.render)(taskArray);\n\n  checkProjectExists(project);\n}\n// add project\n\nfunction addProject(name) {\n  const newProject = new _project__WEBPACK_IMPORTED_MODULE_3__.Project(name);\n  projectArray.push(newProject);\n  // dom stuff\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.createSidebar)(projectArray);\n}\n\n// render\n\nfunction switchToProject() {\n  const name = this.textContent;\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.render)(taskArray, name);\n  // change project to the clicked project\n  currentProject = '';\n}\n\nfunction checkProjectExists(project) {\n  let check = 'a';\n  projectArray.forEach((Project) => {\n    if (Project.name === project) {\n      check = 'b';\n    }\n  });\n\n  if (check === 'a') {\n    addProject(project);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n \n\nclass Project {\n    constructor(name) {\n        this.name = name\n    }\n}\n\nconst popup = document.getElementById('project-input-div');\nconst overlay = document.getElementById('overlay');\n\nfunction openPopup() {\n    popup.classList.add('active')\n    overlay.classList.add('active')\n}\n\nfunction closePopup() {\n    popup.classList.remove('active')\n    overlay.classList.remove('active')\n}\n\nconst addProjectBtn = (() => {\n\nconst btn = document.getElementById('addProject')\nconst popupBtn = document.getElementById('popup-btn')\n\n// btn.addEventListener('click', addProject)\n\npopupBtn.addEventListener('click', addProjectFromPopup)\nbtn.addEventListener('click', openPopup)\noverlay.addEventListener('click', closePopup)\n})();\n\nfunction addProjectFromPopup() {\nconst projectText = document.getElementById('add-project')\n  const projectName = projectText.value;\n  projectText.value = '';\n  closePopup();\n\n  if (projectName == \"\" || projectName == undefined) { return}\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task-class.js":
/*!***************************!*\
  !*** ./src/task-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    // constructor(title, description, dueDate, priority, project) {\n    //     this.title = title;\n    //     this.description = description;\n    //     this.dueDate = dueDate;\n    //     this.priority = priority;\n    //     this.project = project;\n    //     this.completed = \"no\";\n    // }\n    constructor(title, description, dueDate, project) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.project = project;\n        this.completed = \"no\";\n    }\n\n    markComplete() {\n        if (this.completed === \"no\") {\n            return this.completed = \"yes\";\n        }\n        if (this.completed === \"yes\") {\n            return this.completed = \"no\";\n        }\n    }\n\n    toProject(project) {\n        this.project = project;\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/task-class.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
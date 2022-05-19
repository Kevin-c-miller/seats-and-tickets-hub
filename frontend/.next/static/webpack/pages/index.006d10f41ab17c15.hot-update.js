"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utilities/timeConversion.ts":
/*!*************************************!*\
  !*** ./utilities/timeConversion.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeConversion\": function() { return /* binding */ timeConversion; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n// convert miliary time to standard time\nvar timeConversion = function(militaryTime) {\n    var ref = _slicedToArray(militaryTime.split(\":\"), 2), hours = ref[0], minutes = ref[1];\n    return \"\".concat(+hours > 12 ? +hours - 12 : hours, \":\").concat(minutes, \" : ''\\n   \").concat(+hours >= 12 ? \"PM\" : \"AM\");\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXRpZXMvdGltZUNvbnZlcnNpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsd0NBQXdDO0FBQ2pDLElBQU1BLGNBQWMsR0FBRyxTQUFDQyxZQUFvQixFQUFLO0lBQ3RELElBQXlCQSxHQUF1QixrQkFBdkJBLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUF6Q0MsS0FBSyxHQUFhRixHQUF1QixHQUFwQyxFQUFFRyxPQUFPLEdBQUlILEdBQXVCLEdBQTNCO0lBQ3JCLE9BQU8sRUFBQyxDQUF1Q0csTUFBTyxDQUE1QyxDQUFDRCxLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUNBLEtBQUssR0FBRyxFQUFFLEdBQUdBLEtBQUssRUFBQyxHQUFDLENBQVUsQ0FDcEQsTUFBMEIsQ0FEa0JDLE9BQU8sRUFBQyxZQUN0RCxDQUE2QixRQUEzQixDQUFDRCxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUUsQ0FBQztDQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxpdGllcy90aW1lQ29udmVyc2lvbi50cz84NmNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnZlcnQgbWlsaWFyeSB0aW1lIHRvIHN0YW5kYXJkIHRpbWVcbmV4cG9ydCBjb25zdCB0aW1lQ29udmVyc2lvbiA9IChtaWxpdGFyeVRpbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gbWlsaXRhcnlUaW1lLnNwbGl0KCc6Jyk7XG4gIHJldHVybiBgJHsraG91cnMgPiAxMiA/ICtob3VycyAtIDEyIDogaG91cnN9OiR7bWludXRlc30gOiAnJ1xuICAgJHsraG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJ31gO1xufTtcbiJdLCJuYW1lcyI6WyJ0aW1lQ29udmVyc2lvbiIsIm1pbGl0YXJ5VGltZSIsInNwbGl0IiwiaG91cnMiLCJtaW51dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utilities/timeConversion.ts\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[id]",{

/***/ "./components/EventInfo/Venue.tsx":
/*!****************************************!*\
  !*** ./components/EventInfo/Venue.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Venue = function(param) {\n    var event = param.event;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-2xl\",\n                children: (ref1 = event === null || event === void 0 ? void 0 : (ref = event._embedded) === null || ref === void 0 ? void 0 : ref.venues[0]) === null || ref1 === void 0 ? void 0 : ref1.name\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: [\n                    (ref3 = event === null || event === void 0 ? void 0 : (ref2 = event._embedded) === null || ref2 === void 0 ? void 0 : ref2.venues[0]) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.address) === null || ref4 === void 0 ? void 0 : ref4.line1,\n                    \",\",\n                    \" \",\n                    (ref6 = event === null || event === void 0 ? void 0 : (ref5 = event._embedded) === null || ref5 === void 0 ? void 0 : ref5.venues[0]) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.city) === null || ref7 === void 0 ? void 0 : ref7.name,\n                    \",\",\n                    \" \",\n                    (ref9 = event === null || event === void 0 ? void 0 : (ref8 = event._embedded) === null || ref8 === void 0 ? void 0 : ref8.venues[0]) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.state) === null || ref10 === void 0 ? void 0 : ref10.stateCode,\n                    \" \",\n                    (ref12 = event === null || event === void 0 ? void 0 : (ref11 = event._embedded) === null || ref11 === void 0 ? void 0 : ref11.venues[0]) === null || ref12 === void 0 ? void 0 : ref12.postalCode,\n                    \",\",\n                    \" \",\n                    (ref14 = event === null || event === void 0 ? void 0 : (ref13 = event._embedded) === null || ref13 === void 0 ? void 0 : ref13.venues[0]) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.country) === null || ref15 === void 0 ? void 0 : ref15.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            ((ref17 = event === null || event === void 0 ? void 0 : (ref16 = event._embedded) === null || ref16 === void 0 ? void 0 : ref16.venues[0]) === null || ref17 === void 0 ? void 0 : ref17.images) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"venueImage\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (ref19 = event === null || event === void 0 ? void 0 : (ref18 = event._embedded) === null || ref18 === void 0 ? void 0 : ref18.venues[0].images[0]) === null || ref19 === void 0 ? void 0 : ref19.url,\n                    alt: (ref20 = event === null || event === void 0 ? void 0 : event._embedded.venues[0]) === null || ref20 === void 0 ? void 0 : ref20.name\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (ref21 = event === null || event === void 0 ? void 0 : event.images[0]) === null || ref21 === void 0 ? void 0 : ref21.url,\n                alt: event === null || event === void 0 ? void 0 : event.name\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/Venue.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = Venue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Venue);\nvar _c;\n$RefreshReg$(_c, \"Venue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVNLElBQUk7Ozs7O3FCQUFJOzs7Ozs7YUFFbkQsQ0FDTjtDQUNIO0FBdkJLUCxLQUFBQSxLQUFLO0FBeUJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudEluZm8vVmVudWUudHN4P2FjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXZlbnQ6IEV2ZW50cztcbn1cblxuY29uc3QgVmVudWUgPSAoeyBldmVudCB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntldmVudD8uX2VtYmVkZGVkPy52ZW51ZXNbMF0/Lm5hbWV9PC9oND5cbiAgICAgIDxoNT5cbiAgICAgICAge2V2ZW50Py5fZW1iZWRkZWQ/LnZlbnVlc1swXT8uYWRkcmVzcz8ubGluZTF9LHsnICd9XG4gICAgICAgIHtldmVudD8uX2VtYmVkZGVkPy52ZW51ZXNbMF0/LmNpdHk/Lm5hbWV9LHsnICd9XG4gICAgICAgIHtldmVudD8uX2VtYmVkZGVkPy52ZW51ZXNbMF0/LnN0YXRlPy5zdGF0ZUNvZGV9eycgJ31cbiAgICAgICAge2V2ZW50Py5fZW1iZWRkZWQ/LnZlbnVlc1swXT8ucG9zdGFsQ29kZX0seycgJ31cbiAgICAgICAge2V2ZW50Py5fZW1iZWRkZWQ/LnZlbnVlc1swXT8uY291bnRyeT8ubmFtZX1cbiAgICAgIDwvaDU+XG4gICAgICB7ZXZlbnQ/Ll9lbWJlZGRlZD8udmVudWVzWzBdPy5pbWFnZXMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVudWVJbWFnZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17ZXZlbnQ/Ll9lbWJlZGRlZD8udmVudWVzWzBdLmltYWdlc1swXT8udXJsfVxuICAgICAgICAgICAgYWx0PXtldmVudD8uX2VtYmVkZGVkLnZlbnVlc1swXT8ubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxpbWcgc3JjPXtldmVudD8uaW1hZ2VzWzBdPy51cmx9IGFsdD17ZXZlbnQ/Lm5hbWV9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVudWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWZW51ZSIsImV2ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJfZW1iZWRkZWQiLCJ2ZW51ZXMiLCJuYW1lIiwiaDUiLCJhZGRyZXNzIiwibGluZTEiLCJjaXR5Iiwic3RhdGUiLCJzdGF0ZUNvZGUiLCJwb3N0YWxDb2RlIiwiY291bnRyeSIsImltYWdlcyIsImltZyIsInNyYyIsInVybCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/EventInfo/Venue.tsx\n");

/***/ })

});
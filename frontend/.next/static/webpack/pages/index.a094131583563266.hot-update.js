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

/***/ "./components/AllEvents.tsx":
/*!**********************************!*\
  !*** ./components/AllEvents.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_EventDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EventDetail */ \"./components/EventDetail.tsx\");\nvar _this = undefined;\n\n\n\nvar AllEvents = function(param) {\n    var title = param.title, events = param.events;\n    var _this1 = _this;\n    // TODO: render local events (if any, if not, just show generic events for US)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" flex items-center justify-center text-2xl font-bold my-4\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center overflow-x-scroll mx-4 px-4\",\n                children: events.map(function(event) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EventDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        event: event\n                    }, event === null || event === void 0 ? void 0 : event.id, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = AllEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllEvents);\nvar _c;\n$RefreshReg$(_c, \"AllEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbEV2ZW50cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBQzBCO0FBUXBELElBQU1FLFNBQVMsR0FBRyxnQkFBOEI7UUFBM0JDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07O0lBQ2hDLDhFQUE4RTtJQUU5RSxxQkFDRTs7MEJBQ0UsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQywyREFBMkQ7MEJBQ3RFSCxLQUFLOzs7OztxQkFDSDswQkFFTCw4REFBQ0ksS0FBRztnQkFBQ0QsU0FBUyxFQUFDLDhEQUE4RDswQkFHMUVGLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLEtBQUs7a0NBQ2hCLHFFQUFDUiwrREFBVzt3QkFBQ1EsS0FBSyxFQUFFQSxLQUFLO3VCQUFPQSxLQUFLLGFBQUxBLEtBQUssV0FBSSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEtBQUssQ0FBRUMsRUFBRTs7Ozs4QkFBSTtpQkFDOUMsQ0FBQzs7Ozs7cUJBQ0U7O29CQUNMLENBQ0g7Q0FDSDtBQWxCS1IsS0FBQUEsU0FBUztBQW9CZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWxsRXZlbnRzLnRzeD9kZjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnREZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudERldGFpbCc7XG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV2ZW50czogRXZlbnRzW107XG59XG5cbmNvbnN0IEFsbEV2ZW50cyA9ICh7IHRpdGxlLCBldmVudHMgfTogUHJvcHMpID0+IHtcbiAgLy8gVE9ETzogcmVuZGVyIGxvY2FsIGV2ZW50cyAoaWYgYW55LCBpZiBub3QsIGp1c3Qgc2hvdyBnZW5lcmljIGV2ZW50cyBmb3IgVVMpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgbXktNFwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LXgtc2Nyb2xsIG14LTQgcHgtNFwiPlxuICAgICAgICB7LyogVE9ETzogYnVpbGQgcm93cyBmb3IgZWFjaCB0eXBlIG9mIGV2ZW50IHNlY3Rpb24gLy8gY2hhbmdlIHRvIGEgZmxleCByb3cgKi99XG5cbiAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgPEV2ZW50RGV0YWlsIGV2ZW50PXtldmVudH0ga2V5PXtldmVudD8uaWR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxFdmVudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFdmVudERldGFpbCIsIkFsbEV2ZW50cyIsInRpdGxlIiwiZXZlbnRzIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJldmVudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AllEvents.tsx\n");

/***/ })

});
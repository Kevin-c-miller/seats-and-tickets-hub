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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar AllEvents = function(param) {\n    var title = param.title, events = param.events;\n    var _this1 = _this;\n    // TODO: grab user long/latitude for location and render local events (if any, if not, just show generic events for US)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: events.map(function(event) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: event === null || event === void 0 ? void 0 : event.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/AllEvents.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = AllEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllEvents);\nvar _c;\n$RefreshReg$(_c, \"AllEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbEV2ZW50cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFRMUIsSUFBTUMsU0FBUyxHQUFHLGdCQUE4QjtRQUEzQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTs7SUFDaEMsdUhBQXVIO0lBRXZILHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBRUgsS0FBSzs7Ozs7cUJBQU07MEJBRWhCLDhEQUFDRSxLQUFHOzBCQUNERCxNQUFNLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO2tDQUNoQixxRUFBQ0MsSUFBRTtrQ0FBRUQsS0FBSyxhQUFMQSxLQUFLLFdBQU0sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVFLElBQUk7Ozs7OzhCQUFNO2lCQUN2QixDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBZEtSLEtBQUFBLFNBQVM7QUFnQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsbEV2ZW50cy50c3g/ZGYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBldmVudHM6IEV2ZW50c1tdO1xufVxuXG5jb25zdCBBbGxFdmVudHMgPSAoeyB0aXRsZSwgZXZlbnRzIH06IFByb3BzKSA9PiB7XG4gIC8vIFRPRE86IGdyYWIgdXNlciBsb25nL2xhdGl0dWRlIGZvciBsb2NhdGlvbiBhbmQgcmVuZGVyIGxvY2FsIGV2ZW50cyAoaWYgYW55LCBpZiBub3QsIGp1c3Qgc2hvdyBnZW5lcmljIGV2ZW50cyBmb3IgVVMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IChcbiAgICAgICAgICA8aDM+e2V2ZW50Py5uYW1lfTwvaDM+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxFdmVudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbGxFdmVudHMiLCJ0aXRsZSIsImV2ZW50cyIsImRpdiIsImgxIiwibWFwIiwiZXZlbnQiLCJoMyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AllEvents.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AllEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AllEvents */ \"./components/AllEvents.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var getAllEvents = param.getAllEvents;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(getAllEvents);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Seats & Tickets Hub | Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AllEvents__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: \"Upcoming Events\",\n                    events: getAllEvents\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDNkI7QUFJSztBQUVjOztBQU1oRCxJQUFNRyxJQUFJLEdBQUcsZ0JBQTZCO1FBQTFCQyxZQUFZLFNBQVpBLFlBQVk7O0lBQzFCSCxnREFBUyxDQUFDLFdBQU07UUFDZEksT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQyxDQUFDO0tBQzNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTs7MEJBQ2YsOERBQUNSLGtEQUFJOzBCQUNILDRFQUFDUyxPQUFLOzhCQUFDLDRCQUEwQjs7Ozs7eUJBQVE7Ozs7O3FCQUNwQzswQkFJUCw4REFBQ0MsTUFBSTswQkFFSCw0RUFBQ1IsNkRBQVM7b0JBQUNPLEtBQUssRUFBQyxpQkFBaUI7b0JBQUNFLE1BQU0sRUFBRVAsWUFBWTs7Ozs7eUJBQUk7Ozs7O3FCQUN0RDs7Ozs7O2FBR0gsQ0FDTjtDQUNIO0dBckJLRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7O0FBdUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IEFsbEV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FsbEV2ZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGdldEFsbEV2ZW50czogRXZlbnRzW107XG59XG5cbmNvbnN0IEhvbWUgPSAoeyBnZXRBbGxFdmVudHMgfTogUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhnZXRBbGxFdmVudHMpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TZWF0cyAmIFRpY2tldHMgSHViIHwgSG9tZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgey8qIDxTZWFyY2ggLz4gKi99XG4gICAgICAgIDxBbGxFdmVudHMgdGl0bGU9XCJVcGNvbWluZyBFdmVudHNcIiBldmVudHM9e2dldEFsbEV2ZW50c30gLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxGb290ZXIgLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4vLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFtnZXRBbGxFdmVudHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoKHJlcXVlc3RzLmdldEFsbEV2ZW50cykudGhlbigocmVzKSA9PiByZXMuanNvbigpKSxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2V0QWxsRXZlbnRzOiBnZXRBbGxFdmVudHMuX2VtYmVkZGVkLmV2ZW50cyB8fCBudWxsLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJBbGxFdmVudHMiLCJIb21lIiwiZ2V0QWxsRXZlbnRzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWFpbiIsImV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
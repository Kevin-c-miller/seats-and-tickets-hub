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

/***/ "./components/EventInfo/EventDate.tsx":
/*!********************************************!*\
  !*** ./components/EventInfo/EventDate.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_timeConversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/timeConversion */ \"./utilities/timeConversion.ts\");\nvar _this = undefined;\n\n\n\nvar EventDate = function(param) {\n    var event = param.event;\n    var ref, ref1, ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center my-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        \" \",\n                        event === null || event === void 0 ? void 0 : (ref = event.dates) === null || ref === void 0 ? void 0 : (ref1 = ref.start) === null || ref1 === void 0 ? void 0 : ref1.localDate\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Time: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        \" \",\n                        (0,_utilities_timeConversion__WEBPACK_IMPORTED_MODULE_2__.timeConversion)(event === null || event === void 0 ? void 0 : (ref2 = event.dates) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.start) === null || ref3 === void 0 ? void 0 : ref3.localTime)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                (event === null || event === void 0 ? void 0 : event.pleaseNote) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: event === null || event === void 0 ? void 0 : event.pleaseNote\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/EventDate.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = EventDate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDate);\nvar _c;\n$RefreshReg$(_c, \"EventDate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V2ZW50SW5mby9FdmVudERhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUVzQztBQU1oRSxJQUFNRSxTQUFTLEdBQUcsZ0JBQXNCO1FBQW5CQyxLQUFLLFNBQUxBLEtBQUs7UUFLU0EsR0FBWSxRQUlyQkEsSUFBWTtJQVJwQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0JBQWtCO2tCQUMvQiw0RUFBQ0MsSUFBRTs7OEJBQ0QsOERBQUNDLElBQUU7O3NDQUNELDhEQUFDQyxRQUFNO3NDQUFDLFFBQU07Ozs7O2lDQUFTO3dCQUFBLEdBQUM7d0JBQUNMLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsQ0FBQUEsR0FBWSxHQUFaQSxLQUFLLENBQUVNLEtBQUssY0FBWk4sR0FBWSxjQUFaQSxLQUFBQSxDQUFZLEdBQVpBLFFBQUFBLEdBQVksQ0FBRU8sS0FBSyw2QkFBUCxHQUFaUCxLQUFBQSxDQUFZLFFBQVNRLFNBQVM7Ozs7Ozt5QkFDcEQ7OEJBQ0wsOERBQUNKLElBQUU7O3NDQUNELDhEQUFDQyxRQUFNO3NDQUFDLFFBQU07Ozs7O2lDQUFTO3dCQUFDLEdBQUc7d0JBQzFCUCx5RUFBYyxDQUFDRSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLElBQVksR0FBWkEsS0FBSyxDQUFFTSxLQUFLLGNBQVpOLElBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxRQUFBQSxJQUFZLENBQUVPLEtBQUssNkJBQVAsR0FBWlAsS0FBQUEsQ0FBWSxRQUFTUyxTQUFTLENBQUM7Ozs7Ozt5QkFDNUM7Z0JBQ0pULENBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUFZLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsS0FBSyxDQUFFVSxVQUFVLG1CQUNoQiw4REFBQ1AsSUFBRTs4QkFDRCw0RUFBQ0MsSUFBRTtrQ0FBRUosS0FBSyxhQUFMQSxLQUFLLFdBQVksR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxLQUFLLENBQUVVLFVBQVU7Ozs7OzZCQUFNOzs7Ozt5QkFDekI7Ozs7OztpQkFFSjs7Ozs7YUFDRCxDQUNOO0NBQ0g7QUFuQktYLEtBQUFBLFNBQVM7QUFxQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V2ZW50SW5mby9FdmVudERhdGUudHN4PzE0MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHRpbWVDb252ZXJzaW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3RpbWVDb252ZXJzaW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXZlbnQ6IEV2ZW50cztcbn1cblxuY29uc3QgRXZlbnREYXRlID0gKHsgZXZlbnQgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+RGF0ZTogPC9zdHJvbmc+IHtldmVudD8uZGF0ZXM/LnN0YXJ0Py5sb2NhbERhdGV9XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPlRpbWU6IDwvc3Ryb25nPnsnICd9XG4gICAgICAgICAge3RpbWVDb252ZXJzaW9uKGV2ZW50Py5kYXRlcz8uc3RhcnQ/LmxvY2FsVGltZSl9XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtldmVudD8ucGxlYXNlTm90ZSAmJiAoXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPntldmVudD8ucGxlYXNlTm90ZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnREYXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGltZUNvbnZlcnNpb24iLCJFdmVudERhdGUiLCJldmVudCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJzdHJvbmciLCJkYXRlcyIsInN0YXJ0IiwibG9jYWxEYXRlIiwibG9jYWxUaW1lIiwicGxlYXNlTm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/EventInfo/EventDate.tsx\n");

/***/ })

});
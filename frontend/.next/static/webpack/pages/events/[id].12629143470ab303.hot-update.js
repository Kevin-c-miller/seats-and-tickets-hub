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

/***/ "./components/EventInfo/TicketInfo.tsx":
/*!*********************************************!*\
  !*** ./components/EventInfo/TicketInfo.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar TicketInfo = function(param) {\n    var event = param.event;\n    var ref, ref1, ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"text-lg font-bold\",\n                children: [\n                    \"Ticket Information\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Ticket Type:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" \",\n                                    (ref = event === null || event === void 0 ? void 0 : event.priceRanges[0]) === null || ref === void 0 ? void 0 : ref.type\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Currency: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" \",\n                                    (ref1 = event === null || event === void 0 ? void 0 : event.priceRanges[0]) === null || ref1 === void 0 ? void 0 : ref1.currency\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Min Price: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" $\",\n                                    (ref2 = event === null || event === void 0 ? void 0 : event.priceRanges[0]) === null || ref2 === void 0 ? void 0 : ref2.min\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Max Price: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" $\",\n                                    (ref3 = event === null || event === void 0 ? void 0 : event.priceRanges[0]) === null || ref3 === void 0 ? void 0 : ref3.max\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventInfo/TicketInfo.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = TicketInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketInfo);\nvar _c;\n$RefreshReg$(_c, \"TicketInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V2ZW50SW5mby9UaWNrZXRJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQU0xQixJQUFNQyxVQUFVLEdBQUcsZ0JBQXNCO1FBQW5CQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7a0JBQy9DLDRFQUFDQyxJQUFFO3NCQUNELDRFQUFDQyxJQUFFO2dCQUFDRixTQUFTLEVBQUMsbUJBQW1COztvQkFBQyxvQkFFaEM7a0NBQUEsOERBQUNDLElBQUU7OzBDQUNELDhEQUFDQyxJQUFFOztrREFDRCw4REFBQ0MsUUFBTTtrREFBQyxjQUFZOzs7Ozs2Q0FBUztvQ0FBQSxHQUFDO29DQUFDTCxPQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBYSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLEtBQUssQ0FBRU0sV0FBVyxDQUFDLENBQUMsQ0FBQyw0QkFBTSxHQUEzQk4sS0FBQUEsQ0FBMkIsT0FBSk8sSUFBSTs7Ozs7O3FDQUN2RDswQ0FDTCw4REFBQ0gsSUFBRTs7a0RBQ0QsOERBQUNDLFFBQU07a0RBQUMsWUFBVTs7Ozs7NkNBQVM7b0NBQUEsR0FBQztvQ0FBQ0wsUUFBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQWEsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxLQUFLLENBQUVNLFdBQVcsQ0FBQyxDQUFDLENBQUMsNkJBQVUsR0FBL0JOLEtBQUFBLENBQStCLFFBQVJRLFFBQVE7Ozs7OztxQ0FDekQ7MENBQ0wsOERBQUNKLElBQUU7O2tEQUNELDhEQUFDQyxRQUFNO2tEQUFDLGFBQVc7Ozs7OzZDQUFTO29DQUFBLElBQUU7b0NBQUNMLFFBQUFBLEtBQUssYUFBTEEsS0FBSyxXQUFhLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsS0FBSyxDQUFFTSxXQUFXLENBQUMsQ0FBQyxDQUFDLDZCQUFLLEdBQTFCTixLQUFBQSxDQUEwQixRQUFIUyxHQUFHOzs7Ozs7cUNBQ3REOzBDQUNMLDhEQUFDTCxJQUFFOztrREFDRCw4REFBQ0MsUUFBTTtrREFBQyxhQUFXOzs7Ozs2Q0FBUztvQ0FBQSxJQUFFO29DQUFDTCxRQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBYSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLEtBQUssQ0FBRU0sV0FBVyxDQUFDLENBQUMsQ0FBQyw2QkFBSyxHQUExQk4sS0FBQUEsQ0FBMEIsUUFBSFUsR0FBRzs7Ozs7O3FDQUN0RDs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNELENBQ047Q0FDSDtBQXhCS1gsS0FBQUEsVUFBVTtBQTBCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V2ZW50SW5mby9UaWNrZXRJbmZvLnRzeD82OTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbnRlcmZhY2UgUHJvcHMge1xuICBldmVudDogRXZlbnRzO1xufVxuXG5jb25zdCBUaWNrZXRJbmZvID0gKHsgZXZlbnQgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgIFRpY2tldCBJbmZvcm1hdGlvblxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPHN0cm9uZz5UaWNrZXQgVHlwZTo8L3N0cm9uZz4ge2V2ZW50Py5wcmljZVJhbmdlc1swXT8udHlwZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Q3VycmVuY3k6IDwvc3Ryb25nPiB7ZXZlbnQ/LnByaWNlUmFuZ2VzWzBdPy5jdXJyZW5jeX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzdHJvbmc+TWluIFByaWNlOiA8L3N0cm9uZz4gJHtldmVudD8ucHJpY2VSYW5nZXNbMF0/Lm1pbn1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzdHJvbmc+TWF4IFByaWNlOiA8L3N0cm9uZz4gJHtldmVudD8ucHJpY2VSYW5nZXNbMF0/Lm1heH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGlja2V0SW5mbyIsImV2ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsInN0cm9uZyIsInByaWNlUmFuZ2VzIiwidHlwZSIsImN1cnJlbmN5IiwibWluIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EventInfo/TicketInfo.tsx\n");

/***/ })

});
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

/***/ "./components/EventDetail.tsx":
/*!************************************!*\
  !*** ./components/EventDetail.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_timeConversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/timeConversion */ \"./utilities/timeConversion.ts\");\nvar _this = undefined;\n\n\n\nvar EventDetail = function(param) {\n    var event = param.event;\n    var ref, ref1, ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/events/[id]\",\n        as: \"events/\".concat(event === null || event === void 0 ? void 0 : event.id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center w-[225px] h-[225px] border-2 border-black rounded-xl m-5 p-3 cursor-pointer \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-lg p-3 text-bold\",\n                    children: event === null || event === void 0 ? void 0 : event.name\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventDetail.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: event === null || event === void 0 ? void 0 : (ref = event.dates) === null || ref === void 0 ? void 0 : (ref1 = ref.start) === null || ref1 === void 0 ? void 0 : ref1.localDate\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventDetail.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: (0,_utilities_timeConversion__WEBPACK_IMPORTED_MODULE_2__.timeConversion)(event === null || event === void 0 ? void 0 : (ref2 = event.dates) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.start) === null || ref3 === void 0 ? void 0 : ref3.localTime)\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventDetail.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventDetail.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/components/EventDetail.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = EventDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetail);\nvar _c;\n$RefreshReg$(_c, \"EventDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V2ZW50RGV0YWlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBNkI7QUFFZ0M7QUFNN0QsSUFBTUUsV0FBVyxHQUFHLGdCQUFzQjtRQUFuQkMsS0FBSyxTQUFMQSxLQUFLO1FBTWZBLEdBQVksUUFDR0EsSUFBWTtJQU50QyxxQkFDRSw4REFBQ0gsa0RBQUk7UUFBQ0ksSUFBSSxFQUFDLGNBQWM7UUFBQ0MsRUFBRSxFQUFFLFNBQVEsQ0FBWSxPQUFWRixLQUFLLGFBQUxBLEtBQUssV0FBSSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEtBQUssQ0FBRUcsRUFBRSxDQUFFO2tCQUNqRCw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsd0hBQXdIOzs4QkFDckksOERBQUNDLElBQUU7b0JBQUNELFNBQVMsRUFBQyx1QkFBdUI7OEJBQUVMLEtBQUssYUFBTEEsS0FBSyxXQUFNLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsS0FBSyxDQUFFTyxJQUFJOzs7Ozt5QkFBTTs4QkFFeEQsOERBQUNDLElBQUU7OEJBQUVSLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsQ0FBQUEsR0FBWSxHQUFaQSxLQUFLLENBQUVTLEtBQUssY0FBWlQsR0FBWSxjQUFaQSxLQUFBQSxDQUFZLEdBQVpBLFFBQUFBLEdBQVksQ0FBRVUsS0FBSyw2QkFBUCxHQUFaVixLQUFBQSxDQUFZLFFBQVNXLFNBQVM7Ozs7O3lCQUFNOzhCQUN6Qyw4REFBQ0gsSUFBRTs4QkFBRVYseUVBQWMsQ0FBQ0UsS0FBSyxhQUFMQSxLQUFLLFdBQU8sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxDQUFBQSxJQUFZLEdBQVpBLEtBQUssQ0FBRVMsS0FBSyxjQUFaVCxJQUFZLGNBQVpBLEtBQUFBLENBQVksR0FBWkEsUUFBQUEsSUFBWSxDQUFFVSxLQUFLLDZCQUFQLEdBQVpWLEtBQUFBLENBQVksUUFBU1ksU0FBUyxDQUFDOzs7Ozt5QkFBTTs7Ozs7O2lCQUNyRDs7Ozs7YUFDRCxDQUNQO0NBQ0g7QUFYS2IsS0FBQUEsV0FBVztBQWFqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXZlbnREZXRhaWwudHN4PzRjZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHRpbWVDb252ZXJzaW9uIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3RpbWVDb252ZXJzaW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXZlbnQ6IEV2ZW50cztcbn1cblxuY29uc3QgRXZlbnREZXRhaWwgPSAoeyBldmVudCB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzL1tpZF1cIiBhcz17YGV2ZW50cy8ke2V2ZW50Py5pZH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bMjI1cHhdIGgtWzIyNXB4XSBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC14bCBtLTUgcC0zIGN1cnNvci1wb2ludGVyIFwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBwLTMgdGV4dC1ib2xkXCI+e2V2ZW50Py5uYW1lfTwvaDQ+XG5cbiAgICAgICAgPGg1PntldmVudD8uZGF0ZXM/LnN0YXJ0Py5sb2NhbERhdGV9PC9oNT5cbiAgICAgICAgPGg1Pnt0aW1lQ29udmVyc2lvbihldmVudD8uZGF0ZXM/LnN0YXJ0Py5sb2NhbFRpbWUpfTwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidGltZUNvbnZlcnNpb24iLCJFdmVudERldGFpbCIsImV2ZW50IiwiaHJlZiIsImFzIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIm5hbWUiLCJoNSIsImRhdGVzIiwic3RhcnQiLCJsb2NhbERhdGUiLCJsb2NhbFRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/EventDetail.tsx\n");

/***/ })

});
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AllEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AllEvents */ \"./components/AllEvents.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var getAllEvents = param.getAllEvents;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), location1 = ref[0], setLocation = ref[1];\n    // get user location\n    var getLocation = function() {\n        if (navigator.geolocation) {\n            navigator.geolocation.getCurrentPosition(function(position) {\n                var location = \"\".concat(position.coords.latitude, \", \").concat(position.coords.longitude);\n                setLocation(location.toString());\n            });\n        } else {\n            console.log(\"location not found\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(getAllEvents);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Seats & Tickets Hub | Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-start justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AllEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Upcoming Events\",\n                    events: getAllEvents\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFNkI7QUFFbUI7QUFDSjs7QUFXNUMsSUFBTUksSUFBSSxHQUFHLGdCQUE2QjtRQUExQkMsWUFBWSxTQUFaQSxZQUFZOztJQUMxQixJQUFnQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWpCOUMsU0FpQmlCLEdBQWlCQSxHQUFZLEdBQTdCLEVBakJqQixXQWlCOEIsR0FBSUEsR0FBWSxHQUFoQjtJQUU1QixvQkFBb0I7SUFDcEIsSUFBTUssV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBSUMsU0FBUyxDQUFDQyxXQUFXLEVBQUU7WUFDekJELFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQyxRQUFRLEVBQUs7Z0JBQ3JELElBQU1OLFFBQVEsR0FBRyxFQUFDLENBQStCTSxNQUF5QixDQUF0REEsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsRUFBQyxJQUFFLENBQTRCLFFBQTFCRixRQUFRLENBQUNDLE1BQU0sQ0FBQ0UsU0FBUyxDQUFFO2dCQUM1RVIsV0FBVyxDQUFDRCxRQUFRLENBQUNVLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbEMsQ0FBQyxDQUFDO1NBQ0osTUFBTTtZQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7SUFFRGhCLGdEQUFTLENBQUMsV0FBTTtRQUNkZSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsWUFBWSxDQUFDLENBQUM7S0FDM0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDYyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxFQUFFOzswQkFDZiw4REFBQ3BCLGtEQUFJOzBCQUNILDRFQUFDcUIsT0FBSzs4QkFBQyw0QkFBMEI7Ozs7O3lCQUFROzs7OztxQkFDcEM7MEJBSVAsOERBQUNDLE1BQUk7Z0JBQUNGLFNBQVMsRUFBQywwQ0FBMEM7MEJBRXhELDRFQUFDbkIsNkRBQVM7b0JBQUNvQixLQUFLLEVBQUMsaUJBQWlCO29CQUFDRSxNQUFNLEVBQUVsQixZQUFZOzs7Ozt5QkFBSTs7Ozs7cUJBQ3REOzs7Ozs7YUFHSCxDQUNOO0NBQ0g7R0FuQ0tELElBQUk7QUFBSkEsS0FBQUEsSUFBSTs7QUFxQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMnO1xuaW1wb3J0IEFsbEV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FsbEV2ZW50cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0U2VhcmNoZWRFdmVudHMsXG4gIGdldExvY2FsRXZlbnRzLFxufSBmcm9tICcuLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnZXRBbGxFdmVudHM6IEV2ZW50c1tdO1xufVxuXG5jb25zdCBIb21lID0gKHsgZ2V0QWxsRXZlbnRzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIGdldCB1c2VyIGxvY2F0aW9uXG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYCR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSwgJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWA7XG4gICAgICAgIHNldExvY2F0aW9uKGxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhnZXRBbGxFdmVudHMpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TZWF0cyAmIFRpY2tldHMgSHViIHwgSG9tZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHsvKiA8U2VhcmNoIC8+ICovfVxuICAgICAgICA8QWxsRXZlbnRzIHRpdGxlPVwiVXBjb21pbmcgRXZlbnRzXCIgZXZlbnRzPXtnZXRBbGxFdmVudHN9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Rm9vdGVyIC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbZ2V0QWxsRXZlbnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaChyZXF1ZXN0cy5nZXRBbGxFdmVudHMpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdldEFsbEV2ZW50czogZ2V0QWxsRXZlbnRzLl9lbWJlZGRlZC5ldmVudHMgfHwgbnVsbCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQWxsRXZlbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZ2V0QWxsRXZlbnRzIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtYWluIiwiZXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
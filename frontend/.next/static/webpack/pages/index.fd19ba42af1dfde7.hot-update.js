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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AllEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AllEvents */ \"./components/AllEvents.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utilities_services_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/services/requests */ \"./utilities/services/requests.ts\");\n/* harmony import */ var _components_SearchedEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchedEvents */ \"./components/SearchedEvents.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var getAllEvents = param.getAllEvents;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), location1 = ref[0], setLocation = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), localEvents = ref1[0], setLocalEvents = ref1[1];\n    // get user location\n    var getLocation = function() {\n        if (navigator.geolocation) {\n            navigator.geolocation.getCurrentPosition(function(position) {\n                var location = \"\".concat(position.coords.latitude, \",\").concat(position.coords.longitude);\n                setLocation(location.toString());\n            });\n        } else {\n            console.log(\"location not found\");\n        }\n    };\n    var fetchLocalEvents = function() {\n        var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var local;\n            return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return (0,_utilities_services_requests__WEBPACK_IMPORTED_MODULE_5__.getLocalEvents)(location1);\n                    case 3:\n                        local = _ctx.sent;\n                        console.log(local);\n                        setLocalEvents(local._embedded.events);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function fetchLocalEvents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(getAllEvents);\n        getLocation();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchLocalEvents();\n    }, []);\n    console.log(location1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Seats & Tickets Hub | Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-start justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AllEvents__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Upcoming Events\",\n                        events: getAllEvents\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SearchedEvents__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        title: \"Events Near Me\",\n                        localEvents: localEvents\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ezdk2w+qZ89p+46ldXzR+gybmnM=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZCO0FBRW1CO0FBQ0o7QUFLSjtBQUNrQjs7QUFNMUQsSUFBTU0sSUFBSSxHQUFHLGdCQUE2QjtRQUExQkMsWUFBWSxTQUFaQSxZQUFZOztJQUMxQixJQUFnQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWxCOUMsU0FrQmlCLEdBQWlCQSxHQUFZLEdBQTdCLEVBbEJqQixXQWtCOEIsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QixJQUFzQ0EsSUFBc0IsR0FBdEJBLCtDQUFRLENBQVcsRUFBRSxDQUFDLEVBbkI5RCxXQW1Cb0IsR0FBb0JBLElBQXNCLEdBQTFDLEVBbkJwQixjQW1Cb0MsR0FBSUEsSUFBc0IsR0FBMUI7SUFFbEMsb0JBQW9CO0lBQ3BCLElBQU1TLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLElBQUlDLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pCRCxTQUFTLENBQUNDLFdBQVcsQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0MsUUFBUSxFQUFLO2dCQUNyRCxJQUFNUixRQUFRLEdBQUcsRUFBQyxDQUE4QlEsTUFBeUIsQ0FBckRBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUMsR0FBQyxDQUE0QixRQUExQkYsUUFBUSxDQUFDQyxNQUFNLENBQUNFLFNBQVMsQ0FBRTtnQkFDM0VWLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDLENBQUMsQ0FBQztTQUNKLE1BQU07WUFDTEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBQ0QsSUFBTUMsZ0JBQWdCO21CQUFHLCtOQUFZO2dCQUUzQkMsS0FBSzs7Ozs7OytCQUFTcEIsNEVBQWMsQ0FBQ0ksU0FBUSxDQUFDOzt3QkFBdENnQixLQUFLLFlBQWlDO3dCQUM1Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDO3dCQUNuQmIsY0FBYyxDQUFDYSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7Ozs7Ozt3QkFFdkNMLE9BQU8sQ0FBQ00sS0FBSyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXhCO3dCQVJLSixnQkFBZ0I7OztPQVFyQjtJQUVEckIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsWUFBWSxDQUFDLENBQUM7UUFDMUJLLFdBQVcsRUFBRSxDQUFDO0tBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQVixnREFBUyxDQUFDLFdBQU07UUFDZHFCLGdCQUFnQixFQUFFLENBQUM7S0FDcEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQRixPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsU0FBUSxDQUFDLENBQUM7SUFFdEIscUJBQ0UsOERBQUNvQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxFQUFFOzswQkFDZiw4REFBQzdCLGtEQUFJOzBCQUNILDRFQUFDOEIsT0FBSzs4QkFBQyw0QkFBMEI7Ozs7O3lCQUFROzs7OztxQkFDcEM7MEJBSVAsOERBQUNDLE1BQUk7Z0JBQUNGLFNBQVMsRUFBQywwQ0FBMEM7O2tDQUV4RCw4REFBQzVCLDZEQUFTO3dCQUFDNkIsS0FBSyxFQUFDLGlCQUFpQjt3QkFBQ0osTUFBTSxFQUFFbkIsWUFBWTs7Ozs7NkJBQUk7a0NBQzNELDhEQUFDRixrRUFBYzt3QkFBQ3lCLEtBQUssRUFBQyxnQkFBZ0I7d0JBQUNwQixXQUFXLEVBQUVBLFdBQVc7Ozs7OzZCQUFJOzs7Ozs7cUJBQzlEOzs7Ozs7YUFHSCxDQUNOO0NBQ0g7R0FwREtKLElBQUk7QUFBSkEsS0FBQUEsSUFBSTs7QUFzRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMnO1xuaW1wb3J0IEFsbEV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FsbEV2ZW50cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0U2VhcmNoZWRFdmVudHMsXG4gIGdldExvY2FsRXZlbnRzLFxufSBmcm9tICcuLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMnO1xuaW1wb3J0IFNlYXJjaGVkRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoZWRFdmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnZXRBbGxFdmVudHM6IEV2ZW50c1tdO1xufVxuXG5jb25zdCBIb21lID0gKHsgZ2V0QWxsRXZlbnRzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9jYWxFdmVudHMsIHNldExvY2FsRXZlbnRzXSA9IHVzZVN0YXRlPEV2ZW50c1tdPihbXSk7XG5cbiAgLy8gZ2V0IHVzZXIgbG9jYXRpb25cbiAgY29uc3QgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBgJHtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGV9LCR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX1gO1xuICAgICAgICBzZXRMb2NhdGlvbihsb2NhdGlvbi50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBmZXRjaExvY2FsRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhbCA9IGF3YWl0IGdldExvY2FsRXZlbnRzKGxvY2F0aW9uKTtcbiAgICAgIGNvbnNvbGUubG9nKGxvY2FsKTtcbiAgICAgIHNldExvY2FsRXZlbnRzKGxvY2FsLl9lbWJlZGRlZC5ldmVudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhnZXRBbGxFdmVudHMpO1xuICAgIGdldExvY2F0aW9uKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTG9jYWxFdmVudHMoKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TZWF0cyAmIFRpY2tldHMgSHViIHwgSG9tZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHsvKiA8U2VhcmNoIC8+ICovfVxuICAgICAgICA8QWxsRXZlbnRzIHRpdGxlPVwiVXBjb21pbmcgRXZlbnRzXCIgZXZlbnRzPXtnZXRBbGxFdmVudHN9IC8+XG4gICAgICAgIDxTZWFyY2hlZEV2ZW50cyB0aXRsZT1cIkV2ZW50cyBOZWFyIE1lXCIgbG9jYWxFdmVudHM9e2xvY2FsRXZlbnRzfSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW2dldEFsbEV2ZW50c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2gocmVxdWVzdHMuZ2V0QWxsRXZlbnRzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBnZXRBbGxFdmVudHM6IGdldEFsbEV2ZW50cy5fZW1iZWRkZWQuZXZlbnRzIHx8IG51bGwsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFsbEV2ZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TG9jYWxFdmVudHMiLCJTZWFyY2hlZEV2ZW50cyIsIkhvbWUiLCJnZXRBbGxFdmVudHMiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibG9jYWxFdmVudHMiLCJzZXRMb2NhbEV2ZW50cyIsImdldExvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hMb2NhbEV2ZW50cyIsImxvY2FsIiwiX2VtYmVkZGVkIiwiZXZlbnRzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
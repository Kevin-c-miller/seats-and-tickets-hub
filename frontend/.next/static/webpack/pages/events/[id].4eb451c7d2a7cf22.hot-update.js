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

/***/ "./pages/events/[id]/index.tsx":
/*!*************************************!*\
  !*** ./pages/events/[id]/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar url = \"https://app.ticketmaster.com/discovery/v2/\";\nvar event = function(param) {\n    var event1 = param.event;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // grabbing id from router\n    var id = router.query.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var test = function() {\n            var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(url, \"events/\").concat(id, \".json?apikey=\").concat(\"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\"));\n                        case 2:\n                            res = _ctx.sent;\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function test() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        test();\n    }, []);\n    console.log(event1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: \"Event Details\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"Event Name: \",\n                            event1.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(event, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2lkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBQ1c7QUFDSTs7QUFHNUMsSUFBTUksR0FBRyxHQUFHLDRDQUE0QztBQU14RCxJQUFNQyxLQUFLLEdBQUcsZ0JBQXNCO1FBQW5CQSxNQUFLLFNBQUxBLEtBQUs7O0lBQ3BCLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQiwwQkFBMEI7SUFDMUIsSUFBTSxFQUFJLEdBQUtJLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUVWSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNTSxJQUFJO3VCQUFHLCtOQUFZO29CQUNqQkMsR0FBRzs7Ozs7bUNBQVNDLEtBQUssQ0FDckIsRUFBQyxDQUFlSixNQUFFLENBQWZILEdBQUcsRUFBQyxTQUFPLENBQUssQ0FBZVEsTUFBK0IsQ0FBakRMLEVBQUUsRUFBQyxlQUFhLENBQWtDLFFBQWhDSyxrQ0FBK0IsQ0FBRSxDQUNwRTs7NEJBRktGLEdBQUcsWUFFUjs7Ozs7O2FBQ0Y7NEJBSktELElBQUk7OztXQUlUO1FBQ0RBLElBQUksRUFBRSxDQUFDO0tBQ1IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsTUFBSyxDQUFDLENBQUM7SUFDbkIscUJBQ0UsOERBQUNZLEtBQUc7OzBCQUNGLDhEQUFDakIsa0RBQUk7MEJBQUMsZUFBYTs7Ozs7cUJBQU87MEJBRTFCLDhEQUFDaUIsS0FBRzs7a0NBQ0YsOERBQUNDLElBQUU7a0NBQUMsU0FBTzs7Ozs7NkJBQUs7a0NBQ2hCLDhEQUFDQyxJQUFFOzs0QkFBQyxjQUFZOzRCQUFDZCxNQUFLLENBQUNlLElBQUk7Ozs7Ozs2QkFBTTs7Ozs7O3FCQUM3QjswQkFFTiw4REFBQ25CLGtEQUFJO2dCQUFDb0IsSUFBSSxFQUFDLEdBQUc7MEJBQUMsU0FBTzs7Ozs7cUJBQU87Ozs7OzthQUN6QixDQUNOO0NBQ0g7R0EzQktoQixLQUFLOztRQUNNSCxrREFBUzs7OztBQXFFMUIsK0RBQWVHLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvW2lkXS9pbmRleC50c3g/OTYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2FwcC50aWNrZXRtYXN0ZXIuY29tL2Rpc2NvdmVyeS92Mi8nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBldmVudDogRXZlbnRzO1xufVxuXG5jb25zdCBldmVudCA9ICh7IGV2ZW50IH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBncmFiYmluZyBpZCBmcm9tIHJvdXRlclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke3VybH1ldmVudHMvJHtpZH0uanNvbj9hcGlrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfWBcbiAgICAgICk7XG4gICAgfTtcbiAgICB0ZXN0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhldmVudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPkV2ZW50IERldGFpbHM8L0hlYWQ+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5EZXRhaWxzPC9oMz5cbiAgICAgICAgPGg0PkV2ZW50IE5hbWU6IHtldmVudC5uYW1lfTwvaDQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5HbyBCYWNrPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgYCR7dXJsfWV2ZW50cy8ke2NvbnRleHQucGFyYW1zLmlkfS5qc29uP2FwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9YFxuLy8gICApO1xuXG4vLyAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZXZlbnQsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7dXJsfWV2ZW50cy5qc29uP2NvdW50cnlDb2RlPVVTJmFwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9YFxuICApO1xuICBjb25zb2xlLmxvZyhyZXMpO1xuICAvLyBjb25zdCBldmVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBwYXRocyA9IFsnJywgJyddO1xuXG4gIC8vIGNvbnN0IGlkcyA9IGV2ZW50cy5tYXAoKGV2ZW50OiBFdmVudHMpID0+IGV2ZW50LmlkKTtcbiAgLy8gY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZDogYW55KSA9PiAoeyBwYXJhbXM6IHsgaWRzOiBpZHMudG9TdHJpbmcoKSB9IH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHt1cmx9ZXZlbnRzLyR7Y29udGV4dC5wYXJhbXMuaWR9Lmpzb24/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBldmVudDogcmVzIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVybCIsImV2ZW50Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInRlc3QiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgzIiwiaDQiLCJuYW1lIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[id]/index.tsx\n");

/***/ })

});
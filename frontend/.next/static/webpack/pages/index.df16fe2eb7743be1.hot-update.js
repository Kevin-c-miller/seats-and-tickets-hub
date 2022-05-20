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

/***/ "./utilities/services/requests.ts":
/*!****************************************!*\
  !*** ./utilities/services/requests.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalEvents\": function() { return /* binding */ getLocalEvents; },\n/* harmony export */   \"getLocation\": function() { return /* binding */ getLocation; },\n/* harmony export */   \"getSearchedEvents\": function() { return /* binding */ getSearchedEvents; }\n/* harmony export */ });\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar API_KEY = \"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\";\nvar BASE_URL = \"https://app.ticketmaster.com/discovery/v2/\";\n// get searched events\nvar getSearchedEvents = function() {\n    var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(search) {\n        var res;\n        return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(BASE_URL, \"events/\").concat(search, \".json?countryCode=US&apikey=\").concat(API_KEY));\n                case 3:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res.data);\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.error(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getSearchedEvents(search) {\n        return _ref.apply(this, arguments);\n    };\n}();\n// get local events (grab location)\nvar getLocalEvents = function() {\n    var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location) {\n        var res;\n        return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(BASE_URL, \"events.json?countryCode=US&apikey=\").concat(API_KEY, \"&latlong=\").concat(location));\n                case 3:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res.data);\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.error(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getLocalEvents(location) {\n        return _ref.apply(this, arguments);\n    };\n}();\n// get user location\nvar getLocation = function() {\n    try {\n        if (navigator.geolocation) {\n            navigator.geolocation.getCurrentPosition(function(position) {\n                var location = \"\".concat(position.coords.latitude, \",\").concat(position.coords.longitude);\n                return location;\n            });\n        }\n    } catch (error) {\n        console.error(error);\n    }\n};\n// structure requests with no arguments as an object and export just the one object\nvar requests = {\n    getAllEvents: \"\".concat(BASE_URL, \"events.json?countryCode=US&apikey=\").concat(API_KEY)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (requests);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUIsSUFBTUMsT0FBTyxHQUFHQyxrQ0FBK0I7QUFDL0MsSUFBTUcsUUFBUSxHQUFHLDRDQUE0QztBQUU3RCxzQkFBc0I7QUFDZixJQUFNQyxpQkFBaUI7ZUFBRyw2TkFBT0MsTUFBYyxFQUFLO1lBRWpEQyxHQUFHOzs7Ozs7MkJBQVNSLGdEQUFTLENBQ3pCLEVBQUMsQ0FBb0JPLE1BQU0sQ0FBeEJGLFFBQVEsRUFBQyxTQUFPLENBQVMsQ0FBOEJKLE1BQU8sQ0FBNUNNLE1BQU0sRUFBQyw4QkFBNEIsQ0FBVSxRQUFSTixPQUFPLENBQUUsQ0FDcEU7O29CQUZLTyxHQUFHLFlBRVI7aURBQ01BLEdBQUcsQ0FBQ0UsSUFBSTs7OztvQkFFZkMsT0FBTyxDQUFDQyxLQUFLLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7S0FFeEI7b0JBVFlOLGlCQUFpQixDQUFVQyxNQUFjOzs7R0FTckQsQ0FBQztBQUVGLG1DQUFtQztBQUM1QixJQUFNTSxjQUFjO2VBQUcsNk5BQU9DLFFBQWdCLEVBQUs7WUFFaEROLEdBQUc7Ozs7OzsyQkFBU1IsZ0RBQVMsQ0FDekIsRUFBQyxDQUErQ0MsTUFBTyxDQUFwREksUUFBUSxFQUFDLG9DQUFrQyxDQUFVLENBQVdTLE1BQVEsQ0FBM0JiLE9BQU8sRUFBQyxXQUFTLENBQVcsUUFBVGEsUUFBUSxDQUFFLENBQzlFOztvQkFGS04sR0FBRyxZQUVSO2lEQUNNQSxHQUFHLENBQUNFLElBQUk7Ozs7b0JBRWZDLE9BQU8sQ0FBQ0MsS0FBSyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O0tBRXhCO29CQVRZQyxjQUFjLENBQVVDLFFBQWdCOzs7R0FTcEQsQ0FBQztBQUVGLG9CQUFvQjtBQUNiLElBQU1DLFdBQVcsR0FBRyxXQUFNO0lBQy9CLElBQUk7UUFDRixJQUFJQyxTQUFTLENBQUNDLFdBQVcsRUFBRTtZQUN6QkQsU0FBUyxDQUFDQyxXQUFXLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDLFFBQVEsRUFBSztnQkFDckQsSUFBTUwsUUFBUSxHQUFHLEVBQUMsQ0FBOEJLLE1BQXlCLENBQXJEQSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFDLEdBQUMsQ0FBNEIsUUFBMUJGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRSxTQUFTLENBQUU7Z0JBQzNFLE9BQU9SLFFBQVEsQ0FBQzthQUNqQixDQUFDLENBQUM7U0FDSjtLQUNGLENBQUMsT0FBT0YsS0FBSyxFQUFFO1FBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztLQUN0QjtDQUNGLENBQUM7QUFFRixtRkFBbUY7QUFDbkYsSUFBTVcsUUFBUSxHQUFHO0lBQ2ZDLFlBQVksRUFBRSxFQUFDLENBQStDdkIsTUFBTyxDQUFwREksUUFBUSxFQUFDLG9DQUFrQyxDQUFVLFFBQVJKLE9BQU8sQ0FBRTtDQUN4RTtBQUVELCtEQUFlc0IsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxpdGllcy9zZXJ2aWNlcy9yZXF1ZXN0cy50cz9lMjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyLyc7XG5cbi8vIGdldCBzZWFyY2hlZCBldmVudHNcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hlZEV2ZW50cyA9IGFzeW5jIChzZWFyY2g6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGAke0JBU0VfVVJMfWV2ZW50cy8ke3NlYXJjaH0uanNvbj9jb3VudHJ5Q29kZT1VUyZhcGlrZXk9JHtBUElfS0VZfWBcbiAgICApO1xuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLy8gZ2V0IGxvY2FsIGV2ZW50cyAoZ3JhYiBsb2NhdGlvbilcbmV4cG9ydCBjb25zdCBnZXRMb2NhbEV2ZW50cyA9IGFzeW5jIChsb2NhdGlvbjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7QkFTRV9VUkx9ZXZlbnRzLmpzb24/Y291bnRyeUNvZGU9VVMmYXBpa2V5PSR7QVBJX0tFWX0mbGF0bG9uZz0ke2xvY2F0aW9ufWBcbiAgICApO1xuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLy8gZ2V0IHVzZXIgbG9jYXRpb25cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0sJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWA7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLy8gc3RydWN0dXJlIHJlcXVlc3RzIHdpdGggbm8gYXJndW1lbnRzIGFzIGFuIG9iamVjdCBhbmQgZXhwb3J0IGp1c3QgdGhlIG9uZSBvYmplY3RcbmNvbnN0IHJlcXVlc3RzID0ge1xuICBnZXRBbGxFdmVudHM6IGAke0JBU0VfVVJMfWV2ZW50cy5qc29uP2NvdW50cnlDb2RlPVVTJmFwaWtleT0ke0FQSV9LRVl9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RzO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiQkFTRV9VUkwiLCJnZXRTZWFyY2hlZEV2ZW50cyIsInNlYXJjaCIsInJlcyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRMb2NhbEV2ZW50cyIsImxvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJyZXF1ZXN0cyIsImdldEFsbEV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utilities/services/requests.ts\n");

/***/ })

});
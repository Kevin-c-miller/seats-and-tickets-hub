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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalEvents\": function() { return /* binding */ getLocalEvents; },\n/* harmony export */   \"getLocation\": function() { return /* binding */ getLocation; },\n/* harmony export */   \"getSearchedEvents\": function() { return /* binding */ getSearchedEvents; }\n/* harmony export */ });\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar API_KEY = \"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\";\nvar BASE_URL = \"https://app.ticketmaster.com/discovery/v2/\";\n// get searched events\nvar getSearchedEvents = function() {\n    var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(search) {\n        var res;\n        return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(BASE_URL, \"events/\").concat(search, \".json?countryCode=US&apikey=\").concat(API_KEY));\n                case 3:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res.data);\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.error(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getSearchedEvents(search) {\n        return _ref.apply(this, arguments);\n    };\n}();\n// get local events (grab location)\nvar getLocalEvents = function() {\n    var _ref = _asyncToGenerator(_Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location) {\n        var res;\n        return _Users_kevinmiller_Folders_programming_projects_seats_and_tickets_hub_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"\".concat(BASE_URL, \"events.json?countryCode=US&apikey=\").concat(API_KEY, \"&latlong=\").concat(location));\n                case 3:\n                    res = _ctx.sent;\n                    return _ctx.abrupt(\"return\", res.data);\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.error(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getLocalEvents(location) {\n        return _ref.apply(this, arguments);\n    };\n}();\n// get user location\nvar getLocation = function() {\n    try {\n        if (navigator.geolocation) {\n            navigator.geolocation.getCurrentPosition(function(position) {\n                var location = \"\".concat(position.coords.latitude, \",\").concat(position.coords.longitude);\n                return location.toString();\n            });\n        } else {\n            console.log(\"location not found\");\n        }\n    } catch (error) {\n        console.error(error);\n    }\n};\n// structure requests with no arguments as an object and export just the one object\nvar requests = {\n    getAllEvents: \"\".concat(BASE_URL, \"events.json?countryCode=US&apikey=\").concat(API_KEY)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (requests);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXRpZXMvc2VydmljZXMvcmVxdWVzdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUIsSUFBTUMsT0FBTyxHQUFHQyxrQ0FBK0I7QUFDL0MsSUFBTUcsUUFBUSxHQUFHLDRDQUE0QztBQUU3RCxzQkFBc0I7QUFDZixJQUFNQyxpQkFBaUI7ZUFBRyw2TkFBT0MsTUFBYyxFQUFLO1lBRWpEQyxHQUFHOzs7Ozs7MkJBQVNSLGdEQUFTLENBQ3pCLEVBQUMsQ0FBb0JPLE1BQU0sQ0FBeEJGLFFBQVEsRUFBQyxTQUFPLENBQVMsQ0FBOEJKLE1BQU8sQ0FBNUNNLE1BQU0sRUFBQyw4QkFBNEIsQ0FBVSxRQUFSTixPQUFPLENBQUUsQ0FDcEU7O29CQUZLTyxHQUFHLFlBRVI7aURBQ01BLEdBQUcsQ0FBQ0UsSUFBSTs7OztvQkFFZkMsT0FBTyxDQUFDQyxLQUFLLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7S0FFeEI7b0JBVFlOLGlCQUFpQixDQUFVQyxNQUFjOzs7R0FTckQsQ0FBQztBQUVGLG1DQUFtQztBQUM1QixJQUFNTSxjQUFjO2VBQUcsNk5BQU9DLFFBQWdCLEVBQUs7WUFFaEROLEdBQUc7Ozs7OzsyQkFBU1IsZ0RBQVMsQ0FDekIsRUFBQyxDQUErQ0MsTUFBTyxDQUFwREksUUFBUSxFQUFDLG9DQUFrQyxDQUFVLENBQVdTLE1BQVEsQ0FBM0JiLE9BQU8sRUFBQyxXQUFTLENBQVcsUUFBVGEsUUFBUSxDQUFFLENBQzlFOztvQkFGS04sR0FBRyxZQUVSO2lEQUNNQSxHQUFHLENBQUNFLElBQUk7Ozs7b0JBRWZDLE9BQU8sQ0FBQ0MsS0FBSyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O0tBRXhCO29CQVRZQyxjQUFjLENBQVVDLFFBQWdCOzs7R0FTcEQsQ0FBQztBQUVGLG9CQUFvQjtBQUNiLElBQU1DLFdBQVcsR0FBRyxXQUFNO0lBQy9CLElBQUk7UUFDRixJQUFJQyxTQUFTLENBQUNDLFdBQVcsRUFBRTtZQUN6QkQsU0FBUyxDQUFDQyxXQUFXLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDLFFBQVEsRUFBSztnQkFDckQsSUFBTUwsUUFBUSxHQUFHLEVBQUMsQ0FBOEJLLE1BQXlCLENBQXJEQSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFDLEdBQUMsQ0FBNEIsUUFBMUJGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRSxTQUFTLENBQUU7Z0JBQzNFLE9BQU9SLFFBQVEsQ0FBQ1MsUUFBUSxFQUFFLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ0osTUFBTTtZQUNMWixPQUFPLENBQUNhLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ25DO0tBQ0YsQ0FBQyxPQUFPWixLQUFLLEVBQUU7UUFDZEQsT0FBTyxDQUFDQyxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0NBQ0YsQ0FBQztBQUVGLG1GQUFtRjtBQUNuRixJQUFNYSxRQUFRLEdBQUc7SUFDZkMsWUFBWSxFQUFFLEVBQUMsQ0FBK0N6QixNQUFPLENBQXBESSxRQUFRLEVBQUMsb0NBQWtDLENBQVUsUUFBUkosT0FBTyxDQUFFO0NBQ3hFO0FBRUQsK0RBQWV3QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0aWVzL3NlcnZpY2VzL3JlcXVlc3RzLnRzP2UyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcHAudGlja2V0bWFzdGVyLmNvbS9kaXNjb3ZlcnkvdjIvJztcblxuLy8gZ2V0IHNlYXJjaGVkIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGdldFNlYXJjaGVkRXZlbnRzID0gYXN5bmMgKHNlYXJjaDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7QkFTRV9VUkx9ZXZlbnRzLyR7c2VhcmNofS5qc29uP2NvdW50cnlDb2RlPVVTJmFwaWtleT0ke0FQSV9LRVl9YFxuICAgICk7XG4gICAgcmV0dXJuIHJlcy5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG4vLyBnZXQgbG9jYWwgZXZlbnRzIChncmFiIGxvY2F0aW9uKVxuZXhwb3J0IGNvbnN0IGdldExvY2FsRXZlbnRzID0gYXN5bmMgKGxvY2F0aW9uOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgJHtCQVNFX1VSTH1ldmVudHMuanNvbj9jb3VudHJ5Q29kZT1VUyZhcGlrZXk9JHtBUElfS0VZfSZsYXRsb25nPSR7bG9jYXRpb259YFxuICAgICk7XG4gICAgcmV0dXJuIHJlcy5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG4vLyBnZXQgdXNlciBsb2NhdGlvblxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYCR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSwke3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9YDtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLy8gc3RydWN0dXJlIHJlcXVlc3RzIHdpdGggbm8gYXJndW1lbnRzIGFzIGFuIG9iamVjdCBhbmQgZXhwb3J0IGp1c3QgdGhlIG9uZSBvYmplY3RcbmNvbnN0IHJlcXVlc3RzID0ge1xuICBnZXRBbGxFdmVudHM6IGAke0JBU0VfVVJMfWV2ZW50cy5qc29uP2NvdW50cnlDb2RlPVVTJmFwaWtleT0ke0FQSV9LRVl9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RzO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiQkFTRV9VUkwiLCJnZXRTZWFyY2hlZEV2ZW50cyIsInNlYXJjaCIsInJlcyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRMb2NhbEV2ZW50cyIsImxvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ0b1N0cmluZyIsImxvZyIsInJlcXVlc3RzIiwiZ2V0QWxsRXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utilities/services/requests.ts\n");

/***/ })

});
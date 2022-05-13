"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests */ \"./services/requests.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Home = ({ getAllEvents  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        //   const getEvents = async () => {\n        //     const result = await fetch(\n        //       `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9`\n        //     ).then((res) => res.json());\n        //     console.log(result._embedded.events);\n        //   };\n        //   getEvents();\n        console.log(getAllEvents);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Seats & Tickets Hub | Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n// server side rendering\nconst getServerSideProps = async ()=>{\n    const [getAllEvents] = await Promise.all([\n        fetch(_services_requests__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllEvents).then((res)=>res.json()\n        ), \n    ]);\n    return {\n        props: {\n            getAllEvents: getAllEvents._embedded.events || null\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkI7QUFHZTtBQUNWO0FBT2xDLE1BQU1HLElBQUksR0FBRyxDQUFDLEVBQUVDLFlBQVksR0FBUyxHQUFLO0lBQ3hDRixnREFBUyxDQUFDLElBQU07UUFDZCxvQ0FBb0M7UUFDcEMsa0NBQWtDO1FBQ2xDLHVIQUF1SDtRQUN2SCxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLE9BQU87UUFDUCxpQkFBaUI7UUFDakJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUMsQ0FBQztLQUMzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEVBQUU7OzBCQUNmLDhEQUFDUixrREFBSTswQkFDSCw0RUFBQ1MsT0FBSzs4QkFBQyw0QkFBMEI7Ozs7OzZCQUFROzs7Ozt5QkFDcEM7MEJBSVAsOERBQUNDLE1BQUk7Ozs7eUJBR0U7Ozs7OztpQkFHSCxDQUNOO0NBQ0g7QUFFRCxpRUFBZVAsSUFBSSxFQUFDO0FBRXBCLHdCQUF3QjtBQUNqQixNQUFNUSxrQkFBa0IsR0FBRyxVQUFZO0lBQzVDLE1BQU0sQ0FBQ1AsWUFBWSxDQUFDLEdBQUcsTUFBTVEsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDdkNDLEtBQUssQ0FBQ2IsdUVBQXFCLENBQUMsQ0FBQ2MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7UUFBQSxDQUFDO0tBQ3ZELENBQUM7SUFFRixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMZCxZQUFZLEVBQUVBLFlBQVksQ0FBQ2UsU0FBUyxDQUFDQyxNQUFNLElBQUksSUFBSTtTQUNwRDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VhdHMtZXZlbnRzLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnZXRBbGxFdmVudHM6IEV2ZW50c1tdO1xufVxuXG5jb25zdCBIb21lID0gKHsgZ2V0QWxsRXZlbnRzIH06IFByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICBjb25zdCBnZXRFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxuICAgIC8vICAgICAgIGBodHRwczovL2FwcC50aWNrZXRtYXN0ZXIuY29tL2Rpc2NvdmVyeS92Mi9ldmVudHMuanNvbj9jb3VudHJ5Q29kZT1VUyZhcGlrZXk9NUJmVmliQTFTQnBPems3dWJDcG1TMHZ2U2VNUDVWZjlgXG4gICAgLy8gICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0Ll9lbWJlZGRlZC5ldmVudHMpO1xuICAgIC8vICAgfTtcbiAgICAvLyAgIGdldEV2ZW50cygpO1xuICAgIGNvbnNvbGUubG9nKGdldEFsbEV2ZW50cyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXRzICYgVGlja2V0cyBIdWIgfCBIb21lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIDxOYXZiYXIgLz4gKi99XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7LyogPFNlYXJjaCAvPiAqL31cbiAgICAgICAgey8qIDxFdmVudHMgLz4gKi99XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Rm9vdGVyIC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbZ2V0QWxsRXZlbnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaChyZXF1ZXN0cy5nZXRBbGxFdmVudHMpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdldEFsbEV2ZW50czogZ2V0QWxsRXZlbnRzLl9lbWJlZGRlZC5ldmVudHMgfHwgbnVsbCxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwicmVxdWVzdHMiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZ2V0QWxsRXZlbnRzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWFpbiIsImdldFNlcnZlclNpZGVQcm9wcyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJvcHMiLCJfZW1iZWRkZWQiLCJldmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/requests.ts":
/*!******************************!*\
  !*** ./services/requests.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\";\nconst BASE_URL = \"https://app.ticketmaster.com/discovery/v2/\";\n// structure requests as an object and export just the one object\nconst requests = {\n    getAllEvents: `${BASE_URL}events.json?countryCode=US&apikey=${API_KEY}`\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requests);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9yZXF1ZXN0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxrQ0FBK0I7QUFDL0MsTUFBTUcsUUFBUSxHQUFHLDRDQUE0QztBQUU3RCxpRUFBaUU7QUFDakUsTUFBTUMsUUFBUSxHQUFHO0lBQ2ZDLFlBQVksRUFBRSxDQUFDLEVBQUVGLFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRUosT0FBTyxDQUFDLENBQUM7Q0FDeEU7QUFFRCxpRUFBZUssUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VhdHMtZXZlbnRzLy4vc2VydmljZXMvcmVxdWVzdHMudHM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyLyc7XG5cbi8vIHN0cnVjdHVyZSByZXF1ZXN0cyBhcyBhbiBvYmplY3QgYW5kIGV4cG9ydCBqdXN0IHRoZSBvbmUgb2JqZWN0XG5jb25zdCByZXF1ZXN0cyA9IHtcbiAgZ2V0QWxsRXZlbnRzOiBgJHtCQVNFX1VSTH1ldmVudHMuanNvbj9jb3VudHJ5Q29kZT1VUyZhcGlrZXk9JHtBUElfS0VZfWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0cztcbiJdLCJuYW1lcyI6WyJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJCQVNFX1VSTCIsInJlcXVlc3RzIiwiZ2V0QWxsRXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/requests.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
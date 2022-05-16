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
exports.id = "pages/events/[id]";
exports.ids = ["pages/events/[id]"];
exports.modules = {

/***/ "./pages/events/[id]/index.tsx":
/*!*************************************!*\
  !*** ./pages/events/[id]/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst getStaticPaths = async ()=>{\n    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${\"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\"}`;\n    const res1 = await fetch(url).then((res)=>res.json()\n    );\n    const data = res1._embedded.events;\n    const paths = data.map((event1)=>({\n            params: {\n                id: event1?.id.toString()\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    console.log(id);\n    const res2 = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${\"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\"}`).then((res)=>res.json()\n    );\n    // console.log(res);\n    return {\n        props: {\n            event: res2\n        }\n    };\n};\nconst event = ({ event: event2  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // grabbing id from router\n    const { id  } = router.query;\n    console.log(event2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: \"Event Details\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Details\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id]/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event); // useEffect(() => {\n //   const getEvent = async () => {\n //     const url = `https://app.ticketmaster.com/discovery/v2/events/Z7r9jZ1AdFYZz.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;\n //     const res = await fetch(url).then((res) => res.json());\n //     const data = res._embedded.events;\n //     console.log(res);\n //   };\n //   getEvent();\n // }, []);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2lkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUlqQyxNQUFNRSxjQUFjLEdBQUcsVUFBWTtJQUN4QyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyw2REFBNkQsRUFBRUMsa0NBQStCLENBQUMsQ0FBQztJQUU3RyxNQUFNRyxJQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxHQUFHLENBQUMsQ0FBQ00sSUFBSSxDQUFDLENBQUNGLEdBQUcsR0FBS0EsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFBQSxDQUFDO0lBQ3RELE1BQU1DLElBQUksR0FBR0osSUFBRyxDQUFDSyxTQUFTLENBQUNDLE1BQU07SUFFakMsTUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxNQUFhLEdBQUssQ0FBQztZQUN6Q0MsTUFBTSxFQUFFO2dCQUFFQyxFQUFFLEVBQUVGLE1BQUssRUFBRUUsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBRTtTQUNyQyxDQUFDO0lBQUEsQ0FBQztJQUVILE9BQU87UUFDTEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVLLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFZLEdBQUs7SUFDcEQsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUM1QkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLE1BQU1YLElBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3JCLENBQUMsaURBQWlELEVBQUVVLEVBQUUsQ0FBQyxhQUFhLEVBQUVkLGtDQUErQixDQUFDLENBQUMsQ0FDeEcsQ0FBQ0ssSUFBSSxDQUFDLENBQUNGLEdBQUcsR0FBS0EsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFBQSxDQUFDO0lBRTNCLG9CQUFvQjtJQUVwQixPQUFPO1FBQ0xlLEtBQUssRUFBRTtZQUFFVCxLQUFLLEVBQUVULElBQUc7U0FBRTtLQUN0QixDQUFDO0NBQ0gsQ0FBQztBQU1GLE1BQU1TLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssRUFBTEEsTUFBSyxHQUFTLEdBQUs7SUFDbEMsTUFBTVUsTUFBTSxHQUFHekIsc0RBQVMsRUFBRTtJQUMxQiwwQkFBMEI7SUFDMUIsTUFBTSxFQUFFaUIsRUFBRSxHQUFFLEdBQUdRLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQkosT0FBTyxDQUFDQyxHQUFHLENBQUNSLE1BQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDWSxLQUFHOzswQkFDRiw4REFBQzVCLGtEQUFJOzBCQUFDLGVBQWE7Ozs7O3lCQUFPOzBCQUUxQiw4REFBQzRCLEtBQUc7MEJBQ0YsNEVBQUNDLElBQUU7OEJBQUMsU0FBTzs7Ozs7NkJBQUs7Ozs7O3lCQUNaOzs7Ozs7aUJBQ0YsQ0FDTjtDQUNIO0FBRUQsaUVBQWViLEtBQUssRUFBQyxDQUVyQixvQkFBb0I7Q0FDcEIsbUNBQW1DO0NBQ25DLG1JQUFtSTtDQUVuSSw4REFBOEQ7Q0FDOUQseUNBQXlDO0NBQ3pDLHdCQUF3QjtDQUN4QixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWF0cy1ldmVudHMvLi9wYWdlcy9ldmVudHMvW2lkXS9pbmRleC50c3g/OTYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcHAudGlja2V0bWFzdGVyLmNvbS9kaXNjb3ZlcnkvdjIvZXZlbnRzLmpzb24/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgZGF0YSA9IHJlcy5fZW1iZWRkZWQuZXZlbnRzO1xuXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoKGV2ZW50OiBFdmVudHMpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBldmVudD8uaWQudG9TdHJpbmcoKSB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyL2V2ZW50cy8ke2lkfS5qc29uP2FwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9YFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgLy8gY29uc29sZS5sb2cocmVzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGV2ZW50OiByZXMgfSxcbiAgfTtcbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV2ZW50OiBFdmVudHNbXTtcbn1cblxuY29uc3QgZXZlbnQgPSAoeyBldmVudCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gZ3JhYmJpbmcgaWQgZnJvbSByb3V0ZXJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+RXZlbnQgRGV0YWlsczwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkRldGFpbHM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgY29uc3QgZ2V0RXZlbnQgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyL2V2ZW50cy9aN3I5aloxQWRGWVp6Lmpzb24/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gO1xuXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSByZXMuX2VtYmVkZGVkLmV2ZW50cztcbi8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuLy8gICB9O1xuLy8gICBnZXRFdmVudCgpO1xuLy8gfSwgW10pO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJnZXRTdGF0aWNQYXRocyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImRhdGEiLCJfZW1iZWRkZWQiLCJldmVudHMiLCJwYXRocyIsIm1hcCIsImV2ZW50IiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicm91dGVyIiwicXVlcnkiLCJkaXYiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[id]/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/[id]/index.tsx"));
module.exports = __webpack_exports__;

})();
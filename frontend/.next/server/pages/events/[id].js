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

/***/ "./pages/events/[id].tsx":
/*!*******************************!*\
  !*** ./pages/events/[id].tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStaticPaths = async ()=>{\n    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${\"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\"}`;\n    const res1 = await fetch(url).then((res)=>res.json()\n    );\n    const data = res1._embedded.events;\n    const paths = data.map((event)=>({\n            params: {\n                id: event?.id.toString()\n            }\n        })\n    );\n    // console.log(paths);\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    console.log(id);\n    const res2 = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${\"5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9\"}`).then((res)=>res.json()\n    );\n    // console.log(res);\n    return {\n        props: {\n            event: res2\n        }\n    };\n};\nconst EventDetails = ({ event  })=>{\n    // useEffect(() => {\n    //   const getEvent = async () => {\n    //     const url = `https://app.ticketmaster.com/discovery/v2/events/Z7r9jZ1AdFYZz.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;\n    //     const res = await fetch(url).then((res) => res.json());\n    //     const data = res._embedded.events;\n    //     console.log(res);\n    //   };\n    //   getEvent();\n    // }, []);\n    console.log(event);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Details\"\n                }, void 0, false, {\n                    fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinmiller/Folders/programming/projects/seats-and-tickets-hub/frontend/pages/events/[id].tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBSXRCLE1BQU1DLGNBQWMsR0FBRyxVQUFZO0lBQ3hDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLDZEQUE2RCxFQUFFQyxrQ0FBK0IsQ0FBQyxDQUFDO0lBRTdHLE1BQU1HLElBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSxJQUFJLENBQUMsQ0FBQ0YsR0FBRyxHQUFLQSxHQUFHLENBQUNHLElBQUksRUFBRTtJQUFBLENBQUM7SUFDdEQsTUFBTUMsSUFBSSxHQUFHSixJQUFHLENBQUNLLFNBQVMsQ0FBQ0MsTUFBTTtJQUVqQyxNQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLEtBQWEsR0FBSyxDQUFDO1lBQ3pDQyxNQUFNLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRUYsS0FBSyxFQUFFRSxFQUFFLENBQUNDLFFBQVEsRUFBRTthQUFFO1NBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUgsc0JBQXNCO0lBRXRCLE9BQU87UUFDTEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVLLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFZLEdBQUs7SUFDcEQsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUM1QkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLE1BQU1YLElBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3JCLENBQUMsaURBQWlELEVBQUVVLEVBQUUsQ0FBQyxhQUFhLEVBQUVkLGtDQUErQixDQUFDLENBQUMsQ0FDeEcsQ0FBQ0ssSUFBSSxDQUFDLENBQUNGLEdBQUcsR0FBS0EsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFBQSxDQUFDO0lBRTNCLG9CQUFvQjtJQUVwQixPQUFPO1FBQ0xlLEtBQUssRUFBRTtZQUFFVCxLQUFLLEVBQUVULElBQUc7U0FBRTtLQUN0QixDQUFDO0NBQ0gsQ0FBQztBQU1GLE1BQU1tQixZQUFZLEdBQUcsQ0FBQyxFQUFFVixLQUFLLEdBQVMsR0FBSztJQUN6QyxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLG1JQUFtSTtJQUVuSSw4REFBOEQ7SUFDOUQseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFFVk8sT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDVyxLQUFHOzswQkFDRiw4REFBQzFCLGtEQUFJOzs7O3lCQUVFOzBCQUdQLDhEQUFDMEIsS0FBRzswQkFDRiw0RUFBQ0MsSUFBRTs4QkFBQyxTQUFPOzs7Ozs2QkFBSzs7Ozs7eUJBQ1o7Ozs7OztpQkFDRixDQUNOO0NBQ0g7QUFFRCxpRUFBZUYsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VhdHMtZXZlbnRzLy4vcGFnZXMvZXZlbnRzL1tpZF0udHN4P2VhODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyL2V2ZW50cy5qc29uP2FwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9YDtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IGRhdGEgPSByZXMuX2VtYmVkZGVkLmV2ZW50cztcblxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChldmVudDogRXZlbnRzKSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogZXZlbnQ/LmlkLnRvU3RyaW5nKCkgfSxcbiAgfSkpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHBhdGhzKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgY29uc29sZS5sb2coaWQpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcHAudGlja2V0bWFzdGVyLmNvbS9kaXNjb3ZlcnkvdjIvZXZlbnRzLyR7aWR9Lmpzb24/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gXG4gICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZXZlbnQ6IHJlcyB9LFxuICB9O1xufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXZlbnQ6IEV2ZW50c1tdO1xufVxuXG5jb25zdCBFdmVudERldGFpbHMgPSAoeyBldmVudCB9OiBQcm9wcykgPT4ge1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGdldEV2ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyL2V2ZW50cy9aN3I5aloxQWRGWVp6Lmpzb24/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gO1xuXG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIC8vICAgICBjb25zdCBkYXRhID0gcmVzLl9lbWJlZGRlZC5ldmVudHM7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAvLyAgIH07XG4gIC8vICAgZ2V0RXZlbnQoKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8dGl0bGU+e2Ake2V2ZW50Py5uYW1lfSBEZXRhaWxzYCB8fCAnRXZlbnQgRGV0YWlscyd9IDwvdGl0bGU+ICovfVxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7LyogPGRpdj57cHJvcHMgPyA8aDM+e3Byb3BzPy59PC9oMz4gOiA8aDM+RXZlbnQgRGV0YWlsczwvaDM+fTwvZGl2PiAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5EZXRhaWxzPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWxzO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJnZXRTdGF0aWNQYXRocyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImRhdGEiLCJfZW1iZWRkZWQiLCJldmVudHMiLCJwYXRocyIsIm1hcCIsImV2ZW50IiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiRXZlbnREZXRhaWxzIiwiZGl2IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[id].tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/events/[id].tsx"));
module.exports = __webpack_exports__;

})();
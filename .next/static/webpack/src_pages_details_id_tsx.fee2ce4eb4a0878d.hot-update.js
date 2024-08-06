"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_pages_details_id_tsx",{

/***/ "./src/pages/details/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/details/[id].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/usePersonDetails */ \"./src/hooks/usePersonDetails.tsx\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card/Card */ \"./src/components/Card/Card.tsx\");\n/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading/Loading */ \"./src/components/Loading/Loading.tsx\");\n/* harmony import */ var _components_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ErrorMessage/ErrorMessage */ \"./src/components/ErrorMessage/ErrorMessage.tsx\");\n/* harmony import */ var _components_NoResults_NoResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NoResults/NoResults */ \"./src/components/NoResults/NoResults.tsx\");\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsPage.module.css */ \"./src/pages/details/DetailsPage.module.css\");\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { person, isLoading, error } = (0,_hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            message: error.toString()\n        }, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!person) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoResults_NoResults__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"details-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            person: person\n        }, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailsPage, \"9eDm13AbMZ98HNKUWfdLBkPS11A=\", false, function() {\n    return [\n        _hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlscy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVrQztBQUNkO0FBQ1M7QUFDZTtBQUNUO0FBQ2Y7QUFVOUMsTUFBTU8sY0FBMEM7UUFBQyxFQUFFQyxFQUFFLEVBQUU7O0lBQ3JELE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHVixtRUFBZ0JBLENBQUNPO0lBRXRELElBQUlFLFdBQVc7UUFDYixxQkFBTyw4REFBQ1AsbUVBQU9BOzs7OztJQUNqQjtJQUVBLElBQUlRLE9BQU87UUFDVCxxQkFBTyw4REFBQ1AsNkVBQVlBO1lBQUNRLFNBQVNELE1BQU1FLFFBQVE7Ozs7OztJQUM5QztJQUVBLElBQUksQ0FBQ0osUUFBUTtRQUNYLHFCQUFPLDhEQUFDSix1RUFBU0E7Ozs7O0lBQ25CO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdULHFGQUEyQjtrQkFDekMsNEVBQUNKLDZEQUFJQTtZQUFDTyxRQUFRQTs7Ozs7Ozs7Ozs7QUFHcEI7R0FwQk1GOztRQUNpQ04sK0RBQWdCQTs7O0tBRGpETTtBQXNCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGV0YWlscy9baWRdLnRzeD8zZjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VQZXJzb25EZXRhaWxzIGZyb20gJy4uLy4uL2hvb2tzL3VzZVBlcnNvbkRldGFpbHMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmQnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IE5vUmVzdWx0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL05vUmVzdWx0cy9Ob1Jlc3VsdHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RldGFpbHNQYWdlLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgRGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IERldGFpbHNQYWdlOiBSZWFjdC5GQzxEZXRhaWxzUGFnZVByb3BzPiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBwZXJzb24sIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVBlcnNvbkRldGFpbHMoaWQpO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPXtlcnJvci50b1N0cmluZygpfSAvPjtcbiAgfVxuXG4gIGlmICghcGVyc29uKSB7XG4gICAgcmV0dXJuIDxOb1Jlc3VsdHMgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2RldGFpbHMtY29udGFpbmVyJ119PlxuICAgICAgPENhcmQgcGVyc29uPXtwZXJzb259IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVBlcnNvbkRldGFpbHMiLCJDYXJkIiwiTG9hZGluZyIsIkVycm9yTWVzc2FnZSIsIk5vUmVzdWx0cyIsInN0eWxlcyIsIkRldGFpbHNQYWdlIiwiaWQiLCJwZXJzb24iLCJpc0xvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/details/[id].tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details/[id]",{

/***/ "./src/pages/details/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/details/[id].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/usePersonDetails */ \"./src/hooks/usePersonDetails.tsx\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card/Card */ \"./src/components/Card/Card.tsx\");\n/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading/Loading */ \"./src/components/Loading/Loading.tsx\");\n/* harmony import */ var _components_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ErrorMessage/ErrorMessage */ \"./src/components/ErrorMessage/ErrorMessage.tsx\");\n/* harmony import */ var _components_NoResults_NoResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NoResults/NoResults */ \"./src/components/NoResults/NoResults.tsx\");\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailsPage.module.css */ \"./src/pages/details/DetailsPage.module.css\");\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst getErrorMessage = (error)=>{\n    if (typeof error === \"string\") {\n        return error;\n    }\n    if (error && typeof error === \"object\") {\n        if (\"message\" in error && typeof error.message === \"string\") {\n            return error.message;\n        }\n        if (\"data\" in error && typeof error.data === \"object\" && error.data !== null) {\n            if (\"message\" in error.data && typeof error.data.message === \"string\") {\n                return error.data.message;\n            }\n        }\n        if (\"status\" in error && \"data\" in error) {\n            return \"Error \".concat(error.status, \": \").concat(error.data);\n        }\n    }\n    return \"An unknown error occurred\";\n};\nconst DetailsPage = (param)=>{\n    let { id } = param;\n    _s();\n    const { person, isLoading, error } = (0,_hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        const errorMessage = getErrorMessage(error);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            message: errorMessage\n        }, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 58,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!person) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoResults_NoResults__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"details-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            person: person\n        }, void 0, false, {\n            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/pages/details/[id].tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailsPage, \"9eDm13AbMZ98HNKUWfdLBkPS11A=\", false, function() {\n    return [\n        _hooks_usePersonDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = DetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlscy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVrQztBQUNkO0FBQ1M7QUFDZTtBQUNUO0FBQ2Y7QUFTOUMsTUFBTU8sa0JBQWtCLENBQUNDO0lBQ3ZCLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzdCLE9BQU9BO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLE9BQU9BLFVBQVUsVUFBVTtRQUN0QyxJQUFJLGFBQWFBLFNBQVMsT0FBT0EsTUFBTUMsT0FBTyxLQUFLLFVBQVU7WUFDM0QsT0FBT0QsTUFBTUMsT0FBTztRQUN0QjtRQUNBLElBQ0UsVUFBVUQsU0FDVixPQUFPQSxNQUFNRSxJQUFJLEtBQUssWUFDdEJGLE1BQU1FLElBQUksS0FBSyxNQUNmO1lBQ0EsSUFBSSxhQUFhRixNQUFNRSxJQUFJLElBQUksT0FBT0YsTUFBTUUsSUFBSSxDQUFDRCxPQUFPLEtBQUssVUFBVTtnQkFDckUsT0FBT0QsTUFBTUUsSUFBSSxDQUFDRCxPQUFPO1lBQzNCO1FBQ0Y7UUFDQSxJQUFJLFlBQVlELFNBQVMsVUFBVUEsT0FBTztZQUN4QyxPQUFPLFNBQTBCQSxPQUFqQkEsTUFBTUcsTUFBTSxFQUFDLE1BQWUsT0FBWEgsTUFBTUUsSUFBSTtRQUM3QztJQUNGO0lBQ0EsT0FBTztBQUNUO0FBVUEsTUFBTUUsY0FBMEM7UUFBQyxFQUFFQyxFQUFFLEVBQUU7O0lBQ3JELE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVQLEtBQUssRUFBRSxHQUFHUCxtRUFBZ0JBLENBQUNZO0lBRXRELElBQUlFLFdBQVc7UUFDYixxQkFBTyw4REFBQ1osbUVBQU9BOzs7OztJQUNqQjtJQUVBLElBQUlLLE9BQU87UUFDVCxNQUFNUSxlQUFlVCxnQkFBZ0JDO1FBQ3JDLHFCQUFPLDhEQUFDSiw2RUFBWUE7WUFBQ0ssU0FBU087Ozs7OztJQUNoQztJQUVBLElBQUksQ0FBQ0YsUUFBUTtRQUNYLHFCQUFPLDhEQUFDVCx1RUFBU0E7Ozs7O0lBQ25CO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVdaLHFGQUEyQjtrQkFDekMsNEVBQUNKLDZEQUFJQTtZQUFDWSxRQUFRQTs7Ozs7Ozs7Ozs7QUFHcEI7R0FyQk1GOztRQUNpQ1gsK0RBQWdCQTs7O0tBRGpEVztBQXVCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGV0YWlscy9baWRdLnRzeD8zZjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlUGVyc29uRGV0YWlscyBmcm9tICcuLi8uLi9ob29rcy91c2VQZXJzb25EZXRhaWxzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nJztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UvRXJyb3JNZXNzYWdlJztcbmltcG9ydCBOb1Jlc3VsdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob1Jlc3VsdHMvTm9SZXN1bHRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EZXRhaWxzUGFnZS5tb2R1bGUuY3NzJztcblxudHlwZSBBcGlFcnJvciA9XG4gIHwgeyBtZXNzYWdlOiBzdHJpbmcgfVxuICB8IHsgZGF0YTogeyBtZXNzYWdlOiBzdHJpbmcgfSB9XG4gIHwgeyBzdGF0dXM6IG51bWJlcjsgZGF0YTogc3RyaW5nIH1cbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGdldEVycm9yTWVzc2FnZSA9IChlcnJvcjogQXBpRXJyb3IpOiBzdHJpbmcgPT4ge1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0Jykge1xuICAgIGlmICgnbWVzc2FnZScgaW4gZXJyb3IgJiYgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgJ2RhdGEnIGluIGVycm9yICYmXG4gICAgICB0eXBlb2YgZXJyb3IuZGF0YSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIGVycm9yLmRhdGEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGlmICgnbWVzc2FnZScgaW4gZXJyb3IuZGF0YSAmJiB0eXBlb2YgZXJyb3IuZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXJyb3IuZGF0YS5tZXNzYWdlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3N0YXR1cycgaW4gZXJyb3IgJiYgJ2RhdGEnIGluIGVycm9yKSB7XG4gICAgICByZXR1cm4gYEVycm9yICR7ZXJyb3Iuc3RhdHVzfTogJHtlcnJvci5kYXRhfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCc7XG59O1xuXG5pbnRlcmZhY2UgRGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGV0YWlsc1BhZ2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IERldGFpbHNQYWdlOiBSZWFjdC5GQzxEZXRhaWxzUGFnZVByb3BzPiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBwZXJzb24sIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVBlcnNvbkRldGFpbHMoaWQpO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBnZXRFcnJvck1lc3NhZ2UoZXJyb3IgYXMgQXBpRXJyb3IpO1xuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gLz47XG4gIH1cblxuICBpZiAoIXBlcnNvbikge1xuICAgIHJldHVybiA8Tm9SZXN1bHRzIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXRhaWxzLWNvbnRhaW5lciddfT5cbiAgICAgIDxDYXJkIHBlcnNvbj17cGVyc29ufSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQZXJzb25EZXRhaWxzIiwiQ2FyZCIsIkxvYWRpbmciLCJFcnJvck1lc3NhZ2UiLCJOb1Jlc3VsdHMiLCJzdHlsZXMiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwic3RhdHVzIiwiRGV0YWlsc1BhZ2UiLCJpZCIsInBlcnNvbiIsImlzTG9hZGluZyIsImVycm9yTWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/details/[id].tsx\n"));

/***/ })

});
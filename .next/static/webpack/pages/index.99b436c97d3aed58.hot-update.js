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

/***/ "./src/hooks/useMainPage.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useMainPage.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nconst useMainPage = ()=>{\n    _s();\n    const [isInitialLoadComplete, setIsInitialLoadComplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const page = router.query.page || \"1\";\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        setIsInitialLoadComplete(true);\n    }, []);\n    const throwError = ()=>{\n        setHasError(true);\n    };\n    const closeDetails = ()=>{\n        router.push(\"/?page=\".concat(page));\n    };\n    return {\n        isInitialLoadComplete,\n        hasError,\n        throwError,\n        closeDetails\n    };\n};\n_s(useMainPage, \"mqtRfofejfMQWl8puS6p0fvHIjk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useMainPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTWFpblBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNKO0FBRXhDLE1BQU1HLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsdUJBQXVCQyx5QkFBeUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkUsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxPQUFPLE9BQVFDLEtBQUssQ0FBQ0QsSUFBSSxJQUFlO0lBRTlDUixnREFBU0EsQ0FBQztRQUNSSSx5QkFBeUI7SUFDM0IsR0FBRyxFQUFFO0lBRUwsTUFBTU0sYUFBYTtRQUNqQkosWUFBWTtJQUNkO0lBRUEsTUFBTUssZUFBZTtRQUNuQkosT0FBT0ssSUFBSSxDQUFDLFVBQWUsT0FBTEo7SUFDeEI7SUFFQSxPQUFPO1FBQ0xMO1FBQ0FFO1FBQ0FLO1FBQ0FDO0lBQ0Y7QUFDRjtHQXhCTVQ7O1FBR1dELGtEQUFTQTs7O0FBdUIxQiwrREFBZUMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlTWFpblBhZ2UudHN4PzgxYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgdXNlTWFpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0luaXRpYWxMb2FkQ29tcGxldGUsIHNldElzSW5pdGlhbExvYWRDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcGFnZSA9IChyb3V0ZXIucXVlcnkucGFnZSBhcyBzdHJpbmcpIHx8ICcxJztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzSW5pdGlhbExvYWRDb21wbGV0ZSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRocm93RXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VEZXRhaWxzID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvP3BhZ2U9JHtwYWdlfWApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNJbml0aWFsTG9hZENvbXBsZXRlLFxuICAgIGhhc0Vycm9yLFxuICAgIHRocm93RXJyb3IsXG4gICAgY2xvc2VEZXRhaWxzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTWFpblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VNYWluUGFnZSIsImlzSW5pdGlhbExvYWRDb21wbGV0ZSIsInNldElzSW5pdGlhbExvYWRDb21wbGV0ZSIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJ0aHJvd0Vycm9yIiwiY2xvc2VEZXRhaWxzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useMainPage.tsx\n"));

/***/ })

});
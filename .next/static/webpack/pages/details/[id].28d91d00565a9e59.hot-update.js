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

/***/ "./src/components/Card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_selectedItemSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/slices/selectedItemSlice */ \"./src/store/slices/selectedItemSlice.ts\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card.module.css */ \"./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { person } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const page = router.query.page || \"1\";\n    const isSelected = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>!!state.selectedItem.selectedItems[person.url]);\n    const handleCheckboxChange = (event)=>{\n        event.stopPropagation();\n        if (isSelected) {\n            dispatch((0,_store_slices_selectedItemSlice__WEBPACK_IMPORTED_MODULE_4__.unselectItem)(person.url));\n        } else {\n            dispatch((0,_store_slices_selectedItemSlice__WEBPACK_IMPORTED_MODULE_4__.selectItem)(person));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"result-item\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"checkbox-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            checked: isSelected,\n                            onChange: handleCheckboxChange\n                        }, void 0, false, {\n                            fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Select\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/details/\".concat(person.url.split(\"/\")[5], \"?page=\").concat(page),\n                passHref: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: person.name\n                    }, void 0, false, {\n                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"attributes-grid\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Height\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.height\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Mass\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.mass\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Hair Color\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.hair_color\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Skin Color\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.skin_color\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Eye Color\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.eye_color\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Birth Year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.birth_year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Gender\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": \",\n                                    person.gender\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seygorin/Desktop/JS/Epam/rolling-scopes-school/stage-react/RSS-react-tasks/src/components/Card/Card.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"MvahVSgRzj7vUK+w7yq6sW9QpBE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNkO0FBQzBCO0FBQ2Y7QUFHd0M7QUFFekM7QUFNdkMsTUFBTVEsT0FBNEI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQzNDLE1BQU1DLFdBQVdSLHdEQUFXQTtJQUM1QixNQUFNUyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTVEsT0FBTyxPQUFRQyxLQUFLLENBQUNELElBQUksSUFBZTtJQUU5QyxNQUFNRSxhQUFhWCx3REFBV0EsQ0FDNUIsQ0FBQ1ksUUFBcUIsQ0FBQyxDQUFDQSxNQUFNQyxZQUFZLENBQUNDLGFBQWEsQ0FBQ1IsT0FBT1MsR0FBRyxDQUFDO0lBR3RFLE1BQU1DLHVCQUF1QixDQUFDQztRQUM1QkEsTUFBTUMsZUFBZTtRQUNyQixJQUFJUCxZQUFZO1lBQ2RKLFNBQVNKLDZFQUFZQSxDQUFDRyxPQUFPUyxHQUFHO1FBQ2xDLE9BQU87WUFDTFIsU0FBU0wsMkVBQVVBLENBQUNJO1FBQ3RCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2E7UUFBR0MsV0FBV2hCLHdFQUFxQjs7MEJBQ2xDLDhEQUFDaUI7Z0JBQUlELFdBQVdoQiwrRUFBNEI7MEJBQzFDLDRFQUFDa0I7O3NDQUNDLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBU2Q7NEJBQ1RlLFVBQVVWOzs7Ozs7d0JBQ1Y7Ozs7Ozs7Ozs7OzswQkFJTiw4REFBQ2xCLGtEQUFJQTtnQkFBQzZCLE1BQU0sWUFBNkNsQixPQUFqQ0gsT0FBT1MsR0FBRyxDQUFDYSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFhLE9BQUxuQjtnQkFBUW9CLFFBQVE7O2tDQUN2RSw4REFBQ0M7a0NBQUl4QixPQUFPeUIsSUFBSTs7Ozs7O2tDQUNoQiw4REFBQ1Y7d0JBQUlELFdBQVdoQiw0RUFBeUI7OzBDQUN2Qyw4REFBQzRCOztrREFDQyw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBZTtvQ0FBRzNCLE9BQU80QixNQUFNOzs7Ozs7OzBDQUV6Qyw4REFBQ0Y7O2tEQUNDLDhEQUFDQztrREFBTzs7Ozs7O29DQUFhO29DQUFHM0IsT0FBTzZCLElBQUk7Ozs7Ozs7MENBRXJDLDhEQUFDSDs7a0RBQ0MsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQW1CO29DQUFHM0IsT0FBTzhCLFVBQVU7Ozs7Ozs7MENBRWpELDhEQUFDSjs7a0RBQ0MsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQW1CO29DQUFHM0IsT0FBTytCLFVBQVU7Ozs7Ozs7MENBRWpELDhEQUFDTDs7a0RBQ0MsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWtCO29DQUFHM0IsT0FBT2dDLFNBQVM7Ozs7Ozs7MENBRS9DLDhEQUFDTjs7a0RBQ0MsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQW1CO29DQUFHM0IsT0FBT2lDLFVBQVU7Ozs7Ozs7MENBRWpELDhEQUFDUDs7a0RBQ0MsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWU7b0NBQUczQixPQUFPa0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRDtHQTFETW5DOztRQUNhTixvREFBV0E7UUFDYkUsa0RBQVNBO1FBR0xELG9EQUFXQTs7O0tBTDFCSztBQTRETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQudHN4PzdiMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FwaS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHNlbGVjdEl0ZW0sIHVuc2VsZWN0SXRlbSB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlcy9zZWxlY3RlZEl0ZW1TbGljZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgcGVyc29uOiBQZXJzb247XG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyBwZXJzb24gfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYWdlID0gKHJvdXRlci5xdWVyeS5wYWdlIGFzIHN0cmluZykgfHwgJzEnO1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gISFzdGF0ZS5zZWxlY3RlZEl0ZW0uc2VsZWN0ZWRJdGVtc1twZXJzb24udXJsXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgZGlzcGF0Y2godW5zZWxlY3RJdGVtKHBlcnNvbi51cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goc2VsZWN0SXRlbShwZXJzb24pKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbJ3Jlc3VsdC1pdGVtJ119PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY2hlY2tib3gtY29udGFpbmVyJ119PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIFNlbGVjdFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPXtgL2RldGFpbHMvJHtwZXJzb24udXJsLnNwbGl0KCcvJylbNV19P3BhZ2U9JHtwYWdlfWB9IHBhc3NIcmVmPlxuICAgICAgICA8aDM+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2F0dHJpYnV0ZXMtZ3JpZCddfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+SGVpZ2h0PC9zdHJvbmc+OiB7cGVyc29uLmhlaWdodH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPk1hc3M8L3N0cm9uZz46IHtwZXJzb24ubWFzc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkhhaXIgQ29sb3I8L3N0cm9uZz46IHtwZXJzb24uaGFpcl9jb2xvcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPlNraW4gQ29sb3I8L3N0cm9uZz46IHtwZXJzb24uc2tpbl9jb2xvcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkV5ZSBDb2xvcjwvc3Ryb25nPjoge3BlcnNvbi5leWVfY29sb3J9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5CaXJ0aCBZZWFyPC9zdHJvbmc+OiB7cGVyc29uLmJpcnRoX3llYXJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5HZW5kZXI8L3N0cm9uZz46IHtwZXJzb24uZ2VuZGVyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsInNlbGVjdEl0ZW0iLCJ1bnNlbGVjdEl0ZW0iLCJzdHlsZXMiLCJDYXJkIiwicGVyc29uIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJpc1NlbGVjdGVkIiwic3RhdGUiLCJzZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1zIiwidXJsIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJocmVmIiwic3BsaXQiLCJwYXNzSHJlZiIsImgzIiwibmFtZSIsInAiLCJzdHJvbmciLCJoZWlnaHQiLCJtYXNzIiwiaGFpcl9jb2xvciIsInNraW5fY29sb3IiLCJleWVfY29sb3IiLCJiaXJ0aF95ZWFyIiwiZ2VuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/Card.tsx\n"));

/***/ })

});
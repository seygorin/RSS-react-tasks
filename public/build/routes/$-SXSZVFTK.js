import {
  Link,
  init_dist,
  useRouteError
} from "/build/_shared/chunk-DG2LPO6O.js";
import {
  createHotContext
} from "/build/_shared/chunk-NSAQ3VKU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/pages/404/NotFoundPage.tsx
init_dist();

// app/pages/404/NotFoundPage.module.css
var NotFoundPage_module_default = { "not-found-page": "NotFoundPage-module__not-found-page__FGd2r" };

// app/pages/404/NotFoundPage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/404/NotFoundPage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/404/NotFoundPage.tsx"
  );
}
var NotFoundPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: NotFoundPage_module_default.notFound, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "404 - Page Not Found" }, void 0, false, {
      fileName: "app/pages/404/NotFoundPage.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The page you are looking for does not exist." }, void 0, false, {
      fileName: "app/pages/404/NotFoundPage.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Go to Home" }, void 0, false, {
      fileName: "app/pages/404/NotFoundPage.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/404/NotFoundPage.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = NotFoundPage;
var NotFoundPage_default = NotFoundPage;
var _c;
$RefreshReg$(_c, "NotFoundPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/$.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.tsx"
  );
  import.meta.hot.lastModified = "1722960038313.534";
}
function ErrorBoundary() {
  _s();
  const error = useRouteError();
  if (error && error.statusText === "Not Found") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotFoundPage_default, {}, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Oops! Something went wrong." }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Sorry, an unexpected error has occurred." }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
function CatchAll() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotFoundPage_default, {}, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c22 = CatchAll;
var _c2;
var _c22;
$RefreshReg$(_c2, "ErrorBoundary");
$RefreshReg$(_c22, "CatchAll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  CatchAll as default
};
//# sourceMappingURL=/build/routes/$-SXSZVFTK.js.map

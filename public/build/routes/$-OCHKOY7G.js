import {
  NotFoundPage_default
} from "/build/_shared/chunk-XCFGPCDU.js";
import "/build/_shared/chunk-TJZT6UNL.js";
import "/build/_shared/chunk-BXGS4RVO.js";
import "/build/_shared/chunk-DG2LPO6O.js";
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

// app/routes/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.tsx"
  );
  import.meta.hot.lastModified = "1723150104298.8499";
}
function CatchAll() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotFoundPage_default, {}, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = CatchAll;
var _c;
$RefreshReg$(_c, "CatchAll");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CatchAll as default
};
//# sourceMappingURL=/build/routes/$-OCHKOY7G.js.map

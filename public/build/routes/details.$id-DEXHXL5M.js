import {
  Card_default,
  ErrorMessage_default,
  Loading_default,
  NoResults_default,
  require_node
} from "/build/_shared/chunk-6FY3H3Y6.js";
import {
  selectItem,
  useDispatch,
  useFetchPersonDetailsQuery
} from "/build/_shared/chunk-BXGS4RVO.js";
import {
  useLoaderData
} from "/build/_shared/chunk-DG2LPO6O.js";
import {
  createHotContext
} from "/build/_shared/chunk-NSAQ3VKU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/details.$id.tsx
var import_node = __toESM(require_node(), 1);

// app/hooks/usePersonDetails.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/usePersonDetails.tsx"
  );
  import.meta.hot.lastModified = "1722860991849.3022";
}
var usePersonDetails = (id) => {
  const dispatch = useDispatch();
  const {
    data: person,
    isLoading,
    error
  } = useFetchPersonDetailsQuery(id || "");
  (0, import_react.useEffect)(() => {
    if (person) {
      dispatch(selectItem(person));
    }
  }, [person, dispatch]);
  return { person, isLoading, error };
};
var usePersonDetails_default = usePersonDetails;

// app/styles/details.module.css
var details_module_default = { "details-container": "details-module__details-container__qGOM-" };

// app/routes/details.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/details.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/details.$id.tsx"
  );
}
var DetailsPage = () => {
  _s();
  const {
    id
  } = useLoaderData();
  const {
    person,
    isLoading,
    error
  } = usePersonDetails_default(id);
  if (isLoading)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 49,
      columnNumber: 25
    }, this);
  if (error)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorMessage_default, { message: error.toString() }, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this);
  if (!person)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoResults_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 51,
      columnNumber: 23
    }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: details_module_default["details-container"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { person }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s(DetailsPage, "touBM/eD3GYvZhvNJL41oYX0OqY=", false, function() {
  return [useLoaderData, usePersonDetails_default];
});
_c = DetailsPage;
var details_id_default = DetailsPage;
var _c;
$RefreshReg$(_c, "DetailsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  details_id_default as default
};
//# sourceMappingURL=/build/routes/details.$id-DEXHXL5M.js.map

import {
  Card_default,
  ErrorMessage_default,
  Loading_default,
  NoResults_default,
  require_node
} from "/build/_shared/chunk-JF7KAM5T.js";
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

// app/styles/DetailsPage.module.css
var DetailsPage_module_default = { "details-container": "DetailsPage-module__details-container__g6Lav", "attributes-grid": "DetailsPage-module__attributes-grid__JnIfA" };

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
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 51,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorMessage_default, { message: error.toString() }, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 54,
      columnNumber: 12
    }, this);
  }
  if (!person) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoResults_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 57,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: DetailsPage_module_default["details-container"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { person }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 59,
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
//# sourceMappingURL=/build/routes/details.$id-6L2HEFBX.js.map

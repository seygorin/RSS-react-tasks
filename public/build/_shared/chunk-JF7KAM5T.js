import {
  selectItem,
  unselectItem,
  useDispatch,
  useSelector
} from "/build/_shared/chunk-BXGS4RVO.js";
import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-DG2LPO6O.js";
import {
  createHotContext
} from "/build/_shared/chunk-NSAQ3VKU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/Card/Card.module.css
var Card_module_default = { "result-item": "Card-module__result-item__kzOWQ", "attributes-grid": "Card-module__attributes-grid__bQmZO" };

// app/components/Card/Card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Card/Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Card/Card.tsx"
  );
}
var Card = ({
  person
}) => {
  _s();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page") || "1";
  const isSelected = useSelector((state) => !!state.selectedItem.selectedItems[person.url]);
  const handleCardClick = () => {
    navigate(`/?id=${person.url.split("/")[5]}&page=${page}`, {
      replace: true
    });
  };
  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    if (isSelected) {
      dispatch(unselectItem(person.url));
    } else {
      dispatch(selectItem(person));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Card_module_default.card, onClick: handleCardClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", checked: isSelected, onChange: handleCheckboxChange, onClick: (e) => e.stopPropagation() }, void 0, false, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: person.name }, void 0, false, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Height: ",
      person.height
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Mass: ",
      person.mass
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Hair Color: ",
      person.hair_color
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Skin Color: ",
      person.skin_color
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Eye Color: ",
      person.eye_color
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Birth Year: ",
      person.birth_year
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Gender: ",
      person.gender
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Card/Card.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s(Card, "RzrrKwlyW42SYTCoHYSMfL0xhNI=", false, function() {
  return [useDispatch, useNavigate, useLocation, useSelector];
});
_c = Card;
var Card_default = Card;
var _c;
$RefreshReg$(_c, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Loading/Loading.module.css
var Loading_module_default = { "loading": "Loading-module__loading__0gWju" };

// app/components/Loading/Loading.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Loading/Loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Loading/Loading.tsx"
  );
}
var Loading = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: Loading_module_default["loading"], children: "Loading..." }, void 0, false, {
    fileName: "app/components/Loading/Loading.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = Loading;
var Loading_default = Loading;
var _c2;
$RefreshReg$(_c2, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ErrorMessage/ErrorMessage.module.css
var ErrorMessage_module_default = { "error-message": "ErrorMessage-module__error-message__0YU6-" };

// app/components/ErrorMessage/ErrorMessage.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ErrorMessage/ErrorMessage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ErrorMessage/ErrorMessage.tsx"
  );
}
var ErrorMessage = ({
  message
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: ErrorMessage_module_default["error-message"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
    "Error: ",
    message
  ] }, void 0, true, {
    fileName: "app/components/ErrorMessage/ErrorMessage.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ErrorMessage/ErrorMessage.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c3 = ErrorMessage;
var ErrorMessage_default = ErrorMessage;
var _c3;
$RefreshReg$(_c3, "ErrorMessage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NoResults/NoResults.module.css
var NoResults_module_default = { "no-results": "NoResults-module__no-results__vQg5T" };

// app/components/NoResults/NoResults.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NoResults/NoResults.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NoResults/NoResults.tsx"
  );
}
var NoResults = ({
  message = "Nothing found"
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: NoResults_module_default["no-results"], children: message }, void 0, false, {
    fileName: "app/components/NoResults/NoResults.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c4 = NoResults;
var NoResults_default = NoResults;
var _c4;
$RefreshReg$(_c4, "NoResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  Card_default,
  Loading_default,
  ErrorMessage_default,
  NoResults_default
};
//# sourceMappingURL=/build/_shared/chunk-JF7KAM5T.js.map

import {
  selectItem,
  unselectItem,
  useDispatch,
  useFetchPersonDetailsQuery,
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
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: Card_module_default["result-item"], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Card_module_default["checkbox-container"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", checked: isSelected, onChange: handleCheckboxChange }, void 0, false, {
        fileName: "app/components/Card/Card.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      "Select"
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: handleCardClick, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: person.name }, void 0, false, {
        fileName: "app/components/Card/Card.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Card_module_default["attributes-grid"], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Height" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          ": ",
          person.height
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Mass" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          ": ",
          person.mass
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Hair Color" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          ": ",
          person.hair_color
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Skin Color" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          ": ",
          person.skin_color
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Eye Color" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          ": ",
          person.eye_color
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Birth Year" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          ": ",
          person.birth_year
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Gender" }, void 0, false, {
            fileName: "app/components/Card/Card.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          ": ",
          person.gender
        ] }, void 0, true, {
          fileName: "app/components/Card/Card.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Card/Card.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Card/Card.tsx",
      lineNumber: 56,
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

// app/styles/details.module.css
var details_module_default = { "details-container": "details-module__details-container__qGOM-" };

// app/routes/details.$id.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/details.$id.tsx"
  );
}
var DetailsPage = ({
  id
}) => {
  _s2();
  const {
    person,
    isLoading,
    error
  } = usePersonDetails_default(id);
  if (isLoading)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Loading_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 47,
      columnNumber: 25
    }, this);
  if (error)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorMessage_default, { message: error.toString() }, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 48,
      columnNumber: 21
    }, this);
  if (!person)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NoResults_default, {}, void 0, false, {
      fileName: "app/routes/details.$id.tsx",
      lineNumber: 49,
      columnNumber: 23
    }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: details_module_default["details-container"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { person }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
};
_s2(DetailsPage, "9eDm13AbMZ98HNKUWfdLBkPS11A=", false, function() {
  return [usePersonDetails_default];
});
_c5 = DetailsPage;
var details_id_default = DetailsPage;
var _c5;
$RefreshReg$(_c5, "DetailsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  Card_default,
  Loading_default,
  ErrorMessage_default,
  NoResults_default,
  details_id_default
};
//# sourceMappingURL=/build/_shared/chunk-HZB4MVP7.js.map

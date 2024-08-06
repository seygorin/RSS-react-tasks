import {
  createSlice
} from "/build/_shared/chunk-BXGS4RVO.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/context/ThemeContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/ThemeContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/ThemeContext.tsx"
  );
  import.meta.hot.lastModified = "1722960578304.9702";
}
var ThemeContext = (0, import_react.createContext)(void 0);
var useTheme = () => {
  _s();
  const context = (0, import_react.useContext)(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var ThemeProvider = ({
  children
}) => {
  _s2();
  const [theme, setTheme] = (0, import_react.useState)("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value: {
    theme,
    toggleTheme
  }, children }, void 0, false, {
    fileName: "app/context/ThemeContext.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s2(ThemeProvider, "c/tiXTWXTQispzpG//dV5FX41vQ=");
_c = ThemeProvider;
var _c;
$RefreshReg$(_c, "ThemeProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Button/Button.module.css
var Button_module_default = { "button": "Button-module__button__Mxh5t", "pagination-button": "Button-module__pagination-button__KcpSC", "search-button": "Button-module__search-button__OYIlU", "error-boundary-button": "Button-module__error-boundary-button__VuxHr", "toggle-theme-button": "Button-module__toggle-theme-button__HuaIf" };

// app/components/Button/Button.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button/Button.tsx"
  );
}
var Button = ({
  variant = "default",
  className,
  ...props
}) => {
  const variantClass = {
    default: Button_module_default.button,
    pagination: `${Button_module_default.button} ${Button_module_default["pagination-button"]}`,
    search: `${Button_module_default.button} ${Button_module_default["search-button"]}`,
    errorBoundary: `${Button_module_default.button} ${Button_module_default["error-boundary-button"]}`,
    toggleTheme: `${Button_module_default.button} ${Button_module_default["toggle-theme-button"]}`
  }[variant];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: `${variantClass} ${className}`, ...props }, void 0, false, {
    fileName: "app/components/Button/Button.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c2 = Button;
var Button_default = Button;
var _c2;
$RefreshReg$(_c2, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/store/slices/pageSlice.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/store/slices/pageSlice.ts"
  );
  import.meta.hot.lastModified = "1722860991851.2808";
}
var initialState = {
  currentPage: 1
};
var pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});
var { setPage } = pageSlice.actions;
var pageSlice_default = pageSlice.reducer;

// app/store/slices/peopleSlice.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/store/slices/peopleSlice.ts"
  );
  import.meta.hot.lastModified = "1722956716698.8818";
}
var initialState2 = {
  currentPageData: []
};
var peopleSlice = createSlice({
  name: "people",
  initialState: initialState2,
  reducers: {
    setPeople: (state, action) => {
      state.currentPageData = action.payload;
    }
  }
});
var { setPeople } = peopleSlice.actions;
var peopleSlice_default = peopleSlice.reducer;

export {
  useTheme,
  ThemeProvider,
  Button_default,
  setPage,
  pageSlice_default,
  setPeople,
  peopleSlice_default
};
//# sourceMappingURL=/build/_shared/chunk-CUZ5CSBH.js.map

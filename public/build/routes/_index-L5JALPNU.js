import {
  Button_default,
  setPage,
  setPeople,
  useTheme
} from "/build/_shared/chunk-TJZT6UNL.js";
import {
  Card_default,
  ErrorMessage_default,
  Loading_default,
  NoResults_default,
  require_node
} from "/build/_shared/chunk-6FY3H3Y6.js";
import {
  unselectAllItems,
  useDispatch,
  useFetchPeopleQuery,
  useSelector
} from "/build/_shared/chunk-BXGS4RVO.js";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/hooks/useMainPage.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useMainPage.tsx"
  );
  import.meta.hot.lastModified = "1722959174553.1182";
}
var useMainPage = () => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = (0, import_react.useState)(false);
  const [hasError, setHasError] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    setIsInitialLoadComplete(true);
  }, []);
  const throwError = () => {
    setHasError(true);
  };
  const closeDetails = () => {
    navigate("/", { replace: true });
  };
  return {
    isInitialLoadComplete,
    hasError,
    throwError,
    closeDetails
  };
};
var useMainPage_default = useMainPage;

// app/components/Result/Results.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/CardList/CardList.module.css
var CardList_module_default = { "result-list": "CardList-module__result-list__Ov0Gv" };

// app/components/CardList/CardList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CardList/CardList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CardList/CardList.tsx"
  );
}
var CardList = ({
  people
}) => {
  if (people.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoResults_default, {}, void 0, false, {
      fileName: "app/components/CardList/CardList.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: CardList_module_default["result-list"], children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { person }, person.url, false, {
    fileName: "app/components/CardList/CardList.tsx",
    lineNumber: 31,
    columnNumber: 29
  }, this)) }, void 0, false, {
    fileName: "app/components/CardList/CardList.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = CardList;
var CardList_default = CardList;
var _c;
$RefreshReg$(_c, "CardList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Pagination/Pagination.module.css
var Pagination_module_default = { "pagination": "Pagination-module__pagination__Ri-g8" };

// app/components/Pagination/Pagination.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Pagination/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Pagination/Pagination.tsx"
  );
}
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handlePageChange = (event, newPage) => {
    event.stopPropagation();
    onPageChange(newPage);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: Pagination_module_default["pagination"], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: (event) => handlePageChange(event, currentPage - 1), disabled: currentPage === 1, variant: "pagination", children: "Previous" }, void 0, false, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
      "Page ",
      currentPage,
      " of ",
      totalPages
    ] }, void 0, true, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: (event) => handlePageChange(event, currentPage + 1), disabled: currentPage === totalPages, variant: "pagination", children: "Next" }, void 0, false, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pagination/Pagination.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c2 = Pagination;
var Pagination_default = Pagination;
var _c2;
$RefreshReg$(_c2, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Result/Results.module.css
var Results_module_default = { "results-container": "Results-module__results-container__R8rTH" };

// app/components/Result/Results.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Result/Results.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Result/Results.tsx"
  );
}
var Results = ({
  searchTerm
}) => {
  _s();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
  const peopleData = useSelector((state) => state.people.currentPageData);
  const {
    data,
    error,
    isLoading
  } = useFetchPeopleQuery({
    searchTerm,
    page: currentPage
  });
  (0, import_react3.useEffect)(() => {
    dispatch(setPage(currentPage));
  }, [currentPage, dispatch]);
  (0, import_react3.useEffect)(() => {
    if (data && data.results) {
      dispatch(setPeople(data.results));
    }
  }, [data, dispatch]);
  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    navigate(`?page=${newPage}`, {
      replace: true
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loading_default, {}, void 0, false, {
      fileName: "app/components/Result/Results.tsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorMessage_default, { message: "Failed to fetch data" }, void 0, false, {
      fileName: "app/components/Result/Results.tsx",
      lineNumber: 68,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: Results_module_default["results-container"], children: peopleData && peopleData.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardList_default, { people: peopleData }, void 0, false, {
      fileName: "app/components/Result/Results.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Pagination_default, { currentPage, totalPages: Math.ceil(((data == null ? void 0 : data.count) || 0) / 10), onPageChange: handlePageChange }, void 0, false, {
      fileName: "app/components/Result/Results.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Result/Results.tsx",
    lineNumber: 71,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NoResults_default, {}, void 0, false, {
    fileName: "app/components/Result/Results.tsx",
    lineNumber: 75,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/Result/Results.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
};
_s(Results, "wqr+gnGyJfGiLtuCkWhgA3FJnYY=", false, function() {
  return [useDispatch, useLocation, useNavigate, useSelector, useFetchPeopleQuery];
});
_c3 = Results;
var Results_default = Results;
var _c3;
$RefreshReg$(_c3, "Results");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Flyout/Flyout.module.css
var Flyout_module_default = { "flyout": "Flyout-module__flyout__v8bQR" };

// app/components/Flyout/Flyout.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Flyout/Flyout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Flyout/Flyout.tsx"
  );
}
var Flyout = () => {
  _s2();
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectedItem.selectedItems);
  const selectedCount = Object.keys(selectedItems).length;
  const handleUnselectAll = () => {
    dispatch(unselectAllItems());
  };
  const handleDownload = () => {
    const headers = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender", "url"];
    const csvContent = [headers.join(","), ...Object.values(selectedItems).map((item) => [item.name, item.height, item.mass, item.hair_color, item.skin_color, item.eye_color, item.birth_year, item.gender, item.url].join(","))].join("\n");
    const blob = new Blob([csvContent], {
      type: "text/csv"
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `${selectedCount}_people.csv`);
    a.click();
  };
  if (selectedCount === 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: Flyout_module_default["flyout"], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      selectedCount,
      " items are selected"
    ] }, void 0, true, {
      fileName: "app/components/Flyout/Flyout.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "search", onClick: handleUnselectAll, children: "Unselect all" }, void 0, false, {
      fileName: "app/components/Flyout/Flyout.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "search", onClick: handleDownload, children: "Download" }, void 0, false, {
      fileName: "app/components/Flyout/Flyout.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Flyout/Flyout.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s2(Flyout, "FzHVeXltEM4xjwFBOPqkwW7TSFI=", false, function() {
  return [useDispatch, useSelector];
});
_c4 = Flyout;
var Flyout_default = Flyout;
var _c4;
$RefreshReg$(_c4, "Flyout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/useLocalStorage.tsx
var import_react5 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/useLocalStorage.tsx"
  );
  import.meta.hot.lastModified = "1722870813179.1748";
}
var useLocalStorage = (key, initialValue) => {
  const [value, setValue] = (0, import_react5.useState)(initialValue);
  (0, import_react5.useEffect)(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(storedValue);
      }
    }
  }, [key]);
  (0, import_react5.useEffect)(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }, [key, value]);
  return [value, setValue];
};
var useLocalStorage_default = useLocalStorage;

// app/hooks/useSearch.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useSearch.ts"
  );
  import.meta.hot.lastModified = "1722860991849.4236";
}
var useSearch = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage_default("searchTerm", "");
  const handleSearch = (searchTerm2) => {
    setSearchTerm(searchTerm2);
  };
  return {
    searchTerm,
    handleSearch
  };
};
var useSearch_default = useSearch;

// app/components/SearchInput/SearchInput.tsx
var import_react6 = __toESM(require_react(), 1);

// app/components/SearchInput/SearchInput.module.css
var SearchInput_module_default = { "search-form": "SearchInput-module__search-form__6PHcF", "search-input": "SearchInput-module__search-input__98lk3" };

// app/components/SearchInput/SearchInput.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SearchInput/SearchInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchInput/SearchInput.tsx"
  );
}
var SearchInput = ({
  onSearch,
  initialSearchTerm
}) => {
  _s3();
  const [searchTerm, setSearchTerm] = (0, import_react6.useState)(initialSearchTerm);
  const navigate = useNavigate();
  (0, import_react6.useEffect)(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    onSearch(trimmedSearchTerm);
    if (trimmedSearchTerm) {
      navigate(`/?search=${trimmedSearchTerm}`);
    } else {
      navigate("/");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { className: SearchInput_module_default["search-form"], onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", className: SearchInput_module_default["search-input"], value: searchTerm, onChange: handleChange }, void 0, false, {
      fileName: "app/components/SearchInput/SearchInput.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { type: "submit", variant: "search", children: "Search" }, void 0, false, {
      fileName: "app/components/SearchInput/SearchInput.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SearchInput/SearchInput.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s3(SearchInput, "ejHY2XZOtwkussJ8GxCBJLzPt/w=", false, function() {
  return [useNavigate];
});
_c5 = SearchInput;
var SearchInput_default = SearchInput;
var _c5;
$RefreshReg$(_c5, "SearchInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Header/Header.module.css
var Header_module_default = { "header": "Header-module__header__Aj8Bn" };

// app/components/Header/Header.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header/Header.tsx"
  );
}
var Header = ({
  throwError
}) => {
  _s4();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    searchTerm,
    handleSearch
  } = useSearch_default();
  const handleToggleTheme = async () => {
    await toggleTheme();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: Header_module_default["header"], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "errorBoundary", onClick: throwError, children: "Throw Error" }, void 0, false, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "toggleTheme", onClick: handleToggleTheme, children: theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme" }, void 0, false, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchInput_default, { onSearch: handleSearch, initialSearchTerm: searchTerm }, void 0, false, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s4(Header, "y2bMH6Tkm0n3gJhpHGsKlnVvQgc=", false, function() {
  return [useTheme, useSearch_default];
});
_c6 = Header;
var Header_default = Header;
var _c6;
$RefreshReg$(_c6, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/index.module.css
var index_module_default = { "main-page": "index-module__main-page__6YGPJ", "bottom-section": "index-module__bottom-section__Oo0MN", "content-section": "index-module__content-section__mOZ-z", "left-section": "index-module__left-section__1JH8l", "right-section": "index-module__right-section__V6XGd" };

// app/routes/_index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var MainPage = () => {
  _s5();
  const {
    searchTerm
  } = useLoaderData();
  const [searchParams] = useSearchParams();
  const {
    isInitialLoadComplete,
    closeDetails
  } = useMainPage_default();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const showDetails = !!id;
  const handleCloseDetails = () => {
    closeDetails();
    navigate("/", {
      replace: true
    });
  };
  const handleThrowError = () => {
    throw new Error("Test error");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: index_module_default["main-page"], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, { throwError: handleThrowError }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: index_module_default["content-section"], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: index_module_default["left-section"], children: isInitialLoadComplete && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Results_default, { searchTerm }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 64,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      showDetails && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: index_module_default["right-section"], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { variant: "pagination", onClick: handleCloseDetails, children: "Close" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Flyout_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s5(MainPage, "UYDk7rPjcAiSgaqz6Maykdc1K9Q=", false, function() {
  return [useLoaderData, useSearchParams, useMainPage_default, useNavigate];
});
_c7 = MainPage;
var index_default = MainPage;
var _c7;
$RefreshReg$(_c7, "MainPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default
};
//# sourceMappingURL=/build/routes/_index-L5JALPNU.js.map

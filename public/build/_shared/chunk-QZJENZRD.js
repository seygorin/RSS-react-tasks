import {
  Button_default,
  ThemeProvider,
  pageSlice_default,
  peopleSlice_default,
} from '/build/_shared/chunk-TJZT6UNL.js';
import {
  Provider_default,
  configureStore,
  personApi,
  selectedItemSlice_default,
} from '/build/_shared/chunk-BXGS4RVO.js';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_dist,
  useLoaderData,
  useRouteError,
} from '/build/_shared/chunk-DG2LPO6O.js';
import { createHotContext } from '/build/_shared/chunk-NSAQ3VKU.js';
import { require_jsx_dev_runtime } from '/build/_shared/chunk-XGOTYLZ5.js';
import { __commonJS, __toESM } from '/build/_shared/chunk-PNG5AS42.js';

// empty-module:./theme.server
var require_theme = __commonJS({
  'empty-module:./theme.server'(exports, module) {
    module.exports = {};
  },
});

// app/components/ErrorBoundary/ErrorBoundary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn(
    'remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.',
  );
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(
      type,
      '"app/components/ErrorBoundary/ErrorBoundary.tsx"' + id,
    );
  };
  window.$RefreshSig$ =
    window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    'app/components/ErrorBoundary/ErrorBoundary.tsx',
  );
  import.meta.hot.lastModified = '1723314989992.288';
}
var ErrorFallback = () => {
  _s();
  const error = useRouteError();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    'div',
    {
      style: {
        textAlign: 'center',
        padding: '20px',
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          'p',
          { children: 'Something went wrong:' },
          void 0,
          false,
          {
            fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
            lineNumber: 32,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          'p',
          { children: error.message || String(error) },
          void 0,
          false,
          {
            fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
            lineNumber: 33,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button_default,
          {
            variant: 'pagination',
            onClick: () => window.location.reload(),
            children: 'Reload',
          },
          void 0,
          false,
          {
            fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
            lineNumber: 34,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
      lineNumber: 28,
      columnNumber: 10,
    },
    this,
  );
};
_s(ErrorFallback, 'oAgjgbJzsRXlB89+MoVumxMQqKM=', false, function () {
  return [useRouteError];
});
_c = ErrorFallback;
var ErrorBoundary = ({ children }) => {
  try {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_jsx_dev_runtime.Fragment,
      { children },
      void 0,
      false,
      {
        fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
        lineNumber: 47,
        columnNumber: 12,
      },
      this,
    );
  } catch (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ErrorFallback,
      {},
      void 0,
      false,
      {
        fileName: 'app/components/ErrorBoundary/ErrorBoundary.tsx',
        lineNumber: 49,
        columnNumber: 12,
      },
      this,
    );
  }
};
_c2 = ErrorBoundary;
var ErrorBoundary_default = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, 'ErrorFallback');
$RefreshReg$(_c2, 'ErrorBoundary');
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/store/store.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    'app/store/store.ts',
  );
  import.meta.hot.lastModified = '1722959166431.9512';
}
var store = configureStore({
  reducer: {
    [personApi.reducerPath]: personApi.reducer,
    page: pageSlice_default,
    people: peopleSlice_default,
    selectedItem: selectedItemSlice_default,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personApi.middleware),
});

// app/pages/404/NotFoundPage.tsx
init_dist();

// app/pages/404/NotFoundPage.module.css
var NotFoundPage_module_default = {
  'not-found-page': 'NotFoundPage-module__not-found-page__FGd2r',
};

// app/pages/404/NotFoundPage.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn(
    'remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.',
  );
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(
      type,
      '"app/pages/404/NotFoundPage.tsx"' + id,
    );
  };
  window.$RefreshSig$ =
    window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    'app/pages/404/NotFoundPage.tsx',
  );
}
var NotFoundPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    'div',
    {
      className: NotFoundPage_module_default.notFound,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          'h1',
          { children: '404 - Page Not Found' },
          void 0,
          false,
          {
            fileName: 'app/pages/404/NotFoundPage.tsx',
            lineNumber: 25,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          'p',
          { children: 'The page you are looking for does not exist.' },
          void 0,
          false,
          {
            fileName: 'app/pages/404/NotFoundPage.tsx',
            lineNumber: 26,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          { to: '/', children: 'Go to Home' },
          void 0,
          false,
          {
            fileName: 'app/pages/404/NotFoundPage.tsx',
            lineNumber: 27,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: 'app/pages/404/NotFoundPage.tsx',
      lineNumber: 24,
      columnNumber: 10,
    },
    this,
  );
};
_c3 = NotFoundPage;
var NotFoundPage_default = NotFoundPage;
var _c3;
$RefreshReg$(_c3, 'NotFoundPage');
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = '/build/css-bundle-LH5VWLCU.css';

// app/styles/globals.css
var globals_default = '/build/_assets/globals-PSWBWJ6Q.css';

// app/root.tsx
var import_theme = __toESM(require_theme(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn(
    'remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.',
  );
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ =
    window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    'app/root.tsx',
  );
}
var links = () => [
  ...(cssBundleHref
    ? [
        {
          rel: 'stylesheet',
          href: cssBundleHref,
        },
      ]
    : []),
  {
    rel: 'stylesheet',
    href: globals_default,
  },
  {
    rel: 'icon',
    href: '/favicon.ico',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Star+Jedi&display=swap',
  },
];
var meta = () => [
  {
    charset: 'utf-8',
  },
  {
    title: 'RS School - React Project',
  },
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1',
  },
  {
    name: 'description',
    content: 'seygorin: Star Wars Characters Search App',
  },
];
function Root() {
  _s2();
  const { theme } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    'html',
    {
      lang: 'en',
      'data-theme': theme,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          'head',
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Meta,
                {},
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 76,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Links,
                {},
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 77,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: 'app/root.tsx',
            lineNumber: 75,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          'body',
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Provider_default,
                {
                  store,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    ThemeProvider,
                    {
                      initialTheme: theme,
                      children: /* @__PURE__ */ (0,
                      import_jsx_dev_runtime3.jsxDEV)(
                        ErrorBoundary_default,
                        {
                          children: /* @__PURE__ */ (0,
                          import_jsx_dev_runtime3.jsxDEV)(
                            Outlet,
                            {},
                            void 0,
                            false,
                            {
                              fileName: 'app/root.tsx',
                              lineNumber: 83,
                              columnNumber: 15,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: 'app/root.tsx',
                          lineNumber: 82,
                          columnNumber: 13,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: 'app/root.tsx',
                      lineNumber: 81,
                      columnNumber: 11,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 80,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                ScrollRestoration,
                {},
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 87,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                Scripts,
                {},
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 88,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                LiveReload,
                {},
                void 0,
                false,
                {
                  fileName: 'app/root.tsx',
                  lineNumber: 89,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: 'app/root.tsx',
            lineNumber: 79,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: 'app/root.tsx',
      lineNumber: 74,
      columnNumber: 10,
    },
    this,
  );
}
_s2(Root, 'VwrtovmFFVHcbBlIBqMOsw8npCE=', false, function () {
  return [useLoaderData];
});
_c4 = Root;
var _c4;
$RefreshReg$(_c4, 'Root');
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export { ErrorBoundary_default, NotFoundPage_default, links, meta, Root };
//# sourceMappingURL=/build/_shared/chunk-QZJENZRD.js.map

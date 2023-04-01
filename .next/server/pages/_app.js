/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-nextjs-toast */ \"react-nextjs-toast\");\n/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    const { pathname , asPath , push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (pathname.search(\"/login\") < 0 && \"undefined\" != undefined && pathname.search(\"/register\") < 0) {\n            const value = localStorage.getItem(\"@token\");\n            const date = localStorage.getItem(\"@timestampToken\");\n            const isValid = value && dayjs__WEBPACK_IMPORTED_MODULE_9___default()(date).toDate().getDate() === dayjs__WEBPACK_IMPORTED_MODULE_9___default()(new Date()).toDate().getDate();\n            if (!isValid) {\n                push(`/login?url=${asPath}`);\n            }\n        }\n        //@ts-ignore\n        if ( true && pathname.search(\"/register\") >= 0 && !!asPath) {\n            if (!query.ref && (asPath === null || asPath === void 0 ? void 0 : asPath.search('ref=')) < 0) {\n                console.log(query);\n                react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__.toast.notify(\"Consulte seu consultor, ele lhe enviar\\xe1 um link de cadastro\", {\n                    title: \"error\"\n                });\n            }\n        }\n    }, [\n        \"undefined\",\n        pathname,\n        query\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Documents/projects/exchange-test/src/pages/_app.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFUztBQUNTO0FBQ2hCO0FBQ1A7QUFDSTtBQUNBO0FBQ007QUFDcEI7QUFFekIsS0FBSyxDQUFDUyxLQUFLLElBQXdCLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDL0QsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxHQUFFQyxNQUFNLEdBQUVDLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBR1Isc0RBQVM7SUFDbkROLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFDQVcsUUFBUSxDQUFDSSxNQUFNLENBQUMsQ0FBUSxXQUFJLENBQUMsSUFDN0IsQ0FBYSxjQUFJQyxTQUFTLElBQzFCTCxRQUFRLENBQUNJLE1BQU0sQ0FBQyxDQUFXLGNBQUksQ0FBQyxFQUNoQyxDQUFDO1lBQ0QsS0FBSyxDQUFDRSxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVE7WUFDM0MsS0FBSyxDQUFDQyxJQUFJLEdBQUdGLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQWlCO1lBQ25ELEtBQUssQ0FBQ0UsT0FBTyxHQUNYSixLQUFLLElBQ0xWLDRDQUFLLENBQUNhLElBQUksRUFBRUUsTUFBTSxHQUFHQyxPQUFPLE9BQU9oQiw0Q0FBSyxDQUFDLEdBQUcsQ0FBQ2lCLElBQUksSUFBSUYsTUFBTSxHQUFHQyxPQUFPO1lBQ3ZFLEVBQUUsR0FBR0YsT0FBTyxFQUFFLENBQUM7Z0JBQ2JSLElBQUksRUFBRSxXQUFXLEVBQUVELE1BQU07WUFDM0IsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFZO1FBQ1osRUFBRSxFQUFFLEtBQTBCLElBQUlELFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLENBQVcsZUFBSyxDQUFDLE1BQU1ILE1BQU0sRUFBRSxDQUFDO1lBQ2hGLEVBQUUsR0FBR0UsS0FBSyxDQUFDVyxHQUFHLEtBQUliLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLE1BQU0sQ0FBRUcsTUFBTSxDQUFDLENBQU0sVUFBRyxDQUFDLEVBQUUsQ0FBQztnQkFDNUNXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixLQUFLO2dCQUNqQlgsNERBQVksQ0FDVixDQUE2RCxpRUFDN0QsQ0FBQztvQkFDQzBCLEtBQUssRUFBRSxDQUFPO2dCQUNoQixDQUFDO1lBRUwsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQztRQUFBLENBQWE7UUFBRWxCLFFBQVE7UUFBRUcsS0FBSztJQUFBLENBQUM7SUFFbkMsTUFBTSw2RUFDSGIsNERBQWE7UUFBQ0ksS0FBSyxFQUFFQSxxREFBSzs7d0ZBQ3hCSSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7d0ZBQ3ZCTixzREFBVzs7Ozs7d0ZBQ1hGLDhEQUFjOzs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVNLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtbmV4dGpzLXRvYXN0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWxcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcHVzaCwgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHBhdGhuYW1lLnNlYXJjaChcIi9sb2dpblwiKSA8IDAgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT0gdW5kZWZpbmVkICYmXG4gICAgICBwYXRobmFtZS5zZWFyY2goXCIvcmVnaXN0ZXJcIikgPCAwXG4gICAgKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQHRva2VuXCIpO1xuICAgICAgY29uc3QgZGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQHRpbWVzdGFtcFRva2VuXCIpO1xuICAgICAgY29uc3QgaXNWYWxpZCA9XG4gICAgICAgIHZhbHVlICYmXG4gICAgICAgIGRheWpzKGRhdGUpLnRvRGF0ZSgpLmdldERhdGUoKSA9PT0gZGF5anMobmV3IERhdGUoKSkudG9EYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHB1c2goYC9sb2dpbj91cmw9JHthc1BhdGh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IHVuZGVmaW5lZCAmJiBwYXRobmFtZS5zZWFyY2goXCIvcmVnaXN0ZXJcIikgPj0gMCAmJiAhIWFzUGF0aCkge1xuICAgICAgaWYgKCFxdWVyeS5yZWYgJiYgYXNQYXRoPy5zZWFyY2goJ3JlZj0nKSA8MCkge1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICAgICAgdG9hc3Qubm90aWZ5KFxuICAgICAgICAgIFwiQ29uc3VsdGUgc2V1IGNvbnN1bHRvciwgZWxlIGxoZSBlbnZpYXLDoSB1bSBsaW5rIGRlIGNhZGFzdHJvXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiZXJyb3JcIixcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbdHlwZW9mIHdpbmRvdywgcGF0aG5hbWUsIHF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRoZW1lUHJvdmlkZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiR2xvYmFsU3R5bGUiLCJ0aGVtZSIsInVzZVJvdXRlciIsImRheWpzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwYXRobmFtZSIsImFzUGF0aCIsInB1c2giLCJxdWVyeSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGUiLCJpc1ZhbGlkIiwidG9EYXRlIiwiZ2V0RGF0ZSIsIkRhdGUiLCJyZWYiLCJjb25zb2xlIiwibG9nIiwibm90aWZ5IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n\n@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Archivo+Black&family=Poppins:wght@400;700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n  }\n\n  body {\n    background: ${(props)=>props.theme.colors.background\n};\n    color: ${(props)=>props.theme.colors.text\n};\n    font-family: 'Poppins', sans-serif;\n\n        /* width */\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: white; \n    }\n    \n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      background: #072038; \n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n      background: black; \n    }\n  }\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUQ7QUFFckQsaUVBQWVBLGdFQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Z0JBWWpCLEdBQUdDLEtBQUssR0FBS0EsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtDQUFDO1dBQ2hELEdBQUdILEtBQUssR0FBS0EsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSTtDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCaEQsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwudHM/MGZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QUJlZVplZTppdGFsQDA7MSZmYW1pbHk9QXJjaGl2bytCbGFjayZmYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgIC8qIHdpZHRoICovXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG5cbiAgICAvKiBUcmFjayAqL1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7IFxuICAgIH1cbiAgICBcbiAgICAvKiBIYW5kbGUgKi9cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNzIwMzg7IFxuICAgIH1cblxuICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst theme = {\n    colors: {\n        background: \"#F5F7F9\",\n        text: \"#e1e1e6\",\n        primary: \"#0B3B69\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLEtBQUssR0FBRyxDQUFDO0lBQ2JDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLFVBQVUsRUFBRSxDQUFTO1FBQ3JCQyxJQUFJLEVBQUUsQ0FBUztRQUNmQyxPQUFPLEVBQUUsQ0FBUztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlSixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJhY2tncm91bmQ6IFwiI0Y1RjdGOVwiLFxuICAgIHRleHQ6IFwiI2UxZTFlNlwiLFxuICAgIHByaW1hcnk6IFwiIzBCM0I2OVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-nextjs-toast":
/*!*************************************!*\
  !*** external "react-nextjs-toast" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-nextjs-toast");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
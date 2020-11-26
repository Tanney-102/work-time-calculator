webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/work-time-calc/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Main\",\n  componentId: \"cqz4mh-0\"\n})([\"background-color:#eceae9;display:flex;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label.withConfig({\n  displayName: \"pages__FileInput\",\n  componentId: \"cqz4mh-1\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c2 = FileInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"pages__Button\",\n  componentId: \"cqz4mh-2\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c3 = Button;\n\nfunction Worker(name) {\n  this.name = name;\n  this.workTime = []; // [ [ date, time], ... ]\n\n  this.getSum = function () {\n    return workTime.reduce(function (result, data) {\n      return result + data[1];\n    });\n  };\n}\n\n_c4 = Worker;\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mainFile = _useState[0],\n      setMainFile = _useState[1];\n\n  var parseFile = function parseFile(e) {\n    var reader = new FileReader();\n    console.log('test');\n\n    var getElem = function getElem(sheet, i, R) {\n      var tmp = sheet[XLSX.utils.encode_cell({\n        c: i,\n        r: R\n      })];\n      var elem = 'UNKNOWN';\n      if (tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);\n      return elem;\n    };\n\n    reader.onload = function () {\n      var fileData = reader.result;\n      var wb = XLSX.read(fileData, {\n        type: 'binary'\n      });\n      var firstSheetName = wb.SheetNames[0];\n      var sheet = wb.Sheets[firstSheetName];\n      var mainSheet = [];\n      var range = XLSX.utils.decode_range(sheet['!ref']);\n\n      for (var R = 2; R <= range.e.r; ++R) {\n        var rowData = [];\n        rowData.push(getElem(sheet, 0, R));\n        rowData.push(getElem(sheet, 1, R));\n        rowData.push(getElem(sheet, 2, R));\n        mainSheet.push(rowData);\n      }\n\n      setMainFile(mainSheet);\n    };\n\n    reader.readAsBinaryString(e.target.files[0]);\n  };\n\n  var getResult = function getResult() {\n    console.log(mainFile);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      height: winSize[1]\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FileInput, {\n      children: [\"\\uD30C\\uC77C \\uC62C\\uB9AC\\uAE30\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        style: {\n          display: 'none'\n        },\n        onChange: parseFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n      onClick: getResult,\n      children: \"\\uACB0\\uACFC \\uBCF4\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"xLhMBlDHdKGDYJaIrgoytXkYTfA=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"FileInput\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Worker\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkZpbGVJbnB1dCIsImxhYmVsIiwiQnV0dG9uIiwiYnV0dG9uIiwiV29ya2VyIiwibmFtZSIsIndvcmtUaW1lIiwiZ2V0U3VtIiwicmVkdWNlIiwicmVzdWx0IiwiZGF0YSIsIkhvbWUiLCJ3aW5TaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwibWFpbkZpbGUiLCJzZXRNYWluRmlsZSIsInBhcnNlRmlsZSIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY29uc29sZSIsImxvZyIsImdldEVsZW0iLCJzaGVldCIsImkiLCJSIiwidG1wIiwiWExTWCIsInV0aWxzIiwiZW5jb2RlX2NlbGwiLCJjIiwiciIsImVsZW0iLCJ0IiwiZm9ybWF0X2NlbGwiLCJvbmxvYWQiLCJmaWxlRGF0YSIsIndiIiwicmVhZCIsInR5cGUiLCJmaXJzdFNoZWV0TmFtZSIsIlNoZWV0TmFtZXMiLCJTaGVldHMiLCJtYWluU2hlZXQiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInJvd0RhdGEiLCJwdXNoIiwicmVhZEFzQmluYXJ5U3RyaW5nIiwidGFyZ2V0IiwiZmlsZXMiLCJnZXRSZXN1bHQiLCJoZWlnaHQiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUFWO0tBQU1GLEk7QUFRTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEtBQVY7QUFBQTtBQUFBO0FBQUEsb1BBQWY7TUFBTUQsUztBQWFOLElBQU1FLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtBQUFBO0FBQUE7QUFBQSxvUEFBWjtNQUFNRCxNOztBQWFOLFNBQVNFLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ2xCLE9B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L0IsV0FBTyxDQUFDQyxHQUFSLENBQVlQLFFBQVo7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ3NDLFlBQU0sRUFBQ3pDLE9BQU8sQ0FBQyxDQUFEO0FBQWYsS0FBYjtBQUFBLDRCQUNJLHFFQUFDLFNBQUQ7QUFBQSxpRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRTtBQUFDMEMsaUJBQU8sRUFBQztBQUFULFNBQTFCO0FBQTRDLGdCQUFRLEVBQUVyQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSxxRUFBQyxNQUFEO0FBQVEsYUFBTyxFQUFFbUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdILENBeEREOztHQUFNekMsSTtVQUNjRSw0RDs7O01BRGRGLEk7QUEwRFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VhZTk7XG5cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxlSW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICAgY29sb3I6IzRjNGE0OTtcbiAgICBmb250LWZhbWlseTogJ0dtYXJrZXRTYW5zTWVkaXVtJywgJ+uCmOuIlOqzoOuUlScsIE5hbnVtR290aGljLCAn64+L7JuAJywgRG90dW0sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6MjtcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjNWM1YTU5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB9O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjb2xvcjojNGM0YTQ5O1xuICAgIGZvbnQtZmFtaWx5OiAnR21hcmtldFNhbnNNZWRpdW0nLCAn64KY64iU6rOg65SVJywgTmFudW1Hb3RoaWMsICfrj4vsm4AnLCBEb3R1bSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBsaW5lLWhlaWdodDoyO1xuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICM1YzVhNTk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgIH07XG5gO1xuXG5mdW5jdGlvbiBXb3JrZXIobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy53b3JrVGltZSA9IFtdOyAvLyBbIFsgZGF0ZSwgdGltZV0sIC4uLiBdXG5cbiAgICB0aGlzLmdldFN1bSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdvcmtUaW1lLnJlZHVjZSgocmVzdWx0LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZGF0YVsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFttYWluRmlsZSwgc2V0TWFpbkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBwYXJzZUZpbGUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgICAgIGNvbnN0IGdldEVsZW0gPSAoc2hlZXQsIGksIFIpID0+IHtcbiAgICAgICAgICAgIGxldCB0bXAgPSBzaGVldFtYTFNYLnV0aWxzLmVuY29kZV9jZWxsKHtjOmksIHI6Un0pXVxuICAgICAgICAgICAgbGV0IGVsZW0gPSAnVU5LTk9XTic7XG4gICAgICAgICAgICBpZih0bXAgJiYgdG1wLnQpIGVsZW0gPSBYTFNYLnV0aWxzLmZvcm1hdF9jZWxsKHRtcCk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gIHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGUgOiAnYmluYXJ5J30pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTaGVldE5hbWUgPSB3Yi5TaGVldE5hbWVzWzBdO1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSB3Yi5TaGVldHNbZmlyc3RTaGVldE5hbWVdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtYWluU2hlZXQgPSBbXTsgXG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZShzaGVldFsnIXJlZiddKTtcblxuICAgICAgICAgICAgZm9yKGxldCBSPTI7IFI8PXJhbmdlLmUucjsgKytSKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvd0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb3dEYXRhLnB1c2goZ2V0RWxlbShzaGVldCwgMCwgUikpO1xuICAgICAgICAgICAgICAgIHJvd0RhdGEucHVzaChnZXRFbGVtKHNoZWV0LCAxLCBSKSk7XG4gICAgICAgICAgICAgICAgcm93RGF0YS5wdXNoKGdldEVsZW0oc2hlZXQsIDIsIFIpKTtcblxuICAgICAgICAgICAgICAgIG1haW5TaGVldC5wdXNoKHJvd0RhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRNYWluRmlsZShtYWluU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtYWluRmlsZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluIHN0eWxlPXt7aGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgIDxGaWxlSW5wdXQ+XG4gICAgICAgICAgICAgICAg7YyM7J28IOyYrOumrOq4sFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBvbkNoYW5nZT17cGFyc2VGaWxlfSAvPlxuICAgICAgICAgICAgPC9GaWxlSW5wdXQ+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dldFJlc3VsdH0+XG4gICAgICAgICAgICAgICAg6rKw6rO8IOuztOq4sFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWFpbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
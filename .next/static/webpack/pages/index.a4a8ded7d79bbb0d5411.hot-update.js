webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/work-time-calc/pages/index.js\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Main\",\n  componentId: \"cqz4mh-0\"\n})([\"background-color:#eceae9;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label.withConfig({\n  displayName: \"pages__FileInput\",\n  componentId: \"cqz4mh-1\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c2 = FileInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"pages__Button\",\n  componentId: \"cqz4mh-2\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c3 = Button;\n\nfunction Worker(name) {\n  var _this = this;\n\n  this.name = name;\n  this.workTime = [];\n\n  this.getSum = function () {\n    return _this.workTime.reduce(function (result, data) {\n      return result + data.reduce(function (_res, _d, i) {\n        if (_d === 0 && data[i - 1] === 1) {\n          _res--;\n        } else if (i === data.length - 1) {\n          _res--;\n        }\n\n        return _res + _d;\n      }, 0) / 2;\n    }, 0);\n  };\n}\n\n_c4 = Worker;\n\nvar getElem = function getElem(sheet, i, R) {\n  var tmp = sheet[XLSX.utils.encode_cell({\n    c: i,\n    r: R\n  })];\n  var elem = 'UNKNOWN';\n  if (tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);\n  return elem;\n};\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mainFile = _useState[0],\n      setMainFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      workerList = _useState2[0],\n      setWorkerList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      resultPage = _useState3[0],\n      setResultPage = _useState3[1];\n\n  var parseFile = function parseFile(e) {\n    var reader = new FileReader();\n    console.log('test');\n\n    reader.onload = function () {\n      var fileData = reader.result;\n      var wb = XLSX.read(fileData, {\n        type: 'binary'\n      });\n      var firstSheetName = wb.SheetNames[0];\n      var sheet = wb.Sheets[firstSheetName];\n      var mainSheet = [];\n      var range = XLSX.utils.decode_range(sheet['!ref']);\n\n      for (var R = 2; R <= range.e.r; ++R) {\n        var rowData = [];\n        rowData.push(getElem(sheet, 0, R));\n        rowData.push(getElem(sheet, 1, R));\n        rowData.push(getElem(sheet, 2, R));\n        mainSheet.push(rowData);\n      }\n\n      setMainFile(mainSheet);\n    };\n\n    reader.readAsBinaryString(e.target.files[0]);\n  };\n\n  var getResult = function getResult() {\n    mainFile.sort(function (a, b) {\n      if (a[0] < b[0]) {\n        return -1;\n      } else if (a[0] > b[0]) {\n        return 1;\n      } else {\n        if (a[1] < b[1]) {\n          return -1;\n        } else if (a[1] > b[1]) {\n          return 1;\n        }\n\n        return 0;\n      }\n    });\n    console.log(mainFile);\n    var workers = []; // array of Worker\n\n    var idx = 0;\n\n    var _loop = function _loop() {\n      var name = mainFile[idx][0];\n      var rows = [];\n\n      var _worker = new Worker(name);\n\n      while (mainFile[idx][0] === name) {\n        rows.push(mainFile[idx++]);\n      }\n\n      var curDay = '';\n      var cur = -1;\n      rows.forEach(function (row) {\n        var beginDay = row[1].split(' ')[0];\n        var endDay = row[2].split(' ')[0];\n\n        if (curDay !== beginDay) {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          cur++;\n        }\n\n        var beginTime = parseInt(row[1].split(' ')[2].split(':')[0]) + (row[1].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n        var endTime = parseInt(row[2].split(' ')[2].split(':')[0]) + (row[2].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n\n        if (beginDay === endDay) {\n          for (var i = beginTime * 2; i <= endTime * 2; i++) {\n            _worker.workTime[cur][i] = 1;\n          }\n        } else {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          for (var _i = beginTime * 2; _i < 49; _i++) {\n            _worker.workTime[cur][_i] = 1;\n          }\n\n          for (var _i2 = 0; _i2 <= endTime * 2; _i2++) {\n            _worker.workTime[cur + 1][_i2] = 1;\n          }\n        }\n      });\n      workers.push(_worker);\n    };\n\n    while (idx < mainFile.length) {\n      _loop();\n    }\n\n    setWorkerList(workers);\n    setResultPage(true);\n  };\n\n  var btnTest = function btnTest() {\n    console.log(workerList[0]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      height: winSize[1]\n    },\n    children: resultPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: '60%'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: btnTest,\n        children: \"test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 17\n      }, _this2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FileInput, {\n        children: [\"\\uD30C\\uC77C \\uC62C\\uB9AC\\uAE30\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          style: {\n            display: 'none'\n          },\n          onChange: parseFile\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 17\n        }, _this2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 13\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n        onClick: getResult,\n        children: \"\\uACB0\\uACFC \\uBCF4\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 13\n      }, _this2)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 9\n  }, _this2);\n};\n\n_s(Home, \"D4D9AJWPIOUCn1FP8h4DQ5/cTJY=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"FileInput\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Worker\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkZpbGVJbnB1dCIsImxhYmVsIiwiQnV0dG9uIiwiYnV0dG9uIiwiV29ya2VyIiwibmFtZSIsIndvcmtUaW1lIiwiZ2V0U3VtIiwicmVkdWNlIiwicmVzdWx0IiwiZGF0YSIsIl9yZXMiLCJfZCIsImkiLCJsZW5ndGgiLCJnZXRFbGVtIiwic2hlZXQiLCJSIiwidG1wIiwiWExTWCIsInV0aWxzIiwiZW5jb2RlX2NlbGwiLCJjIiwiciIsImVsZW0iLCJ0IiwiZm9ybWF0X2NlbGwiLCJIb21lIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIm1haW5GaWxlIiwic2V0TWFpbkZpbGUiLCJ3b3JrZXJMaXN0Iiwic2V0V29ya2VyTGlzdCIsInJlc3VsdFBhZ2UiLCJzZXRSZXN1bHRQYWdlIiwicGFyc2VGaWxlIiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwib25sb2FkIiwiZmlsZURhdGEiLCJ3YiIsInJlYWQiLCJ0eXBlIiwiZmlyc3RTaGVldE5hbWUiLCJTaGVldE5hbWVzIiwiU2hlZXRzIiwibWFpblNoZWV0IiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJyb3dEYXRhIiwicHVzaCIsInJlYWRBc0JpbmFyeVN0cmluZyIsInRhcmdldCIsImZpbGVzIiwiZ2V0UmVzdWx0Iiwic29ydCIsImEiLCJiIiwid29ya2VycyIsImlkeCIsInJvd3MiLCJfd29ya2VyIiwiY3VyRGF5IiwiY3VyIiwiZm9yRWFjaCIsInJvdyIsImJlZ2luRGF5Iiwic3BsaXQiLCJlbmREYXkiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZpbGwiLCJiZWdpblRpbWUiLCJwYXJzZUludCIsImVuZFRpbWUiLCJidG5UZXN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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O0FBQU0sU0FBSyxFQUFFO0FBQUNnRCxZQUFNLEVBQUNyRCxPQUFPLENBQUMsQ0FBRDtBQUFmLEtBQWI7QUFBQSxjQUNLTyxVQUFVLGdCQUNYO0FBQUssV0FBSyxFQUFFO0FBQUMrQyxhQUFLLEVBQUM7QUFBUCxPQUFaO0FBQUEsNkJBQ0k7QUFBUSxlQUFPLEVBQUVGLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGdCQVdYO0FBQUEsOEJBQ0EscUVBQUMsU0FBRDtBQUFBLG1FQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFO0FBQUNHLG1CQUFPLEVBQUM7QUFBVCxXQUExQjtBQUE0QyxrQkFBUSxFQUFFOUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFLQSxxRUFBQyxNQUFEO0FBQVEsZUFBTyxFQUFFc0IsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEE7QUFBQTtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXdCSCxDQXJJRDs7R0FBTWhDLEk7VUFDY0UsNEQ7OztNQURkRixJO0FBdUlTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICAgIGJhY2tncm91bmQtY29sb3I6I2VjZWFlOTtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxlSW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICAgY29sb3I6IzRjNGE0OTtcbiAgICBmb250LWZhbWlseTogJ0dtYXJrZXRTYW5zTWVkaXVtJywgJ+uCmOuIlOqzoOuUlScsIE5hbnVtR290aGljLCAn64+L7JuAJywgRG90dW0sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6MjtcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjNWM1YTU5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB9O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjb2xvcjojNGM0YTQ5O1xuICAgIGZvbnQtZmFtaWx5OiAnR21hcmtldFNhbnNNZWRpdW0nLCAn64KY64iU6rOg65SVJywgTmFudW1Hb3RoaWMsICfrj4vsm4AnLCBEb3R1bSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBsaW5lLWhlaWdodDoyO1xuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICM1YzVhNTk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgIH07XG5gO1xuXG5mdW5jdGlvbiBXb3JrZXIobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy53b3JrVGltZSA9IFtdO1xuXG4gICAgdGhpcy5nZXRTdW0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmtUaW1lLnJlZHVjZSgocmVzdWx0LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZGF0YS5yZWR1Y2UoKF9yZXMsIF9kLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2QgPT09IDAgJiYgZGF0YVtpLTFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZXMtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PT0gZGF0YS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICBfcmVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVzICsgX2Q7XG4gICAgICAgICAgICB9LCAwKS8yO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEVsZW0gPSAoc2hlZXQsIGksIFIpID0+IHtcbiAgICBsZXQgdG1wID0gc2hlZXRbWExTWC51dGlscy5lbmNvZGVfY2VsbCh7YzppLCByOlJ9KV1cbiAgICBsZXQgZWxlbSA9ICdVTktOT1dOJztcbiAgICBpZih0bXAgJiYgdG1wLnQpIGVsZW0gPSBYTFNYLnV0aWxzLmZvcm1hdF9jZWxsKHRtcCk7XG5cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFttYWluRmlsZSwgc2V0TWFpbkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3dvcmtlckxpc3QsIHNldFdvcmtlckxpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Jlc3VsdFBhZ2UsIHNldFJlc3VsdFBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgcGFyc2VGaWxlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICBcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gIHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGUgOiAnYmluYXJ5J30pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTaGVldE5hbWUgPSB3Yi5TaGVldE5hbWVzWzBdO1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSB3Yi5TaGVldHNbZmlyc3RTaGVldE5hbWVdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtYWluU2hlZXQgPSBbXTsgXG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZShzaGVldFsnIXJlZiddKTtcblxuICAgICAgICAgICAgZm9yKGxldCBSPTI7IFI8PXJhbmdlLmUucjsgKytSKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvd0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb3dEYXRhLnB1c2goZ2V0RWxlbShzaGVldCwgMCwgUikpO1xuICAgICAgICAgICAgICAgIHJvd0RhdGEucHVzaChnZXRFbGVtKHNoZWV0LCAxLCBSKSk7XG4gICAgICAgICAgICAgICAgcm93RGF0YS5wdXNoKGdldEVsZW0oc2hlZXQsIDIsIFIpKTtcblxuICAgICAgICAgICAgICAgIG1haW5TaGVldC5wdXNoKHJvd0RhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRNYWluRmlsZShtYWluU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBtYWluRmlsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZihhWzBdIDwgYlswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihhWzBdID4gYlswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihhWzFdIDwgYlsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFbMV0gPiBiWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtYWluRmlsZSk7XG5cbiAgICAgICAgY29uc3Qgd29ya2VycyA9IFtdOyAvLyBhcnJheSBvZiBXb3JrZXJcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIHdoaWxlKGlkeCA8IG1haW5GaWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1haW5GaWxlW2lkeF1bMF07XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIGNvbnN0IF93b3JrZXIgPSBuZXcgV29ya2VyKG5hbWUpO1xuXG4gICAgICAgICAgICB3aGlsZShtYWluRmlsZVtpZHhdWzBdID09PSBuYW1lKSByb3dzLnB1c2gobWFpbkZpbGVbaWR4KytdKTtcblxuICAgICAgICAgICAgbGV0IGN1ckRheSA9ICcnO1xuICAgICAgICAgICAgbGV0IGN1ciA9IC0xO1xuICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW5EYXkgPSByb3dbMV0uc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXkgPSByb3dbMl0uc3BsaXQoJyAnKVswXTtcblxuICAgICAgICAgICAgICAgIGlmKGN1ckRheSAhPT0gYmVnaW5EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoX3dvcmtlci53b3JrVGltZVtjdXIrMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci53b3JrVGltZS5wdXNoKEFycmF5KDQ5KS5maWxsKDApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXIrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiZWdpblRpbWUgPSBwYXJzZUludChyb3dbMV0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzBdKSArIChyb3dbMV0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzFdID09IDAgPyAwIDogMC41KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBwYXJzZUludChyb3dbMl0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzBdKSArIChyb3dbMl0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzFdID09IDAgPyAwIDogMC41KTtcblxuICAgICAgICAgICAgICAgIGlmKGJlZ2luRGF5ID09PSBlbmREYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPWJlZ2luVGltZSoyOyBpPD1lbmRUaW1lKjI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci53b3JrVGltZVtjdXJdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF93b3JrZXIud29ya1RpbWVbY3VyKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWUucHVzaChBcnJheSg0OSkuZmlsbCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9YmVnaW5UaW1lKjI7IGk8NDk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci53b3JrVGltZVtjdXJdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTw9ZW5kVGltZSoyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyKzFdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3b3JrZXJzLnB1c2goX3dvcmtlcik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRXb3JrZXJMaXN0KHdvcmtlcnMpO1xuICAgICAgICBzZXRSZXN1bHRQYWdlKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBidG5UZXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh3b3JrZXJMaXN0WzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICB7cmVzdWx0UGFnZSA/XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzYwJSd9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0blRlc3R9PnRlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7Lyoge3dvcmtlckxpc3QubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9IHwge3YuZ2V0U3VtKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX0gKi99XG4gICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSW5wdXQ+XG4gICAgICAgICAgICAgICAg7YyM7J28IOyYrOumrOq4sFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBvbkNoYW5nZT17cGFyc2VGaWxlfSAvPlxuICAgICAgICAgICAgPC9GaWxlSW5wdXQ+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dldFJlc3VsdH0+XG4gICAgICAgICAgICAgICAg6rKw6rO8IOuztOq4sFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgIDwvTWFpbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
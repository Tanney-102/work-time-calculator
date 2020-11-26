webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/work-time-calc/pages/index.js\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Main\",\n  componentId: \"cqz4mh-0\"\n})([\"background-color:#eceae9;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label.withConfig({\n  displayName: \"pages__FileInput\",\n  componentId: \"cqz4mh-1\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c2 = FileInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"pages__Button\",\n  componentId: \"cqz4mh-2\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c3 = Button;\n\nfunction Worker(name) {\n  var _this = this;\n\n  this.name = name;\n  this.workTime = [];\n\n  this.getSum = function () {\n    return _this.workTime.reduce(function (result, data) {\n      return result + data.reduce(function (_res, _d, i) {\n        if (_d === 0 && data[i - 1] === 1) {\n          _res--;\n        } else if (i === data.length - 1) {\n          _res--;\n        }\n\n        return _res + _d;\n      }, 0) / 2;\n    }, 0);\n  };\n}\n\n_c4 = Worker;\n\nvar getElem = function getElem(sheet, i, R) {\n  var tmp = sheet[XLSX.utils.encode_cell({\n    c: i,\n    r: R\n  })];\n  var elem = 'UNKNOWN';\n  if (tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);\n  return elem;\n};\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mainFile = _useState[0],\n      setMainFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      workerList = _useState2[0],\n      setWorkerList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      resultPage = _useState3[0],\n      setResultPage = _useState3[1];\n\n  var parseFile = function parseFile(e) {\n    var reader = new FileReader();\n    console.log('test');\n\n    reader.onload = function () {\n      var fileData = reader.result;\n      var wb = XLSX.read(fileData, {\n        type: 'binary'\n      });\n      var firstSheetName = wb.SheetNames[0];\n      var sheet = wb.Sheets[firstSheetName];\n      var mainSheet = [];\n      var range = XLSX.utils.decode_range(sheet['!ref']);\n\n      for (var R = 2; R <= range.e.r; ++R) {\n        var rowData = [];\n        rowData.push(getElem(sheet, 0, R));\n        rowData.push(getElem(sheet, 1, R));\n        rowData.push(getElem(sheet, 2, R));\n        mainSheet.push(rowData);\n      }\n\n      setMainFile(mainSheet);\n    };\n\n    reader.readAsBinaryString(e.target.files[0]);\n  };\n\n  var getResult = function getResult() {\n    mainFile.sort(function (a, b) {\n      if (a[0] < b[0]) {\n        return -1;\n      } else if (a[0] > b[0]) {\n        return 1;\n      } else {\n        if (a[1] < b[1]) {\n          return -1;\n        } else if (a[1] > b[1]) {\n          return 1;\n        }\n\n        return 0;\n      }\n    });\n    console.log(mainFile);\n    var workers = []; // array of Worker\n\n    var idx = 0;\n\n    var _loop = function _loop() {\n      var name = mainFile[idx][0];\n      var rows = [];\n\n      var _worker = new Worker(name);\n\n      while (idx < mainFile.length && mainFile[idx][0] === name) {\n        rows.push(mainFile[idx++]);\n      }\n\n      var curDay = '';\n      var cur = -1;\n      rows.forEach(function (row) {\n        var beginDay = row[1].split(' ')[0];\n        var endDay = row[2].split(' ')[0];\n\n        if (curDay !== beginDay) {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          cur++;\n        }\n\n        var beginTime = parseInt(row[1].split(' ')[2].split(':')[0]) + (row[1].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n        var endTime = parseInt(row[2].split(' ')[2].split(':')[0]) + (row[2].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n\n        if (beginDay === endDay) {\n          for (var i = beginTime * 2; i <= endTime * 2; i++) {\n            _worker.workTime[cur][i] = 1;\n          }\n        } else {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          for (var _i = beginTime * 2; _i < 49; _i++) {\n            _worker.workTime[cur][_i] = 1;\n          }\n\n          for (var _i2 = 0; _i2 <= endTime * 2; _i2++) {\n            _worker.workTime[cur + 1][_i2] = 1;\n          }\n        }\n      });\n      workers.push(_worker);\n    };\n\n    while (idx < mainFile.length) {\n      _loop();\n    }\n\n    setWorkerList(workers);\n    setResultPage(true);\n  };\n\n  var btnTest = function btnTest() {\n    console.log(workerList[0]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      minHeight: winSize[1]\n    },\n    children: resultPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: '60%'\n      },\n      children: workerList.map(function (v, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: flex,\n            border: '1px solid #bfbfbf'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: '60%'\n            },\n            children: v.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 186,\n            columnNumber: 29\n          }, _this2), \"| \", v.getSum()]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 25\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FileInput, {\n        children: [\"\\uD30C\\uC77C \\uC62C\\uB9AC\\uAE30\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          style: {\n            display: 'none'\n          },\n          onChange: parseFile\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 17\n        }, _this2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 13\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n        onClick: getResult,\n        children: \"\\uACB0\\uACFC \\uBCF4\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 201,\n        columnNumber: 13\n      }, _this2)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 9\n  }, _this2);\n};\n\n_s(Home, \"D4D9AJWPIOUCn1FP8h4DQ5/cTJY=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"FileInput\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Worker\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkZpbGVJbnB1dCIsImxhYmVsIiwiQnV0dG9uIiwiYnV0dG9uIiwiV29ya2VyIiwibmFtZSIsIndvcmtUaW1lIiwiZ2V0U3VtIiwicmVkdWNlIiwicmVzdWx0IiwiZGF0YSIsIl9yZXMiLCJfZCIsImkiLCJsZW5ndGgiLCJnZXRFbGVtIiwic2hlZXQiLCJSIiwidG1wIiwiWExTWCIsInV0aWxzIiwiZW5jb2RlX2NlbGwiLCJjIiwiciIsImVsZW0iLCJ0IiwiZm9ybWF0X2NlbGwiLCJIb21lIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIm1haW5GaWxlIiwic2V0TWFpbkZpbGUiLCJ3b3JrZXJMaXN0Iiwic2V0V29ya2VyTGlzdCIsInJlc3VsdFBhZ2UiLCJzZXRSZXN1bHRQYWdlIiwicGFyc2VGaWxlIiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwib25sb2FkIiwiZmlsZURhdGEiLCJ3YiIsInJlYWQiLCJ0eXBlIiwiZmlyc3RTaGVldE5hbWUiLCJTaGVldE5hbWVzIiwiU2hlZXRzIiwibWFpblNoZWV0IiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJyb3dEYXRhIiwicHVzaCIsInJlYWRBc0JpbmFyeVN0cmluZyIsInRhcmdldCIsImZpbGVzIiwiZ2V0UmVzdWx0Iiwic29ydCIsImEiLCJiIiwid29ya2VycyIsImlkeCIsInJvd3MiLCJfd29ya2VyIiwiY3VyRGF5IiwiY3VyIiwiZm9yRWFjaCIsInJvdyIsImJlZ2luRGF5Iiwic3BsaXQiLCJlbmREYXkiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZpbGwiLCJiZWdpblRpbWUiLCJwYXJzZUludCIsImVuZFRpbWUiLCJidG5UZXN0IiwibWluSGVpZ2h0Iiwid2lkdGgiLCJtYXAiLCJ2IiwiZGlzcGxheSIsImZsZXgiLCJib3Jk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OiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICAgIGJhY2tncm91bmQtY29sb3I6I2VjZWFlOTtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxlSW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICAgY29sb3I6IzRjNGE0OTtcbiAgICBmb250LWZhbWlseTogJ0dtYXJrZXRTYW5zTWVkaXVtJywgJ+uCmOuIlOqzoOuUlScsIE5hbnVtR290aGljLCAn64+L7JuAJywgRG90dW0sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6MjtcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjNWM1YTU5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB9O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjb2xvcjojNGM0YTQ5O1xuICAgIGZvbnQtZmFtaWx5OiAnR21hcmtldFNhbnNNZWRpdW0nLCAn64KY64iU6rOg65SVJywgTmFudW1Hb3RoaWMsICfrj4vsm4AnLCBEb3R1bSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBsaW5lLWhlaWdodDoyO1xuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICM1YzVhNTk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgIH07XG5gO1xuXG5mdW5jdGlvbiBXb3JrZXIobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy53b3JrVGltZSA9IFtdO1xuXG4gICAgdGhpcy5nZXRTdW0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmtUaW1lLnJlZHVjZSgocmVzdWx0LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZGF0YS5yZWR1Y2UoKF9yZXMsIF9kLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2QgPT09IDAgJiYgZGF0YVtpLTFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZXMtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PT0gZGF0YS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICBfcmVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVzICsgX2Q7XG4gICAgICAgICAgICB9LCAwKS8yO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEVsZW0gPSAoc2hlZXQsIGksIFIpID0+IHtcbiAgICBsZXQgdG1wID0gc2hlZXRbWExTWC51dGlscy5lbmNvZGVfY2VsbCh7YzppLCByOlJ9KV1cbiAgICBsZXQgZWxlbSA9ICdVTktOT1dOJztcbiAgICBpZih0bXAgJiYgdG1wLnQpIGVsZW0gPSBYTFNYLnV0aWxzLmZvcm1hdF9jZWxsKHRtcCk7XG5cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFttYWluRmlsZSwgc2V0TWFpbkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3dvcmtlckxpc3QsIHNldFdvcmtlckxpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Jlc3VsdFBhZ2UsIHNldFJlc3VsdFBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgcGFyc2VGaWxlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICBcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gIHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGUgOiAnYmluYXJ5J30pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTaGVldE5hbWUgPSB3Yi5TaGVldE5hbWVzWzBdO1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSB3Yi5TaGVldHNbZmlyc3RTaGVldE5hbWVdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtYWluU2hlZXQgPSBbXTsgXG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZShzaGVldFsnIXJlZiddKTtcblxuICAgICAgICAgICAgZm9yKGxldCBSPTI7IFI8PXJhbmdlLmUucjsgKytSKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvd0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb3dEYXRhLnB1c2goZ2V0RWxlbShzaGVldCwgMCwgUikpO1xuICAgICAgICAgICAgICAgIHJvd0RhdGEucHVzaChnZXRFbGVtKHNoZWV0LCAxLCBSKSk7XG4gICAgICAgICAgICAgICAgcm93RGF0YS5wdXNoKGdldEVsZW0oc2hlZXQsIDIsIFIpKTtcblxuICAgICAgICAgICAgICAgIG1haW5TaGVldC5wdXNoKHJvd0RhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRNYWluRmlsZShtYWluU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBtYWluRmlsZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZihhWzBdIDwgYlswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihhWzBdID4gYlswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihhWzFdIDwgYlsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFbMV0gPiBiWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtYWluRmlsZSk7XG5cbiAgICAgICAgY29uc3Qgd29ya2VycyA9IFtdOyAvLyBhcnJheSBvZiBXb3JrZXJcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIHdoaWxlKGlkeCA8IG1haW5GaWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1haW5GaWxlW2lkeF1bMF07XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIGNvbnN0IF93b3JrZXIgPSBuZXcgV29ya2VyKG5hbWUpO1xuXG4gICAgICAgICAgICB3aGlsZShpZHggPCBtYWluRmlsZS5sZW5ndGggJiYgbWFpbkZpbGVbaWR4XVswXSA9PT0gbmFtZSkgcm93cy5wdXNoKG1haW5GaWxlW2lkeCsrXSk7XG5cbiAgICAgICAgICAgIGxldCBjdXJEYXkgPSAnJztcbiAgICAgICAgICAgIGxldCBjdXIgPSAtMTtcbiAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZ2luRGF5ID0gcm93WzFdLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF5ID0gcm93WzJdLnNwbGl0KCcgJylbMF07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJEYXkgIT09IGJlZ2luRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF93b3JrZXIud29ya1RpbWVbY3VyKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWUucHVzaChBcnJheSg0OSkuZmlsbCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW5UaW1lID0gcGFyc2VJbnQocm93WzFdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVswXSkgKyAocm93WzFdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVsxXSA9PSAwID8gMCA6IDAuNSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGFyc2VJbnQocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVswXSkgKyAocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVsxXSA9PSAwID8gMCA6IDAuNSk7XG5cbiAgICAgICAgICAgICAgICBpZihiZWdpbkRheSA9PT0gZW5kRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT1iZWdpblRpbWUqMjsgaTw9ZW5kVGltZSoyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihfd29ya2VyLndvcmtUaW1lW2N1cisxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLndvcmtUaW1lLnB1c2goQXJyYXkoNDkpLmZpbGwoMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPWJlZ2luVGltZSoyOyBpPDQ5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8PWVuZFRpbWUqMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLndvcmtUaW1lW2N1cisxXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd29ya2Vycy5wdXNoKF93b3JrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0V29ya2VyTGlzdCh3b3JrZXJzKTtcbiAgICAgICAgc2V0UmVzdWx0UGFnZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuVGVzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cod29ya2VyTGlzdFswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW4gc3R5bGU9e3ttaW5IZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAge3Jlc3VsdFBhZ2UgP1xuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic2MCUnfX0+XG4gICAgICAgICAgICAgICAge3dvcmtlckxpc3QubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkICNiZmJmYmYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOic2MCUnICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB7di5nZXRTdW0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUlucHV0PlxuICAgICAgICAgICAgICAgIO2MjOydvCDsmKzrpqzquLBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gb25DaGFuZ2U9e3BhcnNlRmlsZX0gLz5cbiAgICAgICAgICAgIDwvRmlsZUlucHV0PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtnZXRSZXN1bHR9PlxuICAgICAgICAgICAgICAgIOqysOqzvCDrs7TquLBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
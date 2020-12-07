webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/work-time-calc/pages/index.js\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Main\",\n  componentId: \"cqz4mh-0\"\n})([\"background-color:#eceae9;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label.withConfig({\n  displayName: \"pages__FileInput\",\n  componentId: \"cqz4mh-1\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c2 = FileInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"pages__Button\",\n  componentId: \"cqz4mh-2\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c3 = Button;\n\nfunction Worker(name) {\n  var _this = this;\n\n  this.name = name;\n  this.workTime = [];\n  this.bound = [];\n\n  this.getSum = function () {\n    return _this.workTime.reduce(function (result, data) {\n      return result + data.reduce(function (_res, _d, i) {\n        if (_d === 0 && data[i - 1] === 1) {\n          _res--;\n        } else if (i === data.length - 1 && _d === 1) {\n          _res--;\n        }\n\n        return _res + _d;\n      }, 0) / 2;\n    }, 0);\n  };\n}\n\n_c4 = Worker;\n\nvar getElem = function getElem(sheet, i, R) {\n  var tmp = sheet[XLSX.utils.encode_cell({\n    c: i,\n    r: R\n  })];\n  var elem = 'UNKNOWN';\n  if (tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);\n  return elem;\n};\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mainFile = _useState[0],\n      setMainFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      workerList = _useState2[0],\n      setWorkerList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      resultPage = _useState3[0],\n      setResultPage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      fileUploaded = _useState4[0],\n      setFileUploaded = _useState4[1];\n\n  var parseFile = function parseFile(e) {\n    var reader = new FileReader();\n    console.log('test');\n\n    reader.onload = function () {\n      var fileData = reader.result;\n      var wb = XLSX.read(fileData, {\n        type: 'binary'\n      });\n      var firstSheetName = wb.SheetNames[0];\n      var sheet = wb.Sheets[firstSheetName];\n      var mainSheet = [];\n      var range = XLSX.utils.decode_range(sheet['!ref']);\n\n      for (var R = 2; R <= range.e.r; ++R) {\n        var rowData = [];\n        rowData.push(getElem(sheet, 0, R));\n        rowData.push(getElem(sheet, 1, R));\n        rowData.push(getElem(sheet, 2, R));\n        mainSheet.push(rowData);\n      }\n\n      setMainFile(mainSheet);\n    };\n\n    alert(\"\".concat(e.target.files[0].name, \"\\uC774 \\uC815\\uC0C1\\uC801\\uC73C\\uB85C \\uC5C5\\uB85C\\uB4DC \\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4\"));\n    reader.readAsBinaryString(e.target.files[0]);\n  };\n\n  var getResult = function getResult() {\n    mainFile.sort(function (a, b) {\n      if (a[0] < b[0]) {\n        return -1;\n      } else if (a[0] > b[0]) {\n        return 1;\n      } else {\n        if (a[1] < b[1]) {\n          return -1;\n        } else if (a[1] > b[1]) {\n          return 1;\n        }\n\n        return 0;\n      }\n    });\n    var workers = []; // array of Worker\n\n    var idx = 0;\n\n    var _loop = function _loop() {\n      var name = mainFile[idx][0];\n\n      if (name === 'UNKNOWN') {\n        idx++;\n        return \"continue\";\n      }\n\n      var rows = [];\n\n      var _worker = new Worker(name);\n\n      while (idx < mainFile.length && mainFile[idx][0] === name) {\n        rows.push(mainFile[idx++]);\n      }\n\n      var curDay = '';\n      var cur = -1;\n      rows.forEach(function (row) {\n        var beginDay = row[1].split(' ')[0];\n        var endDay = row[2].split(' ')[0];\n\n        if (curDay !== beginDay) {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          if (-_worker.bound[cur + 1] === undefined) {\n            _worker.bound.push(0);\n          }\n\n          curDay = beginDay;\n          cur++;\n        }\n\n        var beginTime = parseInt(row[1].split(' ')[2].split(':')[0]) + (row[1].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n        var endTime = parseInt(row[2].split(' ')[2].split(':')[0]) + (row[2].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n\n        if (beginDay === endDay) {\n          if (beginTime !== 0 && _worker.workTime[cur][beginTime * 2] === 0 && _worker.workTime[cur][beginTime * 2 - 1] === 1) {\n            _worker.bound[cur]++;\n          }\n\n          if (endTime !== 48 && _worker.workTime[cur][endTime * 2] === 0 && _worker.workTime[cur][endTime * 2 + 1] === 1) {\n            _worker.bound[cur]++;\n          }\n\n          for (var i = beginTime * 2; i <= endTime * 2; i++) {\n            _worker.workTime[cur][i] = 1;\n          }\n        } else {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          if (_worker.bound[cur + 1] === undefined) {\n            _worker.bound.push(0);\n          }\n\n          if (beginTime !== 0 && _worker.workTime[cur][beginTime * 2] === 0 && _worker.workTime[cur][beginTime * 2 - 1] === 1) {\n            _worker.bound[cur]++;\n          }\n\n          if (endTime !== 48 && _worker.workTime[cur + 1][endTime * 2] === 0 && _worker.workTime[cur + 1][endTime * 2 + 1] === 1) {\n            _worker.bound[cur]++;\n          }\n\n          for (var _i = beginTime * 2; _i < 49; _i++) {\n            _worker.workTime[cur][_i] = 1;\n          }\n\n          for (var _i2 = 0; _i2 <= endTime * 2; _i2++) {\n            _worker.workTime[cur + 1][_i2] = 1;\n          }\n        }\n      });\n      workers.push(_worker);\n    };\n\n    while (idx < mainFile.length) {\n      var _ret = _loop();\n\n      if (_ret === \"continue\") continue;\n    }\n\n    setWorkerList(workers);\n    setResultPage(true);\n  };\n\n  var btnTest = function btnTest() {\n    console.log(workerList[0]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      minHeight: winSize[1]\n    },\n    children: resultPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: '400px'\n      },\n      children: workerList.map(function (v, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'flex',\n            border: '1px solid #bfbfbf'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: '60%',\n              border: '1px solid #bfbfbf'\n            },\n            children: v.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 211,\n            columnNumber: 29\n          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              width: '40%',\n              border: '1px solid #bfbfbf'\n            },\n            children: v.getSum()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 217,\n            columnNumber: 29\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 207,\n          columnNumber: 25\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 13\n    }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FileInput, {\n        children: [\"\\uD30C\\uC77C \\uC62C\\uB9AC\\uAE30\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          style: {\n            display: 'none'\n          },\n          onChange: parseFile\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 230,\n          columnNumber: 17\n        }, _this2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 228,\n        columnNumber: 13\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n        onClick: getResult,\n        children: \"\\uACB0\\uACFC \\uBCF4\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 232,\n        columnNumber: 13\n      }, _this2)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 201,\n    columnNumber: 9\n  }, _this2);\n};\n\n_s(Home, \"lOspmBfIDmeQCjIZq9pPgBIKLVo=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"FileInput\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Worker\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkZpbGVJbnB1dCIsImxhYmVsIiwiQnV0dG9uIiwiYnV0dG9uIiwiV29ya2VyIiwibmFtZSIsIndvcmtUaW1lIiwiYm91bmQiLCJnZXRTdW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJkYXRhIiwiX3JlcyIsIl9kIiwiaSIsImxlbmd0aCIsImdldEVsZW0iLCJzaGVldCIsIlIiLCJ0bXAiLCJYTFNYIiwidXRpbHMiLCJlbmNvZGVfY2VsbCIsImMiLCJyIiwiZWxlbSIsInQiLCJmb3JtYXRfY2VsbCIsIkhvbWUiLCJ3aW5TaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwibWFpbkZpbGUiLCJzZXRNYWluRmlsZSIsIndvcmtlckxpc3QiLCJzZXRXb3JrZXJMaXN0IiwicmVzdWx0UGFnZSIsInNldFJlc3VsdFBhZ2UiLCJmaWxlVXBsb2FkZWQiLCJzZXRGaWxlVXBsb2FkZWQiLCJwYXJzZUZpbGUiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJvbmxvYWQiLCJmaWxlRGF0YSIsIndiIiwicmVhZCIsInR5cGUiLCJmaXJzdFNoZWV0TmFtZSIsIlNoZWV0TmFtZXMiLCJTaGVldHMiLCJtYWluU2hlZXQiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInJvd0RhdGEiLCJwdXNoIiwiYWxlcnQiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0JpbmFyeVN0cmluZyIsImdldFJlc3VsdCIsInNvcnQiLCJhIiwiYiIsIndvcmtlcnMiLCJpZHgiLCJyb3dzIiwiX3dvcmtlciIsImN1ckRheSIsImN1ciIsImZvckVhY2giLCJyb3ciLCJiZWdpbkRheSIsInNwbGl0IiwiZW5kRGF5IiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmaWxsIiwiYmVnaW5UaW1lIiwicGFyc2VJbnQiLCJlbmRUaW1lIiwiYnRuVGVzdCIsIm1p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QURBO0FBRVJDLGtCQUFNLEVBQUM7QUFGQyxXQUFaO0FBQUEsa0NBSUk7QUFBSyxpQkFBSyxFQUFFO0FBQ1JKLG1CQUFLLEVBQUMsS0FERTtBQUVSSSxvQkFBTSxFQUFDO0FBRkMsYUFBWjtBQUFBLHNCQUlLRixDQUFDLENBQUNuRjtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFVSTtBQUFLLGlCQUFLLEVBQUU7QUFDUmlGLG1CQUFLLEVBQUMsS0FERTtBQUVSSSxvQkFBTSxFQUFDO0FBRkMsYUFBWjtBQUFBLHNCQUlLRixDQUFDLENBQUNoRixNQUFGO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFtQkgsT0FwQkE7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFcsZ0JBeUJYO0FBQUEsOEJBQ0EscUVBQUMsU0FBRDtBQUFBLG1FQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFO0FBQUNpRixtQkFBTyxFQUFDO0FBQVQsV0FBMUI7QUFBNEMsa0JBQVEsRUFBRWpEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBS0EscUVBQUMsTUFBRDtBQUFRLGVBQU8sRUFBRXVCLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxBO0FBQUE7QUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBc0NILENBMUtEOztHQUFNbkMsSTtVQUNjRSw0RDs7O01BRGRGLEk7QUE0S1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWNlYWU5O1xuXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbmA7XG5cbmNvbnN0IEZpbGVJbnB1dCA9IHN0eWxlZC5sYWJlbGBcbiAgICBjb2xvcjojNGM0YTQ5O1xuICAgIGZvbnQtZmFtaWx5OiAnR21hcmtldFNhbnNNZWRpdW0nLCAn64KY64iU6rOg65SVJywgTmFudW1Hb3RoaWMsICfrj4vsm4AnLCBEb3R1bSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBsaW5lLWhlaWdodDoyO1xuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4ICM1YzVhNTk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgIH07XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGNvbG9yOiM0YzRhNDk7XG4gICAgZm9udC1mYW1pbHk6ICdHbWFya2V0U2Fuc01lZGl1bScsICfrgpjriJTqs6DrlJUnLCBOYW51bUdvdGhpYywgJ+uPi+ybgCcsIERvdHVtLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OjI7XG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggIzVjNWE1OTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gICAgfTtcbmA7XG5cbmZ1bmN0aW9uIFdvcmtlcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLndvcmtUaW1lID0gW107XG4gICAgdGhpcy5ib3VuZCA9IFtdO1xuXG4gICAgdGhpcy5nZXRTdW0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmtUaW1lLnJlZHVjZSgocmVzdWx0LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZGF0YS5yZWR1Y2UoKF9yZXMsIF9kLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoX2QgPT09IDAgJiYgZGF0YVtpLTFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZXMtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PT0gZGF0YS5sZW5ndGgtMSAmJiBfZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBfcmVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVzICsgX2Q7XG4gICAgICAgICAgICB9LCAwKS8yO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEVsZW0gPSAoc2hlZXQsIGksIFIpID0+IHtcbiAgICBsZXQgdG1wID0gc2hlZXRbWExTWC51dGlscy5lbmNvZGVfY2VsbCh7YzppLCByOlJ9KV1cbiAgICBsZXQgZWxlbSA9ICdVTktOT1dOJztcbiAgICBpZih0bXAgJiYgdG1wLnQpIGVsZW0gPSBYTFNYLnV0aWxzLmZvcm1hdF9jZWxsKHRtcCk7XG5cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFttYWluRmlsZSwgc2V0TWFpbkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3dvcmtlckxpc3QsIHNldFdvcmtlckxpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Jlc3VsdFBhZ2UsIHNldFJlc3VsdFBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmaWxlVXBsb2FkZWQsIHNldEZpbGVVcGxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBwYXJzZUZpbGUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIFxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZURhdGEgPSAgcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7dHlwZSA6ICdiaW5hcnknfSk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFNoZWV0TmFtZSA9IHdiLlNoZWV0TmFtZXNbMF07XG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IHdiLlNoZWV0c1tmaXJzdFNoZWV0TmFtZV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1haW5TaGVldCA9IFtdOyBcbiAgICAgICAgICAgIGxldCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHNoZWV0WychcmVmJ10pO1xuXG4gICAgICAgICAgICBmb3IobGV0IFI9MjsgUjw9cmFuZ2UuZS5yOyArK1IpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm93RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJvd0RhdGEucHVzaChnZXRFbGVtKHNoZWV0LCAwLCBSKSk7XG4gICAgICAgICAgICAgICAgcm93RGF0YS5wdXNoKGdldEVsZW0oc2hlZXQsIDEsIFIpKTtcbiAgICAgICAgICAgICAgICByb3dEYXRhLnB1c2goZ2V0RWxlbShzaGVldCwgMiwgUikpO1xuXG4gICAgICAgICAgICAgICAgbWFpblNoZWV0LnB1c2gocm93RGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldE1haW5GaWxlKG1haW5TaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFsZXJ0KGAke2UudGFyZ2V0LmZpbGVzWzBdLm5hbWV97J20IOygleyDgeyggeycvOuhnCDsl4XroZzrk5wg65CY7JeI7Iq164uI64ukYCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRSZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIG1haW5GaWxlLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmKGFbMF0gPCBiWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGFbMF0gPiBiWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGFbMV0gPCBiWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYVsxXSA+IGJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlcnMgPSBbXTsgLy8gYXJyYXkgb2YgV29ya2VyXG4gICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICB3aGlsZShpZHggPCBtYWluRmlsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYWluRmlsZVtpZHhdWzBdO1xuICAgICAgICAgICAgaWYobmFtZSA9PT0gJ1VOS05PV04nKSB7XG4gICAgICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbXVxuICAgICAgICAgICAgY29uc3QgX3dvcmtlciA9IG5ldyBXb3JrZXIobmFtZSk7XG5cbiAgICAgICAgICAgIHdoaWxlKGlkeCA8IG1haW5GaWxlLmxlbmd0aCAmJiBtYWluRmlsZVtpZHhdWzBdID09PSBuYW1lKSByb3dzLnB1c2gobWFpbkZpbGVbaWR4KytdKTtcblxuICAgICAgICAgICAgbGV0IGN1ckRheSA9ICcnO1xuICAgICAgICAgICAgbGV0IGN1ciA9IC0xO1xuICAgICAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW5EYXkgPSByb3dbMV0uc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXkgPSByb3dbMl0uc3BsaXQoJyAnKVswXTtcblxuICAgICAgICAgICAgICAgIGlmKGN1ckRheSAhPT0gYmVnaW5EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoX3dvcmtlci53b3JrVGltZVtjdXIrMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci53b3JrVGltZS5wdXNoKEFycmF5KDQ5KS5maWxsKDApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZigtX3dvcmtlci5ib3VuZFtjdXIrMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci5ib3VuZC5wdXNoKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckRheSA9IGJlZ2luRGF5O1xuICAgICAgICAgICAgICAgICAgICBjdXIrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiZWdpblRpbWUgPSBwYXJzZUludChyb3dbMV0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzBdKSArIChyb3dbMV0uc3BsaXQoJyAnKVsyXS5zcGxpdCgnOicpWzFdID09IDAgPyAwIDogMC41KTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGFyc2VJbnQocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVswXSkgKyAocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVsxXSA9PSAwID8gMCA6IDAuNSk7XG5cbiAgICAgICAgICAgICAgICBpZihiZWdpbkRheSA9PT0gZW5kRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJlZ2luVGltZSAhPT0gMCAmJiBfd29ya2VyLndvcmtUaW1lW2N1cl1bYmVnaW5UaW1lKjJdID09PSAwICYmIF93b3JrZXIud29ya1RpbWVbY3VyXVtiZWdpblRpbWUqMiAtIDFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLmJvdW5kW2N1cl0rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihlbmRUaW1lICE9PSA0OCAmJiBfd29ya2VyLndvcmtUaW1lW2N1cl1bZW5kVGltZSoyXSA9PT0gMCAmJiBfd29ya2VyLndvcmtUaW1lW2N1cl1bZW5kVGltZSoyICsgMV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIuYm91bmRbY3VyXSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT1iZWdpblRpbWUqMjsgaTw9ZW5kVGltZSoyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihfd29ya2VyLndvcmtUaW1lW2N1cisxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLndvcmtUaW1lLnB1c2goQXJyYXkoNDkpLmZpbGwoMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKF93b3JrZXIuYm91bmRbY3VyKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIuYm91bmQucHVzaCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGJlZ2luVGltZSAhPT0gMCAmJiBfd29ya2VyLndvcmtUaW1lW2N1cl1bYmVnaW5UaW1lKjJdID09PSAwICYmIF93b3JrZXIud29ya1RpbWVbY3VyXVtiZWdpblRpbWUqMiAtIDFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLmJvdW5kW2N1cl0rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihlbmRUaW1lICE9PSA0OCAmJiBfd29ya2VyLndvcmtUaW1lW2N1cisxXVtlbmRUaW1lKjJdID09PSAwICYmIF93b3JrZXIud29ya1RpbWVbY3VyKzFdW2VuZFRpbWUqMiArIDFdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLmJvdW5kW2N1cl0rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9YmVnaW5UaW1lKjI7IGk8NDk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dvcmtlci53b3JrVGltZVtjdXJdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTw9ZW5kVGltZSoyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyKzFdW2ldID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3b3JrZXJzLnB1c2goX3dvcmtlcik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRXb3JrZXJMaXN0KHdvcmtlcnMpO1xuICAgICAgICBzZXRSZXN1bHRQYWdlKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBidG5UZXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh3b3JrZXJMaXN0WzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbiBzdHlsZT17e21pbkhlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICB7cmVzdWx0UGFnZSA/XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzQwMHB4J319PlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2J0blRlc3R9PnRlc3Q8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAge3dvcmtlckxpc3QubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOicxcHggc29saWQgI2JmYmZiZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzYwJScsICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOicxcHggc29saWQgI2JmYmZiZidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOic0MCUnLCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkICNiZmJmYmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5nZXRTdW0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUlucHV0PlxuICAgICAgICAgICAgICAgIO2MjOydvCDsmKzrpqzquLBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gb25DaGFuZ2U9e3BhcnNlRmlsZX0gLz5cbiAgICAgICAgICAgIDwvRmlsZUlucHV0PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtnZXRSZXN1bHR9PlxuICAgICAgICAgICAgICAgIOqysOqzvCDrs7TquLBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
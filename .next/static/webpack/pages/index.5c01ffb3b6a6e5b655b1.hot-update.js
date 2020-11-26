webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/work-time-calc/pages/index.js\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"pages__Main\",\n  componentId: \"cqz4mh-0\"\n})([\"background-color:#eceae9;display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar FileInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label.withConfig({\n  displayName: \"pages__FileInput\",\n  componentId: \"cqz4mh-1\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c2 = FileInput;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"pages__Button\",\n  componentId: \"cqz4mh-2\"\n})([\"color:#4c4a49;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:3.5rem;line-height:2;text-shadow:1px 1px 1px #5c5a59;&:hover{transform:scale(1.1);transition:all 0.1s ease;};\"]);\n_c3 = Button;\n\nfunction Worker(name) {\n  var _this = this;\n\n  this.name = name;\n  this.workTime = [];\n\n  this.getSum = function () {\n    return _this.workTime.reduce(function (result, data) {\n      return result + data.reduce(function (_res, _d, i) {\n        if (_d === 0 && data[i - 1] === 1) {\n          _res--;\n        } else if (i === data.length - 1) {\n          _res--;\n        }\n\n        return _res + _d;\n      }, 0) / 2;\n    }, 0);\n  };\n}\n\n_c4 = Worker;\n\nvar getElem = function getElem(sheet, i, R) {\n  var tmp = sheet[XLSX.utils.encode_cell({\n    c: i,\n    r: R\n  })];\n  var elem = 'UNKNOWN';\n  if (tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);\n  return elem;\n};\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      mainFile = _useState[0],\n      setMainFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      workerList = _useState2[0],\n      setWorkerList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      resultPage = _useState3[0],\n      setResultPage = _useState3[1];\n\n  var parseFile = function parseFile(e) {\n    var reader = new FileReader();\n    console.log('test');\n\n    reader.onload = function () {\n      var fileData = reader.result;\n      var wb = XLSX.read(fileData, {\n        type: 'binary'\n      });\n      var firstSheetName = wb.SheetNames[0];\n      var sheet = wb.Sheets[firstSheetName];\n      var mainSheet = [];\n      var range = XLSX.utils.decode_range(sheet['!ref']);\n\n      for (var R = 2; R <= range.e.r; ++R) {\n        var rowData = [];\n        rowData.push(getElem(sheet, 0, R));\n        rowData.push(getElem(sheet, 1, R));\n        rowData.push(getElem(sheet, 2, R));\n        mainSheet.push(rowData);\n      }\n\n      setMainFile(mainSheet);\n    };\n\n    reader.readAsBinaryString(e.target.files[0]);\n  };\n\n  var getResult = function getResult() {\n    mainFile.sort(function (a, b) {\n      if (a[0] < b[0]) {\n        return -1;\n      } else if (a[0] > b[0]) {\n        return 1;\n      } else {\n        if (a[1] < b[1]) {\n          return -1;\n        } else if (a[1] > b[1]) {\n          return 1;\n        }\n\n        return 0;\n      }\n    });\n    console.log(mainFile);\n    var workers = []; // array of Worker\n\n    var idx = 0;\n\n    var _loop = function _loop() {\n      var name = mainFile[idx];\n      var rows = [];\n\n      var _worker = new Worker(name);\n\n      while (mainFile[idx] === name) {\n        rows.push(mainFile[idx++]);\n      }\n\n      var curDay = '';\n      var cur = -1;\n      rows.forEach(function (row) {\n        var beginDay = row[1].split(' ')[0];\n        var endDay = row[2].split(' ')[0];\n\n        if (curDay !== beginDay) {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          cur++;\n        }\n\n        var beginTime = parseInt(row[1].split(' ')[2].split(':')[0]) + (row[1].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n        var endTime = parseInt(row[2].split(' ')[2].split(':')[0]) + (row[2].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);\n\n        if (beginDay === endDay) {\n          for (var i = beginTime * 2; i <= endTime * 2; i++) {\n            _worker.workTime[cur][i] = 1;\n          }\n        } else {\n          if (_worker.workTime[cur + 1] === undefined) {\n            _worker.workTime.push(Array(49).fill(0));\n          }\n\n          for (var _i = beginTime * 2; _i < 49; _i++) {\n            _worker.workTime[cur][_i] = 1;\n          }\n\n          for (var _i2 = 0; _i2 <= endTime * 2; _i2++) {\n            _worker.workTime[cur + 1][_i2] = 1;\n          }\n        }\n      });\n      workers.push(_worker);\n    };\n\n    while (idx < mainFile.length) {\n      _loop();\n    }\n\n    setWorkerList(workers);\n    setResultPage(true);\n  };\n\n  var btnTest = function btnTest() {\n    console.log(workerList[0]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      height: winSize[1]\n    },\n    children: resultPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: '60%'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: btnTest,\n        children: \"test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 17\n      }, _this2), workerList.map(function (v, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [v.name, \" | \", v.getSum()]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 25\n        }, _this2);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FileInput, {\n        children: [\"\\uD30C\\uC77C \\uC62C\\uB9AC\\uAE30\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          style: {\n            display: 'none'\n          },\n          onChange: parseFile\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 17\n        }, _this2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 13\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n        onClick: getResult,\n        children: \"\\uACB0\\uACFC \\uBCF4\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 13\n      }, _this2)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 9\n  }, _this2);\n};\n\n_s(Home, \"D4D9AJWPIOUCn1FP8h4DQ5/cTJY=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"FileInput\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Worker\");\n$RefreshReg$(_c5, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkZpbGVJbnB1dCIsImxhYmVsIiwiQnV0dG9uIiwiYnV0dG9uIiwiV29ya2VyIiwibmFtZSIsIndvcmtUaW1lIiwiZ2V0U3VtIiwicmVkdWNlIiwicmVzdWx0IiwiZGF0YSIsIl9yZXMiLCJfZCIsImkiLCJsZW5ndGgiLCJnZXRFbGVtIiwic2hlZXQiLCJSIiwidG1wIiwiWExTWCIsInV0aWxzIiwiZW5jb2RlX2NlbGwiLCJjIiwiciIsImVsZW0iLCJ0IiwiZm9ybWF0X2NlbGwiLCJIb21lIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIm1haW5GaWxlIiwic2V0TWFpbkZpbGUiLCJ3b3JrZXJMaXN0Iiwic2V0V29ya2VyTGlzdCIsInJlc3VsdFBhZ2UiLCJzZXRSZXN1bHRQYWdlIiwicGFyc2VGaWxlIiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwib25sb2FkIiwiZmlsZURhdGEiLCJ3YiIsInJlYWQiLCJ0eXBlIiwiZmlyc3RTaGVldE5hbWUiLCJTaGVldE5hbWVzIiwiU2hlZXRzIiwibWFpblNoZWV0IiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJyb3dEYXRhIiwicHVzaCIsInJlYWRBc0JpbmFyeVN0cmluZyIsInRhcmdldCIsImZpbGVzIiwiZ2V0UmVzdWx0Iiwic29ydCIsImEiLCJiIiwid29ya2VycyIsImlkeCIsInJvd3MiLCJfd29ya2VyIiwiY3VyRGF5IiwiY3VyIiwiZm9yRWFjaCIsInJvdyIsImJlZ2luRGF5Iiwic3BsaXQiLCJlbmREYXkiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZpbGwiLCJiZWdpblRpbWUiLCJwYXJzZUludCIsImVuZFRpbWUiLCJidG5UZXN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXAiLCJ2IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7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RTtBQUFDZ0QsWUFBTSxFQUFDckQsT0FBTyxDQUFDLENBQUQ7QUFBZixLQUFiO0FBQUEsY0FDS08sVUFBVSxnQkFDWDtBQUFLLFdBQUssRUFBRTtBQUFDK0MsYUFBSyxFQUFDO0FBQVAsT0FBWjtBQUFBLDhCQUNJO0FBQVEsZUFBTyxFQUFFRixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLL0MsVUFBVSxDQUFDa0QsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBSXZFLENBQUosRUFBVTtBQUN0Qiw0QkFDSTtBQUFBLHFCQUNLdUUsQ0FBQyxDQUFDL0UsSUFEUCxTQUNnQitFLENBQUMsQ0FBQzdFLE1BQUYsRUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBS0gsT0FOQSxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGdCQVdYO0FBQUEsOEJBQ0EscUVBQUMsU0FBRDtBQUFBLG1FQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFO0FBQUM4RSxtQkFBTyxFQUFDO0FBQVQsV0FBMUI7QUFBNEMsa0JBQVEsRUFBRWhEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBS0EscUVBQUMsTUFBRDtBQUFRLGVBQU8sRUFBRXNCLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxBO0FBQUE7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF3QkgsQ0FySUQ7O0dBQU1oQyxJO1VBQ2NFLDREOzs7TUFEZEYsSTtBQXVJU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VhZTk7XG5cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuYDtcblxuY29uc3QgRmlsZUlucHV0ID0gc3R5bGVkLmxhYmVsYFxuICAgIGNvbG9yOiM0YzRhNDk7XG4gICAgZm9udC1mYW1pbHk6ICdHbWFya2V0U2Fuc01lZGl1bScsICfrgpjriJTqs6DrlJUnLCBOYW51bUdvdGhpYywgJ+uPi+ybgCcsIERvdHVtLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OjI7XG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCAxcHggIzVjNWE1OTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gICAgfTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgY29sb3I6IzRjNGE0OTtcbiAgICBmb250LWZhbWlseTogJ0dtYXJrZXRTYW5zTWVkaXVtJywgJ+uCmOuIlOqzoOuUlScsIE5hbnVtR290aGljLCAn64+L7JuAJywgRG90dW0sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6MjtcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjNWM1YTU5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB9O1xuYDtcblxuZnVuY3Rpb24gV29ya2VyKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMud29ya1RpbWUgPSBbXTtcblxuICAgIHRoaXMuZ2V0U3VtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53b3JrVGltZS5yZWR1Y2UoKHJlc3VsdCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIGRhdGEucmVkdWNlKChfcmVzLCBfZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKF9kID09PSAwICYmIGRhdGFbaS0xXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBfcmVzLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgPT09IGRhdGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Jlcy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlcyArIF9kO1xuICAgICAgICAgICAgfSwgMCkvMjtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxufVxuXG5jb25zdCBnZXRFbGVtID0gKHNoZWV0LCBpLCBSKSA9PiB7XG4gICAgbGV0IHRtcCA9IHNoZWV0W1hMU1gudXRpbHMuZW5jb2RlX2NlbGwoe2M6aSwgcjpSfSldXG4gICAgbGV0IGVsZW0gPSAnVU5LTk9XTic7XG4gICAgaWYodG1wICYmIHRtcC50KSBlbGVtID0gWExTWC51dGlscy5mb3JtYXRfY2VsbCh0bXApO1xuXG4gICAgcmV0dXJuIGVsZW07XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbbWFpbkZpbGUsIHNldE1haW5GaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt3b3JrZXJMaXN0LCBzZXRXb3JrZXJMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtyZXN1bHRQYWdlLCBzZXRSZXN1bHRQYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHBhcnNlRmlsZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlRGF0YSA9ICByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgY29uc3Qgd2IgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHt0eXBlIDogJ2JpbmFyeSd9KTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2hlZXROYW1lID0gd2IuU2hlZXROYW1lc1swXTtcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gd2IuU2hlZXRzW2ZpcnN0U2hlZXROYW1lXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWFpblNoZWV0ID0gW107IFxuICAgICAgICAgICAgbGV0IHJhbmdlID0gWExTWC51dGlscy5kZWNvZGVfcmFuZ2Uoc2hlZXRbJyFyZWYnXSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgUj0yOyBSPD1yYW5nZS5lLnI7ICsrUikge1xuICAgICAgICAgICAgICAgIGxldCByb3dEYXRhID0gW107XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm93RGF0YS5wdXNoKGdldEVsZW0oc2hlZXQsIDAsIFIpKTtcbiAgICAgICAgICAgICAgICByb3dEYXRhLnB1c2goZ2V0RWxlbShzaGVldCwgMSwgUikpO1xuICAgICAgICAgICAgICAgIHJvd0RhdGEucHVzaChnZXRFbGVtKHNoZWV0LCAyLCBSKSk7XG5cbiAgICAgICAgICAgICAgICBtYWluU2hlZXQucHVzaChyb3dEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0TWFpbkZpbGUobWFpblNoZWV0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgbWFpbkZpbGUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYoYVswXSA8IGJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYVswXSA+IGJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoYVsxXSA8IGJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhWzFdID4gYlsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobWFpbkZpbGUpO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlcnMgPSBbXTsgLy8gYXJyYXkgb2YgV29ya2VyXG4gICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICB3aGlsZShpZHggPCBtYWluRmlsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYWluRmlsZVtpZHhdO1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IFtdXG4gICAgICAgICAgICBjb25zdCBfd29ya2VyID0gbmV3IFdvcmtlcihuYW1lKTtcblxuICAgICAgICAgICAgd2hpbGUobWFpbkZpbGVbaWR4XSA9PT0gbmFtZSkgcm93cy5wdXNoKG1haW5GaWxlW2lkeCsrXSk7XG5cbiAgICAgICAgICAgIGxldCBjdXJEYXkgPSAnJztcbiAgICAgICAgICAgIGxldCBjdXIgPSAtMTtcbiAgICAgICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZ2luRGF5ID0gcm93WzFdLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF5ID0gcm93WzJdLnNwbGl0KCcgJylbMF07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJEYXkgIT09IGJlZ2luRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF93b3JrZXIud29ya1RpbWVbY3VyKzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWUucHVzaChBcnJheSg0OSkuZmlsbCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW5UaW1lID0gcGFyc2VJbnQocm93WzFdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVswXSkgKyAocm93WzFdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVsxXSA9PSAwID8gMCA6IDAuNSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGFyc2VJbnQocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVswXSkgKyAocm93WzJdLnNwbGl0KCcgJylbMl0uc3BsaXQoJzonKVsxXSA9PSAwID8gMCA6IDAuNSk7XG5cbiAgICAgICAgICAgICAgICBpZihiZWdpbkRheSA9PT0gZW5kRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT1iZWdpblRpbWUqMjsgaTw9ZW5kVGltZSoyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihfd29ya2VyLndvcmtUaW1lW2N1cisxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLndvcmtUaW1lLnB1c2goQXJyYXkoNDkpLmZpbGwoMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPWJlZ2luVGltZSoyOyBpPDQ5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93b3JrZXIud29ya1RpbWVbY3VyXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8PWVuZFRpbWUqMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd29ya2VyLndvcmtUaW1lW2N1cisxXVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd29ya2Vycy5wdXNoKF93b3JrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0V29ya2VyTGlzdCh3b3JrZXJzKTtcbiAgICAgICAgc2V0UmVzdWx0UGFnZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuVGVzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cod29ya2VyTGlzdFswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW4gc3R5bGU9e3toZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAge3Jlc3VsdFBhZ2UgP1xuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic2MCUnfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidG5UZXN0fT50ZXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAge3dvcmtlckxpc3QubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9IHwge3YuZ2V0U3VtKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVJbnB1dD5cbiAgICAgICAgICAgICAgICDtjIzsnbwg7Jis66as6riwXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IG9uQ2hhbmdlPXtwYXJzZUZpbGV9IC8+XG4gICAgICAgICAgICA8L0ZpbGVJbnB1dD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z2V0UmVzdWx0fT5cbiAgICAgICAgICAgICAgICDqsrDqs7wg67O06riwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgPC9NYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
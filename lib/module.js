"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _BTTVProvider = _interopRequireDefault(require("./providers/BTTVProvider"));

var _FFZProvider = _interopRequireDefault(require("./providers/FFZProvider"));

var _STVProvider = _interopRequireDefault(require("./providers/STVProvider"));

var TwitchFetcher = /*#__PURE__*/function () {
  function TwitchFetcher() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, TwitchFetcher);
    this.bttvProvider = new _BTTVProvider["default"]();
    this.ffzProvider = new _FFZProvider["default"]();
    this.stvProvider = new _STVProvider["default"]();
  }

  (0, _createClass2["default"])(TwitchFetcher, [{
    key: "getEmotesByID",
    value: function () {
      var _getEmotesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var config,
            result,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                  twitch: true
                };

                if (!(id == null)) {
                  _context.next = 3;
                  break;
                }

                throw new Error("You must specify an ID.");

              case 3:
                result = [];

                if (!config.ffz) {
                  _context.next = 13;
                  break;
                }

                _context.t0 = [];
                _context.t1 = (0, _toConsumableArray2["default"])(result);
                _context.t2 = _toConsumableArray2["default"];
                _context.next = 10;
                return this.ffzProvider.getEmotesByID(id);

              case 10:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);
                result = _context.t0.concat.call(_context.t0, _context.t1, _context.t4);

              case 13:
                if (!config.bttv) {
                  _context.next = 22;
                  break;
                }

                _context.t5 = [];
                _context.t6 = (0, _toConsumableArray2["default"])(result);
                _context.t7 = _toConsumableArray2["default"];
                _context.next = 19;
                return this.bttvProvider.getEmotesByID(id);

              case 19:
                _context.t8 = _context.sent;
                _context.t9 = (0, _context.t7)(_context.t8);
                result = _context.t5.concat.call(_context.t5, _context.t6, _context.t9);

              case 22:
                if (!config["7tv"]) {
                  _context.next = 31;
                  break;
                }

                _context.t10 = [];
                _context.t11 = (0, _toConsumableArray2["default"])(result);
                _context.t12 = _toConsumableArray2["default"];
                _context.next = 28;
                return this.stvProvider.getEmotesByID(id);

              case 28:
                _context.t13 = _context.sent;
                _context.t14 = (0, _context.t12)(_context.t13);
                result = _context.t10.concat.call(_context.t10, _context.t11, _context.t14);

              case 31:
                return _context.abrupt("return", result);

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEmotesByID(_x) {
        return _getEmotesByID.apply(this, arguments);
      }

      return getEmotesByID;
    }()
  }]);
  return TwitchFetcher;
}();

var _default = TwitchFetcher;
exports["default"] = _default;
//# sourceMappingURL=module.js.map
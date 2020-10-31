"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearList = exports.addToList = void 0;

var _types = require("../actions/types");

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addToList = function addToList(user) {
  var userList = _store["default"].getState().form.userList;

  var alreadyExists = false;
  userList.forEach(function (el) {
    if (el.email === user.email) {
      alreadyExists = true;
      alert("This email is already taken, please change");
    }
  });

  if (!alreadyExists) {
    userList.push(_objectSpread({}, user));
    localStorage.setItem("userList", JSON.stringify(userList));
  }

  return {
    type: _types.ADD_TO_LIST,
    payload: {
      userList: userList
    }
  };
};

exports.addToList = addToList;

var clearList = function clearList() {
  var userList = [];
  localStorage.setItem("userList", JSON.stringify(userList));
  return {
    type: _types.CLEAR_LIST,
    payload: {
      userList: userList
    }
  };
};

exports.clearList = clearList;
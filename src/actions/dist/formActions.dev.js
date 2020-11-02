"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearList = exports.addToList = void 0;

var _types = require("../actions/types");

var addToList = function addToList(user) {
  return {
    type: _types.ADD_TO_LIST,
    payload: {
      user: user
    }
  };
};

exports.addToList = addToList;

var clearList = function clearList() {
  var newList = [];
  return {
    type: _types.CLEAR_LIST,
    payload: {
      newList: newList
    }
  };
};

exports.clearList = clearList;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formReducers = void 0;

var _types = require("../actions/types");

var formReducers = function formReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userList: JSON.parse(localStorage.getItem("userList") || "[]")
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.ADD_TO_LIST:
      return {
        userList: action.payload.userList
      };

    case _types.CLEAR_LIST:
      return {
        userList: action.payload.userList
      };

    default:
      return state;
  }
};

exports.formReducers = formReducers;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formReducers = void 0;

var _types = require("../actions/types");

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formReducers = function formReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userList: JSON.parse(localStorage.getItem("userList") || "[]")
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer["default"])(state, function (draft) {
    switch (action.type) {
      case _types.ADD_TO_LIST:
        {
          var user = action.payload.user;
          var alreadyExists = false;
          draft.userList.forEach(function (el) {
            if (el.email === user.email) {
              alreadyExists = true;
              alert("This email is already taken, please change");
            }
          });

          if (!alreadyExists) {
            draft.userList.push(user);
            localStorage.setItem("userList", JSON.stringify(draft.userList));
          }

          return draft;
        }

      case _types.CLEAR_LIST:
        {
          var newList = action.payload.newList;
          draft.userList = newList;
          return draft;
        }

      default:
        return draft;
    }
  });
};

exports.formReducers = formReducers;
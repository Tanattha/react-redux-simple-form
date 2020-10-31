'use strict';

exports.__esModule = true;
exports.default = hasLengthLessThan;

var _createValidator = require('../createValidator');

var _createValidator2 = _interopRequireDefault(_createValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasLengthLessThan(max) {
  return (0, _createValidator2.default)(function (message) {
    return function (value) {
      if (value && value.length >= max) {
        return message;
      }
    };
  }, function (field) {
    return field + ' cannot be longer than ' + max + ' characters';
  });
}
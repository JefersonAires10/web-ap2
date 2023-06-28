"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _users = _interopRequireDefault(require("../services/users.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var express = require('express');
var router = _express["default"].Router();
/* GET users listing. */
router.post('/auth', function (req, res, next) {
  _users["default"].authentication(req, res);
});
router.post('/register', function (req, res, next) {
  _users["default"].register(req, res);
});
var _default = router; //module.exports = router;
exports["default"] = _default;
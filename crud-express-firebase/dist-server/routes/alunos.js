"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _aluno = _interopRequireDefault(require("../services/aluno.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var express = require('express');
var router = _express["default"].Router();
/* GET users listing. */
router.get('/listar', function (req, res, next) {
  _aluno["default"].list(req, res);
});
router.post('/cadastrar', function (req, res, next) {
  _aluno["default"].register(req, res);
});
router.get('/recuperar/:id', function (req, res, next) {
  _aluno["default"].retrieve(req, res);
});
router.put('/atualizar/:id', function (req, res, next) {
  _aluno["default"].update(req, res);
});
router["delete"]('/remover/:id', function (req, res, next) {
  _aluno["default"]["delete"](req, res);
});
router.get('/listarAprovados', function (req, res, next) {
  _aluno["default"].list(req, res);
});
var _default = router; //module.exports = router;
exports["default"] = _default;
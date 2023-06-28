"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firebase = _interopRequireDefault(require("../db/firebase.connection"));
var _firestore = require("firebase/firestore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AlunosServices = /*#__PURE__*/function () {
  function AlunosServices() {
    _classCallCheck(this, AlunosServices);
  }
  _createClass(AlunosServices, null, [{
    key: "list",
    value: function list(request, response) {
      var q = (0, _firestore.query)((0, _firestore.collection)(_firebase["default"], "alunos"));
      (0, _firestore.getDocs)(q).then(function (querySnapshot) {
        var alunos = [];
        querySnapshot.forEach(function (aluno) {
          var _id = aluno.id;
          var _aluno$data = aluno.data(),
            nome = _aluno$data.nome,
            curso = _aluno$data.curso,
            ira = _aluno$data.ira;
          alunos.push({
            _id: _id,
            nome: nome,
            curso: curso,
            ira: ira
          });
        });
        response.json(alunos);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "register",
    value: function register(request, response) {
      (0, _firestore.addDoc)((0, _firestore.collection)(_firebase["default"], "alunos"), request.body).then(function (aluno) {
        response.json({
          _id: aluno.id
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "retrieve",
    value: function retrieve(request, response) {
      var docRef = (0, _firestore.doc)(_firebase["default"], "alunos", request.params.id);
      (0, _firestore.getDoc)(docRef).then(function (aluno) {
        var res = {
          _id: aluno.id,
          nome: aluno.data().nome,
          curso: aluno.data().curso,
          matricula: aluno.data().matricula,
          ai: aluno.data().ai
        };
        response.json(res);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "update",
    value: function update(request, response) {
      var docRef = (0, _firestore.doc)(_firebase["default"], "alunos", request.params.id);
      (0, _firestore.updateDoc)(docRef, request.body).then(function () {
        //atualizou
        response.json({
          _id: request.params.id
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "delete",
    value: function _delete(request, response) {
      var docRef = (0, _firestore.doc)(_firebase["default"], "alunos", request.params.id);
      (0, _firestore.deleteDoc)(docRef).then(function () {
        //deletou
        response.json({
          _id: request.params.id
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);
  return AlunosServices;
}();
var _default = AlunosServices;
exports["default"] = _default;
import express from "express"
//var express = require('express');
var router = express.Router();
import AlunosServices from "../services/aluno.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
  AlunosServices.list(req,res)
});

router.post('/cadastrar', function(req, res, next) {
  AlunosServices.register(req,res)
});

router.get('/recuperar/:id', function(req, res, next) {
  AlunosServices.retrieve(req,res)
});

router.put('/atualizar/:id', function(req, res, next) {
  AlunosServices.update(req,res)
});

router.delete('/remover/:id', function(req, res, next) {
  AlunosServices.delete(req,res)
});

router.get('/listarAprovados', function(req, res, next) {
    AlunosServices.list(req,res)
});

export default router
//module.exports = router;
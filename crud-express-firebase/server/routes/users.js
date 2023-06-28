import express from "express"
//var express = require('express');
var router = express.Router();
import UsersService from "../services/users.services";

/* GET users listing. */
router.post('/auth', function(req, res, next) {
  UsersService.authentication(req,res)
});

router.post('/register', function(req, res, next) {
  UsersService.register(req,res)
});

export default router
//module.exports = router;
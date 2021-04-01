"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;

//MVC MVP MTV 설계 패턴들
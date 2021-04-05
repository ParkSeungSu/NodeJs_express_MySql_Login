"use strict";

//module
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const morgan = require('morgan');


// 협업시에는 운영체제마다 환경 변수를 적용하는 방법이 다름
const app = express();
dotenv.config();

// const accessLogStream = require('./src/config/log');

//routing
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(morgan('dev',{ stream: accessLogStream }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;



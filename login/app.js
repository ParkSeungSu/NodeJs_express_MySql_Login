"use strict";

//module
const express = require('express');
const app = express();

const PORT = 3000;
//routing
const home = require("./routes/home");

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/",home); // use -> 미들 웨어를 등록해주는 메서드

app.listen(PORT, function () {
    console.log("서버 가동");
});

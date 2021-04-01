"use strict";

const User = require('../../models/User');
const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
};



const process ={
    login:(req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};


// const user = new User(req.body); 이 유저는 클라이언트 유저의 특성을 가지게 해야함
// const response = user.login();
// return res.json(response);
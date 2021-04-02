"use strict";

const User = require('../../models/User');
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};



const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
      
        return res.json(response);
    },
    register:(req, res) => {
        const user = new User(req.body);
        const response = user.register();
      
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
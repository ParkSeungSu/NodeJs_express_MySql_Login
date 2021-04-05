"use strict";

const logger = require("../../config/logger");
const User = require('../../models/User');

const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },
};



const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err) {
            logger.error(
                `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
            )
        } else
            logger.info(
                `POST /login 200 Response: "success: ${response.success}, message: ${response.message}"`
                );
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        logger.info(`POST /register 200 Response: "success: ${response.success}, message: ${response.message}"`);
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
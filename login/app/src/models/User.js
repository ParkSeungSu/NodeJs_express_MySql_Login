"use strict";

const UserStorage = require('./UserStorage');

class User {

    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const { id, psword } = await UserStorage.getUserInfo(client.id);
            // await 항상 promise를 반환하는 애한테 주는 옵션
            if (id) {
                if (id === client.id && psword === client.psword) {
                    return { success: true };
                }
                return { success: false, message: "비밀번호가 틀렸습니다." };
            }
            else return { success: false, message: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, err };
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User;
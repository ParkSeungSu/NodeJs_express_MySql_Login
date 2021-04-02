"use strict";

class UserStorage {
    static #users = {
        id: ["park", "cldkr0401", "pss"],
        psword: ["0401", "0401", "0401"],
        name: ["programmer", "developer", "designer"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
    static getUserInfo(id) {
        console.log(id);
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //users의 키값들만으로 배열을 만듬
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        console.log(userInfo);

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);

        return {success:true};
    }
}

module.exports = UserStorage;
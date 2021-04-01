"use strict";

class UserStorage {
    static #users={
        id:["park","cldkr0401","pss"],
        psword:["0401","0401","0401"],
        job:["programmer","developer","designer"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        
        return newUsers;
    }
}

module.exports = UserStorage;
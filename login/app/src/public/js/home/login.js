"use strict";

//login function

// 로그인 버튼 클릭시 ID PW 값을 서버로 전송
//DOM -> Document Object Model 

const id = document.querySelector("#id"),
psword = document.querySelector("#password"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req={
        id:id.value,
        psword:psword.value,
    };
    
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res));
}
console.log(id);
console.log("hello");
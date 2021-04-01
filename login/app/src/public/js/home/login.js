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
        password:psword.value,
    };
    
    fetch("/login",{
        method:"POST",         //REST API 관련 설정
        header:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(req),
    });
}
console.log(id);
console.log("hello");
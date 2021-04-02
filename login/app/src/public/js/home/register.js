"use strict";

//register function

// 로그인 버튼 클릭시 ID PW 값을 서버로 전송
//DOM -> Document Object Model 

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#password"),
    confirmPsword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

console.log("Hello register");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value){
        return alert("아이디를 입력해주세요!");
    }
    if(psword.value!==confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.message);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
}
const myID = "cat";
const myPassword = 1234;

var inputId;
var inputPw;
var inputLoginBt;
var inputSignBt;
var inputMa;
var now = new Date();
var month = now.getMonth() +1;

    document.write(
        now.getUTCFullYear()+"년 "+
        month+"월 "+
        now.getDate()+"일 "+
        now.getHours()+"시 "+
        now.getMinutes()+"분 "+
        now.getSeconds()+"초 "+
        now.getUTCMilliseconds()+"밀리초"
    );

window.onload = function() {
    inputId = document.getElementById("loginId");
    inputPw = document.getElementById("loginPw");
    inputLoginBt = document.getElementById("loginButton");
    inputSignBt = document.getElementById("singupButton");
    inputMa = document.getElementById("loginMain");
    mainContent = document.getElementById("loginMain")

}

function login() {
    if(inputId.value == myID && inputPw.value == myPassword) {
        main();
    } if(inputId.value == myID && inputPw.value != myPassword) {
        alert("비밀번호가 틀렸습니다")
    } if(inputId.value != myID && inputPw.value == myPassword) {
        alert("아이디가 틀렸습니다.")
    } if(inputId.value != myID && inputPw.value != myPassword) {
        alert("로그인 실패")
    }
}

function main() {
    inputMa.innerHTML = inputId.value+"<p>회원님 반갑습니다.</p>";
}

function singup() {
    window.location.href = 'reg_member.html';
}

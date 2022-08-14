const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용 
const USERNAME_KEY = "username";

function onLoginSubmit(event) {     
    event.preventDefault(); //기본 동작이 실행되지 않도록 막는다. 
    loginForm.classList.add(HIDDEN_CLASSNAME);  //form에 hidden이라는 class를 추가한다. form을 숨길 수 있다.
    const username = loginInput.value;  //유저의 이름을 변수로 저장.
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    /* papaintGreetings(username);로 하나의 함수로 정해서 간단하게 표현 
    greeting.innerText = `Hello ${username}`; //비어있는 h1 안에다 greeting을 가져다가 텍스트를 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);  //그리고 h1에서 hidden이라는 class를 삭제 
    */
}

function paintGreetings(username){  
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {    // local storage에 유저정보가 없을 때.      
    loginForm.classList.remove(HIDDEN_CLASSNAME);// show the form
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername); // show the greetings
}
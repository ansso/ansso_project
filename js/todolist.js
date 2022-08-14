const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input"); //input의 value를 얻기 위함 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];  //todo를 저장할 array를 만듬, toDos는 항상 빈 array로 시작  

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos array의 내용을 localStorage에 넣음 
//JSON.stringify--> string으로 바꿔줌 
}

function deleteToDo(event) {
    const li = event.target.parentElement; //삭제하고 싶은 li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {  //handleToDoSubmit에서 받은 인자로 실행
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //span의 text를 span 뒤에 놓는다. 
    const button = document.createElement("button"); //삭제할 때 사용할 버튼 생성
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //appendChild --> span을 li의 자식으로 만들어줌
    li.appendChild(button);
    toDoList.appendChild(li); //toDoList안에 li넣기 
}

function handleToDoSubmit(event){ 
    event.preventDefault(); //엔터를 한 후 새로고침하는 것을 막음 
    const newTodo = toDoInput.value; //입력값이 사라자기 전, 입력값을 저장 
    toDoInput.value = "";  //엔터를 누르면 모든 입력값이 사라짐
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //newTodoObjtoDos array를 가지고 와서 newTodo를 push한다. 
    paintToDo(newTodoObj);  //newTodo인자를 받는 function paintToDo를 실행 
    saveToDos(); //저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);//localStorage에서 온 string을 가지고 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //forEacah는 array 각각의 item들에 대한 function을 실행해준다. 
}

//Date.now(): 밀리초(1000분의 1초)를 주는 함수 
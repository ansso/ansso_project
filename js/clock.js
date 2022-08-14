const clock = document.querySelector("h2#clock");
/* intervals: 매번 일어나는 무언가 (예시: 매 2초) 2개의 argument를 갖고 있고
 첫번째는 내가 실행하고자 하는 function, 두번째는 호출되는 function 간격 몇 ms로 할지 쓰면 된다. */
//timeout

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();   //즉시 호출하고 
setInterval(getClock, 1000); //매초마다 getclock을 다시 실행


//즉시 호출하지 않았다면 처음에 00:00:00으로 시작해서 안된다. 
//padStart는 string의 길이가 2가 아니면 앞에 0을 추가해준다. (ex "1".padStart(2, "0"))
//padEnd면 뒤에다가 0을 추가해준다. 
//dateHours()엔 padStart()를 쓸 수 없는데, 그 이유는 number이기 때문이다. 그렇기 때문에 string으로 변경해줘야한다. 
//변경하는 방법: String(new Date().getHours()) --> String으로 감싼다. 
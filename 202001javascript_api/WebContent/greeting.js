
const form = document.querySelector(".js-form"),
input= form.querySelector("input"),
greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN="showing";



function saveName(text) {
	  localStorage.setItem(USER_LS, text);
	}

function handleSubmit(event){
	event.preventDefault();//엔터를 누를때 새로고침 이벤트를 막는다.
	const currentValue=input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName(){
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
	form.classList.remove(SHOWING_CN);//form을 지운다.
	greeting.classList.add(SHOWING_CN);//greeting을 보여준다.
	greeting.innerText=`Hello ${text}`;
}

function loadName(){
	const currentUser=localStorage.getItem(USER_LS);
	if(currentUser===null){
		//유저가 없는 경우
		askForName();//currentUser가 없을경우 이름 요청
		
	}else{
		//유저가 있는 경우
		paintGreeting(currentUser);
	}
}

function init(){
	loadName();
}

init();
 
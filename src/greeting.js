const form = document.querySelector(".nameform"),
  input = form.querySelector(".nameinput"),
  greeting = document.querySelector(".js-greetings"),
  headtitle = document.querySelector(".head");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";


function hide() {
  input.style.display ="none";
}
function show() {
  input.style.display ="block";
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function delName(text) {
  localStorage.removeItem(USER_LS, text);
}
function handleSubmitInit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.style.fontSize = "26px";
  greeting.innerText = `어서오세요 ${text}님!`;
  hide();
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    show();
    askForName();
  } else {
    hide();
    paintGreeting(currentUser);
  }
}

form.addEventListener("submit", handleSubmitInit);
headtitle.addEventListener("dblclick", show);

function init() {
  loadName();
}

init();


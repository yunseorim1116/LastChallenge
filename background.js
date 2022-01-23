///////////////////////////////배경이미지///////////////////////////////////////////
const img = ["1.png", "2.png", "3.png"]; //사진이 담겨진 배열을 만든다
const chosenImage = img[Math.floor(Math.random() * img.length)]; //몇번째 배열 선택할지

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);

///////////////////////////////시계///////////////////////////////////////////

const clock = document.querySelector("#clock");

function makeday() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const watch = `현재 시각은 ${hours}시 ${minutes}분 ${second}초 입니다.`;
  clock.innerText = watch;
}

setInterval(makeday, 1000);

////////////////////////////////로그인페이지//////////////////////////////////////////

const crbutton = document.querySelector("#button");
const checkId = document.querySelector("#User-name");

const checkPw = document.querySelector("#Pass-word");

let ID = checkId.value;
let PW = checkPw.value;

/////////////////////////////////회원가입페이지//////////////////////////////////////////

const myId = [];

const crbutton2 = document.querySelector("#button2");
const form2 = document.querySelector("#create-form");

// console.log(button2);
const checkId2 = document.querySelector("#User-name2");
const checkPw2 = document.querySelector("#Pass-word2");

let ID2 = checkId2.value;
let PW2 = checkPw2.value;

crbutton2.addEventListener("click", createAccount);
crbutton.addEventListener("click", logIn);

function createAccount(event) {
  event.preventDefault();

 
  ID2 = checkId2.value;
  PW2 = checkPw2.value;

//   console.log(PW2); //여기까지 담김

  saveID();
}

////////////////////////////////ID저장//////////////////////////////////////////
function saveID() {
  if (ID2 == "" && PW2 == "") {
    alert("값이 비었어요 ㅜㅜ");
  } else {
    localStorage.setItem("createId", String(ID2));
    localStorage.setItem("createPw", String(PW2));

    console.log("저장 " + PW2);

    
    checkId2.value = "";
    checkPw2.value = "";

    alert("저장완료! 아이디와 비번을 잊지 마세요");
  }
}


////////////////////////////////ID저장//////////////////////////////////////////

////////////////////////////////로그인//////////////////////////////////////////
function logIn(event) {
  event.preventDefault();

  ID = checkId.value;
  PW = checkPw.value;

  const getId = localStorage.getItem("createId");
  const getPW = localStorage.getItem("createPw");

  console.log(getId);
  console.log(getPW);


  if (
    String(ID) == String(getId) &&
    String(PW) == String(getPW) &&
    String(ID) !== "" &&
    String(PW) !== ""
  ) {
    alert("로그인성공!!!");

    location.href = "todoList.html";
  } else {
    alert("제대로 입력해주세요.");
  }
}
////////////////////////////////로그인//////////////////////////////////////////

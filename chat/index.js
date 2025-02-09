
const fieldForName = document.getElementById("name");

const fieldForPhoto = document.getElementById("photo");

const fieldForMessage = document.getElementById("comments");

const chatWrap = document.querySelector(".wrap-chat")

const photoWrap = document.querySelector(".wrap-photo");

const btn = document.querySelector(".btn");

const yesAnswer= document.getElementById("answer-yes");

const noAnswer= document.getElementById("answer-no");

const nameInputWrap = document.querySelector(".wrap-input-name");

yesAnswer.checked = true;


//input message check
const inputCheck = (evt) => {
  if (evt.target.value == "") {
    if (!btn.hasAttribute("disabled")) {
      btn.toggleAttribute("disabled");
    }
  } else {
      if (btn.hasAttribute("disabled")) {
        btn.toggleAttribute("disabled");
      }
  }
} 

fieldForMessage.addEventListener('input', inputCheck);

//checkbox YES
const clickYes = () => {
  if (yesAnswer.checked === true) {
    noAnswer.checked = false;
    nameInputWrap.classList.remove("wrap_none");
  }
  if (yesAnswer.checked === false) {
    noAnswer.checked = true;
    nameInputWrap.classList.add("wrap_none");
  }
}
yesAnswer.addEventListener("click", clickYes);

//checkbox NO
const clickNo = () => {
  if (noAnswer.checked === true) {
    yesAnswer.checked = false;
    nameInputWrap.classList.add("wrap_none");
  }
  if (noAnswer.checked === false) {
    yesAnswer.checked = true;
    nameInputWrap.classList.remove("wrap_none");
  }
}
noAnswer.addEventListener("click", clickNo);


//function
const sendMessage = () => {

const messageWrap = document.createElement("div");

chatWrap.append(messageWrap);

messageWrap.classList.add("wrap-message");

const photoWrap = document.createElement("div");

photoWrap.classList.add("wrap-photo");

messageWrap.prepend(photoWrap);


//photo
const avatar = document.createElement("img");

photoWrap.prepend(avatar);

avatar.classList.add("photo");

avatar.alt = "user photo";

if (fieldForPhoto.value == "") {

  const photos = ["./assets/img/photo1.jpg", "./assets/img/photo2.jpg", "./assets/img/photo3.jpg", "./assets/img/photo4.jpg", "./assets/img/photo5.jpg","./assets/img/photo6.jpg"];
  
  const randomIndex = Math.floor(Math.random() * photos.length);

  avatar.src = photos[randomIndex];
  
} 
else {
  avatar.src = fieldForPhoto.value;

  fieldForPhoto.value = "";
}



//name
const nickName = document.createElement("p");

nickName.classList.add("name");

photoWrap.after(nickName);

if (fieldForName.value !== "") {
  nickName.textContent = fieldForName.value.trim();

  fieldForName.value = "";

  nickName.textContent = nickName.textContent[0].toUpperCase() + nickName.textContent.slice(1, nickName.length).toLowerCase();}
else {
  nickName.textContent = "username";
}



//chat
//date
const dateWrap = document.createElement("div");

dateWrap.classList.add("wrap-date");

messageWrap.before(dateWrap);

const options = {
  weekday: "short",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const dateMessage = new Date().toLocaleString("ru-RU", options); 

dateWrap.innerText = dateMessage;

//message

const chatMessage = document.createElement("p");

chatMessage.classList.add("message");

messageWrap.append(chatMessage);

chatMessage.textContent = fieldForMessage.value.trim();

fieldForMessage.value = "";

const checkSpam = (str) => {
  return str.replace(/viagra/ig, `***`).replace(/xxx/ig, `***`);
}

chatMessage.textContent = checkSpam(chatMessage.textContent);

}
btn.addEventListener("click", sendMessage);
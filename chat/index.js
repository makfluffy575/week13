
const fieldForName = document.getElementById("name");

const fieldForPhoto = document.getElementById("photo");

const fieldForMessage = document.getElementById("comments");

const chatWrap = document.querySelector(".wrap-chat")

const photoWrap = document.querySelector(".wrap-photo");

const btn = document.querySelector(".btn");



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

avatar.src = fieldForPhoto.value;

fieldForPhoto.value = "";



//name
const nickName = document.createElement("p");

nickName.classList.add("name");

photoWrap.after(nickName);

nickName.textContent = fieldForName.value.trim();

fieldForName.value = "";

nickName.textContent = nickName.textContent[0].toUpperCase() + nickName.textContent.slice(1, nickName.length).toLowerCase();



//comment
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
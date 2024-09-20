const lengthEl = document.querySelector(".password-length");
const inputEl = document.querySelector(".display-password");
const buttonEl = document.querySelector(".generator");

let chars = "abcdefghijklmnopqstuvwxyz1234567890!@#$&_";
let lengthVar;

function genPassword() {
  let pass = "";
  let lengthVar = lengthEl.value;
  for (let i = 0; i < lengthVar; i++) {
    let random = Math.floor(Math.random() * chars.length);
    pass += chars[random];
  }
  inputEl.value = pass;
}

buttonEl.addEventListener("click", genPassword);

lengthEl.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    genPassword();
  }
});

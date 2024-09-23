// const lengthEl = document.querySelector(".password-length");
// const inputEl = document.querySelector(".display-password");
// const buttonEl = document.querySelector(".generator");

// let chars = "abcdefghijklmnopqstuvwxyz1234567890!@#$&_";
// let lengthVar;

// function genPassword() {
//   let pass = "";
//   let lengthVar = lengthEl.value;
//   for (let i = 0; i < lengthVar; i++) {
//     let random = Math.floor(Math.random() * chars.length);
//     pass += chars[random];
//   }
//   inputEl.value = pass;
// }

// buttonEl.addEventListener("click", genPassword);

// lengthEl.addEventListener("keypress", (e) => {
//   if (e.keyCode === 13) {
//     genPassword();
//   }
// });
const lengthEl = document.querySelector(".password-length");
const inputEl = document.querySelector(".display-password");
const buttonEl = document.querySelector(".generator");
const charsEl = document.querySelector(".chars-input");
const numEl = document.querySelector(".num-input");
const specialEl = document.querySelector(".special-input");

// let chars = "abcdefghijklmnopqstuvwxyz1234567890!@#$&_";
// let lengthVar;

// function genPassword() {
//   let pass = "";
//   let lengthVar = lengthEl.value;
//   for (let i = 0; i < lengthVar; i++) {
//     let random = Math.floor(Math.random() * chars.length);
//     pass += chars[random];
//   }
//   inputEl.value = pass;
// }

// buttonEl.addEventListener("click", genPassword);

// lengthEl.addEventListener("keypress", (e) => {
//   if (e.keyCode === 13) {
//     genPassword();
//   }
// });

let char = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let special = "(!@#$%^&*)";
let charNum = "abcdefghijklmnopqrstuvwxyz1234567890";
let charsSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()"

buttonEl.addEventListener("click", () => {
  if (charsEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * char.length);
      pass += char[random];
    }
    inputEl.value = pass;
  }
});

buttonEl.addEventListener("click", () => {
  if (numEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * num.length);
      pass += num[random];
    }
    inputEl.value = pass;
  }
});

buttonEl.addEventListener("click", () => {
  if (specialEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * special.length);
      pass += special[random];
    }
    inputEl.value = pass;
  }
});

buttonEl.addEventListener("click", () => {
  if (charsEl.checked && numEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * charNum.length);
      pass += charNum[random]
    }
    inputEl.value = pass;
  }
});

buttonEl.addEventListener("click", () => {
  if (charsEl.checked && specialEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * charsSpecial.length);
      pass += charsSpecial[random]
    }
    inputEl.value = pass;
  }
});

let specialNums = "1234567890!@#$%^&*()"
buttonEl.addEventListener("click", () => {
  if (specialEl.checked && numEl.checked) {
    let pass = "";
    for (let i = 0; i < lengthEl.value; i++) {
      let random = Math.floor(Math.random() * specialNums.length);
      pass += specialNums[random]
    }
    inputEl.value = pass;
  }
});

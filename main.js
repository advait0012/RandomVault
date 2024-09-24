const lengthEl = document.querySelector(".password-length");
const inputEl = document.querySelector(".display-password");
const buttonEl = document.querySelector(".generator");
const charsEl = document.querySelector(".chars-input");
const numEl = document.querySelector(".num-input");
const specialEl = document.querySelector(".special-input");

let char = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let special = "(!@#$%^&*)";

function randomCharFunc() {
  let randomChar = "";
  let charRandom = Math.floor(Math.random() * char.length);
  return (randomChar += char[charRandom]);
}

function randomNumFunc() {
  let randomNum = "";
  let numRandom = Math.floor(Math.random() * num.length);
  return (randomNum += num[numRandom]);
}

function randomspecialFunc() {
  let randomspecial = "";
  let specialRandom = Math.floor(Math.random() * special.length);
  return (randomspecial += special[specialRandom]);
}

function randomCharNum() {
  let charNumRandom = "";
  const charNum = Math.random() < 0.5;
  if (charNum) {
    const randomCharNum = Math.floor(Math.random() * char.length);
    charNumRandom += char[randomCharNum];
  } else {
    const randomCharNum = Math.floor(Math.random() * num.length);
    charNumRandom += num[randomCharNum];
  }
  return charNumRandom;
}

function randomSpecialNum() {
  let numSpecialRandom = "";
  const specialNum = Math.random() < 0.5;
  if (specialNum) {
    const specialNumRandom = Math.floor(Math.random() * num.length);
    numSpecialRandom += num[specialNumRandom];
  } else {
    const specialNumRandom = Math.floor(Math.random() * special.length);
    numSpecialRandom += special[specialNumRandom];
  }
  return numSpecialRandom;
}

function randomSpecialChar() {
  let charSpecialRandom = "";
  const specialChar = Math.random() < 0.5;
  if (specialChar) {
    const specialCharRandom = Math.floor(Math.random() * char.length);
    charSpecialRandom += char[specialCharRandom];
  } else {
    const specialCharRandom = Math.floor(Math.random() * special.length);
    charSpecialRandom += special[specialCharRandom];
  }
  return charSpecialRandom;
}

function randomSpecialCharNum() {
  let charNumSpecialRandom = "";
  const specialCharNum = Math.random() < 0.3;
  if (specialCharNum) {
    const specialCharNumRandom = Math.floor(Math.random() * char.length);
    charNumSpecialRandom += char[specialCharNumRandom];
  } if(specialCharNum){
    const specialCharNumRandom = Math.floor(Math.random() * special.length);
    charNumSpecialRandom += special[specialCharNumRandom];
  }else{
    const specialCharNumRandom = Math.floor(Math.random() * num.length);
    charNumSpecialRandom += num[specialCharNumRandom];
  }
  return charNumSpecialRandom;
}

buttonEl.addEventListener("click", () => {
  let newRandom = [];
  if (charsEl.checked && !numEl.checked && !specialEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomCharFunc());
    }
  }

  if (numEl.checked && !charsEl.checked && !specialEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomNumFunc());
    }
  }

  if (specialEl.checked && !numEl.checked && !charsEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomspecialFunc());
    }
  }

  if (charsEl.checked && numEl.checked && !specialEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomCharNum());
    }
  }

  if (numEl.checked && specialEl.checked && !charsEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomSpecialNum());
    }
  }

  if (charsEl.checked && specialEl.checked && !numEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomSpecialChar());
    }
  }
  if (charsEl.checked && specialEl.checked && numEl.checked) {
    for (let i = 0; i < lengthEl.value; i++) {
      newRandom.push(randomSpecialCharNum() );
    }
  }

  inputEl.value = newRandom.join("");
});

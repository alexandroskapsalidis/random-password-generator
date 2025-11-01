// RANDOM PASSWORD GENERATOR

function generatePassword (  length, includeLowercase, includeUppercase,
                            includeNumbers, includeSymbols ) {
  
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = lowerCaseChars.toUpperCase();
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&*()_+-=[]{}|;:,.<>?";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // console.log(allowedChars);  
  
  if (length <= 0) {
    return `(password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

function getData() {
  
  const passwordLength = Number(document.getElementById("textBox").value);
  // console.log(passwordLength);
  // console.log(typeof passwordLength);
  const includeLowercase = document.getElementById("includeLowerCase").checked;
  // console.log(includeLowercase);

  const includeUppercase = document.getElementById("includeUpperCase").checked;
  // console.log(includeUppercase);
  const includeNumbers = document.getElementById("includeNumbers").checked;
  // console.log(includeNumbers);
  const includeSymbols = document.getElementById("includeSymbols").checked;
  console.log(includeSymbols);

  const password = generatePassword ( passwordLength, includeLowercase, includeUppercase,
                                      includeNumbers, includeSymbols );

  document.getElementById("result").textContent = password
  console.log(`Generated password: ${password}`);
}





  

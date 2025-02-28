const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+[]{};:'\",.<>?/|`~";

const passwordInput = document.getElementById("passwordInput");
const upperCaseCheckBox = document.getElementById("upperCase");
const lowerCaseCheckBox = document.getElementById("lowerCase");
const numberCheckBox = document.getElementById("number");
const speacelCharecterCheckBox = document.getElementById("speacelCharecter");
const generateBtn = document.getElementById("generateBtn");
const password = document.getElementById("password");


// step 1 function random charecter

function getRandomCharecter(str){
 return str[Math.floor(Math.random() * str.length)]
}

//step 2 suffleCharecter from random charecter

const sufflePassword = (array) =>{
    for (let  i = array.length - 1 ;  i> 0; i--) {
       let j = Math.floor(Math.random() * (i + 1))
       let temp = array[i]
       array[i] = array[j]
       array[j] = temp
    }
    return array.join('')
}

//step 3 password generet from array 

const generatePassword = () => {
    // steps1
    const includePassword = parseInt(passwordInput.value);
    const includeUpperCase = upperCaseCheckBox.checked;
    const incLowerCase = lowerCaseCheckBox.checked;
    const includeNumber = numberCheckBox.checked;
    const includeSpeacialCar = speacelCharecterCheckBox.checked;

    if(includePassword < 4 || includePassword > 20){
     alert("password must be up then 4 and less then 20")
     return
    }

    //step 2 make a array of password
    let availableCharTypes  = [];

    if(includeUpperCase) availableCharTypes.push(uppercaseLetters);
    if(incLowerCase) availableCharTypes.push(lowercaseLetters);
    if(includeNumber) availableCharTypes.push(numbers);
    if(includeSpeacialCar) availableCharTypes.push(specialChars);

    if(includePassword === 0){
        alert("Please select at least one character type.");
      return
    }

   let passwordArray = [];
   if(includeUpperCase) passwordArray.push(getRandomCharecter(uppercaseLetters))
   if(lowercaseLetters) passwordArray.push(getRandomCharecter(lowercaseLetters))
   if(numbers) passwordArray.push(getRandomCharecter(numbers))
   if(specialChars) passwordArray.push(getRandomCharecter(specialChars))

    while (passwordArray.length < includePassword) {
        const randomType  = availableCharTypes[Math.floor(Math.random() * availableCharTypes.length)]
        passwordArray.push(getRandomCharecter(randomType))
    }

  const finalPassword = sufflePassword(passwordArray)
  password.value = finalPassword
}

//step 4 event listener
generateBtn.addEventListener("click" , generatePassword)
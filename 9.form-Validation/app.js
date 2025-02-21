const lname = document.getElementById("lname")
const fname = document.getElementById("fname")
const email = document.getElementById("email");
const password = document.getElementById("password");
const pass2 = document.getElementById("pass2");
const submitBtn = document.getElementById("submitBtn")

function isError(input, message){
 const formControlar = input.parentElement;
 const inputFormPatent = formControlar.querySelector("input");
 inputFormPatent.className = "form-control incorrect";

 const smallTag = formControlar.querySelector("small");
 smallTag.innerText = message;
 smallTag.style.visibility = "visible"
}

function isSuccess(input){
   const formControlar = input.parentElement;
   const inputFormPatent = formControlar.querySelector("input");
   inputFormPatent.className = "form-control correct";

   const smallTag = formControlar.querySelector("small");
   smallTag.style.visibility = "hidden"
}

function checkMail(input){
   let reEx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(reEx.test(input.value.trim())){
     isSuccess(input )
   }else{
      isError(input , "E-main is Not Valid")
   }
}
function checkPassword(input1 , input2){
  if(input1.value !== input2.value){
   isError(input2 , "Password do not match")
  }else{
   isSuccess(input2)
  }
}

function checkFeild(input){
  return input.id.charAt(0).toUpperCase() + input.id.charAt(1)
}

function checkLength(input , min , max){
 if(input.value.length < min){
   isError(input , `The ${checkFeild(input)} at least ${min} charecter`)
 }else if(input.value.length > max){
  isError(input ,  `The ${checkFeild(input)} must be less then ${max} charecter`)
 }
 else{
   isSuccess(input)
 }
}

submitBtn.addEventListener("submit" , (e)=>{
   e.preventDefault();

   checkLength(fname , 3 , 30 );
   checkLength(lname , 3 , 30 );
   checkLength(password , 8 ,30);
   checkMail(email);
   checkPassword(password , pass2);
  
   if(fname && lname && password && email && pass2){
     console.log("OK, you're done! The form is valide")
     localStorageFun()
   }else{
      console.log("A problem found in form ")
   }
});

const localStorageFun = () =>{
   localStorage.setItem("fname" , fname.value);
   localStorage.setItem("lname" , lname.value);
   localStorage.setItem("email" , email.value);
   localStorage.setItem("password" , password.value);
   localStorage.setItem("pass2" , pass2.value);
}
const showData = () =>{
   fname.value = localStorage.getItem("fname") || ''
   lname.value = localStorage.getItem("lname") || ""
   email.value = localStorage.getItem("email") || ""
   password.value = localStorage.getItem( "password") || ""
   pass2.value = localStorage.getItem( "pass2") || ""
}
showData()
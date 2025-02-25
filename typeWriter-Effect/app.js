let title = document.getElementById("typeHeading");
let effectName = [
    "Hello my name is jisan hossain { mome }" ,
     "I'am a Frontend Devoloper" , 
     "And I'am also a softawer Devolper"]  ;

let currentStringIndex = 0;
let currentCharIndex = 0;

function typeWriter (){
 let currectIndex = effectName[currentStringIndex];
 let new_title = currectIndex.slice(0 , currentCharIndex);

 title.innerHTML = new_title;
 currentCharIndex++
 
 if(currentCharIndex > currectIndex.length){
  currentCharIndex = 0;
  currentStringIndex++
 
  if(currentStringIndex >= effectName.length){
   currentStringIndex = 0
  }
 }

 setTimeout(typeWriter, 100)
}
typeWriter()
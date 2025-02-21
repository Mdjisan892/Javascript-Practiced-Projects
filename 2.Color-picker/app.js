const rgbColorBox = document.getElementById("mainContent");
const rgbCode = document.getElementById("rgbText");
const generateColor = document.getElementById("generateBtn");
const copyColorCode = document.getElementById("copyColorCode");

const rgbColor =() =>{
   const r = Math.floor(Math.random()*255); 
   const g = Math.floor(Math.random()*255); 
   const b = Math.floor(Math.random()*255);
   
   return `rgb(${r} , ${g} , ${b})`
 }

generateColor.addEventListener("click" ,()=>{
  const color = rgbColor();
  rgbColorBox.style.backgroundColor = color  
  rgbCode.innerText = color;
});

const copyCode = () =>{
  const colorInput = document.createElement("input");
  document.body.appendChild(colorInput)
  colorInput.value = rgbCode.innerText ;

  colorInput.select();
  document.execCommand("copy");
  document.body.removeChild(colorInput);
  alert("The Code was Copied")
}

copyColorCode.addEventListener("click" ,()=>{
  copyCode()
})
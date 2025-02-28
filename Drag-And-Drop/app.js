const dragArea = document.getElementById("dragArea");
const h1 = document.querySelector("h1");
const browsBtn = document.getElementById("browsBtn");

let myFile ;

browsBtn.addEventListener("click" , ()=>{
  document.querySelector("input").click()
})

document.querySelector("input").addEventListener("change" ,(e)=>{
  myFile = e.target.files[0];
  dragArea.classList.add("active");
  showImg()
})

dragArea.addEventListener("dragover" , (event)=>{
 event.preventDefault();
 dragArea.classList.add("active");
 h1.innerText = "Reales to upload"
})

dragArea.addEventListener("dragleave" , ()=>{
  dragArea.classList.remove("active");
  h1.textContent = "Drag & Drop";
})

dragArea.addEventListener("drop" ,(event)=>{
  event.preventDefault();
  myFile = event.dataTransfer.files[0]
  dragArea.classList.add("active")
  showImg()
})

function showImg (){
  let fileType = myFile.type;
  const imgType = ["image/jpg" , "image/png" , "image/jpeg"];

  if(imgType.includes(fileType)){
   let fileReader = new FileReader;

   fileReader.onload = ()=>{
    const image =  fileReader.result ;
    const img = `<img class="resultImg" src="${image}" alt="img" />`
    dragArea.innerHTML = img ;
   }
   fileReader.readAsDataURL(myFile);
  }else{
    alert("Image is not valid");
    dragArea.classList.remove("active");
    h1.textContent = "Drag & Drop";
  }
}
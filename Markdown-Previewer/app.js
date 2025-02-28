const editor = document.querySelector("#editor");
const preview = document.querySelector(".preview");

editor.addEventListener("input" , (e)=>{
 console.log(e.target.value)
 preview.innerHTML = DOMPurify.sanitize(marked.parse(e.target.value))
})
const usersInput = document.getElementById("usersInput");
const form = document.querySelector("form");
const main = document.querySelector("main")
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")


function searchUser(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const {avatar_url , login , bio , followers , public_repos , email} = data;
        console.log(data);

        div1.innerHTML = "";
        div2.innerHTML = "";

        const img = document.createElement("img");
        img.src = avatar_url;
        const h2 = document.createElement("h3");
        h2.innerText = "UserName : " + login;
        h2.style.marginBottom = "3px";

        const h3 = document.createElement("h3");
        h3.style.marginBottom = "5px";
        h3.style.borderBottom = "1px solid black";
        if(bio === null){
         h3.innerText = "Bio is Empty"
        }else{
            h3.innerText = "Bio :" + bio;
        }

        const p1 = document.createElement("p");
        p1.innerText = "Followers : " + followers;
        p1.style.marginBottom = "5px"
        p1.style.borderBottom = "1px solid black"
        const p2 = document.createElement("p");
        p2.innerText = "Repo's : " + public_repos;
        p2.style.marginBottom = "5px"
        p2.style.borderBottom = "1px solid black"
        const emailHead = document.createElement("h3");
        if(email === null ){ emailHead.innerHTML = "Useer can't provide any email"}else{emailHead.innerText = "Email : " + email;}
        
        div1.appendChild(img)
        div1.appendChild(h2)
        div2.appendChild(h3)
        div2.appendChild(p1)
        div2.appendChild(p2)
        div2.appendChild(emailHead)
        main.appendChild(div1);
        main.appendChild(div2);
    })
    .catch((er)=> console.log(er.message))
}

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    const inputValue = usersInput.value;

    if(inputValue){
        searchUser(`https://api.github.com/users/${inputValue}`);
        main.style.visibility = "visible";
        usersInput.value = "";
    }
})
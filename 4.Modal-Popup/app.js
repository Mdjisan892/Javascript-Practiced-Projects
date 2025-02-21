const modal = document.getElementById("modal");
const modalOpen = document.getElementById("modalOpen");
const closeBtn = document.getElementById("closeBtn");
const modalOpacity = document.getElementById("modalOpacity");

const createCookie = () => {
    let maxAge = ";max-age=10";
    let path = ";path=/";
    document.cookie = "modalpopup=displayed" + maxAge + path;
};

const showModal = () => {
    modal.style.display = "block";
    modalOpacity.classList.add("show-overlay");
};

const hideModal = () => {
    modal.style.display = "none";
    modalOpacity.classList.remove("show-overlay");
};

if (document.cookie.indexOf("modalpopup") === -1) {
    setTimeout(() => {
        showModal();
    }, 3000);
    createCookie()
} else {
  setTimeout(() => {
   showModal();
  }, 3000);
}

modalOpen.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
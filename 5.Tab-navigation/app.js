function parentTab(n) {
    const aLink = document.querySelectorAll(".pages");
    const text = document.querySelectorAll(".text");

    aLink.forEach( link => link.classList.remove("p-active"));
    text.forEach( link => link.classList.remove("c-active"));

    aLink[n].classList.add("p-active");
    text[n].classList.add("c-active")
}
const menuopen = document.querySelector(".icon-user")
const menuclose = document.querySelector(".close")
const overlay = document.querySelector(".overlay")

menuopen.addEventListener("click", () => {
    // alert("overlay añadido")
    overlay.classList.add("overlay-active")
})

menuclose.addEventListener("click", () => {
    // alert("overlay removido")
    overlay.classList.remove("overlay-active")
})

// Change img
function changeimg(anything) {
    document.querySelector(".img-user-perfil").src = anything
    document.querySelector(".img-user").src = anything
}
// Change Text
const nameuser = document.querySelector(".name-user");
    function changetext(text) {
        nameuser.innerHTML = text;
}
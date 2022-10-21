let publics = document.querySelector("#publics");
let privates = document.querySelector("#privates");
document.querySelector(".lock_btn").addEventListener('click', function(){
    if (publics.classList.contains("hideshow-public")) {
        publics.classList.remove("hideshow-public");
        privates.classList.add("hideshow-private");
    } else {
        publics.classList.add("hideshow-public");
        privates.classList.remove("hideshow-private");
    }
});

var str = window.location.href
str = str.substring(str.indexOf("?") + 1);
console.log(str)
let locked = document.querySelectorAll(".locked");
if (str == "rh4DHqcrR9KKgZ" || str == "rh4DHqcrR9KKgZ="){
    for (let i=0; i < locked.length; i++) {
        locked[i].classList.remove("locked");
    }
    //locked[1].classList.remove("locked");
    document.querySelector(".lock_btn").click();
}
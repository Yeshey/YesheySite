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

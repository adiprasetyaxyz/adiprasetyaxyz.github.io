let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function() {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")){
        btnIcon.src = "assets/img/dark-mode.png" ;
        btnText.innerHTML = "Dark";
    } else {
        btnIcon.src = "assets/img/light-mode.png" ;
        btnText.innerHTML = "Light";
    }
}
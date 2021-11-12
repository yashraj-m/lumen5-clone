if(localStorage.getItem("location") != null) {
    localStorage.setItem("location" , "./casestudies.html")
}else{
    localStorage.setItem("location" , "./casestudies.html")
}

import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar();

let span_div = document.getElementById("spanclick");

span_div.addEventListener("click", () => {
    displaylist()
})

function displaylist() {
    var nav = document.getElementById("menu")

    if(nav.style.display == "block") {
        nav.style.display = "none";
    }
    else{
        nav.style.display = "block";
        nav.style.position = "absolute";
        nav.style.marginTop = "450px";
        nav.style.width = "300px";
        nav.style.marginLeft = "-100px";

      
    }
    
}



let submenu = document.querySelector(".drop-down-menu");

let dropdown = document.getElementById("dropdown")

dropdown.addEventListener("click", () => {
  
    if(submenu.style.display == "block"){
        submenu.style.display = "none"
    }
    else{
        submenu.style.display = "block";
        submenu.style.position = "absolute";
    }
})


if(localStorage.getItem("login") == "login") {
    document.getElementById("btn1").innerHTML = "Log out"; 
}

document.getElementById("btn1").addEventListener("click", ()=> {
    if(localStorage.getItem("login") == "login") {
        document.getElementById("btn1").innerHTML = "Log out";
        localStorage.removeItem("login");
        let goto = localStorage.getItem("location")
        window.location.href = goto;
    }else{
        window.location.href = "login.html";
    }
})
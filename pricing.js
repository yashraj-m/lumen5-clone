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



window.onresize = function(event) {
  document.location.reload(true);
}


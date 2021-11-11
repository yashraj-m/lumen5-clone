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

if(localStorage.getItem("login") == "login") {
    document.getElementById("btn1").innerHTML = "Log out";
    let x = document.getElementById("changename");
    x.innerHTML = "Upgrade";
    let x2 = document.getElementById("changename2");
    x2.innerHTML = "Upgrade";
    let x3 = document.getElementById("changename3");
    x3.innerHTML = "Upgrade";
    x3.style.backgroundColor = "#5846F6";
    x3.style.color = "white"
    let x4 = document.getElementById("changename4");
    x4.innerHTML = "Upgrade";
    let x5 = document.getElementById("changename5");
    x5.innerHTML = "Upgrade";
    let x6 = document.getElementById("changename6");
    x6.innerHTML = "Upgrade";
    let y = document.getElementById("blockname");
    y.innerHTML = "Current Plan";
    let y1 = document.getElementById("blockname1");
    y1.innerHTML = "Current Plan";

} 


let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
let act = document.querySelector(".act");
let dact = document.querySelector(".dact");

monthly.addEventListener("click",()=>{
    act.style.display="none";
    dact.style.display = "flex";
    dact.style.marginLeft = "8%";
    dact.style.marginTop = "4%";
    dact.style.flexwrap = "wrap";
    monthly.classList.add("btn-dark");
    monthly.style.color = "white";
    yearly.style.color = "black";
    yearly.style.backgroundColor = "white";
    monthly.classList.remove("btn-outline-dark");
    document.querySelector(".dmonth").style.display = "block";
})


yearly.addEventListener("click", ()=>{

    window.location.href = "pricing.html"

})
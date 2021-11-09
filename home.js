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
        console.log("hii");
    }
})



window.onresize = function(event) {
  document.location.reload(true);
}




document.getElementById("lumen_intro_img").addEventListener("click", ()=>{
    lightbox_open()
})

document.getElementById("light").addEventListener("click", ()=>{
    video.pause();
})

document.getElementById("fade").addEventListener("click", ()=>{
    lightbox_close()
})

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}
function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}
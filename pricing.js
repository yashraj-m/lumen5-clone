import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar();

let span_div = document.getElementById("spanclick");

span_div.addEventListener("click", () => {
    displaylist()
})

function displaylist() {
    var nav = document.getElementById("menu")

    if (nav.style.display == "block") {
        nav.style.display = "none";
    }
    else {
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

    if (submenu.style.display == "block") {
        submenu.style.display = "none"
    }
    else {
        submenu.style.display = "block";
        submenu.style.position = "absolute";
    }
})


if (localStorage.getItem("location") != null) {
    localStorage.setItem("location", "./pricing.html")
} else {
    localStorage.setItem("location", "./pricing.html")
}


// header

let x = document.getElementById("changename");
let x2 = document.getElementById("changename2");
let x3 = document.getElementById("changename3");
let x4 = document.getElementById("changename4");
let x5 = document.getElementById("changename5");
let x6 = document.getElementById("changename6");


document.getElementById("btn1").addEventListener("click", () => {
    if (localStorage.getItem("login") == "login") {
        document.getElementById("btn1").innerHTML = "Log out";
        localStorage.removeItem("login");
        let goto = localStorage.getItem("location")
        window.location.href = goto;
    } else {
        window.location.href = "login.html";


        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        } else {
            localStorage.setItem("price",)
        }

    }
})


if (localStorage.getItem("login") == "login") {
    document.getElementById("btn1").innerHTML = "Log out";
    x.innerHTML = "Upgrade";
    x2.innerHTML = "Upgrade";
    x3.innerHTML = "Upgrade";
    x3.style.backgroundColor = "#5846F6";
    x3.style.color = "white"
    x4.innerHTML = "Upgrade";
    x5.innerHTML = "Upgrade";
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

monthly.addEventListener("click", () => {
    act.style.display = "none";
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


yearly.addEventListener("click", () => {

    window.location.href = "pricing.html"

})



if (monthly == document.querySelector("btn-dark")) {
    localStorage.setItem("month", "Month")
} else {
    localStorage.setItem("month", "Annual")
}

console.log(localStorage.getItem("month"));


x.addEventListener("click", (() => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Month")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));

        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan1 = document.getElementById("plan1").innerText;
        localStorage.setItem("plan", plan1);

        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        }
    
        let price1 = document.getElementById("price1").innerText;
        let p11 = price1.split("");
        let p21 = p11[1]+ p11[2];
        let p3 = Number(p21) * 12;
        localStorage.setItem("price", p3);
        window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"
    }

}
))

x3.addEventListener("click", (() => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Month")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));

        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan3 = document.getElementById("plan3").innerText;
        localStorage.setItem("plan", plan3);
        
    if (localStorage.getItem("price") != null) {
        localStorage.setItem("price", "")
    }

    let price3 = document.getElementById("price3").innerText;
    let p1 = price3.split("");
    let p2 = p1[1]+ p1[2] + p1[3];
    let p = Number(p2) * 12;
    localStorage.setItem("price", p);
    window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"

    }


}))

x2.addEventListener("click", () => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Month")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));

        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan2 = document.getElementById("plan2").innerText;
        localStorage.setItem("plan", plan2);

        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        }
    
        let price2 = document.getElementById("price2").innerText;
        let p111 = price2.split("");
        let p211 = p111[1]+ p111[2];
        let p31 = Number(p211) * 12;
        localStorage.setItem("price", p31);
        window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"
    }


})

x4.addEventListener("click", () => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Monthly")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));
        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        }
    
        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan4 = document.getElementById("plan4").innerText;
        localStorage.setItem("plan", plan4);

        let price4 = document.getElementById("price4").innerText;
        localStorage.setItem("price", price4);
        window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"
    }


})

x5.addEventListener("click", () => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Monthly")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));

        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan5 = document.getElementById("plan5").innerText;
        localStorage.setItem("plan", plan5);

        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        }
    
        let price5 = document.getElementById("price5").innerText;
        localStorage.setItem("price", price5);
        window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"
    }


})

x6.addEventListener("click", () => {
    if (localStorage.getItem("month") != null) {
        localStorage.setItem("month", "")
    }

    if (document.getElementById("btn1").innerHTML == "Log out") {

        if (document.querySelector(".dmonth").style.display == "block") {
            localStorage.setItem("month", "Monthly")
        } else {
            localStorage.setItem("month", "Annual")
        }

        console.log(localStorage.getItem("month"));

        if(localStorage.getItem("plan") != null) {
            localStorage.setItem("plan", "")
        }

        let plan6 = document.getElementById("plan6").innerText;
        localStorage.setItem("plan", plan6);

        if (localStorage.getItem("price") != null) {
            localStorage.setItem("price", "")
        }
    
        let price6 = document.getElementById("price6").innerText;
        localStorage.setItem("price", price6);
        window.location.href = "payment_page.html";

    } else {
        window.location.href = "login.html"
    }



})
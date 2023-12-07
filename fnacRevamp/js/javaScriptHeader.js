//window.onload = function(){

    let header = document.querySelector("header");
    let btnPaginasHeader = document.querySelectorAll("header nav div a");
    let cajaDesplegable = document.querySelector("#cajaDesplegable");
    let checkbox = document.querySelector(".checkbox");

    header.addEventListener("mouseenter", () => {
        cajaDesplegable.style.display="none";
    });

    for (let i=0; i<btnPaginasHeader.length; i++) {
        btnPaginasHeader[i].addEventListener("mouseenter", () => {
            cajaDesplegable.style.display="block";
        });
    }

    cajaDesplegable.addEventListener("mouseleave", () => {
        cajaDesplegable.style.display="none";
    });

//}
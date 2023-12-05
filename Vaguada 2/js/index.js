window.onload = function() {
    menuDesplegable()
    slider()
    maps()
}

function menuDesplegable() {
    let header = document.querySelector("header");
    let btnsHeader = document.querySelectorAll(".btnHeader");
    let btnHeaderProductos = document.querySelector("header nav div:nth-child(2)");
    let cajaDesplegable = document.querySelector("#cajaDesplegable");

    btnHeaderProductos.addEventListener("mouseenter", () => {
        cajaDesplegable.style.display="block";
    });

    header.addEventListener("mouseenter", () => {
        cajaDesplegable.style.display="none";
    });

    btnsHeader.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            cajaDesplegable.style.display = "none";
        });
    });
    
    cajaDesplegable.addEventListener("mouseleave", () => {
        cajaDesplegable.style.display="none";
    });
}

function slider() {
    let sliderImg = document.querySelector("#contenedorSlider img");
    if (sliderImg != null) {
        let imagenes = ["img/slider/img slider 1.jpeg", "img/slider/img slider 2.jpeg", "img/slider/img slider 3.jpeg", "img/slider/img slider 4.jpeg"];
        let cont = 0;
    
        sliderImg.src = imagenes[0];
    
        setInterval(() => {
            sliderImg.src = imagenes[cont];
            cont = (cont + 1) % imagenes.length;
        }, 5000);
    }
}

function maps() {                       
    let contenedorTienda = document.getElementsByClassName("contenedorTienda");                                                                                                                                                                                                     
    let maps = document.querySelector("#contenedorMaps iframe");

    contenedorTienda[0].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.1635428381!2d-3.707062605847349!3d40.47989103766077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229597a893467%3A0xb099592d7d8818f7!2sFnac!5e0!3m2!1ses!2ses!4v1701079193806!5m2!1ses!2ses"
    });

    contenedorTienda[1].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.80027043033!2d-3.7042319242456148!3d40.39111905719813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42264ac4d57269%3A0x4112d19044c78614!2sFnac!5e0!3m2!1ses!2ses!4v1701090012034!5m2!1ses!2ses"
    });

    contenedorTienda[2].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.831403222185!2d-3.6034298242466978!3d40.36826255858813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4224dc710104e1%3A0x12cd3f60c1c6b638!2sFnac!5e0!3m2!1ses!2ses!4v1701090174008!5m2!1ses!2ses";
    });

    contenedorTienda[3].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.081904104973!2d-3.735374924248034!3d40.3405290602742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42274557e06049%3A0x113710bc5c4a912f!2sFnac!5e0!3m2!1ses!2ses!4v1701090499188!5m2!1ses!2ses";
    });

    contenedorTienda[4].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5270567866105!2d-2.9325539241038077!3d43.261332877687884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fd057f5e725%3A0x1149334bc16a475a!2sFnac!5e0!3m2!1ses!2ses!4v1701090657455!5m2!1ses!2ses";
    });

    contenedorTienda[5].addEventListener("click", () => {
        maps.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.550002618233!2d-3.7064710861541093!3d40.41896897953779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287dca53bd9b%3A0x3c02a2f38bf69e5f!2sFnac!5e0!3m2!1ses!2ses!4v1701090809636!5m2!1ses!2ses";
    });
    

}


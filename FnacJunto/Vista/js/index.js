window.onload = function() {

    menuDesplegable()

    if(window.location.href.includes("index.php")){
        slider()
    }

    if(window.location.href.includes("localizacion.php")){
        maps()
    }
    market()
}
function cleanArray( array ){
    var newArray = new Array();
    for( var i = 0, j = array.length; i < j; i++ ){
        if ( array[ i ] ){
            newArray.push( array[i]);
        }
    }
    return newArray;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////////////////////////////////
//Seccion Control CSS Market, User

    //Lateral Mercado
    let listaMercado = document.getElementById("market");
    //Abrir Carrito (IMG)
    let carrito = document.getElementById("cajaCarrito");
    //Flecha Atras (IMG)
    let atras = document.getElementById("atrasMarket");
    //Abrir opciones usuario (IMG)
    let user = document.getElementById("cajaLogin");
    //Opciones de usuario
    let opcionesUser = document.getElementById("opcionesUser")
    //CerrarSesion
    let cerrar_sesion = document.getElementById("cerrar_sesion");

    carrito.addEventListener("click",function(){

        listaMercado.style.display = "block";

    })
    atras.addEventListener("click",function(){

        listaMercado.style.display = "none";

    })
    user.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    opcionesUser.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    user.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "none";

    })
    opcionesUser.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "none";

    })
    cerrar_sesion.addEventListener("click",function(){

        localStorage.clear()

    })
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
function market(){

//////////////////////////////////////////////////////////////////////////////////////////////


    //Tratamiento base de datos

    //Caja Grid donde se listaran todos los productos
    let listaProductos = document.getElementById("productos")
    //Caja donde se listaran todos los productos seleccionados
    let listado = document.getElementById("listados")

    //Carrito

    //El numero encima del carrito que indica cuantos productos hay en la cesta
    let numeroProductosid = document.getElementById("numeroProductos")
    //La caja del carrito donde se generaran los productos y sus especificaciones
    let productosCarrito = document.getElementById("productosDelCarrito2")
    //Boton para ir a los productos del carrito
    let botonIrCarrito = document.getElementById("EditarCarrito")

    //Se utilizara para contabilizar el numero de productos que hayan
    let number = 0;
    //Se utilizara para guardar los datos del carrito
    productosCarritoArray = []
    //Array auxiliar
    arrayAuxiliar = []

//Se llama al archivo Jsons y se le pide como argumento una clave listar con valor todosProductos
    fetch('Jsons.php?listar=todosProductos')
        .then(response => response.json())
        .then (data =>{
            // console.log(data)
            if(window.location.href.includes("index.php")){
                //Listamos base de datos de productos
                let cuerpo = "";
                for(let x=0;x<data.length;x++){

                    if(parseInt(data[x].tipo) == 3){
                        cuerpo += '<a href="#"><div class="producto">\n' +
                            '               <div class="nombre">\n' +
                            '                   <h3 class="nombreProducto">'+data[x].nombre +'</h3>\n' +
                            '               </div>\n' +
                            '                <div>'+
                            '                    <img src="'+ data[x].imagen +'">'+
                            '                </div>' ;
                            if(parseInt(data[x].disponible) == 0) {
                                cuerpo +=     ' <div class="precio">\n' +
                                    '                   <p style="color: darkred"> AGOTADO</p>\n' +
                                    '               </div>';
                            }else {
                                cuerpo += "      <br><button id=\"boton\">\n" +
                                    "                    <p style='color: black'>Agregar a cesta</p>\n" +
                                    "                </button>\n";
                            }
                            cuerpo +=
                            '               <div class="descripcion">' +
                            '                   <p>'+   data[x].descripcion +'</p>' +
                            '               </div>\n' +
                            '               <div class="precio">\n' +
                            '                   <p>' + data[x].precio + '$</p>\n' +
                            '               </div>' +
                            '           </div></a>';
                    }
                }

                // Se agrega la cadena de cajas a el cuerpo de la pagina
                listaProductos.innerHTML += cuerpo;
            }else if(window.location.href.includes("novedades.php")){
                //Listamos base de datos de productos
                let cuerpo = "";
                for(let x=0;x<data.length;x++){

                    if(parseInt(data[x].disponible) == 0){
                        cuerpo += '<div class="producto">\n' +
                            '               <div class="nombre">\n' +
                            '                   <h3 class="nombreProducto">'+data[x].nombre +'</h3>\n' +
                            '               </div>\n' +
                            '                <div>'+
                            '                    <img src="'+ data[x].imagen +'">'+
                            '                </div>' ;
                        if(parseInt(data[x].disponible) == 0) {
                            cuerpo +=     ' <div class="precio">\n' +
                                '                   <p style="color: darkred"> AGOTADO</p>\n' +
                                '               </div>';
                        }else {
                            cuerpo += "      <br><button id=\"boton\">\n" +
                                "                    <p style='color: black'>Agregar a cesta</p>\n" +
                                "                </button>\n";
                        }
                        cuerpo +=
                            '               <div class="descripcion">' +
                            '                   <p>'+   data[x].descripcion +'</p>' +
                            '               </div>\n' +
                            '               <div class="precio">\n' +
                            '                   <p>' + data[x].precio + '$</p>\n' +
                            '               </div>' +
                            '           </div>';
                    }
                }

                // Se agrega la cadena de cajas a el cuerpo de la pagina
                listaProductos.innerHTML += cuerpo;
            }else if(window.location.href.includes("productos.php")){
                //Listamos base de datos de productos
                let cuerpo = "";
                for(let x=0;x<data.length;x++){

                        cuerpo += '<div class="producto">\n' +
                            '               <div class="nombre">\n' +
                            '                   <h3 class="nombreProducto">'+data[x].nombre +'</h3>\n' +
                            '               </div>\n' +
                            '                <div>'+
                            '                    <img src="'+ data[x].imagen +'">'+
                            '                </div>' ;
                        if(parseInt(data[x].disponible) == 0) {
                            cuerpo +=     ' <div class="precio">\n' +
                                '                   <p style="color: darkred"> AGOTADO</p>\n' +
                                '               </div><br>';
                        }else {
                            cuerpo += "      <br><button id=\"boton\">\n" +
                                "                    <p style='color: black'>Agregar a cesta</p>\n" +
                                "                </button><br>\n";
                        }
                        cuerpo +=
                            '               <div class="descripcion">' +
                            '                   <p>'+   data[x].descripcion +'</p>' +
                            '               </div>\n' +
                            '               <div class="precio">\n' +
                            '                   <p>' + data[x].precio + '$</p>\n' +
                            '               </div>' +
                            '           </div>';
                    }

                // Se agrega la cadena de cajas a el cuerpo de la pagina
                listaProductos.innerHTML += cuerpo;
            }

            //Intento de obtener los localStorage de la pagina
            //Local Storage del json hecho de elementos del carrito
            let productosObtenidos = localStorage.getItem("productosCarrito")
            //Si existe se utilizara esta informacion vuelta en una variable para su facil representacion
            let products = JSON.parse(productosObtenidos);
            //Local Storage del numero de productos del carrito
            let cantidadProductosObtenidos = localStorage.getItem("cantidadProductos")

            //Al lanzar la pagina te lista los local storage
            if(products != null){

                // console.log(products)
                // console.log(cantidadProductosObtenidos)

            }

            //Se intenta acceder a la informacion del local storage si esta existe
            if(window.location.href.includes("index.php") && productosObtenidos!= null ){

                numeroProductosid.innerHTML = products.length

                //Se recorre todos los productos
                for (let i = 0; i < products.length; i++) {

                    //console.log("nombre seleccionado = "+ products)
                    //console.log("nombre seleccionado = "+ products[i].nombre)
                    productosCarritoArray[i] = products[i]

                    //Para la comparacion es necesario hacer nesting ya que se tienen que tratar con diferentes tamaños
                    for(let x=0 ; x<data.length ; x++){
                        if(data[x].nombre  == products[i].nombre ){

                            //console.log("Producto Detectado = " + products[i].nombre)

                            productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                '<div id="contenedorImgBoton">' +
                                '<div id="cajaImagenProducto">' +
                                '<img src="' + products[i].imagen + '" alt="">' +
                                '</div>' +
                                '<div id="botonesMarket">' +
                                '</div>' +
                                '</div>' +
                                '<div id="cajaInfoProducto">' +
                                '<h2>' + products[i].nombre + '</h2>' +
                                '<p>Cantidad <p id="cantidad' + products[i].id + '"> ' + products[i].cantidad + '</p></p>' +
                                '<p>Precio </p><h3>' + products[i].precio + ' </h3>' +
                                '<p>' + products[i].descripcion + '</p>' +
                                '</div>' +
                                '</div><br>';


                        }
                    }


                }

            }

            //Boton que le pertenece a cada producto que se genera
            //Se utiliza un querySelectorAll para seleccionar todos los botones con la misma id
            //y asi poder utilizar la NodeList
            let botones = document.querySelectorAll("#boton")
            //Parceamos el numero de productos obtenidos del local storage
            let cantidadProducts = parseInt(cantidadProductosObtenidos)
            //Bolleano para controlar la generacion nueva de productos
            let pasar1 = true
            //Bolleano para controlar la generacion nueva de productos
            let pasar2 = true
            //Array auxiliar
            let arrAux = []
            //Variable auxiliar posiciones
            let positionAux = 0;
            //Se inicia un forEach para recorrer todos los botones
            botones.forEach(function(boton, id) {

                //Se le pondra esta funcion a todos los botones que hayan con el id seleccionado
                boton.addEventListener("click", function() {

                    //Confirmacion de que el boton ha sido clicado
                    console.log("Boton ha sido clickeado en = " + id)

                    //Se hará la comprobación de que producto se esta seleccionando con el nombre dado que es equivalente al
                    //que se le ha dado en la base de datos
                    let nombreProducto = boton.parentElement.querySelector(".nombreProducto").textContent;

                    //Si hay local Storage disponible significa que se tiene que actualizar el carrito en base a lo que ya se ha recogido
                    if(productosObtenidos!= null){

                        console.log("Hay local storage que se puede utilizar, por lo que se procedera a utilizar esa info")

                        for (let i = 0; i < products.length; i++) {

                            console.log("El nombre del producto que ha sido leido es " + nombreProducto + " en la posicion " + id)
                            console.log("El nombre del producto que se ha leido de la localStorage es " + products[i].nombre + " en la posicion " + id)

                            for(let x = 0 ; x<data.length ; x++){

                                console.log("El nombre del producto que ha sido leido es " + data[x].nombre + " en la posicion " + id)

                                if(nombreProducto == products[i].nombre){

                                    if(pasar1){
                                        console.log("El nombre del producto " + nombreProducto + " es igual a " + products[i].nombre)
                                        products[i].cantidad++;

                                        document.getElementById("cantidad" + products[i].id).innerHTML = products[i].cantidad
                                        pasar1 = false
                                        pasar2 = false
                                    }

                                }else{
                                    if(pasar2 && nombreProducto == data[x].nombre && data.length != products.length && data[x].cantidad == 0){
                                        console.log("Se detecto un nuevo producto = " + nombreProducto)
                                        pasar2 = false
                                        cantidadProducts++;
                                        number = cantidadProducts
                                        numeroProductosid.innerHTML = number

                                        let y = true
                                        let a = 1
                                        while(y){
                                            a++
                                            for(let m=0;m<a;m++){
                                                if(products[m] == null){

                                                    //console.log(products[m] + " es numero = " + m)
                                                    productosCarritoArray[m] = data[x]
                                                    products[m] = productosCarritoArray[m]
                                                    arrAux[positionAux] = productosCarritoArray[m]
                                                    y= false

                                                }
                                            }
                                        }

                                        productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                            '<div id="contenedorImgBoton">' +
                                            '<div id="cajaImagenProducto">' +
                                            '<img src="' + data[x].imagen + '" alt="">' +
                                            '</div>' +
                                            '<div id="botonesMarket">' +
                                            '</div>' +
                                            '</div>' +
                                            '<div id="cajaInfoProducto">' +
                                            '<h2>' + data[x].nombre + '</h2>' +
                                            '<p>Cantidad <p id="cantidad' + data[x].id + '"> ' + data[x].cantidad + '</p></p>' +
                                            '<p>Precio </p><h3>' + data[x].precio + ' </h3>' +
                                            '<p>' + data[x].descripcion + '</p>' +
                                            '</div>' +
                                            '</div><br>';

                                    }

                                }
                            }
                        }
                        pasar2 = true
                        pasar1 = true

                    }
                    //Si no hay local Storage disponible significa que se procedera a agregar directamente para generar informacion nueva
                    else{
                        for (let x = 0; x < data.length; x++) {

                            console.log("No hay localStorage")

                            console.log(data[x].nombre)
                            console.log(nombreProducto)

                            if(nombreProducto == data[x].nombre){

                                console.log("El nombre del producto que ha sido leido es " + nombreProducto + " en la posicion " + id + " para " + data[x].nombre)

                            }

                            if (nombreProducto === data[x].nombre && data[x].cantidad > 0) {

                                data[x].cantidad++;
                                console.log(data[x].cantidad++)
                                console.log(" esta actualizado a " + data[x].cantidad)
                                document.getElementById("cantidad" + data[x].id).innerHTML = data[x].cantidad

                            } else if (nombreProducto == data[x].nombre) {

                                console.log("El producto " + nombreProducto + "o tambien " + data[x].nombre + " tiene de precio " + data[x].precio)

                                data[x].cantidad++;

                                productosCarritoArray[x] = data[x];

                                console.log("Se ha guardado en el array de productos = " + productosCarritoArray[x])

                                console.log("El array actual se ve de la siguiente manera =  " + productosCarritoArray )

                                productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                    '<div id="contenedorImgBoton">' +
                                    '<div id="cajaImagenProducto">' +
                                    '<img src="' + data[x].imagen + '" alt="">' +
                                    '</div>' +
                                    '<div id="botonesMarket">' +
                                    '</div>' +
                                    '</div>' +
                                    '<div id="cajaInfoProducto">' +
                                    '<h2>' + data[x].nombre + '</h2>' +
                                    '<p>Cantidad <p id="cantidad' + data[x].id + '"> ' + data[x].cantidad + '</p></p>' +
                                    '<p>Precio </p><h3>' + data[x].precio + ' </h3>' +
                                    '<p>' + data[x].descripcion + '</p>' +
                                    '</div>' +
                                    '</div><br>';
                                number++;
                                numeroProductosid.innerHTML = number;

                            }
                        }

                    }

                });

            });

        })
//////////////////////////////////////////////////////////////////////////////////////////////


//Tratamiento de localStorage


//Al oprimir el boton de ir al carrito se ejecutará esta funcion
    botonIrCarrito.addEventListener("click",function(){

        if(localStorage.getItem("productosCarrito") == null){

            console.log("Se procede a crear los localStorage respectivamente")

            //Local Storage de la cantidad de productos
            let cantidadDeProductosStorage = localStorage.setItem("cantidadProductos",  JSON.stringify(number));
            console.log("la cantidad de productos guardados fue = " + cantidadDeProductosStorage)

            let arrayFinal = cleanArray(productosCarritoArray)

            //Local Storage de los productos
            let productosStorage = localStorage.setItem("productosCarrito", JSON.stringify(arrayFinal));
            console.log("los productos guardados fueron = " + productosStorage)

        }else if(localStorage.getItem("productosCarrito") != null){

            for(let x=0;x<productosCarritoArray.length;x++){

                arrayAuxiliar[x] = productosCarritoArray[x]

            }
            localStorage.setItem("cantidadAux", JSON.stringify(number));
            localStorage.setItem("arrayAux", JSON.stringify(arrayAuxiliar));

        }
    })
//////////////////////////////////////////////////////////////////////////////////////////////


//Listamiento de lista de productos correspondiente al usuario
    if(window.location.href.includes("ListaCompra.php") && localStorage.getItem("productosCarrito") != null){

        //Local Storage del json hecho de elementos del carrito
        let productosObtenidos = localStorage.getItem("productosCarrito")
        //Si existe se utilizara esta informacion vuelta en una variable para su facil representacion
        let products = JSON.parse(productosObtenidos);
        //Local Storage del numero de productos del carrito
        let cantidadProductosObtenidos = localStorage.getItem("cantidadProductos")

        let arrayAuxiliar = localStorage.getItem("arrayAux")
        let cantidadAuxiliar = localStorage.getItem("cantidadAux")
        console.log(arrayAuxiliar)

        if(arrayAuxiliar != null){

            products = JSON.parse(arrayAuxiliar);
            cantidadProductosObtenidos = cantidadAuxiliar
            localStorage.setItem("productosCarrito", arrayAuxiliar);
            localStorage.setItem("cantidadProductos", cantidadAuxiliar);

        }

        //Rectificar la cantidad de productos con las que se esta tratando
        console.log("Cantidad = " + cantidadProductosObtenidos)
        //Rectificar los productos con los que esta tratando la app
        console.log("Productos = " + products)
        //Actualizar numero de productos en la pagina actual
        numeroProductosid.innerHTML = products.length;
        //Datos con los que se va a tratar
        console.log("datos = " + products)

        for (let i = 0; i < products.length; i++) {

            let producto = products[i]

            if(producto != null){
                listado.innerHTML += '<div class="producto">\n' +
                    '               <div class="nombre">\n' +
                    '                   <h3 class="nombreProducto" style="text-align: center">'+ producto.nombre +'</h3>\n' +
                    '               </div>\n' +
                    '                <div style="margin-left: 18%">'+
                    '                    <img src="'+ producto.imagen +'">'+
                    '                </div>' +
                    "      <br><button id=\"boton\">\n" +
                    "                    <p style='color: black'>Agregar a cesta</p>\n" +
                    "                </button><br>\n"+
                    '               <div class="descripcion">' +
                    '                   <p>'+   producto.descripcion +'</p>' +
                    '               </div>\n' +
                    '               <div class="precio">\n' +
                    '                   <p  style="text-align: center">' + producto.precio + '$</p>\n' +
                    '               </div>' +
                    '           </div>';
                productosCarrito.innerHTML +='<div id="listaProductosUsuario">'+
                    '<div id="contenedorImgBoton">'+
                    '<div id="cajaImagenProducto">'+
                    '<img src="'+ producto.imagen +'" alt="">'+
                    '</div>'+
                    '<div id="botonesMarket">'+
                    '</div>'+
                    '</div>'+
                    '<div id="cajaInfoProducto">'+
                    '<h2>'+ producto.nombre  + '</h2>'+
                    '<p>Cantidad <p id="cantidad'+producto.id+'"> '+ producto.cantidad + '</p></p>'+
                    '<p>Precio </p><h3>'+ producto.precio +' </h3>'+
                    '<p>' + producto.descripcion + '</p>'+
                    '</div>'+
                    '</div><br>';
            }
        }

    }



}
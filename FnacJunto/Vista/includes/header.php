<header>
        <div id="cajaLogo">
            <a href="index.php">
                <img src="img/icons/fnac logo.png" alt="">
            </a>
        </div>
        
        <nav>
            <div><a class="btnHeader" href="novedades.php">Novedades</a></div>
            <div><a href="productos.php">Productos</a></div>
            <div><a class="btnHeader" href="localizacion.php">Localización</a></div>
            <div><a class="btnHeader" href="contacta.php">Contacto</a></div>
        </nav>
        
        <div id="cajaBuscador">
            <form>
                <input type="search" placeholder="Search...">
                <button id="iconito" type="submit">Search</button>
            </form>
        </div>

    <?php
    if (isset($_SESSION["Invitado"]) && isset($_SESSION["Usuario"])) {
        echo '  <div id="cajaLogin">
            <a href="iniciarSesion.php">
                <span style="font-size: 30px; color: black;">
                    <i class="fa-solid fa-user"></i>
                </span>
            </a>
        </div>
        <div id="cajaCarrito">
            <a href="#">
                <span style="font-size: 30px; color: black;">
                    <i class="fa-solid fa-cart-shopping"></i>
                </span>
            </a>
        </div>';
    } else if(!isset($_SESSION["Usuario"])){
        echo '
                <div id="cajaLogin">
                    <a href="iniciarSesion.php">
                        <span style="font-size: 35px; color: black;">
                             <i class="fa-solid fa-user"></i>
                        </span>
                    </a>
                </div>
                
                <div id="cajaCarrito">
                        <span style="font-size: 35px; color: black;">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    <div id="circuloCarrito"><p id="numeroProductos">0</p></div>
                </div>
                    
                <div id="opcionesUser">
                 <a id="cerrar_sesion" href="includes/cerrarSesion.php"><p>Cerrar Sesion</p></a>
                </div>
                
                <div id="market">
                    <div id="atrasMarket">
                        <img src="img/flecha.png">             
                    </div>
                    <div id="EditarCarrito">
                        <a href="ListaCompra.php"><h2>Editar Carrito</h2></a>
                    </div> 
                    <div id="tituloMarket">
                        <h1>Lista de productos</h1>
                    </div>
                    <div id="productosDelCarrito">
                      <div id="productosDelCarrito2">                                
                      </div>             
                    </div>  
                </div>';
    }
    ?>
        <div id="cajaDesplegable">
            <div id="contenedorCategorias">
                <div>
                    <h2>Informática</h2>
                    <p><a href="">Móviles</a></p>
                    <p><a href="">Tablets</a></p>
                    <p><a href="">Ordenadores</a></p>
                    <p><a href="">Periféricos</a></p>
                    <p><a href="">Componentes PC</a></p>
                    <p><a href="">Consolas</a></p>
                </div>
                <div>
                    <h2>Electrodomésticos</h2>
                    <p><a href="">Cafeteras</a></p>
                    <p><a href="">Aspiradoras</a></p>
                    <p><a href="">Frigorificos</a></p>
                    <p><a href="">Lavavajillas</a></p>
                    <p><a href="">Lavadoras </a></p>
                    <p><a href="">Hornos</a></p>
                </div>
                <div>
                    <h2>Libros</h2>
                    <p><a href="">Novela</a></p>
                    <p><a href="">Teatros</a></p>
                    <p><a href="">Ficción</a></p>
                    <p><a href="">Cómics</a></p>
                    <p><a href="">Manga</a></p>
                </div>
                <div>
                    <h2>Deportes</h2>
                    <p><a href="">Pulsómetros</a></p>
                    <p><a href="">Bicicletas</a></p>
                    <p><a href="">Máquinas gimnasio</a></p>
                    <p><a href="">Básculas</a></p>
                    <p><a href="">Pulseras de actividad</a></p>
                </div>
            </div>
        </div>
</header>
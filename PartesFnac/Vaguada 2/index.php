<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fnac</title>
    <link rel="icon" href="img/icons/fnac-logo.ico">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">
    <script src="https://kit.fontawesome.com/9f04fd84f4.js" crossorigin="anonymous"></script>
    <script src="js/index.js"></script>
</head>
<body>
    <?php
        include "includes/header.php";
    ?>
    
    <section>
        <div id="contenedorSlider">
            <div id="contenedorSliderImg">
                <img src="" alt="">
            </div>
            
            <div id="sliderFooter">
                <div>
                    <span style="font-size: 25px; color: rgb(216, 216, 216);">
                        <i class="fa-solid fa-store"></i>
                    </span>
                    <div>
                        <p>Recogida GRATUITA en tienda</p>
                        <p>Elige tu tienda más cercana</p>
                    </div>
                </div>
                
                <div>
                    <span style="font-size: 25px; color: rgb(216, 216, 216);">
                        <i class="fa-solid fa-tag"></i>
                    </span>
                    <div>
                        <p>Descuento 5% en libros</p>
                        <p>En todos los libros y para todo el mundo</p>
                    </div>
                </div>
                
                <div>
                    <span style="font-size: 25px; color: rgb(216, 216, 216);">
                        <i class="fa-solid fa-truck"></i>
                    </span>
                    <div>
                        <p>Envío gratis ilimitado</p>
                        <p>Haze socio Tech + Cultura</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <?php
        include "includes/footer.php";
    ?>
</body>
</html>
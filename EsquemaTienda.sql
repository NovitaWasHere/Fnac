/* Siguiente esquema */
create schema Tienda;
use Tienda;
create table Usuario(

	id int primary key auto_increment,
    nombre varchar(45) not null,
	correo varchar(45) not null,
    contraseña varchar(45) not null,
    admin tinyint(1) not null

);
ALTER TABLE `tienda`.`usuario` 
ADD COLUMN `adim` TINYINT NOT NULL AFTER `contraseña`,
CHANGE COLUMN `id` `id` INT NOT NULL ;
ALTER TABLE `tienda`.`usuario` 
DROP COLUMN `adim`;
INSERT INTO `tienda`.`Usuario` (`id`, `nombre`, `correo`, `contraseña`, `admin`) VALUES ('1', 'Novita', 'Novita@gmail.com', 'Novita', '1');
create table Producto(

	id int primary key auto_increment,
    nombre varchar(45) not null,
	imagen varchar(200) not null,
	precio decimal not null,
    descripcion varchar(200) not null,
    disponible TINYINT not null,
    cantidad int not null,
    tipo int not null,
    FOREIGN KEY (tipo) REFERENCES TipoProducto(idTipoProducto)

);
CREATE TABLE TipoProducto (
    idTipoProducto INT PRIMARY KEY,
    nombreTipoProducto VARCHAR(50) NOT NULL
);
select * from Producto;


-- Informática
INSERT INTO Producto (nombre, imagen, precio, descripcion, disponible, cantidad, tipo) VALUES
('Laptop ASUS', 'https://dlcdnwebimgs.asus.com/gain/9ff93ff7-783a-4329-9ed6-86ab42f76c16/', 899.99, 'Potente laptop para trabajos exigentes.', true, 0,  1),
('Teclado mecánico RGB', 'https://m.media-amazon.com/images/I/91dQ+jDQRML._AC_UF894,1000_QL80_.jpg', 99.99, 'Teclado mecánico con retroiluminación personalizable.', true, 0,  1),
('Monitor 27 pulgadas', 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/g-series/g2722hs/pdp/monitor-dell-gaming-g2722hs-pdp-hero.psd?fmt=jpg&wid=5000&hei=3470', 299.99, 'Pantalla de alta resolución para una experiencia inmersiva.', true, 0,  1),
('Mouse inalámbrico', 'https://m.media-amazon.com/images/I/617BaM8NjnL._AC_UF894,1000_QL80_.jpg', 49.99, 'Mouse ergonómico y preciso para tu escritorio.', true, 0,  1),
('Disco SSD 1TB', 'https://www.powerplanetonline.com/cdnassets/disco_duro_ssd_1tb_sandisk_plus_sata3_02_ad_l.jpg', 129.99, 'Aumenta la velocidad de tu sistema con este SSD de gran capacidad.', true, 0,  1);

-- Electrodomésticos
INSERT INTO Producto (nombre, imagen, precio, descripcion, disponible, cantidad, tipo) VALUES
('Frigorífico Samsung', 'https://expertclima.es/7418-large_default/frigorifico-samsung-rb31her2csa-185-60-cm-combi-inox.jpg', 799.99, 'Amplio refrigerador con tecnología de enfriamiento avanzada.', true, 0,  2),
('Lavadora LG', 'https://www.lg.com/es/images/lavado-y-secado/md07516611/gallery/medium01.jpg', 499.99, 'Lavadora eficiente y de bajo consumo de energía.', true, 0,  2),
('Aspiradora robot', 'https://m.media-amazon.com/images/I/81r0OksG2yL._AC_UF894,1000_QL80_.jpg', 199.99, 'Aspiradora inteligente que limpia tu hogar automáticamente.', true, 0,  2),
('Licuadora multifunción', 'https://m.media-amazon.com/images/I/51xJtJ5Qn0L._AC_UF894,1000_QL80_.jpg', 69.99, 'Licuadora potente con múltiples funciones.', true, 0,  2),
('Horno eléctrico', 'https://m.media-amazon.com/images/I/71DjVVBE9vL._AC_UF894,1000_QL80_.jpg', 149.99, 'Horno con tecnología de cocción precisa.', true, 0,  2);

-- Libros
INSERT INTO Producto (nombre, imagen, precio, descripcion, disponible, cantidad, tipo) VALUES
('Cien años de soledad', 'https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF1000,1000_QL80_.jpg', 19.99, 'Obra maestra de Gabriel García Márquez.', true, 0,  3),
('El Señor de los Anillos', 'https://medios.lamarmota.es/senor-de-los-anillos.jpeg', 24.99, 'Épica fantasía de J.R.R. Tolkien.', true, 0,  3),
('Harry Potter y la piedra filosofal', 'https://m.media-amazon.com/images/I/81fS9LRN29L._AC_UF1000,1000_QL80_.jpg', 14.99, 'Primer libro de la serie de J.K. Rowling.', true, 0,  3),
('1984', 'https://librosdelzorrorojo.com/wp-content/uploads/2021/09/COVER_1984_WEB.png', 17.99, 'Distopía clásica de George Orwell.', true, 0,  3),
('El principito', 'https://m.media-amazon.com/images/I/71AVK5VIAzL._AC_UF1000,1000_QL80_.jpg', 9.99, 'Tierna historia de Antoine de Saint-Exupéry.', true, 0,  3);

-- Deportes
INSERT INTO Producto (nombre, imagen, precio, descripcion, disponible, cantidad, tipo) VALUES
('Bicicleta de montaña', 'https://www.clootbike.com/images/products/bicicleta-de-montana-29-xr-trail-900-24v-portada.jpg', 299.99, 'Bicicleta robusta para aventuras en la naturaleza.', true, 0,  4),
('Balón de fútbol Adidas', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3a570ab6012247f7b501af4301133234_9366/Balon_Oceaunz_League_Blanco_HT9015_01_standard.jpg', 19.99, 'Balón de alta calidad para partidos emocionantes.', true, 0,  4),
('Raqueta de tenis profesional', 'https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/k/k/kkiba105_1.jpg', 89.99, 'Raqueta para jugadores avanzados con tecnología innovadora.', true, 0,  4),
('Pesas ajustables', 'https://contents.mediadecathlon.com/m5282039/k$b3eb77074326dfb046652ec93b8bb6d9/sq/juego-de-pesas-musculacion-mancuernas-ajustables-25-kg-2-unidades.jpg?format=auto&f=800x0', 49.99, 'Set de pesas para entrenamiento en casa.', true, 0,  4),
('Zapatillas de correr', 'https://static.runnea.com/images/202306/nike-pegasus-39-zapatillas-running-400x400x90xX.jpg?1', 79.99, 'Zapatillas cómodas y ligeras para correr.', true, 0, 4);
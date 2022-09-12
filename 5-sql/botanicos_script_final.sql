-- creacion de la base de datos
CREATE DATABASE botanicos;
USE botanicos;


-- creacion de las tablas
CREATE TABLE cliente(
id_cliente  INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(250) NOT NULL,
correo VARCHAR(250) NOT NULL, 
telefono VARCHAR(250) NOT NULL,
tipo_cliente VARCHAR(250) NOT NULL
);

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nivel_de_luz VARCHAR(255) NOT NULL,
tipo_de_cuidado VARCHAR(255) NOT NULL,
tipo_de_riego VARCHAR(255) NOT NULL
);

CREATE TABLE productos(
id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_producto VARCHAR(255) NOT NULL,
precio DECIMAL(5,2) NOT NULL,
id_categoria INT NOT NULL,
stock INT NOT NULL,
foreign key(id_categoria)
REFERENCES categoria(id_categoria)
);

CREATE TABLE orden_compra(
id_compra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_cliente  INT NOT NULL, 
id_producto  INT NOT NULL, 
direccion VARCHAR(250) NOT NULL,
fecha_compra DATE NOT NULL,
fecha_entrega DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
foreign key(id_cliente)
REFERENCES cliente(id_cliente)
);

CREATE TABLE proveedor(
 id_proveedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_producto INT NOT NULL,
nombre_proveedor VARCHAR(255) NOT NULL,
direccion VARCHAR(255) NOT NULL,
rfc VARCHAR(20) NOT NULL,
telefono VARCHAR(20) NOT NULL,
foreign key(id_producto)
REFERENCES productos(id_producto)
);

CREATE TABLE producto_orden_compra (
  `productos_id_producto` INT NOT NULL,
  `orden_compra_id_compra` INT NOT NULL,
  PRIMARY KEY (`productos_id_producto`, `orden_compra_id_compra`),
  INDEX `fk_productos_has_orden_compra_orden_compra1_idx` (`orden_compra_id_compra` ASC) VISIBLE,
  INDEX `fk_productos_has_orden_compra_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_orden_compra_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `botanicos`.`productos` (`id_producto`),    
  CONSTRAINT `fk_productos_has_orden_compra_orden_compra1`
    FOREIGN KEY (`orden_compra_id_compra`)
    REFERENCES `botanicos`.`orden_compra` (`id_compra`)
    );
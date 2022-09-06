-- comentario de una linea
/* comentario
de bloque
*/ 

CREATE DATABASE tienda;
USE tienda;
CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL, 
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL);

INSERT 	INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Karen', 'Lopez', '5545816893', 'Neza 57138'),
('Laura', 'Estevez', '554454323', 'flores 34'),
('Rafa', 'Cruz', '5545816893', 'Nmanzanarez 322');

SELECT * 
FROM clientes;

DELETE FROM clientes WHERE cliente_id =3;

USE tienda;


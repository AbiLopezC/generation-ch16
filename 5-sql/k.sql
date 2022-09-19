-- valores tabla categoría
INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Sombra', 'Cuidado complejo', 'riego moderado');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz indirecta', 'Fácil de usar', 'riego frecuente');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz directa', 'Requiere cuidado', 'riego ocasional');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz directa', 'Fácil de usar', 'riego frecuente');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Sombra', 'Cuidado complejo', 'riego ocasional');

SELECT * FROM categoria;

-- valores tabla productos
INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Monstera Deliciosa', 450, 1, 10);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Amoena', 400, 2, 7);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Dracena Piña', 120, 3, 5);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Cactus Órgano Chico', 200, 4, 2);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Sansevieria', 200, 5, 6);

SELECT * FROM productos;

-- clientes
INSERT INTO cliente(nombre, correo, telefono, tipo_cliente)
VALUES ('Mauricio Ramirez', 'mramirez@servidor.com', '5585265261', 'Invitado'),
( 'Pedro Ruiz', 'pruiz@servidor.com', '5585264304','Invitado'),
( 'Natalia Gomez', 'ngomez@servidor.com', '5589202738', 'Registrado'),
( 'Ricardo Aguirre', 'raguirre@servidor.com', '5585265413', 'Registrado'),
( 'María Gonzalez', 'mgonzalez@servidor.com', '5589202659', 'Registrado');


SELECT * FROM cliente;

-- proveedor 
-- valores tabla proveedor
INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (1, 1, 'Cristina Rivera', 'Calle Pirules, No. 560, Colonia, Centro. CDMX. CP. 8790', 'CRKU897612', '5567890123');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (2, 2, 'Elena Garro', 'Calle Sur, No. 78, Colonia, Cibeles. Guadalajara, Guadalajara. CP. 98070', 'EGUT908715', '5516189234');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (3, 3, 'Valeria Luiselli', 'Calle Mónaco, No. 752, Colonia, Paseo del Ejido. Morelia, Michoacán. CP. 8790', 'VLTR934567', '5587761265');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (4, 4, 'Susan Sontag', 'Calle República del Norte, No. 87, Colonia, Centro. CDMX. CP. 98765', 'STGK896513', '5598076514');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (5, 5, 'Andrea Chapela', 'Calle Pino, No. 56, Colonia, Colonia, Del Carmen. Tuxtla Gutiérrez, Chiapas. CP. 765433', 'ACHO951234', '5555908716');

SELECT * FROM proveedor;

-- Orden de compra
INSERT INTO orden_compra( id_cliente, id_producto, direccion, fecha_compra, fecha_entrega, total)
VALUES(1, 1, 'San Juan 230', '2022-08-22', '2022-09-02', 302.22),
(2, 2, 'Manzanas 98', '2022-08-10', '2022-08-20', 222.99),
(3, 3, 'Valentin 43', '2022-08-15', '2022-09-25', 200.00),
(4, 4, 'Alboreda', '2022-07-22', '2022-09-02', 302.22),
(5, 5, 'Carmen 34', '2022-06-22', '2022-06-02', 500.32);

SELECT * FROM orden_compra;
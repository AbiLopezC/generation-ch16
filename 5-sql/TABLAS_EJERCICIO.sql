CREATE DATABASE ejercicio_relaciones;
USE ejercicio_relaciones;


CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
edad INT NOT NULL,
curp VARCHAR(255) NOT NULL,
RFC VARCHAR(255) NOT NULL,
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanos DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);
CREATE TABLE cohorte(
cohorte16_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL,
foreign key(alumno_id)
REFERENCES alumno(alumno_id),
foreign key(instructor_id)
REFERENCES instructor(instructor_id)
);

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL,
foreign key(alumno_id)
REFERENCES alumno( alumno_id)
);

CREATE TABLE direccion(
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL,
foreign key(alumno_id)
REFERENCES alumno(alumno_id)
);


ALTER TABLE alumno ADD nombre VARCHAR(255);

SELECT * FROM alumno;
INSERT INTO alumno(edad, curp,
RFC, nivel_ingles, amonestaciones, nombre )
VALUES(25, 'wews2342qss', '32421123', 'B2', 2, 'Fernando');

INSERT INTO alumno(edad, curp,
RFC, nivel_ingles, amonestaciones, nombre )
VALUES(23, 'wews2342qss', '32421123', 'B1', 0, 'Luis');


SELECT * FROM instructor;
INSERT INTO instructor(nombre, edad, cumpleanos, RFC, supervisor, sesiones)
VALUES ('Raúl', 34, '1985-09-15', 'OAJS49854985', 'Marina', '5');
INSERT INTO instructor(nombre, edad, cumpleanos, RFC, supervisor, sesiones)
VALUES ('Victor', 44, '1975-03-05', 'OAJS49854985', 'Marina', '3');

SELECT * FROM equipo;
INSERT INTO equipo(alumno_id, nombre, cantidad_integrantes, logo)
VALUES (2, 'Shades', 8, 'loguito');
INSERT INTO equipo(alumno_id, nombre, cantidad_integrantes, logo)
VALUES (1, 'DinoM', 6, 'dino');

SELECT * FROM direccion;
INSERT INTO direccion(alumno_id ,
calle, pais , cp)
VALUES(1, 'Manzano', 'Mexico', 34221) ;
INSERT INTO direccion(alumno_id ,
calle, pais , cp)
VALUES(2, 'Arboles', 'Mexico', 32321) ;

SELECT * FROM cohorte;
INSERT INTO cohorte(alumno_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad )
VALUES (1, 1, 25, 'Matutino', 'JavaScript', 'Guadalajara');

INSERT INTO cohorte(alumno_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad )
VALUES (1, 2, 25, 'Vespertino', 'Java', 'Hidalgo');



CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companeros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL);

SELECT * FROM cohorte_16;

INSERT INTO cohorte_16 (nombre, apellido, companeros, direccion, proyecto)
VALUES ('Victor', 'Fernandez', 7, 'Tulntzingo', 'Java'),
('Jonathan', 'Vazquez', 6, 'CDMX', 'JavaScript'),
('Raul', 'Sanchez', 4, 'Guadalajara', 'JavaScript'),
('Maria', 'Vargas', 7, 'CDMX', 'RH'),
('Magali', 'Quiroz', 7, 'CDMX', 'RH');

DELETE FROM cohorte_16 WHERE alumno_id= 3;

UPDATE cohorte_16 
SET nombre= 'Marina',
apellido= 'Pardo'
WHERE alumno_id=5;

SELECT nombre, apellido FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido;

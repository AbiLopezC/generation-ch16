USE world;

SELECT * FROM country;

SELECT Name, population FROM country ORDER BY population DESC ;

SELECT Name, population FROM country WHERE name='Mexico' ;

SELECT * FROM country WHERE name='Mexico' ;

-- Alias

SELECT 5+5;

SELECT Name AS Nombre_de_pais, population AS 'Poblacion de pais' FROM country  ORDER BY Nombre_de_pais DESC ;

SELECT DISTINCT continent FROM country;

--  Where clause 
-- <> <= >= != !
SELECT * FROM country WHERE LifeExpectancy<50 ORDER BY LifeExpectancy DESC ;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC ;

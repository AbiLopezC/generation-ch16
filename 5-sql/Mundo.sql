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

SELECT * FROM country WHERE 
population NOT BETWEEN 50000000 AND 70000000
ORDER BY population;

-- OR & AND LOGICOS
SELECT * FROM country WHERE 
continent= 'Asia' OR Continent= 'Europe';

-- operador in
SELECT * FROM country 
WHERE continent IN ('Asia','Europa', 'North America') ORDER BY continent;

SELECT * FROM country 
WHERE continent NOT IN ('Asia','Europa', 'North America') ORDER BY continent;

SELECT * FROM country 
WHERE IndepYear IS NULL;

-- LIKE buscar un patron especifico
-- '%' csntidad de caracteres
-- '_' un caracter

SELECT Name FROM country 
WHERE Name LIKE '%as%';

SELECT Name FROM country 
WHERE Name LIKE '%e_a';



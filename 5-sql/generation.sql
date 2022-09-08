USE generation;

SELECT * FROM countries;
SELECT * FROM courses;
SELECT * FROM courses_has_students;
SELECT * FROM idtypes;
SELECT * FROM modules;
SELECT * FROM students;

-- 1 Escriba una consulta SQL que le permita encontrar a todos los estudiantes en un país determinado.
SELECT * FROM students INNER JOIN countries
ON students.nationality= countries.idCountries
WHERE countries.idCountries= 14;



-- Escriba una consulta SQL que le permita encontrar todos los países cuyo nombre comience con 'Ca'.
SELECT name FROM countries 
WHERE name LIKE 'Ca%';

-- Cuente todos los alumnos que están matriculados en el curso 'JAVA-1'.
SELECT COUNT(students_id_student) 
FROM courses_has_students 
INNER JOIN students
ON courses_has_students.students_id_student= students.idStudent
WHERE course_code= 'JAVA-1';


-- Calcula la SUMA de los créditos de todos los cursos que tengan la palabra 'JAVA' en el nombre.


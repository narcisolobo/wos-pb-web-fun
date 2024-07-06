INSERT INTO users
(first_name, last_name, email, password)
VALUES
("Max", "Gilhespy", "max@max.com", "password");

INSERT INTO users
(first_name, last_name, email, password)
VALUES
("Keimha", "Moore", "km@km.com", "password");

SELECT * FROM users;

INSERT INTO pets
(name, type, age, is_derpy, user_id)
VALUES
("Percy", "American Shorthair", 3, 0, 4);

INSERT INTO pets
(name, type, age, is_derpy, user_id)
VALUES
("Anubis", "Giant Schnauzer", 3, 1, 3);

INSERT INTO pets
(name, type, age, is_derpy, user_id)
VALUES
("Jinja", "Sheepadoodle", 1, 1, 2);

INSERT INTO pets
(name, type, age, is_derpy, user_id)
VALUES
("Rico", "Rottweiler", 4, 1, 5);

SELECT * FROM pets;

INSERT INTO boops
(user_id, pet_id)
VALUES (4, 6);

INSERT INTO boops
(user_id, pet_id)
VALUES (3, 5);

INSERT INTO boops
(user_id, pet_id)
VALUES (2, 4), (2, 5), (2, 6);

SELECT * FROM boops;

SELECT * FROM pets JOIN users
ON pets.user_id = users.id;

SELECT * FROM users JOIN pets
ON pets.user_id = users.id;

SELECT * FROM users LEFT JOIN pets
ON pets.user_id = users.id;

SELECT * FROM pets RIGHT JOIN users
ON pets.user_id = users.id;

-- getting boops
SELECT users.first_name AS booper, pets.name as boopee
FROM users
JOIN boops
ON users.id = boops.user_id
JOIN pets
ON pets.id = boops.pet_id;

-- count the number of pets in the database
SELECT COUNT(*) AS total_pets FROM pets;

-- count the number of boops in the database
SELECT COUNT(id) AS total_boops FROM boops;

-- the column name we pass to the count function is irrelevant 
SELECT COUNT(pet_id) AS mystery FROM boops;

-- find the average age of all pets in the database
SELECT AVG(age) AS average_age FROM pets;

-- counting pets per user_id
SELECT user_id, COUNT(*) AS number_of_pets
FROM pets
GROUP BY user_id;

-- finding average age of pets per user
SELECT user_id, AVG(age) AS average_age
FROM pets
GROUP BY user_id;

-- using JOIN with GROUP BY
SELECT users.id, users.first_name, COUNT(pets.id) AS number_of_pets
FROM users
LEFT JOIN pets ON users.id = pets.user_id
GROUP BY users.id, users.first_name;

-- Maximum and Minimum Ages
SELECT
MAX(age) AS oldest_age,
MIN(age) AS youngest_age
FROM pets;


SELECT * FROM users LEFT JOIN pets
ON users.id = pets.user_id;

INSERT INTO pets
(name, type, age, is_derpy, user_id)
VALUES
("Spanky", "Dog", 3, 1, 3),
("Daisy", "Dog", 6, 1, 2),
("Mylo", "Dog", 4, 1, 1),
("Clay", "Dog", 3, 1, 5);

INSERT INTO users
(first_name, last_name, email, password)
VALUES
("Kermit", "the Frog", "kermit@thefrog.com", "itsnoteasybeingreen");

INSERT INTO boops
(user_id, pet_id)
VALUES
(1, 1),
(2, 6),
(3, 7),
(5, 8),
(6, 9),
(1, 1),
(2, 6),
(3, 7),
(5, 8),
(6, 9),
(1, 1),
(2, 6),
(3, 7);

SELECT users.first_name, users.last_name, pets.name FROM users
JOIN boops
ON users.id = boops.user_id
JOIN pets
ON pets.id = boops.pet_id;
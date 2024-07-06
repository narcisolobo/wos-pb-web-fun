-- Create a user
INSERT INTO users (first_name, last_name, email, password)
VALUES ("Kermit", "the Frog", "kermit@thefrog.com", "1234abcd");

-- Read all users
SELECT * FROM users;

-- Read specified columns from one user
SELECT first_name, last_name, email
FROM users
WHERE id = 2;

-- Update specified columns for one user
UPDATE users
SET email = "gonzo@yahoo.com"
WHERE id = 2;

-- Delete one user
DELETE from users
WHERE id = 3;

-- Create a pet
INSERT INTO pets (name, type, age, user_id)
VALUES ("Cthulhu", "Octopus", 11, 4);

-- Read all pets
SELECT * FROM pets;

-- Join statement
-- Reads all owners and their pets
SELECT * FROM users
JOIN pets
ON users.id = pets.user_id;

-- Join statement
-- Reads all owners and their pets
-- AND all users whether or not they have a pet
SELECT * FROM users
LEFT JOIN pets
ON users.id = pets.user_id;

-- Update specified column for one pet
UPDATE pets
SET is_derpy = 1
WHERE id = 4;

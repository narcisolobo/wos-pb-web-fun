INSERT INTO cars_db.makes (name) VALUES 
('Toyota'),
('Honda'),
('Ford'),
('Chevrolet'),
('BMW');

-- Get the last inserted make IDs


-- Insert models for each make
INSERT INTO cars_db.models (name, make_id) VALUES 
('Camry', 4),
('Corolla', 4),
('Rav4', 4),
('Accord', 3),
('Civic', 3),
('CR-V', 3),
('F-150', 2),
('Mustang', 2),
('Explorer', 2),
('Silverado', 1),
('Tahoe', 1),
('Malibu', 1),
('3 Series', 5),
('5 Series', 5),
('X5', 5);
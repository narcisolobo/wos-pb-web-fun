-- Seed script for vinyl_countdown_db

USE vinyl_countdown_db;

-- Insert collectors
INSERT INTO collectors (username, email) VALUES
('accidentalshadow', 'accidentalshadow@example.com'),
('lemongrassgoalie', 'lemongrassgoalie@example.com'),
('elaboratecat', 'elaboratecat@example.com'),
('frizzymaiden', 'frizzymaiden@example.com'),
('rashbuzz', 'rashbuzz@example.com'),
('hootvessels', 'hootvessels@example.com'),
('pepperears', 'pepperears@example.com'),
('sunnyjersey', 'sunnyjersey@example.com'),
('resolutionrose', 'resolutionrose@example.com'),
('testyfresh', 'testyfresh@example.com');

-- Insert records (5 records per collector)
INSERT INTO records (title, artist, release_date, user_id) VALUES
('Abbey Road', 'The Beatles', '1969-09-26', 1),
('Dark Side of the Moon', 'Pink Floyd', '1973-03-01', 1),
('Thriller', 'Michael Jackson', '1982-11-30', 1),
('Back in Black', 'AC/DC', '1980-07-25', 1),
('Rumours', 'Fleetwood Mac', '1977-02-04', 1),

('The Wall', 'Pink Floyd', '1979-11-30', 2),
('Hotel California', 'Eagles', '1976-12-08', 2),
('The Joshua Tree', 'U2', '1987-03-09', 2),
('Led Zeppelin IV', 'Led Zeppelin', '1971-11-08', 2),
('Nevermind', 'Nirvana', '1991-09-24', 2),

('Born to Run', 'Bruce Springsteen', '1975-08-25', 3),
('Purple Rain', 'Prince', '1984-06-25', 3),
('Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles', '1967-05-26', 3),
('The Beatles (White Album)', 'The Beatles', '1968-11-22', 3),
('The Rise and Fall of Ziggy Stardust', 'David Bowie', '1972-06-16', 3),

('Appetite for Destruction', 'Guns N\' Roses', '1987-07-21', 4),
('A Night at the Opera', 'Queen', '1975-11-21', 4),
('London Calling', 'The Clash', '1979-12-14', 4),
('Bat Out of Hell', 'Meat Loaf', '1977-10-21', 4),
('Goodbye Yellow Brick Road', 'Elton John', '1973-10-05', 4),

('The Doors', 'The Doors', '1967-01-04', 5),
('Bridge Over Troubled Water', 'Simon & Garfunkel', '1970-01-26', 5),
('Achtung Baby', 'U2', '1991-11-18', 5),
('Horses', 'Patti Smith', '1975-11-10', 5),
('Blue', 'Joni Mitchell', '1971-06-22', 5),

('Born in the USA', 'Bruce Springsteen', '1984-06-04', 6),
('Who\'s Next', 'The Who', '1971-08-14', 6),
('Highway to Hell', 'AC/DC', '1979-07-27', 6),
('OK Computer', 'Radiohead', '1997-05-21', 6),
('The Velvet Underground & Nico', 'The Velvet Underground', '1967-03-12', 6),

('Rumours', 'Fleetwood Mac', '1977-02-04', 7),
('In the Wee Small Hours', 'Frank Sinatra', '1955-04-25', 7),
('Sticky Fingers', 'The Rolling Stones', '1971-04-23', 7),
('Led Zeppelin II', 'Led Zeppelin', '1969-10-22', 7),
('Hunky Dory', 'David Bowie', '1971-12-17', 7),

('Abbey Road', 'The Beatles', '1969-09-26', 8),
('The Dark Side of the Moon', 'Pink Floyd', '1973-03-01', 8),
('Thriller', 'Michael Jackson', '1982-11-30', 8),
('Back in Black', 'AC/DC', '1980-07-25', 8),
('The Rise and Fall of Ziggy Stardust', 'David Bowie', '1972-06-16', 8),

('Purple Rain', 'Prince', '1984-06-25', 9),
('Hotel California', 'Eagles', '1976-12-08', 9),
('Born to Run', 'Bruce Springsteen', '1975-08-25', 9),
('The Wall', 'Pink Floyd', '1979-11-30', 9),
('The Joshua Tree', 'U2', '1987-03-09', 9),

('Led Zeppelin IV', 'Led Zeppelin', '1971-11-08', 10),
('A Night at the Opera', 'Queen', '1975-11-21', 10),
('Nevermind', 'Nirvana', '1991-09-24', 10),
('Appetite for Destruction', 'Guns N\' Roses', '1987-07-21', 10),
('Blue', 'Joni Mitchell', '1971-06-22', 10);

-- Insert ratings (at least 5 ratings per collector)
INSERT INTO ratings (collector_id, record_id, rating) VALUES
(1, 1, 5),
(1, 2, 4),
(1, 3, 5),
(1, 4, 4),
(1, 5, 5),

(2, 6, 5),
(2, 7, 4),
(2, 8, 5),
(2, 9, 3),
(2, 10, 4),

(3, 11, 5),
(3, 12, 4),
(3, 13, 4),
(3, 14, 3),
(3, 15, 5),

(4, 16, 5),
(4, 17, 5),
(4, 18, 4),
(4, 19, 4),
(4, 20, 5),

(5, 21, 4),
(5, 22, 5),
(5, 23, 4),
(5, 24, 5),
(5, 25, 3),

(6, 26, 4),
(6, 27, 5),
(6, 28, 3),
(6, 29, 5),
(6, 30, 4),

(7, 31, 5),
(7, 32, 5),
(7, 33, 4),
(7, 34, 5),
(7, 35, 4),

(8, 36, 5),
(8, 37, 4),
(8, 38, 5),
(8, 39, 4),
(8, 40, 3),

(9, 41, 5),
(9, 42, 4),
(9, 43, 5),
(9, 44, 5),
(9, 45, 4),

(10, 46, 5),
(10, 47, 4),
(10, 48, 4),
(10, 49, 3),
(10, 50, 5);

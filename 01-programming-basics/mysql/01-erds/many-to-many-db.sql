-- Insert statements for the users table
INSERT INTO users (username) VALUES
('michael-scott'),
('dwight-schrute'),
('jim-halpert'),
('pam-beesly'),
('ryan-howard'),
('andy-bernard'),
('kelly-kapoor'),
('angela-martin'),
('oscar-martinez'),
('phyllis-vance');

-- Insert statements for the posts table
INSERT INTO posts (content, user_id) VALUES
('That''s what she said.', 1),
('Bears. Beets. Battlestar Galactica.', 2),
('I''d rather be feared than loved.', 3),
('Pam, will you marry me?', 4),
('WUPHF.com is the future.', 5),
('I''m the Nard Dog.', 6),
('I''m totally going to Yale.', 7),
('I hate the sound of your voice.', 8),
('Actually, it''s pronounced "Pasta".', 9),
('That''s what she said. - Oscar Martinez', 10);

-- Insert statements for the likes table
INSERT INTO likes (user_id, post_id) VALUES
(1, 2),
(2, 4),
(3, 1),
(4, 3),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

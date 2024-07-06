-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: vinyl_countdown_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collectors`
--

DROP TABLE IF EXISTS `collectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collectors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collectors`
--

LOCK TABLES `collectors` WRITE;
/*!40000 ALTER TABLE `collectors` DISABLE KEYS */;
INSERT INTO `collectors` VALUES (1,'accidentalshadow','accidentalshadow@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(2,'lemongrassgoalie','lemongrassgoalie@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(3,'elaboratecat','elaboratecat@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(4,'frizzymaiden','frizzymaiden@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(5,'rashbuzz','rashbuzz@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(6,'hootvessels','hootvessels@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(7,'pepperears','pepperears@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(8,'sunnyjersey','sunnyjersey@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(9,'resolutionrose','resolutionrose@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27'),(10,'testyfresh','testyfresh@example.com','2024-07-05 13:38:27','2024-07-05 13:38:27');
/*!40000 ALTER TABLE `collectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `collector_id` int NOT NULL,
  `record_id` int NOT NULL,
  `rating` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_collectors_to_ratings_idx` (`collector_id`),
  KEY `fk_records_to_ratings_idx` (`record_id`),
  CONSTRAINT `fk_collectors_to_ratings` FOREIGN KEY (`collector_id`) REFERENCES `collectors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_records_to_ratings` FOREIGN KEY (`record_id`) REFERENCES `records` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,1,1,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(2,1,2,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(3,1,3,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(4,1,4,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(5,1,5,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(6,2,6,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(7,2,7,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(8,2,8,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(9,2,9,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(10,2,10,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(11,3,11,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(12,3,12,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(13,3,13,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(14,3,14,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(15,3,15,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(16,4,16,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(17,4,17,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(18,4,18,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(19,4,19,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(20,4,20,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(21,5,21,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(22,5,22,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(23,5,23,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(24,5,24,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(25,5,25,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(26,6,26,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(27,6,27,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(28,6,28,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(29,6,29,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(30,6,30,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(31,7,31,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(32,7,32,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(33,7,33,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(34,7,34,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(35,7,35,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(36,8,36,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(37,8,37,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(38,8,38,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(39,8,39,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(40,8,40,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(41,9,41,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(42,9,42,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(43,9,43,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(44,9,44,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(45,9,45,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(46,10,46,5,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(47,10,47,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(48,10,48,4,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(49,10,49,3,'2024-07-05 13:38:27','2024-07-05 13:38:27'),(50,10,50,5,'2024-07-05 13:38:27','2024-07-05 13:38:27');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `artist` varchar(45) NOT NULL,
  `release_date` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `collector_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_collectors_to_records_idx` (`collector_id`),
  CONSTRAINT `fk_collectors_to_records` FOREIGN KEY (`collector_id`) REFERENCES `collectors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (1,'Abbey Road','The Beatles','1969-09-26','2024-07-05 13:38:27','2024-07-05 13:38:27',1),(2,'Dark Side of the Moon','Pink Floyd','1973-03-01','2024-07-05 13:38:27','2024-07-05 13:38:27',1),(3,'Thriller','Michael Jackson','1982-11-30','2024-07-05 13:38:27','2024-07-05 13:38:27',1),(4,'Back in Black','AC/DC','1980-07-25','2024-07-05 13:38:27','2024-07-05 13:38:27',1),(5,'Rumours','Fleetwood Mac','1977-02-04','2024-07-05 13:38:27','2024-07-05 13:38:27',1),(6,'The Wall','Pink Floyd','1979-11-30','2024-07-05 13:38:27','2024-07-05 13:38:27',2),(7,'Hotel California','Eagles','1976-12-08','2024-07-05 13:38:27','2024-07-05 13:38:27',2),(8,'The Joshua Tree','U2','1987-03-09','2024-07-05 13:38:27','2024-07-05 13:38:27',2),(9,'Led Zeppelin IV','Led Zeppelin','1971-11-08','2024-07-05 13:38:27','2024-07-05 13:38:27',2),(10,'Nevermind','Nirvana','1991-09-24','2024-07-05 13:38:27','2024-07-05 13:38:27',2),(11,'Born to Run','Bruce Springsteen','1975-08-25','2024-07-05 13:38:27','2024-07-05 13:38:27',3),(12,'Purple Rain','Prince','1984-06-25','2024-07-05 13:38:27','2024-07-05 13:38:27',3),(13,'Sgt. Pepper\'s Lonely Hearts Club Band','The Beatles','1967-05-26','2024-07-05 13:38:27','2024-07-05 13:38:27',3),(14,'The Beatles (White Album)','The Beatles','1968-11-22','2024-07-05 13:38:27','2024-07-05 13:38:27',3),(15,'The Rise and Fall of Ziggy Stardust','David Bowie','1972-06-16','2024-07-05 13:38:27','2024-07-05 13:38:27',3),(16,'Appetite for Destruction','Guns N\' Roses','1987-07-21','2024-07-05 13:38:27','2024-07-05 13:38:27',4),(17,'A Night at the Opera','Queen','1975-11-21','2024-07-05 13:38:27','2024-07-05 13:38:27',4),(18,'London Calling','The Clash','1979-12-14','2024-07-05 13:38:27','2024-07-05 13:38:27',4),(19,'Bat Out of Hell','Meat Loaf','1977-10-21','2024-07-05 13:38:27','2024-07-05 13:38:27',4),(20,'Goodbye Yellow Brick Road','Elton John','1973-10-05','2024-07-05 13:38:27','2024-07-05 13:38:27',4),(21,'The Doors','The Doors','1967-01-04','2024-07-05 13:38:27','2024-07-05 13:38:27',5),(22,'Bridge Over Troubled Water','Simon & Garfunkel','1970-01-26','2024-07-05 13:38:27','2024-07-05 13:38:27',5),(23,'Achtung Baby','U2','1991-11-18','2024-07-05 13:38:27','2024-07-05 13:38:27',5),(24,'Horses','Patti Smith','1975-11-10','2024-07-05 13:38:27','2024-07-05 13:38:27',5),(25,'Blue','Joni Mitchell','1971-06-22','2024-07-05 13:38:27','2024-07-05 13:38:27',5),(26,'Born in the USA','Bruce Springsteen','1984-06-04','2024-07-05 13:38:27','2024-07-05 13:38:27',6),(27,'Who\'s Next','The Who','1971-08-14','2024-07-05 13:38:27','2024-07-05 13:38:27',6),(28,'Highway to Hell','AC/DC','1979-07-27','2024-07-05 13:38:27','2024-07-05 13:38:27',6),(29,'OK Computer','Radiohead','1997-05-21','2024-07-05 13:38:27','2024-07-05 13:38:27',6),(30,'The Velvet Underground & Nico','The Velvet Underground','1967-03-12','2024-07-05 13:38:27','2024-07-05 13:38:27',6),(31,'Rumours','Fleetwood Mac','1977-02-04','2024-07-05 13:38:27','2024-07-05 13:38:27',7),(32,'In the Wee Small Hours','Frank Sinatra','1955-04-25','2024-07-05 13:38:27','2024-07-05 13:38:27',7),(33,'Sticky Fingers','The Rolling Stones','1971-04-23','2024-07-05 13:38:27','2024-07-05 13:38:27',7),(34,'Led Zeppelin II','Led Zeppelin','1969-10-22','2024-07-05 13:38:27','2024-07-05 13:38:27',7),(35,'Hunky Dory','David Bowie','1971-12-17','2024-07-05 13:38:27','2024-07-05 13:38:27',7),(36,'Abbey Road','The Beatles','1969-09-26','2024-07-05 13:38:27','2024-07-05 13:38:27',8),(37,'The Dark Side of the Moon','Pink Floyd','1973-03-01','2024-07-05 13:38:27','2024-07-05 13:38:27',8),(38,'Thriller','Michael Jackson','1982-11-30','2024-07-05 13:38:27','2024-07-05 13:38:27',8),(39,'Back in Black','AC/DC','1980-07-25','2024-07-05 13:38:27','2024-07-05 13:38:27',8),(40,'The Rise and Fall of Ziggy Stardust','David Bowie','1972-06-16','2024-07-05 13:38:27','2024-07-05 13:38:27',8),(41,'Purple Rain','Prince','1984-06-25','2024-07-05 13:38:27','2024-07-05 13:38:27',9),(42,'Hotel California','Eagles','1976-12-08','2024-07-05 13:38:27','2024-07-05 13:38:27',9),(43,'Born to Run','Bruce Springsteen','1975-08-25','2024-07-05 13:38:27','2024-07-05 13:38:27',9),(44,'The Wall','Pink Floyd','1979-11-30','2024-07-05 13:38:27','2024-07-05 13:38:27',9),(45,'The Joshua Tree','U2','1987-03-09','2024-07-05 13:38:27','2024-07-05 13:38:27',9),(46,'Led Zeppelin IV','Led Zeppelin','1971-11-08','2024-07-05 13:38:27','2024-07-05 13:38:27',10),(47,'A Night at the Opera','Queen','1975-11-21','2024-07-05 13:38:27','2024-07-05 13:38:27',10),(48,'Nevermind','Nirvana','1991-09-24','2024-07-05 13:38:27','2024-07-05 13:38:27',10),(49,'Appetite for Destruction','Guns N\' Roses','1987-07-21','2024-07-05 13:38:27','2024-07-05 13:38:27',10),(50,'Blue','Joni Mitchell','1971-06-22','2024-07-05 13:38:27','2024-07-05 13:38:27',10);
/*!40000 ALTER TABLE `records` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-05 14:10:55

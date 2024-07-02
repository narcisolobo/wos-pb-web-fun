-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cars_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cars_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cars_db` DEFAULT CHARACTER SET utf8 ;
USE `cars_db` ;

-- -----------------------------------------------------
-- Table `cars_db`.`makes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cars_db`.`makes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cars_db`.`models`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cars_db`.`models` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `make_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_models_makes_idx` (`make_id` ASC) VISIBLE,
  CONSTRAINT `fk_models_makes`
    FOREIGN KEY (`make_id`)
    REFERENCES `cars_db`.`makes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

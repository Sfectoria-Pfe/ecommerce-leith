-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pfe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pfe
-- -----------------------------------------------------
DROP database if EXISTS pfe ;
CREATE database pfe ;
USE `pfe` ;

-- -----------------------------------------------------
-- Table `pfe`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NULL DEFAULT NULL,
  `lastName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pfe`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(255) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `imageURL` LONGTEXT NULL DEFAULT NULL,
  `userId` INT NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `category` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  CONSTRAINT `posts_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `pfe`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pfe`.`reactType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`reactType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pfe`.`reacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`reacts` (
  `posts_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `reactType_id` INT NOT NULL,
  INDEX `fk_reacts_posts_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_reacts_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_reacts_reactType1_idx` (`reactType_id` ASC) VISIBLE,
  PRIMARY KEY (`posts_id`, `users_id`),
  CONSTRAINT `fk_reacts_posts`
    FOREIGN KEY (`posts_id`)
    REFERENCES `pfe`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reacts_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pfe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reacts_reactType1`
    FOREIGN KEY (`reactType_id`)
    REFERENCES `pfe`.`reactType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



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
  `id` INT NOT NULL,
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
  `id` INT NOT NULL,
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
  `idreactType` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255) NULL,
  PRIMARY KEY (`idreactType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pfe`.`reacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`reacts` (
  `posts_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `reactType_idreactType` INT NOT NULL,
  INDEX `fk_reacts_posts_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_reacts_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_reacts_reactType1_idx` (`reactType_idreactType` ASC) VISIBLE,
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
    FOREIGN KEY (`reactType_idreactType`)
    REFERENCES `pfe`.`reactType` (`idreactType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `pfe` ;

-- -----------------------------------------------------
-- Table `pfe`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`users` (
  `id` INT NOT NULL,
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
  `id` INT NOT NULL,
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
-- Table `pfe`.`reacttype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`reacttype` (
  `idreactType` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idreactType`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pfe`.`reacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pfe`.`reacts` (
  `posts_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `reacttype_idreactType` INT NOT NULL,
  PRIMARY KEY (`posts_id`, `users_id`, `reacttype_idreactType`),
  INDEX `fk_reacts_posts_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_reacts_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_reacts_reacttype1_idx` (`reacttype_idreactType` ASC) VISIBLE,
  CONSTRAINT `fk_reacts_posts`
    FOREIGN KEY (`posts_id`)
    REFERENCES `pfe`.`posts` (`id`),
  CONSTRAINT `fk_reacts_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pfe`.`users` (`id`),
  CONSTRAINT `fk_reacts_reacttype1`
    FOREIGN KEY (`reacttype_idreactType`)
    REFERENCES `pfe`.`reacttype` (`idreactType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

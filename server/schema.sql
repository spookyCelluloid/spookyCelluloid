-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---

DROP DATABASE IF EXISTS `spookyCelluloid`;

CREATE DATABASE `spookyCelluloid`;

USE spookyCelluloid;

DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `password` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Business_profile'
-- 
-- ---

DROP TABLE IF EXISTS `Business_profile`;
    
CREATE TABLE `Business_profile` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `ownership` VARCHAR(25) NOT NULL DEFAULT 'NULL',
  `dietary_options` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `social_events` VARCHAR(3) NOT NULL DEFAULT 'NO',
  `number_of_staff` INTEGER(3) NOT NULL DEFAULT 0,
  `capacity` INTEGER(4) NOT NULL DEFAULT 0,
  `Medicare` VARCHAR(3) NOT NULL DEFAULT 'YES',
  `average_years_of_experience` INTEGER(2) NOT NULL DEFAULT 0,
  `facility_name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `description` VARCHAR(500) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Specialties`;
    
CREATE TABLE `Specialties` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(35) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Comments'
-- 
-- ---

DROP TABLE IF EXISTS `Comments`;
    
CREATE TABLE `Comments` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `rating` INTEGER(1) NOT NULL,
  `id_User` INTEGER NULL DEFAULT NULL,
  `id_business_profile` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Business_specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Business_specialties`;
    
CREATE TABLE `Business_specialties` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_specialties` INTEGER NULL DEFAULT 0,
  `id_business_profile` INTEGER NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Comments` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Comments` ADD FOREIGN KEY (id_business_profile) REFERENCES `Business_profile` (`id`);
ALTER TABLE `Business_specialties` ADD FOREIGN KEY (id_specialties) REFERENCES `Specialties` (`id`);
ALTER TABLE `Business_specialties` ADD FOREIGN KEY (id_business_profile) REFERENCES `Business_profile` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Comments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Business_profile` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Business_specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `User` (`username`,`password`,`first_name`,`last_name`,`email`) VALUES
('123','123','Robin','Kuehn','Robin@me.com');

INSERT INTO `Business_profile` (`ownership`,`dietary_options`,`social_events`,`number_of_staff`,`capacity`,`Medicare`,`average_years_of_experience`,`facility_name`,`description`) VALUES
('Government','Vegetarian Kosher','Yes',30,100,'Yes',5,'Golden Gate Nursing Home', 'we are the cleanest nursing home on earth!!!! just come!!!');

INSERT INTO `Comments` (`content`,`rating`,`id_User`,`id_business_profile`) VALUES
('I enjoyed spending the afternoon in the pool!!',5,1,1);

INSERT INTO `Specialties` (`name`) VALUES
('Alzheimers');

INSERT INTO `Business_specialties` (`id_specialties`,`id_business_profile`) VALUES
(1,1);

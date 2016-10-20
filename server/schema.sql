-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `password` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `first name` VARCHAR(50) NULL DEFAULT NULL,
  `last name` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Comments'
-- 
-- ---

DROP TABLE IF EXISTS `Comments`;
    
CREATE TABLE `Comments` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `rating` INTEGER(1) NOT NULL,
  `id_User` INTEGER NULL DEFAULT NULL,
  `id_business profile` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'business profile'
-- 
-- ---

DROP TABLE IF EXISTS `business profile`;
    
CREATE TABLE `business profile` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `ownership` VARCHAR NOT NULL DEFAULT 'NULL',
  `dietary options` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `social events` VARCHAR(3) NOT NULL DEFAULT 'NULL',
  `number of staff` INTEGER(3) NOT NULL DEFAULT NULL,
  `capacity` INTEGER(4) NOT NULL DEFAULT NULL,
  `Medicare` VARCHAR(3) NOT NULL DEFAULT 'NULL',
  `average years of experience` INTEGER(2) NOT NULL DEFAULT NULL,
  `facility name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'specialties'
-- 
-- ---

DROP TABLE IF EXISTS `specialties`;
    
CREATE TABLE `specialties` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(35) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Business Specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Business Specialties`;
    
CREATE TABLE `Business Specialties` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_specialties` INTEGER NULL DEFAULT NULL,
  `id_business profile` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Comments` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Comments` ADD FOREIGN KEY (id_business profile) REFERENCES `business profile` (`id`);
ALTER TABLE `Business Specialties` ADD FOREIGN KEY (id_specialties) REFERENCES `specialties` (`id`);
ALTER TABLE `Business Specialties` ADD FOREIGN KEY (id_business profile) REFERENCES `business profile` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Comments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `business profile` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Business Specialties` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `User` (`username`,`password`,`first name`,`last name`,`email`) VALUES
('123','123','Robin','Kuehn','Robin@me.com');
INSERT INTO `Comments` (`content`,`rating`,`id_User`,`id_business profile`) VALUES
('I enjoyed spending the afternoon in the pool!!',5,1,1);
INSERT INTO `business profile` (`ownership`,`dietary options`,`social events`,`number of staff`,`capacity`,`Medicare`,`average years of experience`,`facility name`) VALUES
('Government','Vegetarian Kosher','Yes',30,100,'Yes',5,'Golden Gate Nursing Home');
INSERT INTO `specialties` (`name`) VALUES
('Alzheimers');
INSERT INTO `Business Specialties` (`id_specialties`,`id_business profile`) VALUES
(1,1);

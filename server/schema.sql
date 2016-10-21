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
  `facility_name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `description` VARCHAR(1000) NOT NULL DEFAULT 'NULL',
  `phone_number` VARCHAR(14) NOT NULL DEFAULT 'NULL',
  `address` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `ownership` VARCHAR(25) NOT NULL DEFAULT 'NULL',
  `dietary_options` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `social_events` VARCHAR(3) NOT NULL DEFAULT 'NO',
  `staff_hr` INTEGER(3) NOT NULL DEFAULT 0,
  `capacity` INTEGER(4) NOT NULL DEFAULT 0,
  `Medicare` VARCHAR(3) NOT NULL DEFAULT 'YES',
  `average_years_of_experience` INTEGER(2) NOT NULL DEFAULT 0,
  `cost_per_day` INTEGER(4) NULL,
  `image_url` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Specialties'
-- 
-- ---

DROP TABLE IF EXISTS `Specialties`;
    
CREATE TABLE `Specialties` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Comments'
-- 
-- ---

DROP TABLE IF EXISTS `Comments`;
    
CREATE TABLE `Comments` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(2500) NULL DEFAULT NULL,
  `date` VARCHAR(10) NOT NULL,
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

INSERT INTO `User` (`username`,`password`,`first_name`,`last_name`) VALUES
('max','123','Max','R.'),
('stephanie','123','Stephanie','C.'),
('jennifer','123','Jennifer','H.'),
('blowerof','123','Blowerof','W.');

INSERT INTO `Business_profile` (`ownership`,`dietary_options`,`social_events`,`staff_hr`,`capacity`,`Medicare`,`average_years_of_experience`,`facility_name`,`description`, `phone_number`, `address`, `cost_per_day`,`image_url`) VALUES
('For-profit','Vegetarian Kosher','Yes',1.73,39,'Yes',5,'Bancroft Convalescent Hospital', 'Well known for top quality care since 1962, Bancroft Convalescent Hospital is “Simply the Best. Whatever it Takes!” The facility provides skilled care which meets a wide variety of needs. Care can be provided for post-hospital rehabilitation on a short-term basis, or for those who may be totally dependent, requiring long-term care.\nOur staff is a happy group who enjoy a cooperative spirit of working together.  They appreciate the small patient assignments which enable them to provide the best possible care.  Please read the testimonial letters and come see for yourself!', '(510) 483-1680', '1475 Bancroft Avenue, San Leandro, California 94577', 310, 'http://www.nursinghomes.com/wp-content/tools/TimThumb.php?src=/wp-content/uploads/property-images/055107/055107__4.jpg&w=800&h=800zc=3'),

('For-profit','Provide meals to meet specific dietary and therapeutic needs, according to physician orders.','Yes',2.85,59,'Yes',3.7,'Linda Mar Care Center', 'Linda Mar Rehabilitation is a skilled nursing facility in sunny Pacifica, California. We provide 24-hour skilled care and rehabilitation services in a comfortable and friendly environment. At Linda Mar Rehabilitation, caring is our main concern. We believe the most effective way to provide compassionate care is to maintain high medical integrity, build a spirit of teamwork among staff, and maintain clean, beautiful surroundings for our patients and their visitors. We strive to make the transition into our facility as seamless as possible by providing each guest with an environment where they feel informed and comfortable. Our team of qualified professionals helps patients recover from surgery, injury, or serious illness. We understand the importance of creating a comfortable and nurturing atmosphere, whether our patients are here for short-term treatment or long-term care.', '(650) 359-4800', '751 San Pedro Terrace Road, Pacifica, California 94044', NULL, 'http://www.lucilleslist.com/sites/default/files/styles/community_image/public/communities_images/LindaMarSM2_13.jpg?itok=uiACQf48');


INSERT INTO `Comments` (`content`,`rating`,`id_User`,`id_business_profile`,`date`) VALUES
('This review is long overdue. Over a half a year ago, my mother spent six weeks at Pacifica Nursing and Rehab after having spinal surgery. Before she was released from the hospital, I had been reading Yelp reviews of the other skilled nursing facilities in the area, and I was horrified by the Dickensian horrors I read about.\nAt that point, it was unclear whether Pacifica Nursing and Rehab would have a vacant bed to take my mom, so I can\'t tell you what a huge relief it was when her health care provider was able to get her into this place, and not one of its awful competitors.\nThe staff here are amazing people, and seeing everything they did for my mother, I have learned to truly respect and revere certified nursing assistants. CNAs don\'t get paid enough, yet they are truly the unsung heroes of this industry. And Pacifica Nursing and Rehab has the nicest, most hard-working CNAs you could ever hope to meet.\nAlso, special shout out to Amy in physical therapy. My mom was probably the most difficult customer she\'d had in years, but when it was time for mom to come home, Amy gave her a hug and told her how much she had enjoyed working with her.\nIf you have a loved one who needs to spend some time in a SNF, this is the place for them to be.',5,1,1,'10/31/2015'),

('I just spent two weeks here after having my knee replacement.  Living in the city there are hills and most apartment buildings were built in the 1930\'s which has stairs!! In 2014 I found out my right knee was bone on bone.  I knew I was going to have surgery so I spent 2015 looking at options and surgeons.  What I liked was on site physical and occupational therapy. In order for me to have my confidence to return home I had a number of items to check off my list.  This department worked with me every day:  5 days one hour with physical and occupational therapist.  This was so crucial for me to begin my healing process.\nThe team of nurses were awesome!  They were right on top of their game.  They had activities for us in the activity room which was a nice surprise\nespecially the cooking and baking class by Ruby.  I loved the part of getting to know the nurse as individuals and stories that we shared when I would have my 4am Meds and blood work.\nMeals were huge and delicious!!  Being there for two weeks I only saw one breakfast item twice!\nI am now back home feeling more confident and able to take care of myself in a safe environment.',5,2,1,'05/17/2016'),

('The facility is very nice, clean and has nice friendly people and nurses as well.  My friends grandmother was under comfort care and needed a certain drug to ease pain.  The reason why I gave 3 stars instead of 5 or 4 was because of unskilled nurses and a lack of equipment.  The nurses are young and I think a little unskilled, not to say that all young nurses are unskilled and that old nurses are skilled but these nurses here are unskilled and young -- 3 nurses helped and was was unfamiliar with the equipment and was receiving instructions on the phone while dealing with the equipment.(& still did not fix the problem with the equipment).\n\nAlso, this place is a little hard to find--especially in the dark (2 of our GPS\'s could not find the center).',3,3,2,'07/30/2013'),

('If you care about your loved ones read below:\n\nAs a former employee, I\'ve seen firsthand the issues this facility has. I have no doubts that any of the previous reviews and complaints are true because I\'ve seen it happen.\n\nYour loved one will not be turned frequently if they need to be. This is frustrating for nurses because we care for the wounds and they just seem to get worse. And if your loved one ever gets changed it won\'t be done properly. Almost everyone here develops incontinent dermatitis. Oh yeah and if you have a foley, be prepared to get a UTI. Everyone here gets a UTI. I\'ve seen poop stains and chunks on foleys literally right outside the urethral opening.\n\nI\'ve seen missed IV antibiotics. Oh yeah missed medications, that happens allllll the time. Meds being documented that they are being given but really aren\'t. Incorrect insulin and heparin doses being given because nurses are incompetent at math and don\'t understand they come in ratios.\n\nMissed wound care? Sometimes that happens too. If your loved one has a wound vac it may not be changed. Yep it\'ll just pool up with blood and cause sepsis. Oh and like I said previously, infection infection infections. You\'ll probably get one if you\'re at risk here with any kind of wound.\n\nThen you have the false documentations and coverups. Don\'t get me wrong. The nurses try their best. But in this industry of nursing homes or post acute care facilities, they are horribly regulated. The amount of work put onto the nurses here is ridiculous. Just ask any of the families of the residents that have been here a few months. They stay longer than 80% of the nurses here. If you have nurses of all types constantly rotating in and out, you have failed as a leader and this directly falls on the director of nursing here. As long as it\'s the snake Alicia. You better send your family elsewhere. They eat nurses. They set them up to fail. And your loved one pays the price.\n\nDo yourself a favor and hire in home care giving. Nursing homes are poorly regulated. But if you have to, do some research and find the rare facilities that do take care of their nurses which lead to proper nursing care. Just stay away from this place.',1,4,2,'12/31/2015');

INSERT INTO `Specialties` (`name`) VALUES
('Fractured Hips'),
('Strokes'),
('Colostomy Care'),
('Catheter Care'),
('IV Therapy'),
('Dressings and Care for Pressure Ulcers'),
('Tube Feedings'),
('Oxygen and Respiratory Therapy'),
('Care During Final Stages of Illness Such as Cancer'),
('Care for Surgical Wounds'),
('Dementia Care'),
('Illiostomy'),
('Diabetic Care'),
('Respite stays');

INSERT INTO `Business_specialties` (`id_specialties`,`id_business_profile`) VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(3,2),
(4,2),
(5,2),
(7,2),
(8,2),
(11,2),
(12,2),
(13,2),
(14,2);

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
  `description` VARCHAR(3500) NOT NULL DEFAULT 'NULL',
  `phone_number` VARCHAR(14) NOT NULL DEFAULT 'NULL',
  `street` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `city` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `state` VARCHAR(20) NOT NULL DEFAULT 'NULL',
  `zip` VARCHAR(10) NOT NULL DEFAULT 'NULL',
  `ownership` VARCHAR(25) NOT NULL DEFAULT 'NULL',
  `dietary_options` VARCHAR(250) NULL DEFAULT 'NULL',
  `social_events` VARCHAR(3) NOT NULL DEFAULT 'NO',
  `staff_hr` INTEGER(3) NOT NULL DEFAULT 0,
  `capacity` INTEGER(4) NOT NULL DEFAULT 0,
  `Medicare` VARCHAR(3) NOT NULL DEFAULT 'Yes',
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
-- Table 'Reviews'
--
-- ---

DROP TABLE IF EXISTS `Reviews`;

CREATE TABLE `Reviews` (
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

ALTER TABLE `Reviews` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (id_business_profile) REFERENCES `Business_profile` (`id`);
ALTER TABLE `Business_specialties` ADD FOREIGN KEY (id_specialties) REFERENCES `Specialties` (`id`);
ALTER TABLE `Business_specialties` ADD FOREIGN KEY (id_business_profile) REFERENCES `Business_profile` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
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


INSERT INTO `Business_profile` (`ownership`,`dietary_options`,`social_events`,`staff_hr`,`capacity`,`Medicare`,`average_years_of_experience`,`facility_name`,`description`, `phone_number`, `street`, `city`, `state`, `zip`, `cost_per_day`,`image_url`) VALUES
('For-profit','Vegetarian Kosher','Yes',1.73,39,'Yes',5,'Bancroft Convalescent Hospital', 'Well known for top quality care since 1962, Bancroft Convalescent Hospital is “Simply the Best. Whatever it Takes!” The facility provides skilled care which meets a wide variety of needs. Care can be provided for post-hospital rehabilitation on a short-term basis, or for those who may be totally dependent, requiring long-term care.\nOur staff is a happy group who enjoy a cooperative spirit of working together.  They appreciate the small patient assignments which enable them to provide the best possible care.  Please read the testimonial letters and come see for yourself!', '(510) 483-1680', '1475 Bancroft Avenue', 'San Leandro', 'California', '94577', 310, 'http://www.nursinghomes.com/wp-content/tools/TimThumb.php?src=/wp-content/uploads/property-images/055107/055107__4.jpg&w=800&h=800zc=3'),

('For-profit','Provide meals to meet specific dietary and therapeutic needs, according to physician orders.','Yes',2.85,59,'Yes',3.7,'Linda Mar Care Center', 'Linda Mar Rehabilitation is a skilled nursing facility in sunny Pacifica, California. We provide 24-hour skilled care and rehabilitation services in a comfortable and friendly environment. At Linda Mar Rehabilitation, caring is our main concern. We believe the most effective way to provide compassionate care is to maintain high medical integrity, build a spirit of teamwork among staff, and maintain clean, beautiful surroundings for our patients and their visitors. We strive to make the transition into our facility as seamless as possible by providing each guest with an environment where they feel informed and comfortable. Our team of qualified professionals helps patients recover from surgery, injury, or serious illness. We understand the importance of creating a comfortable and nurturing atmosphere, whether our patients are here for short-term treatment or long-term care.', '(650) 359-4800', '751 San Pedro Terrace Road', 'Pacifica', 'California', '94044', NULL, 'http://www.lucilleslist.com/sites/default/files/styles/community_image/public/communities_images/LindaMarSM2_13.jpg?itok=uiACQf48'),

('Non-profit','Variety of freshly prepared entrees, fine and casual dining options with waitstaff service, and facility hosted cocktail events.','Yes',2.70,55,'Yes',5,'San Francisco Towers', 'Welcome to San Francisco Towers, the city’s most complete, premier senior living community. Yes, this is world-class living, but more importantly this is a true community where like-minded residents are just part of your life and lifestyle. In fact, residents say it’s their neighbors who make living here so wonderfully special. Uniquely, San Francisco Towers is the shining reflection of why everyone’s favorite city is host to everyone’s favorite senior living community: cultured, worldly, special, personable, convenient, rewarding, and handsomely profiled with a gentle smile and spirit that welcomes both current and new residents alike. And while the living and lifestyle are remarkable, the assurance of healthier care and wellness is an important ingredient. We are, after all, a recognized and leading CCRC Life Care and Continuing Care community with optional healthcare and financing choices that alleviate worry for residents and their families. San Francisco Towers. The life you want, in the city you love.', '(415) 447-5527', '1661 Pine Street', 'San Francisco', 'California', '94109', NULL, 'http://spiritlivinggroup.com/wp-content/uploads/2011/07/Projects-Background-Page-San-Francisco-Towers-High-Res1-480x375.jpg'),

('Non-Profit', 'Kosher, vegetarian, low sugar, low sodium, room service', 'Yes', 0, 159, 'No', 4, 'Marymount Greenhills Retirement Center', 'Offering assisted living and independent living services, Marymount Greenhills Retirement Center gives you a great mix of services and amenities in a caring community. Assisted living offers a warm, supportive, and nuturing atmosphere for individuals who require some help but still want to keep their self-reliance. Why choose assisted living? Studies reveal that living near peers and participating in social activities leads to a more fulfilling life. With assisted living, you\'ll find senior-friendly living options and a dedicated staff. Communities have additional services that include 24-hour supervision and security, emergency response systems, access to licensed nursing care, chef-prepared meals, and assistance with grooming, dressing, and bathing. Housekeeping, laundry, social programs, and local transportation are usually provided, too. This community, a comprehensive independent living community, allows you to do as you wish, when you wish, but without the burdens of home ownership that can tie you down and take up your time. Serving both individuals and couples, these senior communities are also known as senior apartments, retirement villages, and communities for 55 and older. Residents stay in private apartments or individual homes with a variety of community amenities, services, and programs tailored specifically for seniors. Your personal belongings, such as furniture and favorite mementos, can move to your new home with you. With maintenance, groundskeeping, and housekeeping taken care of, seniors can focus on goals and passions instead of the daily demands of home ownership. Because independent living communities are intended for older adults who need little or no assistance, most do not offer medical care or supervision. Community services and amenities usually include fitness clubs, dining facilities, swimming pools, golf courses, hiking trails, social events, and more. Marymount Greenhills Retirement Center provides a low-maintenance lifestyle and the assistance seniors need to enjoy retirement. With comprehensive assisted living and independent living services, and with a caring environment, seniors can feel relaxed and secure. An assisted living community provides help when necessary with the goal of supplying the services required to stay as autonomous as possible. With independent living, you can do as you wish, when you wish, but without the burdens of home ownership that can take up your time. Call for more information on how you can become part of the Marymount Greenhills Retirement Center community.', '844-305-0101', 'Broadway Ave', 'Millbrae', 'CA', '94030', NULL, 'http://www.lucilleslist.com/sites/default/files/styles/community_image/public/communities_images/460_13.jpg?itok=B1NP-GQG'),

('Non-Profit', NULL, 'Yes', 0, 31, 'Yes', 5, 'Villa Marin', 'Villa Marin Ambulatory Care Unit concentrates on giving the best assisted living care and support to seniors in San Rafael, CA. Assisted living communities provide a chore-free lifestyle and the support you or your loved one needs to maintain as much independence as possible. Living in a senior community has many advantages. Research suggests that seniors who live near their peers and have a variety of social activities feel a greater sense of well-being. With assisted living, you\'ll enjoy senior-friendly homes and a welcoming staff. Other services you\'ll find include around-the-clock supervision and security, access to professional nurses, emergency call systems, help with daily living, and nutritious meals prepared by chefs. These communities typically provide housekeeping, laundry, transportation, and a calendar of social events. Reside at Villa Marin Ambulatory Care Unit and enjoy an exciting new chapter of life, where residents can enjoy conversation and meet new friends. With a full range of assisted living services, and with a warm, friendly staff, seniors feel right at home. The help you\'ll find at assisted living communities is offered as necessary, with the goal of supplying the support services required to stay as self-reliant as possible.', '(415) 492-2408', 'Thorndale Dr.', 'San Rafael', 'CA', '94903', NULL, 'http://i0.wp.com/villa-marin.com/wp-content/uploads/2016/08/Condo138_IMG_0574.jpg?resize=768%2C489'),

('Non-Profit', 'Dining room is open daily for breakfast, lunch, and dinner. Our casual Bistro also serves a variety of favorites from 10:30 a.m to 3:00 p.m and offers a menu for takeout as well.', 'Yes', 3.03, 43, 'Yes', 5, 'St. Paul\'s Towers', 'St. Paul’s Towers has been an active part of Oakland since 1966. In addition to this local history, St. Paul’s Towers is one of the flagship communities of Episcopal Senior Communities (ESC), a California nonprofit public benefit corporation more than 50 years old and tax exempt under Section 501(c)(3) of the IRS code.', '510.835.4700', '100 Bay Pl', 'Oakland', 'CA', '94610', NULL, 'http://www.jtm-esc.org/st-pauls-towers/wp-content/uploads/sites/23/2016/01/l3.jpg'),

('Non-Profit', NULL, 'Yes', 0, 90, 'No', 4, 'The Berkshire', 'Located close in a quiet residential area just west of downtown, Silverado Berkeley is memory care that provides for residents\' minds, bodies and spirits. While amenities such as nutritious food, engagements, social events, pets and clinical staff are common among assisted living providers, there is a difference when it comes to experience and care. We have been leading the way in memory care for 20 years.', '(866) 827-5137', '2235 Sacramento Street', 'Berkeley', 'CA', '94702', NULL, 'http://info.rentnet.com/property/79/560779/photo/560779.p18.jpg'),

('For-profit', NULL, 'Yes', 0, 200, 'Yes', 3, 'Pacifica Senior Living', 'Find a warm greeting for your loved one at Pacifica Senior Living Oakland Heights, offering the very best in assisted living services. For residents who cherish their independence but still need a helping hand with some daily activities, the assisted living program at Pacifica Senior Living Oakland Heights is designed for exactly such a lifestyle. Come experience true freedom, but one with compassionate care always nearby! Assisted living communities have many benefits. Research suggests that seniors who live near their peers and have a variety of social activities feel a greater sense of well-being. With assisted living, you\'ll enjoy senior-friendly apartments and a busy social calendar. Other services you\'ll find include around-the-clock supervision and security, access to professional nurses, emergency call systems, help with daily living, and nutritious meals prepared by chefs. These communities typically provide housekeeping, laundry, transportation, and a calendar of social events. Reside at Pacifica Senior Living Oakland Heights and relish an exciting new chapter of life, where seniors can share stories and enjoy the companionship of peers. In this community, assisted living services are provided. The help you\'ll find at assisted living communities is offered when you need it, with the goal of supplying the support services required to stay as self-sufficient as possible. Call today and discover how Pacifica Senior Living Oakland Heights is the perfect fit for seniors requiring assisted living services.', '(866) 827-4997', '2361 East 29th Street', 'Oakland', 'CA', '94606', NULL, 'https://static.senioradvisor.com/images/2014/06/02/14/27/49/406/PacificaSeniorLivingHillsborough151904'),

('For-profit', 'low sodium, low sugar, vegetarian, room service', 'Yes', 0, 210, 'No', 4, 'Vintage Coventry Park', 'Vintage Coventry Park provides assisted living, independent living, memory care and respite care services and living options for seniors. Assisted living, geared toward individuals who want to live with some level of independence but occassionally need a little assistance, is the fastest growing, long-term care option for seniors. Living in a senior community has many advantages. Research suggests that seniors who live near their peers and have a variety of social activities feel a greater sense of well-being. Assisted living provides senior-friendly homes and a welcoming staff. Other services you\'ll find include around-the-clock supervision and security, access to professional nurses, emergency call systems, help with daily living, and nutritious meals prepared by chefs.', '(866) 827-5137', '1550 Sutter St', 'San Francisco', 'CA', '94109', NULL, 'https://s3-media1.fl.yelpcdn.com/bphoto/qTub8Suo0c4jKSiFPVaWyQ/o.jpg'),

('For-profit', NULL, 'Yes', 0, 6, 'No', 5, 'Common Destiny', 'Common Destiny is a residential care home for seniors located in Fremont. We can help you take care of your parents by providing a safe home for them.  We offer an alternative to home care in a quiet family oriented neighborhood. Our 2 caregivers provide 24 hour care and will work closely with you in taking care of your loved ones. We provide all the standard care services for the elderly such as assistance with daily living, medication management and compassion. We can provide ambulatory and non-ambulatory service as well as hospice care.', '(866) 827-5137', '34209 Sylvester Dr', 'Fremont', 'CA', '94555', NULL, 'https://s3-media3.fl.yelpcdn.com/bphoto/DaSyhAw2mStw9eufO1YJ1g/l.jpg'),

('For-profit', 'low sugar, low sodium', 'Yes', 0, 96, 'No', 4, 'Bay Park', 'When Holiday Retirement was founded in 1971, it set out to create an independent living lifestyle unlike anything seniors had ever experienced before: cheerful communities filled with friendly, accepting neighbors, live-in managers dedicated to the happiness and well-being of each resident, innovative activities, programs and travel opportunities for fun and personal growth, and all the chores and details of daily life taken care of.', '(866) 869-2130', '2621 Appian Way', 'Pinole', 'California', '94564', NULL, 'http://media.alternativesforseniors.com/images/account/408/408_1.jpg');







INSERT INTO `Reviews` (`content`,`rating`,`id_User`,`id_business_profile`,`date`) VALUES
('This review is long overdue. Over a half a year ago, my mother spent six weeks at Pacifica Nursing and Rehab after having spinal surgery. Before she was released from the hospital, I had been reading Yelp reviews of the other skilled nursing facilities in the area, and I was horrified by the Dickensian horrors I read about.\nAt that point, it was unclear whether Pacifica Nursing and Rehab would have a vacant bed to take my mom, so I can\'t tell you what a huge relief it was when her health care provider was able to get her into this place, and not one of its awful competitors.\nThe staff here are amazing people, and seeing everything they did for my mother, I have learned to truly respect and revere certified nursing assistants. CNAs don\'t get paid enough, yet they are truly the unsung heroes of this industry. And Pacifica Nursing and Rehab has the nicest, most hard-working CNAs you could ever hope to meet.\nAlso, special shout out to Amy in physical therapy. My mom was probably the most difficult customer she\'d had in years, but when it was time for mom to come home, Amy gave her a hug and told her how much she had enjoyed working with her.\nIf you have a loved one who needs to spend some time in a SNF, this is the place for them to be.',5,1,1,'10/31/2015'),

('I just spent two weeks here after having my knee replacement.  Living in the city there are hills and most apartment buildings were built in the 1930\'s which has stairs!! In 2014 I found out my right knee was bone on bone.  I knew I was going to have surgery so I spent 2015 looking at options and surgeons.  What I liked was on site physical and occupational therapy. In order for me to have my confidence to return home I had a number of items to check off my list.  This department worked with me every day:  5 days one hour with physical and occupational therapist.  This was so crucial for me to begin my healing process.\nThe team of nurses were awesome!  They were right on top of their game.  They had activities for us in the activity room which was a nice surprise\nespecially the cooking and baking class by Ruby.  I loved the part of getting to know the nurse as individuals and stories that we shared when I would have my 4am Meds and blood work.\nMeals were huge and delicious!!  Being there for two weeks I only saw one breakfast item twice!\nI am now back home feeling more confident and able to take care of myself in a safe environment.',5,2,1,'05/17/2016'),

('The facility is very nice, clean and has nice friendly people and nurses as well.  My friends grandmother was under comfort care and needed a certain drug to ease pain.  The reason why I gave 3 stars instead of 5 or 4 was because of unskilled nurses and a lack of equipment.  The nurses are young and I think a little unskilled, not to say that all young nurses are unskilled and that old nurses are skilled but these nurses here are unskilled and young -- 3 nurses helped and was was unfamiliar with the equipment and was receiving instructions on the phone while dealing with the equipment.(& still did not fix the problem with the equipment).\n\nAlso, this place is a little hard to find--especially in the dark (2 of our GPS\'s could not find the center).',3,3,2,'07/30/2013'),

('If you care about your loved ones read below:\n\nAs a former employee, I\'ve seen firsthand the issues this facility has. I have no doubts that any of the previous reviews and complaints are true because I\'ve seen it happen.\n\nYour loved one will not be turned frequently if they need to be. This is frustrating for nurses because we care for the wounds and they just seem to get worse. And if your loved one ever gets changed it won\'t be done properly. Almost everyone here develops incontinent dermatitis. Oh yeah and if you have a foley, be prepared to get a UTI. Everyone here gets a UTI. I\'ve seen poop stains and chunks on foleys literally right outside the urethral opening.\n\nI\'ve seen missed IV antibiotics. Oh yeah missed medications, that happens allllll the time. Meds being documented that they are being given but really aren\'t. Incorrect insulin and heparin doses being given because nurses are incompetent at math and don\'t understand they come in ratios.\n\nMissed wound care? Sometimes that happens too. If your loved one has a wound vac it may not be changed. Yep it\'ll just pool up with blood and cause sepsis. Oh and like I said previously, infection infection infections. You\'ll probably get one if you\'re at risk here with any kind of wound.\n\nThen you have the false documentations and coverups. Don\'t get me wrong. The nurses try their best. But in this industry of nursing homes or post acute care facilities, they are horribly regulated. The amount of work put onto the nurses here is ridiculous. Just ask any of the families of the residents that have been here a few months. They stay longer than 80% of the nurses here. If you have nurses of all types constantly rotating in and out, you have failed as a leader and this directly falls on the director of nursing here. As long as it\'s the snake Alicia. You better send your family elsewhere. They eat nurses. They set them up to fail. And your loved one pays the price.\n\nDo yourself a favor and hire in home care giving. Nursing homes are poorly regulated. But if you have to, do some research and find the rare facilities that do take care of their nurses which lead to proper nursing care. Just stay away from this place.',1,4,2,'12/31/2015'),

('The facility is very nice, clean and has nice friendly people and nurses as well.  My friends grandmother was under comfort care and needed a certain drug to ease pain.  The reason why I gave 3 stars instead of 5 or 4 was because of unskilled nurses and a lack of equipment.  The nurses are young and I think a little unskilled, not to say that all young nurses are unskilled and that old nurses are skilled but these nurses here are unskilled and young -- 3 nurses helped and was was unfamiliar with the equipment and was receiving instructions on the phone while dealing with the equipment.(& still did not fix the problem with the equipment).\n\nAlso, this place is a little hard to find--especially in the dark (2 of our GPS\'s could not find the center).',3,3,3,'07/30/2013');

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
('Respite stays'),
('Arthritis'),
('Asthma'),
('Breathing Support with Oxygen'),
('Breathing Support with a Ventilator'),
('Cancer'),
('Depression'),
('Heart Disease or Heart Failure'),
('Immune Deficiency'),
('Monitored Intake of Food and Liquids'),
('Stroke'),
('Tendency To Fall'),
('Diabetic Diet'),
('Oral Medication'),
('Insulin Injection Self-Administered'),
('Broken Bones'),
('Emphysema or Other Lung Disease (COPD)'),
('Osteoporosis'),
('Diabetic Diet');


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
(14,2),
(14,3),
(15,4),
(16,4),
(17,4),
(18,4),
(19,4),
(20,4),
(21,4),
(22,4),
(23,4),
(24,4),
(25,4),
(26,4),
(27,4),
(28,4),
(3,4),
(3,5),
(3,6),
(15,6),
(16,6),
(17,6),
(29,6),
(19,6),
(20,6),
(30,6),
(21,6),
(31,6),
(24,6),
(25,6),
(32,6),
(26,6),
(27,6),
(28,6);



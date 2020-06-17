DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

use testdb;

DROP TABLE IF EXISTS `pets`;
CREATE TABLE IF NOT EXISTS `pets` 
(`id` INTEGER NOT NULL auto_increment , 
`title` VARCHAR(255), 
`description` VARCHAR(255), 
`published` TINYINT(1), 
`createdAt` DATETIME NULL, 
`updatedAt` DATETIME NULL, 
`image` VARCHAR(1000) NULL,
`specie` VARCHAR(100) NULL,
`breed` VARCHAR(100) NULL,
`age` VARCHAR(100) NULL,
`weight` VARCHAR(100) NULL,
`coat` VARCHAR(100) NULL,
`energy` VARCHAR(100) NULL,
`cats` VARCHAR(10) NULL,
`dogs` VARCHAR(10) NULL,
`children` VARCHAR(10) NULL,
`other` VARCHAR(10) NULL,
`foster` VARCHAR(10) NULL,
`adoption` VARCHAR(10) NULL,
`phone` VARCHAR(12) NULL,
`email` VARCHAR(100) NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `pets` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`, `image`, `specie`,`breed`, `age`,`weight`,`coat`,`energy`,`cats`,`dogs`,`children`,`other`,`foster`,`adoption`,`phone`,`email`)VALUES
(DEFAULT, 'Spot', 'siergieyk@gmail.com', 0, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg', 'Dog', 'Labrador','2','5','Yellow','1-2 hours','Yes','Yes','No','Yes','Yes','Yes','206-206-999','shelter@gmail.com' ),
(DEFAULT, 'Mittens', 'siergieyk@gmail.com', 0, NULL, NULL, 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg', 'Cat', 'Sphinx', '2','10','White','1-2 hours','Yes','Yes','No','Yes','Yes','Yes','206-206-999','shelter@gmail.com' );


DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` 
(`id` VARCHAR(255) NOT NULL, 
`title` VARCHAR(255), 
`description` VARCHAR(255), 
`published` TINYINT(1), 
`createdAt` DATETIME NULL, 
`updatedAt` DATETIME NULL, 
`image` VARCHAR(10000) NULL,

`home` VARCHAR(255), 
`backyard` VARCHAR(255), 
`work` VARCHAR(255), 
`time` VARCHAR(255), 
`cats` VARCHAR(255), 
`dogs` VARCHAR(255), 
`children` VARCHAR(255), 
`foster` VARCHAR(255), 
`adoption` VARCHAR(255),


PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `users` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`, `image`, `home`,`backyard`,`work`,`time`,`cats`,`dogs`,`children`,`foster`,`adoption`)VALUES
('siergieyk@gmail.com', 'Siergiey', 'Likes to walk', 0, NULL, NULL, DEFAULT, 'house','yes','8','4','yes','no','no','yes','no' );
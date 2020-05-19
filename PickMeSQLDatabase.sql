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
`image` VARCHAR(10000) NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `pets` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`, `image`)VALUES
(DEFAULT, 'Spot', 'Small dog', 0, NULL, NULL, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg' ),
(DEFAULT, 'Mittens', 'Small cat', 0, NULL, NULL, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg' ),
(DEFAULT, 'Mishka', 'Small dog', 0, NULL, NULL, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg' ),
(DEFAULT, 'MoonMoon', 'Medium dog', 0, NULL, NULL, 'https://www.aspca.org/sites/default/files/common-dog-behavior-issues_facebook.jpg' );

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` 
(`id` INTEGER NOT NULL auto_increment , 
`title` VARCHAR(255), 
`description` VARCHAR(255), 
`published` TINYINT(1), 
`createdAt` DATETIME NULL, 
`updatedAt` DATETIME NULL, 
`image` VARCHAR(10000) NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `users` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`, `image`)VALUES
(DEFAULT, 'John', 'Likes to walk', 0, NULL, NULL, DEFAULT ),
(DEFAULT, 'Mike', 'Likes to sleep', 0, NULL, NULL, DEFAULT),
(DEFAULT, 'Anna', 'enjoys outside', 0, NULL, NULL, DEFAULT ),
(DEFAULT, 'Steve', 'enjoys surfing', 0, NULL, NULL, DEFAULT );
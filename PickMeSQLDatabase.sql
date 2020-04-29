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
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `pets` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`)VALUES
(DEFAULT, 'Spot', 'Small dog', 0, NULL, NULL ),
(DEFAULT, 'Mittens', 'Small cat', 0, NULL, NULL ),
(DEFAULT, 'Mishka', 'Small dog', 0, NULL, NULL ),
(DEFAULT, 'MoonMoon', 'Medium dog', 0, NULL, NULL );

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` 
(`id` INTEGER NOT NULL auto_increment , 
`title` VARCHAR(255), 
`description` VARCHAR(255), 
`published` TINYINT(1), 
`createdAt` DATETIME NULL, 
`updatedAt` DATETIME NULL, 
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `users` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`)VALUES
(DEFAULT, 'John', 'Likes to walk', 0, NULL, NULL ),
(DEFAULT, 'Mike', 'Likes to sleep', 0, NULL, NULL ),
(DEFAULT, 'Anna', 'enjoys outside', 0, NULL, NULL ),
(DEFAULT, 'Steve', 'enjoys surfing', 0, NULL, NULL );
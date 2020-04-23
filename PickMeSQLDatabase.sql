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
SHOW INDEX FROM `pets`;

INSERT INTO `pets` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`)VALUES
(DEFAULT, 'Spot', 'Small dog', 0, NULL, NULL ),
(DEFAULT, 'Mittens', 'Small cat', 0, NULL, NULL ),
(DEFAULT, 'Mishka', 'Small dog', 0, NULL, NULL ),
(DEFAULT, 'MoonMoon', 'Medium dog', 0, NULL, NULL );
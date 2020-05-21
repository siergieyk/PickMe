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
(DEFAULT, 'Sir BarkAlot', 'Big dog', 0, NULL, NULL, 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg' ),
(DEFAULT, 'Jumper', 'medium dog', 0, NULL, NULL, 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001799/img/basic/a0001799_main.jpg' ),
(DEFAULT, 'Peter Barker', 'small dog', 0, NULL, NULL,'https://i.pinimg.com/originals/ea/f2/8c/eaf28caf99cdb2753942c2a52797702e.jpg'),
(DEFAULT, 'Pilot', 'Big dog', 0, NULL, NULL, 'https://www.guidingeyes.org/wp-content/uploads/2020/01/1-1.jpg' ),
(DEFAULT, 'Velentine', 'Small dog', 0, NULL, NULL, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-small-german-spitz-walking-in-the-autumn-park-royalty-free-image-1580496879.jpg' ),
(DEFAULT, 'MoonMoon', 'Medium dog', 0, NULL, NULL, 'https://www.ddfl.org/wp-content/uploads/2020/03/ceo.png' ),
(DEFAULT, 'Wolverine', 'Small Dog', 0, NULL, NULL, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-papillon-1583349516.jpg' ),
(DEFAULT, 'Deadppol', 'Medium dog', 0, NULL, NULL, 'https://s.hdnux.com/photos/01/06/41/00/18485288/3/920x920.jpg' ),
(DEFAULT, 'Clark', 'Big dog', 0, NULL, NULL, 'https://cdn.psychologytoday.com/sites/default/files/styles/amp_metadata_content_image_min_1200px_wide/public/field_blog_entry_images/2019-04/presacanario_maryswift_shutterstock_1189877383.jpg' ),
(DEFAULT, 'Paris', 'Small dog', 0, NULL, NULL, 'https://www.thesprucepets.com/thmb/8ZHdLsYCzE7j8nDTO0y61UtynTA=/2094x1396/filters:fill(auto,1)/portrait-if-a-spitz-pomeranian_t20_v3o29E-5ae9bbdca18d9e0037d95983.jpg' ),
(DEFAULT, 'London', 'Medium dog', 0, NULL, NULL, 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Bull-Terrier_01.jpg' ),
(DEFAULT, 'Brooklyn', 'Small dog', 0, NULL, NULL, 'https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/04/24132507/curious-yorkshire-terrier-on-the-sofa-picture-id853828044-940x529.jpg' ),
(DEFAULT, 'Kim', 'Small dog', 0, NULL, NULL, 'https://i.pinimg.com/originals/20/bf/98/20bf98c5bcc2c1b583aa0487d0960206.jpg' ),
(DEFAULT, 'Jasper', 'Medium dog', 0, NULL, NULL, 'https://media.vanityfair.com/photos/5d3b1e3c5989820008deb9eb/5:3/w_1125,h_675,c_limit/00-lead-brandy.jpg' ),
(DEFAULT, 'Milo', 'Small dog', 0, NULL, NULL, 'https://images-na.ssl-images-amazon.com/images/G/01/Pets/ContentHub/ArticleImages/A32NoCopyBanner750x375._V503505129_.jpg' ),
(DEFAULT, 'Lucky', 'Small dog', 0, NULL, NULL, 'https://i.ytimg.com/vi/OjMiTGrCSaA/hqdefault.jpg' ),
(DEFAULT, 'Cool', 'Medium dog', 0, NULL, NULL, 'https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/mt2fvuult1cqdgt431au.jpg' );


DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` 
(`id` VARCHAR(255) NOT NULL, 
`title` VARCHAR(255), 
`description` VARCHAR(255), 
`published` TINYINT(1), 
`createdAt` DATETIME NULL, 
`updatedAt` DATETIME NULL, 
`image` VARCHAR(10000) NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;


INSERT INTO `users` (`id`,`title`,`description`,`published`,`createdAt`,`updatedAt`, `image`)VALUES
('lol1@lol.com', 'John', 'Likes to walk', 0, NULL, NULL, DEFAULT ),
('lol2@lol.com', 'Mike', 'Likes to sleep', 0, NULL, NULL, DEFAULT),
('lol3@lol.com', 'Anna', 'enjoys outside', 0, NULL, NULL, DEFAULT ),
('lol4@lol.com', 'Steve', 'enjoys surfing', 0, NULL, NULL, DEFAULT );
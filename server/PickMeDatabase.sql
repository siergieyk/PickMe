DROP DATABASE IF EXISTS PickMe;
CREATE DATABASE PickMe;
USE PickMe;



CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first` varchar(128) NOT NULL,
  `last`  varchar(128) NOT NULL,
  `email`  varchar(128) NOT NULL
);

INSERT INTO `usuarios` ( `first`, `last`, `email`) VALUES
('John', 'Smith', 'Smith@email.com'),
('Jane', 'Doe', 'Jane@lol.com'),
('Peter', 'Parker', 'Spider@email.com');
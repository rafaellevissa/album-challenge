CREATE DATABASE challenger;
USE challenger;

CREATE TABLE IF NOT EXISTS Albums (
  	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
	title VARCHAR(30) NOT NULL,
  	description TEXT(120),
  	user_id INT,
  	CONSTRAINT FK_albums_users FOREIGN KEY (user_id) REFERENCES Users(id)
  
);

CREATE TABLE IF NOT EXISTS Users (
  	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
	email VARCHAR(30) NOT NULL,
  	password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Photos (
  	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
	title VARCHAR(30) NOT NULL,
  	description TEXT(120),
  	creation_date DATETIME,
  	size VARCHAR(20) NOT NULL,
  	color VARCHAR(10),
	album_id INT,
  	CONSTRAINT FK_photos_albums FOREIGN KEY (album_id) REFERENCES Albums(id)
);
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name CHAR(50)
);

CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name CHAR(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text CHAR(250),
  createdAt char(50),
  user_id INT, 
  FOREIGN KEY(user_id) REFERENCES users(id),
  room_id INT,
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


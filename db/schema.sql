-- CREATE DATABASE burgers_db;
USE qapgmc37plj0u4ao;

CREATE TABLE burgers
(
	id int NOT NULL	AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
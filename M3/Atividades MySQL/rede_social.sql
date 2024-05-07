
CREATE DATABASE rede_social;

USE rede_social;

CREATE TABLE users(
id INTEGER PRIMARY KEY AUTO_INCREMENT,
usarname VARCHAR(50),
role VARCHAR(50),
created_at TIMESTAMP DEFAULT(NOW())
);

CREATE TABLE follows(
following_user_id INTEGER,
FOREIGN KEY (following_user_id) REFERENCES users(id),
followed_user_id INTEGER,
FOREIGN KEY (followed_user_id) REFERENCES users(id),
created_at TIMESTAMP DEFAULT(NOW())
);

CREATE TABLE posts(
id INTEGER PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50),
body TEXT,
user_id INTEGER,
FOREIGN KEY (user_id) REFERENCES users(id),
status VARCHAR (50),
created_at TIMESTAMP DEFAULT(NOW())
);

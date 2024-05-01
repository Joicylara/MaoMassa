-- criando banco de dados
CREATE DATABASE aula_8;

-- usando o banco de dados
USE aula_8;

-- criando tabela
CREATE TABLE users(
-- colunas p/ os atributos
-- o auto incremente é tipo um contador
-- not null, proibe que o valor seja nulo
id_users INTEGER PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(60) NOT NULL,
email VARCHAR (100),
age INTEGER
);

-- inserindo novo registro "onde"
INSERT INTO users(name, email, age) VALUES ("Dan", "dan@gmail.com", 25);

-- consultar registro * seleciona tudo
SELECT * FROM users;

CREATE TABLE request(
id_request INTEGER PRIMARY KEY AUTO_INCREMENT,
users_sender_id INTEGER,
users_receiver_id INTEGER,
status BOOL,
FOREIGN KEY (users_sender_id) REFERENCES users (id_users),
FOREIGN KEY (users_receiver_id) REFERENCES users (id_users)
);

INSERT INTO request (users_sender_id, users_receiver_id, status) VALUES (2, 1, true);

SELECT * FROM request;

CREATE TABLE messages(
id_messages INTEGER PRIMARY KEY AUTO_INCREMENT,
users_sender_message_id INTEGER,
users_receiver_message_id INTEGER,
FOREIGN KEY (users_sender_message_id) REFERENCES users (id_users),
FOREIGN KEY (users_receiver_message_id) REFERENCES users (id_users),
message TEXT
);

INSERT INTO messages (users_sender_message_id, users_receiver_message_id, message) VALUES (2, 1, "Olá, tudo bem?");

SELECT * FROM messages;
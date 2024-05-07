CREATE DATABASE banco;

USE banco;

CREATE TABLE users(
-- ON DELETE CASCADE, deleta mesmo que tenha uma chave primaria vinculada
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    cpf CHAR(14) NOT NULL,
    age INTEGER NOT NULL,
    number CHAR(11),
    created_at TIMESTAMP DEFAULT(NOW())
);

CREATE TABLE account(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    agency INTEGER,
    account_number INTEGER,
    users_id INTEGER,
	FOREIGN KEY (users_id) REFERENCES users(id),
    sale DECIMAL(10,2),
    created_at TIMESTAMP
);


CREATE TABLE credit_card(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sale DECIMAL(10,2),
    account_id INTEGER,
    FOREIGN KEY (account_id) REFERENCES account(id),
	created_at TIMESTAMP
);

CREATE TABLE transaction(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_receiver_id INTEGER,
    FOREIGN KEY (user_receiver_id) REFERENCES users(id),
    user_sender_id INTEGER,
    FOREIGN KEY (user_sender_id) REFERENCES users(id),
    value DECIMAL(10,2)
);


INSERT INTO users(first_name, last_name, cpf, age, number) VALUES("Teste", "Jr", "234.987.678-99", 20, "9 9987-6543");
INSERT INTO users(first_name, last_name, cpf, age, number) VALUES("Bethouve", "Lara", "235.987.678-99", 14, "9 7896-6543");
INSERT INTO users(first_name, last_name, cpf, age, number) VALUES("Jasmin", "Lara", "235.987.678-99", 14, "9 7896-6543");

ALTER TABLE users
MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM users;

INSERT INTO account(agency, account_number, users_id, sale) VALUES(0001, 555, 1, 10090);
INSERT INTO account(agency, account_number, users_id, sale) VALUES(0089, 275, 2, 120.90);
INSERT INTO account(agency, account_number, users_id, sale) VALUES(0245, 278, 3, 300.90);

ALTER TABLE account
MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM account;

INSERT INTO credit_card(sale, account_id) VALUES(700.80, 1);
INSERT INTO credit_card(sale, account_id) VALUES(89.80, 2);
INSERT INTO credit_card(sale, account_id) VALUES(839.80, 3);

ALTER TABLE credit_card
MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM credit_card;

INSERT INTO transaction(user_receiver_id, user_sender_id, value) VALUES(1, 2, 300.80);
INSERT INTO transaction(user_receiver_id, user_sender_id, value) VALUES(2, 3, 500.50);

SELECT * FROM transaction;
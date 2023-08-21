CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE Especies(
        especies_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );
    
CREATE TABLE Loc(
	loc_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(3) NOT NULL
    );

CREATE TABLE Gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
    );

CREATE TABLE Cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
    );

CREATE TABLE Cuidador_Gerente(
	cuidador_gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes (gerente_id),
    cuidador_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores (cuidador_id)
    );

CREATE TABLE Animais(
	animais_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
    sexo VARCHAR(2) NOT NULL,
    idade VARCHAR(3) NOT NULL,
    especies_id INT NOT NULL,
    FOREIGN KEY (especies_id) REFERENCES Especies (especies_id),
    loc_id INT NOT NULL,
    FOREIGN KEY (loc_id) REFERENCES Loc (loc_id)
    );

CREATE TABLE Animais_cuidadores(
	animais_cuidadores_id INT PRIMARY KEY AUTO_INCREMENT,
	animais_id INT NOT NULL,
    FOREIGN KEY (animais_id) REFERENCES Animais (animais_id),
    cuidadores_id INT NOT NULL,
    FOREIGN KEY (cuidadores_id) REFERENCES Cuidadores (cuidador_id)
    );

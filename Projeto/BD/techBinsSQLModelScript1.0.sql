CREATE DATABASE techBins;
USE techBins;

CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    logradouro VARCHAR(100) NOT NULL,
    numero INT,
    complemento VARCHAR(45),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep CHAR(8)
);

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(60) NOT NULL,
    cnpj CHAR(14),
    email_contato VARCHAR(45) NOT NULL,
    telefone_contato VARCHAR(45),
    idEndereco INT NOT NULL,
    CONSTRAINT fk_EmpresaEndereco FOREIGN KEY (idEndereco) REFERENCES endereco(idEndereco)
);

CREATE TABLE pontoColeta (
    idPontoColeta INT AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    idEndereco INT NOT NULL,
    PRIMARY KEY (idPontoColeta, idEmpresa),
    CONSTRAINT fk_PontoColetaEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    CONSTRAINT fk_PontoColetaEndereco FOREIGN KEY (idEndereco) REFERENCES endereco(idEndereco)
);

CREATE TABLE lixeira (
    idLixeira INT AUTO_INCREMENT,
    idPontoColeta INT NOT NULL,
    PRIMARY KEY (idLixeira, idPontoColeta),
    CONSTRAINT fk_LixeiraPontoColeta FOREIGN KEY (idPontoColeta) REFERENCES pontoColeta(idPontoColeta)
);

CREATE TABLE registro (
    idRegistro INT NOT NULL,
    idLixeira INT NOT NULL AUTO_INCREMENT,
    nivel INT NOT NULL,
    data DATETIME NOT NULL,
    PRIMARY KEY (idRegistro, idLixeira),
    CONSTRAINT fk_RegistroLixeira FOREIGN KEY (idLixeira) REFERENCES lixeira(idLixeira)
);

CREATE TABLE representante (
    idRepresentante INT AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    nomeRepresentante VARCHAR(60) NOT NULL,
    token_acesso VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    podeAdicionarRepresentantes CHAR(1) NOT NULL,
    idRepresentantePai INT,
    PRIMARY KEY (idRepresentante, idEmpresa),
    CONSTRAINT fk_RepresentanteEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    CONSTRAINT fk_RepresentantePai FOREIGN KEY (idRepresentantePai) REFERENCES representante(idRepresentante),
    UNIQUE (token_acesso),
    UNIQUE (cpf)
);

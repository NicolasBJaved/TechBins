CREATE DATABASE IF NOT EXISTS techBins;
USE techBins;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(60) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    email_contato VARCHAR(100) NOT NULL,
    telefone_contato VARCHAR(11) NOT NULL
);

CREATE TABLE enderecoEmpresa (
    idEnderecoEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    idEmpresa INT UNIQUE NOT NULL,
    cep CHAR(8) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(40),
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    CONSTRAINT fk_enderecoEmpresaEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
)AUTO_INCREMENT = 100;

CREATE TABLE representante (
    idRepresentante INT PRIMARY KEY AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    nomeRepresentante VARCHAR(100) NOT NULL,
    email_contato VARCHAR(100) UNIQUE NOT NULL, 
    senha VARCHAR(50) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    podeAdicionarRepresentantes CHAR(1) NOT NULL DEFAULT 'N',
    idRepresentanteChefe INT,
    CONSTRAINT chk_addRepresentante CHECK (podeAdicionarRepresentantes in ('S', 'N')),
    CONSTRAINT fk_RepresentanteEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    CONSTRAINT fk_RepresentanteChefe FOREIGN KEY (idRepresentanteChefe) REFERENCES representante(idRepresentante)
);



CREATE TABLE pontoColeta (
    idPontoColeta INT PRIMARY KEY AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    cep CHAR(8) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(40),
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    CONSTRAINT fk_PontoColetaEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
)AUTO_INCREMENT = 1000;

CREATE TABLE lixeira (
    idLixeira INT PRIMARY KEY AUTO_INCREMENT,
    idPontoColeta INT NOT NULL,
    dataUltimaColeta DATE,
    CONSTRAINT fk_LixeiraPontoColeta FOREIGN KEY (idPontoColeta) REFERENCES pontoColeta(idPontoColeta)
) AUTO_INCREMENT = 10000;

CREATE TABLE sensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
idLixeira INT UNIQUE NOT NULL,
status varchar(7) DEFAULT 'Ativo',
CONSTRAINT chk_status CHECK (status in('Ativo', 'Inativo')),
CONSTRAINT fk_SensorLixeira FOREIGN KEY (idLixeira) REFERENCES lixeira(idLixeira)
) AUTO_INCREMENT = 100000;

CREATE TABLE registro (
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    idSensor INT NOT NULL,
    distancia INT NOT NULL,
    dataHoraMedicao DATETIME DEFAULT CURRENT_TIMESTAMP(),
    CONSTRAINT fk_RegistroSensor FOREIGN KEY (idSensor) REFERENCES sensor(idSensor)
);

CREATE TABLE rota (
    idRota INT PRIMARY KEY AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    idRepresentante INT NOT NULL,
    nomeRota VARCHAR(45) NOT NULL,
    dataRota DATE NOT NULL,
    status VARCHAR(20),
    observacoes TEXT,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (idRepresentante) REFERENCES representante(idRepresentante)
);

CREATE TABLE rotaPontoColeta (
    idRota INT NOT NULL,
    idPontoColeta INT NOT NULL,
    ordem INT NOT NULL, -- ORDEM DA COLETA
    PRIMARY KEY (idRota, idPontoColeta),
    FOREIGN KEY (idRota) REFERENCES rota(idRota),
    FOREIGN KEY (idPontoColeta) REFERENCES pontoColeta(idPontoColeta)
);



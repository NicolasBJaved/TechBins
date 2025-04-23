CREATE DATABASE techBins;
USE techBins;

CREATE TABLE enderecoEmpresa (
    idEnderecoEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    logradouro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(45),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep CHAR(8) NOT NULL
)AUTO_INCREMENT = 100;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(60) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    email_contato VARCHAR(45) NOT NULL,
    telefone_contato VARCHAR(45) NOT NULL,
    idEnderecoEmpresa INT NOT NULL,
    CONSTRAINT fk_EmpresaEndereco FOREIGN KEY (idEnderecoEmpresa) REFERENCES enderecoEmpresa(idEnderecoEmpresa)
);

CREATE TABLE pontoColeta (
    idPontoColeta INT AUTO_INCREMENT,
    idEmpresa INT NOT NULL,
    PRIMARY KEY (idPontoColeta, idEmpresa),
    CONSTRAINT fk_PontoColetaEmpresa FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa),
    logradouro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(45),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep CHAR(8) NOT NULL
)AUTO_INCREMENT = 1000;
drop table pontocoleta;
drop table lixeira;
select * from pontocoleta;

CREATE TABLE lixeira (
    idLixeira INT AUTO_INCREMENT,
    idPontoColeta INT NOT NULL,
    PRIMARY KEY (idLixeira, idPontoColeta),
    CONSTRAINT fk_LixeiraPontoColeta FOREIGN KEY (idPontoColeta) REFERENCES pontoColeta(idPontoColeta)
);

CREATE TABLE registro (
    idRegistro INT NOT NULL AUTO_INCREMENT,
    idLixeira INT,
    idPontoColeta INT,
    distancia INT NOT NULL,
    data DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (idRegistro, idLixeira, idPontoColeta),
    CONSTRAINT fk_RegistroLixeira FOREIGN KEY (idLixeira) REFERENCES lixeira(idLixeira),
    CONSTRAINT fk_RegistroPontoColeta FOREIGN KEY (idPontoColeta) REFERENCES pontoColeta(idPontoColeta)
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


-- Inserindo endereços de empresa (com idEnderecoEmpresa começando em 100 e idEmpresa fictício 1 a 4)
INSERT INTO enderecoEmpresa (logradouro, numero, complemento, bairro, cidade, estado, cep)
VALUES
('Rua das Palmeiras', 120, 'Bloco A', 'Centro', 'São Paulo', 'SP', '01001000'),
('Avenida Paulista', 1578, NULL, 'Bela Vista', 'São Paulo', 'SP', '01310100'),
('Rua Vergueiro', 2951, 'Sala 10', 'Vila Mariana', 'São Paulo', 'SP', '04101000'),
('Rua da Consolação', 987, NULL, 'Consolação', 'São Paulo', 'SP', '01302000');

-- Inserindo empresas com idEnderecoEmpresa já referenciado (100 a 103)
INSERT INTO empresa (nomeEmpresa, cnpj, email_contato, telefone_contato, idEnderecoEmpresa)
VALUES 
('Eco SPTech', '12345678000100', 'contato@ecosptech.com.br', '(11) 4002-8922', 100),
('Loga - Logística Ambiental', '23456789000111', 'contato@loga.com.br', '(11) 3003-2100', 101),
('Sustentare Saneamento S/A', '34567890000122', 'contato@sustentare.com.br', '(11) 3500-1500', 102),
('Corpus Saneamento e Obras Ltda', '45678901000133', 'sac@corpus.com.br', '(11) 3111-6200', 103);



INSERT INTO pontoColeta (idEmpresa, logradouro, numero, complemento, bairro, cidade, estado, cep)
VALUES
(1, 'Rua A', 500, NULL, 'Pinheiros', 'São Paulo', 'SP', '05409001'), -- ponto de coleta 1000
(1, 'Rua B', 100, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09123459'), -- ponto de coleta 1001
(1, 'Rua C', 300, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09053459'), -- ponto de coleta 1002
(1, 'Rua D', 200, NULL, 'Capão Redondo', 'São Paulo', 'SP', '23459079'), -- ponto de coleta 1003
(1, 'Rua E', 600, NULL, 'Capão Redondo', 'São Paulo', 'SP', '27673459'), -- ponto de coleta 1004
(2, 'Rua Augusta', 3000, NULL, 'Cerqueira César', 'São Paulo', 'SP', '01412000'),
(3, 'Avenida Faria Lima', 400, NULL, 'Itaim Bibi', 'São Paulo', 'SP', '04538000'),
(4, 'Rua Heitor Penteado', 321, NULL, 'Sumaré', 'São Paulo', 'SP', '01246000');

INSERT INTO lixeira (idPontoColeta)
VALUES
(1000), -- lixeira 1 = ponto de coleta 1000 (Rua A)
(1001),
(1002),
(1003);

-- Eco SPTech (empresa 1)
INSERT INTO representante (idEmpresa, nomeRepresentante, token_acesso, senha, cpf, podeAdicionarRepresentantes, idRepresentantePai)
VALUES 
(1, 'Julia Lima', 'julia.sptech', 'julia123', '12345678901', 'S', NULL), -- id 1
(1, 'Fernando Brandão', 'brandao.sptech', 'brandao123', '12345678902', 'N', 1);


-- Loga (empresa 2)
INSERT INTO representante (idEmpresa, nomeRepresentante, token_acesso, senha, cpf, podeAdicionarRepresentantes, idRepresentantePai)
VALUES 
(2, 'Luciana Prado', 'token_loga123', 'senha123', '23456789012', 'S', NULL), -- id 3
(2, 'Diego Costa', 'token_loga456', 'senha456', '23456789013', 'N', 3);

-- Sustentare (empresa 3)
INSERT INTO representante (idEmpresa, nomeRepresentante, token_acesso, senha, cpf, podeAdicionarRepresentantes, idRepresentantePai)
VALUES 
(3, 'Carlos Mendes', 'token_sust123', 'senha123', '34567890123', 'S', NULL), -- id 5
(3, 'Juliana Rocha', 'token_sust456', 'senha456', '34567890124', 'N', 5);

-- Corpus (empresa 4)
INSERT INTO representante (idEmpresa, nomeRepresentante, token_acesso, senha, cpf, podeAdicionarRepresentantes, idRepresentantePai)
VALUES 
(4, 'Patrícia Lima', 'token_corp123', 'senha123', '45678901234', 'S', NULL), -- id 7
(4, 'Fernando Reis', 'token_corp456', 'senha456', '45678901235', 'N', 7);



select reg.*, pto.idEmpresa as 'Identificador da Empresa', pto.logradouro as 'Logradouro', pto.numero as 'Número', pto.cidade as 'Cidade',
case
when distancia <= 18 then '5'
when distancia <= 36 then '4'
when distancia <= 54 then '3'
when distancia <= 72 then '2'
when distancia <= 90 then '1'
else 'Distância acima do previsto'
end as 'Nível do Lixo'
from registro reg
inner join pontoColeta pto on pto.idPontoColeta = reg.idPontoColeta;

select * from empresa;


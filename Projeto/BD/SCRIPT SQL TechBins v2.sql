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


-- Inserindo empresas com idEnderecoEmpresa já referenciado (100 a 103)
INSERT INTO empresa (nomeEmpresa, cnpj, email_contato, telefone_contato)
VALUES 
('Eco SPTech', '12345678000100', 'contato@ecosptech.com.br', '1140028922'),
('Loga - Logística Ambiental', '23456789000111', 'contato@loga.com.br', '1130032100'),
('Sustentare Saneamento S/A', '34567890000122', 'contato@sustentare.com.br', '1135001500'),
('Corpus Saneamento e Obras Ltda', '45678901000133', 'sac@corpus.com.br', '1131116200');

-- Inserindo endereços de empresa (com idEnderecoEmpresa começando em 100 e idEmpresa fictício 1 a 4)
INSERT INTO enderecoEmpresa (logradouro, idEmpresa, numero, complemento, bairro, cidade, estado, cep)
VALUES
('Rua Haddock Lobo', 1, 595, NULL, 'Cerqueira César', 'São Paulo', 'SP', '01414001'),
('Avenida Paulista', 2, 1578, NULL, 'Bela Vista', 'São Paulo', 'SP', '01310100'),
('Rua Vergueiro', 3, 2951, 'Sala 10', 'Vila Mariana', 'São Paulo', 'SP', '04101000'),
('Rua da Consolação', 4, 987, NULL, 'Consolação', 'São Paulo', 'SP', '01302000');

-- Inserindo pontos de coleta (com idPontoColeta começando em 1000)
INSERT INTO pontoColeta (idEmpresa, logradouro, numero, complemento, bairro, cidade, estado, cep)
VALUES
(1, 'Rua A', 500, NULL, 'Pinheiros', 'São Paulo', 'SP', '05409001'), -- ponto de coleta 1000
(1, 'Rua B', 100, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09123459'), -- ponto de coleta 1001
(1, 'Rua C', 300, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09053459'), -- ponto de coleta 1002
(1, 'Rua D', 200, NULL, 'Capão Redondo', 'São Paulo', 'SP', '23459079'), -- ponto de coleta 1003
(1, 'Rua E', 600, NULL, 'Capão Redondo', 'São Paulo', 'SP', '27673459'), -- ponto de coleta 1004
(1, 'Rua F', 700, NULL, 'Capão Redondo', 'São Paulo', 'SP', '28654589'), -- ponto de coleta 1005
(2, 'Rua Augusta', 3000, NULL, 'Cerqueira César', 'São Paulo', 'SP', '01412000'),
(3, 'Avenida Faria Lima', 400, NULL, 'Itaim Bibi', 'São Paulo', 'SP', '04538000'),
(4, 'Rua Heitor Penteado', 321, NULL, 'Sumaré', 'São Paulo', 'SP', '01246000');

INSERT INTO lixeira (idPontoColeta, dataUltimaColeta)
VALUES
(1000, '2025-04-24'), -- lixeira 1 = ponto de coleta 1000 (Rua A)
(1000, '2025-04-24'), -- lixeira 2 = ponto de coleta 1000 (Rua A)
(1000, '2025-04-24'), -- lixeira 3 = ponto de coleta 1000 (Rua A)
(1000, '2025-04-24'), -- lixeira 4 = ponto de coleta 1000 (Rua A)
(1000, '2025-04-24'), -- lixeira 5 = ponto de coleta 1000 (Rua A)
(1001, '2025-04-23'),
(1001, '2025-04-23'),
(1001, '2025-04-23'),
(1001, '2025-04-23'),
(1001, '2025-04-23'),
(1002, '2025-04-24'),
(1002, '2025-04-24'),
(1002, '2025-04-24'),
(1002, '2025-04-24'),
(1002, '2025-04-24'),
(1003, '2025-04-22'),
(1003, '2025-04-22'),
(1003, '2025-04-22'),
(1003, '2025-04-22'),
(1003, '2025-04-22'),
(1004, '2025-04-24'),
(1004, '2025-04-24'),
(1004, '2025-04-24'),
(1004, '2025-04-24'),
(1004, '2025-04-24'),
(1005, '2025-04-23'),
(1005, '2025-04-23'),
(1005, '2025-04-23'),
(1005, '2025-04-23'),
(1005, '2025-04-23'),
(1006, '2025-04-24'),
(1007, '2025-04-23'),
(1008, '2025-04-22');

INSERT INTO sensor (idLixeira)
values
(10000), 
(10001), 
(10002), 
(10003), 
(10004),
(10005), 
(10006), 
(10007),
(10008), 
(10009),
(10010), 
(10011), 
(10012), 
(10013), 
(10014),
(10015), 
(10016), 
(10017),
(10018),
(10019),
(10020), 
(10021), 
(10022), 
(10023), 
(10024),
(10025), 
(10026), 
(10027),
(10028),
(10029);

INSERT INTO sensor (idLixeira, status)
values
(10030, 'Inativo'), 
(10031, 'Inativo'), 
(10032, 'Inativo');

-- Eco SPTech (empresa 1)
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, podeAdicionarRepresentantes, idRepresentanteChefe)
VALUES 
(1, 'Julia Lima', 'julia.lima@ecosptech.com.br', 'julia123', '12345678901', 'S', NULL), -- id 1
(1, 'Fernando Brandão', 'fernando.brandao@ecosptech.com.br', 'brandao123', '12345678902', 'N', 1);

-- Loga (empresa 2)
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, podeAdicionarRepresentantes, idRepresentanteChefe)
VALUES 
(2, 'Luciana Prado', 'luciana.prado@loga.com.br', 'senha123', '23456789012', 'S', NULL), -- id 3
(2, 'Diego Costa', 'diego.costa@loga.com.br', 'senha456', '23456789013', 'N', 3);

-- Sustentare (empresa 3)
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, podeAdicionarRepresentantes, idRepresentanteChefe)
VALUES 
(3, 'Carlos Mendes', 'carlos.mendes@sustentare.com.br', 'senha123', '34567890123', 'S', NULL), -- id 5
(3, 'Juliana Rocha', 'juliana.rocha@sustentare.com.br', 'senha456', '34567890124', 'N', 5);

-- Corpus (empresa 4)
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, podeAdicionarRepresentantes, idRepresentanteChefe)
VALUES 
(4, 'Patrícia Lima', 'patricia.lima@corpus.com.br', 'senha123', '45678901234', 'S', NULL), -- id 7
(4, 'Fernando Reis', 'fernando.reis@corpus.com.br', 'senha456', '45678901235', 'N', 7);

INSERT INTO rota (idEmpresa, idRepresentante, nomeRota, dataRota, status, observacoes)
VALUES (1, 1, "Rota Pinheiros", '2025-05-20', 'Agendada', 'Coleta da região oeste de SP');

INSERT INTO rotaPontoColeta (idRota, idPontoColeta, ordem)
VALUES 
(1, 1000, 1),
(1, 1001, 2),
(1, 1002, 3);

-- Rua A (Ponto 1000, lixeiras 10000 a 10004)[
INSERT INTO registro (idSensor, distancia, dataHoraMedicao) VALUES
(100000, 20, '2025-05-20 08:00:00'),
(100001, 30, '2025-05-20 08:01:00'),
(100002, 25, '2025-05-20 08:02:00'),
(100003, 22, '2025-05-20 08:03:00'),
(100004, 28, '2025-05-20 08:04:00');

-- Rua B (Ponto 1001, lixeiras 10005 a 10009)
INSERT INTO registro (idSensor, distancia, dataHoraMedicao) VALUES
(100005, 35, '2025-05-20 08:05:00'),
(100006, 32, '2025-05-20 08:06:00'),
(100007, 30, '2025-05-20 08:07:00'),
(100008, 34, '2025-05-20 08:08:00'),
(100009, 33, '2025-05-20 08:09:00');

-- Rua C (Ponto 1002, lixeiras 10010 a 10014)
INSERT INTO registro (idSensor, distancia, dataHoraMedicao) VALUES
(100010, 18, '2025-05-20 08:10:00'),
(100011, 20, '2025-05-20 08:11:00'),
(100012, 22, '2025-05-20 08:12:00'),
(100013, 19, '2025-05-20 08:13:00'),
(100014, 21, '2025-05-20 08:14:00');

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
inner join sensor sen on sen.idSensor = reg.idSensor
inner join lixeira lix on lix.idLixeira = sen.idLixeira
inner join pontoColeta pto on pto.idPontoColeta = lix.idPontoColeta;

/* FAZENDO INSERT PARA NOSSA EMPRESA PARA REALIZAR SUPORTE*/
INSERT INTO empresa (idEmpresa, nomeEmpresa, cnpj, email_contato, telefone_contato)
			values (99999 ,'Suporte TECHBINS', 12349998000100, 'suporte@techbins.com', '11998739090');
            
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, idRepresentanteChefe, podeAdicionarRepresentantes)
			values (99999, 'Lucas Marques de Aquino', 'lucas.aquino@suporte.com', 'lucas123', '55372499987', null, 'S');
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, idRepresentanteChefe, podeAdicionarRepresentantes)
			values (99999, 'Leonardo Borges Fernandes', 'leonardo.borges@suporte.com', 'leo123', '58972499987', null, 'S'),
				   (99999, 'Bruno Prado de Araujo', 'bruno.prado@suporte.com', 'bruno123', '55310099987', null, 'S'),
                   (99999, 'Guilherme Martins Nascimento', 'guilherme.martins@suporte.com', 'gui123', '00272499987', null, 'S'),
                   (99999, 'Fernanda Henckel Hirai de Araújo', 'fernada.henckel@suporte.com', 'fer123', '10572888987', null, 'S'),
                   (99999, 'Nicolas Barboza Javed', 'nicolas.javed@suporte.com', 'nicolas123', '98745699987', null, 'S');

-- Criando view para fazer os selects da página de gráficos
create or replace view view_nivelLixo
as
select reg.*, pto.idEmpresa as 'Identificador da Empresa', pto.logradouro as logradouro, pto.numero as 'Número', pto.cidade as 'Cidade',
case
when distancia <= 18 then '5'
when distancia <= 36 then '4'
when distancia <= 54 then '3'
when distancia <= 72 then '2'
when distancia <= 90 then '1'
else 'Distância acima do previsto'
end as nivel_lixo
from registro reg
inner join sensor sen on sen.idSensor = reg.idSensor
inner join lixeira lix on lix.idLixeira = sen.idLixeira
inner join pontoColeta pto on pto.idPontoColeta = lix.idPontoColeta;

select * from representante;
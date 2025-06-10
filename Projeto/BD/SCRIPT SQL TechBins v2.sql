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
    nomeRota VARCHAR(45) NOT NULL,
    dataRota DATE NOT NULL,
    status VARCHAR(20),
    observacoes TEXT,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
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
('Loga - Logística Ambiental', '23456789000111', 'contato@loga.com.br', '1130032100');

-- Inserindo endereços de empresa (com idEnderecoEmpresa começando em 100 e idEmpresa fictício 1 a 4)
INSERT INTO enderecoEmpresa (logradouro, idEmpresa, numero, complemento, bairro, cidade, estado, cep)
VALUES
('Rua Haddock Lobo', 1, 595, NULL, 'Cerqueira César', 'São Paulo', 'SP', '01414001'),
('Avenida Paulista', 2, 1578, NULL, 'Bela Vista', 'São Paulo', 'SP', '01310100');

-- Inserindo pontos de coleta (com idPontoColeta começando em 1000)
INSERT INTO pontoColeta (idEmpresa, logradouro, numero, complemento, bairro, cidade, estado, cep)
VALUES
(1, 'Rua A', 500, NULL, 'Pinheiros', 'São Paulo', 'SP', '05409001'), -- ponto de coleta 1000
(1, 'Rua B', 100, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09123459'), -- ponto de coleta 1001
(1, 'Rua C', 300, NULL, 'Capão Redondo', 'São Paulo', 'SP', '09053459'), -- ponto de coleta 1002
(1, 'Rua D', 200, NULL, 'Capão Redondo', 'São Paulo', 'SP', '23459079'), -- ponto de coleta 1003
(1, 'Rua E', 600, NULL, 'Capão Redondo', 'São Paulo', 'SP', '27673459'), -- ponto de coleta 1004
(1, 'Rua F', 700, NULL, 'Capão Redondo', 'São Paulo', 'SP', '28654589'), -- ponto de coleta 1005
(2, 'Rua Tuiuti', 1234, NULL, 'Tatuapé', 'São Paulo', 'SP', '03302000'),
(2, 'Rua Emílio Mallet', 890, NULL, 'Tatuapé', 'São Paulo', 'SP', '03320000'),
(2, 'Rua Voluntários da Pátria', 3001, NULL, 'Santana', 'São Paulo', 'SP', '02011000'),
(2, 'Rua Alfredo Pujol', 456, NULL, 'Santana', 'São Paulo', 'SP', '02017000'),
(2, 'Avenida Corifeu de Azevedo Marques', 5200, NULL, 'Butantã', 'São Paulo', 'SP', '05582000'),
(2, 'Rua Camargo', 150, NULL, 'Butantã', 'São Paulo', 'SP', '05508001');


INSERT INTO lixeira (idPontoColeta)
VALUES
(1000), -- lixeira 1 = ponto de coleta 1000 (Rua A)
(1000), -- lixeira 2 = ponto de coleta 1000 (Rua A)
(1000), -- lixeira 3 = ponto de coleta 1000 (Rua A)
(1000), -- lixeira 4 = ponto de coleta 1000 (Rua A)
(1000), -- lixeira 5 = ponto de coleta 1000 (Rua A)
(1001),
(1001),
(1001),
(1001),
(1001),
(1002),
(1002),
(1002),
(1002),
(1002),
(1003),
(1003),
(1003),
(1003),
(1003),
(1004),
(1004),
(1004),
(1004),
(1004),
(1005),
(1005),
(1005),
(1005),
(1005),
(1006),
(1006),
(1006),
(1006),
(1006),
(1007),
(1007),
(1007),
(1007),
(1007),
(1008),
(1008),
(1008),
(1008),
(1008),
(1009),
(1009),
(1009),
(1009),
(1009),
(1010),
(1010),
(1010),
(1010),
(1010),
(1011),
(1011),
(1011),
(1011),
(1011);


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
(10029),
(10030), 
(10031), 
(10032), 
(10033), 
(10034),
(10035), 
(10036), 
(10037),
(10038), 
(10039),
(10040), 
(10041), 
(10042), 
(10043), 
(10044),
(10045), 
(10046), 
(10047),
(10048),
(10049),
(10050), 
(10051), 
(10052), 
(10053), 
(10054),
(10055), 
(10056), 
(10057),
(10058),
(10059);

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

INSERT INTO rota (idEmpresa, nomeRota, dataRota, status, observacoes)
VALUES 
(1, "Rota Pinheiros", '2025-05-20', 'Agendada', 'Coleta da região oeste de SP'),
(1, "Rota Mooca", '2025-06-05', 'Agendada', 'Coleta da região leste de SP'),
(1, "Rota Vila Mariana", '2025-06-10', 'Agendada', 'Coleta da região centro-sul de SP'),
(2, "Rota Tatuapé", '2025-06-15', 'Agendada', 'Coleta na região do Tatuapé e arredores'),
(2, "Rota Santana", '2025-06-16', 'Agendada', 'Coleta na região norte de SP - Santana'),
(2, "Rota Butantã", '2025-06-17', 'Agendada', 'Coleta na região oeste de SP - Butantã');

INSERT INTO rotaPontoColeta (idRota, idPontoColeta, ordem)
VALUES 
(1, 1000, 1),
(1, 1001, 2),
(2, 1002, 1),
(2, 1003, 2),
(3, 1004, 1),
(3, 1005, 2),
(4, 1006, 1),
(4, 1007, 2),
(5, 1008, 1),
(5, 1009, 2),
(6, 1010, 1),
(6, 1011, 2);



/* FAZENDO INSERT PARA NOSSA EMPRESA PARA REALIZAR SUPORTE*/
INSERT INTO empresa (idEmpresa, nomeEmpresa, cnpj, email_contato, telefone_contato)
			values (99999 ,'Suporte TECHBINS', 12349998000100, 'suporte@techbins.com', '11998739090');
            
INSERT INTO representante (idEmpresa, nomeRepresentante, email_contato, senha, cpf, idRepresentanteChefe, podeAdicionarRepresentantes)
			values (99999, 'Lucas Marques de Aquino', 'lucas.aquino@suporte.com', 'lucas123', '55372499987', null, 'S'),
			       (99999, 'Leonardo Borges Fernandes', 'leonardo.borges@suporte.com', 'leo123', '58972499987', null, 'S'),
				   (99999, 'Bruno Prado de Araujo', 'bruno.prado@suporte.com', 'bruno123', '55310099987', null, 'S'),
                   (99999, 'Guilherme Martins Nascimento', 'guilherme.martins@suporte.com', 'gui123', '00272499987', null, 'S'),
                   (99999, 'Fernanda Henckel Hirai de Araújo', 'fernada.henckel@suporte.com', 'fer123', '10572888987', null, 'S'),
                   (99999, 'Nicolas Barboza Javed', 'nicolas.javed@suporte.com', 'nicolas123', '98745699987', null, 'S');
                   
INSERT INTO enderecoEmpresa (logradouro, idEmpresa, numero, complemento, bairro, cidade, estado, cep)
values             ('Rua Haddock Lobo', 99999, 595, NULL, 'Cerqueira César', 'São Paulo', 'SP', '01414001');

-- Criando view para fazer os selects da página de gráficos
create or replace view view_nivelLixo
as
select reg.*, rota.idRota as idRota, rota.nomeRota as nomeRota, pto.idEmpresa as idEmpresa, pto.logradouro as logradouro, 
pto.numero as 'Número', pto.cidade as 'Cidade',
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
inner join pontoColeta pto on pto.idPontoColeta = lix.idPontoColeta
inner join rotaPontoColeta rpc on rpc.idPontoColeta = pto.idPontoColeta
inner join rota on rota.idRota = rpc.idRota;

select * from representante;

select * from view_nivelLixo;

update representante set email_contato = 'fernanda.henckel@suporte.com' where idRepresentante = 9;
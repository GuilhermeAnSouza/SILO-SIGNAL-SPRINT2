CREATE DATABASE silosignal;

USE silosignal;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(45),
    cnpj CHAR(14) unique,
    telEmp CHAR(11),
    emailEmp VARCHAR(45),
    codigoAtivacao varchar(50) unique,
    fk_responsavel INT
);

insert into empresa (razaoSocial, cnpj, telEmp, emailEmp) values
('SPTECH', '12345678914527', '11236589741', 'SPTECH@gmail.com'),
('Silo Tech', '98765434578961', '11980775433', 'silo@tech.com');

select * from empresa;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    telComercial char(11),
	email varchar(45),
    senha varchar(45),
    fk_supervisor int,
    constraint fkUsuarioResponsavel foreign key (fk_supervisor) references usuario(idUsuario),
    fk_empresa int,
    constraint fkUsuarioEmpresa foreign key (fk_empresa) references empresa(idEmpresa)
);

insert into usuario (nome, telComercial, email, senha) values
('João', '11948791977', 'joao@hotmail.com', 'Joao@2020'),
('Guilherme', '11948794499', 'guilherme@hotmail.com', 'Gui@2020'),
('João Roberto', '11987659998', 'joao@silotech.com', 'joao@2024'),
('Marcelo Henrique', '11909871234', 'marcelo@silotech.com', 'marcelo@2024'),
('Felippe Santos', '11929384567', 'felippe@silotech.com', 'felippe@2024'),
('Shirley Ferreira', '11989412398', 'shirley@silotech.com', 'shirley@2024'),
('Linya Mendonça', '11999098878', 'linya@silotech.com', 'linya@2024'),
('Guilherme Antônio', '11956564747', 'guilherme@silotech.com', 'guilherme@2024');

select * from usuario;

update empresa set fk_responsavel = 1 where idEmpresa = 1;
update usuario set fk_empresa = 1 where idUsuario = 1;
update usuario set fk_empresa = 1 where idUsuario = 2;
update usuario set fk_empresa = 2 where idUsuario = 3;
update usuario set fk_empresa = 2 where idUsuario = 4;
update usuario set fk_empresa = 2 where idUsuario = 5;
update usuario set fk_empresa = 2 where idUsuario = 6;
update usuario set fk_empresa = 2 where idUsuario = 7;
update usuario set fk_empresa = 2 where idUsuario = 8;

select * from usuario;

create table silo(
    idSilo INT PRIMARY KEY AUTO_INCREMENT,
    capacidadeMaxima DECIMAL(9, 2),
    qtdSojaAtual DECIMAL(9, 2),
    dtArmazenamentoSoja date,
    fk_empresa INT,
    CONSTRAINT fkEmpresaResponsavelSilo FOREIGN KEY (fk_empresa)
        REFERENCES empresa (idEmpresa)
);

insert into silo values 
(default, 3000, 2800, '2024-02-02', 1), 
(default, 7000, 6800, '2024-02-22', 1);

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY auto_increment,
    dtImplementacao DATE,
    porcentagemDetec DECIMAL(4, 2),
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    statusFuncionamento VARCHAR(45),
    fk_silo INT,
    CONSTRAINT chkFuncionamentoSensor CHECK (statusFuncionamento IN ('Ativo', 'Inativo'))
);


SELECT sensor.porcentagemDetec FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = 1 and fk_silo = 2;

select * from sensor;

create table tecnico (
    idTecnico int primary key auto_increment,
    nome varchar(45),
    telefone char(11),
    email varchar(45)
);

create table manutencao (
    idManutencao int,
    fkTecnico int,
    fkSensor int,
        foreign key (fkTecnico) references Tecnico(idTecnico),
        foreign key (fkSensor) references Sensor(idsensor),
    dtManutencao date,
    descricao varchar(100),
    primary key (idManutencao, fkTecnico, fkSensor)
);


INSERT INTO sensor (porcentagemDetec, dataHora, fk_silo) VALUES
(10.25, '2024-11-26 11:30:00', 1),
(9.75, '2024-11-19 11:30:00', 1),
(9.25, '2024-11-12 11:30:00', 1),
(8.95, '2024-11-05 11:30:00', 1),
(8.25, '2024-10-10 08:45:00', 1),
(6.55, '2024-09-10 08:20:00', 1),
(5.20, '2024-08-10 09:10:00', 1),
(3.15, '2024-07-10 12:00:00', 1),
(2.80, '2024-06-10 10:00:00', 1);

select * from sensor;


-- drop database silosignal;
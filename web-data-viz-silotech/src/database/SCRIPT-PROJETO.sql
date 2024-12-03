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
('Sojas 1000 grau', '12345678914527', '11236589741', 'soja1000grau@gmail.com'),
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
('Joaozinho', '11948791977', 'joao@hotmail.com', 'Marcelo@2010'),
('Guilherme', '11948794499', 'guilherme@hotmail.com', 'Gui@2020'),
('João Roberto', '11987659998', 'joao@silotech.com', 'joao@2024'),
('Marcelo Henrique', '11909871234', 'marcelo@silotech.com', 'marcelo@2024'),
('Felippe Santos', '11929384567', 'felippe@silotech.com', 'felippe@2024'),
('Shirley Ferreira', '11989412398', 'shirley@silotech.com', 'shirley@2024'),
('Linya Mendonça', '11999098878', 'linya@silotech.com', 'linya@2024'),
('Guilherme Antônio', '11956564747', 'guilherme@silotech.com', 'guilherme@2024');

update empresa set fk_responsavel = 1 where idEmpresa = 1;

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


INSERT INTO sensor (idSensor, porcentagemDetec, dataHora, fk_silo) VALUES 
(DEFAULT, 3.25, '2024-11-01 10:15:00', 2),
(DEFAULT, 4.50, '2024-11-02 08:30:00', 2),
(DEFAULT, 8.75, '2024-11-05 14:45:00', 2),
(DEFAULT, 10.50, '2024-11-06 16:20:00', 2),
(DEFAULT, 2.85, '2024-11-07 09:10:00', 2),
(DEFAULT, 9.15, '2024-11-08 17:25:00', 2),
(DEFAULT, 12.45, '2024-11-09 18:00:00', 2),
(DEFAULT, 1.25, '2024-11-10 11:30:00', 2),
(DEFAULT, 6.80, '2024-11-12 13:45:00', 2),
(DEFAULT, 3.95, '2024-11-13 07:20:00', 2),
(DEFAULT, 11.65, '2024-11-14 15:30:00', 2),
(DEFAULT, 5.25, '2024-10-10 08:45:00', 2),
(DEFAULT, 4.95, '2024-10-15 11:50:00', 2),
(DEFAULT, 13.80, '2024-10-20 16:10:00', 2),
(DEFAULT, 7.50, '2024-10-22 09:25:00', 2),
(DEFAULT, 2.45, '2024-10-25 14:55:00', 2),
(DEFAULT, 10.00, '2024-10-26 18:15:00', 2),
(DEFAULT, 6.75, '2024-10-28 12:35:00', 2),
(DEFAULT, 0.95, '2024-10-30 07:45:00', 2),
(DEFAULT, 3.75, '2024-09-05 10:00:00', 2),
(DEFAULT, 14.15, '2024-09-07 15:10:00', 2),
(DEFAULT, 8.55, '2024-09-10 08:20:00', 2),
(DEFAULT, 5.05, '2024-09-12 14:30:00', 2),
(DEFAULT, 4.25, '2024-09-15 16:45:00', 2),
(DEFAULT, 9.85, '2024-09-18 12:50:00', 2),
(DEFAULT, 2.35, '2024-09-20 07:35:00', 2),
(DEFAULT, 11.20, '2024-08-01 09:10:00', 2),
(DEFAULT, 8.10, '2024-08-05 13:25:00', 2),
(DEFAULT, 3.40, '2024-08-07 11:45:00', 2),
(DEFAULT, 5.95, '2024-08-12 16:30:00', 2),
(DEFAULT, 12.00, '2024-08-15 18:10:00', 2),
(DEFAULT, 7.25, '2024-08-18 14:20:00', 2),
(DEFAULT, 2.80, '2024-08-22 07:50:00', 2),
(DEFAULT, 0.50, '2024-08-25 10:35:00', 2),
(DEFAULT, 6.55, '2024-08-28 13:40:00', 2),
(DEFAULT, 13.45, '2024-08-30 16:50:00', 2),
(DEFAULT, 9.05, '2024-07-05 08:55:00', 2),
(DEFAULT, 3.15, '2024-07-10 12:00:00', 2),
(DEFAULT, 10.85, '2024-07-15 14:15:00', 2);

select * from sensor;


-- drop database silosignal;
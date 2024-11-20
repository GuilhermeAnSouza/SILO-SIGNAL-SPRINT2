CREATE DATABASE silosignal;

USE silosignal;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(45),
    cnpj CHAR(14) unique,
    telEmp CHAR(11),
    emailEmp VARCHAR(45),
    codigoAtivacao varchar(50) unique,
    codigoTecnico char(6) unique,
    fk_responsavel INT
);

insert into empresa (razaoSocial, cnpj, telEmp, emailEmp) values
('Sojas 1000 grau', '12345678914527', '11236589741', 'soja1000grau@gmail.com');

select * from empresa;

update empresa set fk_responsavel = 1 where idEmpresa = 1;

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
('Joaozinho', '11948791977', 'joao@hotmail.com', 'Marcelo@2010');

insert into usuario (nome, telComercial, email, senha) values
('Guilherme', '11948794499', 'guilherme@hotmail.com', 'Gui@2020');

update usuario set fk_empresa = 1 where idUsuario = 2;

select * from usuario;

alter table empresa add constraint fkResponsavelEmpresa foreign key (fk_responsavel) references usuario(idUsuario); 

create table silo(
    idSilo INT PRIMARY KEY AUTO_INCREMENT,
    statusFuncionamento VARCHAR(45),
    capacidadeMaxima DECIMAL(9, 2),
    qtdSojaAtual DECIMAL(9, 2),
    dtArmazenamentoSoja date,
    fk_empresa INT,
    CONSTRAINT fkEmpresaResponsavelSilo FOREIGN KEY (fk_empresa)
        REFERENCES empresa (idEmpresa),
	constraint chkFuncionamento check(statusFuncionamento in ('Ativo', 'Inativo'))
);

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    dtImplementacao DATE,
    porcentagemDetec DECIMAL(4 , 2 ),
    dataHora DATETIME default current_timestamp,
    statusFuncionamento VARCHAR(45),
    alerta varchar(45),
    fk_silo INT,
    constraint chkFuncionamentoSensor check(statusFuncionamento in ('Ativo', 'Inativo'))
);

SELECT * FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = 1;

-- drop database silosignal;
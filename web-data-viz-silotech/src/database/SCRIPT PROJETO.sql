CREATE DATABASE silosignal;

USE silosignal;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(45),
    cnpj CHAR(14),
    telComercial CHAR(11),
    email VARCHAR(45),
    fk_responsavel INT
);

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

-- perguntar pra julia/ fernando

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);
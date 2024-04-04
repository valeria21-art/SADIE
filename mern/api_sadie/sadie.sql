

create database sadie;
USE `sadie`;

create table tipodocumento ( 
tdoc varchar (10) primary key,
desc_tdoc varchar (45) not null,
tdoc_estado TINYINT not null
);

CREATE TABLE `materias` (
  `idMeterias` int(11) NOT NULL,
  `materias` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `permisos` (
  `tdoc` int(11) NOT NULL,
  `fk_id_rol` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `personas` (
  `idPersonas` int(11) NOT NULL,
  `tdocPersonas` varchar(25) NOT NULL,
  `Ndoc_Personas` varchar(10) NOT NULL,
  `Primer_Nom` varchar(25) NOT NULL,
  `Segundo_Nom` varchar(25) NOT NULL,
  `Primer_Apell` varchar(25) NOT NULL,
  `Segundo_Apell` varchar(25) NOT NULL,
  `Direccion` varchar(45) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Correo` varchar(25) NOT NULL,
  `Roles_rol` varchar(20) NOT NULL,
  `Password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

create table pregunta_seguridad (
    n_pregunta int not null,
    pregunta_seg varchar(45) not null,
    rest_pregunta boolean,
    primary key (n_pregunta)
);

CREATE TABLE `reportes` (
  `idReportes` int(11) NOT NULL,
  `Fecha_Reportes` varchar(40) NOT NULL,
  `Asistencia` varchar(45) NOT NULL,
  `Inasistencia` varchar(45) NOT NULL,
  `Desertados` varchar(45) NOT NULL,
  `QR_id_QR` int(11) NOT NULL,
  `Docen_id_docen` varchar(15) NOT NULL,
  `Docen_tdoc_Docen` varchar(10) NOT NULL,
  `Estu_id_Estu` varchar(15) NOT NULL,
  `Estu_tdoc_Estu` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `roles` (
  `idRoles` int(11) NOT NULL,
  `Rol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `semestre` (
  `idSemestre` int(11) NOT NULL,
  `Semestre_Formacion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `materias`
  ADD PRIMARY KEY (`idMeterias`);

ALTER TABLE `permisos`
  ADD PRIMARY KEY (`tdoc`);

ALTER TABLE `personas`
  ADD PRIMARY KEY (`idPersonas`);

ALTER TABLE `qr`
  ADD PRIMARY KEY (`idQR`);

ALTER TABLE `reportes`
  ADD PRIMARY KEY (`idReportes`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRoles`);

ALTER TABLE `semestre`
  ADD PRIMARY KEY (`idSemestre`);

ALTER TABLE `materias`
  MODIFY `idMeterias` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `permisos`
  MODIFY `tdoc` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `personas`
  MODIFY `idPersonas` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `qr`
  MODIFY `idQR` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `reportes`
  MODIFY `idReportes` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `roles`
  MODIFY `idRoles` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `semestre`
  MODIFY `idSemestre` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

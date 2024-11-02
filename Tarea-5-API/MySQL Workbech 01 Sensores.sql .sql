CREATE DATABASE IF NOT EXISTS sensores;
USE sensores;

#create tabla temperatura
CREATE TABLE IF NOT EXISTS temperatura (
	id_fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    temp INT
) ENGINE INNODB;

#create tabla humedad
CREATE TABLE IF NOT EXISTS humedad (
	id_fecha_h TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	humedad INT
) ENGINE INNODB;


INSERT INTO temperatura (temp) VALUES (27);
INSERT INTO temperatura (temp) VALUES (25);
INSERT INTO humedad (humedad) VALUES (12);
INSERT INTO humedad (humedad) VALUES (14);

SELECT * FROM temperatura;

SELECT * FROM humedad;

SELECT * FROM temperatura;

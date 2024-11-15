-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.1.0 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para knexjs-m-m
CREATE DATABASE IF NOT EXISTS `knexjs-m-m` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `knexjs-m-m`;

-- Copiando estrutura para tabela knexjs-m-m.estudios
CREATE TABLE IF NOT EXISTS `estudios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela knexjs-m-m.estudios: ~7 rows (aproximadamente)
DELETE FROM `estudios`;
INSERT INTO `estudios` (`id`, `nome`) VALUES
	(1, 'Blizzard'),
	(2, 'Activision'),
	(3, 'Blizzard South'),
	(6, 'Rockstar Games'),
	(7, 'Rockstar North'),
	(8, 'Rockstar San Diego'),
	(9, 'Rockstar London');

-- Copiando estrutura para tabela knexjs-m-m.games
CREATE TABLE IF NOT EXISTS `games` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) DEFAULT '0',
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela knexjs-m-m.games: ~7 rows (aproximadamente)
DELETE FROM `games`;
INSERT INTO `games` (`id`, `nome`, `preco`) VALUES
	(1, 'Sea of Thieves', 50.67),
	(2, 'Call of Dutty', 60),
	(3, 'Call of Dutty 2', 80),
	(4, 'GTA', 40),
	(5, 'WoW', 70),
	(16, 'Bully', 20),
	(17, 'Midnight Club', 12);

-- Copiando estrutura para tabela knexjs-m-m.games_estudios
CREATE TABLE IF NOT EXISTS `games_estudios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int unsigned DEFAULT '0',
  `estudio_id` int unsigned DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_games_estudios_games` (`game_id`),
  KEY `FK_games_estudios_estudios` (`estudio_id`),
  CONSTRAINT `FK_games_estudios_estudios` FOREIGN KEY (`estudio_id`) REFERENCES `estudios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_games_estudios_games` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela knexjs-m-m.games_estudios: ~6 rows (aproximadamente)
DELETE FROM `games_estudios`;
INSERT INTO `games_estudios` (`id`, `game_id`, `estudio_id`) VALUES
	(1, 4, 2),
	(2, 4, 6),
	(3, 4, 9),
	(4, 16, 6),
	(5, 17, 8),
	(6, 5, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

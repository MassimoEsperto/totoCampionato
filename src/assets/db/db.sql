-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 10, 2022 alle 01:08
-- Versione del server: 5.6.33-log
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_marescafantaeuropeo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `cannonieri`
--

CREATE TABLE IF NOT EXISTS `cannonieri` (
  `id_cannoniere` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(40) NOT NULL,
  PRIMARY KEY (`id_cannoniere`),
  UNIQUE KEY `descrizione` (`descrizione`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `cannonieri`
--

INSERT INTO `cannonieri` (`id_cannoniere`, `descrizione`) VALUES
(8, 'PINAMONTI'),
(7, 'SIMEONE'),
(3, 'RONALDO'),
(2, 'IMMOBILE'),
(9, 'Ficcadenti');

-- --------------------------------------------------------

--
-- Struttura della tabella `cannonieri_comp`
--

CREATE TABLE IF NOT EXISTS `cannonieri_comp` (
  `id_ass` int(11) NOT NULL AUTO_INCREMENT,
  `cannoniere_id` int(11) NOT NULL,
  `comp_id` int(11) NOT NULL,
  PRIMARY KEY (`id_ass`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dump dei dati per la tabella `cannonieri_comp`
--

INSERT INTO `cannonieri_comp` (`id_ass`, `cannoniere_id`, `comp_id`) VALUES
(7, 8, 1),
(2, 3, 1),
(3, 2, 1),
(4, 4, 1),
(8, 8, 2),
(10, 3, 2),
(11, 7, 2),
(12, 7, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `categorie`
--

INSERT INTO `categorie` (`id_categoria`, `descrizione`) VALUES
(1, 'PARTITE'),
(2, 'ANTEPOST'),
(3, 'GIRONI'),
(4, 'ELIMINATORIE');

-- --------------------------------------------------------

--
-- Struttura della tabella `competizioni`
--

CREATE TABLE IF NOT EXISTS `competizioni` (
  `id_comp` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL DEFAULT 'fanta maresca',
  `sigla` varchar(10) NOT NULL DEFAULT 'GENERICA',
  `scadenza` varchar(20) NOT NULL DEFAULT '2021/08/07',
  `is_attiva` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'specifica se lacompetizione è attiva e quindi è possibile partecipare',
  `is_open` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'quando la competizione è attiva ma non si possono inserire piu nuovi pronostici',
  PRIMARY KEY (`id_comp`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dump dei dati per la tabella `competizioni`
--

INSERT INTO `competizioni` (`id_comp`, `nome`, `sigla`, `scadenza`, `is_attiva`, `is_open`) VALUES
(1, 'champions league', 'CHAMPIONS', '2022/06/10 10:00:00', 1, 0),
(2, 'europa league', 'EUROPA-LG', '2022/08/07', 1, 1),
(3, 'mondiali 2022', 'MONDIALE', '2022/08/07', 1, 0),
(4, 'fanta coppa italia', 'COPPA-IT', '2022/08/07', 1, 0),
(12, 'testtt', 'HJH', '2022/08/07', 1, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `risultati_eventi`
--

CREATE TABLE IF NOT EXISTS `risultati_eventi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `evento_id` int(11) NOT NULL,
  `risultato` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

--
-- Dump dei dati per la tabella `risultati_eventi`
--

INSERT INTO `risultati_eventi` (`id`, `evento_id`, `risultato`) VALUES
(29, 1, '2-1'),
(25, 6, 'INTER'),
(19, 8, 'IMMOBILE'),
(18, 8, 'RONALDO'),
(24, 6, 'JUVENTUS'),
(23, 9, 'INTER'),
(26, 6, 'ATALANTA'),
(27, 2, '2-2'),
(39, 3, '4-3'),
(31, 7, 'INTER'),
(32, 7, 'JUVENTUS'),
(33, 10, 'JUVENTUS'),
(34, 11, 'NAPOLI'),
(35, 4, '2-1'),
(40, 5, 'NAPOLI'),
(37, 18, 'ROM-LAZ-FIO-ATA'),
(38, 17, 'FIORENTINA'),
(41, 12, 'MILAN'),
(42, 14, 'FIORENTINA'),
(43, 16, 'ATALANTA');

-- --------------------------------------------------------

--
-- Struttura della tabella `scheda_master`
--

CREATE TABLE IF NOT EXISTS `scheda_master` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `comp_id` int(11) NOT NULL,
  `view` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL DEFAULT '',
  `categoria_id` int(11) NOT NULL,
  `gruppo_punti_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_evento`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dump dei dati per la tabella `scheda_master`
--

INSERT INTO `scheda_master` (`id_evento`, `comp_id`, `view`, `girone`, `categoria_id`, `gruppo_punti_id`) VALUES
(1, 1, 'INTER-JUVENTUS', 'A', 1, 0),
(2, 1, 'NAPOLI-MILAN', 'A', 1, 0),
(3, 1, 'ROMA-LAZIO', 'B', 1, 0),
(4, 1, 'FIORENTINA-ATALANTA', 'B', 1, 0),
(5, 1, 'Vincente Torneo', '', 2, 7),
(6, 1, 'Miglior Attacco', '', 2, 8),
(7, 1, 'Miglior Difesa', '', 2, 9),
(8, 1, 'Capocannoniere', '', 2, 10),
(9, 1, 'Prima Girone A', 'A', 3, 11),
(10, 1, 'Seconda Girone A', 'A', 3, 12),
(11, 1, 'Terza Girone A', 'A', 3, 13),
(12, 1, 'Ultima Girone A', 'A', 3, 14),
(13, 1, 'Girone Completo A', 'A', 3, 15),
(14, 1, 'Prima Girone B', 'B', 3, 11),
(15, 1, 'Seconda Girone B', 'B', 3, 12),
(16, 1, 'Terza Girone B', 'B', 3, 13),
(17, 1, 'Ultima Girone B', 'B', 3, 14),
(18, 1, 'Girone Completo B', 'B', 3, 15),
(24, 2, 'Capocannoniere', '', 2, 10),
(22, 2, 'INTER-JUVENTUS', '', 1, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `schedina_dettaglio`
--

CREATE TABLE IF NOT EXISTS `schedina_dettaglio` (
  `id_dettaglio` int(11) NOT NULL AUTO_INCREMENT,
  `schedina_id` int(11) NOT NULL,
  `evento_id` int(11) NOT NULL,
  `valore` varchar(40) NOT NULL,
  `punti` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_dettaglio`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=653 ;

--
-- Dump dei dati per la tabella `schedina_dettaglio`
--

INSERT INTO `schedina_dettaglio` (`id_dettaglio`, `schedina_id`, `evento_id`, `valore`, `punti`) VALUES
(1, 1, 1, '3-4', 0),
(2, 1, 2, '2', 0),
(3, 1, 3, 'UNDER', 0),
(4, 1, 4, 'NOGOL', 0),
(5, 1, 5, 'FIORENTINA', 0),
(6, 1, 6, 'ATALANTA', 8),
(7, 1, 7, 'NAPOLI', 0),
(8, 1, 8, 'PINAMONTI', 0),
(9, 1, 9, 'INTER', 5),
(10, 1, 10, 'JUVENTUS', 18),
(11, 1, 11, 'NAPOLI', 4),
(12, 1, 12, 'MILAN', 2),
(13, 1, 13, 'INT-JVE-NAP-MIL', 0),
(14, 1, 14, 'ROMA', 0),
(15, 1, 15, 'LAZIO', 0),
(16, 1, 16, 'FIORENTINA', 0),
(17, 1, 17, 'ATALANTA', 0),
(18, 1, 18, 'ROM-LAZ-FIO-ATA', 5),
(19, 2, 1, 'PARI', 0),
(20, 2, 2, '2', 0),
(21, 2, 3, 'UNDER', 0),
(22, 2, 4, 'NOGOL', 0),
(23, 2, 5, 'FIORENTINA', 0),
(24, 2, 6, 'ATALANTA', 8),
(25, 2, 7, 'NAPOLI', 0),
(26, 2, 8, 'PINAMONTI', 0),
(27, 2, 9, 'JUVENTUS', 0),
(28, 2, 10, 'INTER', 0),
(29, 2, 11, 'NAPOLI', 4),
(30, 2, 12, 'MILAN', 2),
(31, 2, 13, 'JVE-INT-NAP-MIL', 0),
(32, 2, 14, 'ROMA', 0),
(33, 2, 15, 'LAZIO', 0),
(34, 2, 16, 'FIORENTINA', 0),
(35, 2, 17, 'ATALANTA', 0),
(36, 2, 18, 'ROM-LAZ-FIO-ATA', 5),
(37, 3, 1, '1X', 2),
(38, 3, 2, '2', 0),
(39, 3, 3, 'UNDER', 0),
(40, 3, 4, 'NOGOL', 0),
(41, 3, 5, 'FIORENTINA', 0),
(42, 3, 6, 'ATALANTA', 8),
(43, 3, 7, 'NAPOLI', 0),
(44, 3, 8, 'PINAMONTI', 0),
(45, 3, 9, 'INTER', 5),
(46, 3, 10, 'JUVENTUS', 18),
(47, 3, 11, 'NAPOLI', 4),
(48, 3, 12, 'MILAN', 2),
(49, 3, 13, 'INT-JVE-NAP-MIL', 0),
(50, 3, 14, 'ROMA', 0),
(51, 3, 15, 'LAZIO', 0),
(52, 3, 16, 'FIORENTINA', 0),
(53, 3, 17, 'ATALANTA', 0),
(54, 3, 18, 'ROM-LAZ-FIO-ATA', 5),
(55, 4, 1, '1', 3),
(56, 4, 2, '2', 0),
(57, 4, 3, 'UNDER', 0),
(58, 4, 4, 'NOGOL', 0),
(59, 4, 5, 'FIORENTINA', 0),
(60, 4, 6, 'ATALANTA', 8),
(61, 4, 7, 'NAPOLI', 0),
(62, 4, 8, 'PINAMONTI', 0),
(63, 4, 9, 'INTER', 5),
(64, 4, 10, 'JUVENTUS', 18),
(65, 4, 11, 'NAPOLI', 4),
(66, 4, 12, 'MILAN', 2),
(67, 4, 13, 'INT-JVE-NAP-MIL', 0),
(68, 4, 14, 'ATALANTA', 0),
(69, 4, 15, 'FIORENTINA', 0),
(70, 4, 16, 'ROMA', 0),
(71, 4, 17, 'LAZIO', 0),
(72, 4, 18, 'ATA-FIO-ROM-LAZ', 0),
(73, 5, 1, 'DISPARI', 2),
(74, 5, 2, '2', 0),
(75, 5, 3, 'UNDER', 0),
(76, 5, 4, 'NOGOL', 0),
(77, 5, 5, 'FIORENTINA', 0),
(78, 5, 6, 'ATALANTA', 8),
(79, 5, 7, 'NAPOLI', 0),
(80, 5, 8, 'PINAMONTI', 0),
(81, 5, 9, 'INTER', 5),
(82, 5, 10, 'JUVENTUS', 18),
(83, 5, 11, 'NAPOLI', 4),
(84, 5, 12, 'MILAN', 2),
(85, 5, 13, 'INT-JVE-NAP-MIL', 0),
(86, 5, 14, 'ROMA', 0),
(87, 5, 15, 'LAZIO', 0),
(88, 5, 16, 'FIORENTINA', 0),
(89, 5, 17, 'ATALANTA', 0),
(90, 5, 18, 'ROM-LAZ-FIO-ATA', 5),
(91, 6, 1, 'NOGOL', 0),
(92, 6, 2, 'NOGOL', 0),
(93, 6, 3, 'NOGOL', 0),
(94, 6, 4, 'UNDER', 0),
(95, 6, 5, 'NAPOLI', 10),
(96, 6, 6, 'ATALANTA', 8),
(97, 6, 7, 'ROMA', 0),
(98, 6, 8, 'PINAMONTI', 0),
(99, 6, 9, 'NAPOLI', 0),
(100, 6, 10, 'JUVENTUS', 18),
(101, 6, 11, 'INTER', 0),
(102, 6, 12, 'MILAN', 2),
(103, 6, 13, 'NAP-JVE-INT-MIL', 0),
(104, 6, 14, 'ROMA', 0),
(105, 6, 15, 'LAZIO', 0),
(106, 6, 16, 'FIORENTINA', 0),
(107, 6, 17, 'ATALANTA', 0),
(108, 6, 18, 'ROM-LAZ-FIO-ATA', 5),
(109, 7, 1, '1-0', 0),
(110, 7, 2, 'PARI', 2),
(111, 7, 3, 'X2', 0),
(112, 7, 4, 'X', 0),
(113, 7, 5, 'JUVENTUS', 0),
(114, 7, 6, 'ATALANTA', 8),
(115, 7, 7, 'FIORENTINA', 0),
(116, 7, 8, 'PINAMONTI', 0),
(117, 7, 9, 'INTER', 5),
(118, 7, 10, 'JUVENTUS', 18),
(119, 7, 11, 'NAPOLI', 4),
(120, 7, 12, 'MILAN', 2),
(121, 7, 13, 'INT-JVE-NAP-MIL', 0),
(122, 7, 14, 'ROMA', 0),
(123, 7, 15, 'LAZIO', 0),
(124, 7, 16, 'FIORENTINA', 0),
(125, 7, 17, 'ATALANTA', 0),
(126, 7, 18, 'ROM-LAZ-FIO-ATA', 5),
(127, 8, 1, '4-3', 0),
(128, 8, 2, 'X', 3),
(129, 8, 3, 'X2', 0),
(130, 8, 4, 'UNDER', 0),
(131, 8, 5, 'LAZIO', 0),
(132, 8, 6, 'FIORENTINA', 0),
(133, 8, 7, 'ROMA', 0),
(134, 8, 8, 'RONALDO', 20),
(135, 8, 9, 'INTER', 5),
(136, 8, 10, 'JUVENTUS', 18),
(137, 8, 11, 'NAPOLI', 4),
(138, 8, 12, 'MILAN', 2),
(139, 8, 13, 'INT-JVE-NAP-MIL', 0),
(140, 8, 14, 'ROMA', 0),
(141, 8, 15, 'LAZIO', 0),
(142, 8, 16, 'FIORENTINA', 0),
(143, 8, 17, 'ATALANTA', 0),
(144, 8, 18, 'ROM-LAZ-FIO-ATA', 5),
(145, 9, 1, '1', 3),
(146, 9, 2, '2', 0),
(147, 9, 3, '1X', 2),
(148, 9, 4, '2', 0),
(149, 9, 5, 'ROMA', 0),
(150, 9, 6, 'ROMA', 0),
(151, 9, 7, 'MILAN', 0),
(152, 9, 8, 'IMMOBILE', 20),
(153, 9, 9, 'INTER', 5),
(154, 9, 10, 'JUVENTUS', 18),
(155, 9, 11, 'NAPOLI', 4),
(156, 9, 12, 'MILAN', 2),
(157, 9, 13, 'INT-JVE-NAP-MIL', 0),
(158, 9, 14, 'ROMA', 0),
(159, 9, 15, 'LAZIO', 0),
(160, 9, 16, 'FIORENTINA', 0),
(161, 9, 17, 'ATALANTA', 0),
(162, 9, 18, 'ROM-LAZ-FIO-ATA', 5),
(163, 10, 1, 'NOGOL', 0),
(164, 10, 2, 'X', 3),
(165, 10, 3, '1X', 2),
(166, 10, 4, 'UNDER', 0),
(167, 10, 5, 'MILAN', 0),
(168, 10, 6, 'ROMA', 0),
(169, 10, 7, 'LAZIO', 0),
(170, 10, 8, 'RONALDO', 20),
(171, 10, 9, 'NAPOLI', 0),
(172, 10, 10, 'INTER', 0),
(173, 10, 11, 'JUVENTUS', 0),
(174, 10, 12, 'MILAN', 2),
(175, 10, 13, 'NAP-INT-JVE-MIL', 0),
(176, 10, 14, 'ROMA', 0),
(177, 10, 15, 'LAZIO', 0),
(178, 10, 16, 'FIORENTINA', 0),
(179, 10, 17, 'ATALANTA', 0),
(180, 10, 18, 'ROM-LAZ-FIO-ATA', 5),
(181, 11, 1, '1X', 2),
(182, 11, 2, 'OVER', 2),
(183, 11, 3, 'NOGOL', 0),
(184, 11, 4, '3-2', 0),
(185, 11, 5, 'LAZIO', 0),
(186, 11, 6, 'LAZIO', 0),
(187, 11, 7, 'FIORENTINA', 0),
(188, 11, 8, 'PINAMONTI', 0),
(189, 11, 9, 'JUVENTUS', 0),
(190, 11, 10, 'NAPOLI', 0),
(191, 11, 11, 'INTER', 0),
(192, 11, 12, 'MILAN', 2),
(193, 11, 13, 'JVE-NAP-INT-MIL', 0),
(194, 11, 14, 'ROMA', 0),
(195, 11, 15, 'LAZIO', 0),
(196, 11, 16, 'FIORENTINA', 0),
(197, 11, 17, 'ATALANTA', 0),
(198, 11, 18, 'ROM-LAZ-FIO-ATA', 5),
(199, 12, 22, 'X', 0),
(200, 12, 24, 'RONALDO', 0),
(201, 13, 22, 'X', 0),
(202, 13, 24, 'RONALDO', 0),
(203, 14, 1, '1', 3),
(204, 14, 2, '1X', 2),
(205, 14, 3, 'UNDER', 0),
(206, 14, 4, 'NOGOL', 0),
(207, 14, 5, 'FIORENTINA', 0),
(208, 14, 6, 'ATALANTA', 8),
(209, 14, 7, 'NAPOLI', 0),
(210, 14, 8, 'PINAMONTI', 0),
(211, 14, 9, 'INTER', 5),
(212, 14, 10, 'JUVENTUS', 18),
(213, 14, 11, 'NAPOLI', 4),
(214, 14, 12, 'MILAN', 2),
(215, 14, 13, 'INT-JVE-NAP-MIL', 0),
(216, 14, 14, 'ROMA', 0),
(217, 14, 15, 'LAZIO', 0),
(218, 14, 16, 'FIORENTINA', 0),
(219, 14, 17, 'ATALANTA', 0),
(220, 14, 18, 'ROM-LAZ-FIO-ATA', 5),
(221, 15, 1, '3-4', 0),
(222, 15, 2, '2', 0),
(223, 15, 3, 'UNDER', 0),
(224, 15, 4, 'NOGOL', 0),
(225, 15, 5, 'FIORENTINA', 0),
(226, 15, 6, 'ATALANTA', 8),
(227, 15, 7, 'NAPOLI', 0),
(228, 15, 8, 'PINAMONTI', 0),
(229, 15, 9, 'INTER', 5),
(230, 15, 10, 'JUVENTUS', 18),
(231, 15, 11, 'NAPOLI', 4),
(232, 15, 12, 'MILAN', 2),
(233, 15, 13, 'INT-JVE-NAP-MIL', 0),
(234, 15, 14, 'ROMA', 0),
(235, 15, 15, 'LAZIO', 0),
(236, 15, 16, 'FIORENTINA', 0),
(237, 15, 17, 'ATALANTA', 0),
(238, 15, 18, 'ROM-LAZ-FIO-ATA', 5),
(239, 16, 1, '4-3', 0),
(240, 16, 2, 'X', 3),
(241, 16, 3, 'DISPARI', 0),
(242, 16, 4, 'UNDER', 0),
(243, 16, 5, 'LAZIO', 0),
(244, 16, 6, 'FIORENTINA', 0),
(245, 16, 7, 'ROMA', 0),
(246, 16, 8, 'RONALDO', 20),
(247, 16, 9, 'INTER', 5),
(248, 16, 10, 'JUVENTUS', 18),
(249, 16, 11, 'NAPOLI', 4),
(250, 16, 12, 'MILAN', 2),
(251, 16, 13, 'INT-JVE-NAP-MIL', 0),
(252, 16, 14, 'ROMA', 0),
(253, 16, 15, 'LAZIO', 0),
(254, 16, 16, 'FIORENTINA', 0),
(255, 16, 17, 'ATALANTA', 0),
(256, 16, 18, 'ROM-LAZ-FIO-ATA', 5),
(611, 36, 13, 'INT-JVE-NAP-MIL', 0),
(616, 36, 18, 'ROM-FIO-ATA-LAZ', 0),
(615, 36, 17, 'LAZIO', 0),
(614, 36, 16, 'ATALANTA', 4),
(612, 36, 14, 'ROMA', 0),
(610, 36, 12, 'MILAN', 0),
(609, 36, 11, 'NAPOLI', 0),
(608, 36, 10, 'JUVENTUS', 0),
(607, 36, 9, 'INTER', 0),
(606, 36, 8, 'PINAMONTI', 0),
(605, 36, 7, 'MILAN', 0),
(604, 36, 6, 'ROMA', 0),
(603, 36, 5, 'FIORENTINA', 0),
(602, 36, 4, 'NOGOL', 0),
(601, 36, 3, '3-1', 0),
(600, 36, 2, '4-2', 0),
(311, 20, 1, '3-3', 0),
(312, 20, 2, '4-2', 0),
(313, 20, 3, 'X', 0),
(314, 20, 4, 'X', 0),
(315, 20, 5, 'MILAN', 0),
(316, 20, 6, 'Real Madrid', 0),
(317, 20, 7, 'ATALANTA', 0),
(318, 20, 8, 'IMMOBILE', 20),
(319, 20, 9, 'INTER', 5),
(320, 20, 10, 'NAPOLI', 0),
(321, 20, 11, 'JUVENTUS', 0),
(322, 20, 12, 'MILAN', 2),
(323, 20, 13, 'INT-NAP-JVE-MIL', 0),
(324, 20, 14, 'LAZIO', 0),
(325, 20, 15, 'ATALANTA', 0),
(326, 20, 16, 'FIORENTINA', 0),
(327, 20, 17, 'ROMA', 0),
(328, 20, 18, 'LAZ-ATA-FIO-ROM', 0),
(558, 33, 14, 'FIORENTINA', 5),
(557, 33, 13, 'INT-NAP-MIL-JVE', 0),
(556, 33, 12, 'JUVENTUS', 0),
(555, 33, 11, 'MILAN', 0),
(554, 33, 10, 'NAPOLI', 0),
(553, 33, 9, 'INTER', 5),
(552, 33, 8, 'PINAMONTI', 0),
(551, 33, 7, 'NAPOLI', 0),
(550, 33, 6, 'FIORENTINA', 0),
(549, 33, 5, 'JUVENTUS', 0),
(547, 33, 3, 'ALTRO', 0),
(548, 33, 4, '4-0', 0),
(562, 33, 18, 'FIO-ATA-LAZ-ROM', 0),
(561, 33, 17, 'ROMA', 0),
(560, 33, 16, 'LAZIO', 0),
(559, 33, 15, 'ATALANTA', 0),
(546, 33, 2, '3-3', 0),
(545, 33, 1, '1-4', 0),
(544, 32, 18, 'FIO-ATA-LAZ-ROM', 0),
(543, 32, 17, 'ROMA', 0),
(491, 30, 1, '4-3', 0),
(492, 30, 2, '4-4', 0),
(493, 30, 3, '2-1', 0),
(494, 30, 4, '0-4', 0),
(495, 30, 5, 'ATALANTA', 0),
(496, 30, 6, 'INTER', 8),
(497, 30, 7, 'NAPOLI', 0),
(498, 30, 8, 'RONALDO', 20),
(499, 30, 9, 'MILAN', 0),
(500, 30, 10, 'JUVENTUS', 18),
(501, 30, 11, 'INTER', 0),
(502, 30, 12, 'NAPOLI', 0),
(503, 30, 13, 'MIL-JVE-INT-NAP', 0),
(504, 30, 14, 'ATALANTA', 0),
(505, 30, 15, 'FIORENTINA', 0),
(506, 30, 16, 'ROMA', 0),
(507, 30, 17, 'LAZIO', 0),
(508, 30, 18, 'ATA-FIO-ROM-LAZ', 0),
(542, 32, 16, 'LAZIO', 0),
(541, 32, 15, 'ATALANTA', 0),
(540, 32, 14, 'FIORENTINA', 5),
(539, 32, 13, 'MIL-NAP-JVE-INT', 0),
(538, 32, 12, 'INTER', 0),
(537, 32, 11, 'JUVENTUS', 0),
(536, 32, 10, 'NAPOLI', 0),
(535, 32, 9, 'MILAN', 0),
(534, 32, 8, 'RONALDO', 20),
(533, 32, 7, 'JUVENTUS', 10),
(532, 32, 6, 'FIORENTINA', 0),
(531, 32, 5, 'LAZIO', 0),
(530, 32, 4, '2-2', 0),
(529, 32, 3, '12', 2),
(528, 32, 2, 'ALTRO', 0),
(527, 32, 1, '1X', 2),
(563, 34, 1, '4-3', 0),
(564, 34, 2, 'X', 3),
(565, 34, 3, 'X2', 0),
(566, 34, 4, 'UNDER', 0),
(567, 34, 5, 'LAZIO', 0),
(568, 34, 6, 'FIORENTINA', 0),
(569, 34, 7, 'ROMA', 0),
(570, 34, 8, 'RONALDO', 0),
(571, 34, 9, 'INTER', 0),
(572, 34, 10, 'JUVENTUS', 18),
(573, 34, 11, 'NAPOLI', 4),
(574, 34, 12, 'MILAN', 2),
(575, 34, 13, 'INT-JVE-NAP-MIL', 0),
(576, 34, 14, 'ROMA', 0),
(577, 34, 15, 'LAZIO', 0),
(578, 34, 16, 'FIORENTINA', 0),
(579, 34, 17, 'ATALANTA', 0),
(580, 34, 18, 'ROM-LAZ-FIO-ATA', 5),
(613, 36, 15, 'FIORENTINA', 0),
(599, 36, 1, '1-1', 0),
(581, 35, 1, '4-3', 0),
(582, 35, 2, 'X', 0),
(583, 35, 3, 'X2', 0),
(584, 35, 4, 'UNDER', 0),
(585, 35, 5, 'LAZIO', 0),
(586, 35, 6, 'FIORENTINA', 0),
(587, 35, 7, 'ROMA', 0),
(588, 35, 8, 'RONALDO', 0),
(589, 35, 9, 'INTER', 0),
(590, 35, 10, 'JUVENTUS', 0),
(591, 35, 11, 'NAPOLI', 0),
(592, 35, 12, 'MILAN', 0),
(593, 35, 13, 'INT-JVE-NAP-MIL', 0),
(594, 35, 14, 'ROMA', 0),
(595, 35, 15, 'LAZIO', 0),
(596, 35, 16, 'FIORENTINA', 0),
(597, 35, 17, 'ATALANTA', 0),
(598, 35, 18, 'ROM-LAZ-FIO-ATA', 0),
(617, 37, 1, '1X', 0),
(618, 37, 2, '4-3', 0),
(619, 37, 3, '4-4', 0),
(620, 37, 4, 'UNDER', 0),
(621, 37, 5, 'FIORENTINA', 0),
(622, 37, 6, 'ROMA', 0),
(623, 37, 7, 'ATALANTA', 0),
(624, 37, 8, 'PINAMONTI', 0),
(625, 37, 9, 'JUVENTUS', 0),
(626, 37, 10, 'NAPOLI', 0),
(627, 37, 11, 'INTER', 0),
(628, 37, 12, 'MILAN', 0),
(629, 37, 13, 'JVE-NAP-INT-MIL', 0),
(630, 37, 14, 'LAZIO', 0),
(631, 37, 15, 'FIORENTINA', 0),
(632, 37, 16, 'ROMA', 0),
(633, 37, 17, 'ATALANTA', 0),
(634, 37, 18, 'LAZ-FIO-ROM-ATA', 0),
(635, 38, 1, '1X', 0),
(636, 38, 2, '4-3', 0),
(637, 38, 3, '4-4', 0),
(638, 38, 4, 'UNDER', 0),
(639, 38, 5, 'INTER', 0),
(640, 38, 6, 'ROMA', 0),
(641, 38, 7, 'ATALANTA', 0),
(642, 38, 8, 'PINAMONTI', 0),
(643, 38, 9, 'JUVENTUS', 0),
(644, 38, 10, 'NAPOLI', 0),
(645, 38, 11, 'INTER', 0),
(646, 38, 12, 'MILAN', 0),
(647, 38, 13, 'JVE-NAP-INT-MIL', 0),
(648, 38, 14, 'LAZIO', 0),
(649, 38, 15, 'FIORENTINA', 0),
(650, 38, 16, 'ROMA', 0),
(651, 38, 17, 'ATALANTA', 0),
(652, 38, 18, 'LAZ-FIO-ROM-ATA', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `schedina_header`
--

CREATE TABLE IF NOT EXISTS `schedina_header` (
  `id_schedina` int(11) NOT NULL AUTO_INCREMENT,
  `utente_id` varchar(40) NOT NULL,
  `stato_scheda_id` int(11) NOT NULL DEFAULT '1',
  `tempo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comp_id` int(11) NOT NULL,
  PRIMARY KEY (`id_schedina`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dump dei dati per la tabella `schedina_header`
--

INSERT INTO `schedina_header` (`id_schedina`, `utente_id`, `stato_scheda_id`, `tempo`, `comp_id`) VALUES
(1, '1', 1, '2022-06-21 21:48:08', 1),
(2, '1', 1, '2022-06-21 23:09:45', 1),
(3, '1', 1, '2022-06-21 23:12:21', 1),
(4, '1', 1, '2022-06-21 23:24:18', 1),
(5, '1', 1, '2022-06-21 23:29:24', 1),
(6, '1', 1, '2022-06-22 20:03:35', 1),
(7, '1', 1, '2022-06-22 20:29:50', 1),
(8, '1', 1, '2022-06-22 20:31:16', 1),
(9, '1', 1, '2022-06-22 23:14:44', 1),
(10, '1', 1, '2022-06-22 23:58:48', 1),
(11, '1', 1, '2022-06-30 15:20:09', 1),
(12, '1', 1, '2022-06-30 17:38:03', 2),
(13, '1', 1, '2022-06-30 17:38:29', 2),
(14, '1', 1, '2022-07-01 21:31:11', 1),
(15, '1', 1, '2022-07-01 21:32:06', 1),
(16, '1', 1, '2022-07-01 21:51:16', 1),
(34, '1', 4, '2022-07-07 14:43:17', 1),
(36, '1', 1, '2022-07-10 00:40:29', 1),
(20, '1', 1, '2022-07-04 12:45:50', 1),
(30, '2', 1, '2022-07-04 14:35:00', 1),
(32, '2', 1, '2022-07-04 14:35:24', 1),
(33, '2', 1, '2022-07-04 14:35:40', 1),
(35, '1', 4, '2022-07-10 00:21:18', 1),
(37, '1', 1, '2022-07-10 00:40:45', 1),
(38, '1', 4, '2022-07-10 00:41:00', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `schedina_stati`
--

CREATE TABLE IF NOT EXISTS `schedina_stati` (
  `id_stato_scheda` int(11) NOT NULL,
  `descrizione` varchar(10) NOT NULL,
  PRIMARY KEY (`id_stato_scheda`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `schedina_stati`
--

INSERT INTO `schedina_stati` (`id_stato_scheda`, `descrizione`) VALUES
(2, 'COMPILATA'),
(4, 'COPIATA'),
(3, 'RANDOM'),
(1, 'VUOTA');

-- --------------------------------------------------------

--
-- Struttura della tabella `squadre`
--

CREATE TABLE IF NOT EXISTS `squadre` (
  `id_squadra` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(40) NOT NULL,
  `sigla` varchar(3) NOT NULL,
  PRIMARY KEY (`id_squadra`),
  UNIQUE KEY `descrizione` (`descrizione`),
  UNIQUE KEY `sigla` (`sigla`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dump dei dati per la tabella `squadre`
--

INSERT INTO `squadre` (`id_squadra`, `descrizione`, `sigla`) VALUES
(1, 'INTER', 'INT'),
(2, 'NAPOLI', 'NAP'),
(3, 'JUVENTUS', 'JVE'),
(4, 'MILAN', 'MIL'),
(5, 'ROMA', 'ROM'),
(6, 'LAZIO', 'LAZ'),
(7, 'FIORENTINA', 'FIO'),
(8, 'ATALANTA', 'ATA'),
(9, 'Real Madrid', 'RMD'),
(14, 'khjhhhjh', 'GHH'),
(15, 'Petegna', 'PTN'),
(17, 'BAYER MONACO', 'BYM');

-- --------------------------------------------------------

--
-- Struttura della tabella `squadre_comp`
--

CREATE TABLE IF NOT EXISTS `squadre_comp` (
  `id_ass` int(11) NOT NULL AUTO_INCREMENT,
  `squadra_id` int(11) NOT NULL,
  `comp_id` int(11) NOT NULL,
  `girone` varchar(1) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_ass`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dump dei dati per la tabella `squadre_comp`
--

INSERT INTO `squadre_comp` (`id_ass`, `squadra_id`, `comp_id`, `girone`) VALUES
(1, 1, 1, 'A'),
(2, 3, 1, 'A'),
(3, 2, 1, 'A'),
(4, 4, 1, 'A'),
(5, 5, 1, 'B'),
(6, 6, 1, 'B'),
(7, 7, 1, 'B'),
(9, 8, 1, 'B'),
(10, 9, 1, ''),
(35, 17, 1, ''),
(34, 7, 2, ''),
(32, 6, 2, 'A'),
(31, 2, 2, 'A'),
(30, 3, 2, 'A'),
(29, 1, 2, 'A');

-- --------------------------------------------------------

--
-- Struttura della tabella `tipi_pronostici`
--

CREATE TABLE IF NOT EXISTS `tipi_pronostici` (
  `id_tipo_pronostico` int(11) NOT NULL AUTO_INCREMENT,
  `view` varchar(20) NOT NULL,
  `id_gruppo_punti` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `descrizione` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tipo_pronostico`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='Tabella fissa con tipi pronostici' AUTO_INCREMENT=48 ;

--
-- Dump dei dati per la tabella `tipi_pronostici`
--

INSERT INTO `tipi_pronostici` (`id_tipo_pronostico`, `view`, `id_gruppo_punti`, `categoria_id`, `descrizione`) VALUES
(1, '1', 1, 1, 'Fisso(1X2)'),
(2, 'X', 1, 1, 'Fisso(1X2)'),
(3, '2', 1, 1, 'Fisso(1X2)'),
(4, '1X', 2, 1, 'Doppia chance'),
(5, 'X2', 2, 1, 'Doppia chance'),
(6, '12', 2, 1, 'Doppia chance'),
(7, 'UNDER', 5, 1, 'Under-Over'),
(8, 'OVER', 5, 1, 'Under-Over'),
(9, 'NOGOL', 4, 1, 'Gol-NoGol'),
(10, 'GOL', 4, 1, 'Gol-NoGol'),
(11, 'DISPARI', 3, 1, 'Pari-Dispari'),
(12, 'PARI', 3, 1, 'Pari-Dispari'),
(13, '1-0', 6, 1, 'Ris Esatto'),
(14, '2-0', 6, 1, 'Ris Esatto'),
(15, '3-0', 6, 1, 'Ris Esatto'),
(16, '4-0', 6, 1, 'Ris Esatto'),
(17, '2-1', 6, 1, 'Ris Esatto'),
(18, '3-1', 6, 1, 'Ris Esatto'),
(19, '4-1', 6, 1, 'Ris Esatto'),
(20, '3-2', 6, 1, 'Ris Esatto'),
(21, '4-2', 6, 1, 'Ris Esatto'),
(22, '4-3', 6, 1, 'Ris Esatto'),
(23, '0-0', 6, 1, 'Ris Esatto'),
(24, '1-1', 6, 1, 'Ris Esatto'),
(25, '2-2', 6, 1, 'Ris Esatto'),
(26, '3-3', 6, 1, 'Ris Esatto'),
(27, '4-4', 6, 1, 'Ris Esatto'),
(28, '0-1', 6, 1, 'Ris Esatto'),
(29, '0-2', 6, 1, 'Ris Esatto'),
(30, '0-3', 6, 1, 'Ris Esatto'),
(31, '0-4', 6, 1, 'Ris Esatto'),
(32, '1-2', 6, 1, 'Ris Esatto'),
(33, '1-3', 6, 1, 'Ris Esatto'),
(34, '1-4', 6, 1, 'Ris Esatto'),
(35, '2-3', 6, 1, 'Ris Esatto'),
(36, '2-4', 6, 1, 'Ris Esatto'),
(37, '3-4', 6, 1, 'Ris Esatto'),
(38, 'ALTRO', 6, 1, 'Ris Esatto'),
(39, 'Vincente Torneo', 7, 2, 'Vincente Torneo'),
(40, 'Miglior Attacco', 8, 2, 'Miglior Attacco'),
(41, 'Miglior Difesa', 9, 2, 'Miglior Difesa'),
(42, 'Capocannoniere', 10, 2, 'Capocannoniere'),
(43, 'Prima Girone', 11, 3, 'Prima Girone'),
(44, 'Seconda Girone', 12, 3, 'Seconda Girone'),
(45, 'Terza Girone', 13, 3, 'Terza Girone'),
(46, 'Ultima Girone', 14, 3, 'Ultima Girone'),
(47, 'Girone Completo', 15, 3, 'Girone Completo');

-- --------------------------------------------------------

--
-- Struttura della tabella `tipi_pronostici_comp`
--

CREATE TABLE IF NOT EXISTS `tipi_pronostici_comp` (
  `id_ass` int(11) NOT NULL AUTO_INCREMENT,
  `comp_id` int(11) NOT NULL,
  `gruppo_punti_id` int(11) NOT NULL,
  `valore_punti` int(11) NOT NULL,
  PRIMARY KEY (`id_ass`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dump dei dati per la tabella `tipi_pronostici_comp`
--

INSERT INTO `tipi_pronostici_comp` (`id_ass`, `comp_id`, `gruppo_punti_id`, `valore_punti`) VALUES
(1, 1, 1, 3),
(2, 1, 2, 2),
(3, 1, 3, 2),
(34, 1, 4, 23),
(5, 1, 5, 2),
(6, 1, 6, 8),
(7, 1, 7, 10),
(8, 1, 8, 10),
(9, 1, 9, 10),
(10, 1, 10, 20),
(35, 1, 11, 20),
(32, 1, 12, 18),
(13, 1, 13, 4),
(14, 1, 14, 2),
(15, 1, 15, 5),
(16, 2, 10, 20),
(33, 2, 1, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `tipi_risultati_esatti`
--

CREATE TABLE IF NOT EXISTS `tipi_risultati_esatti` (
  `id_risultato` int(11) NOT NULL AUTO_INCREMENT,
  `view` varchar(20) NOT NULL,
  `tipo_pronostico_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_risultato`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='Tabella fissa con tipi risultati poi gestiti dall admin' AUTO_INCREMENT=318 ;

--
-- Dump dei dati per la tabella `tipi_risultati_esatti`
--

INSERT INTO `tipi_risultati_esatti` (`id_risultato`, `view`, `tipo_pronostico_id`) VALUES
(1, '1-0', 13),
(39, '3-1', 6),
(38, '3-1', 4),
(37, '3-1', 1),
(36, '3-1', 18),
(51, '3-2', 1),
(50, '3-2', 20),
(60, '4-2', 6),
(72, '0-0', 2),
(71, '0-0', 23),
(80, '1-1', 4),
(87, '2-2', 4),
(94, '3-3', 4),
(101, '4-4', 4),
(108, '0-1', 5),
(115, '0-2', 5),
(127, '0-4', 31),
(129, '0-4', 5),
(134, '1-2', 32),
(141, '1-3', 33),
(148, '1-4', 34),
(162, '2-3', 35),
(169, '2-4', 36),
(176, '3-4', 37),
(183, '5-0', 38),
(2, '1-0', 1),
(3, '1-0', 4),
(4, '1-0', 6),
(5, '1-0', 7),
(6, '1-0', 9),
(7, '1-0', 11),
(8, '2-0', 14),
(9, '2-0', 1),
(10, '2-0', 4),
(11, '2-0', 6),
(12, '2-0', 7),
(13, '2-0', 9),
(14, '2-0', 12),
(15, '3-0', 15),
(16, '3-0', 1),
(17, '3-0', 4),
(18, '3-0', 6),
(19, '3-0', 8),
(20, '3-0', 9),
(21, '3-0', 11),
(22, '4-0', 16),
(23, '4-0', 1),
(24, '4-0', 4),
(25, '4-0', 6),
(26, '4-0', 8),
(27, '4-0', 9),
(28, '4-0', 12),
(29, '2-1', 17),
(30, '2-1', 1),
(31, '2-1', 4),
(32, '2-1', 6),
(33, '2-1', 8),
(34, '2-1', 10),
(35, '2-1', 11),
(40, '3-1', 8),
(41, '3-1', 10),
(42, '3-1', 12),
(43, '4-1', 19),
(44, '4-1', 1),
(45, '4-1', 4),
(46, '4-1', 6),
(47, '4-1', 8),
(48, '4-1', 10),
(49, '4-1', 11),
(52, '3-2', 4),
(53, '3-2', 6),
(54, '3-2', 8),
(55, '3-2', 10),
(56, '3-2', 11),
(59, '4-2', 4),
(58, '4-2', 1),
(57, '4-2', 21),
(61, '4-2', 8),
(62, '4-2', 10),
(63, '4-2', 12),
(64, '4-3', 22),
(65, '4-3', 1),
(66, '4-3', 4),
(67, '4-3', 6),
(68, '4-3', 8),
(69, '4-3', 10),
(70, '4-3', 11),
(73, '0-0', 4),
(74, '0-0', 5),
(75, '0-0', 7),
(76, '0-0', 9),
(77, '0-0', 12),
(78, '1-1', 24),
(79, '1-1', 2),
(81, '1-1', 5),
(82, '1-1', 7),
(83, '1-1', 10),
(84, '1-1', 12),
(85, '2-2', 25),
(86, '2-2', 2),
(88, '2-2', 5),
(89, '2-2', 8),
(90, '2-2', 10),
(91, '2-2', 12),
(92, '3-3', 26),
(93, '3-3', 2),
(95, '3-3', 5),
(96, '3-3', 8),
(97, '3-3', 10),
(98, '3-3', 12),
(99, '4-4', 27),
(100, '4-4', 2),
(102, '4-4', 5),
(103, '4-4', 8),
(104, '4-4', 10),
(105, '4-4', 12),
(106, '0-1', 28),
(107, '0-1', 3),
(109, '0-1', 6),
(110, '0-1', 7),
(111, '0-1', 9),
(112, '0-1', 11),
(113, '0-2', 29),
(114, '0-2', 3),
(116, '0-2', 6),
(117, '0-2', 7),
(118, '0-2', 9),
(119, '0-2', 12),
(122, '0-3', 5),
(120, '0-3', 30),
(121, '0-3', 3),
(123, '0-3', 6),
(124, '0-3', 8),
(125, '0-3', 9),
(126, '0-3', 11),
(128, '0-4', 3),
(130, '0-4', 6),
(131, '0-4', 8),
(132, '0-4', 9),
(133, '0-4', 12),
(136, '1-2', 5),
(135, '1-2', 3),
(137, '1-2', 6),
(138, '1-2', 8),
(139, '1-2', 10),
(140, '1-2', 11),
(143, '1-3', 5),
(142, '1-3', 3),
(144, '1-3', 6),
(145, '1-3', 8),
(146, '1-3', 10),
(147, '1-3', 12),
(150, '1-4', 5),
(149, '1-4', 3),
(151, '1-4', 6),
(152, '1-4', 8),
(153, '1-4', 10),
(154, '1-4', 11),
(164, '2-3', 5),
(163, '2-3', 3),
(165, '2-3', 6),
(166, '2-3', 8),
(167, '2-3', 10),
(168, '2-3', 11),
(171, '2-4', 5),
(170, '2-4', 3),
(172, '2-4', 6),
(173, '2-4', 8),
(174, '2-4', 10),
(175, '2-4', 12),
(178, '3-4', 5),
(177, '3-4', 3),
(179, '3-4', 6),
(180, '3-4', 8),
(181, '3-4', 10),
(182, '3-4', 11),
(184, '5-0', 1),
(185, '5-0', 4),
(186, '5-0', 6),
(187, '5-0', 8),
(188, '5-0', 9),
(189, '5-0', 11),
(190, '5-4', 38),
(191, '5-4', 1),
(192, '5-4', 4),
(193, '5-4', 6),
(194, '5-4', 8),
(195, '5-4', 10),
(196, '5-4', 11),
(197, '4-5', 38),
(199, '4-5', 5),
(198, '4-5', 3),
(200, '4-5', 6),
(201, '4-5', 8),
(202, '4-5', 10),
(203, '4-5', 11),
(204, '0-5', 38),
(206, '0-5', 5),
(205, '0-5', 3),
(207, '0-5', 6),
(208, '0-5', 8),
(209, '0-5', 9),
(210, '0-5', 11),
(213, '5-5', 4),
(211, '5-5', 38),
(212, '5-5', 2),
(214, '5-5', 5),
(215, '5-5', 8),
(216, '5-5', 10),
(217, '5-5', 12);

-- --------------------------------------------------------

--
-- Struttura della tabella `tipo_eventi`
--

CREATE TABLE IF NOT EXISTS `tipo_eventi` (
  `id_tipo_evento` int(11) NOT NULL,
  `descrizione` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tipo_evento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Tabella fissa con tipi eventi';

--
-- Dump dei dati per la tabella `tipo_eventi`
--

INSERT INTO `tipo_eventi` (`id_tipo_evento`, `descrizione`) VALUES
(1, 'PARTITA'),
(2, 'ANTEPOST'),
(3, 'GIRONE');

-- --------------------------------------------------------

--
-- Struttura della tabella `utente_ruoli`
--

CREATE TABLE IF NOT EXISTS `utente_ruoli` (
  `id_ruolo` int(11) NOT NULL,
  `descrizione` varchar(10) NOT NULL,
  PRIMARY KEY (`id_ruolo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utente_ruoli`
--

INSERT INTO `utente_ruoli` (`id_ruolo`, `descrizione`) VALUES
(1, 'ADMIN'),
(2, 'GIOCATORE'),
(3, 'VISITATORE');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
  `id_utente` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `cognome` varchar(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cellulare` varchar(11) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo_id` int(11) NOT NULL DEFAULT '2',
  `versato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_utente`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id_utente`, `username`, `nome`, `cognome`, `email`, `cellulare`, `password`, `ruolo_id`, `versato`) VALUES
(1, 'ADMIN', 'Andrea', 'Maresca', 'fantamondiale2014andreamaresca@gmail.com', '3661746386', 'admin', 1, 0),
(2, 'MESSOMALE', 'Emanuele', 'De Carlo', 'em.decarlo@gmail.com', '3925184698', 'messomale', 2, 10),
(4, 'MESSOPEGG', 'messopeggio', 'messopeggio', 'em.decarlo@gmail.com', '3661746386', 'messopeggio', 2, 0),
(6, 'submitto', 'submitto', 'submitto', 'em.decarlo@gmail.com', '3925184699', 'submitto', 2, 0),
(7, 'admin2', 'admin2', 'admin2', 'em.decarlo@gmail.com', '3925184699', 'admin2', 2, 0),
(8, 'pinco', 'wrerer', 'erere', 'em.decarlo@gmail.com', '3925184699', 'admin', 2, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `utentiOLD`
--

CREATE TABLE IF NOT EXISTS `utentiOLD` (
  `username` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cellulare` varchar(11) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo` varchar(20) NOT NULL,
  `versato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utentiOLD`
--

INSERT INTO `utentiOLD` (`username`, `email`, `cellulare`, `password`, `ruolo`, `versato`) VALUES
('admin', 'admin', NULL, 'admin', 'admin', 0),
('Almat18', 'albebernocchi@hotmail.it', '', 'federernadal18', 'giocatore', 21),
('smarri', 'silvia.marri@hotmail.it', NULL, 'Al3x1991', 'giocatore', 0),
('Ciro', 'ciroguarino87@gmail.com', NULL, 'Ciro1', 'giocatore', 0),
('messomale', 'em.decarlo@gmail.com', '3925184699', 'messomale', 'giocatore', 0),
('Ferrigno10', 'ferrignovincenzo09@libero.it', '', 'Napoli70', 'giocatore', 3),
('genny-brvd1014', 'genny.gdl50@gmail.com', '', 'Coglione1$', 'giocatore', 3),
('Tony Word', 'ant.parola@gmail.com', '', 'Tonyword@92', 'giocatore', 9),
('Carmine Noviello', 'Carminenovie92@gmail.com', '', 'Raffaele.20', 'giocatore', 9),
('martino2683', 'martinomaresca@virgilio.it', NULL, 'Amore0506', 'giocatore', 0),
('alessiomoresca', 'alessiomoresca3@gmail.com', '', 'Napoli92', 'giocatore', 15),
('enzini90', 'carmine.enzini90@gmail.com', '', 'edicola', 'giocatore', 9),
('nicola.aromino', 'nicola.aromino91@gmail.com', '3661746386', 'aromino91', 'giocatore', 3),
('Cozzolinojr.', 'iosonoio061@gmail.com', '', 'Fenicottero17', 'giocatore', 9),
('Peppma', 'giuseppemariamanzo@gmail.com', '', 'Solojuve10', 'giocatore', 6),
('Fabioiannone', 'fabioiannone@hotmail.it', '', 'FANTADIO.', 'giocatore', 6),
('manny97tdg13', 'mannyemme@gmail.com', '', 'Seiuncoglione71#31#', 'giocatore', 3),
('AntonioPonticelli', 'ponticellifs@gmail.com', '3281355949', 'Barcafabio20?', 'giocatore', 12),
('Antonio Manzo', 'kitfs82@gmail.com', '', 'Antonio', 'giocatore', 15),
('BALB', 'a_baldrati@hotmail.it', '', 'QJSgH3y!N$efdy', 'giocatore', 21),
('Fosc97', 'Domenico.foschini.97@outlook.it', '', 'TeleseTerme97', 'giocatore', 9),
('Barbablack', 'thebarbablack@hotmail.it', '', 'Forzamilan92!', 'giocatore', 9),
('Mennillo81', 'mennillopopc9@gmail.com', '', 'bolletta2021', 'giocatore', 30),
('gianluka93', 'gianluka3293@gmail.com', '', 'numero10', 'giocatore', 6),
('Michele Vorraro', 'miich86@hotmail.it', '', '09011986', 'giocatore', 6),
('Alexcastaldo', 'alexcastaldo93@hotmail.com', '', 'Amici91!', 'giocatore', 3),
('Vincenzo 86', 'vincenzotrenitalia@libero.it', '', 'Nicole1@', 'giocatore', 6),
('Antoniofrascarino', 'ciaonapoli2012@hotmail.com', '', 'Antonio86f', 'giocatore', 21),
('LadyInOrange', 'alesssandrapolese@gmail.com', '', '150992', 'giocatore', 3),
('Antonio Temante', 'antoniotemante@gmail.com', '3289272819', 'Antonio', 'giocatore', 12),
('Paolo. lagarese', 'pablo_619@hotmail.it', '', 'G@ia2012', 'giocatore', 3),
('Sabooo87', 'pazzi.chef87@yahoo.it', '', 'Ost5pazzi', 'giocatore', 18),
('Tonsurton', 'simoneferrigno1985@gmail.com', '', 'simo1985', 'giocatore', 3),
('Gennaro Dussmann', 'janviergallo@libero.it', '', 'Hilary2016', 'giocatore', 6),
('PieForm', 'pietro.formisano@libero.it', '', 'Milano123', 'giocatore', 3),
('Carla manzo', 'kitfs82@gmail.com', '', 'Carla', 'giocatore', 12),
('Palpao', 'armandoascione@hotmail.it', '3934321653', 'Pwdacapocchia', 'giocatore', 0),
('Gaetana Perrone', 'kitfs82@gmail.com', '', 'Gaetana', 'giocatore', 12),
('Luigi Galazzo', 'kitfs82@gmail.com', '', 'Luigi', 'giocatore', 9),
('Gianluca De Lisio', 'giandelisio2000@gmail.com', '', 'Juventus', 'giocatore', 6),
('Francesco De Caro', 'raider82@hotmail.it', '', 'Micky123!', 'giocatore', 3),
('Ilmondodelbebe', 'iosononapoletanoemenevanto@live.it', '', 'Napoli1926', 'giocatore', 18),
('GennaroLiguori', 'gennaroliguori@live.it', '', 'Gennaro90', 'giocatore', 9),
('Vincent', 'vincent_96@libero.it', '', 'Annapia1', 'giocatore', 9),
('Ultrazzurro91', 'antonio_figliolino@libero.it', '3480125261', 'Napoli91?', 'giocatore', 15),
('Giuliopana', 'Giulio.panariello@hotmail.com', '360265182', 'Napoli1926', 'giocatore', 9),
('Giangio', 'gianlucasantini39@gmail.com', '3933227647', 'Danielederossi16', 'giocatore', 9),
('Biagiobarone', 'baronebia@gmail.com', '3932884234', 'biagio090', 'giocatore', 3),
('Adriano Arpaia', 'adrianoarpaia@gmail.com', '3801387338', 'Adriano8', 'giocatore', 9),
('fabrizio.carotenuto', 'fabrizio.carotenuto@icloud.com', '3351591704', 'Vucinic123', 'giocatore', 6),
('Magica.21', 'luigivastarella21@hotmail.it', '3348624744', '1926Lv21', 'giocatore', 6),
('Anna', 'grokky@hotmail.it', '3397611012', 'Affrico2021', 'giocatore', 3),
('Giuseppeinsuperabile', 'moresca92@icloud.com', '3407929758', 'napoli92', 'giocatore', 6),
('Ionut1', 'c.ionut@live.it', '3421846232', 'BUONASEGA1.', 'giocatore', 6),
('Ronofrio luigi', 'luigironofrio91@gmail.com', '3477858576', 'Peppefranci', 'giocatore', 15),
('Cred89', 'ciro891@icloud.com', '3455981565', 'Napoli1926', 'giocatore', 9),
('Italo Borriello', 'ita.borriello@hotmail.it', '3406161493', 'Italo1997', 'giocatore', 3),
('__Luigibruno', 'luigi.bruno801@gmail.com', '3391843826', 'Daniela80', 'giocatore', 15),
('Simone De Vita', 'simone.devita98@gmail.com', '3384338679', 'DVSimo98', 'giocatore', 3),
('danielewar', 'danifiengo@libero.it', '3312541020', 'Napoli1994', 'giocatore', 9),
('Lorenzo Borriello Fè', 'Lorenzosbrr@outlook.com', '3317940387', 'Morragay', 'giocatore', 3),
('Luigi Carillo', 'alex032008@live.it', '3286162013', '1973', 'giocatore', 3),
('Marcotar', 'marco.tarchiani29@gmail.com', '3335903422', 'Tarchiani98', 'giocatore', 0),
('Matteo', 'teo580@libero.it', '3389510535', 'Maresca', 'giocatore', 3),
('Giancarlo pernice', 'giancarlopernice@gmail.com', '3881943762', 'Giovanna08', 'giocatore', 0),
('alexmaresca85', 'alexmaresca85@libero.it', '3495429545', 'ForzaNapoli', 'giocatore', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti_comp`
--

CREATE TABLE IF NOT EXISTS `utenti_comp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utente_id` int(11) NOT NULL,
  `comp_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dump dei dati per la tabella `utenti_comp`
--

INSERT INTO `utenti_comp` (`id`, `utente_id`, `comp_id`) VALUES
(17, 1, 2),
(16, 1, 1),
(29, 4, 1),
(18, 1, 3),
(32, 2, 3),
(31, 2, 2),
(30, 2, 1),
(33, 2, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `_competizioni`
--

CREATE TABLE IF NOT EXISTS `_competizioni` (
  `id_comp` int(11) NOT NULL AUTO_INCREMENT,
  `sigla` varchar(10) NOT NULL DEFAULT 'GENERICA',
  `descrizione` varchar(40) NOT NULL DEFAULT 'competizione generica',
  `isAttiva` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'specifica se lacompetizione è attiva e quindi è possibile partecipare',
  `scadenza` varchar(20) NOT NULL DEFAULT '2021/08/07',
  `footer` varchar(20) NOT NULL DEFAULT 'fanta maresca',
  `isOpen` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'quando la competizione è attiva ma non si possono inserire piu nuovi pronostici',
  PRIMARY KEY (`id_comp`),
  UNIQUE KEY `sigla` (`sigla`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dump dei dati per la tabella `_competizioni`
--

INSERT INTO `_competizioni` (`id_comp`, `sigla`, `descrizione`, `isAttiva`, `scadenza`, `footer`, `isOpen`) VALUES
(1, 'CHAMPIONS', 'Champions League', 1, '2022/06/10', 'champions league', 0),
(9, 'EUROPA-LG', 'europa league', 0, '2021/08/07', 'europa league', 0),
(10, 'MONDIALE', 'coppa del mondo 2022', 0, '2021/08/07', 'mondiali 2022', 0),
(11, 'COPPA-IT', 'coppa italia', 0, '2021/08/07', 'fanta coppa italia', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `_gruppi_antepost_base`
--

CREATE TABLE IF NOT EXISTS `_gruppi_antepost_base` (
  `id_singolo` int(11) NOT NULL AUTO_INCREMENT,
  `risultato` varchar(40) NOT NULL,
  `gruppo` varchar(1) NOT NULL DEFAULT 'A',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_singolo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `_lista_cannonieri`
--

CREATE TABLE IF NOT EXISTS `_lista_cannonieri` (
  `id_cannoniere` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_cannoniere`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `_lista_squadre`
--

CREATE TABLE IF NOT EXISTS `_lista_squadre` (
  `id_squadra` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL DEFAULT 'A',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_squadra`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=56 ;

--
-- Dump dei dati per la tabella `_lista_squadre`
--

INSERT INTO `_lista_squadre` (`id_squadra`, `nome`, `girone`, `comp_id`) VALUES
(55, 'Benfica', 'E', 1),
(46, 'Sporting Lisbona', 'E', 1),
(53, 'Atletico Madrid', 'E', 1),
(54, 'Manchester United', 'E', 1),
(52, 'Lille', 'E', 1),
(51, 'Chelsea', 'E', 1),
(50, 'Villareal', 'E', 1),
(49, 'Salisburgo', 'E', 1),
(47, 'Manchester City', 'E', 1),
(48, 'Inter', 'E', 1),
(45, 'REAL MADRID', 'E', 1),
(44, 'Paris Saint Germain', 'E', 1),
(43, 'JUVENTUS', 'E', 1),
(35, 'BAYERN MONACO', 'E', 1),
(42, 'AJAX', 'E', 1),
(41, 'LIVERPOOL', 'E', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_punteggi_risultati`
--

CREATE TABLE IF NOT EXISTS `_punteggi_risultati` (
  `id_risulato` int(11) NOT NULL,
  `tipo_ris` varchar(20) NOT NULL,
  `punti_id` int(11) NOT NULL,
  PRIMARY KEY (`id_risulato`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_punteggi_risultati`
--

INSERT INTO `_punteggi_risultati` (`id_risulato`, `tipo_ris`, `punti_id`) VALUES
(1, '1', 1),
(2, 'X', 1),
(3, '2', 1),
(4, '1X', 2),
(5, 'X2', 2),
(6, '12', 2),
(7, 'UNDER', 5),
(8, 'OVER', 5),
(9, 'NOGOL', 4),
(10, 'GOL', 4),
(11, 'DISPARI', 3),
(12, 'PARI', 3),
(13, '1-0', 6),
(14, '2-0', 6),
(15, '3-0', 6),
(16, '4-0', 6),
(18, '2-1', 6),
(19, '3-1', 6),
(20, '4-1', 6),
(22, '3-2', 6),
(23, '4-2', 6),
(25, '4-3', 6),
(28, '0-0', 6),
(29, '1-1', 6),
(30, '2-2', 6),
(31, '3-3', 6),
(32, '4-4', 6),
(34, '0-1', 6),
(35, '0-2', 6),
(36, '0-3', 6),
(37, '0-4', 6),
(39, '1-2', 6),
(40, '1-3', 6),
(41, '1-4', 6),
(43, '2-3', 6),
(44, '2-4', 6),
(46, '3-4', 6),
(48, 'ALTRO', 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `_punti_previsti`
--

CREATE TABLE IF NOT EXISTS `_punti_previsti` (
  `id_punti` int(11) NOT NULL,
  `descrizione` varchar(20) NOT NULL,
  `valore` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_punti`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_punti_previsti`
--

INSERT INTO `_punti_previsti` (`id_punti`, `descrizione`, `valore`) VALUES
(1, 'Fisso(1X2)', 4),
(2, 'Doppia chance', 2),
(3, 'Pari-Dispari', 4),
(4, 'Gol-NoGol', 2),
(5, 'Under-Over', 2),
(6, 'Ris Esatto', 12),
(7, 'Vincente Torneo', 50),
(8, 'Miglior Attacco', 16),
(9, 'Miglior Difesa', 15),
(10, 'Capocannoniere', 15),
(11, 'Prima Girone', 6),
(12, 'Seconda Girone', 4),
(13, 'Terza Girone', 3),
(14, 'Ultima Girone', 2),
(15, 'Girone Completo', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `_schedina`
--

CREATE TABLE IF NOT EXISTS `_schedina` (
  `id_evento` int(11) NOT NULL,
  `id_schedina` int(11) NOT NULL,
  `risultato` varchar(20) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `_schedina_user`
--

CREATE TABLE IF NOT EXISTS `_schedina_user` (
  `schedina_id` int(11) NOT NULL AUTO_INCREMENT,
  `utente_id` varchar(40) NOT NULL,
  `tempo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `descrizione` varchar(40) NOT NULL DEFAULT 'Compilata' COMMENT 'verifica se la scheda sia stata compilata copiata oppure random',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`schedina_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_antepost_base`
--

CREATE TABLE IF NOT EXISTS `_scommesse_antepost_base` (
  `id_evento` int(11) NOT NULL,
  `tipo` int(11) NOT NULL DEFAULT '2',
  `gruppo_id` varchar(1) NOT NULL,
  `punti_id` int(11) NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_scommesse_antepost_base`
--

INSERT INTO `_scommesse_antepost_base` (`id_evento`, `tipo`, `gruppo_id`, `punti_id`) VALUES
(2, 2, 'C', 10),
(3, 2, 'A', 8),
(4, 2, 'D', 9),
(1, 2, 'V', 7);

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_antepost_gironi`
--

CREATE TABLE IF NOT EXISTS `_scommesse_antepost_gironi` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) NOT NULL DEFAULT '3',
  `girone` varchar(1) NOT NULL,
  `specie` varchar(1) NOT NULL DEFAULT 'S' COMMENT 's per singolo c per completo',
  `risultato` varchar(20) NOT NULL DEFAULT '',
  `punti_id` int(11) NOT NULL,
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_evento`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dump dei dati per la tabella `_scommesse_antepost_gironi`
--

INSERT INTO `_scommesse_antepost_gironi` (`id_evento`, `tipo`, `girone`, `specie`, `risultato`, `punti_id`, `comp_id`) VALUES
(21, 3, 'E', 'S', '', 11, 1),
(22, 3, 'E', 'S', '', 12, 1),
(23, 3, 'E', 'S', '', 13, 1),
(24, 3, 'E', 'S', '', 14, 1),
(25, 3, 'E', 'C', '', 15, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_risultati`
--

CREATE TABLE IF NOT EXISTS `_scommesse_risultati` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) NOT NULL DEFAULT '1',
  `partita` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL,
  `data` varchar(20) NOT NULL DEFAULT '',
  `goalc` int(11) DEFAULT NULL,
  `goalt` int(11) DEFAULT NULL,
  `fisso` varchar(10) NOT NULL DEFAULT '',
  `doppiachance1` varchar(10) NOT NULL DEFAULT '',
  `doppiachance2` varchar(10) NOT NULL DEFAULT '',
  `underover` varchar(10) NOT NULL DEFAULT '',
  `risesatto` varchar(10) NOT NULL DEFAULT '',
  `paridispari` varchar(10) NOT NULL DEFAULT '',
  `golnogol` varchar(10) NOT NULL DEFAULT '',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_evento`),
  UNIQUE KEY `scommessa` (`partita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=104 ;

--
-- Dump dei dati per la tabella `_scommesse_risultati`
--

INSERT INTO `_scommesse_risultati` (`id_evento`, `tipo`, `partita`, `girone`, `data`, `goalc`, `goalt`, `fisso`, `doppiachance1`, `doppiachance2`, `underover`, `risesatto`, `paridispari`, `golnogol`, `comp_id`) VALUES
(103, 1, 'Benfica-AJAX', 'E', '02/23/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(102, 1, 'Atletico Madrid-Manchester United', 'E', '02/23/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(101, 1, 'Chelsea-Lille', 'E', '02/22/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(100, 1, 'Villareal-JUVENTUS', 'E', '02/22/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(99, 1, 'Salisburgo-BAYERN MONACO', 'E', '02/16/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(98, 1, 'Inter-LIVERPOOL', 'E', '02/16/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(97, 1, 'Sporting Lisbona-Manchester City', 'E', '02/15/2022', NULL, NULL, '', '', '', '', '', '', '', 1),
(96, 1, 'Paris Saint Germain-REAL MADRID', 'E', '02/15/2022', NULL, NULL, '', '', '', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_utenti`
--

CREATE TABLE IF NOT EXISTS `_utenti` (
  `id_utente` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `cognome` varchar(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cellulare` varchar(11) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo` varchar(20) NOT NULL DEFAULT 'giocatore',
  `versato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_utente`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `_utenti`
--

INSERT INTO `_utenti` (`id_utente`, `username`, `nome`, `cognome`, `email`, `cellulare`, `password`, `ruolo`, `versato`) VALUES
(1, 'admin', 'Andrea', 'Maresca', 'fantamondiale2014andreamaresca@gmail.com', '3661746386', 'admin', 'admin', 0),
(2, 'messomale', 'Emanuele', 'De Carlo', 'em.decarlo@gmail.com', '3925184699', 'messomale', 'giocatore', 0),
(3, 'asroma', 'asroma', 'asroma', 'asroma@gmail.com', '14872898879', 'asroma', 'visitatore', 0),
(4, 'akhdhdj', 'sasso', 'sasso', 'sasso@gmail.com', '148976525', 'Sasso100@', 'visitatore', 0),
(5, 'aoooo', 'aoooo', 'aoooo', 'aoo@gmail.com', '14178765', 'aooooo@', 'visitatore', 0),
(6, 'krimtar', 'Abdoul Zakiou', 'SOUMANOU', 'abdoulaminouz@gmail.com', '541515151', '111111', 'visitatore', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

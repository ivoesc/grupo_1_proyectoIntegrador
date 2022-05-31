-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2022 a las 03:42:03
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bigscreen_test_db`
--

CREATE DATABASE IF NOT EXISTS `bigcreen_test_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bigscreen_test_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `surname` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actors`
--

INSERT INTO `actors` (`id`, `name`, `surname`) VALUES
(1, 'Brad', 'Pitt'),
(2, 'Robert', 'De Niro'),
(3, 'Tom', 'Hanks'),
(4, 'Jake', 'Gyllenhaal'),
(5, 'Samuel L.', 'Jackson'),
(6, 'Uma', 'Thurman'),
(7, 'John', 'Travolta'),
(8, 'Tom', 'Holland'),
(9, 'Zendaya', 'Coleman'),
(10, 'Jacob', 'Batalon'),
(11, 'Tom', 'Cruise'),
(12, 'Val', 'Kilmer'),
(13, 'Jennifer', 'Connelly'),
(14, 'Jared', 'Leto'),
(15, 'Michael', 'Keaton'),
(16, 'Matt', 'Smith'),
(17, 'Mads', 'Mikkelsen'),
(18, 'Eddie', 'Redmayne'),
(19, 'Jude', 'Law'),
(20, 'Jamie', 'Dornan'),
(21, 'Caitriona', 'Balfe'),
(22, 'Judi', 'Dench'),
(23, 'Ray', 'Liotta'),
(24, 'Joe', 'Pesci'),
(25, 'Humphrey', 'Bogart'),
(26, 'Ingrid', 'Bergman'),
(27, 'Paul', 'Henreid'),
(28, 'Eugenio', 'Derbez'),
(29, 'Emilia', 'Jones'),
(30, 'Troy', 'Kotsur'),
(32, 'Edward', 'Norton'),
(33, 'Chris', 'Evans'),
(34, 'Taika', 'Waititi'),
(35, 'James', 'Brolin'),
(36, 'Christian', 'Bale'),
(37, 'Chris', 'Hemsworth'),
(38, 'Natalie', 'Portman'),
(39, 'Chris', 'Pratt'),
(40, 'Bryce', 'Dallas Howard'),
(41, 'Sam', 'Neill'),
(42, 'Benedict', 'Cumberbatch'),
(43, 'Elizabeth', 'Olsen'),
(44, 'Chiwetel', 'Ejiofor'),
(45, 'Eiza', 'González'),
(46, 'Yahya', 'Abdul-Mateen II'),
(47, 'Alexander', 'Skarsgård'),
(48, 'Nicole', 'Kidman'),
(49, 'Anya', 'Taylor-Joy'),
(50, 'Anthony', 'Edwards');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor_movie`
--

CREATE TABLE `actor_movie` (
  `id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actor_movie`
--

INSERT INTO `actor_movie` (`id`, `actor_id`, `movie_id`) VALUES
(1, 5, 1),
(2, 6, 1),
(3, 7, 1),
(10, 20, 7),
(11, 21, 7),
(12, 22, 7),
(13, 2, 8),
(14, 23, 8),
(15, 24, 8),
(16, 25, 9),
(17, 26, 9),
(18, 27, 9),
(19, 46, 10),
(20, 29, 10),
(21, 30, 10),
(22, 6, 11),
(24, 32, 11),
(25, 14, 12),
(26, 15, 12),
(27, 16, 12),
(28, 33, 13),
(29, 34, 13),
(30, 35, 13),
(31, 36, 14),
(32, 37, 14),
(33, 38, 14),
(37, 39, 16),
(38, 40, 16),
(39, 41, 16),
(43, 42, 18),
(44, 43, 18),
(45, 44, 18),
(46, 4, 19),
(47, 45, 19),
(48, 46, 19),
(49, 47, 20),
(50, 48, 20),
(51, 49, 20),
(64, 43, 23),
(65, 45, 23),
(66, 46, 23),
(70, 11, 17),
(71, 12, 17),
(72, 13, 17),
(85, 1, 26),
(86, 2, 26),
(87, 3, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Estrenos'),
(2, 'Próximamente'),
(3, 'Reestrenos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `complex`
--

CREATE TABLE `complex` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `complex`
--

INSERT INTO `complex` (`id`, `name`) VALUES
(1, 'Caballito'),
(2, 'Recoleta'),
(3, 'Nordelta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `surname` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `directors`
--

INSERT INTO `directors` (`id`, `name`, `surname`) VALUES
(1, 'Quentin', 'Tarantino'),
(2, 'Jon', 'Watts'),
(3, 'Taika', 'Waititi'),
(4, 'David', 'Yates'),
(5, 'Kenneth', 'Branagh'),
(6, 'Martin', 'Scorsese'),
(7, 'Michael', 'Curtiz'),
(8, 'Sian', 'Heder'),
(9, 'David', 'Fincher'),
(10, 'Daniel', 'Espinosa'),
(11, 'Angus', 'MacLane'),
(12, 'Joseph', 'Kosinski'),
(13, 'Colin', 'Trevorrow'),
(14, 'Sam', 'Raimi'),
(15, 'Michael', 'Bay'),
(16, 'Robert', 'Eggers'),
(17, 'Tony', 'Scott');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Acción'),
(2, 'Drama'),
(3, 'Musical'),
(4, 'Crimen'),
(5, 'Ciencia ficción'),
(6, 'Romance'),
(7, 'Superhéroes'),
(8, 'Fantasía'),
(9, 'Aventura'),
(10, 'Animación'),
(11, 'Thriller'),
(12, 'Terror'),
(13, 'Comedia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `director_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `trailer` varchar(60) NOT NULL,
  `poster` varchar(60) NOT NULL,
  `background` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `director_id`, `genre_id`, `duration`, `category_id`, `price`, `trailer`, `poster`, `background`) VALUES
(1, 'Pulp Fiction', 'La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.', 1, 1, 154, 3, 1000, 'https://www.youtube.com/embed/5ZAhzsi1ybM', 'poster-PulpFiction.jpg', 'background-PulpFiction.webp'),
(7, 'Belfast', 'Una familia de clase trabajadora y su hijo pequeño se ven atrapados en el caos de los conflictos que se desarrollan en Belfast, Irlanda del Norte, en la década de 1960.', 5, 2, 98, 1, 1000, 'https://www.youtube.com/embed/6_8DxIn11eo', 'poster-Belfast.jpg', 'background-Belfast.jpeg'),
(8, 'Goodfellas', 'Henry, un niño de trece años de Brooklyn, vive fascinado con el mundo de los gángsters. Su sueño se hace realidad cuando entra en la familia Pauline.', 6, 4, 146, 3, 1000, 'https://www.youtube.com/embed/2ilzidi_J8Q', 'poster-Goodfellas.jpg', 'background-Goodfellas.jpg'),
(9, 'Casablanca', 'Durante la II Guerra Mundial, Casablanca era una ciudad a la que llegaban huyendo del nazismo gentes de todas partes: llegar era fácil, pero salir era casi imposible, especialmente si el nombre del fugitivo figuraba en las listas de la Gestapo.', 7, 6, 102, 3, 1000, 'https://www.youtube.com/embed/rXUAQQjNh5g', 'poster-Casablanca.jpg', 'background-Casablanca.png'),
(10, 'Coda', 'Ruby es el único miembro con audición de una familia de sordos. Cada mañana, antes de ir a clases, trabaja con sus padres y su hermano tratando de mantener a flote su negocio. En el coro del instituto, Ruby descubre su pasión por la música.', 8, 2, 111, 2, 1000, 'https://www.youtube.com/embed/iy910WCy5R0', 'poster-Coda.jpg', 'background-Coda.jpeg'),
(11, 'Fight Club', 'Un empleado de oficina insomne, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de lucha clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo.', 9, 11, 139, 3, 1000, 'https://www.youtube.com/embed/R7aiJtcJ0AQ', 'poster-FightClub.jpg', 'background-FightClub.jpg'),
(12, 'Morbius', 'Ambientada en el universo de Spider Man, se centra en uno de sus villanos más icónicos, Morbius, un doctor que tras sufrir una enfermedad en la sangre y fallar al intentar curarse, se convirtió en un vampiro.', 10, 7, 108, 1, 1000, 'https://www.youtube.com/embed/FmKm1uguI_0', 'poster-Morbius.jpg', 'background-Morbius.jpg'),
(13, 'Lightyear', 'Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot.', 11, 10, 100, 1, 1000, 'https://www.youtube.com/embed/1SH4tE0xnbs', 'poster-Lightyear.jpg', 'background-Lightyear.jpeg'),
(14, 'Thor Love and Thunder', 'La película encuentra a Thor (Chris Hemsworth) en un viaje diferente a todo lo que ha enfrentado: Una búsqueda de la paz interior. Pero su retiro es interrumpido por un asesino galáctico conocido como Gorr el carnicero de dioses (Christian Bale), que busca la extinción de los dioses.', 3, 7, 133, 2, 1000, 'https://www.youtube.com/embed/kBGD4kmA7KI', 'poster-ThorLoveandThunder.jpeg', 'background-ThorLoveandThunder.jpg'),
(16, 'Jurassic World: Dominion', 'Siguiendo los eventos ocurridos en Jurassic World: el reino caido, Owen y Claire deberán ahora enfrentarse a un mundo donde la genética y los dinosaurios sobrevivientes de la Isla Nublar están a disposición de multiples potencias mundiales. ', 13, 5, 146, 2, 1000, 'https://www.youtube.com/embed/WPEAxxnxqXw', 'poster-JurassicWorldDominion.webp', 'background-JurassicWorldDominion.jpg'),
(17, 'Top Gun: Maverick', 'Tras más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete \"Maverick\" Mitchel se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba.', 12, 1, 137, 1, 1000, 'https://www.youtube.com/embed/zzBIzYmxatU', 'poster-TopGunMaverick.jpg', 'background-TopGunMaverick.jpg'),
(18, 'Doctor Strange in the Multiverse of Madness', 'El Doctor Strange abre un portal al multiverso al utilizar un hechizo prohibido. Con la ayuda de viejos y nuevos aliados místicos, atravesará las alucinantes y peligrosas realidades alternativas del Multiverso para enfrentarse a un nuevo y misterioso adversario.', 14, 7, 126, 1, 1000, 'https://www.youtube.com/embed/cFHjZfy50Kk', 'poster-DoctorStrangeintheMultiverseofMadness.webp', 'background-DoctorStrangeintheMultiverseofMadness.webp'),
(19, 'Ambulance', 'Unos hermanos ladrones intentan dejar a atrás a la policía de Los Ángeles después de secuestrar una ambulancia para escapar del robo de un banco.', 15, 11, 136, 1, 1000, 'https://www.youtube.com/embed/uapEsDKAZik', 'poster-Ambulance.jpg', 'background-Ambulance.png'),
(20, 'The Northman', 'El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre.', 16, 9, 137, 1, 1000, 'https://www.youtube.com/embed/g62kIw0aJmE', 'poster-TheNorthman.jpg', 'background-TheNorthman.jpg'),
(23, 'Spider-Man No Way Home', 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.', 2, 7, 146, 1, 1000, 'https://www.youtube.com/embed/z70zo9gQUKA', 'poster-Spider-ManNoWayHome.jpg', 'background-Spider-ManNoWayHome.jpg'),
(26, 'Top Gun', 'El joven piloto Maverick Mitchell acude a una prestigiosa escuela aérea, famosa por formar a los mejores pilotos de combate del país. Maverick se siente atraído por su hermosa instructora, mientras desarrolla una intensa rivalidad con otro piloto.', 17, 1, 115, 3, 1000, 'https://www.youtube.com/embed/xa_z57UatDY', 'poster-TopGun.jpg', 'background-TopGun.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `complex_id` int(11) NOT NULL,
  `day` varchar(20) NOT NULL,
  `hour` varchar(20) NOT NULL,
  `seat_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seats`
--

INSERT INTO `seats` (`id`, `user_id`, `movie_id`, `complex_id`, `day`, `hour`, `seat_id`) VALUES
(68, 2, 7, 1, 'Lunes_01/01', '15HS', 'a63'),
(69, 2, 7, 1, 'Lunes_01/01', '15HS', 'a64'),
(70, 2, 7, 1, 'Lunes_01/01', '15HS', 'a65'),
(71, 2, 7, 1, 'Lunes_01/01', '15HS', 'a66'),
(133, 2, 7, 1, 'Lunes_01/01', '15HS', 'a13'),
(134, 2, 7, 1, 'Lunes_01/01', '15HS', 'a14'),
(135, 2, 7, 1, 'Lunes_01/01', '15HS', 'a15'),
(136, 2, 7, 1, 'Lunes_01/01', '15HS', 'a16'),
(137, 2, 7, 1, 'Lunes_01/01', '15HS', 'a53'),
(138, 2, 7, 1, 'Lunes_01/01', '15HS', 'a54'),
(139, 2, 7, 1, 'Lunes_01/01', '15HS', 'a55'),
(140, 2, 7, 1, 'Lunes_01/01', '15HS', 'a56'),
(141, 2, 7, 1, 'Lunes_01/01', '15HS', 'a43'),
(142, 2, 7, 1, 'Lunes_01/01', '15HS', 'a44'),
(143, 2, 7, 1, 'Lunes_01/01', '15HS', 'a45'),
(144, 2, 7, 1, 'Lunes_01/01', '15HS', 'a46'),
(145, 2, 7, 1, 'Lunes_01/01', '15HS', 'a47'),
(146, 2, 7, 1, 'Lunes_01/01', '15HS', 'a57'),
(147, 2, 7, 1, 'Lunes_01/01', '15HS', 'a48'),
(148, 2, 7, 1, 'Lunes_01/01', '15HS', 'a58'),
(149, 2, 7, 1, 'Lunes_01/01', '15HS', 'a42'),
(150, 2, 7, 1, 'Lunes_01/01', '15HS', 'a33'),
(151, 2, 7, 1, 'Lunes_01/01', '15HS', 'a22'),
(152, 2, 7, 1, 'Lunes_01/01', '15HS', 'a21'),
(161, 16, 26, 1, 'Lunes_01/01', '15HS', 'a63'),
(162, 16, 26, 1, 'Lunes_01/01', '15HS', 'a64'),
(163, 16, 26, 1, 'Lunes_01/01', '15HS', 'a65'),
(164, 16, 26, 1, 'Lunes_01/01', '15HS', 'a66');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `complex_id` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `phone`, `complex_id`, `password`, `profile_pic`) VALUES
(2, 'Manuel', 'Yeregui', 'manuelyeregui@gmail.com', '1168005580', 1, '$2a$10$elGf5aIQ510SIWmpFyzMCOPTUdrVnKXp1D6W6IRR8HDj5RCPHrQuq', 'user-1650742628209.jpg'),
(5, 'Ivo', 'Escoli', 'ivoescoli@gmail.com', '110000', 1, '$2a$10$tEDrOVCuIs.KlrWzmYPhZueB3foxlNOSKDCGVg2ENOzteJUW/95l6', 'user-1651890541045.png'),
(6, 'Juan', 'Carlos', 'juancarlos@gmail.com', '1112345678', 2, '$2a$10$OQO8cq/oW6Efu2.u4MBV7upqrvRJr5C6DybiDQcgVX9qPBnNtJzS6', 'user-1653936221480.jpg'),
(16, 'Tom', 'Cruise', 'tomcruise@gmail.com', '1112345678', 1, '$2a$10$cPhtypGg8uB0ljwtSjn3PO12MBD7zZmHox5CWdQbTRoTCYi8/Y.fm', 'user-1653949239040.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actor_id` (`actor_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `complex`
--
ALTER TABLE `complex`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `director_id` (`director_id`),
  ADD KEY `genre_id` (`genre_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `complex_id` (`complex_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `complex_id` (`complex_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `complex`
--
ALTER TABLE `complex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actor_movie`
--
ALTER TABLE `actor_movie`
  ADD CONSTRAINT `actor_movie_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  ADD CONSTRAINT `actor_movie_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`);

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`),
  ADD CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `movies_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `seats_ibfk_3` FOREIGN KEY (`complex_id`) REFERENCES `complex` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`complex_id`) REFERENCES `complex` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

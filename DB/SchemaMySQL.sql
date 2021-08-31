ALTER USER 'root' @'localhost' IDENTIFIED WITH mysql_native_password BY 'Monze@2019';

CREATE DATABASE IF NOT EXISTS presly;
use presly;

DROP TABLE IF EXISTS `BANK1`;

CREATE TABLE `BANK1` (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  dept VARCHAR(50) NOT NULL,
  post VARCHAR(50),
  salary int,
  status VARCHAR(50) default "Yes",
  createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  `BANK1` (name, dept, post, salary)
VALUES
  ("Noria", "Empress", "Lusaka Empire", 21209),
  ("Presly", "King", "Chewa Kingdon", 12014),
  ("Kathrine", "Queen", "Chewa Kingdom", 12009),
  ("Nelson", "Price", "Pemba Kingdom", 12084);

-- Table structure for table `BANK3`
--
DROP table if exists `BANK3`;

CREATE TABLE `BANK3` (
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar (70) DEFAULT NULL,
  `town` varchar (70) DEFAULT NULL,
  `hotel` varchar (70) DEFAULT NULL,
  `isactive` varchar (71) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `BANK3`
--
INSERT INTO
  `BANK3` (`name`, `town`, `hotel`, `isactive`)
VALUES
  ('Lorena', 'VasterasX', 'Third', 2011),
  ('Leon', 'PragueX', 'Second', 2012),
  ('Nikolas', 'AmsterX', 'First', 2014),
  ('Marvin', 'PembaX', 'Seventh', 2013),
  ('Cathrine', 'Lusaka', 'Nine', 2015);

select
  *
from
  BANK1,
  bank3;
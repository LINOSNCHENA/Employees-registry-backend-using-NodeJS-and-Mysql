CREATE DATABASE IF NOT EXISTS presly;
DROP TABLE IF EXISTS xFAMILY;

DROP TABLE IF EXISTS XCONTACTS;

DROP TABLE IF EXISTS XWORKERS;

CREATE TABLE XWORKERS (
  id1 serial PRIMARY KEY,
  name VARCHAR(90) NOT NULL,
  office VARCHAR(90) default 'HUMAN-RESOURCE',
  mobile int default 62005,
  stars VARCHAR(90) default 'PART-TIME',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE XCONTACTS (
  id2 serial PRIMARY KEY,
  email VARCHAR(90) NOT NULL,
  mobile VARCHAR(90) NOT NULL,
  retirement VARCHAR(90) default 'CONTRATOR',
  UNIQUE(email, mobile),
  FOREIGN KEY (id2) REFERENCES XWORKERS on delete cascade
);

CREATE TABLE xFAMILY (
  id3 serial PRIMARY KEY,
  mother VARCHAR(90) NOT NULL,
  father VARCHAR(90) NOT NULL,
  UNIQUE(mother, father),
  FOREIGN KEY (id3) REFERENCES XWORKERS on delete cascade
);

INSERT INTO
  XWORKERS (name, mobile, office)
VALUES
  ('Nikolas Postgresql', 1230112, 450004),
  ('Lorena Postgresql', 7010112, 454007),
  ('Leon Postgresql', 5201112, 4540009),
  ('Catherine Postgresql', 1220112, 4545904),
  ('Kristina Postgresql', 7221112, 4545004),
  ('Irene Postgresql', 5223112, 45450004);

INSERT INTO
  XCONTACTS (id2, email, mobile)
VALUES
  (
    1,
    'nikolas.marvin@postgresql.com',
    '+230775263158'
  ),
  (
    2,
    'Lorena.nchena@postgresql.com',
    '+230775263158'
  ),
  (3, 'Leon.chena@postgresql.com', '+230775263158'),
  (
    4,
    'cathy.marvin@postgresql.com',
    '+230775263158'
  );

INSERT INTO
  xFAMILY (id3, father, mother)
VALUES
  (1, 'LINOS Postgresql', 'KRISTINA1 NCHENA'),
  (2, 'PRESLY Postgresql', 'CATHY2 NCHENA'),
  (3, 'NELSON Postgresql', 'NORIA3 SIMWEMBA');

SELECT
  *
from
  XWORKERS,
  XCONTACTS,
  xFAMILY;
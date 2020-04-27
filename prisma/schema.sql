CREATE TABLE Team (
      id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
      name VARCHAR(255),
      base VARCHAR(255),
      team_principal VARCHAR(255),
      power_unit VARCHAR(255),
          world_championships INTEGER
)

CREATE TABLE Cars (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    top_spead VARCHAR(255),
    teamId INTEGER NOT NULL,
    FOREIGN KEY (teamId) REFERENCES Team(id)
)

CREATE TABLE Driver (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    country VARCHAR(255),
     podiums VARCHAR(255),
     world_championships INTEGER,
    teamId INTEGER NOT NULL,
     carId INTEGER NOT NULL,
     FOREIGN KEY (carId) REFERENCES Cars(id),
    FOREIGN KEY (teamId) REFERENCES Team(id)
)
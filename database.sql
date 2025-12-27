-- Ingresamos al bin para inciar postgres y determinar el destino de todos los archivos
cd C:\Users\<user>\Apps\postgres\bin
.\initdb.exe -D ..\data -U postgres

-- Inicializa el servidor de postgres
.\pg_ctl.exe -D ..\data -l logfile start

-- Para hacer cambios en la base de datos desde la terminal
.\psql.exe -U postgres

-- Para detener el servidor
.\pg_ctl.exe -D ..\data stop

CREATE DATABASE crudDB;
GRANT ALL PRIVILEGES ON DATABASE crudDB to postgres;
\c crudDB;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE likes (
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  PRIMARY KEY (user_id, post_id)
);


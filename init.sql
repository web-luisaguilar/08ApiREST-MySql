CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE IF NOT EXISTS movie(
  movie_id VARCHAR(9) PRIMARY KEY,
  title VARCHAR(100),
  realease VARCHAR(4),
  rating DECIMAL(2,1),  
  image VARCHAR(255)
);


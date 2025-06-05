## Api REST - MySQL

---

Pequeña aplicacion con **Express** usando **MySql** como base de datos

Caracteristicas basicas de la Api REST:

- GET (obtener todos los datos)
- POST (agregar un nuevo registro)
- PUT (actualizar un registro)
- DELETE (eliminar un registro)

## Instalacion con Docker

Para iniciar la aplicacion con docker es necesario:

- Iniciar el docker deamond o usar docker desktop

### Iniciar con docker-compose

Dentro de la carpeta del proyecto:

```bash
docker-compose up --watch --build
```

Esto crear un contenedor con la aplicacion y con el contenedor de mysql.

Una vez que se termine de iniciar el contenedor la aplicacion estara disponible en el puerto **3000**.

> URL:
> https://localhost:3000

Donde deberia aparecer la siguiente imagen:

![api-rest-mysql](https://raw.githubusercontent.com/web-luisaguilar/08ApiREST-MySql/refs/heads/master/public/img/home-app-preview.png)

> _En caso de mostrarse un error, esperar unos segundos y refrescar la pagina._

## Instalacion Manual

**Requisitos Previos:**

1. Tener Inciada una base de datos con mysql (puede usar la que viene integrada con xampp)
2. Importar el esquema de la base de datos que viene dentro de la carpeta `/models/` con combre `movie-schema.sql`

Para inciar la aplicacion:

```bash
npm install
npm start
```

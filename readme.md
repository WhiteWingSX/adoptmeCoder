# Adoptme - Coder

Proyecto Adoptme tiene como finalidad comprender las tecnologias aprendidas y aplicarlas en un proyecto real.

### Herramientas y tecnologias utilizadas:

- Node.js
- Express
- MongoDB + Mongoose
- Swagger
- Supertest
- Docker
- Postman

### Como inicializar:

#### instalacion y preparacion inicial:
1. descarga el proyecto de GitHub utilizando git clone https://github.com/WhiteWingSX/adoptmeCoder.git
2. descarga los modulos de node `npm i` o `npm install`
3. Modifica el archivo **.env.template** con las credenciales de tu base de datos, una vez hecho eso renombra el archivo a **.env**

#### Inicio y testeo de la aplicacion:
4. inicia el proyecto `npm start` Este iniciara en el **http://localhost:8080**
5. Puedes realizar las pruebas a traves de los siguientes endpoints disponibles:
- http://localhost:8080/api/pets
- http://localhost:8080/api/users
6. puedes realizar test al controlador de usuario utilizando el comando `npm test`

#### Docker:
7. Proyecto presenta un Dockerfile, para crear una imagen de docker puedes ejecutar el comando `docker build -t adoptme-coder .`

```
NOTA:

- Revisa en el archivo Dockerfile la version de node debe estar configurada para tu proyecto.
- No olvides que para crear una imagen de docker necesitas tener instalado docker desktop en tu computador.
```

```
            Proyecto creado con el fin de practicar y entender las tecnologias aplicadas.

                                       Proyecto para CoderHouse 2026
```
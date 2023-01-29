# app-student-backend

Backend for the student app

### To get started

1. Make a clone of the repository.
2. We execute _npm i_ to download the dependencies.
3. We create an .env file with the environment variables that we need (port, database access, etc) that will not be uploaded to github because it is in the .gitignore.
4. To start the server we execute _npm run dev_: This executes the configured eslint rules (standard package) and starts the server

To work we create a feature branch for development and then PR is requested on develop
We will need an .env file with the fields PORT, BBDD_URI*, JWT_SECRET_KEY, CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, EMAIL_ACCOUNT, EMAIL_PASSWORD

*full url of MongoDB Atlas (ej. mongodb+srv://user:pass@cluster.c3unr1n.mongodb.net/schema?retryWrites=true&w=majority)

## Endpoints

### Users

- POST (/api/register) with a body of the following style

      {
          "username": "username",

          "name": "name surname",

          "email": "email@gmail.com",

          "password": "password"
      }
    
- POST (/api/login) with a body of the following style

      {
          "email": "email@gmail.com",

          "password": "password"
      }

- POST (/api/renew) with the token for the _Authorization_ header and returns a new one with 12 more hours

### Courses

- POST (/api/course) with the token for the _Authorization_ header and a body of the following style

      {
          "title": "Test",

          "description": "This course is trial", //(optional)

          "state": "EP"
      }

- GET (/api/course) with the token for the _Authorization_ header and returns an array with all the user's courses and the userId

- GET (/api/course/:id) with the token for the _Authorization_ header and returns the course if it belongs to the user and the userId

- DELETE (/api/course/:id) with the token for the _Authorization_ header and the userId if it has been deleted and error if it could not be deleted

- PATCH (/api/course/:id) with the token for the _Authorization_ header and returns the course and the userId
        {
            "title": "Sixth",

           "description": "Ground floor" //(optional)

            "state": "PH",
        }

### ToDos

- POST (/api/to-do) with the token for the _Authorization_ header and a body of the following style

      {
          "title": "Test",

          "description": "This toDo is for testing", //(optional)

         "completed": true //(optional)
      }

- GET (/api/to-do) with the token by the _Authorization_ header returns an array with the userId and all the toDos of the user

- GET (/api/to-do?completado=true) with the token by the _Authorization_ header returns an array with the userId and all of the user's completed toDos 

- GET (/api/to-do?completado=false) with the token by the _Authorization_ header returns an array with the userId and all the unfilled toDos of the user

- GET (/api/to-do/:id) with the token for the _Authorization_ header and the id of the toDo in the url returns an array with the toDos searched for if it does not exist returns null

- DELETE (/api/to-do/:id) with the token for the _Authorization_ header the Id of the toDo in the url returns true and the userId when it was successfully removed otherwise it returns error

- PATCH (/api/to-do/:id) 
with the token for the header _Authorization_ the Id of the toDo in the url and the modifications in a body of the following style

    {
    "title":"This is an update",  
    "description":"I am editing the toDo",
    "completed": true
    }

returns an array with the updated toDo
### Modify user
- PATCH (/api/user/uploadPhoto) with an image in the file type request

- GET (/user/verify/:cryptoToken) where we will verify the user (sent by email)

- PATCH (/api/user) with the token for the _Authorization_ header and a body of the following style (no field is required)
      {
          "name": "Test",

          "username": "Test",

          "password": ""Test"
      }

- POST (/api/user/forgot/password) with the email in the body to reset the new password

      {
          "email": "email@gmail.com"
      }

- POST (/api/user/reset) with the new password in the body to change to the new one we want and through the header we will pass the userid and cryptotoken

      {
          "password": "newPassword123"
      }

### Historical searches

- POST (/api/historical/search) with the token for the _Authorization_ header and a body of the following style

      {
         "search": "Test"

- GET (/api/historical/search) with the token for the _Authorization_ header and returns an array with all user lookups, ordered by most recent, and the userId

- GET (/api/historical/search?limit=2) with the token for the _Authorization_ header and returns an array with the last 2 searches for the user, ordered by most recent, and the userId. In the _query parameter_ limit, you can put the amount that you want to limit the records to obtain

## Token verification

In the routes that require token validation, we will import the following _const tokenValidator = require('../middlewares/tokenValidator')_ and add it as a middleware to the request
## Email verification

Through the nodemailer service, we will send an email to the user to verify the email with the verify/email endpoint. If the user has not verified after an hour, the verification process is started again, with a new email (new url with new cryptoToken)


# app-estudiantes-backend

Backend para la app de estudiantes

### Para empezar

1. Hacer un clone del repo
2. Ejecutamos _npm i_ para descargar las dependencias
3. Creamos un fichero .env con las variables de entorno que vayamos necesitando (puerto, accesos bbdd, etc) que no se subirá a github porque esta en el .gitignore
4. Para arrancar el servidor ejecutamos _npm run dev_: Esto ejecuta las reglas de eslint configuradas (paquete standard) y arranca el servidor

Para trabajar creamos una rama feature para el desarrollo y luego se solicita PR sobre develop

Necesitaremos un fichero .env con los campos PORT, BBDD_URI*, JWT_SECRET_KEY, CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, EMAIL_ACCOUNT, EMAIL_PASSWORD

*URL completa de MongoDB Atlas (ej. mongodb+srv://user:pass@cluster.c3unr1n.mongodb.net/schema?retryWrites=true&w=majority)

## Endpoints

### Usuarios

- POST (/api/register) con un body del siguiente estilo

      {
          "username": "username",

          "name": "NombreYApellido",

          "email": "email@gmail.com",

          "password": "password"
      }
    
- POST (/api/login) con un body del siguiente estilo

      {
          "email": "email@gmail.com",

          "password": "password"
      }

- POST (/api/renew) con el token por el header _Authorization_ y retorna uno nuevo con 12h mas

### Cursos

- POST (/api/course) con el token por el header _Authorization_ y un body del siguiente estilo

      {
          "titulo": "Pruebaaa",

          "descripcion": "Este curso es de prueba", //(opcional)

          "estado": "EP"
      }

- GET (/api/course) con el token por el header _Authorization_ y retorna un arreglo con todos los cursos del usuario y el userId

- GET (/api/course/:id) con el token por el header _Authorization_ y retorna el curso si es del usuario y el userId

- DELETE (/api/course/:id) con el token por el header _Authorization_ y el userId si ha sido eliminado y error si no ha podido eliminarse

- PATCH (/api/course/:id) con el token por el header _Authorization_ y retorna el curso y el userId

        {
            "titulo": "Sexto",

            "descripcion": "Planta baja" //(opcional)

            "estado": "PH",
        }

### ToDos

- POST (/api/to-do) con el token por el header _Authorization_ y un body del siguiente estilo

      {
          "titulo": "Prueba",

          "descripcion": "Este toDo es de prueba", //(opcional)

          "completado": true //(opcional)
      }

- GET (/api/to-do) con el token por el header _Authorization_  retorna un arreglo con el userId y todos los toDos del usuario 

- GET (/api/to-do?completado=true) con el token por el header _Authorization_  retorna un arreglo con el userId y todos los toDos completados del usuario 

- GET (/api/to-do?completado=false) con el token por el header _Authorization_  retorna un arreglo con  el userId y todos los toDos no completados del usuario

- GET (/api/to-do/:id) con el token por el header _Authorization_ y el Id del toDo en la url  retorna un arreglo con el toDos buscado en caso que no exista retorna null

- DELETE (/api/to-do/:id) con el token por el header _Authorization_ el Id del toDo en la url retorna true y el userId cuando fue eliminado exitosamente en caso contrario retorna error

- PATCH (/api/to-do/:id) con el token por el header _Authorization_ el Id del toDo en la url  y las modificaciones en un  body del siguiente estilo

    {
    "titulo":"Esto es una actualizacion",   
    "descripcion":"Estoy editando el toDo",
    "completado": true
    }

retorna un arreglo con el toDo actualizado

### Modificar usuario

- PATCH (/api/user/uploadPhoto) con una imagen en la peticion tipo files

- GET (/user/verify/:cryptoToken) donde verificaremos al usuario (se envia por email)

- PATCH (/api/user) con el token por el header _Authorization_ y un body del siguiente estilo (ningun campo es obligatorio)

      {
          "name": "Pruebaaa",

          "username": "pruebaaaa",

          "password": "pruebecita"
      }

- POST (/api/user/forgot/password) con el email en el body para resetear la nueva password

      {
          "email": "email@gmail.com"
      }

- POST (/api/user/reset) con la nueva password en el body para cambiar a la nueva que queremos y a través del header pasaremos el userid y cryptotoken

      {
          "password": "nuevaPassword123"
      }

### Historico busquedas

- POST (/api/historical/search) con el token por el header _Authorization_ y un body del siguiente estilo

      {
          "busqueda": "Pruebaaa"
      }

- GET (/api/historical/search) con el token por el header _Authorization_ y retorna un arreglo con todas busquedas del usuario, ordenadas por mas recientes, y el userId

- GET (/api/historical/search?limit=2) con el token por el header _Authorization_ y retorna un arreglo con las 2 últimas busquedas del usuario, ordenadas por mas recientes, y el userId. En el _query parameter_ limit, se puede poner la cantidad que queremos limitar los registros a obtener

## Verificación de token

En las rutas que requieran validacion de token, importaremos lo siguiente _const tokenValidator = require('../middlewares/tokenValidator')_ y lo añadiremos como middleware a la peticion

## Verificación de email

A través del servicio de nodemailer, enviaremos un correo al usuario para que verifique el email con el endpoint de verify/email. Si el usuario no ha verificado pasada una hora, se vuelve a iniciar el proceso de verificación, con nuevo correo (nueva url con nuevo cryptoToken)

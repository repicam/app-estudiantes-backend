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

# app-estudiantes-backend

Backend para la app de estudiantes

### Para empezar

1. Hacer un clone del repo
2. Ejecutamos _npm i_ para descargar las dependencias
3. Creamos un fichero .env con las variables de entorno que vayamos necesitando (puerto, accesos bbdd, etc) que no se subirá a github porque esta en el .gitignore
4. Para arrancar el servidor ejecutamos _npm run dev_: Esto ejecuta las reglas de eslint configuradas (paquete standard) y arranca el servidor

Para trabajar creamos una rama feature para el desarrollo y luego se solicita PR sobre develop

Necesitaremos un fichero .env con los campos PORT, BBDD_USER, BBDD_PASS, BBDD_CLUSTER y JWT_SECRET_KEY

## Endpoints

· POST (/api/registro) con un body del siguiente estilo

    {
        "username": "username",

        "name": "NombreYApellido",

        "email": "email@gmail.com",

        "password": "password"
    }

· POST (/api/renew) con el token por el header _Authorization_ y retorna uno nuevo con 12h mas

## Verificación de token

En las rutas que requieran validacion de token, importaremos lo siguiente _const tokenValidator = require('../middlewares/tokenValidator')_ y lo añadiremos como middleware a la peticion
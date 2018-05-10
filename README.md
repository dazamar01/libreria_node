# libreria_node

## Aspectos considerados
    Aspectos iniciales
        Configuración de Express
        Opciones de debug
        Configuración de Librerías
    Tooling
        Scripts npm
        ESLint
        Guia de estilo
        Refactorización
        Nodemon
    Template Engine
        EJS
    Routing
    Configuración de Base de Datos
        Instalación
    Autenticación
        Uso de librería <passport>, <cookie-parser> y <express-session>
        Autorización de usuarios
    Uso de Servicios
        API Calls
    Tentativamente
        uso de axios y xml2js


## IDE
    Visual Studio Code

## Complementos
    express     #framework para NodeJS
    eslint      #para cuidar el estandar
    nodemon     #autorestart the server
    ejs         #template engine
                ejs support para Code

    Bootstrapzerp => Storystrap         #templates

## Arrancar el server
    npm start

## Instalar las Librerías  
    npm install    

## Instalación de Librerías
    npm install --save express
    npm install chalk
    npm install bootstrap jquery       

    #instalar eslint local (recomendable)
    npm install eslint --save-dev
        #debe configurarse la acción lint en la sección de "scripts"   ==> 
            "lint": "eslint app.js"
        #de esta forma, será posible ejecutar un
            npm run lint

                #para ejecutar un eslint con correcciones potencialmente automáticas
                eslint app.js --fix

    npm run lint

    ##nodemon efectuará el reload de los cambios en automático, incluso permitirá efectuar reinicio del server por abreviaturas (rs)
    npm install nodemon
        ##configurar en package.json

    npm install ejs

    npm install mssql

    ##body parse
    npm install body-parser

    npm install passport cookie-parser express-session

    npm install passport-local

    ##instalar axios y xmltojs
    npm install axios xml2js


#########TIPS

ctrl + F2               #seleccionará todas las ocurrencias de la palabra (refactoring)
# Examen Integrador. Proyecto Diseño e Implementación de Sistemas Computacionales
*Realizar el siguiente trabajo en React Native.*
+ 1. Crear una Base de datos en MySql llamada: TP17.
+ 2. Crear una tabla llamada jugadores que contenga los campos de la tabla.
+ 3. Realizar CRUD para que la tabla tenga los sientes datos:
+ 4. Realizar las siguientes consultas – Agregarlas cada una en un button diferente
 - Listar todos los jugadores que sean de Nacionalidad Argentina
 - Listar todos los jugadores que tengan peso entre 75 y 80 kg.
 - Mostrar el jugador más alto.
  
## Instalación
1. Clonar el Repositorio:
Descarga el contenido del repositorio ejecutando el siguiente comando
 `git clone https://github.com/Nahuel1810/TP17-React-Native.git`

3. Instalar Dependencias:
Abre una terminal y navega hasta el directorio del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:
`npm install`

5. Configurar la Dirección IP:

Abre CMD y ejecuta ipconfig. Copia tu dirección IP y pégala en la variable "ip" dentro de App.js.

## Ejecutar el servidor y usar base de datos de manera local
1. Iniciar XAMPP: Abre XAMPP y activa "Apache" y "MySQL".
   
2. Importar Base de Datos: Importa el archivo "tp17.sql" en tu base de datos.
   
3. Iniciar el Servidor: En Visual Studio Code, abre una terminal. Navega a la carpeta "Database" con el comando cd Database.
Ejecuta el siguiente comando: `node app.js`

## Ejecutar aplicación cliente en Expo Go
Iniciar la Aplicación: Abre una terminal en el directorio del proyecto. Ejecuta el siguiente comando para iniciar la aplicación:
`npx expo start`
Escanea el código QR con la aplicación Expo Go en tu dispositivo.

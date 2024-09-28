//1. npm init, configuracion basica luego instalo express npm i express
//proyecto node con servidor en express 
const express = require('express')
const app = express()
//9. configurar dotenv
const dotenv = require('dotenv')
const cors = require('cors')
//conecta el api
const api = require('./routes/api.routes')
dotenv.config();
//10. crear variable entorno
const port = process.env.PORT;
const connectDatabase = require('./db/config');
connectDatabase();


//5. se instalan dos middlewares importantes 
app.use(express.json());    //permite leer json 
app.use(express.urlencoded({extended: false})); 
app.use(cors())
//trae todo lo de app que trae express 
app.use('/', api)
//2. poner a escuchar el servidor
//3. consola: node index.js encender servidor 
app.listen(port, () =>{
console.log(`servidor conectado en el puerto ${port}`)
})
//4. demonizar el servidor, detectar cambios y actualizar || instalar npm i nodemon
//se hace como un script en el package json "dev": "nodemon index.js"
//npm run dev || inicia el script dev que inicia nodemon
//6. instalar mongoose || npm install mongoose --save
//7. crear db y config.js || en config.js se saca el link de mongo atlas para conectar y se coloca la contraseña
//8. se instala dotenv para variables de entorno npm i dotenv
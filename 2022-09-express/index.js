/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/




const express = require("express");
const app = express();


app.use(express.text()) // con esto nuestra app puede entender texto del cliente
app.use(express.json())// procesar jsons
app.use(express.urlencoded({extended:false})) // manejo de datos desde un formulario

app.post('/user', (req, res) => {
    res.send("Nuevo usuario creado")
    console.log(req.body) //envio de informacion
})

/**
 * Cuando enviamos una peticion pose un contenido y
 * CABACERAS | headers :json
 *  -statusCode
 * Es metainformacion
 * ENDPOINT
 *  ruta desde donde se hizo la peticion
 * REQ
 *  es donde se guarda la informacion del cliente
 */


app.listen(3000);
console.log("Server on port", 3000);

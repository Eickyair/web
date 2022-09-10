/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/
// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream("./static/index.html")
//     read.pipe(res)
// })
// server.listen(3000)
// console.log("Server on port 3000")

//+ usanado EXPRESS
const express = require("express")
const app = express()

// app.get("/", (req, res) => {
//     res.sendFile("./static/index.html", {
//         root: __dirname // constante de node con el path de nuestro proyecto
//     })
// })

app.listen(3000)
console.log("Server on port 3000")
//+ ROUTING -> envio de informacion dependiendo de la ruta que se visite
app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/', (req, res) => {
    // res.end('Hello world')
    res.send('Hello world')
})

app.get('/wheater',(req, res) => {
    res.send("The current wheater is nice")
})

// cumpreba si las rutas anteriores son las buscadas y este es el caso por defecto
app.use((req, res) => {
    // codigo de estado - 404
    res.status(404).send('no se encontro tu pagina')
})




/**
 * HTTP
 * El servidor escucha las peticiones del cliente por diferentes tipos de
 * protocolos HTTP y hasta ahora solo hemos usado el metodo GET,POST(creacion),PUT(actualizacion)
 * DELETE (verbs http), PATCH(actualizacion de una parte de datos) 
 */
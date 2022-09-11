/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/
const express = require("express");
const { appendFile } = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
// envio de archivos por parte del servidor al cliente
app.get("/miarchivo", (req, res) => {
  res.sendFile("./cpcfi-logo.png", {
    root: __dirname,
  });
});

//formato de datos json

app.get("/user", (req, res) => {
  //no es necesario usar las dobles comillas
  res.json({
    name: "anvil",
    address: {
      city: "new york",
      street: "calle 123",
    },
    age: 30,
    puntos: [1, 2, 3],
  });
});
//-mr 204 - todo fue bien pero no voy a devolverte nada de contenido
// el navegador utiliza una cache para no hacer peticiones en cada momenta


app.get('/isAlive', (req, res) => {
    // ruta que utilizan muchos servidores para notificar que estan funcionando
    res.sendStatus(204)
    // sola mando un codigo de estado
})

app.listen(3000);
console.log("Server on port", 3000);

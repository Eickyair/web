/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/

const express = require("express");
const app = express();

//+ middlewares

// cualquier ruta de mi app pasa por este middleware -> para poder preprocesar informacion
app.use((req, res, next) => {
  console.log("paso por aqui") //debemos asegurarnos que cuando pase por este flujo termine y continue
  // mi logica
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next()
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all('/about',(req,res)=>{
  res.send('about page')
})

app.listen(3000);
console.log("Server on port", 3000);

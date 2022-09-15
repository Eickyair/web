/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/

const express = require("express");
const app = express();

//+ middlewares

//TODO el orden de los middlewares si afecta su funcionamiento y flujo


// este middleware afecta a todas las rutas que esten por debajo
app.use((req, res, next) => {
  // estos nospueden servir para autenticar informacion
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next()
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all('/about',(req,res)=>{
  res.send('about page')
})

// ruta que solo pueden acceder lo usuarios registrados
app.use((req,res,next)=>{
  if(req.query.login==='anvil@anvil.com'){  
    next()
  }else{
    res.send("no autorizado")
  }
})
app.get('/dashboard',(req,res)=>{
  res.send('Dashboard page')
})







app.listen(3000);
console.log("Server on port", 3000);

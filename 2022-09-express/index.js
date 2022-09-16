/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/

const express = require("express");
const morgan = require("morgan")
const app = express();


// REST es un conjunto de recomendaciones para nombrar nuestras rutas 

// el servidor es un intermediario entre la base de datos y el cliente
//+ middlewares -  morgan
/** nos permite loggear 
 * Existen muchos tipos para casi cualquier funcionalidad
*/
app.use(morgan('dev'))

// entonces para comprender json usamos un middleware
app.use(express.json())



app.get("/profile", (req, res) => {
  console.log(req.body)
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

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
//+ extraer desde la ruta los parametros PARAMS
app.get('/hello/:user', (req, res) => {
    console.log(typeof req.params.user) // saber el tipo de dato nos permite saber que metodos utilizar
    res.send(`Hello ${req.params.user.toUpperCase()}`)
})

app.get('/suma/:a/:b', (req, res) => {
    let { a, b } = req.params
    a = parseInt(a)
    b = parseInt(b)
    res.send(`Resultado: ${a+b}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username === "Anvil"){
        return res.sendFile("./cpcfi-logo.png",{
            root: __dirname
        })
    }
    res.send('el usuario no tiene permisos')
})

app.get('/nombre/:nombre/edad/:edad',(req,res)=>{
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.edad}`)    
})



app.listen(3000);
console.log("Server on port", 3000);

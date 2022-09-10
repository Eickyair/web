/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/
const express = require('express')
const { appendFile } = require('fs')
const app = express()
app.get('/products',(req,res)=>{
    res.send('creando productos')
})

app.put('/products', (req, res) => {
    res.send('actualizando productos')
})

app.post('/products', (req, res) => {
    res.send('creando un producto')
})

app.patch('/products', (req, res) => {
    res.send('actualizando una parte de los productos')
})

app.delete('/products', (req, res) => {
    res.send('eliminando un producto')
})
app.listen(3000)
console.log('Server on port',3000)

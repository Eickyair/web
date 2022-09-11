/* author:https://www.youtube.com/c/FaztTech
video: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=153s
*/




const express = require("express");
const app = express();


//+ cuando usamos ? estamos ante una querie -> informacion extra mandada al backend
app.get('/hello/:username',(req,res)=>{
    console.log(req.query)
    res.send(`Hell ${req.params.username}`)
})

app.get('/search',(req,res)=>{
    if(req.query.q === 'javascript books'){        // %20 -> " "
        res.send('lista de libros para javascript')
    }else{
        res.send('pagina normal')
    }
})


app.listen(3000);
console.log("Server on port", 3000);

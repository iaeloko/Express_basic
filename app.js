const express = require("express")
const app = express()
const port = 3000 // localhist 3000


//localhost:3000
app.get('/', (req, res)=> {
    res.send ("Hola a todos")

})

//localhost:3000/iaeloko
app.get('/iaeloko', (req, res)=> {
    res.send ("Hola a todos")

})


app.listen(port, () => {
    console.log("Server Listo")
})
     
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static('cliente'))

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/mostrar', (request, response) => {
    fs.readdir("./carpeta",(error, files) => {
        if(error){
            throw error
        }
        console.log(files)
        response.json({
            text: files
        })
    });
})
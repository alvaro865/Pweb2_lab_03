const fs = require('fs');

fs.readdir("./carpeta",(error, files) => {
    if(error){
        throw error
    }
    console.log("finalizando lectura");
    console.log(files);
});
console.log("inicializando lectura");
      

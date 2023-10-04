//Transpilar 
//EcmaScript EsModules
const express = require("express")


const app = express();
 const example = function ()
{
console.log("estoy escuchando")
}

app.listen(9000, example)
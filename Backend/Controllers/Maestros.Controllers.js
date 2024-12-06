// Faltaba el .js
import {modeloMaestros} from "../Models/Maestros.Model.js"

modeloMaestros.create({
    Nombre:"Carlos",
    Apepat:"Gutierrez",
    Correo:"carlosg@gmail.com"
},
{
    Nombre:"Liliana",
    Apepat:"Rojas",
    Correo:"lilianar@gmail.com"
});

export const testMaestro = ()=>{
    console.log("Funciona el controlador de Maestros")
}
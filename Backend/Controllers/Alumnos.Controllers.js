import { modeloAlumno } from "../Models/Alumnos.Model.js"; // Faltaba el .js

modeloAlumno.create({
    Nombre:"Salma",
    Apepat:"Padilla",
    Apemat:"Tapia"
},

{
    Nombre:"Kareli",
    Apepat:"Padilla",
    Apemat:"Tapia"
})

export const testAlumno = ()=>{
    console.log("Funciona el controlador de Alumnos")
}
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testAlumno } from "./Backend/Controllers/Alumnos.Controllers.js";
import { testMaestro } from "./Backend/Controllers/Maestros.Controllers.js";

dotenv.config() // Faltaba esto

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexión a la base de datos")
})

.catch((error)=>{
    console.log("No funciona la conexión a la base de datos", error)
})

const app=express();

app.use(cors())

app.listen(4000, ()=>{
    console.log("Se escucha el servidor correctamente")
    
})

//Model
testAlumno()
testMaestro()
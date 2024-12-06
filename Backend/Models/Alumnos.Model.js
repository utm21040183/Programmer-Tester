import {Schema, model} from "mongoose"; // Fataba model

const EsquemaAlumno= new Schema ({
    Nombre:{
        type:String
    },
    Apepat:{
        type:String
    },
    Apemat:{
        type:String
    }
})

//Aqui tenia "new model"
export const modeloAlumno = model ("Tabla de alumnos", EsquemaAlumno)
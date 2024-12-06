import {Schema, model} from "mongoose";

const EsquemaMaestros = new Schema({
    Nombre:{
        type:String
    },
    Apepat:{
        type:String
    },
    Correo:{
        type:String
    }
})

//Aqui tenia "new model" y faltaba el export
export const modeloMaestros = model("Tabla de Maestros", EsquemaMaestros);
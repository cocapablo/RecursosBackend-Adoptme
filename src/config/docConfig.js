import __dirname from "../utils/index.js";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación Api de mascotas",
            version: "1.0.0",
            description: "Definición de endpoints para la Api de mascotas"
        }
    },
    apis: [`${path.join(__dirname, "../docs/**/*.yaml")}`] //Estos son los archivos de configuración

}

//crear una variable que interprete las opciones
export const swaggerEspec = swaggerJsDoc(swaggerOptions);
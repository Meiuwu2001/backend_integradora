import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Docu API",
      description: "API Documentation for use",
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost", // Asegúrate de que esta URL sea correcta
      },
    ],
    schemes: ["https", "http"],
  },
  apis: ["src/routes/*.js"], // Archivos donde están definidas las rutas de la API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Cambia la exportación de default a una exportación con nombre
export default swaggerSpec;
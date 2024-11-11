import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Docu API",
      description: "API Documentation for use",
      servers: [
        { url: "https://backend-integradora.vercel.app" },
        { url: "http://localhost" },
      ],
      schemes: ["https", "http"], // Especificar los protocolos permitidos
    },
  },
  apis: ["src/routes/*.js"], // Archivos donde están definidas las rutas de la API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;

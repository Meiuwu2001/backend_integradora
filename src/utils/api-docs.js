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
      { url: "http://localhost", description: "Local development server" },
      {
        url: "https://backend-integradora.vercel.app",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Indica que se usa un token JWT
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Aplica seguridad por defecto a todas las rutas (opcional)
      },
    ],
  },
  apis: ["src/routes/*.js"], // Ajusta la ruta según tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;

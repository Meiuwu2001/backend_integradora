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
          : "http://localhost",
      }, // Usar Vercel URL en producción
    ],
    schemes: ["https", "http"],
  },
  apis: ["src/routes/*.js"],
};

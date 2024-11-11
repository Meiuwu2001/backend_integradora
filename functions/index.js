import app from "../src/app.js";

// Escucha en el puerto por defecto de Vercel (aunque normalmente no se necesita en serverless).
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;

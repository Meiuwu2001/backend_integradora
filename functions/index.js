import app from "../src/app.js";
import serverless from "serverless-http";

// const handler = serverless(app);

// export { handler };

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

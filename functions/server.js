import app from "../src/app.js";
import serverless from "serverless-http";

app.use("/.netlify/functions/server", router);

const handler = serverless(app);

export { handler };

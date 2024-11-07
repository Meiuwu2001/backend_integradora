import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const connect = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
};

export default connect;

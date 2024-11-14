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
    waitForConnections: true, // Espera por una conexión libre
    connectionLimit: 100, // Número máximo de conexiones simultáneas
    queueLimit: 0, // Sin límite de solicitudes en espera
  });
};

export default connect;

const mysql = require("mysql2/promise")


const connectionUrl = "db-rancheritos-tech.c9oysu6q83x5.us-east-2.rds.amazonaws.com"


const host = connectionUrl.hostname || "127.0.0.1";
const user = connectionUrl.username || "root";
const password = connectionUrl.password || "meimei";
const database = "dbintegradora"
const port = connectionUrl.port || "3306";

const connect = async () => {
    return await mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
      port: port,
    });
  };

  module.exports = connect
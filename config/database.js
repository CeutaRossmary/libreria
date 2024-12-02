const { Pool } = require("pg");

const conn = new Pool({
  user: "postgres",
  host: "localhost",
  database: "libreria",
  password: "1507",
  port: 5432,
});

module.exports = conn;

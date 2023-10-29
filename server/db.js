const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Blueeden13!",
    host: "localhost",
    port: "5432",
    database: "perntodo",
})
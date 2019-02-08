const express = require("express");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const cors =require('cors');
const morgan = require('morgan')
const session = require("express-session");
const Services = require("../Services/services");
const Api = require("../api/api");
const pg = require("pg");

const Pool = pg.Pool;
let app = express();

// initialise session middleware - flash-express depends on it
app.use(
  session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  })
);
// // initialise the flash middleware
app.use(flash());
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}
// define a connection string to be able to connect to the database.
const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://coder:pg123@localhost:5432/customerdb";
const pool = new Pool({
  connectionString,
  ssl: useSSL
});
// define instance of factory function
const services = Services(pool);
const api = Api(services);

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", {
    error: err
  });
}
// parse application/json
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.json());
//configure public for=lder for static files
app.use(express.static("public"));

app.get("/api/customers", api.getCustomers);
app.get("/api/customers/:id", api.getSingleCustomer);
app.post("/api/customers/add", api.add);
app.put("/api/customers/update/:id", api.updates);
app.delete("aprsi/customers/delete/:id", api.deleteId);

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server starting at PORT ${PORT}`));


import mysql2 from 'mysql2';
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'


//controllers
//user function handlers
import UserLoginHandler from "./controllers/user/userLoginHandler.js";
import UserRegisterHandler from './controllers/user/UserRegisterHandler.js';
import RequestClassHandler from './controllers/bloodbank/RequestClassHandler.js';



//Admin function handlers
import AdminLoginHandler from './controllers/Admin/AdminLoginHandler.js';
import AdminRegisterHandler from './controllers/Admin/AdminRegisterHandler.js';
import UpdateBlood from './controllers/bloodbank/UpdateStockHandler.js'
import UpdateHealthHandler from './controllers/bloodbank/UpdateHealthHandler.js';
import HandleRequestHandler from './controllers/bloodbank/HandleRequestHandler.js';

//dashboard
import DashboardHandler from './controllers/dashboard/DashboardHandler.js';
import SearchHandler from './controllers/bloodbank/SearchHandler.js';

//create the app
var app = express();

// middilewares set app to use the body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


var db = mysql2.createConnection({     // Make changes according to your connection with MYSQL workbench
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "bdms",
});

db.connect(function (err) {
  if (err) throw err;

    console.log("Connected!");

});

//user functionalities
UserRegisterHandler(app, db);
UserLoginHandler(app, db);
RequestClassHandler(app, db);

//Admin functionalities
AdminRegisterHandler(app, db);
AdminLoginHandler(app, db);
UpdateHealthHandler(app, db);
HandleRequestHandler(app, db);

//bloodbank functionalities
DashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);

//listening the port
app.listen(3001, (err) => {
  if (err) throw err;
  else console.log("listening to port : 3001");
});


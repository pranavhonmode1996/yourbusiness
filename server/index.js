process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const App = express();
const mongoose = require("mongoose");
require('./model/AdminModels');
const { MONGO_URI } = require("./keys/Key");
const PORT = process.env.PORT || 5000;
const multer = require('multer');
const fs = require('fs');



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })


dotenv.config();

App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
// Mongodb connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb database");
});

// Handling Errors while connecting mongodb database
mongoose.connection.on("error", (error) => {
  console.log("error occurred", error);
});


App.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.sendStatus(400); // Bad request
}

next();

})

App.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

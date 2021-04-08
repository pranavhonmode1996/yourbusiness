const express = require('express');
const SWRouter = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
  var upload = multer({ storage: storage })

SWRouter.post('/seller', (req, res) => {
})

SWRouter.post('worker', (req, res) => {
    
})

module.exports = SWRouter;
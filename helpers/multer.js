// const path = require('path')
const multer = require('multer')
const { HttpCode } = require('../helpers/constants')

require ('dotenv').config()
// const UPLOAD_DIR = path.join(process.cwd(), 'tmp')
const UPLOAD_DIR = process.env.UPLOAD_DIR

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true)
      return
      }
      const error = new Error('Wrong format file for avatar')
      error.status = HttpCode.BAD_REQUEST
       cb(error)
    // cb(null, false)
  },
});

module.exports = upload;
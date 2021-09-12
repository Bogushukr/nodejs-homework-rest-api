const app = require('../app')
const db = require('../db')
const creatFolder = require('../helpers/create-folder')
require ('dotenv').config()

const { PORT = 3000 } = process.env
const UPLOAD_DIR = process.env.UPLOAD_DIR
const AVATARS_OF_USERS = process.env.AVATARS_OF_USERS

db.then(() => {
  app.listen(PORT, async () => {
    await creatFolder(UPLOAD_DIR)
    await creatFolder(AVATARS_OF_USERS)
    console.log(`Server running. Use our API on port: ${PORT}`)
  });
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`)
  process.exit(1);
});

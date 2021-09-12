const app = require('../app')
const db = require('../db')
const creatFolder = require('../src/helpers/mkFolder')
require ('dotenv').config()

const { PORT = 3000 } = process.env

db.then(() => {
  app.listen(PORT, async () => {
    await mkFolder(UPLOAD_DIR)
    await mkFolder(AVATARS_OF_USERS)
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`);
  process.exit(1);
});

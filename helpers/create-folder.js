const fs = require('fs/promises')

const creatFolder = async path => {
  let isExists
  try {
    await fs.access(path)
    isExists = true
  } catch (error) {
    isExists = false
  }

  if (!isExists) {
    await fs.mkdir(path)
  }
}

module.exports = creatFolder
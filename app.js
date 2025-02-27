const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const { HttpCode } = require('./helpers/constants')
const contactsRouter = require('./routes/api/contacts')
const usersRouter = require('./routes/api/users')
const path = require('path')
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'


app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)

app.use((_, res) => {
  res.status(HttpCode.BAD_REQUEST)
    .json({ message: 'Not found' });
})

app.use((err, _, res, __) => {
  res
    .status(err.status || HttpCode.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
})

module.exports = app

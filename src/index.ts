import express from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import databaseServices from './services/database.services'
import { wrapAsync } from './utils/handler'
import { getRandomQuestionController } from './controllers/question.controllers'
const app = express()
const port = 3000

databaseServices.connect()

app.get('/', (req, res) => {
  res.send(`Project này đang chạy trên port ${port}`)
})

app.get('/questions/random', wrapAsync(getRandomQuestionController))

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Project này đang chạy trên port ${port}`)
})

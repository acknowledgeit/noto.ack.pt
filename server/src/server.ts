import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL || 'mongodb://localhost/noto'

const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    throw new Error('Failed to connect to database: ' + err)
  })

app.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT}`)
})

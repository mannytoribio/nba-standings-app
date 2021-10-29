import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { teamsRouter } from './routes/team.routes'

const app = express()
app.use(cors())
app.use(bodyParser())

app.use('/teams', teamsRouter)

app.listen(5000, () => {
  console.log('Listening on 5000')
})
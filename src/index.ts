import express, { Application, Request, Response } from 'express'
import connectDB from './utils/db.connect'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('huehuehuehuehueheu')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port ' + PORT))

connectDB()

import express, { Request, Response } from 'express'
import connectDB from './utils/db.connect'
import testRoutes from './routes/testPaths'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('huehuehuehuehueheu')
})

app.use(testRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port ' + PORT))

connectDB()

import express, { Request, Response } from 'express'
// import connectDB from './utils/db.connect'
import allRoutes from './routes'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('huehuehuehuehueheu')
})

app.use(allRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port ' + PORT))

// connectDB()

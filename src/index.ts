import express, { Application } from 'express'

const app: Application = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('huehuehuehuehueheu')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port ' + PORT))

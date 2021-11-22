import express, { Application, Request, Response } from 'express'

const app: Application = express()

export default app.get('/test', (Req: Request, Res: Response) => {
  console.log(Req)
  Res.status(200).send('Test route contacted')
})

app.get('/other', (Req: Request, Res: Response) => {
  console.log(Req)
  Res.status(201).send('Other route contacted')
})

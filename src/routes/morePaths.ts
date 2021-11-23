import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/secret', (req: Request, res: Response) => {
  console.log(req)
  res.status(200).send('I am from the new paths file')
})

routes.put('/pootis', (req: Request, res: Response) => {
  console.log(req.body)
  res.status(201).send('This was a put request but not really')
})

routes.put('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.status(201).send('api root put (I hope)')
})

export default routes

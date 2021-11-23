import { Request, Response, Router } from 'express'

const router = Router() //define a constant for express router

router.get('/test', (req: Request, res: Response) => {
  console.log(req)
  res.status(200).send('Test route contacted')
})

router.get('/other', (req: Request, res: Response) => {
  console.log(req)
  res.status(201).send('Other route contacted')
})

export default router //export our router

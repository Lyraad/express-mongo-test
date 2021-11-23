import { Router } from 'express'
import testPaths from './testPaths'
import extraPaths from './morePaths'

const routes = Router()

routes.use('/api', testPaths)
routes.use('/api', extraPaths)

export default routes

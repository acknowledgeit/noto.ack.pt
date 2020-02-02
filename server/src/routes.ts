import { Router } from 'express'
import AuthController from './controllers/AuthController'
import BlockController from './controllers/BlockController'
import PageController from './controllers/PageController'

const routes = Router()

routes.use('/auth', AuthController.routes)
routes.use('/page', PageController.routes)
routes.use('/block', BlockController.routes)

export default routes

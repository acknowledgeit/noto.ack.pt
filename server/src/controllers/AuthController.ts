import { Router, Request, Response, NextFunction } from 'express'
import User from '@schemas/User'
import authorize from '../middleware/authorize'

class AuthController {
  routes: Router

  constructor() {
    this.routes = Router()

    this.routes.get('/', this.session)
    this.routes.post('/login', this.login)
    this.routes.post('/logout', authorize, this.logout)
    this.routes.post('/recover', this.recover)
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    let user = new User({
      _id: 12394017517024,
      name: 'André',
      email: 'andre@example.com'
    })

    res.json(user)
  }

  async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    res.status(200).end()
  }

  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    res.status(501).end()
  }

  async session(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    res.status(501).end()
  }

  async recover(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    res.status(501).end()
  }
}

export default new AuthController()

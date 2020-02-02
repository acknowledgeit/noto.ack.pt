import { Router, Request, Response, NextFunction } from 'express'
import User from '../schemas/User'
import authorize from '../middleware/authorize'

class AuthController {
  routes: Router

  constructor() {
    this.routes = Router()

    this.routes.get('/', authorize, this.session)
    this.routes.post('/logout', authorize, this.logout)
  }

  async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    // TODO: Invalidate incoming JWT and return
    return res.status(200).end()
  }

  async session(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    // TODO: Validate incoming JWT and return session information
    return res.status(501).end()
  }

  async googleCallback(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    // TODO: Send request to google to exchange code for token
    // TODO: Create/retrieve matching Noto user account (by email)
    // TODO: Store Google Authentication token in Noto user account (with timestamp?)
    // TODO: Generate own JWT and return
    return res.status(501).end()
  }
}

export default new AuthController()

import { Request, Response, NextFunction } from 'express'

function authorize(req: Request, res: Response, next: NextFunction) {
  if (!req.user) return res.status(403).end()
  next()
}

export default authorize

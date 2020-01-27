import { Request, Response, Router } from 'express'
import Page from '@schemas/Page'

class PageController {
  routes: Router

  constructor() {
    this.routes = Router()

    this.routes.get('/', this.getAll)
    this.routes.get('/:id', this.get)
    this.routes.post('/', this.create)
    this.routes.delete('/:id', this.delete)
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const pages = await Page.find()
    return res.json(pages)
  }

  async get(req: Request, res: Response): Promise<Response> {
    try {
      let id = req.params.id

      if (!id)
        return res.status(400).json({
          error: { type: 'INVALID_PAGE_ID', msg: 'Invalid page id' }
        })

      const page = await Page.findOne({ _id: id })

      return res.json(page)
    } catch (e) {
      return res.status(400).json({
        error: { type: 'FAILED_PAGE_GET', msg: 'Failed to retrieve page' }
      })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    let page = new Page({
      title: req.body.title,
      content: req.body.content
    })

    let pages = await Page.create([page])

    return res.status(201).json(pages)
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    try {
      let id = req.params.id

      if (!id)
        return res.status(400).json({
          error: { type: 'INVALID_PAGE_ID', msg: 'Invalid page id' }
        })

      await Page.deleteOne({ _id: id })

      return res.status(200).end()
    } catch (e) {
      return res.status(400).json({
        error: { type: 'FAILED_PAGE_DELETE', msg: 'Failed to delete page' }
      })
    }
  }
}

export default new PageController()

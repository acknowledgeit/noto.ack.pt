import { Router, Request, Response, NextFunction } from 'express'
import Block from '../schemas/Block'

class BlockController {
  routes: Router

  constructor() {
    this.routes = Router()

    this.routes.get('/', this.getAll)
    this.routes.get('/:id', this.get)
    this.routes.post('/', this.create)
    this.routes.delete('/:id', this.delete)
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const blocks = await Block.find()
    return res.json(blocks)
  }

  async get(req: Request, res: Response): Promise<Response> {
    try {
      let id = req.params.id

      if (!id)
        return res.status(400).json({
          error: { type: 'INVALID_BLOCK_ID', msg: 'Invalid block id' }
        })

      const block = await Block.findOne({ _id: id })

      return res.json(block)
    } catch (e) {
      return res.status(400).json({
        error: { type: 'FAILED_BLOCK_GET', msg: 'Failed to retrieve block' }
      })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    let block = new Block({
      content: req.body.content
    })

    let blocks = await Block.create([block])

    return res.status(201).json(blocks)
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    try {
      let id = req.params.id

      if (!id)
        return res.status(400).json({
          error: { msg: 'Invalid block id', type: 'INVALID_BLOCK_ID' }
        })

      await Block.deleteOne({ _id: id })

      return res.status(200).end()
    } catch (e) {
      return res.status(400).json({
        error: { type: 'FAILED_BLOCK_DELETE', msg: 'Failed to delete block' }
      })
    }
  }
}

export default new BlockController()

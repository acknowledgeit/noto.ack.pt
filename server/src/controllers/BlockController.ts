import { Router } from 'express'
import Block from '@schemas/Block'

class BlockController {
  blocks = [
    { id: 0, type: 'image', content: 'https://placekitten.com/200/300' },
    { id: 1, type: 'text', content: 'Some random text block' }
  ]

  getAll() {
    return this.blocks
  }

  get(id: number) {
    return this.blocks.find(b => b.id == id)
  }
}

export default BlockController

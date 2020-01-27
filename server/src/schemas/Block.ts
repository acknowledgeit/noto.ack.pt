import mongoose, { Document, Schema } from 'mongoose'

export type Block = {
  content: string
  type: 'text' | 'image' | 'link'
} & Document

const BlockSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: 'text'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Block>('Block', BlockSchema)

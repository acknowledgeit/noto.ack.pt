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
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Page'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Block>('Block', BlockSchema)

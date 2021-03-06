import mongoose, { Document, Schema } from 'mongoose'
import { Block } from './Block'

export type Page = {
  title: string
  blocks: Array<Block>
} & Document

const PageSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Page'
    },
    blocks: [
      {
        block: {
          type: Schema.Types.ObjectId,
          ref: 'Block'
        },
        order: {
          type: Number,
          required: true,
          default: 0
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Page>('Page', PageSchema)

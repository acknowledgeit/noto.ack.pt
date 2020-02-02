import mongoose, { Document, Schema } from 'mongoose'
import { Page } from './Page'

export type User = {
  name: string
  email: string
  pages: Array<Page>
} & Document

const UserSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    pages: [
      {
        page: {
          type: Schema.Types.ObjectId,
          ref: 'Page'
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

export default mongoose.model<User>('User', UserSchema)

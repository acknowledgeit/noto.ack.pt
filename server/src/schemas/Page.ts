import mongoose, { Document, Schema } from 'mongoose'

type Page = Document & {}

const PageSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
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

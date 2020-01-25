import mongoose, { Document, Schema } from 'mongoose'

type Block = Document & {}

const BlockSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Block>('Block', BlockSchema)

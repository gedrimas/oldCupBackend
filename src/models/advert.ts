import mongoose, { model, Schema, Model, Document } from 'mongoose';

interface ImgSchema extends Document {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: string;
}

const ImageSchema: Schema = new Schema({
  fieldname: {
    type: String,
  },
  originalname: {
    type: String,
  },
  encoding: {
    type: String,
  },
  mimetype: {
    type: String,
  },
  destination: {
    type: String,
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  size: {
    type: Number,
  },
});

interface AdvSchema extends Document {
  sectionId: string;
  price: string;
  descriptionRu: string;
  descriptionEe: string;
  mainImage: string;
  images: ImgSchema[];
}
const AdvertSchema: Schema = new Schema({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
  },
  price: {
    type: String,
    requierd: true,
  },
  descriptionRu: {
    type: String,
  },
  descriptionEe: {
    type: String,
  },
  images: {
    type: [ImageSchema],
  },
  mainImage: {
    type: String,
  },
});

const Advert: Model<AdvSchema> = model('Advert', AdvertSchema);
export default Advert;

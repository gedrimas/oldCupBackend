import mongoose, { model, Schema, Model, Document } from 'mongoose';


interface AdvSchema extends Document {
  sectionId: string;
  mainPhoto: string;
  allPhotos: string[];
  price: string;
  ru: string;
  ee: string;
}
const AdvertSchema: Schema = new Schema({
  sectionId: {
    type: String,
    required: true
  },
  mainPhoto: {
    type: String,
    requierd: true,
  },
  allPhotos: {
    type: Array,
  },
  price: {
    type: String,
    required: true
  },
  ru: {
    type: String,
    required: true
  },
  ee: {
    type: String,
    required: true
  },
});

const Advert: Model<AdvSchema> = model('Advert', AdvertSchema);
export default Advert;

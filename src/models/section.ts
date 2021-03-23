import { model, Schema, Model, Document } from 'mongoose';

export interface SectionSchema extends Document {
  ru: string;
  ee: string;
}

const SectionSchema: Schema = new Schema({
  ru: {
    type: String,
    required: true,
  },
  ee: {
    type: String,
    required: true,
  },
});

const Section: Model<SectionSchema> = model('Section', SectionSchema);

export default Section;

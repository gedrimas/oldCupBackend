import { model, Schema, Model, Document } from 'mongoose';

interface SSchema extends Document {
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

const Section: Model<SSchema> = model('Section', SectionSchema);

export default Section;

import { model, Schema, Model, Document } from 'mongoose';

export interface ContactsSchema extends Document {
  ru: string;
  ee: string;
  email: string;
  phone: string;
}

const ContactsSchema: Schema = new Schema({
  ru: {
    type: String,
    required: true,
  },
  ee: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact: Model<ContactsSchema> = model('Contact', ContactsSchema);

export default Contact;

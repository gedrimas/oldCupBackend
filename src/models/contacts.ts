import { model, Schema, Model, Document } from 'mongoose';

export interface ContactsSchema extends Document {
  ruInfo: string;
  eeInfo: string;
  email: string;
  phone: string;
}

const ContactsSchema: Schema = new Schema({
  ruInfo: {
    type: String,
    required: true,
  },
  eeInfo: {
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

import { model, Schema, Model, Document } from 'mongoose';

interface ASchema extends Document {
  name: string;
  password: string;
}

const AdminSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin: Model<ASchema> = model('Admin', AdminSchema);

export default Admin;

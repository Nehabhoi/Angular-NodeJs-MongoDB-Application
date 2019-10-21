
import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface IIssue extends Document {
    title: String
    responsible: String 
    description:  String
    severity: String
    status: String,
}

const IssueSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  responsible: { type: String },
  description: { type: String, required: true },
  severity: { type :String},
  status: {String: String}
});

// Export the model and return your IUser interface
export default mongoose.model<IIssue>('Issue', IssueSchema);
import { Schema, Document, model, models, ObjectId } from "mongoose";

enum TodoPriority {
  Normal = 'Normal',
  Urgente = 'Urgente'
}

const schema = new Schema({
  title: String,
  description: String,
  priority: {
    type: String,
    enum: TodoPriority.Normal
  } 
})
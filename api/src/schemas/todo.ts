import { Schema, model, models } from "mongoose";

enum TodoPriority {
  low = 'low',
  normal = 'normal',
  urgent = 'urgent'
}

const schema = new Schema({
  description: String,
  priority: {
    type: String,
    enum: TodoPriority
  },
  status: {
    type: String,
    default: 'pending',
  }
},{ timestamps: true});

const Todo = models.todo || model('todo', schema);

export default Todo;
const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  creatorId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

TodoSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const modelName = "todo_record"
module.exports = model(modelName, TodoSchema)
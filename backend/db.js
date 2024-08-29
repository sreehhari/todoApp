const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.VITE_MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define the schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema);

// Export the model
module.exports = {
    Todo: Todo
}

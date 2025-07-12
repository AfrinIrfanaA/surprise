const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // To parse incoming JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas: ", err);
  });

// Define routes
const giftRouter = require('./routes/giftRouter');
app.use('/api/gifts', giftRouter); // Your API routes for the gifts

// Server listening on a port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

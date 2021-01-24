const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  profession: {
    type: String,
  },
  location: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
  bio: {
    type: String,
  },
  plants: [
    {
      image: {
        type: String,
        required: true,
      },
      plantName: {
        type: String,
        required: true,
      },
    },
  ],
  social: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

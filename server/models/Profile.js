const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
name: {
  type: String,
// required: true,
// unique: true,
// trim: true,
},
originalUser:{
  type: String
},
aboutMe: {
  type: String,
  trim: true,
  max: 280,
},
img:{
    type: String,
    data: Buffer,
},
posts: [
  {
    postText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    postAuthor: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
],
});

const Profile = model('Profile', profileSchema);
module.exports = Profile;
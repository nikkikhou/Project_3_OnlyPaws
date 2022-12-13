const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
name: {
  type: String,
// required: true,
// unique: true,
// trim: true,
},
aboutMe: {
  type: String,
  trim: true,
  max: 280,
},
img: { 
  data: Buffer, 
  contentType: String,
},
posts: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
}

});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
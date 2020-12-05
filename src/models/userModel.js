const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});


UserSchema.pre('save', function (next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
})



UserSchema.methods.passwordMatch = async function (userLoginPassword) {
  try {
    return await bcrypt.compare(userLoginPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = model('User', UserSchema);
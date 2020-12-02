const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const signupUser = (req, res) => {
  res.render('user/signupForm')
}

const loginUser = (req, res) => {
  res.render('user/loginForm')
}


const createUser = async (req, res) => {

  try {
    const { userName, email, password } = req.body;
    console.log('password inside cotroller', password)
    const user = new User({ userName, email, password });
    // user.password = await encryptePassword(password);
    await user.save();
    res.send('user created')
  } catch (error) {
    res.redirect('/signup')
    console.log(error)
  }
}

const getUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email });

  /**clg
   * verify password method 1
   */
  // const userPassword = user[0].password;
  // const correctPassword = await bcrypt.compare(password, userPassword);


  if (user) {
    const correctPassword = await user.passwordMatch(password)
    if (correctPassword) {
      res.redirect('/tasks')
    }
  } else {
    res.send('/login')
  }


}

/**
 * encrypt password method 1
 */
// const encryptePassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);
//   return hash
// }

// TODO: encriptar password utilizando bcrypt
//2. cuando guardo un usuaro nuevo el password de estar encriptado
//3. cuando logeo un user debo desencriptar el password
//* bono crear un middleware que oculte las rutas solo para usuaarios logeados
// cookie-session ->






module.exports = { createUser, loginUser, signupUser, getUser }
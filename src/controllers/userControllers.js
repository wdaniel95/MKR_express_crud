const User = require('../models/userModel');


const signupUser = (req, res) => {
  res.render('user/signupForm')
}

const loginUser = (req, res) => {
  res.render('user/loginForm')
}


const createUser = async (req, res) => {
  console.log(req.body)
  const { userName, email, password } = req.body;
  const user = new User({ userName, email, password });
  try {
    await user.save();
    res.send('user created')
  } catch (error) {
    // send message
    res.redirect('/signup')
    console.log(error)
  }
}

const getUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.find({ email });

  console.log(user)
  res.send(user)


}

// TODO: encriptar password utilizando bcrypt
//2. cuando guardo un usuaro nuevo el password de estar encriptado
//3. cuando logeo un user debo desencriptar el password
//* bono crear un middleware que oculte las rutas solo para usuaarios logeados
// cookie-session ->






module.exports = { createUser, loginUser, signupUser, getUser }
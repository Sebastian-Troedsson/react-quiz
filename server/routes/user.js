// const router = require("express").Router();
// const { check, validationResult } = require("express-validator");
// const bcrypt = require('bcryptjs');
// const User = require("../models/User");

// router.post(
//   "/",
//   [
//     check("email", "Must be an email").isEmail(),
//     check("password", "Must be at least 5 chars long").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     let user = await User.findOne({ email });

//     if(user) {
//       return res.status(422).json({ errors: ['Email already exists'] });
//     }

//     user = new User({
//       email,
//       password,
//     });

//     const salt = await bcrypt.genSalt(10);

//     user.password = await bcrypt.hash(password, salt);

//     await user.save();
//     res.status(201).end();
//   }
// );

// module.exports = router;

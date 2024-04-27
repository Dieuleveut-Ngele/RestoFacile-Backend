//const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { User } = new PrismaClient();

exports.login = async (req, res, next) => {
  const user = await User.findUnique({
    where: {
      email: req.body.email,
    },
  });

  try {
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    bcrypt.compare(req.body.password, user.password).then((valid) => {
      if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    });
  } catch (error) {}
};


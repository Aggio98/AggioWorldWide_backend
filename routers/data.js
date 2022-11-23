const { Router } = require("express");
//const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Event = require("../models").event;

const router = new Router();

//check many to many

router.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id, {
    include: {
      model: Event,
      through: {
        attributes: ["name", "email", "userId", "eventId", "quantity"],
      },
    },
  });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

module.exports = router;

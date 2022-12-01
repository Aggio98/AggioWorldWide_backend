const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Event = require("../models").event;
const Ticket = require("../models").orderTicket;

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

router.get("/events", async (req, res, next) => {
  const response = await Event.findAll();
  res.send(response);
});

module.exports = router;

router.post("/:id/events", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const { isSpeaker } = req.user;
    const {
      title,
      description,
      imageUrl,
      address,
      price,
      capacity,
      date,
      continent,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      imageUrl,
      address,
      price,
      date,
      capacity,
      continent,
      longitude,
      latitude,
      speakerId: user.id,
    });

    if (isSpeaker === false) {
      return res.status(400).send({
        message:
          "You do not have a Speaker account so you can not create an event",
      });
    }
    return res.status(201).send({ message: "Event created", event });
  } catch (e) {
    res.send(e);
  }
});

router.get("/details/:id", async (req, res, next) => {
  try {
    const eventId = parseInt(req.params.id);
    const getEvent = await Event.findByPk(eventId);
    if (getEvent) {
      res.send(getEvent);
    } else {
      req.status(404).send("Event not found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/orders/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    // const user = await User.findByPk(req.params.id);
    const { name, email, quantity, userId } = req.body;

    const ticket = await Ticket.create({
      name,
      email,
      userId,
      eventId: event.id,
      quantity,
    });
    return res.status(201).send({ message: "ticket created", ticket });
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

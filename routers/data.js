const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Event = require("../models").event;
const Ticket = require("../models").orderTicket;
const nodemailer = require("nodemailer");

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

router.post("/:id/events", authMiddleware, async (req, res, next) => {
  try {
    //const user = await User.findByPk(req.params.id);
    const { isSpeaker, id } = req.user;
    const {
      title,
      description,
      imageUrl,
      address,
      price,
      capacity,
      date,
      continent,
      longitude,
      latitude,
    } = req.body;
    console.log(req.body);

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
      speakerId: id,
    });
    console.log(event);

    if (isSpeaker === false) {
      return res.status(400).send({
        message:
          "You do not have a Speaker account so you can not create an event",
      });
    }
    return res.status(200).send({ message: "Event created", event });
  } catch (e) {
    console.log(e);
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
    //const user = await User.findByPk(req.params.id);
    console.log(req.body);
    const { name, quantity, email, userId } = req.body;

    const ticket = await Ticket.create({
      name,
      email,
      userId: userId,
      eventId: event.id,
      quantity,
    });
    console.log(userId, "userId");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "aggioDuthuit@gmail.com", pass: "gefbeqagoysjkmbi" },
    });
    console.log(transporter);
    const mailOptions = {
      from: "infoAggioWorldwide@gmail.com",
      to: email,
      subject: "Thank you for purchasing your event ticket!",
      text: "Watch this video to see a clip of what is to come! https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return res.status(201).send({ message: "ticket created", ticket });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = router;

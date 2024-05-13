const express = require('express');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');

const { Reservation } = new PrismaClient();

const app = express();

exports.sendEmail = async (req, res) => {
  const { reservationId } = req.body;

  try {
    const reservation = await Reservation.findUnique({
      where: {
        id: reservationId,
      },
      include: {
        user: true,
      },
    });

    if (!reservation) {
      return res.status(404).send('Réservation non trouvée');
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'dieuleveutngele@gmail.com',
        pass: 'caciel1997'
      }
    });

    const mailOptions = {
      from: 'dieuleveutngele@gmail.com',
      to: Reservation.User.email,
      subject: 'Confirmation de réservation',
      text: 'Votre réservation a été confirmée. Merci!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send("Erreur lors de l'envoi de l'email");
      } else {
        console.log('Email envoyé: ' + info.response);
        res.status(200).send('Email envoyé avec succès');
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de la réservation :', error);
    res.status(500).send('Erreur lors de la récupération de la réservation');
  }
};





/*const express = require('express');
const nodemailer = require('nodemailer');
const app = express();


app.use(express.json());

app.post('/sendEmail', (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'votreadresse@gmail.com',
      pass: 'votremotdepasse'
    }
  });

  const mailOptions = {
    from: 'votreadresse@gmail.com',
    to: email,
    subject: 'Confirmation de réservation',
    text: 'Votre réservation a été confirmée. Merci!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de l'envoi de l'email");
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Email envoyé avec succès');
    }
  });
});*/

